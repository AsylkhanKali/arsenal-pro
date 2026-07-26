/** Exploded parts plate of a rifle optic, drawn in the same monoline idiom as
 *  icons.tsx (fill: none, stroke: currentColor, round caps). Server component —
 *  this markup never reaches the JS bundle.
 *
 *  Decorative (aria-hidden), like the photo it replaced: the adjacent process
 *  steps carry the meaning, and labelling it would mean hardcoding one locale's
 *  text into a diagram that ships to all five.
 *
 *  Each part group carries its own explode offset in globals.css and converges
 *  on --assembly (0 = apart, 1 = seated). The plate ships assembled, so no-JS
 *  visitors and crawlers see a finished unit rather than scattered parts. */
export default function OpticPlate() {
  return (
    <svg
      viewBox="0 0 300 560"
      className="eo-plate"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Optical axis + datum brackets: always visible, holds the composition
          together while the parts are apart. */}
      <g className="eo-datum">
        <path d="M150 30v500" strokeDasharray="2 7" />
        <path d="M60 40h14M60 40v10M60 520h14M60 520v-10" />
        <path d="M226 274h14M240 274v40M226 314h14" />
      </g>

      {/* 01 — eyepiece */}
      <g className="eo-part eo-eyepiece">
        <rect x="118" y="190" width="64" height="38" rx="4" />
        <path d="M118 202h64" />
        <ellipse cx="150" cy="196" rx="25" ry="5" />
        <g className="eo-tag">
          <path d="M186 200h30" />
          <text x="222" y="204">
            01
          </text>
        </g>
      </g>

      {/* Magnification ring */}
      <g className="eo-part eo-magring">
        <rect x="124" y="230" width="52" height="16" rx="2" />
        <path d="M134 232v12M142 232v12M150 232v12M158 232v12M166 232v12" />
      </g>

      {/* Upper tube */}
      <g className="eo-part eo-tube-upper">
        <rect x="132" y="248" width="36" height="38" />
      </g>

      {/* 02 — turret assembly (stays on the axis; everything seats onto it) */}
      <g className="eo-part eo-turret">
        <rect x="132" y="288" width="36" height="34" />
        <rect x="102" y="296" width="30" height="18" rx="2" />
        <path d="M108 300v10M114 300v10M120 300v10" />
        <circle cx="150" cy="305" r="8" />
        <path d="M150 297v6" />
        <g className="eo-tag">
          <path d="M98 305H74" />
          <text x="68" y="309" textAnchor="end">
            02
          </text>
        </g>
      </g>

      {/* Lower tube */}
      <g className="eo-part eo-tube-lower">
        <rect x="132" y="324" width="36" height="34" />
      </g>

      {/* 03 — mount rings, drawn as a pair so they slide off sideways together */}
      <g className="eo-part eo-rings">
        <rect x="122" y="252" width="56" height="16" rx="2" />
        <path d="M128 252v16M172 252v16" />
        <rect x="122" y="330" width="56" height="16" rx="2" />
        <path d="M128 330v16M172 330v16" />
        <g className="eo-tag">
          <path d="M182 260h26" />
          <text x="214" y="264">
            03
          </text>
        </g>
      </g>

      {/* Objective bell */}
      <g className="eo-part eo-bell">
        <path d="M132 360v12l-12 14h60l-12-14v-12" />
      </g>

      {/* 04 — objective lens */}
      <g className="eo-part eo-lens">
        <ellipse cx="150" cy="392" rx="30" ry="7" />
        <ellipse cx="150" cy="392" rx="21" ry="4.5" opacity="0.55" />
        <g className="eo-tag">
          <path d="M184 392h24" />
          <text x="214" y="396">
            04
          </text>
        </g>
      </g>
    </svg>
  );
}
