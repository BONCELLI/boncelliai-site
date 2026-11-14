import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

// Desktop-only (the mobile sticky CTA owns the bottom of small screens).
export default function BackToTop() {
  const { t } = useLanguage();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setShown(window.scrollY > 900);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label={t.a11y.backToTop}
      aria-hidden={!shown}
      tabIndex={shown ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 hidden h-12 w-12 items-center justify-center rounded-full border border-navy-100 bg-paper/90 text-navy-700 shadow-card backdrop-blur-md transition-[transform,opacity,background-color,color] duration-300 hover:bg-navy-900 hover:text-white lg:flex ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </a>
  );
}
