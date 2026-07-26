"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Adds `is-paused` to its wrapper whenever it is off screen, so looping CSS
 *  animations inside it stop costing a frame every frame while nobody can see
 *  them. Purely additive: with no JS the class is never applied and the
 *  animation simply runs, which is the current behaviour anyway. */
export default function InView({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      ([entry]) => el.classList.toggle("is-paused", !entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
