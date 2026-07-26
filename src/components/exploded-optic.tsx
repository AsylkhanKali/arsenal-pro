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
    const section = el?.closest("section");
    if (!el || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let top = 0;
    let height = 1;
    const measure = () => {
      let node: HTMLElement | null = section as HTMLElement;
      top = 0;
      while (node) {
        top += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }
      height = (section as HTMLElement).offsetHeight || 1;
    };

    let raf = 0;
    const update = () => {
      raf = 0;
      // Starts once the section top has climbed to mid-viewport, so the reader
      // is looking at the section before anything moves, and finishes while the
      // plate is still centred on screen. Triggering any earlier means the
      // assembly plays while the section is only just edging into view and is
      // easy to scroll straight past.
      const travelled = window.scrollY + window.innerHeight * 0.45 - top;
      const p = travelled / (height * 0.6);
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
