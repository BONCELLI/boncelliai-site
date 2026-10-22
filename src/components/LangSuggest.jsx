import { useEffect, useState } from "react";
import { Languages, X } from "lucide-react";
import { LANGUAGE_PATHS, useLanguage } from "../i18n/LanguageContext.jsx";
import { translations } from "../i18n/translations.js";

const STORAGE_KEY = "boncelliai-lang-suggest-dismissed";

// If the visitor's browser prefers the *other* language, offer it once —
// written in that language. No automatic redirect (bad for SEO and for
// people who chose this page on purpose).
export default function LangSuggest() {
  const { language, otherLanguage } = useLanguage();
  const [visible, setVisible] = useState(false);
  const copy = translations[otherLanguage].langSuggest;

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // Storage blocked: just show the hint.
    }
    const preferred = (navigator.languages?.[0] || navigator.language || "").slice(0, 2).toLowerCase();
    if (!dismissed && preferred === otherLanguage && preferred !== language) {
      const id = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(id);
    }
    return undefined;
  }, [language, otherLanguage]);

  const dismiss = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Non-critical.
    }
  };

  if (!visible) return null;

  return (
    <div
      lang={otherLanguage}
      role="region"
      aria-label={copy.text}
      className="fixed inset-x-3 top-[4.75rem] z-40 motion-safe:animate-rise-in sm:inset-x-auto sm:right-6 sm:top-auto sm:bottom-6 sm:max-w-sm"
    >
      <div className="flex items-center gap-3 rounded-2xl border border-navy-100 bg-paper/95 p-3 pl-4 shadow-card-hover backdrop-blur-md">
        <Languages size={18} aria-hidden="true" className="shrink-0 text-accent" />
        <p className="flex-1 text-sm text-navy-700">{copy.text}</p>
        <a
          href={LANGUAGE_PATHS[otherLanguage]}
          hrefLang={otherLanguage}
          className="shrink-0 rounded-full bg-navy-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          {copy.action}
        </a>
        <button
          type="button"
          onClick={dismiss}
          aria-label={copy.dismiss}
          className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-navy-500 hover:bg-navy-50 hover:text-navy-900"
        >
          <X size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
