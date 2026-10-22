import { LANGUAGES, LANGUAGE_PATHS, useLanguage } from "../i18n/LanguageContext.jsx";

const NAMES = { fr: "Français", en: "English" };

// FR/EN switch as real links to each language's URL (crawlable, shareable).
// The current #section is carried over so visitors stay where they were.
export default function LanguageSwitcher({ dark = false }) {
  const { language, t } = useLanguage();

  const keepHash = (e) => {
    if (window.location.hash) e.currentTarget.href = `${e.currentTarget.pathname}${window.location.hash}`;
  };

  return (
    <nav aria-label={t.languageSwitcher.label}>
      <ul
        className={`flex items-center rounded-full border p-0.5 text-xs font-semibold ${
          dark ? "border-white/20 text-white/75" : "border-navy-200 text-navy-500"
        }`}
      >
        {LANGUAGES.map((lang) => {
          const active = lang === language;
          return (
            <li key={lang}>
              <a
                href={LANGUAGE_PATHS[lang]}
                hrefLang={lang}
                lang={lang}
                onClick={active ? (e) => e.preventDefault() : keepHash}
                aria-current={active ? "page" : undefined}
                aria-label={NAMES[lang]}
                className={`block min-w-[2.5rem] rounded-full px-2.5 py-1.5 text-center uppercase tracking-wide transition-colors duration-200 ${
                  active
                    ? dark
                      ? "bg-white text-navy-900"
                      : "bg-navy-900 text-white"
                    : dark
                      ? "hover:text-white"
                      : "hover:text-navy-900"
                }`}
              >
                {lang}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
