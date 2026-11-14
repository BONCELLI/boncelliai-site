import { translations } from "../i18n/translations.js";
import { LANGUAGES } from "../i18n/LanguageContext.jsx";
import { pagePath } from "../lib/routes.js";
import { siteConfig } from "../siteConfig.js";

// Builds the per-page, per-language <head> tags injected at build time by
// scripts/prerender.mjs: title, meta, canonical, hreflang, Open Graph,
// Twitter card and JSON-LD structured data.

const escapeAttr = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// JSON inside <script> must not be able to close the tag.
const safeJson = (data) => JSON.stringify(data).replace(/</g, "\\u003c");

export const pageUrl = (lang, page = "home") => `${siteConfig.siteUrl}${pagePath(lang, page)}`;

// Home uses the brand-level copy; inner pages have their own (t.pages.meta).
function pageMeta(lang, page) {
  const t = translations[lang];
  return page === "home" ? t.seo : t.pages.meta[page];
}

function structuredData(lang, page) {
  const t = translations[lang];
  const url = pageUrl(lang, page);
  const meta = pageMeta(lang, page);
  const inLanguage = lang === "fr" ? "fr-CA" : "en-CA";
  const orgId = `${siteConfig.siteUrl}/#organization`;
  const personId = `${siteConfig.siteUrl}/#person`;
  const sameAs = [siteConfig.upworkUrl, siteConfig.fiverrUrl, siteConfig.linkedinUrl, siteConfig.instagramUrl].filter(
    Boolean
  );
  const jobTitle = t.about.title.split("—")[1]?.trim();

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
        founder: { "@id": personId },
        areaServed: { "@type": "Place", name: "Worldwide" },
        availableLanguage: ["fr", "en"],
        knowsAbout: ["AI automation", "AI agents", "n8n", "Claude API", "OpenAI API", "Workflow automation"],
        sameAs,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t.offers.title,
          itemListElement: t.offers.items.map((offer) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: offer.name,
              description: `${offer.tagline} ${offer.features.join(", ")}.`,
              provider: { "@id": orgId },
            },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.ownerName,
        jobTitle,
        worksFor: { "@id": orgId },
        knowsLanguage: ["fr-CA", "en"],
        knowsAbout: ["AI automation", "n8n", "Claude API", "OpenAI API"],
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
        name: meta.title,
        description: meta.description,
        inLanguage,
        isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
        about: { "@id": orgId },
      },
      // The FAQ is only on the packages page, so its rich result lives there.
      page === "offers" && {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage,
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      page !== "home" && {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.pages.nav.home, item: pageUrl(lang) },
          { "@type": "ListItem", position: 2, name: t.pages.nav[page], item: url },
        ],
      },
    ].filter(Boolean),
  };
}

export function buildHead(lang, page = "home") {
  const t = translations[lang];
  const meta = pageMeta(lang, page);
  const other = lang === "fr" ? "en" : "fr";
  const url = pageUrl(lang, page);
  const ogImage = `${siteConfig.siteUrl}/og/og-${lang}.jpg`;

  const tags = [
    `<title>${escapeAttr(meta.title)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="author" content="${escapeAttr(siteConfig.ownerName)}" />`,
    `<link rel="canonical" href="${url}" />`,
    ...LANGUAGES.map((l) => `<link rel="alternate" hreflang="${l}" href="${pageUrl(l, page)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${pageUrl("fr", page)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${siteConfig.brandName}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeAttr(t.seo.ogImageAlt)}" />`,
    `<meta property="og:locale" content="${t.seo.locale}" />`,
    `<meta property="og:locale:alternate" content="${translations[other].seo.locale}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
    `<script type="application/ld+json">${safeJson(structuredData(lang, page))}</script>`,
  ];

  return tags.join("\n    ");
}
