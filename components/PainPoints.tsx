"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onHeroReady } from "@/lib/heroReady";

gsap.registerPlugin(ScrollTrigger);

/* ── Card graphics — monotone UI mockups with subtle accent ── */

/* Card 1: Spreadsheet with cell-by-cell data entry cursor + scroll */
function DataEntryGraphic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  /* All unique rows the animation cycles through. The first 6 are
     duplicated as a seamless buffer at the end so the viewport is
     always full and the loop reset is completely invisible. */
  const mainRows = [
    { w1: "45%", w2: "30%", w3: "20%" },
    { w1: "35%", w2: "40%", w3: "15%" },
    { w1: "50%", w2: "25%", w3: "20%" },
    { w1: "40%", w2: "35%", w3: "18%" },
    { w1: "38%", w2: "28%", w3: "22%" },
    { w1: "42%", w2: "32%", w3: "16%" },
    { w1: "48%", w2: "22%", w3: "24%" },
    { w1: "36%", w2: "38%", w3: "19%" },
  ];

  /* Buffer = first 6 rows repeated (viewport ≈ 5 rows, +1 margin) */
  const rows = [...mainRows, ...mainRows.slice(0, 6)];
  const SCROLL_COUNT = mainRows.length; /* scroll this many before reset */

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const card = el.closest(".group") as HTMLElement;
    if (!card) return;

    const bright = "rgba(64, 224, 255, 0.30)";
    const filled = "rgba(64, 224, 255, 0.10)";
    let alive = true;
    let delayId: gsap.core.Tween | null = null;

    const runCycle = () => {
      if (!alive) return;
      if (tlRef.current) tlRef.current.kill();

      const scrollEl = scrollRef.current;
      if (!scrollEl) return;

      const allCells = scrollEl.querySelectorAll<HTMLDivElement>("[data-cell]");
      const rowEls = scrollEl.querySelectorAll("[data-row]");
      if (!allCells.length || rowEls.length < 2) return;

      const r0 = rowEls[0].getBoundingClientRect();
      const r1 = rowEls[1].getBoundingClientRect();
      const rowH = r1.top - r0.top;

      /* Snap to top — invisible because buffer = start rows */
      gsap.set(scrollEl, { y: 0 });
      allCells.forEach((c) => gsap.set(c, { clearProps: "backgroundColor" }));

      const tl = gsap.timeline({
        onComplete: () => {
          /* Buffer rows are now visible — they are identical copies
             of the first rows, so we can snap back instantly. */
          gsap.set(scrollEl, { y: 0 });
          allCells.forEach((c) =>
            gsap.set(c, { clearProps: "backgroundColor" }),
          );
          /* Restart immediately — no gap, no visible seam */
          if (alive) runCycle();
        },
      });
      tlRef.current = tl;

      for (let r = 0; r < SCROLL_COUNT; r++) {
        for (let c = 0; c < 3; c++) {
          const cell = allCells[r * 3 + c];
          if (!cell) continue;

          tl.to(
            cell,
            {
              backgroundColor: bright,
              duration: 0.1,
              ease: "power2.in",
            },
            c === 0 ? "+=0.06" : "+=0.14",
          );

          tl.to(
            cell,
            {
              backgroundColor: filled,
              duration: 0.14,
            },
            "+=0.12",
          );
        }

        /* Scroll up one row after all 3 cells filled */
        tl.to(
          scrollEl,
          {
            y: -(r + 1) * rowH,
            duration: 0.35,
            ease: "power2.inOut",
          },
          "+=0.15",
        );
      }
    };

    const startAnim = () => {
      alive = true;
      runCycle();
    };

    const stopAnim = () => {
      alive = false;
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }
      if (delayId) {
        delayId.kill();
        delayId = null;
      }
      const allCells = el.querySelectorAll<HTMLDivElement>("[data-cell]");
      allCells.forEach((c) => gsap.set(c, { clearProps: "backgroundColor" }));
      if (scrollRef.current) gsap.set(scrollRef.current, { y: 0 });
    };

    card.addEventListener("mouseenter", startAnim);
    card.addEventListener("mouseleave", stopAnim);

    return () => {
      card.removeEventListener("mouseenter", startAnim);
      card.removeEventListener("mouseleave", stopAnim);
      stopAnim();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-36 overflow-hidden">
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#0A0B0F] to-transparent z-10 pointer-events-none group-hover:from-[#0D0E14] transition-colors duration-300" />
      <div className="h-full px-6 sm:px-7 pt-2">
        {/* Header */}
        <div className="flex gap-2 mb-1.5 px-2">
          <span className="text-[8px] font-mono text-white/[0.35] w-[45%]">
            Name
          </span>
          <span className="text-[8px] font-mono text-white/[0.35] w-[30%]">
            Email
          </span>
          <span className="text-[8px] font-mono text-white/[0.35] w-[20%]">
            Time
          </span>
        </div>
        <div className="h-px w-full bg-white/[0.04] mb-1" />
        {/* Rows — GSAP handles scroll + cell highlights */}
        <div className="overflow-hidden h-[5.5rem]">
          <div ref={scrollRef} className="space-y-1">
            {rows.map((row, i) => (
              <div
                key={i}
                data-row
                className="flex items-center gap-2 px-2 py-1 rounded-md"
              >
                <div
                  data-cell
                  className="h-1.5 rounded-full bg-white/[0.06]"
                  style={{ width: row.w1 }}
                />
                <div
                  data-cell
                  className="h-1.5 rounded-full bg-white/[0.04]"
                  style={{ width: row.w2 }}
                />
                <div
                  data-cell
                  className="h-1.5 rounded-full bg-white/[0.04]"
                  style={{ width: row.w3 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Card 2: Scattered app windows — nothing connected */
function DisconnectedToolsGraphic() {
  return (
    <div className="relative w-full h-36 overflow-hidden">
      <div className="h-full px-6 sm:px-7 pt-4 pb-3 relative">
        {/* App window 1 — calendar */}
        <div className="absolute top-4 left-5 w-[45%] rounded-md border border-white/[0.06] bg-white/[0.02] p-2 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-rotate-1">
          <div className="flex gap-1 mb-2">
            <div className="w-1 h-1 rounded-full bg-white/[0.1]" />
            <div className="w-1 h-1 rounded-full bg-white/[0.1]" />
            <div className="w-1 h-1 rounded-full bg-white/[0.1]" />
          </div>
          <div className="grid grid-cols-4 gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-sm ${
                  i === 3
                    ? "bg-cyber-accent/15 group-hover:bg-cyber-accent/25 transition-colors duration-500"
                    : "bg-white/[0.04]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* App window 2 — email */}
        <div className="absolute top-8 right-5 w-[42%] rounded-md border border-white/[0.06] bg-white/[0.02] p-2 transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-1">
          <div className="flex gap-1 mb-2">
            <div className="w-1 h-1 rounded-full bg-white/[0.1]" />
            <div className="w-1 h-1 rounded-full bg-white/[0.1]" />
            <div className="w-1 h-1 rounded-full bg-white/[0.1]" />
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-3/4 rounded-full bg-white/[0.06]" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/[0.04]" />
            <div className="h-1.5 w-2/3 rounded-full bg-white/[0.04]" />
          </div>
        </div>

        {/* App window 3 — spreadsheet */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[50%] rounded-md border border-white/[0.06] bg-white/[0.02] p-2 transition-transform duration-500 group-hover:translate-y-1">
          <div className="flex gap-1 mb-2">
            <div className="w-1 h-1 rounded-full bg-white/[0.1]" />
            <div className="w-1 h-1 rounded-full bg-white/[0.1]" />
            <div className="w-1 h-1 rounded-full bg-white/[0.1]" />
          </div>
          <div className="grid grid-cols-3 gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-1.5 rounded-sm bg-white/[0.04]" />
            ))}
          </div>
        </div>

        {/* Dashed lines between — fade on hover */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 group-hover:opacity-30"
          aria-hidden="true"
        >
          <line
            x1="42%"
            y1="38%"
            x2="55%"
            y2="42%"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
            strokeDasharray="3 2"
          />
          <line
            x1="55%"
            y1="58%"
            x2="50%"
            y2="68%"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
            strokeDasharray="3 2"
          />
        </svg>
      </div>
    </div>
  );
}

/* Card 3: Browser frame with stuck loading bar */
function BrokenSiteGraphic() {
  return (
    <div className="relative w-full h-36 overflow-hidden">
      <div className="h-full px-6 sm:px-7 pt-2 pb-3">
        {/* Browser frame */}
        <div className="rounded-lg border border-white/[0.06] bg-white/[0.015] overflow-hidden h-full">
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 border-b border-white/[0.04] bg-white/[0.02]">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white/[0.08]" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/[0.08]" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/[0.08]" />
            </div>
            <div className="flex-1 mx-2 h-3 rounded bg-white/[0.03] flex items-center px-2">
              <div className="h-1 w-10 rounded-full bg-white/[0.06]" />
            </div>
          </div>

          {/* Loading bar */}
          <div className="h-0.5 w-full bg-white/[0.02] relative">
            <div className="h-full w-[20%] bg-cyber-accent/30 group-hover:bg-cyber-accent/50 group-hover:w-[35%] transition-all duration-700" />
          </div>

          {/* Skeleton rows — pulse loop on hover */}
          <div className="p-2.5 space-y-1.5">
            <div
              className="h-3.5 w-2/3 rounded bg-white/[0.04] group-hover:animate-skeleton-pulse"
              style={{ animationDelay: "0ms" }}
            />
            <div
              className="h-2 w-1/2 rounded bg-white/[0.03] group-hover:animate-skeleton-pulse"
              style={{ animationDelay: "200ms" }}
            />
            <div
              className="h-2 w-3/4 rounded bg-white/[0.03] group-hover:animate-skeleton-pulse"
              style={{ animationDelay: "400ms" }}
            />
            <div className="flex gap-1.5 pt-0.5">
              <div
                className="h-5 flex-1 rounded bg-white/[0.03] group-hover:animate-skeleton-pulse"
                style={{ animationDelay: "600ms" }}
              />
              <div
                className="h-5 flex-1 rounded bg-white/[0.03] group-hover:animate-skeleton-pulse"
                style={{ animationDelay: "800ms" }}
              />
              <div
                className="h-5 w-5 rounded bg-white/[0.03] group-hover:animate-skeleton-pulse"
                style={{ animationDelay: "1000ms" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const painPoints = [
  {
    title: "Buried in data entry",
    description:
      "The same information, entered in multiple places. It's tedious work that adds up fast.",
    graphic: <DataEntryGraphic />,
  },
  {
    title: "Disconnected tools",
    description:
      "When your tools don't talk to each other, you end up being the middleman between all of them.",
    graphic: <DisconnectedToolsGraphic />,
  },
  {
    title: "A slow and complex website",
    description:
      "Clients are searching for businesses like yours right now. If your site is slow or hard to use, they're finding someone else.",
    graphic: <BrokenSiteGraphic />,
  },
];

export default function PainPoints() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const closerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    /* Hide immediately so nothing is visible before hero finishes */
    if (headerRef.current) gsap.set(headerRef.current, { opacity: 0, y: 12 });
    const cards = cardRefs.current.filter(Boolean);
    if (cards.length) gsap.set(cards, { opacity: 0, y: 16 });
    if (closerRef.current) gsap.set(closerRef.current, { opacity: 0, y: 12 });

    onHeroReady(() => {
      ctx = gsap.context(() => {
        /* ── Header fade up ── */
        if (headerRef.current) {
          gsap.to(headerRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: { trigger: headerRef.current, start: "top 95%" },
          });
        }

        /* ── Cards fade in ── */
        if (cards.length) {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cards[0],
              start: "top 95%",
            },
          });
        }

        /* ── Closer ── */
        if (closerRef.current) {
          gsap.to(closerRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: closerRef.current,
              start: "top 88%",
            },
          });
        }
      }, sectionRef);
    });

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-24 md:py-28 bg-[#050505]"
      aria-labelledby="pain-points-heading"
    >
      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
          contain: "strict",
          willChange: "transform",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 relative">
        {/* Header */}
        <div ref={headerRef} className="mb-14 sm:mb-20">
          <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
            The Problem
          </p>
          <h2
            id="pain-points-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight max-w-2xl"
          >
            Running a business shouldn&apos;t feel like this.
          </h2>
        </div>

        {/* Card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="group relative rounded-2xl border border-white/[0.06] bg-[#0A0B0F] overflow-hidden transition-colors duration-300 hover:border-white/[0.12] hover:bg-[#0D0E14] flex flex-col"
            >
              {/* Accent glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(64,224,255,0.06), transparent 70%)",
                }}
                aria-hidden="true"
              />

              {/* Text content */}
              <div className="relative px-6 sm:px-7 pt-6 sm:pt-7">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug mb-2.5">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-cyber-gray-300/80 leading-relaxed">
                  {point.description}
                </p>
              </div>

              {/* Graphic accent — bottom of card */}
              <div
                className="relative mt-auto pt-4 pb-5 sm:pb-6"
                aria-hidden="true"
              >
                {point.graphic}
              </div>
            </div>
          ))}
        </div>

        {/* Closer */}
        <div ref={closerRef} className="mt-14 sm:mt-20 max-w-xl">
          <p className="text-lg sm:text-xl text-cyber-gray-300 leading-relaxed">
            Every hour you spend on busywork is an hour not spent growing your
            business.{" "}
            <span className="text-white font-medium">
              That&apos;s what I fix.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
