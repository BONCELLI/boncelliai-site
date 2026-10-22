import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";

export { buildHead as head, pageUrl } from "./seo/head.js";

// Used at build time only (scripts/prerender.mjs) to emit static HTML per language.
export function render(language) {
  return renderToString(
    <React.StrictMode>
      <LanguageProvider language={language}>
        <App />
      </LanguageProvider>
    </React.StrictMode>
  );
}
