"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Drives the optic plate's --assembly (0 = parts apart, 1 = seated) from the
 *  reader's progress through the surrounding section.
 *
 *  Follows the same rule as scope-cursor: the scroll handler reads no layout.
 *  Section geometry is measured once on mount and on resize; each frame writes
 *  a single custom property, and CSS interpolates every part from it.
 *
 *  Default is 1 (assembled), so the plate is complete without JS and under
 *  prefers-reduced-motion, where this component attaches nothing at all. */
export default function ExplodedOptic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Progress is measured against the plate itself, not the surrounding
    // section. On phones the section stacks to roughly four times the plate's
    // height, so keying off the section meant the assembly was still running
    // long after the plate had scrolled off the top of the screen — it never
    // finished anywhere the reader could see it.
    let top = 0;
    let height = 1;
    let startAt = 0.75;
    const measure = () => {
      let node: HTMLElement | null = el;
      top = 0;
      while (node) {
        top += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }
      height = el.offsetHeight || 1;
      // Phones start almost as soon as the plate appears: there is far less
      // room and the plate passes through the viewport much faster.
      startAt = window.matchMedia("(max-width: 640px)").matches ? 0.95 : 0.75;
    };

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      // Begins as the plate's top edge rises past startAt of the viewport, and
      // completes as its centre reaches the upper-middle — always while the
      // whole plate is still on screen.
      const from = top - vh * startAt;
      const to = top + height / 2 - vh * 0.45;
      const p = (window.scrollY - from) / Math.max(to - from, 1);
      const assembly = p < 0 ? 0 : p > 1 ? 1 : p;
      el.style.setProperty("--assembly", assembly.toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="eo-stage">
      {children}
    </div>
  );
}
