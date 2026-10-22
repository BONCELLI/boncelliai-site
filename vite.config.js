import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    cssMinify: true,
    // Keep fonts as separate cacheable files instead of inlining them in CSS.
    assetsInlineLimit: (file) => (file.endsWith(".woff2") ? false : undefined),
    modulePreload: { polyfill: false },
  },
});
