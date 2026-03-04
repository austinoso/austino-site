/**
 * Constellation — warm ambient dot-and-line network.
 *
 * Sparse intentionally: ~14 nodes with gentle CSS drift.
 * Warm amber/rose palette — not clinical blue/white.
 * Pure CSS animation — zero JS runtime, zero GPU compositing.
 * Respects prefers-reduced-motion.
 */

type Node = {
  /** x position as % */
  x: number;
  /** y position as % */
  y: number;
  /** dot radius */
  r: number;
  /** color: 1 = amber, 2 = rose, 3 = violet */
  color: 1 | 2 | 3;
  /** animation delay in seconds */
  delay: number;
  /** drift range in px */
  drift: number;
  /** animation duration in seconds */
  dur: number;
};

const nodes: Node[] = [
  // Upper cluster — loose grouping
  { x: 62, y: 12, r: 2.5, color: 1, delay: 0, drift: 18, dur: 24 },
  { x: 78, y: 8, r: 1.8, color: 2, delay: 3, drift: 14, dur: 28 },
  { x: 88, y: 22, r: 3, color: 1, delay: 1, drift: 20, dur: 22 },
  { x: 72, y: 28, r: 2, color: 3, delay: 5, drift: 16, dur: 26 },

  // Middle band
  { x: 55, y: 42, r: 2.2, color: 1, delay: 2, drift: 22, dur: 30 },
  { x: 70, y: 48, r: 1.5, color: 2, delay: 4, drift: 12, dur: 20 },
  { x: 85, y: 38, r: 2.8, color: 1, delay: 0.5, drift: 18, dur: 25 },
  { x: 92, y: 52, r: 1.8, color: 3, delay: 6, drift: 15, dur: 27 },

  // Lower scatter
  { x: 60, y: 68, r: 2, color: 2, delay: 1.5, drift: 20, dur: 23 },
  { x: 75, y: 72, r: 3.2, color: 1, delay: 3.5, drift: 16, dur: 26 },
  { x: 90, y: 65, r: 1.5, color: 1, delay: 2.5, drift: 14, dur: 29 },
  { x: 68, y: 85, r: 2.5, color: 3, delay: 4.5, drift: 18, dur: 24 },
  { x: 82, y: 82, r: 2, color: 2, delay: 0, drift: 20, dur: 22 },
  { x: 95, y: 78, r: 1.8, color: 1, delay: 5.5, drift: 12, dur: 28 },
];

// Only connect nodes within this % distance of each other
const CONNECTION_THRESHOLD = 28;

type Edge = [number, number];

function computeEdges(): Edge[] {
  const edges: Edge[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONNECTION_THRESHOLD) {
        edges.push([i, j]);
      }
    }
  }
  return edges;
}

const edges = computeEdges();

const colorMap = {
  1: "rgba(251,191,36,VAR)", // amber
  2: "rgba(244,114,182,VAR)", // rose
  3: "rgba(167,139,250,VAR)", // violet
};

function dotColor(c: 1 | 2 | 3, opacity: number) {
  return colorMap[c].replace("VAR", String(opacity));
}

interface ConstellationProps {
  className?: string;
}

export default function Constellation({ className = "" }: ConstellationProps) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Each node gets its own drift animation via CSS */}
          <style>{`
            @keyframes cDrift {
              0%, 100% { translate: 0 0; }
              25% { translate: var(--dx) var(--neg-dy); }
              50% { translate: var(--neg-dx) var(--dy); }
              75% { translate: var(--dx) var(--dy); }
            }
            .c-node {
              animation: cDrift var(--dur) ease-in-out infinite;
              animation-delay: var(--del);
            }
            @media (prefers-reduced-motion: reduce) {
              .c-node { animation: none; }
            }
          `}</style>
        </defs>

        {/* Lines — faint connections */}
        {edges.map(([i, j], idx) => {
          const a = nodes[i];
          const b = nodes[j];
          // Average the two colors for the line, very low opacity
          return (
            <line
              key={`e-${idx}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={dotColor(a.color, 0.08)}
              strokeWidth="0.15"
            />
          );
        })}

        {/* Dots */}
        {nodes.map((node, i) => {
          // Convert drift px to viewBox units (approximate: viewBox is 100x100, element ~500px wide)
          const driftVB = node.drift * 0.2; // scale down for viewBox
          return (
            <circle
              key={`n-${i}`}
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={dotColor(node.color, 0.35)}
              className="c-node"
              style={
                {
                  "--dx": `${driftVB}%`,
                  "--neg-dx": `${-driftVB}%`,
                  "--dy": `${driftVB * 0.7}%`,
                  "--neg-dy": `${-driftVB * 0.7}%`,
                  "--dur": `${node.dur}s`,
                  "--del": `${-node.delay}s`,
                } as React.CSSProperties
              }
            />
          );
        })}
      </svg>
    </div>
  );
}
