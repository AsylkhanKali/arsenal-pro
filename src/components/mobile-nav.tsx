"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { IconMenu, IconClose, IconArrow } from "./icons";

interface NavLink {
  href: string;
  label: string;
}

export default function MobileNav({
  links,
  ctaLabel,
  switcher,
}: {
  links: NavLink[];
  ctaLabel: string;
  switcher: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Portalled to <body> so the fixed overlay isn't trapped by the header's
  // backdrop-filter containing block.
  const overlay = (
    <div className="fixed inset-0 z-[60] flex flex-col bg-field-950">
      <div className="field-backdrop" aria-hidden="true" />
      <div className="flex items-center justify-between border-b border-hairline px-5 py-4">
        <span className="eyebrow">Menu</span>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="grid h-10 w-10 place-items-center rounded border border-hairline text-paper"
        >
          <IconClose className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex flex-col gap-1 px-5 py-6">
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="flex items-center justify-between border-b border-hairline/60 py-4 font-display text-2xl uppercase tracking-wide text-paper transition-colors hover:text-signal-bright"
          >
            <span>
              <span className="mr-3 text-sm text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              {l.label}
            </span>
            <IconArrow className="h-5 w-5 text-sand" />
          </a>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-5 px-5 py-6">
        <a
          href="#contacts"
          onClick={() => setOpen(false)}
          className="inline-flex items-center justify-center gap-2 rounded bg-signal px-5 py-3.5 font-display uppercase tracking-wide text-[#140f08] transition-colors hover:bg-signal-bright"
        >
          {ctaLabel}
          <IconArrow className="h-4 w-4" />
        </a>
        <div className="flex justify-center">{switcher}</div>
      </div>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Menu"
        className="grid h-10 w-10 place-items-center rounded border border-hairline text-paper"
      >
        <IconMenu className="h-5 w-5" />
      </button>
      {mounted && open ? createPortal(overlay, document.body) : null}
    </div>
  );
}
