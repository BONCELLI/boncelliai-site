/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Brand palette from the BoncelliAI logo kit — ink navy + indigo accent on warm paper.
      colors: {
        navy: {
          50: "#f1f1f6",
          100: "#e1e1ec",
          200: "#c3c4da",
          300: "#9a9cbe",
          400: "#6d7099",
          500: "#4c4f79",
          600: "#383b5e",
          700: "#262949",
          800: "#191c34",
          900: "#101323", // Encre — brand ink
          950: "#0a0c18",
        },
        accent: {
          DEFAULT: "#5b4bff", // Accent — brand indigo
          light: "#8477ff",
          soft: "#b4abff",
          dark: "#4636cc",
        },
        // "System OK" signal used by the live workflow visuals.
        signal: "#34d399",
        paper: "#fbfaf7", // Papier — brand warm white
        bone: "#f3f1ea", // Slightly deeper paper for alternating sections
      },
      fontFamily: {
        heading: ["'Space Grotesk Variable'", "'Space Grotesk'", "system-ui", "sans-serif"],
        body: ["'DM Sans Variable'", "'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["clamp(2.35rem, 1.5rem + 2.9vw, 3.85rem)", { lineHeight: "1.04", letterSpacing: "-0.035em" }],
        section: ["clamp(2rem, 1.5rem + 2vw, 3.1rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
      },
      boxShadow: {
        card: "0 1px 2px 0 rgba(16,19,35,0.05), 0 12px 32px -16px rgba(16,19,35,0.18)",
        "card-hover": "0 2px 6px 0 rgba(16,19,35,0.06), 0 24px 48px -20px rgba(70,54,204,0.35)",
        glow: "0 30px 80px -24px rgba(91,75,255,0.55)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
        "grid-ink":
          "linear-gradient(rgba(16,19,35,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16,19,35,0.05) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(55% 55% at 70% 10%, rgba(91,75,255,0.22) 0%, rgba(16,19,35,0) 70%)",
      },
      keyframes: {
        "rise-in": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "none" },
        },
        "slide-in": {
          from: { opacity: "0", transform: "translateX(-8px)" },
          to: { opacity: "1", transform: "none" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "slide-in": "slide-in 0.3s ease-out both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
