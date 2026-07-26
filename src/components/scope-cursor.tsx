"use client";

import { useEffect, useRef } from "react";

/** Scope reticle that trails the pointer inside its parent section.
 *  Renders full-width/height crosshair hairlines plus a reticle ring,
 *  lerped toward the cursor via rAF. Activates only on fine-pointer
 *  devices; prefers-reduced-motion hides it entirely (globals.css). */
export default function ScopeCursor() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const host = root?.parentElement;
    if (!root || !host) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;

    const lineX = root.querySelector<HTMLElement>(".scope-line-x");
    const lineY = root.querySelector<HTMLElement>(".scope-line-y");
    const ring = root.querySelector<HTMLElement>(".scope-ring");
    if (!lineX || !lineY || !ring) return;

    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let raf = 0;
    let running = false;

    const tick = () => {
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
      const rect = host.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      if (!root.classList.contains("is-active")) {
        // First contact: snap into place instead of flying in from 0,0.
        x = targetX;
        y = targetY;
        root.classList.add("is-active");
      }
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };
    const onLeave = () => {
      root.classList.remove("is-active");
    };

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
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
        <circle cx="60" cy="60" r="2" fill="var(--color-signal-bright)" stroke="none" />
      </svg>
    </div>
  );
}
