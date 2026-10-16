import { useEffect, useState } from "react";
import { useReducedMotion, useSpring } from "framer-motion";
import { ArrowRight, Clock3, Wallet } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import RevealSection from "./RevealSection.jsx";

const WORK_WEEKS_PER_YEAR = 48;
const HOURS_PER_WORK_WEEK = 40;

export default function RoiCalculator() {
  const { t, language } = useLanguage();
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(45);
  const [share, setShare] = useState(60);

  const locale = language === "fr" ? "fr-CA" : "en-CA";
  const formatNumber = (n) => new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(n);
  const formatMoney = (n) =>
    new Intl.NumberFormat(locale, { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(n);

  const yearlyHours = Math.round((hours * WORK_WEEKS_PER_YEAR * share) / 100);
  const yearlyValue = yearlyHours * rate;
  const weeks = (yearlyHours / HOURS_PER_WORK_WEEK).toFixed(1).replace(".", language === "fr" ? "," : ".");

  return (
    <RevealSection id="roi" className="relative overflow-hidden bg-navy-900 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:56px_56px] opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent-light">
            {t.roi.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {t.roi.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-300">{t.roi.subtitle}</p>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm lg:grid-cols-[1.15fr_1fr]">
          <div className="space-y-9 p-6 sm:p-10">
            <Slider
              id="roi-hours"
              label={t.roi.hoursLabel}
              value={hours}
              min={1}
              max={40}
              onChange={setHours}
              display={`${hours} h`}
            />
            <Slider
              id="roi-rate"
              label={t.roi.rateLabel}
              value={rate}
              min={20}
              max={150}
              step={5}
              onChange={setRate}
              display={`${formatMoney(rate)}/h`}
            />
            <Slider
              id="roi-share"
              label={t.roi.shareLabel}
              value={share}
              min={20}
              max={90}
              step={5}
              onChange={setShare}
              display={`${share} %`}
            />
          </div>

          <div className="flex flex-col justify-between gap-8 border-t border-white/10 bg-gradient-to-br from-accent/25 via-accent/10 to-transparent p-6 sm:p-10 lg:border-l lg:border-t-0">
            <div className="space-y-7" aria-live="polite">
              <Result icon={Clock3} label={t.roi.resultHours} value={yearlyHours} format={formatNumber} />
              <Result icon={Wallet} label={t.roi.resultValue} value={yearlyValue} format={formatMoney} />
              <p className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-navy-100">
                {t.roi.weeks.replace("{n}", weeks)}
              </p>
            </div>

            <div>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition-colors duration-200 hover:bg-accent-light hover:text-white sm:w-auto"
              >
                {t.roi.cta}
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <p className="mt-4 text-xs leading-relaxed text-navy-300">{t.roi.disclaimer}</p>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

function Slider({ id, label, value, min, max, step = 1, onChange, display }) {
  const percent = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-navy-100">
          {label}
        </label>
        <span className="shrink-0 font-mono text-base font-semibold text-white">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-range mt-4 w-full cursor-pointer"
        style={{ "--fill": `${percent}%` }}
      />
    </div>
  );
}

// Big number that springs smoothly to its new value whenever a slider moves.
function Result({ icon: Icon, label, value, format }) {
  const shouldReduceMotion = useReducedMotion();
  const spring = useSpring(value, { stiffness: 140, damping: 22 });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  useEffect(() => spring.on("change", (v) => setDisplay(Math.round(v))), [spring]);

  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
        <Icon size={20} />
      </span>
      <div>
        <p className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {format(shouldReduceMotion ? value : display)}
        </p>
        <p className="mt-1 text-sm text-navy-200">{label}</p>
      </div>
    </div>
  );
}
