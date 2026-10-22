import { useEffect } from "react";
import { useLanguage } from "./i18n/LanguageContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrustStrip from "./components/TrustStrip.jsx";
import Services from "./components/Services.jsx";
import RoiCalculator from "./components/RoiCalculator.jsx";
import Process from "./components/Process.jsx";
import Commitments from "./components/Commitments.jsx";
import About from "./components/About.jsx";
import Faq from "./components/Faq.jsx";
import CtaBand from "./components/CtaBand.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import MobileCta from "./components/MobileCta.jsx";
import LangSuggest from "./components/LangSuggest.jsx";

// One shared observer animates every [data-reveal] element once it scrolls
// into view (see index.css). Cheaper than one animation library per section.
// `html.js` (which hides pending elements) is only set here, once React is
// running — if the app chunk ever fails to load, the page simply stays visible.
function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }
    // Whatever is already on screen stays shown (no fade-out/fade-in flash).
    elements.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible");
    });
    document.documentElement.classList.add("js");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    elements.forEach((el) => {
      if (!el.classList.contains("is-visible")) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  const { t } = useLanguage();
  useScrollReveal();

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {t.a11y.skip}
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <TrustStrip />
        <Services />
        <RoiCalculator />
        <Process />
        <Commitments />
        <CtaBand />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileCta />
      <LangSuggest />
    </>
  );
}
