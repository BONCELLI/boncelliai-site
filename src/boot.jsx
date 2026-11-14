import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";
import { routeFromPath } from "./lib/routes.js";

const { lang: language, page } = routeFromPath(window.location.pathname);
const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <LanguageProvider language={language} page={page}>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

// Production pages are prerendered (scripts/prerender.mjs): hydrate them.
// The dev server serves an empty shell, so render from scratch there.
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  document.documentElement.lang = language;
  createRoot(container).render(app);
}
