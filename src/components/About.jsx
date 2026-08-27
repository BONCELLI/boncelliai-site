import { Globe2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import RevealSection from "./RevealSection.jsx";

export default function About() {
  const { t } = useLanguage();

  return (
    <RevealSection id="about" className="bg-navy-50/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-3">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            {t.about.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy-600">
            {t.about.paragraph1}
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy-600">
            {t.about.paragraph2}
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-accent-light">
              <Globe2 size={22} />
            </div>
            <dl className="mt-6 space-y-5">
              {t.about.highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-navy-100 pb-4 last:border-0 last:pb-0"
                >
                  <dt className="text-sm text-navy-500">{item.label}</dt>
                  <dd className="text-right text-sm font-semibold text-navy-900">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
