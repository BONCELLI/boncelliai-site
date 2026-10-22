import { useLanguage } from "../i18n/LanguageContext.jsx";
import SectionHeading from "./SectionHeading.jsx";

// Three steps joined by a "signal line" that runs through their markers.
export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" aria-labelledby="process-title" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="process-title"
          index="03"
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          subtitle={t.process.subtitle}
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-gradient-to-b from-accent via-accent/40 to-navy-100 md:bottom-auto md:left-[1.4rem] md:right-[1.4rem] md:top-[1.4rem] md:h-px md:w-auto md:bg-gradient-to-r"
          />
          {t.process.steps.map((step, index) => (
            <li
              key={step.title}
              data-reveal
              style={{ "--reveal-delay": `${index * 120}ms` }}
              className="relative pl-16 md:pl-0"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 bg-paper font-mono text-sm font-medium text-accent-dark shadow-[0_0_0_6px_#fbfaf7] md:relative"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-navy-900 md:mt-8">{step.title}</h3>
              <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-navy-500">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
