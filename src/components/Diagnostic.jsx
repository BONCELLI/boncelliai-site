import { useState } from "react";
import { AnimatePresence, LazyMotion, MotionConfig, m } from "framer-motion";

const loadFeatures = () => import("../lib/motionFeatures.js").then((mod) => mod.default);
import { ArrowLeft, ArrowRight, Check, Clock3, Package, RotateCcw, Sparkles } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { requestPrefill } from "../lib/prefill.js";
import SectionHeading from "./SectionHeading.jsx";

// Answer index on question 2 (hours/week) -> midpoint used for the estimate,
// and which package fits (0 targeted, 1 agent, 2 partner).
const HOURS_MIDPOINT = [3, 7, 15, 25];
const HOURS_TO_OFFER = [0, 1, 1, 2];
const AUTOMATED_SHARE = 0.6;
const WEEKS = 48;

const slide = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
};

// Three-question quiz that suggests a first automation and pre-fills the
// contact form with the answers. Pure client state; nothing is sent anywhere.
export default function Diagnostic() {
  const { t, language } = useLanguage();
  const d = t.diagnostic;
  const [answers, setAnswers] = useState([]);
  const step = answers.length;
  const total = d.questions.length;
  const finished = step === total;

  const answer = (index) => setAnswers((prev) => [...prev, index]);
  const back = () => setAnswers((prev) => prev.slice(0, -1));
  const restart = () => setAnswers([]);

  const reco = finished ? d.recommendations[answers[0]] : null;
  const offer = finished ? t.offers.items[HOURS_TO_OFFER[answers[1]]] : null;
  const yearlyHours = finished ? Math.round(HOURS_MIDPOINT[answers[1]] * AUTOMATED_SHARE * WEEKS) : 0;
  const formatNumber = (n) => new Intl.NumberFormat(language === "fr" ? "fr-CA" : "en-CA").format(n);

  const prefill = () => {
    const message = d.prefill
      .replace("{task}", d.questions[0].options[answers[0]])
      .replace("{hours}", d.questions[1].options[answers[1]])
      .replace("{tools}", d.questions[2].options[answers[2]])
      .replace("{reco}", reco.title);
    requestPrefill({ topicIndex: answers[0], message });
  };

  return (
    <section id="diagnostic" aria-labelledby="diagnostic-title" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="diagnostic-title" index="04" eyebrow={d.eyebrow} title={d.title} subtitle={d.subtitle} />

        <div
          data-reveal
          className="mt-14 grid overflow-hidden rounded-[2rem] border border-navy-100 bg-white shadow-card lg:grid-cols-[0.85fr_1.3fr]"
        >
          {/* Left: progress + recap */}
          <div className="on-dark relative isolate flex flex-col justify-between bg-navy-900 p-7 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_70%_at_30%_0%,black,transparent)]"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />
            <div>
              <p className="eyebrow text-accent-soft">
                <Sparkles size={14} aria-hidden="true" />
                {d.eyebrow}
              </p>
              <p className="mt-6 font-heading text-3xl font-semibold text-white" aria-live="polite">
                {finished ? d.resultEyebrow : d.stepLabel.replace("{n}", step + 1).replace("{total}", total)}
              </p>
              <div className="mt-5 flex gap-2" aria-hidden="true">
                {d.questions.map((question, i) => (
                  <span
                    key={question.q}
                    className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                      i < step || finished ? "bg-accent-light" : i === step ? "bg-white/60" : "bg-white/15"
                    }`}
                  />
                ))}
              </div>
            </div>

            <ol className="mt-10 space-y-3">
              {d.questions.map((question, i) => {
                const chosen = answers[i];
                const done = chosen !== undefined;
                return (
                  <li
                    key={question.q}
                    className={`flex items-start gap-3 rounded-xl border px-3.5 py-3 text-sm transition-colors duration-300 ${
                      done
                        ? "border-signal/30 bg-signal/5 text-white"
                        : i === step
                          ? "border-accent/60 bg-accent/10 text-white"
                          : "border-white/10 text-navy-300"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[0.65rem] ${
                        done ? "bg-signal/20 text-emerald-300" : "bg-white/10"
                      }`}
                    >
                      {done ? <Check size={12} strokeWidth={3} /> : i + 1}
                    </span>
                    <span className="leading-snug">{done ? question.options[chosen] : question.q}</span>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Right: current question or result */}
          <LazyMotion features={loadFeatures}>
            <MotionConfig reducedMotion="user">
              <div className="relative min-h-[26rem] p-7 sm:p-10">
                <AnimatePresence mode="wait" initial={false}>
                  {!finished ? (
                    <m.div key={`q-${step}`} {...slide}>
                      <h3 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-[1.7rem]">
                        {d.questions[step].q}
                      </h3>
                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {d.questions[step].options.map((option, i) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => answer(i)}
                            className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-navy-200 bg-white p-4 text-left text-[0.95rem] font-medium text-navy-800 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-card-hover"
                          >
                            <span
                              aria-hidden="true"
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy-900 font-mono text-xs text-white transition-colors duration-200 group-hover:bg-accent"
                            >
                              {String.fromCharCode(65 + i)}
                            </span>
                            {option}
                          </button>
                        ))}
                      </div>
                      {step > 0 && (
                        <button
                          type="button"
                          onClick={back}
                          className="mt-7 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-navy-500 transition-colors hover:text-navy-900"
                        >
                          <ArrowLeft size={16} aria-hidden="true" />
                          {d.back}
                        </button>
                      )}
                    </m.div>
                  ) : (
                    <m.div key="result" {...slide}>
                      <h3 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-[1.7rem]">{reco.title}</h3>
                      <p className="mt-4 text-base leading-relaxed text-navy-600">{reco.text}</p>

                      <dl className="mt-7 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl border border-navy-100 bg-bone/70 p-4">
                          <dt className="flex items-center gap-2 text-xs text-navy-500">
                            <Package size={14} aria-hidden="true" className="text-accent-dark" />
                            {d.offerLabel}
                          </dt>
                          <dd className="mt-1.5 font-semibold text-navy-900">{offer.name}</dd>
                          <dd className="text-xs text-navy-500">{offer.delivery}</dd>
                        </div>
                        <div className="rounded-2xl border border-navy-100 bg-bone/70 p-4">
                          <dt className="flex items-center gap-2 text-xs text-navy-500">
                            <Clock3 size={14} aria-hidden="true" className="text-accent-dark" />
                            {t.roi.eyebrow}
                          </dt>
                          <dd className="mt-1.5 font-semibold text-navy-900">
                            {d.hoursLabel.replace("{n}", formatNumber(yearlyHours))}
                          </dd>
                          <dd className="text-xs text-navy-500">{d.hoursNote}</dd>
                        </div>
                      </dl>

                      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <a href="#contact" onClick={prefill} className="btn-primary group">
                          {d.cta}
                          <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
                        </a>
                        <button
                          type="button"
                          onClick={restart}
                          className="inline-flex cursor-pointer items-center justify-center gap-2 py-2 text-sm font-medium text-navy-500 transition-colors hover:text-navy-900"
                        >
                          <RotateCcw size={15} aria-hidden="true" />
                          {d.restart}
                        </button>
                      </div>
                      <p className="mt-4 text-xs leading-relaxed text-navy-500">{d.ctaNote}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            </MotionConfig>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
}
