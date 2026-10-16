import { useLanguage } from "../i18n/LanguageContext.jsx";
import RevealSection from "./RevealSection.jsx";

export default function Process() {
  const { t } = useLanguage();

  return (
    <RevealSection id="process" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent-dark">
            {t.process.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            {t.process.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-500">{t.process.subtitle}</p>
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-3">
          {t.process.steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-navy-100 bg-paper p-8 shadow-card"
            >
              <span className="font-heading text-5xl font-semibold text-accent/25">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-500">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </RevealSection>
  );
}
