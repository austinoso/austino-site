"use client";

import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    month: 1,
    label: "month",
    title: "Baseline & strategy",
    description:
      "Analytics go live. I audit your current rankings, identify pages where visitors leave without taking action, and map out which keywords you should be targeting. We establish your baseline so every future improvement is\u00A0measurable.",
  },
  {
    month: 3,
    label: "months",
    title: "Data-driven fixes",
    description:
      "If most visitors are leaving your booking page without booking, I dig into why. Redesign the flow. Simplify the form. Changes like that routinely lift completions 20\u201330%. Two new service pages go live and start showing up in search\u00A0results.",
  },
  {
    month: 6,
    label: "months",
    title: "Authority building",
    description:
      "You\u2019re now ranking for 30+ keywords you weren\u2019t targeting before. New pages are pulling in organic traffic for specific searches your customers actually make, without paying for\u00A0ads.",
  },
  {
    month: 12,
    label: "months",
    title: "Sustained momentum",
    description:
      "Your site is the go-to result in your area. Traffic has grown steadily month over month, local rankings dominate, and your site generates leads consistently. Competitors still have a 5-page\u00A0brochure.",
  },
];

/**
 * Active card = whichever card's center is closest to viewport center.
 */

export default function TimelineCards() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    function updateActive() {
      // Anchor = viewport center — where the user's eye naturally rests
      const anchor = window.innerHeight / 2;

      // Pick the card whose center is closest to viewport center
      let closestIdx = -1;
      let closestDist = Infinity;

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - anchor);

        if (
          rect.bottom > 0 &&
          rect.top < window.innerHeight &&
          dist < closestDist
        ) {
          closestDist = dist;
          closestIdx = i;
        }
      });

      if (closestIdx !== -1) {
        setActiveIndex(closestIdx);
      }
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActive);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    updateActive();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative">
      {/* Vertical timeline line — gold gradient that intensifies downward */}
      <div
        className="absolute left-[19px] sm:left-[23px] top-3 bottom-3 w-px"
        style={{
          background:
            "linear-gradient(to bottom, rgba(180,83,9,0.12), rgba(180,83,9,0.25) 40%, rgba(180,83,9,0.45) 75%, rgba(180,83,9,0.7))",
        }}
        aria-hidden="true"
      />

      <div className="flex flex-col gap-6 sm:gap-8">
        {milestones.map((milestone, i) => {
          const isLast = i === milestones.length - 1;
          const isActive = i === activeIndex;

          return (
            <div
              key={milestone.month}
              className="relative flex gap-5 sm:gap-6"
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              {/* Timeline node */}
              <div className="flex-shrink-0 relative z-10 flex flex-col items-center w-10 sm:w-12 pt-5">
                <div
                  className="w-2.5 h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{
                    backgroundColor: isActive
                      ? "#B45309"
                      : isLast
                        ? "rgba(180,83,9,0.7)"
                        : "rgba(180,83,9,0.35)",
                    boxShadow: isActive
                      ? "0 0 0 5px rgba(180,83,9,0.15), 0 0 12px rgba(180,83,9,0.2)"
                      : isLast
                        ? "0 0 0 5px rgba(180,83,9,0.1)"
                        : "0 0 0 4px rgba(180,83,9,0.06)",
                  }}
                />
              </div>

              {/* Card */}
              <div className="flex-1 min-w-0">
                <div
                  className={[
                    "rounded-xl p-5 sm:p-6 border transition-all duration-500 ease-out",
                    isActive
                      ? "bg-white border-stone-300"
                      : isLast
                        ? "bg-warm-gold/[0.04] border-warm-gold/20"
                        : "bg-white border-stone-200",
                  ].join(" ")}
                  style={{
                    transform: isActive ? "translateY(-4px)" : "translateY(0)",
                    boxShadow: isActive
                      ? "6px 6px 0px 0px #C4B5A0, 0 4px 16px rgba(0,0,0,0.06)"
                      : "0 0 0 0 transparent",
                  }}
                >
                  {/* Month indicator + title row */}
                  <div className="flex items-baseline gap-3 mb-3">
                    <span
                      className="text-3xl sm:text-4xl font-display font-bold leading-none transition-colors duration-500"
                      style={{
                        color: isActive
                          ? "#B45309"
                          : isLast
                            ? "#B45309"
                            : "rgba(180,83,9,0.55)",
                      }}
                    >
                      {milestone.month}
                    </span>
                    <span className="text-[10px] font-mono text-stone-400 uppercase tracking-[0.15em] -ml-1 self-end pb-1">
                      {milestone.label}
                    </span>
                    <div
                      className={`flex-1 h-px transition-colors duration-500 ${
                        isActive
                          ? "bg-warm-gold/20"
                          : isLast
                            ? "bg-warm-gold/15"
                            : "bg-stone-200"
                      }`}
                    />
                  </div>

                  <h3 className="text-base font-semibold text-warm-white mb-1.5">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed text-pretty">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
