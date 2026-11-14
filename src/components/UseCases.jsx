import { useState } from "react";
import { AnimatePresence, LazyMotion, m } from "framer-motion";

const loadFeatures = () => import("../lib/motionFeatures.js").then((mod) => mod.default);
import { ArrowRight, TrendingUp } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { logoSrc } from "../data/logos.js";
import SectionHeading from "./SectionHeading.jsx";

const CATEGORY_KEYS = ["support", "sales", "admin", "ops"];

// Filterable gallery of real-world automation recipes. Cards animate in, out
// and across the grid when the filter changes (Framer Motion layout animations).
export default function UseCases({ index }) {
  const { t, path } = useLanguage();
  const [filter, setFilter] = useState("all");
  const items = t.cases.items.filter((item) => filter === "all" || item.category === filter);

  return (
    <section id="cases" aria-labelledby="cases-title" className="border-y border-navy-100 bg-bone py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="cases-title" index={index} eyebrow={t.cases.eyebrow} title={t.cases.title} subtitle={t.cases.subtitle} />

        <div data-reveal role="group" aria-label={t.cases.filterLabel} className="mt-12 flex flex-wrap justify-center gap-2">
          {["all", ...CATEGORY_KEYS].map((key) => {
            const active = key === filter;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                aria-pressed={active}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "border-navy-900 bg-navy-900 text-white"
                    : "border-navy-200 bg-white text-navy-600 hover:border-accent/60 hover:text-navy-900"
                }`}
              >
                {key === "all" ? t.cases.all : t.cases.categories[key]}
              </button>
            );
          })}
        </div>

        <div data-reveal className="mt-10">
          <LazyMotion features={loadFeatures}>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout" initial={false}>
                {items.map((item) => (
                  <m.li
                    layout
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    data-spotlight
                    className="spotlight group relative flex flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white p-7 shadow-card transition-[box-shadow,border-color] duration-300 hover:border-accent/30 hover:shadow-card-hover"
                  >
                    <div className="relative flex items-center justify-between gap-3">
                      <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-navy-400">
                        {item.industry}
                      </span>
                      <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[0.7rem] font-semibold text-accent-dark">
                        {t.cases.categories[item.category]}
                      </span>
                    </div>

                    <h3 className="relative mt-5 text-xl font-semibold tracking-tight text-navy-900">{item.title}</h3>
                    <p className="relative mt-2 text-[0.95rem] leading-relaxed text-navy-500">{item.problem}</p>

                    <div className="relative mt-6 rounded-2xl border border-navy-100 bg-bone/70 p-4">
                      <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-navy-400">
                        {t.cases.flowLabel}
                      </p>
                      <ol className="mt-3 space-y-2.5">
                        {item.flow.map((step, i) => (
                          <li key={step} className="flex items-start gap-3 text-sm text-navy-700">
                            <span
                              aria-hidden="true"
                              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[0.65rem] font-semibold ${
                                i === item.flow.length - 1 ? "bg-signal/15 text-emerald-700" : "bg-navy-900 text-white"
                              }`}
                            >
                              {i + 1}
                            </span>
                            <span className="leading-snug">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="relative mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
                      <p className="inline-flex items-center gap-1.5 rounded-full bg-signal/10 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                        <TrendingUp size={14} aria-hidden="true" />
                        <span className="sr-only">{t.cases.gainLabel}: </span>
                        {item.gain}
                      </p>
                      <ul className="flex flex-wrap items-center gap-1.5">
                        {item.tools.map((tool) => {
                          const src = logoSrc(tool);
                          return (
                            <li
                              key={tool}
                              className="flex h-7 items-center gap-1.5 rounded-full border border-navy-100 bg-white px-2 text-[0.7rem] font-medium text-navy-600"
                            >
                              {src && (
                                <img src={src} alt="" width="14" height="14" loading="lazy" decoding="async" className="h-3.5 w-3.5 object-contain" />
                              )}
                              {tool}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </m.li>
                ))}
              </AnimatePresence>
            </ul>
          </LazyMotion>
        </div>

        <div data-reveal className="mt-12 text-center">
          <a
            href={path("tools", "#diagnostic")}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-accent-dark transition-colors hover:text-navy-900"
          >
            {t.diagnostic.title}
            <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
