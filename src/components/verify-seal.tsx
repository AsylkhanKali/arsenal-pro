/** Inspection mark for the guarantees section: an octagonal seal with datum
 *  ticks and a check, drawn in the icons.tsx monoline idiom. Decorative — the
 *  six guarantees beside it carry the meaning, so it stays out of the
 *  accessibility tree and needs no translated label. */
export default function VerifySeal({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Octagon: flats at the diagonals, points at the cardinals. */}
      <path d="M80 16 118 34 136 72 118 110 80 128 42 110 24 72 42 34Z" />
      <circle cx="80" cy="72" r="40" opacity="0.55" />
      <circle cx="80" cy="72" r="31" opacity="0.3" />

      {/* Datum ticks on the optical cardinals. */}
      <path
        d="M80 6v10M80 128v10M14 72h10M136 72h10"
        className="vs-ticks"
        opacity="0.7"
      />

      <path d="M64 72l11 12 22-26" className="vs-check" strokeWidth="2.2" />

      {/* Serial rule under the seal — numerals only, no copy to translate. */}
      <path d="M40 148h80" opacity="0.35" />
      <path
        d="M48 143v5M64 143v5M80 141v7M96 143v5M112 143v5"
        opacity="0.35"
      />
    </svg>
  );
}
