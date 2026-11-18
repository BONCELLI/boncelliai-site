// Turns the client build into one static, fully rendered HTML page per
// page and language (dist/index.html = FR home, dist/en/index.html = EN home,
// dist/offres/index.html, dist/en/packages/index.html, ...), then writes
// 404.html, sitemap.xml and robots.txt. Run after `vite build` + `vite build --ssr`.
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render, head, pageUrl, PAGE_KEYS, pagePath } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
let template = await readFile(path.join(dist, "index.html"), "utf8");

// Inline the (small, ~8 kB gzip) stylesheet: removes the only render-blocking
// request, so the prerendered page paints as soon as the HTML arrives.
const cssLink = template.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
if (cssLink) {
  const css = await readFile(path.join(dist, cssLink[1]), "utf8");
  template = template.replace(cssLink[0], () => `<style>${css}</style>`);
}

// Preload the two text fonts used above the fold so they don't swap late.
const assets = await readdir(path.join(dist, "assets"));
const preloadFonts = assets
  .filter((file) => /^(space-grotesk|dm-sans)-latin-wght-normal.*\.woff2$/.test(file))
  .map((file) => `<link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin />`)
  .join("\n    ");

// Fetch the app chunk early (download only — it is evaluated after first paint, see src/main.jsx).
const preloadApp = assets
  .filter((file) => /^boot-.*\.js$/.test(file))
  .map((file) => `<link rel="modulepreload" href="/assets/${file}" />`)
  .join("\n    ");

const LANGS = ["fr", "en"];
const pages = PAGE_KEYS.flatMap((page) =>
  LANGS.map((lang) => ({ lang, page, out: path.join(dist, ...pagePath(lang, page).split("/").filter(Boolean), "index.html") }))
);

// Fail the build loudly rather than ship a half-prerendered page.
const require = (ok, what) => {
  if (!ok) throw new Error(`prerender: ${what} not found`);
};
require(cssLink, "stylesheet link");
require(preloadFonts.includes("space-grotesk") && preloadFonts.includes("dm-sans"), "font files");
require(preloadApp, "boot chunk");
for (const marker of ["<!--app-lang-->", "<!--app-head-->", "<!--app-html-->"]) {
  require(template.includes(marker), marker);
}

for (const { lang, page, out } of pages) {
  // Function replacers: rendered text may contain "$" sequences (e.g. "$1,248.50").
  const html = template
    .replace("<!--app-lang-->", () => (lang === "fr" ? "fr-CA" : "en-CA"))
    .replace("<!--app-head-->", () => `${head(lang, page)}\n    ${preloadFonts}\n    ${preloadApp}`)
    .replace("<!--app-html-->", () => render(lang, page));
  await mkdir(path.dirname(out), { recursive: true });
  await writeFile(out, html);
  console.log(`prerendered ${lang}/${page} -> ${path.relative(root, out)}`);
}

// 404.html: Cloudflare Pages serves it with a real 404 status for unknown
// URLs (instead of the home page with 200, a "soft 404" for Google). Same
// content as the FR home so visitors can keep browsing, but noindex and no
// canonical/hreflang.
const home = await readFile(path.join(dist, "index.html"), "utf8");
const notFound = home
  .replace(/<title>[^<]*<\/title>/, "<title>Page introuvable — BoncelliAI</title>")
  .replace(/\s*<link rel="(canonical|alternate)"[^>]*>/g, "")
  .replace("</title>", '</title>\n    <meta name="robots" content="noindex" />');
require(notFound.includes('content="noindex"'), "404 title");
await writeFile(path.join(dist, "404.html"), notFound);

const today = new Date().toISOString().slice(0, 10);
const alternates = (page) =>
  LANGS.map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${pageUrl(lang, page)}" />`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl("fr", page)}" />`)
    .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    ({ lang, page }) => `  <url>
    <loc>${pageUrl(lang, page)}</loc>
    <lastmod>${today}</lastmod>
${alternates(page)}
  </url>`
  )
  .join("\n")}
</urlset>
`;
await writeFile(path.join(dist, "sitemap.xml"), sitemap);

const origin = new URL(pageUrl("fr")).origin;
await writeFile(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);

await rm(ssrDir, { recursive: true, force: true });
console.log("sitemap.xml + robots.txt written");
