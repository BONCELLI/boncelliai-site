import { useEffect } from "react";
import { useLanguage } from "./i18n/LanguageContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrustStrip from "./components/TrustStrip.jsx";
import Services from "./components/Services.jsx";
import UseCases from "./components/UseCases.jsx";
import RoiCalculator from "./components/RoiCalculator.jsx";
import Diagnostic from "./components/Diagnostic.jsx";
import Process from "./components/Process.jsx";
import Offers from "./components/Offers.jsx";
import Commitments from "./components/Commitments.jsx";
import CtaBand from "./components/CtaBand.jsx";
import About from "./components/About.jsx";
import Faq from "./components/Faq.jsx";
import Contact from "./components/Contact.jsx";
import PageHero from "./components/PageHero.jsx";
import HomeExplore from "./components/HomeExplore.jsx";
import Footer from "./components/Footer.jsx";
import MobileCta from "./components/MobileCta.jsx";
import BackToTop from "./components/BackToTop.jsx";
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

// Cursor-following glow on [data-spotlight] cards (see .spotlight in
// index.css). One delegated listener; skipped entirely on touch devices.
function useSpotlight() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return undefined;
    const onMove = (e) => {
      const card = e.target.closest?.("[data-spotlight]");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
}

// What each page shows. Section numbers restart on every page.
const PAGES = {
  home: () => (
    <>
      <Hero />
      <TrustStrip />
      <HomeExplore />
      <CtaBand />
    </>
  ),
  solutions: () => (
    <>
      <PageHero />
      <Services index="01" />
      <UseCases index="02" />
      <CtaBand />
    </>
  ),
  tools: () => (
    <>
      <PageHero />
      <RoiCalculator index="01" />
      <Diagnostic index="02" />
      <CtaBand />
    </>
  ),
  offers: () => (
    <>
      <PageHero />
      <Offers index="01" />
      <Commitments index="02" />
      <Faq index="03" />
      <CtaBand />
    </>
  ),
  about: () => (
    <>
      <PageHero />
      <About index="01" />
      <Process index="02" />
      <CtaBand />
    </>
  ),
  contact: () => <Contact />,
};

export default function App() {
  const { t, page } = useLanguage();
  const Page = PAGES[page] || PAGES.home;
  useScrollReveal();
  useSpotlight();

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
        <Page />
      </main>
      <Footer />
      <MobileCta />
      <BackToTop />
      <LangSuggest />
    </>
  );
}
