import { Mail, Linkedin, Instagram } from "lucide-react";
import { LANGUAGES, LANGUAGE_PATHS, useLanguage } from "../i18n/LanguageContext.jsx";
import { siteConfig } from "../siteConfig.js";
import Logo from "./Logo.jsx";

const SECTION_IDS = ["services", "roi", "process", "about", "faq", "contact"];
const NAMES = { fr: "Français", en: "English" };

export default function Footer() {
  const { t, language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-navy-950 pb-28 pt-16 text-navy-300 lg:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" aria-label={t.a11y.home} className="inline-block rounded-lg">
              <Logo dark tagline={t.hero.eyebrow} />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          <nav aria-labelledby="footer-nav">
            <h2 id="footer-nav" className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-white">
              {t.footer.linksTitle}
            </h2>
            <ul className="mt-4 space-y-1">
              {SECTION_IDS.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="inline-block py-1.5 text-sm transition-colors duration-200 hover:text-white">
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-white">{t.footer.contactTitle}</h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-block break-all py-1.5 text-sm transition-colors duration-200 hover:text-white"
            >
              {siteConfig.email}
            </a>
            <div className="mt-3 flex items-center gap-2">
              <SocialIcon href={`mailto:${siteConfig.email}`} label="Email">
                <Mail size={17} />
              </SocialIcon>
              {siteConfig.linkedinUrl && (
                <SocialIcon href={siteConfig.linkedinUrl} label="LinkedIn">
                  <Linkedin size={17} />
                </SocialIcon>
              )}
              {siteConfig.instagramUrl && (
                <SocialIcon href={siteConfig.instagramUrl} label="Instagram">
                  <Instagram size={17} />
                </SocialIcon>
              )}
            </div>
          </div>

          <nav aria-labelledby="footer-lang">
            <h2 id="footer-lang" className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-white">
              {t.languageSwitcher.label}
            </h2>
            <ul className="mt-4 space-y-1">
              {LANGUAGES.map((lang) => (
                <li key={lang}>
                  <a
                    href={LANGUAGE_PATHS[lang]}
                    hrefLang={lang}
                    lang={lang}
                    aria-current={lang === language ? "page" : undefined}
                    className={`inline-block py-1.5 text-sm transition-colors duration-200 hover:text-white ${
                      lang === language ? "text-white" : ""
                    }`}
                  >
                    {NAMES[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 font-mono text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.brandName}. {t.footer.rights}
          </p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-navy-300 transition-colors duration-200 hover:border-accent/50 hover:text-white"
    >
      {children}
    </a>
  );
}
