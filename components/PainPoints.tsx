"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onHeroReady } from "@/lib/heroReady";
import WordReveal from "@/components/ui/WordReveal";

gsap.registerPlugin(ScrollTrigger);

/* ── Respects prefers-reduced-motion ── */
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);
  return reduced;
}

/* ────────────────────────────────────────────────────────────────── */
/*  SVG Graphics — one bespoke illustration per card                 */
/* ────────────────────────────────────────────────────────────────── */

function OutdatedSiteGraphic() {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden="true"
    >
      {/* Browser chrome */}
      <rect
        x="16"
        y="12"
        width="288"
        height="176"
        rx="8"
        fill="white"
        fillOpacity="0.03"
        stroke="white"
        strokeOpacity="0.06"
      />
      {/* Title bar */}
      <rect
        x="16"
        y="12"
        width="288"
        height="28"
        rx="8"
        fill="white"
        fillOpacity="0.04"
      />
      <rect
        x="16"
        y="32"
        width="288"
        height="8"
        fill="white"
        fillOpacity="0.04"
      />
      {/* Dots */}
      <circle cx="32" cy="26" r="4" fill="#ff5f57" fillOpacity="0.6" />
      <circle cx="46" cy="26" r="4" fill="#febc2e" fillOpacity="0.6" />
      <circle cx="60" cy="26" r="4" fill="#28c840" fillOpacity="0.6" />
      {/* URL bar */}
      <rect
        x="80"
        y="20"
        width="140"
        height="12"
        rx="6"
        fill="white"
        fillOpacity="0.04"
      />
      <text
        x="150"
        y="29"
        textAnchor="middle"
        fill="white"
        fillOpacity="0.15"
        fontSize="7"
        fontFamily="monospace"
      >
        http://not-secure.com
      </text>

      {/* Broken layout blocks */}
      <rect
        x="28"
        y="52"
        width="120"
        height="14"
        rx="2"
        fill="white"
        fillOpacity="0.06"
      />
      <rect
        x="28"
        y="72"
        width="180"
        height="8"
        rx="2"
        fill="white"
        fillOpacity="0.03"
      />
      <rect
        x="28"
        y="84"
        width="160"
        height="8"
        rx="2"
        fill="white"
        fillOpacity="0.03"
      />
      <rect
        x="28"
        y="96"
        width="140"
        height="8"
        rx="2"
        fill="white"
        fillOpacity="0.03"
      />

      {/* Broken image placeholder */}
      <rect
        x="200"
        y="52"
        width="92"
        height="68"
        rx="4"
        fill="white"
        fillOpacity="0.03"
        stroke="white"
        strokeOpacity="0.05"
        strokeDasharray="4 4"
      />
      <text
        x="246"
        y="90"
        textAnchor="middle"
        fill="white"
        fillOpacity="0.1"
        fontSize="24"
      >
        ✕
      </text>
    </svg>
  );
}

