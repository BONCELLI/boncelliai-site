import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import Logo from "./Logo.jsx";

// One link per page; the current page is highlighted (aria-current="page").
const NAV_PAGES = ["solutions", "tools", "offers", "about", "contact"];

export default function Navbar() {
  const { t, page, path } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the mobile menu and returns focus to its toggle.
  useEffect(() => {
    if (!mobileOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;
  const active = page;
  const links = NAV_PAGES.map((id) => ({ id, label: t.pages.nav[id] }));
  const close = () => setMobileOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${solid ? "" : "on-dark"}`}>
      <div
        aria-hidden="true"
        className="scroll-progress absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-accent-light to-accent"
      />
      <div className="mx-auto max-w-6xl px-3 pt-3 sm:px-6 sm:pt-4">
        <div
          className={`flex items-center justify-between rounded-2xl border px-4 py-2.5 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 sm:px-5 ${
            solid ? "border-navy-100 bg-paper/90 shadow-card" : "border-white/10 bg-navy-900/30"
          }`}
        >
          <a href={path("home")} className="-m-1 flex items-center rounded-lg p-1" aria-label={t.a11y.home} onClick={close}>
            <Logo dark={!solid} />
          </a>

          <nav aria-label={t.a11y.mainNav} className="hidden lg:block">
            <ul className="flex items-center gap-0.5 xl:gap-1">
              {links.map((link) => {
                const current = active === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={path(link.id)}
                      aria-current={current ? "page" : undefined}
                      className={`relative whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium transition-colors duration-200 xl:px-3.5 ${
                        solid
                          ? current
                            ? "bg-navy-50 text-navy-900"
                            : "text-navy-600 hover:bg-navy-50 hover:text-navy-900"
                          : current
                            ? "bg-white/10 text-white"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent transition-opacity duration-200 ${
                          current ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex xl:gap-3">
            <LanguageSwitcher dark={!solid} />
            <a href={path("contact")} className="btn-primary whitespace-nowrap px-4 py-2.5 xl:px-5">
              {t.nav.cta}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher dark={!solid} />
            <button
              ref={toggleRef}
              type="button"
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full ${
                solid ? "text-navy-900 hover:bg-navy-50" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? t.a11y.closeMenu : t.a11y.openMenu}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu: grid-rows trick animates height without measuring. */}
        <div
          id="mobile-menu"
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
            mobileOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className={`overflow-hidden ${mobileOpen ? "" : "invisible"}`}>
            <nav aria-label={t.a11y.mainNav} className="mt-2 rounded-2xl border border-navy-100 bg-paper p-3 shadow-card">
              <ul className="flex flex-col">
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={path(link.id)}
                      onClick={close}
                      aria-current={active === link.id ? "page" : undefined}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors duration-200 hover:bg-navy-50 ${
                        active === link.id ? "bg-navy-50 text-navy-900" : "text-navy-800"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a href={path("contact")} onClick={close} className="btn-primary mt-2 w-full">
                {t.nav.cta}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
