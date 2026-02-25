/**
 * FlowLines — animated energy-stream SVG.
 *
 * Two narrative variants:
 *   "rising"  — streams converge at bottom and fan upward.
 *               Represents momentum, growth, trajectory.
 *               Use in CTA / decision-point sections.
 *
 *   "flow"    — gentle horizontal streams flowing left to right.
 *               Represents continuous process, data, always-on work.
 *               Use in About / mission / services sections.
 *
 * Every path connects edge-to-edge (no floating endpoints).
 * Pure CSS stroke-dashoffset animation — zero GPU compositing cost.
 * Respects prefers-reduced-motion.
 */

type Stream = {
  d: string;
  w: number;
  dur: number;
  del: number;
  dash: number;
  grad: 1 | 2 | 3;
  tw: number;
  to: number;
};

/* ── Rising: fan from convergence zone at bottom upward ── */
const risingStreams: Stream[] = [
  // Left fan — exits top-left
  {
    d: "M 290,510 C 265,370 190,250 140,150 S 85,30 70,-10",
    w: 2,
    dur: 13,
    del: 5,
    dash: 130,
    grad: 2,
    tw: 0.4,
    to: 0.05,
  },
  {
    d: "M 275,510 C 260,380 215,260 185,170 S 145,50 130,-10",
    w: 2.5,
    dur: 11,
    del: 1,
    dash: 150,
    grad: 1,
    tw: 0.4,
    to: 0.07,
  },
  // Center column
  {
    d: "M 300,510 C 298,370 280,240 265,150 S 245,40 235,-10",
    w: 3,
    dur: 10,
    del: 0,
    dash: 160,
    grad: 1,
    tw: 0.4,
    to: 0.09,
  },
  {
    d: "M 310,510 C 312,390 320,270 330,170 S 345,50 355,-10",
    w: 2.2,
    dur: 12,
    del: 3,
    dash: 140,
    grad: 2,
    tw: 0.45,
    to: 0.06,
  },
  // Right fan — exits top-right
  {
    d: "M 285,510 C 295,380 330,260 370,170 S 425,40 445,-10",
    w: 2.8,
    dur: 9.5,
    del: 0.5,
    dash: 155,
    grad: 1,
    tw: 0.4,
    to: 0.08,
  },
  {
    d: "M 325,510 C 338,370 380,250 415,160 S 455,30 475,-10",
    w: 1.8,
    dur: 14,
    del: 4,
    dash: 120,
    grad: 3,
    tw: 0.45,
    to: 0.05,
  },
  {
    d: "M 340,510 C 350,360 395,230 435,140 S 475,20 495,-10",
    w: 2.5,
    dur: 11.5,
    del: 2,
    dash: 145,
    grad: 1,
    tw: 0.4,
    to: 0.07,
  },
  // S-curves for organic variety
  {
    d: "M 265,510 C 250,390 215,300 245,210 S 335,80 360,-10",
    w: 2,
    dur: 12.5,
    del: 6,
    dash: 135,
    grad: 3,
    tw: 0.4,
    to: 0.05,
  },
  {
    d: "M 335,510 C 340,390 355,300 325,210 S 265,80 240,-10",
    w: 1.8,
    dur: 13.5,
    del: 7,
    dash: 125,
    grad: 2,
    tw: 0.4,
    to: 0.04,
  },
  // Bold hero line — widest, brightest
  {
    d: "M 305,510 C 310,340 345,190 395,110 S 465,5 490,-10",
    w: 3.5,
    dur: 10.5,
    del: 1.5,
    dash: 180,
    grad: 1,
    tw: 0.35,
    to: 0.11,
  },
];

