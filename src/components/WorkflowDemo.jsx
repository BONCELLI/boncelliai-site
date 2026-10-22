import { useEffect, useRef, useState } from "react";
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

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (e) => setReduced(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current || !("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

// A simulated workflow run: log lines stream in one by one, the matching node
// lights up, connectors fill as data flows. Loops only while visible on screen.
export default function WorkflowDemo() {
  const { t } = useLanguage();
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef(null);
  const tabRefs = useRef([]);
  const inView = useInView(ref);
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [tick, setTick] = useState(1);

  const scenario = t.demo.scenarios[scenarioIndex];
  const icons = SCENARIO_ICONS[scenarioIndex];
  const total = scenario.logs.length;

  // tick runs 1..total (streaming), then total + 1 (finished), then restarts.
  useEffect(() => {
    if (reducedMotion || !inView) return undefined;
    const finished = tick > total;
    const id = setTimeout(() => setTick(finished ? 1 : tick + 1), finished ? PAUSE_MS : STEP_MS);
    return () => clearTimeout(id);
  }, [tick, total, inView, reducedMotion]);

  const current = reducedMotion ? total + 1 : tick;
  const finished = current > total;
  const visibleLogs = scenario.logs.slice(0, Math.min(current, total));
  const activeNode = finished ? scenario.nodes.length : scenario.logs[current - 1][0];

  const selectScenario = (index) => {
    setScenarioIndex(index);
    setTick(1);
  };

  // WAI-ARIA tabs: arrow keys move between scenarios.
  const onTabKeyDown = (e) => {
    const count = t.demo.scenarios.length;
    const moves = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    let next = null;
    if (e.key in moves) next = (scenarioIndex + moves[e.key] + count) % count;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = count - 1;
    if (next === null) return;
    e.preventDefault();
    selectScenario(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div ref={ref} className="w-full">
      <div role="tablist" aria-label={t.demo.tabsLabel} className="mb-3 flex flex-wrap gap-2">
        {t.demo.scenarios.map((s, i) => {
          const selected = i === scenarioIndex;
          return (
            <button
              key={s.tab}
              ref={(el) => (tabRefs.current[i] = el)}
              type="button"
              role="tab"
              id={`demo-tab-${i}`}
              aria-selected={selected}
              aria-controls="demo-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => selectScenario(i)}
              onKeyDown={onTabKeyDown}
              className={`cursor-pointer rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors duration-200 ${
                selected
                  ? "border-accent bg-accent text-white"
                  : "border-white/15 bg-white/5 text-navy-200 hover:border-white/30 hover:text-white"
              }`}
            >
              {s.tab}
            </button>
          );
        })}
      </div>

      <div
        id="demo-panel"
        role="tabpanel"
        aria-labelledby={`demo-tab-${scenarioIndex}`}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-950/85 shadow-glow ring-1 ring-inset ring-white/5 backdrop-blur-md"
      >
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
              finished ? "bg-signal/10 text-emerald-300" : "bg-accent/15 text-accent-soft"
            }`}
          >
            {finished ? (
              <Check size={12} aria-hidden="true" />
            ) : (
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-light" aria-hidden="true" />
            )}
            {finished ? t.demo.done : t.demo.running}
          </span>
        </div>

        {/* Nodes */}
        <ol className="flex flex-col items-stretch p-4 sm:flex-row sm:items-center sm:p-5">
          {scenario.nodes.map((node, i) => {
            const Icon = icons[i];
            const state = i < activeNode ? "done" : i === activeNode ? "active" : "idle";
            return (
              <li key={node.label} className="flex min-w-0 flex-1 flex-col items-stretch sm:flex-row sm:items-center">
                <div
                  className={`relative flex min-w-0 flex-1 items-center gap-2.5 rounded-xl border px-2.5 py-2.5 transition-all duration-500 ${
                    state === "active"
                      ? "border-accent/70 bg-accent/15 shadow-[0_0_28px_-6px_rgba(91,75,255,0.8)]"
                      : state === "done"
                        ? "border-signal/30 bg-signal/5"
                        : "border-white/10 bg-white/[0.03] opacity-60"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-500 ${
                      state === "active"
                        ? "bg-accent text-white"
                        : state === "done"
                          ? "bg-signal/15 text-emerald-300"
                          : "bg-white/10 text-navy-300"
                    }`}
                    aria-hidden="true"
                  >
                    {state === "done" ? <Check size={16} /> : <Icon size={16} />}
                  </span>
                  <span className="min-w-0 text-left">
                    <span className="block font-mono text-[10px] uppercase tracking-wide text-accent-soft">
                      {node.label}
                    </span>
                    <span className="block text-[13px] font-medium leading-snug text-white">{node.text}</span>
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
              </li>
            );
          })}
        </ol>

        {/* Execution log */}
        <div className="min-h-[12.5rem] border-t border-white/10 bg-black/20 px-4 py-4 text-left font-mono text-[12px] leading-relaxed sm:px-5">
          {visibleLogs.map(([node, text], i) => (
            <div key={`${scenarioIndex}-${i}`} className="flex gap-3 motion-safe:animate-slide-in">
              <span className="shrink-0 text-navy-300">{(0.4 + i * 0.8).toFixed(1)}s</span>
              <span className={node === 1 ? "text-accent-soft" : "text-navy-100"}>{text}</span>
            </div>
          ))}
          {finished ? (
            <div className="mt-2 flex gap-3 font-semibold text-emerald-300 motion-safe:animate-slide-in">
              <Check size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
              {t.demo.doneLine.replace("{s}", scenario.total)}
            </div>
          ) : (
            <span
              aria-hidden="true"
              className="ml-[3.25rem] inline-block h-3.5 w-2 animate-pulse bg-accent-light/80 align-middle"
            />
          )}
        </div>
      </div>

      <p className="mt-3 text-left text-xs text-navy-300">{t.demo.hint}</p>
    </div>
  );
}
