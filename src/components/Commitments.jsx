import { BadgeCheck, BookOpenText, KeyRound, BellRing } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import SectionHeading from "./SectionHeading.jsx";

// Same order as `commitments.items` in translations.js.
const ICONS = [BadgeCheck, KeyRound, BookOpenText, BellRing];

export default function Commitments() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="commitments-title" className="border-y border-navy-100 bg-bone py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            id="commitments-title"
            index="04"
            align="left"
            eyebrow={t.commitments.eyebrow}
            title={t.commitments.title}
            subtitle={t.commitments.subtitle}
          />
        </div>

        <ul className="grid gap-px overflow-hidden rounded-3xl border border-navy-100 bg-navy-100 sm:grid-cols-2">
          {t.commitments.items.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <li
                key={item.title}
                data-reveal
                style={{ "--reveal-delay": `${(index % 2) * 90}ms` }}
                className="bg-paper p-7 sm:p-8"
              >
                <Icon size={22} aria-hidden="true" className="text-accent" />
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-navy-900">{item.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-navy-500">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
