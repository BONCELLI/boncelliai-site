import { translations } from "../i18n/translations.js";
import { LANGUAGES, LANGUAGE_PATHS } from "../i18n/LanguageContext.jsx";
import { siteConfig } from "../siteConfig.js";

// Builds the per-language <head> tags injected at build time by
// scripts/prerender.mjs: title, meta, canonical, hreflang, Open Graph,
// Twitter card and JSON-LD structured data.

const escapeAttr = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// JSON inside <script> must not be able to close the tag.
const safeJson = (data) => JSON.stringify(data).replace(/</g, "\\u003c");

export const pageUrl = (lang) => `${siteConfig.siteUrl}${LANGUAGE_PATHS[lang]}`;

function structuredData(lang) {
  const t = translations[lang];
  const url = pageUrl(lang);
  const orgId = `${siteConfig.siteUrl}/#organization`;
  const sameAs = [siteConfig.upworkUrl, siteConfig.fiverrUrl, siteConfig.linkedinUrl, siteConfig.instagramUrl].filter(
    Boolean
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": orgId,
        name: siteConfig.brandName,
        url: siteConfig.siteUrl,
        logo: `${siteConfig.siteUrl}/icons/icon-512.png`,
        image: `${siteConfig.siteUrl}/og/og-${lang}.jpg`,
        description: t.seo.description,
        email: siteConfig.email,
        founder: { "@type": "Person", name: siteConfig.ownerName, jobTitle: t.about.title.split("—")[1]?.trim() },
        areaServed: { "@type": "Place", name: "Worldwide" },
        availableLanguage: ["fr", "en"],
        knowsAbout: ["AI automation", "AI agents", "n8n", "Claude API", "OpenAI API", "Workflow automation"],
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.brandName,
        publisher: { "@id": orgId },
        inLanguage: ["fr-CA", "en-CA"],
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: t.seo.title,
        description: t.seo.description,
        inLanguage: lang === "fr" ? "fr-CA" : "en-CA",
        isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
        about: { "@id": orgId },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: lang === "fr" ? "fr-CA" : "en-CA",
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

export function buildHead(lang) {
  const t = translations[lang];
  const other = lang === "fr" ? "en" : "fr";
  const url = pageUrl(lang);
  const ogImage = `${siteConfig.siteUrl}/og/og-${lang}.jpg`;

  const tags = [
    `<title>${escapeAttr(t.seo.title)}</title>`,
    `<meta name="description" content="${escapeAttr(t.seo.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    ...LANGUAGES.map((l) => `<link rel="alternate" hreflang="${l}" href="${pageUrl(l)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${pageUrl("fr")}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${siteConfig.brandName}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${escapeAttr(t.seo.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(t.seo.description)}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeAttr(t.seo.ogImageAlt)}" />`,
    `<meta property="og:locale" content="${t.seo.locale}" />`,
    `<meta property="og:locale:alternate" content="${translations[other].seo.locale}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(t.seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(t.seo.description)}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
    `<script type="application/ld+json">${safeJson(structuredData(lang))}</script>`,
  ];

  return tags.join("\n    ");
}
