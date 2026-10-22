import { useLanguage } from "../i18n/LanguageContext.jsx";

// Slow marquee of the tools I integrate. The list is rendered twice for a
// seamless loop; the copy is hidden from assistive tech. Pauses on hover and
// becomes a static wrapped list for prefers-reduced-motion.
export default function TrustStrip() {
  const { t } = useLanguage();
  const tools = t.trust.tools;

  const item = (tool, i) => (
    <li key={`${tool}-${i}`} className="flex shrink-0 items-center gap-10 px-5">
      <span className="font-mono text-sm font-medium tracking-wide text-navy-500">{tool}</span>
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent/40" />
    </li>
  );

  return (
    <section aria-label={t.trust.label} className="border-b border-navy-100 bg-paper py-8 sm:py-10">
      <p className="px-4 text-center text-xs font-medium uppercase tracking-[0.18em] text-navy-400">{t.trust.label}</p>
      <div className="group relative mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:justify-center">
          <ul className="flex motion-reduce:flex-wrap motion-reduce:justify-center">{tools.map(item)}</ul>
          <ul className="flex motion-reduce:hidden" aria-hidden="true">
            {tools.map(item)}
          </ul>
        </div>
      </div>
    </section>
  );
}
