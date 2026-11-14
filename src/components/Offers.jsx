import { ArrowRight, Check, Clock3, Sparkles, Target } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { requestPrefill } from "../lib/prefill.js";
import SectionHeading from "./SectionHeading.jsx";

const FEATURED = 1; // index of the highlighted package

export default function Offers({ index }) {
  const { t, path } = useLanguage();

  return (
    <section id="offers" aria-labelledby="offers-title" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="offers-title" index={index} eyebrow={t.offers.eyebrow} title={t.offers.title} subtitle={t.offers.subtitle} />

        <ul className="mt-16 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {t.offers.items.map((offer, index) => {
            const featured = index === FEATURED;
            return (
              <li
                key={offer.name}
                data-reveal
                data-spotlight
                style={{ "--reveal-delay": `${index * 100}ms` }}
                className={`spotlight relative flex flex-col overflow-hidden rounded-3xl border p-7 transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-1 sm:p-9 ${
                  featured
                    ? "on-dark border-navy-800 bg-navy-900 text-white shadow-glow lg:-my-4"
                    : "border-navy-100 bg-white shadow-card hover:border-accent/30 hover:shadow-card-hover"
                }`}
              >
                {featured && (
                  <>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-grid bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
                    />
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-hero-glow" />
                  </>
                )}

                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <span className={`font-mono text-xs ${featured ? "text-navy-300" : "text-navy-400"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {featured && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-white">
                        <Sparkles size={12} aria-hidden="true" />
                        {t.offers.popular}
                      </span>
                    )}
                  </div>

                  <h3 className={`mt-6 text-2xl font-semibold tracking-tight ${featured ? "text-white" : "text-navy-900"}`}>
                    {offer.name}
                  </h3>
                  <p className={`mt-2 text-base ${featured ? "text-navy-200" : "text-navy-500"}`}>{offer.tagline}</p>

                  <dl
                    className={`mt-7 grid gap-3 rounded-2xl border p-4 text-sm ${
                      featured ? "border-white/10 bg-white/[0.04]" : "border-navy-100 bg-bone/70"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Clock3 size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-accent-light" />
                      <div>
                        <dt className={`text-xs ${featured ? "text-navy-300" : "text-navy-400"}`}>{t.offers.deliveryLabel}</dt>
                        <dd className={`font-semibold ${featured ? "text-white" : "text-navy-900"}`}>{offer.delivery}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-accent-light" />
                      <div>
                        <dt className={`text-xs ${featured ? "text-navy-300" : "text-navy-400"}`}>{t.offers.idealLabel}</dt>
                        <dd className={`font-semibold ${featured ? "text-white" : "text-navy-900"}`}>{offer.ideal}</dd>
                      </div>
                    </div>
                  </dl>

                  <ul className="mt-7 space-y-3">
                    {offer.features.map((feature) => (
                      <li key={feature} className={`flex items-start gap-3 text-sm ${featured ? "text-navy-100" : "text-navy-700"}`}>
                        <span
                          aria-hidden="true"
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            featured ? "bg-signal/20 text-emerald-300" : "bg-accent/10 text-accent-dark"
                          }`}
                        >
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={path("contact")}
                  onClick={() => requestPrefill({ message: `${offer.name} — ${offer.tagline}` })}
                  className={`group relative mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                    featured
                      ? "bg-accent text-white shadow-[0_12px_32px_-12px_rgba(91,75,255,0.9)] hover:bg-accent-dark"
                      : "border border-navy-200 bg-white text-navy-900 hover:border-navy-900"
                  }`}
                >
                  {t.offers.cta}
                  <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </li>
            );
          })}
        </ul>

        <p data-reveal className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-navy-500">
          {t.offers.note}
        </p>
      </div>
    </section>
  );
}
