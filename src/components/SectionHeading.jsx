// Shared section header: numbered mono eyebrow, display title, optional lead.
// `dark` switches colors for navy sections; `align` = "center" | "left";
// `level` = 1 when the section opens its own page (renders an h1).
export default function SectionHeading({ index, eyebrow, title, subtitle, dark = false, align = "center", id, level = 2 }) {
  const centered = align === "center";
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <div data-reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${dark ? "text-accent-soft" : "text-accent-dark"} ${centered ? "justify-center" : ""}`}>
        {index && (
          <>
            <span>{index}</span>
            <span aria-hidden="true" className={`h-px w-8 ${dark ? "bg-white/25" : "bg-navy-200"}`} />
          </>
        )}
        <span>{eyebrow}</span>
      </p>
      <Heading id={id} className={`mt-5 text-section font-semibold ${dark ? "text-white" : "text-navy-900"}`}>
        {title}
      </Heading>
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-navy-200" : "text-navy-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
