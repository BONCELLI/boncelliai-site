// Shared section header: numbered mono eyebrow, display title, optional lead.
// `dark` switches colors for navy sections; `align` = "center" | "left".
export default function SectionHeading({ index, eyebrow, title, subtitle, dark = false, align = "center", id }) {
  const centered = align === "center";
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
      <h2 id={id} className={`mt-5 text-section font-semibold ${dark ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-navy-200" : "text-navy-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
