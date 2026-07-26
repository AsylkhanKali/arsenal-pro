"use client";

import { useEffect, useRef } from "react";

/** Scope reticle that trails the pointer inside its parent section.
 *
 *  The pointermove handler deliberately reads no layout. Chrome fires
 *  pointermove on every scroll tick even when the mouse is still, so a
 *  getBoundingClientRect() there costs a forced synchronous layout per scroll
 *  frame — which is what made slow scrolling over the hero stutter. Instead the
 *  handler only stores viewport coords, and the rAF tick converts them using a
 *  cached document offset (offsetTop/offsetLeft don't change on scroll).
 *
 *  Also parks the hero's ambient scanline once the hero scrolls away. */
export default function ScopeCursor() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const host = root?.parentElement;
    if (!root || !host) return;

    const scan = host.querySelector<HTMLElement>(".hero-scan");
    let onScreen = true;
    let io: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        ([entry]) => {
          onScreen = entry.isIntersecting;
          scan?.classList.toggle("is-paused", !onScreen);
        },
        { threshold: 0 },
      );
      io.observe(host);
    }
    const stopObserving = () => io?.disconnect();

    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return stopObserving;

    const lineX = root.querySelector<HTMLElement>(".scope-line-x");
    const lineY = root.querySelector<HTMLElement>(".scope-line-y");
    const ring = root.querySelector<HTMLElement>(".scope-ring");
    if (!lineX || !lineY || !ring) return stopObserving;

    // Distance from the document origin to the host, accumulated up the
    // offsetParent chain. Scrolling never invalidates it; only a resize does.
    let hostTop = 0;
    let hostLeft = 0;
    const measure = () => {
      let el: HTMLElement | null = host;
      hostTop = 0;
      hostLeft = 0;
      while (el) {
        hostTop += el.offsetTop;
        hostLeft += el.offsetLeft;
        el = el.offsetParent as HTMLElement | null;
      }
    };
    measure();

    let clientX = 0;
    let clientY = 0;
    let x = 0;
    let y = 0;
    let raf = 0;
    let running = false;
    let seeded = false;

    const tick = () => {
      const targetX = clientX + window.scrollX - hostLeft;
      const targetY = clientY + window.scrollY - hostTop;
      if (!seeded) {
        // First contact: snap into place instead of flying in from 0,0.
        x = targetX;
        y = targetY;
        seeded = true;
        root.classList.add("is-active");
      }
      x += (targetX - x) * 0.18;
      y += (targetY - y) * 0.18;
      lineX.style.transform = `translateY(${y}px)`;
      lineY.style.transform = `translateX(${x}px)`;
      ring.style.transform = `translate(${x}px, ${y}px)`;
      if (Math.abs(targetX - x) > 0.2 || Math.abs(targetY - y) > 0.2) {
        raf = requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };

    const onMove = (e: PointerEvent) => {
      if (!onScreen) return;
      clientX = e.clientX;
      clientY = e.clientY;
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };
    const onLeave = () => {
      root.classList.remove("is-active");
      seeded = false;
    };

    host.addEventListener("pointermove", onMove, { passive: true });
    host.addEventListener("pointerleave", onLeave, { passive: true });
    window.addEventListener("resize", measure, { passive: true });

    return () => {
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf);
      stopObserving();
    };
  }, []);

  return (
    <div ref={rootRef} className="scope-cursor" aria-hidden="true">
      <span className="scope-line-x" />
      <span className="scope-line-y" />
      <svg
        className="scope-ring"
        viewBox="0 0 120 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="60" cy="60" r="44" />
        <circle cx="60" cy="60" r="30" opacity="0.5" />
        {/* Range ticks at the four cardinal points of the outer ring. */}
        <path d="M60 8v16M60 96v16M8 60h16M96 60h16" />
        <circle
          cx="60"
          cy="60"
          r="2"
          fill="var(--color-signal-bright)"
          stroke="none"
        />
      </svg>
    </div>
  );
}
