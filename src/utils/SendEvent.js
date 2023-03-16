export function SendEvent(name) {
  try {
    window.gtag("event", name);
  } catch {}
}
