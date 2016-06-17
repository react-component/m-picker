export function noop() {
}

export function getComputedStyle(el, key) {
  const computedStyle = window.getComputedStyle(el);
  return computedStyle[key] || '';
}
