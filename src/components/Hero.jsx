import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import WorkflowDemo from "./WorkflowDemo.jsx";

// Staggered "cascade" entrance: eyebrow -> title lines -> subtitle -> CTAs -> demo.
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

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const titleLines = t.hero.title.split("\n");

  // Cursor spotlight: write CSS variables directly so mouse moves never re-render React.
  const handlePointerMove = (e) => {
    if (shouldReduceMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    sectionRef.current.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative overflow-hidden bg-navy-900 pb-20 pt-32 sm:pb-28 sm:pt-36 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "radial-gradient(520px circle at var(--spot-x, 70%) var(--spot-y, 30%), rgba(91,75,255,0.16), transparent 65%)",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-accent-dark/25 blur-3xl" />

      <motion.div
        variants={shouldReduceMotion ? undefined : container}
        initial={shouldReduceMotion ? undefined : "hidden"}
        animate={shouldReduceMotion ? undefined : "show"}
        className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-14"
      >
        <div>
          <motion.span
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wide text-accent-light"
          >
            <Sparkles size={14} />
            {t.hero.eyebrow}
          </motion.span>

          <h1 className="font-heading text-[2.4rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.1rem] xl:text-[3.4rem]">
            {titleLines.map((line, i) => (
              <motion.span key={i} variants={item} className="block">
                {i === titleLines.length - 1 ? (
                  <span className="bg-gradient-to-r from-accent-light via-[#a99fff] to-accent bg-clip-text text-transparent">
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
            className="mt-6 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <motion.button
              onClick={() => scrollTo("contact")}
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(91,75,255,0.9)] transition-colors duration-200 hover:bg-accent-light"
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>

            <button
              onClick={() => scrollTo("roi")}
              className="cursor-pointer rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/10"
            >
              {t.hero.ctaSecondary}
            </button>
          </motion.div>

          <motion.div variants={item} className="mt-7 flex items-center gap-2 text-xs text-navy-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t.hero.badge}
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-7"
          >
            {t.hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-2xl font-semibold text-white sm:text-[1.7rem]">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-navy-300">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div variants={item}>
          <WorkflowDemo />
        </motion.div>
      </motion.div>
    </section>
  );
}
