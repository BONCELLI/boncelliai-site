// Site map: every page exists once per language at its own clean URL
// (prerendered to <path>/index.html by scripts/prerender.mjs).
export const PAGE_KEYS = ["home", "solutions", "tools", "offers", "about", "contact"];

const PREFIX = { fr: "/", en: "/en/" };

export const SLUGS = {
  fr: { home: "", solutions: "solutions", tools: "outils", offers: "offres", about: "a-propos", contact: "contact" },
  en: { home: "", solutions: "solutions", tools: "tools", offers: "packages", about: "about", contact: "contact" },
};

export function pagePath(lang, page = "home") {
  const slug = SLUGS[lang]?.[page];
  return slug ? `${PREFIX[lang]}${slug}/` : PREFIX[lang] || "/";
}

export function routeFromPath(pathname = "/") {
  const lang = /^\/en(\/|$)/.test(pathname) ? "en" : "fr";
  const rest = pathname
    .replace(/^\/en(\/|$)/, "/")
    .replace(/index\.html$/, "")
    .replace(/^\/+|\/+$/g, "")
    .split("/")[0];
  const page = PAGE_KEYS.find((key) => SLUGS[lang][key] === rest) || "home";
  return { lang, page };
}
