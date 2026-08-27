import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

const SECTION_IDS = ["services", "about", "portfolio", "contact"];

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = SECTION_IDS.map((id) => ({ id, label: t.nav[id] }));

  const handleNavClick = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-md transition-all duration-300 sm:px-6 ${
            scrolled
              ? "border-navy-100 bg-white/85 shadow-card"
              : "border-white/10 bg-navy-900/40"
          }`}
        >
          <a
            href="#top"
            className="font-heading text-lg font-semibold tracking-tight"
          >
            <span className={scrolled ? "text-navy-900" : "text-white"}>Boncelli</span>
            <span className="text-accent">AI</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`cursor-pointer text-sm font-medium transition-colors duration-200 hover:text-accent ${
                  scrolled ? "text-navy-700" : "text-white/85"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <LanguageSwitcher dark={!scrolled} />
            <button
              onClick={() => handleNavClick("contact")}
              className="cursor-pointer rounded-full bg-accent px-4 py-2 text-sm font-semibold text-navy-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-card-hover"
            >
              {t.nav.cta}
            </button>
          </div>

          <button
            className={`cursor-pointer md:hidden ${scrolled ? "text-navy-900" : "text-white"}`}
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-navy-100 bg-white p-4 shadow-card">
                {links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="cursor-pointer rounded-lg px-3 py-2.5 text-left text-sm font-medium text-navy-700 transition-colors duration-200 hover:bg-navy-50 hover:text-accent-dark"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="mt-2 flex items-center justify-between px-3">
                  <LanguageSwitcher />
                  <button
                    onClick={() => handleNavClick("contact")}
                    className="cursor-pointer rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-dark"
                  >
                    {t.nav.cta}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
