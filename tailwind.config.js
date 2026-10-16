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
          dark: "#4636cc",
        },
        paper: "#fbfaf7", // Papier — brand warm white
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px 0 rgba(16,19,35,0.06), 0 8px 24px -8px rgba(16,19,35,0.12)",
        "card-hover": "0 4px 12px 0 rgba(91,75,255,0.14), 0 16px 40px -12px rgba(16,19,35,0.25)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(91,75,255,0.20) 0%, rgba(16,19,35,0) 70%)",
      },
    },
  },
  plugins: [],
};
