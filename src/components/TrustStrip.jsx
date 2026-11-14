import { useLanguage } from "../i18n/LanguageContext.jsx";
import { LOGOS } from "../data/logos.js";

// Two counter-scrolling rows of the tools I integrate (real brand marks from
// public/logos). Each row is rendered twice for a seamless loop; the copy is
// hidden from assistive tech. Pauses on hover and becomes a static wrapped
// list for prefers-reduced-motion.
const HALF = Math.ceil(LOGOS.length / 2);
const ROWS = [LOGOS.slice(0, HALF), LOGOS.slice(HALF)];

export default function TrustStrip() {
  const { t } = useLanguage();

  const item = (logo, i) => (
    <li
      key={`${logo.file}-${i}`}
      className="flex shrink-0 items-center gap-2.5 rounded-full border border-navy-100 bg-white px-4 py-2 shadow-[0_1px_2px_rgba(16,19,35,0.04)]"
    >
      <img
        src={`/logos/${logo.file}.svg`}
        alt=""
        width="20"
        height="20"
        loading="lazy"
        decoding="async"
        className="h-5 w-5 object-contain"
      />
      <span className="whitespace-nowrap text-sm font-medium text-navy-700">{logo.name}</span>
    </li>
  );

  return (
    <section aria-label={t.trust.label} className="border-b border-navy-100 bg-paper py-10 sm:py-12">
      <p className="px-4 text-center text-xs font-medium uppercase tracking-[0.18em] text-navy-400">{t.trust.label}</p>
      <div className="mt-6 space-y-3">
        {ROWS.map((row, r) => (
          <div
            key={r}
            className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
          >
            <div
              className={`flex w-max group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:justify-center ${
                r === 0 ? "animate-marquee" : "animate-marquee-reverse"
              }`}
            >
              <ul className="flex gap-3 pr-3 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-3 motion-reduce:px-4">
                {row.map(item)}
              </ul>
              <ul className="flex gap-3 pr-3 motion-reduce:hidden" aria-hidden="true">
                {row.map(item)}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 px-4 text-center font-mono text-xs text-navy-400">{t.trust.more}</p>
    </section>
  );
}
