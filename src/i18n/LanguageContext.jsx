import React, { createContext, useContext, useMemo } from "react";
import { translations } from "./translations.js";
import { pagePath } from "../lib/routes.js";

export const LANGUAGES = ["fr", "en"];
export const DEFAULT_LANGUAGE = "fr";

// Each language lives at its own URL so search engines can index both
// versions (hreflang) and shared links open in the right language.
export const LANGUAGE_PATHS = { fr: "/", en: "/en/" };

export function languageFromPath(pathname = "/") {
  return /^\/en(\/|$)/.test(pathname) ? "en" : DEFAULT_LANGUAGE;
}

const LanguageContext = createContext(null);

export function LanguageProvider({ language = DEFAULT_LANGUAGE, page = "home", children }) {
  const value = useMemo(
    () => ({
      language,
      otherLanguage: language === "fr" ? "en" : "fr",
      t: translations[language],
      page,
      // URL of another page in the current language, e.g. path("contact").
      path: (key, hash = "") => `${pagePath(language, key)}${hash}`,
    }),
    [language, page]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// Access { language, otherLanguage, t, page, path } from any component.
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
