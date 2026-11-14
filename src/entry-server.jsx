import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";

export { buildHead as head, pageUrl } from "./seo/head.js";
export { PAGE_KEYS, pagePath } from "./lib/routes.js";

// Used at build time only (scripts/prerender.mjs) to emit static HTML per page and language.
export function render(language, page = "home") {
  return renderToString(
    <React.StrictMode>
      <LanguageProvider language={language} page={page}>
        <App />
      </LanguageProvider>
    </React.StrictMode>
  );
}
