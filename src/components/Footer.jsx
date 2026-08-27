import { Mail, Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { siteConfig } from "../siteConfig.js";

const SECTION_IDS = ["services", "about", "portfolio", "contact"];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-navy-950 py-16 text-navy-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <a href="#top" className="font-heading text-lg font-semibold text-white">
              Boncelli<span className="text-accent">AI</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">{t.footer.linksTitle}</h3>
            <ul className="mt-4 space-y-2.5">
              {SECTION_IDS.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="cursor-pointer text-sm transition-colors duration-200 hover:text-accent-light"
                  >
                    {t.nav[id]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">{t.footer.contactTitle}</h3>
            <div className="mt-4 flex items-center gap-3">
              <SocialIcon href={`mailto:${siteConfig.email}`} label="Email">
                <Mail size={18} />
              </SocialIcon>
              {siteConfig.linkedinUrl && (
                <SocialIcon href={siteConfig.linkedinUrl} label="LinkedIn">
                  <Linkedin size={18} />
                </SocialIcon>
              )}
              {siteConfig.instagramUrl && (
                <SocialIcon href={siteConfig.instagramUrl} label="Instagram">
                  <Instagram size={18} />
                </SocialIcon>
              )}
            </div>
            <p className="mt-4 text-sm">{siteConfig.email}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
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
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 text-navy-300 transition-colors duration-200 hover:border-accent/40 hover:text-accent-light"
    >
      {children}
    </a>
  );
}