function ManualWorkGraphic() {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden="true"
    >
      {/* Scattered sticky notes */}
      <g transform="rotate(-4 60 50)">
        <rect
          x="24"
          y="30"
          width="72"
          height="72"
          rx="2"
          fill="#febc2e"
          fillOpacity="0.08"
          stroke="#febc2e"
          strokeOpacity="0.12"
        />
        <line
          x1="34"
          y1="50"
          x2="82"
          y2="50"
          stroke="white"
          strokeOpacity="0.08"
          strokeWidth="1.5"
        />
        <line
          x1="34"
          y1="60"
          x2="76"
          y2="60"
          stroke="white"
          strokeOpacity="0.06"
          strokeWidth="1.5"
        />
        <line
          x1="34"
          y1="70"
          x2="68"
          y2="70"
          stroke="white"
          strokeOpacity="0.04"
          strokeWidth="1.5"
        />
      </g>

      <g transform="rotate(3 180 40)">
        <rect
          x="112"
          y="20"
          width="72"
          height="72"
          rx="2"
          fill="#ff5f57"
          fillOpacity="0.06"
          stroke="#ff5f57"
          strokeOpacity="0.10"
        />
        <line
          x1="122"
          y1="40"
          x2="170"
          y2="40"
          stroke="white"
          strokeOpacity="0.08"
          strokeWidth="1.5"
        />
        <line
          x1="122"
          y1="50"
          x2="164"
          y2="50"
          stroke="white"
          strokeOpacity="0.06"
          strokeWidth="1.5"
        />
        <line
          x1="122"
          y1="60"
          x2="156"
          y2="60"
          stroke="white"
          strokeOpacity="0.04"
          strokeWidth="1.5"
        />
      </g>

      <g transform="rotate(-2 260 55)">
        <rect
          x="208"
          y="36"
          width="72"
          height="72"
          rx="2"
          fill="rgba(64,224,255,0.06)"
          stroke="rgba(64,224,255,0.10)"
        />
        <line
          x1="218"
          y1="56"
          x2="266"
          y2="56"
          stroke="white"
          strokeOpacity="0.08"
          strokeWidth="1.5"
        />
        <line
          x1="218"
          y1="66"
          x2="260"
          y2="66"
          stroke="white"
          strokeOpacity="0.06"
          strokeWidth="1.5"
        />
        <line
          x1="218"
          y1="76"
          x2="252"
          y2="76"
          stroke="white"
          strokeOpacity="0.04"
          strokeWidth="1.5"
        />
      </g>

      {/* Clipboard */}
      <rect
        x="100"
        y="105"
        width="120"
        height="82"
        rx="6"
        fill="white"
        fillOpacity="0.04"
        stroke="white"
        strokeOpacity="0.06"
      />
      <rect
        x="140"
        y="99"
        width="40"
        height="12"
        rx="6"
        fill="white"
        fillOpacity="0.06"
      />

      {/* Manual checklist */}
      <rect
        x="116"
        y="122"
        width="10"
        height="10"
        rx="2"
        stroke="white"
        strokeOpacity="0.12"
        fill="none"
      />
      <line
        x1="132"
        y1="127"
        x2="196"
        y2="127"
        stroke="white"
        strokeOpacity="0.06"
        strokeWidth="1.5"
      />

      <rect
        x="116"
        y="140"
        width="10"
        height="10"
        rx="2"
        stroke="white"
        strokeOpacity="0.12"
        fill="none"
      />
      <line
        x1="132"
        y1="145"
        x2="188"
        y2="145"
        stroke="white"
        strokeOpacity="0.06"
        strokeWidth="1.5"
      />

      <rect
        x="116"
        y="158"
        width="10"
        height="10"
        rx="2"
        stroke="white"
        strokeOpacity="0.12"
        fill="none"
      />
      <line
        x1="132"
        y1="163"
        x2="180"
        y2="163"
        stroke="white"
        strokeOpacity="0.06"
        strokeWidth="1.5"
      />

      {/* Pen / pencil accent */}
      <g transform="rotate(35 280 150)">
        <rect
          x="270"
          y="125"
          width="5"
          height="50"
          rx="2"
          fill="rgba(64,224,255,0.15)"
        />
        <polygon
          points="270,175 275,175 272.5,182"
          fill="rgba(64,224,255,0.2)"
        />
      </g>

      {/* Clock suggesting wasted time */}
      <circle
        cx="52"
        cy="155"
        r="22"
        stroke="white"
        strokeOpacity="0.06"
        strokeWidth="1.5"
        fill="white"
        fillOpacity="0.02"
      />
      <line
        x1="52"
        y1="155"
        x2="52"
        y2="140"
        stroke="white"
        strokeOpacity="0.15"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="52"
        y1="155"
        x2="62"
        y2="158"
        stroke="white"
        strokeOpacity="0.10"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="52" cy="155" r="2" fill="white" fillOpacity="0.15" />
    </svg>
  );
}

