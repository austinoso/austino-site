"use client";

import { useEffect, useRef } from "react";
import { getGSAP } from "@/lib/gsap";

/**
 * Animated California edge-network map for the Performance section.
 * Data centers (Sacramento, San Jose, LA) send packets to Central Valley cities.
 * Each packet is a bright comet-streak (short glowing dash) that zips from DC → city,
 * with an emit pulse at origin and a receive flash at destination.
 */

/* ── California outline — Census 500k, cos(37°) projection, DP simplified ── */
const CA_PATH = `M363.8 580 L361.8 571.9 L359.7 570.9 L358.2 572.4 L356.4 562 L357.9 559.9 L354.9 546.9 L347.6 534.9 L339.3 526.4 L336 525.2 L332.7 520.5 L326 516.7 L316.3 508 L314.2 507.3 L314 510.1 L310.3 510.9 L303.1 508.6 L302.3 506.7 L304 502.8 L298 491.7 L288 491.4 L284.5 493.3 L282.2 491.3 L269.2 487.5 L265.1 484.7 L262.2 477.6 L248.9 468.9 L243.6 468.8 L241.9 470 L237.8 468.7 L234.1 469.2 L227.8 466.2 L221.5 465.4 L205.9 466.9 L204 462.5 L198 459.9 L199.8 451.7 L198 448.7 L199.3 442.6 L196.5 439.9 L198.4 430.6 L197.7 426 L194.9 424 L192.2 424.8 L187.7 422.1 L185.8 419.6 L187.4 413.8 L186.4 408.8 L180.8 407 L173.1 396.7 L167.5 395.1 L165.2 388 L159.1 381.9 L157.2 375.1 L153.8 373.7 L147.1 363.6 L141.9 360.9 L138.3 357.1 L138.3 351.9 L135.9 344.6 L137.2 344.1 L136.9 342.1 L134.7 340.9 L136.7 337.5 L139.8 339.4 L142.5 334.8 L143.7 327.6 L140.2 320.1 L137 317.4 L135 318.8 L128.7 318.7 L124 315.2 L119.3 309.2 L117.8 309.1 L114.6 304.5 L114.8 294.8 L112.4 287.7 L109.3 285.3 L110.4 278 L109.4 269.9 L111.2 268.1 L114.5 268.1 L116.9 273 L115.2 274.3 L115.5 278.4 L117 279.7 L115.9 280.3 L121.3 282.2 L125.8 286.3 L128.5 286.1 L125.7 276.1 L122.1 273.4 L122.2 271.6 L118.1 269.7 L119.4 267 L118.5 262.5 L115.5 262.4 L113.4 259.1 L114.9 259.6 L116.4 258.3 L116.4 256.2 L120.4 255.6 L120.8 252.6 L115 248.1 L113 250.1 L110.6 250.3 L110.2 255.8 L112.6 257.9 L110.6 259 L111.1 260.4 L110 261.2 L113 264 L111 264.4 L111.1 267.3 L108.7 267.9 L103.5 263 L99.4 262.6 L93.3 256 L89.4 255.1 L87.8 255.8 L87.7 257.4 L85.4 257.3 L88.8 248.8 L86.8 242.9 L88 242.6 L87.6 241.1 L85.4 238.6 L83.5 239.1 L83.3 235.7 L80.5 230.3 L70.9 223.5 L65.7 215.6 L52.3 202.7 L51.7 200.6 L54 196 L47.7 177.5 L48.1 171.5 L50.4 165.2 L46.3 148.7 L43.7 146.9 L37.6 138 L35.9 137.4 L34.1 132.6 L30.5 131 L22.7 124 L22.1 116.6 L20 112.9 L23.8 102.3 L31.9 87 L33.8 80.3 L34 78 L32.1 76.5 L31.5 72 L34.3 66.1 L36.4 53.7 L32.4 37.2 L27.2 33.4 L29.5 27.2 L29.3 20.7 L228.1 20.8 L228.1 197.9 L346.1 303 L432.6 385.4 L481.5 434.1 L481.4 441.8 L485.2 448 L489.1 451.2 L491 458.4 L493.4 462.1 L493 466.2 L495.5 466.8 L503 472.7 L505 477.5 L500.5 482.3 L490.8 488.2 L490.4 492.4 L486.1 497.2 L487.4 499.1 L486.4 504.3 L488 510.2 L486.2 512.6 L486.6 519.8 L483.4 523 L481.4 527.5 L477.1 528.5 L478.4 531.6 L476.8 534.6 L479.6 537.1 L477.9 547.1 L479.9 550.5 L480.8 549.6 L482.1 550.9 L486.6 550.6 L488 554 L489.3 554.4 L489.2 561.6 L486.2 564.8 L486.5 566.8 L482.3 568.5 L478.2 567.5 L477.4 569.1 L363.8 580Z`;

