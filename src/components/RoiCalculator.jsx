import { useEffect, useRef, useState } from "react";
import { ArrowRight, Clock3, Wallet } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import SectionHeading from "./SectionHeading.jsx";

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
    <section
      id="roi"
      aria-labelledby="roi-title"
      className="on-dark relative isolate overflow-hidden bg-navy-900 py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-[size:64px_64px] opacity-70 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="roi-title"
          index="02"
          dark
          eyebrow={t.roi.eyebrow}
          title={t.roi.title}
          subtitle={t.roi.subtitle}
        />

        <div
          data-reveal
          className="mt-14 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] lg:grid-cols-[1.15fr_1fr]"
        >
          <div className="space-y-9 p-6 sm:p-10">
            <Slider id="roi-hours" label={t.roi.hoursLabel} value={hours} min={1} max={40} onChange={setHours} display={`${hours} h`} />
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
              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition-colors duration-200 hover:bg-accent-soft sm:w-auto"
              >
                {t.roi.cta}
                <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <p className="mt-4 text-xs leading-relaxed text-navy-300">{t.roi.disclaimer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
        <output htmlFor={id} className="shrink-0 font-mono text-base font-semibold text-white">
          {display}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={display}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-range mt-4 w-full cursor-pointer"
        style={{ "--fill": `${percent}%` }}
      />
    </div>
  );
}

// Eases the displayed number toward its new value (rAF, ~450 ms, no library).
function useTweenedNumber(value) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const from = fromRef.current;
    if (reduced || from === value) {
      fromRef.current = value;
      setDisplay(value);
      return undefined;
    }
    const start = performance.now();
    const duration = 450;
    let frame;
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = from + (value - from) * eased;
      fromRef.current = current;
      setDisplay(Math.round(current));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return display;
}

function Result({ icon: Icon, label, value, format }) {
  const display = useTweenedNumber(value);
  return (
    <div className="flex items-start gap-4">
      <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
        <Icon size={20} />
      </span>
      <div>
        <p className="font-heading text-4xl font-semibold tracking-tight text-white tabular-nums sm:text-5xl">
          {format(display)}
        </p>
        <p className="mt-1 text-sm text-navy-200">{label}</p>
      </div>
    </div>
  );
}
