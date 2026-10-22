import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import WorkflowDemo from "./WorkflowDemo.jsx";

// Entrance cascade in pure CSS (plays before JS hydrates; disabled by
// prefers-reduced-motion in index.css). The h1 and lead paragraph are left
// un-animated so they paint immediately — they are the LCP candidates.
const RISE = "motion-safe:animate-rise-in";
const rise = (ms) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  const { t } = useLanguage();
  const titleLines = t.hero.title.split("\n");

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="on-dark relative isolate overflow-hidden bg-navy-900 pb-16 pt-28 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_70%_at_60%_30%,black,transparent)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.08fr_1fr] lg:gap-16">
        <div>
          <p
            style={rise(0)}
            className={`${RISE} eyebrow rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[0.7rem] text-accent-soft`}
          >
            <Sparkles size={14} aria-hidden="true" />
            {t.hero.eyebrow}
          </p>

          <h1 id="hero-title" className="mt-7 text-display font-semibold text-white">
            {titleLines.map((line, i) => (
              <span key={i} className="block">
                {i === titleLines.length - 1 ? <span className="text-accent-soft">{line}</span> : line}
              </span>
            ))}
          </h1>

          {/* Not animated either: on phones this paragraph is the LCP candidate. */}
          <p className="mt-7 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">{t.hero.subtitle}</p>

          <div style={rise(220)} className={`${RISE} mt-9 flex flex-col gap-3 sm:flex-row`}>
            <a href="#contact" className="btn-primary group">
              {t.hero.ctaPrimary}
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a href="#roi" className="btn-ghost-dark">
              {t.hero.ctaSecondary}
            </a>
          </div>

          <p style={rise(300)} className={`${RISE} mt-6 flex items-center gap-2.5 text-sm text-navy-200`}>
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            {t.hero.badge}
          </p>

          <dl
            style={rise(380)}
            className={`${RISE} mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-7`}
          >
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1.5 text-xs leading-snug text-navy-300">{stat.label}</dt>
                <dd className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div style={rise(260)} className={`${RISE} min-w-0`}>
          <WorkflowDemo />
        </div>
      </div>
    </section>
  );
}