function AbandonedSiteGraphic() {
  const reducedMotion = useReducedMotion();
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden="true"
    >
      {/* Dashboard frame */}
      <rect
        x="16"
        y="12"
        width="288"
        height="176"
        rx="8"
        fill="white"
        fillOpacity="0.03"
        stroke="white"
        strokeOpacity="0.06"
      />

      {/* Top bar with status indicators */}
      <rect
        x="16"
        y="12"
        width="288"
        height="24"
        rx="8"
        fill="white"
        fillOpacity="0.03"
      />
      <rect
        x="16"
        y="28"
        width="288"
        height="8"
        fill="white"
        fillOpacity="0.03"
      />
      <circle cx="280" cy="24" r="4" fill="#ff5f57" fillOpacity="0.5" />
      <text
        x="32"
        y="27"
        fill="white"
        fillOpacity="0.12"
        fontSize="8"
        fontFamily="monospace"
      >
        Analytics Dashboard
      </text>

      {/* Flatlined traffic chart */}
      <text
        x="32"
        y="52"
        fill="white"
        fillOpacity="0.08"
        fontSize="7"
        fontFamily="monospace"
      >
        TRAFFIC
      </text>
      {/* Y-axis */}
      <line
        x1="32"
        y1="58"
        x2="32"
        y2="120"
        stroke="white"
        strokeOpacity="0.04"
        strokeWidth="1"
      />
      {/* X-axis */}
      <line
        x1="32"
        y1="120"
        x2="190"
        y2="120"
        stroke="white"
        strokeOpacity="0.04"
        strokeWidth="1"
      />
      {/* Initial spike that flatlines */}
      <polyline
        points="36,100 50,80 64,88 78,75 92,95 106,110 120,115 134,117 148,118 162,118 176,118 190,118"
        stroke="rgba(64,224,255,0.25)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dashed "should be" ghost line */}
      <polyline
        points="92,95 106,82 120,70 134,62 148,55 162,50 176,46 190,42"
        stroke="rgba(64,224,255,0.06)"
        strokeWidth="1"
        fill="none"
        strokeDasharray="4 4"
      />

      {/* "Last updated" stale timestamp */}
      <rect
        x="200"
        y="56"
        width="92"
        height="36"
        rx="4"
        fill="white"
        fillOpacity="0.02"
        stroke="white"
        strokeOpacity="0.04"
      />
      <text
        x="246"
        y="71"
        textAnchor="middle"
        fill="white"
        fillOpacity="0.08"
        fontSize="6"
        fontFamily="monospace"
      >
        Last updated
      </text>
      <text
        x="246"
        y="83"
        textAnchor="middle"
        fill="#ff5f57"
        fillOpacity="0.4"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="bold"
      >
        18 months ago
      </text>

      {/* Stat boxes — all declining */}
      <rect
        x="200"
        y="100"
        width="42"
        height="32"
        rx="4"
        fill="white"
        fillOpacity="0.02"
        stroke="white"
        strokeOpacity="0.04"
      />
      <text
        x="221"
        y="115"
        textAnchor="middle"
        fill="#ff5f57"
        fillOpacity="0.3"
        fontSize="10"
        fontFamily="monospace"
        fontWeight="bold"
      >
        ↓ 47%
      </text>
      <text
        x="221"
        y="127"
        textAnchor="middle"
        fill="white"
        fillOpacity="0.06"
        fontSize="5"
        fontFamily="monospace"
      >
        VISITS
      </text>

      <rect
        x="250"
        y="100"
        width="42"
        height="32"
        rx="4"
        fill="white"
        fillOpacity="0.02"
        stroke="white"
        strokeOpacity="0.04"
      />
      <text
        x="271"
        y="115"
        textAnchor="middle"
        fill="#ff5f57"
        fillOpacity="0.3"
        fontSize="10"
        fontFamily="monospace"
        fontWeight="bold"
      >
        ↓ 63%
      </text>
      <text
        x="271"
        y="127"
        textAnchor="middle"
        fill="white"
        fillOpacity="0.06"
        fontSize="5"
        fontFamily="monospace"
      >
        LEADS
      </text>

      {/* Bottom row — stale ranking positions */}
      <rect
        x="32"
        y="132"
        width="160"
        height="46"
        rx="4"
        fill="white"
        fillOpacity="0.02"
        stroke="white"
        strokeOpacity="0.04"
      />
      <text
        x="42"
        y="148"
        fill="white"
        fillOpacity="0.08"
        fontSize="7"
        fontFamily="monospace"
      >
        SEARCH RANKINGS
      </text>
      {/* Ranking bars declining */}
      <rect
        x="42"
        y="155"
        width="60"
        height="5"
        rx="1"
        fill="rgba(64,224,255,0.08)"
      />
      <rect
        x="42"
        y="163"
        width="40"
        height="5"
        rx="1"
        fill="rgba(64,224,255,0.05)"
      />
      <rect
        x="42"
        y="171"
        width="20"
        height="5"
        rx="1"
        fill="#ff5f57"
        fillOpacity="0.08"
      />

      {/* Cobweb in corner */}
      <path
        d="M288 148 Q296 152 304 148 M288 152 Q296 158 304 152 M288 156 Q296 164 304 156"
        stroke="white"
        strokeOpacity="0.04"
        strokeWidth="0.5"
        fill="none"
      />

      {/* Dust particles */}
      <circle cx="250" cy="160" r="1" fill="white" fillOpacity="0.04" />
      <circle cx="270" cy="170" r="0.8" fill="white" fillOpacity="0.03" />
      <circle cx="230" cy="165" r="1.2" fill="white" fillOpacity="0.03" />

      {/* Red status dot pulsing */}
      <circle cx="280" cy="24" r="4" fill="#ff5f57" fillOpacity="0.5">
        {!reducedMotion && (
          <animate
            attributeName="fillOpacity"
            values="0.5;0.2;0.5"
            dur="2s"
            repeatCount="indefinite"
          />
        )}
      </circle>
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────── */
/*  Card data                                                        */
/* ────────────────────────────────────────────────────────────────── */

const opportunities = [
  {
    number: "01",
    title: "Their websites are stuck in\u00A02018",
    description:
      "Slow templates, broken mobile layouts, zero SEO. A fast, custom-built site puts you in a different league overnight.",
    Graphic: OutdatedSiteGraphic,
    gradient: "from-cyan-500/[0.06] via-transparent to-transparent",
  },
  {
    number: "02",
    title: "They\u2019re doing everything by\u00A0hand",
    description:
      "Follow-ups, scheduling, data entry \u2014 all manual. One automated workflow saves hours and closes leads faster.",
    Graphic: ManualWorkGraphic,
    gradient: "from-amber-500/[0.04] via-transparent to-transparent",
  },
  {
    number: "03",
    title: "They launched and walked\u00A0away",
    description:
      "No updates, no optimization, no strategy. Continuous improvement means you pull further ahead every single month.",
    Graphic: AbandonedSiteGraphic,
    gradient: "from-red-500/[0.04] via-transparent to-transparent",
  },
];

/* ────────────────────────────────────────────────────────────────── */
/*  Component                                                        */
/* ────────────────────────────────────────────────────────────────── */

export default function PainPoints() {
  const sectionRef = useRef<HTMLElement>(null);

  /* ── Set initial hidden states before first paint (prevents CLS) ── */
  useLayoutEffect(() => {
    const s = sectionRef.current;
    if (!s) return;

    const label = s.querySelector("[data-label]") as HTMLElement;
    if (label) label.style.opacity = "0";

    s.querySelectorAll<HTMLElement>("[data-card]").forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(32px)";
    });

    const closer = s.querySelector("[data-closer]") as HTMLElement;
    if (closer) {
      closer.style.opacity = "0";
      closer.style.transform = "translateY(12px)";
    }
  }, []);

  /* ── Scroll-triggered reveal animations ── */
  useEffect(() => {
    let ctx: gsap.Context | null = null;

    onHeroReady(() => {
      ctx = gsap.context(() => {
        const s = sectionRef.current;
        if (!s) return;

        /* Label */
        const label = s.querySelector("[data-label]");
        if (label) {
          gsap.to(label, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: { trigger: label, start: "top 85%" },
          });
        }

        /* Cards — staggered entrance */
        const cards = s.querySelectorAll("[data-card]");
        if (cards.length) {
          gsap.to(cards, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: { trigger: cards[0], start: "top 82%" },
          });
        }

        /* Closer */
        const closer = s.querySelector("[data-closer]");
        if (closer) {
          gsap.to(closer, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: { trigger: closer, start: "top 90%" },
          });
        }
      }, sectionRef);
    });

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-14 pb-16 sm:pt-20 sm:pb-24 md:pt-20 md:pb-28 bg-[#050505]"
      aria-labelledby="pain-points-heading"
    >
      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
          contain: "strict",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 relative">
        {/* ── Header ── */}
        <div className="mb-14 sm:mb-20">
          <p
            data-label
            className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4"
          >
            The Opportunity
          </p>
          <WordReveal
            id="pain-points-heading"
            as="h2"
            text="Most businesses in your area aren't doing this. Yours can."
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight max-w-2xl"
          />
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {opportunities.map((item, index) => {
            const { Graphic } = item;
            const isLast = index === 2;
            return (
              <div
                key={index}
                data-card
                className={`group relative rounded-2xl border border-white/[0.06] overflow-hidden transition-colors duration-300 hover:border-white/[0.10] flex flex-col${isLast ? " sm:col-span-2 lg:col-span-1 sm:flex-row lg:flex-col" : ""}`}
              >
                {/* Card gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${item.gradient} pointer-events-none`}
                  aria-hidden="true"
                />
                {/* Base tint */}
                <div
                  className="absolute inset-0 bg-white/[0.015] pointer-events-none"
                  aria-hidden="true"
                />

                {/* Text content */}
                <div className="relative flex-1 px-5 pt-6 pb-5 sm:px-7 sm:pt-7 sm:pb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[0.9375rem] text-cyber-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Divider — horizontal by default, vertical on sm for last card, horizontal again at lg */}
                {isLast ? (
                  <>
                    <div
                      className="hidden lg:block mx-7 border-t border-white/[0.05]"
                      aria-hidden="true"
                    />
                    <div
                      className="hidden sm:block lg:hidden self-stretch border-l border-white/[0.05] my-6"
                      aria-hidden="true"
                    />
                    <div
                      className="sm:hidden mx-5 border-t border-white/[0.05]"
                      aria-hidden="true"
                    />
                  </>
                ) : (
                  <div
                    className="mx-5 sm:mx-7 border-t border-white/[0.05]"
                    aria-hidden="true"
                  />
                )}

                {/* Graphic area */}
                <div
                  className={`relative px-4 pt-4 pb-4 sm:px-5 sm:pt-5 sm:pb-5${isLast ? " sm:w-[45%] lg:w-auto" : ""}`}
                >
                  <Graphic />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Closer ── */}
        <div className="mt-14 sm:mt-20 max-w-xl">
          <div data-closer>
            <p className="text-lg sm:text-xl text-cyber-gray-300 leading-relaxed">
              The bar is low.{" "}
              <span className="text-white font-medium">
                Let&apos;s raise it.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
