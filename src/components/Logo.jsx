// Brand lockup rendered inline (not via <img>) so the wordmark uses the page's
// Space Grotesk font and the mark inherits color — no baked-in background box.
export function LogoMark({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="8 12 48 40" className={className} aria-hidden="true" focusable="false">
      <path
        d="M25 16 L 12 32 L 25 48 M39 16 L 52 32 L 39 48"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle
        cx="32"
        cy="32"
        r="5.5"
        className="fill-accent transition-[filter] duration-300 group-hover:[filter:drop-shadow(0_0_4px_#8477ff)]"
      />
    </svg>
  );
}

export default function Logo({ dark = false, tagline = false, className = "" }) {
  return (
    <span className={`group inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`h-7 w-7 shrink-0 ${dark ? "text-paper" : "text-navy-900"}`} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-heading text-[1.2rem] font-bold uppercase tracking-[0.02em] ${
            dark ? "text-paper" : "text-navy-900"
          }`}
        >
          Boncelli<span className={dark ? "text-accent-light" : "text-accent"}>AI</span>
        </span>
        {tagline && (
          <span
            className={`mt-1.5 font-mono text-[0.625rem] font-medium uppercase tracking-[0.16em] ${
              dark ? "text-navy-300" : "text-navy-400"
            }`}
          >
            Automatisation · Agents IA
          </span>
        )}
      </span>
    </span>
  );
}
