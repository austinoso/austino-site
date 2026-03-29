"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────────── */
/*  StepIndicator                                                      */
/*  Fixed to the right edge of the viewport while the three-act zone  */
/*  is in view. Updates active step via IntersectionObserver.         */
/*  Hidden on mobile (md+) and outside the act zone.                  */
/* ─────────────────────────────────────────────────────────────────── */

const STEPS = [
  { id: "get-found", label: "Get Found", n: "01" },
  { id: "get-chosen", label: "Get Chosen", n: "02" },
  { id: "get-better", label: "Get Better", n: "03" },
];

export default function StepIndicator() {
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observers: IntersectionObserver[] = [];

    STEPS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
            setVisible(true);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    /* Hide indicator when none of the acts are in the 20% center band */
    const allActIds = STEPS.map(({ id }) => id);
    const hideObs = new IntersectionObserver(
      (entries) => {
        const anyIntersecting = entries.some((e) => e.isIntersecting);
        if (!anyIntersecting) setVisible(false);
      },
      { rootMargin: "-10% 0px -10% 0px", threshold: 0 },
    );
    allActIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) hideObs.observe(el);
    });
    observers.push(hideObs);

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`
        fixed right-6 top-1/2 -translate-y-1/2 z-40
        hidden lg:flex flex-col items-end gap-3
        transition-all duration-500
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}
      `}
    >
      {STEPS.map(({ id, label, n }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => {
              const el = document.getElementById(id);
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={`
              group flex items-center gap-2 cursor-pointer
              transition-all duration-300
              ${isActive ? "opacity-100" : "opacity-35 hover:opacity-60"}
            `}
          >
            {/* Label — slides in on active */}
            <span
              className={`
                text-[11px] font-medium text-stone-600 font-mono uppercase tracking-widest
                transition-all duration-300
                ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
              `}
            >
              {label}
            </span>

            {/* Track + pip */}
            <div className="flex items-center gap-1.5">
              <div
                className={`
                  h-[1px] transition-all duration-300
                  ${isActive ? "w-5 bg-warm-gold" : "w-2 bg-stone-300 group-hover:w-3"}
                `}
              />
              <span
                className={`
                  text-[10px] font-mono font-semibold
                  transition-colors duration-300
                  ${isActive ? "text-warm-gold" : "text-stone-400"}
                `}
              >
                {n}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
