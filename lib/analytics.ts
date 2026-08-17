// Lightweight event tracking wrapper.
// Currently a no-op logger. Once Google Analytics (gtag) and/or Meta Pixel (fbq)
// are inserted into app/layout.tsx, this file is the single place to wire up
// the actual dispatch calls — every call site elsewhere in the app stays unchanged.

type EventName =
  | "cta_consultation_click"
  | "cta_apply_click"
  | "consultation_form_submit"
  | "apply_form_submit"
  | "faq_toggle"
  | "program_cta_click";

type EventPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: EventName, payload: EventPayload = {}): void {
  if (typeof window === "undefined") return;

  // Google Analytics (gtag.js) — enable once GA is installed in the <head>.
  window.gtag?.("event", name, payload);

  // Meta Pixel — enable once the pixel snippet is installed in the <head>.
  window.fbq?.("trackCustom", name, payload);

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", name, payload);
  }
}
