import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { siteConfig } from "../siteConfig.js";
import RevealSection from "./RevealSection.jsx";

const STATUS = { IDLE: "idle", SUBMITTING: "submitting", SUCCESS: "success", MAILTO: "mailto", ERROR: "error" };

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
        // (e.g. Formspree). Swap this for your own API call if you build one.
        const response = await fetch(siteConfig.contactFormEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (!response.ok) throw new Error("Form endpoint returned an error");
        setStatus(STATUS.SUCCESS);
      } else {
        // No backend configured yet: open the visitor's email client instead.
        const subject = encodeURIComponent(`${siteConfig.brandName} — ${form.name}`);
        const body = encodeURIComponent(`${form.message}\n\n${form.email}`);
        window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
        // We can't know if the visitor actually sent it, so say what really happened.
        setStatus(STATUS.MAILTO);
      }
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus(STATUS.ERROR);
    }
  };

  return (
    <RevealSection id="contact" className="bg-navy-900 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent-light">
            {t.contact.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-300">
            {t.contact.subtitle}
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-sm font-semibold text-white">{t.contact.platformsTitle}</h3>
            <p className="mt-2 text-sm text-navy-300">{t.contact.platformsText}</p>
            <div className="mt-3 flex flex-col gap-1">
              <a
                href={siteConfig.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex cursor-pointer items-center gap-1.5 py-2 text-sm font-semibold text-accent-light transition-colors duration-200 hover:text-accent"
              >
                {t.contact.upworkCta}
                <ExternalLink size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={siteConfig.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex cursor-pointer items-center gap-1.5 py-2 text-sm font-semibold text-accent-light transition-colors duration-200 hover:text-accent"
              >
                {t.contact.fiverrCta}
                <ExternalLink size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-3">
          <div className="rounded-2xl border border-white/10 bg-paper p-6 shadow-card sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label={t.contact.form.name}
                name="name"
                value={form.name}
                placeholder={t.contact.form.namePlaceholder}
                onChange={handleChange}
                required
              />
              <Field
                label={t.contact.form.email}
                name="email"
                type="email"
                value={form.email}
                placeholder={t.contact.form.emailPlaceholder}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-5">
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
                className="w-full rounded-xl border border-navy-200 px-4 py-3 text-sm text-navy-900 outline-none transition-colors duration-200 placeholder:text-navy-300 focus:border-accent"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === STATUS.SUBMITTING}
              whileHover={status === STATUS.SUBMITTING ? undefined : { y: -2 }}
              whileTap={status === STATUS.SUBMITTING ? undefined : { scale: 0.98 }}
              className="mt-6 w-full cursor-pointer rounded-xl bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === STATUS.SUBMITTING ? t.contact.form.submitting : t.contact.form.submit}
            </motion.button>

            {(status === STATUS.SUCCESS || status === STATUS.MAILTO) && (
              <p role="status" className="mt-4 flex items-start gap-2 text-sm font-medium text-emerald-700">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                {status === STATUS.SUCCESS ? t.contact.form.success : t.contact.form.mailto}
              </p>
            )}
            {status === STATUS.ERROR && (
              <p className="mt-4 flex items-center gap-2 text-sm font-medium text-red-600">
                <AlertCircle size={16} /> {t.contact.form.error}
              </p>
            )}
          </div>
        </form>
      </div>
    </RevealSection>
  );
}

function Field({ label, name, type = "text", value, placeholder, onChange, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-navy-200 px-4 py-3 text-sm text-navy-900 outline-none transition-colors duration-200 placeholder:text-navy-300 focus:border-accent"
      />
    </div>
  );
}