/* ── City data ── */
interface City {
  name: string;
  x: number;
  y: number;
  labelSide: "l" | "r";
}

const dataCenters: City[] = [
  { name: "Sacramento", x: 157.6, y: 222.6, labelSide: "r" },
  { name: "San Jose", x: 139.1, y: 296.1, labelSide: "l" },
  { name: "Los Angeles", x: 311, y: 490.3, labelSide: "r" },
];

const clientCities: City[] = [
  /* North */
  { name: "Chico", x: 144.8, y: 154.8, labelSide: "r" },
  { name: "Redding", x: 126.2, y: 106.5, labelSide: "r" },
  /* Central Valley */
  { name: "Stockton", x: 167.2, y: 259.5, labelSide: "r" },
  { name: "Modesto", x: 181.1, y: 278.3, labelSide: "r" },
  { name: "Merced", x: 205.3, y: 298.2, labelSide: "r" },
  { name: "Fresno", x: 238.2, y: 331.6, labelSide: "r" },
  { name: "Visalia", x: 261.5, y: 355.7, labelSide: "r" },
  { name: "Bakersfield", x: 274.4, y: 412.2, labelSide: "r" },
  /* Bay Area & Coast */
  { name: "Oakland", x: 122.5, y: 270.2, labelSide: "l" },
  { name: "Monterey", x: 140.8, y: 326.5, labelSide: "l" },
  /* Southern California */
  { name: "Santa Barbara", x: 245.8, y: 468.5, labelSide: "l" },
  { name: "San Diego", x: 365.2, y: 540.8, labelSide: "l" },
  { name: "Palm Springs", x: 394.6, y: 503.4, labelSide: "r" },
];

/* Routes — each client ← nearest data center */
interface Route {
  from: City;
  to: City;
}

function nearestDC(city: City): City {
  let best = dataCenters[0];
  let bestDist = Infinity;
  for (const dc of dataCenters) {
    const d = Math.hypot(dc.x - city.x, dc.y - city.y);
    if (d < bestDist) {
      bestDist = d;
      best = dc;
    }
  }
  return best;
}

const routes: Route[] = clientCities.map((c) => ({
  from: nearestDC(c),
  to: c,
}));

/* Tail length for comet streak (SVG units) */
const TAIL = 18;

