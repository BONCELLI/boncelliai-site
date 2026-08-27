import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext.jsx";

// Compact FR/EN toggle. The active language slides under the letters
// with a spring transition — cheap (transform-only) and respects
// prefers-reduced-motion automatically via Framer Motion's layout animations.
export default function LanguageSwitcher({ dark = false }) {
  const { language, setLanguage, t } = useLanguage();

  const base = dark
    ? "border-white/20 text-white/70"
    : "border-navy-200 text-navy-500";
  const activeText = dark ? "text-navy-900" : "text-white";

  return (
    <div
      className={`relative flex items-center rounded-full border p-0.5 text-xs font-semibold ${base}`}
      role="group"
      aria-label={t.languageSwitcher.label}
    >
      {["fr", "en"].map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          className="relative z-10 cursor-pointer rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors duration-200"
          aria-pressed={language === lang}
        >
          <span className={language === lang ? activeText : ""}>{lang}</span>
          {language === lang && (
            <motion.span
              layoutId="lang-pill"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={`absolute inset-0 -z-10 rounded-full ${
                dark ? "bg-white" : "bg-navy-900"
              }`}
            />
          )}
        </button>
      ))}
    </div>
  );
}
