import { ImageIcon } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import RevealSection from "./RevealSection.jsx";

// Replace this array with real projects when they're ready:
// { title, description, tag } — add an image by swapping the
// placeholder <div> below for an <img>.
const PLACEHOLDER_COUNT = 3;

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <RevealSection id="portfolio" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            {t.portfolio.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            {t.portfolio.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-500">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
            <div
              key={index}
              className="group cursor-default overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <div className="flex aspect-video items-center justify-center bg-navy-50 text-navy-300 transition-colors duration-300 group-hover:text-accent">
                <ImageIcon size={32} />
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-navy-900">
                  {t.portfolio.placeholderTitle}
                </h3>
                <p className="mt-2 text-sm text-navy-500">{t.portfolio.placeholderText}</p>
                <span className="mt-4 inline-block rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-400">
                  {t.portfolio.cta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
