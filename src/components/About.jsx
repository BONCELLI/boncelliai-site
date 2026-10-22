import { useLanguage } from "../i18n/LanguageContext.jsx";
import { LogoMark } from "./Logo.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function About() {
  const { t } = useLanguage();
  const [name, rawRole = ""] = t.about.title.split(" — ");
  const role = rawRole.charAt(0).toUpperCase() + rawRole.slice(1);

  return (
    <section id="about" aria-labelledby="about-title" className="bg-paper pb-24 pt-4 sm:pb-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-20">
        <div>
          <SectionHeading id="about-title" index="05" align="left" eyebrow={t.about.eyebrow} title={t.about.title} />
          <div data-reveal className="mt-7 space-y-4 text-base leading-relaxed text-navy-600 sm:text-lg">
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
          </div>
        </div>

        <aside data-reveal style={{ "--reveal-delay": "120ms" }} aria-label={name} className="relative">
          <div className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card">
            <div className="on-dark relative isolate flex items-center gap-4 bg-navy-900 px-7 py-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-[size:32px_32px] [mask-image:linear-gradient(90deg,transparent,black)]"
              />
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-800 ring-1 ring-white/10">
                <LogoMark className="h-8 w-8 text-paper" />
              </span>
              <div>
                <p className="font-heading text-lg font-semibold text-white">{name}</p>
                <p className="text-sm text-navy-300">{role}</p>
              </div>
            </div>
            <dl className="divide-y divide-navy-100 px-7">
              {t.about.highlights.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-6 py-4">
                  <dt className="text-sm text-navy-500">{item.label}</dt>
                  <dd className="text-right text-sm font-semibold text-navy-900">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
}
