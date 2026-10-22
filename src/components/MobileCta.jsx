import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

// Sticky "Book a call" bar on small screens: appears once the hero's own
// CTAs have scrolled away, hides again when the contact form is on screen.
export default function MobileCta() {
  const { t } = useLanguage();
  const [heroVisible, setHeroVisible] = useState(true);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const hero = document.getElementById("top");
    const contact = document.getElementById("contact");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) setHeroVisible(entry.isIntersecting);
        if (entry.target === contact) setContactVisible(entry.isIntersecting);
      });
    });
    if (hero) observer.observe(hero);
    if (contact) observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  const shown = !heroVisible && !contactVisible;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-[transform,opacity] duration-300 lg:hidden ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      aria-hidden={!shown}
    >
      <a href="#contact" tabIndex={shown ? 0 : -1} className="btn-primary w-full shadow-glow">
        {t.nav.cta}
        <ArrowRight size={16} aria-hidden="true" />
      </a>
    </div>
  );
}
