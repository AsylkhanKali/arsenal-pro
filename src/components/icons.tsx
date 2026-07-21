import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/* ── Categories ─────────────────────────────────────────────── */
export const IconRifle = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 10h12" />
    <path d="M15 10h4l1 1v2h-3" />
    <path d="M6 10v3" />
    <path d="M11 10V8h3" />
    <path d="M3 10v2h3" />
  </Svg>
);

export const IconAmmo = (p: IconProps) => (
  <Svg {...p}>
    <rect x="9" y="10" width="6" height="9" rx="1" />
    <path d="M9 10l3-6 3 6" />
    <path d="M9 13.5h6" />
  </Svg>
);

export const IconHelmet = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 14a9 9 0 0 1 18 0" />
    <path d="M3 14h18v1.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M12 5v5" />
  </Svg>
);

export const IconScope = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="7" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    <path d="M12 9v6M9 12h6" />
  </Svg>
);

export const IconLayers = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3l9 5-9 5-9-5z" />
    <path d="M3 13l9 5 9-5" />
  </Svg>
);

/* ── Guarantees ─────────────────────────────────────────────── */
export const IconShieldCheck = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z" />
    <path d="M9 12l2 2 4-4" />
  </Svg>
);

export const IconBadge = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="9" r="5" />
    <path d="M8.5 13l-1 8L12 19l4.5 2-1.5-8" />
  </Svg>
);

export const IconLock = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    <path d="M12 15v2" />
  </Svg>
);

export const IconTruck = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 6h11v9H3z" />
    <path d="M14 9h4l3 3v3h-7z" />
    <circle cx="7" cy="18" r="1.7" />
    <circle cx="17" cy="18" r="1.7" />
  </Svg>
);

export const IconRefresh = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M21 4v4h-4" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    <path d="M3 20v-4h4" />
  </Svg>
);

export const IconUsers = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20a6 6 0 0 1 12 0" />
    <path d="M16 5.5a3 3 0 0 1 0 5.5" />
    <path d="M17.5 14.2A6 6 0 0 1 21 20" />
  </Svg>
);

/* ── Contacts ───────────────────────────────────────────────── */
export const IconPhone = (p: IconProps) => (
  <Svg {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </Svg>
);

export const IconMail = (p: IconProps) => (
  <Svg {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Svg>
);

export const IconPin = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Svg>
);

export const IconUser = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 1 0-16 0" />
  </Svg>
);

/* ── UI ─────────────────────────────────────────────────────── */
export const IconArrow = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </Svg>
);

export const IconChevronDown = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 9l6 6 6-6" />
  </Svg>
);

export const IconMenu = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </Svg>
);

export const IconClose = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);
