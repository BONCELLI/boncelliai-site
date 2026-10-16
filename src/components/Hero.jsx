import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, Mail, Bot, Send } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

// Staggered "cascade" entrance: eyebrow -> title words -> subtitle -> CTAs.
// Each child's animation is driven by the shared `container` variant below,
// so the whole hero plays as one coordinated sequence on first paint.
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const titleLines = t.hero.title.split("\n");

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-900 pb-24 pt-40 sm:pb-32 sm:pt-48"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-accent-dark/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

      <motion.div
        variants={shouldReduceMotion ? undefined : container}
        initial={shouldReduceMotion ? undefined : "hidden"}
        animate={shouldReduceMotion ? undefined : "show"}
        className="relative mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wide text-accent-light"
        >
          <Sparkles size={14} />
          {t.hero.eyebrow}
        </motion.span>

        <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          {titleLines.map((line, i) => (
            <motion.span key={i} variants={item} className="block">
              {i === titleLines.length - 1 ? (
                <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
                  {line}
                </span>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-navy-200 sm:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            initial={shouldReduceMotion ? undefined : { scale: 0.9, opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 260, damping: 14 }}
            className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-navy-900 shadow-card transition-colors duration-200 hover:bg-accent-light"
          >
            {t.hero.ctaPrimary}
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </motion.button>

          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="cursor-pointer rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/10"
          >
            {t.hero.ctaSecondary}
          </button>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex items-center gap-2 text-xs text-navy-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {t.hero.badge}
        </motion.div>

        <motion.div variants={item} className="mt-14 w-full">
          <WorkflowDiagram flow={t.hero.flow} />
        </motion.div>

        <motion.dl
          variants={item}
          className="mt-10 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8"
        >
          {t.hero.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs text-navy-300 sm:text-sm">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}

// Decorative "n8n-style" flow: trigger -> AI agent -> action. Shows the service at a glance.
function WorkflowDiagram({ flow }) {
  const nodes = [
    { icon: Mail, label: flow.trigger, text: flow.triggerText, highlight: false },
    { icon: Bot, label: flow.agent, text: flow.agentText, highlight: true },
    { icon: Send, label: flow.action, text: flow.actionText, highlight: false },
  ];

  return (
    <div
      className="mx-auto flex max-w-3xl flex-col items-stretch gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-0 sm:p-5"
      role="img"
      aria-label={nodes.map((n) => `${n.label}: ${n.text}`).join(" → ")}
    >
      {nodes.map((node, i) => {
        const Icon = node.icon;
        return (
          <div key={node.label} className="flex flex-1 flex-col items-stretch sm:flex-row sm:items-center">
            <div
              className={`flex flex-1 items-center gap-3 rounded-xl border px-4 py-3 text-left ${
                node.highlight
                  ? "border-accent/60 bg-accent/15 shadow-[0_0_32px_-8px_rgba(91,75,255,0.7)]"
                  : "border-white/10 bg-navy-900/60"
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                  node.highlight ? "bg-accent text-white" : "bg-white/10 text-accent-light"
                }`}
              >
                <Icon size={18} />
              </span>
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-wide text-accent-light">
                  {node.label}
                </span>
                <span className="block text-sm text-white">{node.text}</span>
              </span>
            </div>
            {i < nodes.length - 1 && (
              <span aria-hidden="true" className="mx-auto h-4 w-px bg-gradient-to-b from-accent-light to-accent-dark sm:mx-0 sm:h-px sm:w-6 sm:bg-gradient-to-r" />
            )}
          </div>
        );
      })}
    </div>
  );
}
