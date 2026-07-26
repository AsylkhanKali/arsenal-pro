import InView from "./in-view";

/** Reference exhibit: common cartridges drawn to true relative scale.
 *
 *  The point is the honesty of the proportions — a 12.7×108 is five times the
 *  length of a 9×19, and seeing that is the whole exhibit. Dimensions are real
 *  published figures in millimetres.
 *
 *  Deliberately NOT a catalogue and NOT a full-bleed band: it sits inside
 *  #categories, above the note that says nomenclature is supplied on request,
 *  because a standalone ammunition slab is exactly the statement band the owner
 *  has had removed twice. */

const MAX_DIA = 22; // viewBox height shared by every round, in mm

type Round = {
  id: string;
  oal: number; // overall length, mm
  dia: number; // base or rim diameter, mm
  caseLen: number; // case length, mm
  neck: number; // neck diameter as a fraction of base diameter
};

const ROUNDS: Round[] = [
  { id: "9×19", oal: 29.7, dia: 9.9, caseLen: 19.2, neck: 0.92 },
  { id: "5.45×39", oal: 57.0, dia: 10.0, caseLen: 39.8, neck: 0.6 },
  { id: "7.62×39", oal: 56.0, dia: 11.35, caseLen: 38.7, neck: 0.72 },
  { id: "7.62×54R", oal: 77.2, dia: 14.4, caseLen: 53.7, neck: 0.6 },
  { id: "12.7×108", oal: 147.5, dia: 21.7, caseLen: 108.0, neck: 0.62 },
];

/** Case head → tapered body → shoulder → neck → ogive, as one closed outline. */
function outline({ oal, dia, caseLen, neck }: Round) {
  const cy = MAX_DIA / 2;
  const half = dia / 2;
  const nHalf = (dia * neck) / 2;
  const shoulder = caseLen * 0.72;
  const neckStart = caseLen * 0.86;
  const ogive = oal - caseLen;

  return [
    `M0 ${cy - half}`,
    `L${shoulder} ${cy - half * 0.97}`,
    `L${neckStart} ${cy - nHalf}`,
    `L${caseLen} ${cy - nHalf}`,
    `C${caseLen + ogive * 0.45} ${cy - nHalf} ${oal - ogive * 0.18} ${cy - nHalf * 0.5} ${oal} ${cy}`,
    `C${oal - ogive * 0.18} ${cy + nHalf * 0.5} ${caseLen + ogive * 0.45} ${cy + nHalf} ${caseLen} ${cy + nHalf}`,
    `L${neckStart} ${cy + nHalf}`,
    `L${shoulder} ${cy + half * 0.97}`,
    `L0 ${cy + half}`,
    "Z",
  ].join(" ");
}

function Cartridge({ round, dupe }: { round: Round; dupe?: boolean }) {
  const cy = MAX_DIA / 2;
  const half = round.dia / 2;
  const groove = round.dia * 0.16;

  return (
    <figure
      className={`cal-round${dupe ? " cal-dupe" : ""}`}
      aria-hidden={dupe || undefined}
    >
      <svg
        viewBox={`0 0 ${round.oal} ${MAX_DIA}`}
        style={{
          width: `calc(${round.oal} * var(--mm))`,
          height: `calc(${MAX_DIA} * var(--mm))`,
        }}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        aria-hidden="true"
      >
        <path d={outline(round)} vectorEffect="non-scaling-stroke" />
        {/* Extractor groove and case mouth: the two details that read at size. */}
        <path
          d={`M${groove} ${cy - half} L${groove} ${cy + half}`}
          vectorEffect="non-scaling-stroke"
          opacity="0.7"
        />
        <path
          d={`M${round.caseLen} ${cy - (round.dia * round.neck) / 2} L${round.caseLen} ${cy + (round.dia * round.neck) / 2}`}
          vectorEffect="non-scaling-stroke"
          opacity="0.7"
        />
      </svg>
      <figcaption className="cal-label">
        <span className="cal-id">{round.id}</span>
        <span className="cal-oal">{round.oal.toFixed(1)} mm</span>
      </figcaption>
    </figure>
  );
}

export default function CaliberRibbon() {
  // Rendered twice so translateX(-50%) loops seamlessly. The second pass is a
  // presentational duplicate: hidden from assistive tech, and dropped entirely
  // on small screens where the ribbon becomes a plain scrollable strip.
  return (
    <InView className="cal-ribbon">
      <div className="cal-track">
        {ROUNDS.map((round) => (
          <Cartridge key={round.id} round={round} />
        ))}
        {ROUNDS.map((round) => (
          <Cartridge key={`dupe-${round.id}`} round={round} dupe />
        ))}
      </div>
    </InView>
  );
}
