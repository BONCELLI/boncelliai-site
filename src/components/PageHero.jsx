import { ChevronRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

// Dark header for inner pages: breadcrumb, h1, intro and "on this page"
// jump links. Same backdrop family as the home hero, but much shorter.
export default function PageHero() {
  const { t, page, path } = useLanguage();
  const meta = t.pages.meta[page];

  return (
    <section
      id="top"
      aria-labelledby="page-title"
      className="on-dark relative isolate overflow-hidden bg-navy-900 pb-14 pt-32 sm:pb-20 sm:pt-40"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute -top-48 left-[65%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/25 blur-3xl will-change-transform motion-safe:animate-aurora" />
        <div className="absolute -left-32 top-1/4 h-[20rem] w-[20rem] rounded-full bg-accent-light/15 blur-3xl will-change-transform motion-safe:animate-aurora-alt" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_80%_at_70%_0%,black,transparent)]"
      />
      <div aria-hidden="true" className="noise pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav aria-label={t.pages.breadcrumb}>
          <ol className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-navy-300">
            <li>
              <a href={path("home")} className="transition-colors duration-200 hover:text-white">
                {t.pages.nav.home}
              </a>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={12} />
            </li>
            <li aria-current="page" className="text-accent-soft">
              {t.pages.nav[page]}
            </li>
          </ol>
        </nav>

        <h1
          id="page-title"
          className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
        >
          {meta.heading}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">{meta.intro}</p>

        {meta.anchors.length > 0 && (
          <div className="mt-9 flex flex-wrap items-center gap-2.5">
            <span className="mr-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-navy-400">{t.pages.onThisPage}</span>
            {meta.anchors.map((anchor) => (
              <a
                key={anchor.id}
                href={`#${anchor.id}`}
                className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/85 transition-colors duration-200 hover:border-accent/50 hover:bg-white/10 hover:text-white"
              >
                {anchor.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
