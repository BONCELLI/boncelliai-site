import { useState } from "react";
import { Plus } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import SectionHeading from "./SectionHeading.jsx";

// Accordion. Answers stay in the DOM (crawlable, matches FAQPage JSON-LD);
// closed panels are collapsed with the grid-rows trick and made invisible.
export default function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t border-navy-100 bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading id="faq-title" index="06" align="left" eyebrow={t.faq.eyebrow} title={t.faq.title} />
        </div>

        <div data-reveal className="divide-y divide-navy-100 border-y border-navy-100">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left text-base font-semibold text-navy-900 transition-colors duration-200 hover:text-accent-dark sm:text-lg"
                  >
                    {item.q}
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color] duration-300 ${
                        isOpen ? "rotate-45 border-accent bg-accent text-white" : "border-navy-200 text-accent group-hover:border-accent"
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className={`overflow-hidden ${isOpen ? "" : "invisible"}`}>
                    <p className="max-w-2xl pb-6 pr-12 text-[0.95rem] leading-relaxed text-navy-600">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
