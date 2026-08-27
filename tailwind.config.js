/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Brand palette — dark navy base with a vivid cyan accent (tech, professional).
      colors: {
        navy: {
          50: "#f1f5fb",
          100: "#dbe4f0",
          200: "#b3c5e0",
          300: "#7f9dc7",
          400: "#4f70a0",
          500: "#2f4d78",
          600: "#1e355c",
          700: "#152945",
          800: "#0f1d33",
          900: "#0b1220",
          950: "#070c15",
        },
        accent: {
          DEFAULT: "#06b6d4",
          light: "#22d3ee",
          dark: "#0891b2",
        },
        brand: {
          DEFAULT: "#2563eb",
          light: "#3b82f6",
        },
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px 0 rgba(11,18,32,0.06), 0 8px 24px -8px rgba(11,18,32,0.12)",
        "card-hover": "0 4px 12px 0 rgba(6,182,212,0.12), 0 16px 40px -12px rgba(11,18,32,0.25)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(6,182,212,0.18) 0%, rgba(11,18,32,0) 70%)",
      },
    },
  },
  plugins: [],
};
