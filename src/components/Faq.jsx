import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import RevealSection from "./RevealSection.jsx";

export default function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <RevealSection id="faq" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent-dark">
            {t.faq.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            {t.faq.title}
          </h2>
        </div>

        <div className="divide-y divide-navy-100 border-y border-navy-100">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-base font-semibold text-navy-900 transition-colors duration-200 hover:text-accent-dark"
                  >
                    {item.q}
                    <Plus
                      size={20}
                      className={`shrink-0 text-accent transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 text-sm leading-relaxed text-navy-600">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
