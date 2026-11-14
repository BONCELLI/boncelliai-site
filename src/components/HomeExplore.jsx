import { ArrowRight, Calculator, Layers, Package, UserRound } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import SectionHeading from "./SectionHeading.jsx";

// Home page index: one large card per inner page, so the landing page stays
// short and visitors jump straight to what they came for.
const ITEMS = [
  ["solutions", Layers],
  ["tools", Calculator],
  ["offers", Package],
  ["about", UserRound],
];

export default function HomeExplore() {
  const { t, path } = useLanguage();
  const e = t.pages.explore;

  return (
    <section id="explore" aria-labelledby="explore-title" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="explore-title" eyebrow={e.eyebrow} title={e.title} subtitle={e.subtitle} />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {ITEMS.map(([key, Icon], index) => {
            const card = e.cards[key];
            const featured = index === 0;
            return (
              <li
                key={key}
                data-reveal
                data-spotlight
                style={{ "--reveal-delay": `${(index % 2) * 90}ms` }}
                className={`spotlight group relative overflow-hidden rounded-3xl border transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-1 ${
                  featured
                    ? "on-dark border-navy-800 bg-navy-900 shadow-card hover:shadow-card-hover"
                    : "border-navy-100 bg-white shadow-card hover:border-accent/30 hover:shadow-card-hover"
                }`}
              >
                {featured && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-grid bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_80%_at_100%_0%,black,transparent)]"
                  />
                )}
                <a href={path(key)} className="relative flex h-full flex-col p-7 sm:p-9">
                  <div className="flex items-start justify-between">
                    <span
                      aria-hidden="true"
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 ${
                        featured ? "bg-accent text-white" : "bg-navy-900 text-accent-soft group-hover:bg-accent group-hover:text-white"
                      }`}
                    >
                      <Icon size={22} />
                    </span>
                    <span aria-hidden="true" className={`font-mono text-xs ${featured ? "text-navy-300" : "text-navy-400"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className={`mt-8 text-2xl font-semibold tracking-tight ${featured ? "text-white" : "text-navy-900"}`}>
                    {card.title}
                  </h3>
                  <p className={`mt-3 text-[0.97rem] leading-relaxed ${featured ? "text-navy-200" : "text-navy-500"}`}>{card.text}</p>
                  <span
                    className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold ${
                      featured ? "text-accent-soft" : "text-accent-dark"
                    }`}
                  >
                    {card.cta}
                    <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
