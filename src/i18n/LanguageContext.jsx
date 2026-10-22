import React, { createContext, useContext, useMemo } from "react";
import { translations } from "./translations.js";

export const LANGUAGES = ["fr", "en"];
export const DEFAULT_LANGUAGE = "fr";

// Each language lives at its own URL so search engines can index both
// versions (hreflang) and shared links open in the right language.
export const LANGUAGE_PATHS = { fr: "/", en: "/en/" };

export function languageFromPath(pathname = "/") {
  return pathname.startsWith("/en") ? "en" : DEFAULT_LANGUAGE;
}

const LanguageContext = createContext(null);

export function LanguageProvider({ language = DEFAULT_LANGUAGE, children }) {
  const value = useMemo(
    () => ({
      language,
      otherLanguage: language === "fr" ? "en" : "fr",
      t: translations[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// Access { language, otherLanguage, t } from any component.
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
