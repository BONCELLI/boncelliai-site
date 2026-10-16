import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Bot,
  CalendarCheck,
  Check,
  ClipboardList,
  FileText,
  Mail,
  ScanText,
  Send,
  Table2,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

// Icons per scenario, aligned with `demo.scenarios[i].nodes` in translations.js.
const SCENARIO_ICONS = [
  [Mail, Bot, Send],
  [ClipboardList, Bot, CalendarCheck],
  [FileText, ScanText, Table2],
];

const STEP_MS = 1100; // delay between two log lines
const PAUSE_MS = 3400; // how long the finished run stays on screen before looping

// A simulated workflow run: log lines stream in one by one, the matching node
// lights up, connectors fill as data flows. Loops while visible on screen.
export default function WorkflowDemo() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [tick, setTick] = useState(1);

  const scenario = t.demo.scenarios[scenarioIndex];
  const icons = SCENARIO_ICONS[scenarioIndex];
  const total = scenario.logs.length;

  // tick runs 1..total (streaming), then total + 1 (finished), then restarts.
  useEffect(() => {
    if (shouldReduceMotion || !inView) return undefined;
    const finished = tick > total;
    const id = setTimeout(() => setTick(finished ? 1 : tick + 1), finished ? PAUSE_MS : STEP_MS);
    return () => clearTimeout(id);
  }, [tick, total, inView, shouldReduceMotion]);

  const current = shouldReduceMotion ? total + 1 : tick;
  const finished = current > total;
  const visibleLogs = scenario.logs.slice(0, Math.min(current, total));
  const activeNode = finished ? scenario.nodes.length : scenario.logs[current - 1][0];

  const selectScenario = (index) => {
    setScenarioIndex(index);
    setTick(1);
  };

  return (
    <div ref={ref} className="w-full">
      <div
        role="tablist"
        aria-label={t.demo.tabsLabel}
        className="mb-3 flex flex-wrap gap-2"
      >
        {t.demo.scenarios.map((s, i) => (
          <button
            key={s.tab}
            role="tab"
            aria-selected={i === scenarioIndex}
            onClick={() => selectScenario(i)}
            className={`cursor-pointer rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors duration-200 ${
              i === scenarioIndex
                ? "border-accent bg-accent text-white"
                : "border-white/15 bg-white/5 text-navy-200 hover:border-white/30 hover:text-white"
            }`}
          >
            {s.tab}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950/80 shadow-[0_30px_80px_-20px_rgba(91,75,255,0.45)] backdrop-blur-md">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </span>
            <span className="font-mono text-[11px] text-navy-300">{t.demo.windowTitle}</span>
          </div>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] font-medium ${
              finished ? "bg-emerald-400/10 text-emerald-300" : "bg-accent/15 text-accent-light"
            }`}
          >
            {finished ? (
              <Check size={12} />
            ) : (
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-light" />
            )}
            {finished ? t.demo.done : t.demo.running}
          </span>
        </div>

        {/* Nodes */}
        <div className="flex flex-col items-stretch p-4 sm:flex-row sm:items-center sm:p-5">
          {scenario.nodes.map((node, i) => {
            const Icon = icons[i];
            const state = i < activeNode ? "done" : i === activeNode ? "active" : "idle";
            return (
              <div key={node.label} className="flex flex-1 flex-col items-stretch sm:flex-row sm:items-center">
                <div
                  className={`relative flex flex-1 items-center gap-3 rounded-xl border px-3 py-2.5 transition-all duration-500 ${
                    state === "active"
                      ? "border-accent/70 bg-accent/15 shadow-[0_0_28px_-6px_rgba(91,75,255,0.8)]"
                      : state === "done"
                        ? "border-emerald-400/30 bg-emerald-400/5"
                        : "border-white/10 bg-white/[0.03] opacity-60"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-500 ${
                      state === "active"
                        ? "bg-accent text-white"
                        : state === "done"
                          ? "bg-emerald-400/15 text-emerald-300"
                          : "bg-white/10 text-navy-300"
                    }`}
                  >
                    {state === "done" ? <Check size={16} /> : <Icon size={16} />}
                  </span>
                  <span className="min-w-0 text-left">
                    <span className="block font-mono text-[10px] uppercase tracking-wide text-accent-light">
                      {node.label}
                    </span>
                    <span className="block truncate text-[13px] font-medium text-white">{node.text}</span>
                  </span>
                </div>
                {i < scenario.nodes.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="relative mx-auto h-4 w-px overflow-hidden bg-white/10 sm:mx-0 sm:h-px sm:w-6"
                  >
                    <span
                      className="absolute inset-0 origin-top-left bg-accent-light transition-transform duration-500"
                      style={{ transform: activeNode > i ? "scale(1)" : "scale(0)" }}
                    />
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Execution log */}
        <div className="min-h-[12.5rem] border-t border-white/10 bg-black/20 px-4 py-4 text-left font-mono text-[12px] leading-relaxed sm:px-5">
          {visibleLogs.map(([node, text], i) => (
            <motion.div
              key={`${scenarioIndex}-${i}`}
              initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex gap-3"
            >
              <span className="shrink-0 text-navy-400">{(0.4 + i * 0.8).toFixed(1)}s</span>
              <span className={node === 1 ? "text-accent-light" : "text-navy-100"}>{text}</span>
            </motion.div>
          ))}
          {finished ? (
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 flex gap-3 font-semibold text-emerald-300"
            >
              <Check size={14} className="mt-0.5 shrink-0" />
              {t.demo.doneLine.replace("{s}", scenario.total)}
            </motion.div>
          ) : (
            <span className="ml-[3.25rem] inline-block h-3.5 w-2 animate-pulse bg-accent-light/80 align-middle" />
          )}
        </div>
      </div>

      <p className="mt-3 text-left text-xs text-navy-300">{t.demo.hint}</p>
    </div>
  );
}
