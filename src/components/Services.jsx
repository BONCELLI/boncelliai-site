import { motion } from "framer-motion";
import { Bot, Workflow, DatabaseZap, Plug } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import RevealSection from "./RevealSection.jsx";

// One icon per use case, in the same order as the FR/EN `services.items` arrays.
const ICONS = [Bot, Workflow, DatabaseZap, Plug];

export default function Services() {
  const { t } = useLanguage();

  return (
    <RevealSection id="services" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent-dark">
            {t.services.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-500">
            {t.services.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {t.services.items.map((service, index) => {
            const Icon = ICONS[index];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group flex cursor-default gap-5 rounded-2xl border border-navy-100 bg-paper p-8 shadow-card transition-shadow duration-300 hover:border-accent/30 hover:shadow-card-hover"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-accent-light transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-500">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-wide text-navy-400">
            {t.services.stackTitle}
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
            {t.services.stack.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-navy-100 bg-white px-4 py-1.5 text-sm font-medium text-navy-700 shadow-sm"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </RevealSection>
  );
}