/* ── Flow: gentle horizontal undulation ── */
const flowStreams: Stream[] = [
  {
    d: "M -30,35  C 180,30  380,55  580,40  S 820,20  1030,45  S 1160,55  1230,38",
    w: 1.6,
    dur: 20,
    del: 0,
    dash: 110,
    grad: 1,
    tw: 0.45,
    to: 0.04,
  },
  {
    d: "M -30,75  C 200,80  400,55  600,70  S 840,90  1040,65  S 1150,50  1230,72",
    w: 2,
    dur: 17,
    del: 3,
    dash: 130,
    grad: 2,
    tw: 0.4,
    to: 0.05,
  },
  {
    d: "M -30,115 C 220,110 420,135 620,118 S 860,100 1050,125 S 1170,135 1230,112",
    w: 1.4,
    dur: 22,
    del: 7,
    dash: 100,
    grad: 3,
    tw: 0.45,
    to: 0.03,
  },
  {
    d: "M -30,155 C 190,160 390,138 590,152 S 830,170 1030,148 S 1140,135 1230,155",
    w: 1.8,
    dur: 18.5,
    del: 5,
    dash: 120,
    grad: 1,
    tw: 0.4,
    to: 0.04,
  },
  {
    d: "M -30,195 C 210,190 410,210 610,195 S 850,175 1050,198 S 1180,210 1230,192",
    w: 1.5,
    dur: 21,
    del: 9,
    dash: 105,
    grad: 2,
    tw: 0.45,
    to: 0.03,
  },
  {
    d: "M -30,230 C 200,235 400,215 600,228 S 840,245 1040,222 S 1160,210 1230,230",
    w: 2.2,
    dur: 16,
    del: 1.5,
    dash: 140,
    grad: 1,
    tw: 0.4,
    to: 0.05,
  },
];

const variantConfig = {
  rising: { viewBox: "0 0 500 500", streams: risingStreams },
  flow: { viewBox: "0 0 1200 260", streams: flowStreams },
} as const;

type FlowLinesProps = {
  className?: string;
  variant?: "rising" | "flow";
};

export default function FlowLines({
  className = "",
  variant = "rising",
}: FlowLinesProps) {
  const { viewBox, streams } = variantConfig[variant];
  const p = variant; // gradient ID namespace (unique per variant on page)

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox={viewBox}
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          {/* G1: Cyan → Violet → Rose */}
          <linearGradient
            id={`${p}-g1`}
            gradientUnits="userSpaceOnUse"
            {...(variant === "rising"
              ? { x1: "200", y1: "500", x2: "450", y2: "0" }
              : { x1: "-30", y1: "130", x2: "1230", y2: "130" })}
          >
            <stop offset="0%" stopColor="#40E0FF" stopOpacity="0" />
            <stop offset="12%" stopColor="#40E0FF" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#A78BFA" stopOpacity="0.65" />
            <stop offset="80%" stopColor="#F472B6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F472B6" stopOpacity="0" />
          </linearGradient>

          {/* G2: Violet → Cyan */}
          <linearGradient
            id={`${p}-g2`}
            gradientUnits="userSpaceOnUse"
            {...(variant === "rising"
              ? { x1: "300", y1: "500", x2: "400", y2: "0" }
              : { x1: "-30", y1: "130", x2: "1230", y2: "130" })}
          >
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0" />
            <stop offset="15%" stopColor="#A78BFA" stopOpacity="0.75" />
            <stop offset="55%" stopColor="#40E0FF" stopOpacity="0.5" />
            <stop offset="90%" stopColor="#40E0FF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#40E0FF" stopOpacity="0" />
          </linearGradient>

          {/* G3: Green → Cyan accent */}
          <linearGradient
            id={`${p}-g3`}
            gradientUnits="userSpaceOnUse"
            {...(variant === "rising"
              ? { x1: "250", y1: "500", x2: "480", y2: "0" }
              : { x1: "-30", y1: "130", x2: "1230", y2: "130" })}
          >
            <stop offset="0%" stopColor="#4ADE80" stopOpacity="0" />
            <stop offset="18%" stopColor="#4ADE80" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#40E0FF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#40E0FF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {streams.map((s, i) => (
          <g key={i}>
            {/* Track — faint permanent path */}
            <path
              d={s.d}
              stroke={`rgba(64,224,255,${s.to})`}
              strokeWidth={s.w * s.tw}
              strokeLinecap="round"
              pathLength={1000}
              fill="none"
            />

            {/* Animated pulse */}
            <path
              d={s.d}
              stroke={`url(#${p}-g${s.grad})`}
              strokeWidth={s.w}
              strokeLinecap="round"
              pathLength={1000}
              strokeDasharray={`${s.dash} ${1000 - s.dash}`}
              fill="none"
              className="flow-line-pulse"
              style={{
                animationDuration: `${s.dur}s`,
                animationDelay: `-${s.del}s`,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
