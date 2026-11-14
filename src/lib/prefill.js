// Tiny in-page bus: widgets (diagnostic, offers) ask the contact form to
// prefill itself. `detail` = { topicIndex?: number, message?: string }.
export const PREFILL_EVENT = "boncelli:prefill";

export function requestPrefill(detail) {
  window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail }));
}
