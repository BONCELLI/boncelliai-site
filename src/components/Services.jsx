import { Bot, Workflow, DatabaseZap, Plug } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import SectionHeading from "./SectionHeading.jsx";

// One icon per use case, in the same order as the FR/EN `services.items` arrays.
const ICONS = [Bot, Workflow, DatabaseZap, Plug];

// Bento layout on desktop: wide / narrow, then narrow / wide.
const SPANS = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-4"];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" aria-labelledby="services-title" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="services-title"
          index="01"
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {t.services.items.map((service, index) => {
            const Icon = ICONS[index];
            const featured = index === 0;
            return (
              <li
                key={service.title}
                data-reveal
                style={{ "--reveal-delay": `${(index % 2) * 90}ms` }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border p-7 transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-1 sm:p-9 ${SPANS[index]} ${
                  featured
                    ? "on-dark border-navy-800 bg-navy-900 text-white shadow-card hover:shadow-card-hover"
                    : "border-navy-100 bg-white shadow-card hover:border-accent/30 hover:shadow-card-hover"
                }`}
              >
                {featured && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-grid bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_80%_at_100%_0%,black,transparent)]"
                  />
                )}
                <div className="relative flex items-start justify-between">
                  <span
                    aria-hidden="true"
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 ${
                      featured
                        ? "bg-accent text-white"
                        : "bg-navy-900 text-accent-soft group-hover:bg-accent group-hover:text-white"
                    }`}
                  >
                    <Icon size={22} />
                  </span>
                  <span
                    aria-hidden="true"
                    className={`font-mono text-xs ${featured ? "text-navy-300" : "text-navy-400"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className={`relative mt-10 text-xl font-semibold tracking-tight sm:text-2xl ${
                    featured ? "text-white" : "text-navy-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`relative mt-3 max-w-md text-[0.95rem] leading-relaxed ${
                    featured ? "text-navy-200" : "text-navy-500"
                  }`}
                >
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>

        <div data-reveal className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-navy-400">
            {t.services.stackTitle}
          </p>
          <ul className="flex flex-wrap justify-center gap-2">
            {t.services.stack.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-navy-100 bg-white px-3.5 py-1.5 text-sm font-medium text-navy-700"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
