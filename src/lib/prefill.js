// Widgets (diagnostic, packages, calculator) ask the contact form to prefill
// itself. `detail` = { topicIndex?: number, message?: string }. The contact form
// lives on its own page, so the request is parked in sessionStorage and read
// when that page loads; the event still covers a form on the same page.
export const PREFILL_EVENT = "boncelli:prefill";
const STORAGE_KEY = "boncelli-prefill";

export function requestPrefill(detail) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(detail));
  } catch {
    // Storage blocked: the same-page event below still works.
  }
  window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail }));
}

// Returns the parked request (once) and clears it.
export function takePendingPrefill() {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    window.sessionStorage.removeItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
