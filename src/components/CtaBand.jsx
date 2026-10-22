import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { LogoMark } from "./Logo.jsx";

// Mid-page conversion moment, after the commitments have built trust.
export default function CtaBand() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="cta-title" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          data-reveal
          className="on-dark relative isolate overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-14 text-center shadow-glow sm:px-12 sm:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_90%_at_50%_0%,black,transparent)]"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />
          <LogoMark className="mx-auto h-10 w-10 text-paper" />
          <h2 id="cta-title" className="mx-auto mt-6 max-w-2xl text-section font-semibold text-white">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">{t.cta.text}</p>
          <a href="#contact" className="btn-primary group mt-9">
            {t.cta.button}
            <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-navy-300">{t.cta.note}</p>
        </div>
      </div>
    </section>
  );
}
