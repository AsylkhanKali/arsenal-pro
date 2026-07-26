type Callback = () => void;

/** One IntersectionObserver for every <Reveal> on the page.
 *
 *  Each Reveal used to build its own observer, its own timeout and its own
 *  getBoundingClientRect() at mount. With ~48 of them that is 48 forced
 *  synchronous layouts interleaved with React's hydration commit. An observer
 *  always delivers an initial entry for whatever it observes, so the rect read
 *  was redundant: elements already on screen resolve on the first callback. */

/** threshold 0 rather than a fraction: combined with the bottom margin below,
 *  an element reveals as it crosses into the lower tenth of the viewport
 *  whatever its height. A fractional threshold silently never fires for an
 *  element taller than a few viewports. */
const OPTIONS: IntersectionObserverInit = {
  threshold: 0,
  rootMargin: "0px 0px -10% 0px",
};

/** Only a broken-observer detector. If nothing has been delivered by now the
 *  environment is not running observers at all (a background tab, a headless
 *  renderer), and content must not be left invisible — so everything pending is
 *  revealed. It is emphatically NOT a general timer: firing it while the
 *  observer is healthy reveals the whole page at once and leaves no scroll
 *  animation for the reader to see. */
const FALLBACK_MS = 1400;

const pending = new Map<Element, Callback>();
let observer: IntersectionObserver | null = null;
let fallback: ReturnType<typeof setTimeout> | null = null;
let observerDelivers = false;

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
      // Any callback at all proves observers are being delivered here, so the
      // blanket fallback has to be disarmed before it can fire.
      if (!observerDelivers) {
        observerDelivers = true;
        if (fallback !== null) {
          clearTimeout(fallback);
          fallback = null;
        }
      }
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
  if (fallback === null && !observerDelivers) {
    fallback = setTimeout(flushAll, FALLBACK_MS);
  }

  return () => {
    pending.delete(el);
    observer?.unobserve(el);
  };
}
