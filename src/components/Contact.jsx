import { useState } from "react";
import { AlertCircle, ArrowRight, CalendarDays, CheckCircle2, ExternalLink, Loader2, Mail, ShieldCheck } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { siteConfig } from "../siteConfig.js";
import SectionHeading from "./SectionHeading.jsx";

const STATUS = { IDLE: "idle", SUBMITTING: "submitting", SUCCESS: "success", MAILTO: "mailto", ERROR: "error" };
const EMPTY_FORM = { name: "", email: "", company: "", topic: "", message: "", _gotcha: "" };

export default function Contact() {
  const { t, language } = useLanguage();
  const x = t.contactExtra;
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState(STATUS.IDLE);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(STATUS.SUBMITTING);

    try {
      if (siteConfig.contactFormEndpoint) {
        // Send to whichever form backend is configured in siteConfig.js
        // (Formspree). `_gotcha` is Formspree's honeypot: bots fill it, humans can't see it.
        const response = await fetch(siteConfig.contactFormEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            ...form,
            language,
            _subject: `${siteConfig.brandName} — ${form.topic || "Contact"} — ${form.name}`,
          }),
        });
        if (!response.ok) throw new Error("Form endpoint returned an error");
        setStatus(STATUS.SUCCESS);
      } else {
        // No backend configured yet: open the visitor's email client instead.
        const subject = encodeURIComponent(`${siteConfig.brandName} — ${form.name}`);
        const body = encodeURIComponent(`${form.topic}\n\n${form.message}\n\n${form.email} ${form.company}`);
        window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
        // We can't know if the visitor actually sent it, so say what really happened.
        setStatus(STATUS.MAILTO);
      }
      setForm(EMPTY_FORM);
    } catch (error) {
      setStatus(STATUS.ERROR);
    }
  };

  const submitting = status === STATUS.SUBMITTING;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="on-dark relative isolate overflow-hidden bg-navy-900 py-24 sm:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <div>
          <SectionHeading
            id="contact-title"
            index="07"
            dark
            align="left"
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />

          <ul data-reveal className="mt-8 space-y-3 text-sm text-navy-200">
            <li className="flex items-center gap-3">
              <CheckCircle2 size={18} aria-hidden="true" className="shrink-0 text-signal" />
              {x.replyNote}
            </li>
            <li className="flex items-center gap-3">
              <ShieldCheck size={18} aria-hidden="true" className="shrink-0 text-signal" />
              {t.commitments.items[0].title}
            </li>
          </ul>

          <div data-reveal className="mt-10 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-sm font-semibold text-white">{x.directTitle}</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 inline-flex items-center gap-2 break-all py-1 text-sm font-semibold text-accent-soft transition-colors duration-200 hover:text-white"
              >
                <Mail size={16} aria-hidden="true" className="shrink-0" />
                {siteConfig.email}
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-sm font-semibold text-white">{t.contact.platformsTitle}</h3>
              <p className="mt-2 text-sm text-navy-300">{t.contact.platformsText}</p>
              <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:gap-6">
                {[
                  [siteConfig.upworkUrl, t.contact.upworkCta],
                  [siteConfig.fiverrUrl, t.contact.fiverrCta],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 py-2 text-sm font-semibold text-accent-soft transition-colors duration-200 hover:text-white"
                  >
                    {label}
                    <ExternalLink
                      size={14}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <form
          data-reveal
          style={{ "--reveal-delay": "120ms" }}
          onSubmit={handleSubmit}
          aria-labelledby="contact-title"
          className="relative rounded-3xl border border-white/10 bg-paper p-6 shadow-glow sm:p-9 [&_:focus-visible]:ring-offset-paper"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label={t.contact.form.name}
              name="name"
              autoComplete="name"
              value={form.name}
              placeholder={t.contact.form.namePlaceholder}
              onChange={handleChange}
              required
            />
            <Field
              label={t.contact.form.email}
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              placeholder={t.contact.form.emailPlaceholder}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-5">
            <Field
              label={x.company}
              hint={x.optional}
              name="company"
              autoComplete="organization"
              value={form.company}
              placeholder={x.companyPlaceholder}
              onChange={handleChange}
            />
          </div>

          <fieldset className="mt-6">
            <legend className="mb-2.5 text-sm font-medium text-navy-700">{x.topicLabel}</legend>
            <div className="flex flex-wrap gap-2">
              {x.topics.map((topic) => (
                <label key={topic} className="cursor-pointer">
                  <input
                    type="radio"
                    name="topic"
                    value={topic}
                    checked={form.topic === topic}
                    onChange={handleChange}
                    className="peer sr-only"
                  />
                  <span className="block rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-medium text-navy-600 transition-colors duration-200 hover:border-accent/60 peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2">
                    {topic}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-6">
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-700">
              {t.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              placeholder={t.contact.form.messagePlaceholder}
              className="w-full resize-y rounded-xl border border-navy-200 bg-white px-4 py-3 text-base text-navy-900 outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-navy-400 focus:border-accent focus:shadow-[0_0_0_4px_rgba(91,75,255,0.15)] sm:text-sm"
            />
          </div>

          {/* Honeypot — hidden from people and assistive tech. */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor="_gotcha">Leave empty</label>
            <input id="_gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" value={form._gotcha} onChange={handleChange} />
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary group w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {submitting ? (
                <Loader2 size={16} aria-hidden="true" className="animate-spin" />
              ) : null}
              {submitting ? t.contact.form.submitting : t.contact.form.submit}
              {!submitting && (
                <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
              )}
            </button>
            {siteConfig.bookingUrl && (
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-accent-dark transition-colors hover:bg-accent/10"
              >
                <CalendarDays size={16} aria-hidden="true" />
                {x.bookCta}
              </a>
            )}
          </div>

          <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-navy-500">
            <ShieldCheck size={14} aria-hidden="true" className="mt-0.5 shrink-0" />
            {x.privacy}
          </p>

          <div aria-live="polite" role="status">
            {(status === STATUS.SUCCESS || status === STATUS.MAILTO) && (
              <p className="mt-5 flex items-start gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                <CheckCircle2 size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
                {status === STATUS.SUCCESS ? t.contact.form.success : t.contact.form.mailto}
              </p>
            )}
            {status === STATUS.ERROR && (
              <p className="mt-5 flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                <AlertCircle size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
                <span>
                  {t.contact.form.error}{" "}
                  <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-2">
                    {siteConfig.email}
                  </a>
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, hint, name, type = "text", value, placeholder, onChange, required, autoComplete }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 flex items-baseline justify-between text-sm font-medium text-navy-700">
        <span>
          {label}
          {required && (
            <span aria-hidden="true" className="ml-0.5 text-accent">
              *
            </span>
          )}
        </span>
        {hint && <span className="text-xs font-normal text-navy-500">{hint}</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-base text-navy-900 outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-navy-400 focus:border-accent focus:shadow-[0_0_0_4px_rgba(91,75,255,0.15)] sm:text-sm"
      />
    </div>
  );
}
