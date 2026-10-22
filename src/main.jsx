import "./index.css";

// The page arrives fully prerendered, so let the browser paint it first and
// only then download/evaluate React and hydrate. Evaluating the bundle up
// front was delaying first paint (and LCP) by ~2.5 s on mid-range phones.
// The app chunk is <link rel="modulepreload">-ed by scripts/prerender.mjs.
const boot = () => import("./boot.jsx");

if (document.getElementById("root").firstElementChild) {
  requestAnimationFrame(() => setTimeout(boot, 0));
} else {
  boot(); // dev server: empty shell, nothing to paint yet
}
