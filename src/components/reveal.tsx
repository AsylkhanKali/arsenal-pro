"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { observeReveal } from "../lib/reveal-registry";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}

/** Fades + lifts children into view on scroll. The hidden start state applies
 *  only when scripting is available (see globals.css), so no-JS visitors and
 *  crawlers always see everything. Observation is delegated to a single shared
 *  observer — see lib/reveal-registry.ts for why that matters here. */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    return observeReveal(el, () => setShown(true));
  }, [shown]);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      style={
        delay
          ? ({
              transitionDelay: `${delay}ms`,
              "--reveal-delay": `${delay}ms`,
            } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
