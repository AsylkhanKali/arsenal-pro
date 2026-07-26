type Callback = () => void;

/** One IntersectionObserver for every <Reveal> on the page.
 *
 *  Each Reveal used to build its own observer, its own timeout and its own
 *  getBoundingClientRect() at mount. With ~45 of them that is 45 forced
 *  synchronous layouts interleaved with React's hydration commit. An observer
 *  always delivers an initial entry for whatever it observes, so the rect read
 *  was redundant: elements already on screen resolve on the first callback. */

const OPTIONS: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: "0px 0px -10% 0px",
};

/** Safety net for anything the observer never resolves — an element taller than
 *  ~8 viewports never reaches the 12% threshold. Content must never be stuck
 *  invisible, so everything still pending gets revealed regardless. */
const FALLBACK_MS = 1400;

const pending = new Map<Element, Callback>();
let observer: IntersectionObserver | null = null;
let fallback: ReturnType<typeof setTimeout> | null = null;

function resolve(el: Element) {
  const callback = pending.get(el);
  if (!callback) return;
  pending.delete(el);
  observer?.unobserve(el);
  callback();
}

function flushAll() {
  fallback = null;
  for (const el of [...pending.keys()]) resolve(el);
}

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) resolve(entry.target);
      }
    }, OPTIONS);
  }
  return observer;
}

/** Runs `callback` once `el` scrolls into view. Returns an unsubscribe fn. */
export function observeReveal(el: Element, callback: Callback) {
  if (typeof IntersectionObserver === "undefined") {
    callback();
    return () => {};
  }

  pending.set(el, callback);
  getObserver().observe(el);
  if (fallback === null) fallback = setTimeout(flushAll, FALLBACK_MS);

  return () => {
    pending.delete(el);
    observer?.unobserve(el);
  };
}