export default function EdgeGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let ctx: ReturnType<Awaited<ReturnType<typeof getGSAP>>["gsap"]["context"]>;

    (async () => {
      // Respect prefers-reduced-motion — skip all animations
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const { gsap } = await getGSAP();

      ctx = gsap.context(() => {
        const el = containerRef.current!;

        /* ── Data packet comet animations (continuous) ── */
        // Each route: a bright comet-streak (short dash) sweeps from DC → city,
        // with an emit ring at origin and a receive flash at destination.

        el.querySelectorAll<SVGGElement>(".route-group").forEach((group, i) => {
          const streak = group.querySelector<SVGPathElement>(".comet-streak");
          const emitRing = group.querySelector<SVGCircleElement>(".emit-ring");
          const receiveFlash = group.querySelector<SVGCircleElement>(".receive-flash");
          if (!streak || !emitRing || !receiveFlash) return;

          const length = streak.getTotalLength();
          const dashVisible = Math.min(TAIL, length * 0.3);

          // Hide streak initially — dash = short visible + full gap
          gsap.set(streak, {
            strokeDasharray: `${dashVisible} ${length + dashVisible}`,
            strokeDashoffset: dashVisible, // fully hidden at start
            opacity: 0,
          });

          const routeTl = gsap.timeline({
            repeat: -1,
            delay: 0.5 + i * 0.45,
            repeatDelay: 1.8 + Math.random() * 2,
          });

          // ─ Emit pulse at data center
          routeTl.fromTo(
            emitRing,
            { scale: 0.5, opacity: 0.9, transformOrigin: "center center" },
            {
              scale: 2.5,
              opacity: 0,
              duration: 0.5,
              ease: "power2.out",
            },
          );

          // ─ Comet streak travels
          // strokeDashoffset from +dashVisible (hidden before start)
          // to -(length) (fully past the end → exits)
          const speed = 120; // svg-units per second (fast packet feel)
          const dur = Math.max(0.5, length / speed);

          routeTl.fromTo(
            streak,
            { strokeDashoffset: dashVisible, opacity: 1 },
            {
              strokeDashoffset: -length,
              duration: dur,
              ease: "power1.in",
            },
            "<0.1",
          );

          // ─ Receive flash at client city
          routeTl.fromTo(
            receiveFlash,
            { scale: 0.5, opacity: 0, transformOrigin: "center center" },
            {
              scale: 2,
              opacity: 0.8,
              duration: 0.25,
              ease: "power2.out",
            },
            `>-0.15`,
          );
          routeTl.to(receiveFlash, {
            scale: 3,
            opacity: 0,
            duration: 0.4,
            ease: "power1.out",
          });

          // ─ Reset streak opacity for next loop
          routeTl.set(streak, { opacity: 0 });
        });
      }, containerRef);
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {/* CSS ambient glow — removed, solid fill handles the territory now */}
      <svg
        viewBox="20 80 500 480"
        preserveAspectRatio="xMaxYMid meet"
        className="absolute -right-[60px] inset-y-0 h-full w-auto"
        fill="none"
      >
        <defs>
          {/* Glow filter for comet streaks */}
          <filter id="pkt-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Neighboring state outlines (geographic context) ── */}
        {/* Oregon (southern strip visible) */}
        <path
          d="M16.8 20.5 L396.7 20.5 L396.7 -80 L9.7 -80Z"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="0.8"
          fill="rgba(0,0,0,0.025)"
        />
        {/* Nevada */}
        <path
          d="M228.1 20.8 L512.9 20.5 L512.9 375.1 L485 434.3 L481.5 434.1 L432.6 385.4 L346.1 303 L228.1 197.9Z"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="0.8"
          fill="rgba(0,0,0,0.025)"
        />
        {/* Arizona (western portion) */}
        <path
          d="M512.9 375.1 L512.9 316 L600 316 L600 650 L480.8 582 L490.2 534.7 L507.7 475.6 L485 434.3Z"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="0.8"
          fill="rgba(0,0,0,0.025)"
        />

        {/* State fill — solid territory */}
        <path className="ca-fill" d={CA_PATH} fill="rgba(180,83,9,0.07)" />

        {/* State outline — clean uniform stroke */}
        <path
          className="ca-outline"
          d={CA_PATH}
          stroke="rgba(180,83,9,0.45)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* ── Static connection lines (always visible, faint) ── */}
        {routes.map((route, i) => (
          <line
            key={`conn-${i}`}
            className="conn-line"
            x1={route.from.x}
            y1={route.from.y}
            x2={route.to.x}
            y2={route.to.y}
            stroke="rgba(180,83,9,0.12)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
        ))}

        {/* ── Data packet routes (comet streak + emit/receive effects) ── */}
        {routes.map((route, i) => (
          <g key={`route-${i}`} className="route-group">
            {/* Emit ring at data center */}
            <circle
              className="emit-ring"
              cx={route.from.x}
              cy={route.from.y}
              r="4"
              fill="none"
              stroke="rgba(167,139,250,0.6)"
              strokeWidth="1.5"
              opacity="0"
            />

            {/* Comet streak — short bright dash that sweeps along the path */}
            <path
              className="comet-streak"
              d={`M${route.from.x},${route.from.y} L${route.to.x},${route.to.y}`}
              stroke="rgba(251,191,36,0.9)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#pkt-glow)"
              opacity="0"
            />

            {/* Receive flash at client city */}
            <circle
              className="receive-flash"
              cx={route.to.x}
              cy={route.to.y}
              r="3"
              fill="none"
              stroke="rgba(212,168,83,0.7)"
              strokeWidth="1"
              opacity="0"
            />
          </g>
        ))}

        {/* ── Data center nodes ── */}
        {dataCenters.map((dc) => (
          <g key={dc.name}>
            <circle
              cx={dc.x}
              cy={dc.y}
              r="6"
              fill="rgba(124,58,237,0.15)"
              stroke="rgba(124,58,237,0.4)"
              strokeWidth="1"
            />
            <circle className="dc-dot" cx={dc.x} cy={dc.y} r="3.5" fill="rgba(124,58,237,0.85)" />
            <text
              className="dc-label"
              x={dc.labelSide === "l" ? dc.x - 9 : dc.x + 9}
              y={dc.y + 3.5}
              textAnchor={dc.labelSide === "l" ? "end" : "start"}
              fill="#57534E"
              fontSize="8.5"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="500"
            >
              {dc.name}
            </text>
          </g>
        ))}

        {/* ── Client city nodes ── */}
        {clientCities.map((city) => (
          <g key={city.name}>
            <circle
              className="client-dot"
              cx={city.x}
              cy={city.y}
              r={2.5}
              fill="rgba(180,83,9,0.85)"
            />
            <text
              className="client-label"
              x={city.x + 7}
              y={city.y + 3.5}
              textAnchor="start"
              fill="rgba(120,113,108,0.7)"
              fontSize="8.5"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="400"
            >
              {city.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
