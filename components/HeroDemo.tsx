"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { signalHeroReady } from "@/lib/heroReady";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

type GSAPType = (typeof import("gsap"))["gsap"];

/* ------------------------------------------------------------------ */
/*  Hero demo: "The Three Acts" — Get Found, Get Chosen, Get Better.   */
/*  No browser frame. Clean canvas. Three visual vignettes morph into  */
/*  each other in a smooth infinite loop (~16s per cycle).             */
/* ------------------------------------------------------------------ */

const CANONICAL_W = 640;
const CANONICAL_H = 400;

/* Unified easing */
const EASE_SMOOTH = "power3.out";
const EASE_GLIDE = "power2.inOut";

export default function HeroDemo() {
  const demoRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageScale, setStageScale] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(false);
  const masterTlRef = useRef<gsap.core.Timeline | null>(null);

  /* Acts */
  const act1 = useRef<HTMLDivElement>(null);
  const act2 = useRef<HTMLDivElement>(null);
  const act3 = useRef<HTMLDivElement>(null);

  /* Counter refs for Act 3 */
  const statLeads = useRef<HTMLSpanElement>(null);
  const statConv = useRef<HTMLSpanElement>(null);

  /* Debug mode */
  const [isDebug, setIsDebug] = useState(false);
  const [debugScene, setDebugScene] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setIsDebug(params.has("debug"));
    }
  }, []);

  /* -- Scale stage to fit container -- */
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setStageScale(entry.contentRect.width / CANONICAL_W);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const SCENE_LABELS = ["Act 1 - Get Found", "Act 2 - Get Chosen", "Act 3 - Get Better"];

  const prevScene = useCallback(() => setDebugScene((s) => Math.max(0, s - 1)), []);
  const nextScene = useCallback(() => setDebugScene((s) => Math.min(2, s + 1)), []);

  /* -- Debug mode: show one act at a time -- */
  useEffect(() => {
    if (!isDebug) return;
    const acts = [act1, act2, act3].map((r) => r.current!);
    if (!acts.every(Boolean)) return;

    let cancelled = false;
    import("gsap").then(({ gsap }) => {
      if (cancelled) return;
      signalHeroReady();

      acts.forEach((a) => gsap.set(a, { opacity: 0, scale: 1 }));
      gsap.set(acts[debugScene], { opacity: 1 });

      switch (debugScene) {
        case 0:
          gsap.set(".a1-search", { opacity: 1 });
          gsap.set(".a1-query", { clipPath: "inset(0 0% 0 0)" });
          gsap.set(".a1-result", { opacity: 1, y: 0 });
          gsap.set(".a1-ghost", { opacity: 1, y: 0 });
          break;
        case 1:
          gsap.set(".a2-nav", { opacity: 1, y: 0 });
          gsap.set(".a2-headline", { opacity: 1, y: 0 });
          gsap.set(".a2-rule", { scaleX: 1 });
          gsap.set(".a2-body", { opacity: 1, y: 0 });
          gsap.set(".a2-cta", { opacity: 1, y: 0 });
          gsap.set(".a2-cards", { opacity: 1, y: 0 });
          break;
        case 2:
          gsap.set(".a3-chart-line", { strokeDashoffset: 0 });
          gsap.set(".a3-chart-fill", { opacity: 0.12 });
          gsap.set(".a3-stat", { opacity: 1, y: 0 });
          gsap.set(".a3-label", { opacity: 1 });
          gsap.set(".a3-title", { opacity: 1 });
          if (statLeads.current) statLeads.current.textContent = "47";
          if (statConv.current) statConv.current.textContent = "23%";
          break;
      }
    });

    return () => {
      cancelled = true;
    };
  }, [isDebug, debugScene]);

  /* -- Main animation timeline -- */
  useEffect(() => {
    if (isDebug) return;

    const acts = [act1, act2, act3].map((r) => r.current!);
    if (!acts.every(Boolean)) return;

    let ctx: ReturnType<GSAPType["context"]> | undefined;

    import("gsap").then(({ gsap }) => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        /* Show Act 1 final state */
        gsap.set(acts[0], { opacity: 1 });
        gsap.set(".a1-search", { opacity: 1 });
        gsap.set(".a1-query", { clipPath: "inset(0 0% 0 0)" });
        gsap.set(".a1-result", { opacity: 1, y: 0 });
        gsap.set(".a1-ghost", { opacity: 1, y: 0 });
        signalHeroReady();
        return;
      }

      ctx = gsap.context(() => {
        const buildTimeline = () => {
          /* ---- Reset everything ---- */
          gsap.set(acts, { opacity: 0, scale: 1 });

          /* Act 1 resets */
          gsap.set(".a1-search", { opacity: 0 });
          gsap.set(".a1-query", { clipPath: "inset(0 100% 0 0)" });
          gsap.set(".a1-result", { opacity: 0, y: 14 });
          gsap.set(".a1-ghost", { opacity: 0, y: 10 });

          /* Act 2 resets */
          gsap.set(".a2-nav", { opacity: 0, y: -10 });
          gsap.set(".a2-headline", { opacity: 0, y: 16 });
          gsap.set(".a2-rule", { scaleX: 0, transformOrigin: "left" });
          gsap.set(".a2-body", { opacity: 0, y: 12 });
          gsap.set(".a2-cta", { opacity: 0, y: 12 });
          gsap.set(".a2-cards", { opacity: 0, y: 20 });

          /* Act 3 resets */
          gsap.set(".a3-chart-line", { strokeDashoffset: 600 });
          gsap.set(".a3-chart-fill", { opacity: 0 });
          gsap.set(".a3-stat", { opacity: 0, y: 16 });
          gsap.set(".a3-label", { opacity: 0 });
          gsap.set(".a3-title", { opacity: 0, y: 8 });
          if (statLeads.current) statLeads.current.textContent = "0";
          if (statConv.current) statConv.current.textContent = "0%";

          const tl = gsap.timeline({
            onComplete: () => buildTimeline(),
          });

          masterTlRef.current = tl;
          if (isPausedRef.current) tl.pause();

          /* ================================================= */
          /* ===== ACT 1: GET FOUND                       ===== */
          /* ================================================= */
          tl.set(acts[0], { opacity: 1 });
          tl.call(() => signalHeroReady());

          /* Search bar fades in */
          tl.to(".a1-search", { opacity: 1, duration: 0.5, ease: EASE_SMOOTH }, "+=0.4");

          /* Query text reveals left-to-right */
          tl.to(
            ".a1-query",
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.0,
              ease: "power2.out",
            },
            "+=0.25",
          );

          /* Result #1 slides up with highlight */
          tl.to(".a1-result", { opacity: 1, y: 0, duration: 0.5, ease: EASE_SMOOTH }, "+=0.4");

          /* Ghost results stagger in below */
          tl.to(
            ".a1-ghost",
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.08,
              ease: EASE_SMOOTH,
            },
            "-=0.2",
          );

          /* Hold */
          tl.to({}, { duration: 1.6 });

          /* --- Transition Act 1 -> 2 --- */
          tl.to(acts[0], {
            opacity: 0,
            scale: 0.97,
            duration: 0.7,
            ease: EASE_GLIDE,
          });

          /* ================================================= */
          /* ===== ACT 2: GET CHOSEN                      ===== */
          /* ================================================= */
          tl.set(acts[1], { opacity: 1 });

          /* Nav slides down from top */
          tl.to(".a2-nav", { opacity: 1, y: 0, duration: 0.4, ease: EASE_SMOOTH }, "+=0.1");

          /* Headline fades up */
          tl.to(".a2-headline", { opacity: 1, y: 0, duration: 0.5, ease: EASE_SMOOTH }, "-=0.15");

          /* Accent rule sweeps from left */
          tl.to(".a2-rule", { scaleX: 1, duration: 0.6, ease: "power2.out" }, "-=0.2");

          /* Body text */
          tl.to(".a2-body", { opacity: 1, y: 0, duration: 0.4, ease: EASE_SMOOTH }, "-=0.3");

          /* CTA button with subtle bounce */
          tl.to(".a2-cta", { opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.4)" }, "-=0.1");

          /* Service cards slide up from bottom */
          tl.to(".a2-cards", { opacity: 1, y: 0, duration: 0.5, ease: EASE_SMOOTH }, "-=0.15");

          /* Hold — this is the "design skill" showcase moment */
          tl.to({}, { duration: 1.8 });

          /* --- Transition Act 2 -> 3 --- */
          tl.to(acts[1], {
            opacity: 0,
            scale: 0.97,
            duration: 0.7,
            ease: EASE_GLIDE,
          });

          /* ================================================= */
          /* ===== ACT 3: GET BETTER                      ===== */
          /* ================================================= */
          tl.set(acts[2], { opacity: 1 });

          /* Label fades in */
          tl.to(".a3-label", { opacity: 1, duration: 0.3, ease: EASE_SMOOTH }, "+=0.1");

          /* Title */
          tl.to(".a3-title", { opacity: 1, y: 0, duration: 0.4, ease: EASE_SMOOTH }, "-=0.1");

          /* Chart line draws itself */
          tl.to(
            ".a3-chart-line",
            { strokeDashoffset: 0, duration: 1.6, ease: "power2.out" },
            "+=0.15",
          );

          /* Gradient fill fades in under the line */
          tl.to(".a3-chart-fill", { opacity: 0.12, duration: 1.0, ease: EASE_SMOOTH }, "-=1.0");

          /* Stat cards slide in with stagger */
          tl.to(
            ".a3-stat",
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.12,
              ease: EASE_SMOOTH,
            },
            "-=0.5",
          );

          /* Counters tick up */
          const counters = { leads: 0, conv: 0 };
          tl.to(
            counters,
            {
              leads: 47,
              conv: 23,
              duration: 1.2,
              ease: "power2.out",
              onUpdate: () => {
                if (statLeads.current)
                  statLeads.current.textContent = Math.round(counters.leads).toString();
                if (statConv.current)
                  statConv.current.textContent = Math.round(counters.conv).toString() + "%";
              },
            },
            "-=0.8",
          );

          /* Hold before loop */
          tl.to({}, { duration: 2.0 });

          /* Fade out Act 3 (inside timeline so pause works) */
          tl.to(acts[2], {
            opacity: 0,
            duration: 0.8,
            ease: EASE_GLIDE,
          });
        };

        buildTimeline();
      }, demoRef);
    });

    return () => ctx?.revert();
  }, [isDebug]);

  /* -- Pause / Resume -- */
  useEffect(() => {
    if (isDebug) return;
    isPausedRef.current = isPaused;
    const tl = masterTlRef.current;
    if (!tl) return;

    if (isPaused) tl.pause();
    else tl.resume();
  }, [isPaused, isDebug]);

  /* -- Render -- */
  return (
    <div ref={demoRef} className="relative">
      <div className="relative rounded-2xl bg-white overflow-hidden select-none" aria-hidden="true">
        {/* Stage */}
        <div
          ref={stageRef}
          className="relative overflow-hidden"
          style={{ aspectRatio: `${CANONICAL_W}/${CANONICAL_H}` }}
        >
          <div
            style={{
              width: CANONICAL_W,
              height: CANONICAL_H,
              transform: `scale(${stageScale})`,
              transformOrigin: "top left",
            }}
            className="absolute inset-0"
          >
            {/* ===================================== */}
            {/* Act 1: Get Found                      */}
            {/* ===================================== */}
            <div ref={act1} className="absolute inset-0 flex flex-col bg-white px-8 pt-8">
              {/* Search bar */}
              <div
                className="a1-search flex items-center gap-3 px-5 py-3.5 rounded-full border border-stone-200 shadow-sm bg-white"
                style={{ opacity: 0 }}
              >
                <Search className="w-5 h-5 text-stone-400 flex-shrink-0" />
                <span
                  className="a1-query text-[16px] text-stone-700"
                  style={{ clipPath: "inset(0 100% 0 0)" }}
                >
                  best [your service] near me
                </span>
              </div>

              {/* Results list */}
              <div className="mt-6 space-y-5 flex-1">
                {/* Result #1 — YOUR business */}
                <div
                  className="a1-result relative -mx-3 px-3 py-3 rounded-lg"
                  style={{ opacity: 0, transform: "translateY(14px)" }}
                >
                  {/* Subtle highlight behind #1 result */}
                  <div className="absolute inset-0 rounded-lg bg-amber-50/80 border border-amber-200/40" />
                  <div className="relative">
                    <div className="flex items-center gap-2">
                      <p className="text-[14px] text-green-700 font-mono leading-none">
                        yourbusiness.com
                      </p>
                      <span className="text-[11px] font-semibold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded">
                        #1
                      </span>
                    </div>
                    <p className="text-[22px] font-semibold text-blue-700 leading-snug mt-1.5">
                      Your Business &mdash; Trusted&nbsp;Locally
                    </p>
                    <p className="text-[15px] text-stone-500 mt-1 leading-relaxed">
                      Quality service your neighbors count on. Book online&nbsp;today.
                      <span className="text-amber-500">
                        &nbsp;&#9733;&#9733;&#9733;&#9733;&#9733;
                      </span>
                      &nbsp;4.9
                    </p>
                  </div>
                </div>

                {/* Ghost results — stagger in */}
                <div
                  className="a1-ghost space-y-2 px-1"
                  style={{ opacity: 0, transform: "translateY(10px)" }}
                >
                  <div className="h-2.5 w-36 rounded bg-stone-100" />
                  <div className="h-3 w-60 rounded bg-stone-100" />
                  <div className="h-2.5 w-80 rounded bg-stone-100" />
                </div>

                <div
                  className="a1-ghost space-y-2 px-1"
                  style={{ opacity: 0, transform: "translateY(10px)" }}
                >
                  <div className="h-2.5 w-32 rounded bg-stone-100" />
                  <div className="h-3 w-52 rounded bg-stone-100" />
                  <div className="h-2.5 w-72 rounded bg-stone-100" />
                </div>

                <div
                  className="a1-ghost space-y-2 px-1"
                  style={{ opacity: 0, transform: "translateY(10px)" }}
                >
                  <div className="h-2.5 w-28 rounded bg-stone-100" />
                  <div className="h-3 w-48 rounded bg-stone-100" />
                  <div className="h-2.5 w-64 rounded bg-stone-100" />
                </div>
              </div>
            </div>

            {/* ===================================== */}
            {/* Act 2: Get Chosen                     */}
            {/* ===================================== */}
            <div
              ref={act2}
              className="absolute inset-0 p-8 flex flex-col bg-[#FAF9F6]"
              style={{ opacity: 0 }}
            >
              {/* Nav */}
              <div
                className="a2-nav flex items-center justify-between"
                style={{ opacity: 0, transform: "translateY(-10px)" }}
              >
                <span className="text-[18px] font-semibold text-stone-800 tracking-tight">
                  Your Business
                </span>
                <div className="flex items-center gap-5">
                  <span className="text-[14px] text-stone-400">Services</span>
                  <span className="text-[14px] text-stone-400">About</span>
                  <span className="text-[14px] text-stone-400">Contact</span>
                </div>
              </div>

              {/* Hero area */}
              <div className="mt-7 flex-1">
                <p
                  className="a2-headline text-[40px] font-semibold text-stone-900 leading-tight"
                  style={{ opacity: 0, transform: "translateY(16px)" }}
                >
                  Quality You
                  <br />
                  Can Count&nbsp;On.
                </p>
                <div
                  className="a2-rule mt-3 w-12 h-[3px] rounded-full bg-amber-500"
                  style={{
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                  }}
                />
                <p
                  className="a2-body text-[16px] text-stone-500 mt-4 max-w-[75%] leading-relaxed"
                  style={{ opacity: 0, transform: "translateY(12px)" }}
                >
                  Trusted by families in the Central Valley.
                  <br />
                  Book your appointment online.
                </p>
                <div
                  className="a2-cta mt-5 inline-block px-7 py-3 bg-amber-500 rounded-lg text-[15px] font-semibold text-white"
                  style={{ opacity: 0, transform: "translateY(12px)" }}
                >
                  Book Now
                </div>
              </div>

              {/* Service cards */}
              <div
                className="a2-cards flex gap-3 pt-6 mt-auto"
                style={{ opacity: 0, transform: "translateY(20px)" }}
              >
                <div className="h-12 flex-1 rounded-lg bg-white border border-stone-200/60" />
                <div className="h-12 flex-1 rounded-lg bg-white border border-stone-200/60" />
                <div className="h-12 flex-1 rounded-lg bg-white border border-stone-200/60" />
              </div>
            </div>

            {/* ===================================== */}
            {/* Act 3: Get Better                     */}
            {/* ===================================== */}
            <div
              ref={act3}
              className="absolute inset-0 px-8 pt-7 pb-5 flex flex-col bg-white"
              style={{ opacity: 0 }}
            >
              {/* Header */}
              <div className="a3-label flex items-center gap-2" style={{ opacity: 0 }}>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[12px] font-mono text-stone-400 uppercase tracking-widest">
                  Growth Dashboard &middot; Live
                </span>
              </div>
              <p
                className="a3-title text-[28px] font-semibold text-stone-900 mt-2"
                style={{ opacity: 0, transform: "translateY(8px)" }}
              >
                Your Results
              </p>

              {/* Chart area */}
              <div className="flex-1 mt-4 relative">
                <svg
                  viewBox="0 0 570 185"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                  style={{ overflow: "visible" }}
                >
                  {/* Grid lines */}
                  <line x1="0" y1="45" x2="560" y2="45" stroke="#F5F5F4" strokeWidth="1" />
                  <line x1="0" y1="90" x2="560" y2="90" stroke="#F5F5F4" strokeWidth="1" />
                  <line x1="0" y1="135" x2="560" y2="135" stroke="#F5F5F4" strokeWidth="1" />

                  {/* Gradient fill under the line */}
                  <path
                    className="a3-chart-fill"
                    d="M 0 160 C 40 155, 80 148, 120 135 S 200 110, 260 95 S 360 55, 420 40 S 500 22, 555 14 V 185 H 0 Z"
                    fill="url(#chartGradient)"
                    style={{ opacity: 0 }}
                  />

                  {/* Growth line */}
                  <path
                    className="a3-chart-line"
                    d="M 0 160 C 40 155, 80 148, 120 135 S 200 110, 260 95 S 360 55, 420 40 S 500 22, 555 14"
                    fill="none"
                    stroke="#B45309"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="600"
                    strokeDashoffset="600"
                  />

                  {/* Dot at the end of the line */}
                  <circle
                    className="a3-chart-line"
                    cx="555"
                    cy="14"
                    r="5"
                    fill="#B45309"
                    strokeDasharray="600"
                    strokeDashoffset="600"
                  />

                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#B45309" />
                      <stop offset="100%" stopColor="#B45309" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-3 gap-3 mt-2">
                <div
                  className="a3-stat rounded-xl bg-stone-50 border border-stone-200/60 px-3 py-2.5 text-center"
                  style={{ opacity: 0, transform: "translateY(16px)" }}
                >
                  <p className="text-[30px] font-bold text-stone-900 leading-none">
                    <span ref={statLeads}>0</span>
                  </p>
                  <p className="text-[11px] text-stone-400 font-mono uppercase tracking-wider mt-1">
                    New Leads
                  </p>
                </div>
                <div
                  className="a3-stat rounded-xl bg-stone-50 border border-stone-200/60 px-3 py-2.5 text-center"
                  style={{ opacity: 0, transform: "translateY(16px)" }}
                >
                  <p className="text-[30px] font-bold text-emerald-600 leading-none">
                    <span ref={statConv}>0%</span>
                  </p>
                  <p className="text-[11px] text-stone-400 font-mono uppercase tracking-wider mt-1">
                    Conv. Rate
                  </p>
                </div>
                <div
                  className="a3-stat rounded-xl bg-stone-50 border border-stone-200/60 px-3 py-2.5 text-center"
                  style={{ opacity: 0, transform: "translateY(16px)" }}
                >
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-amber-400 text-[18px]">&#9733;</span>
                    <p className="text-[30px] font-bold text-stone-900 leading-none">4.9</p>
                  </div>
                  <p className="text-[11px] text-stone-400 font-mono uppercase tracking-wider mt-1">
                    Rating
                  </p>
                </div>
              </div>
            </div>

            {/* Debug overlay */}
            {isDebug && (
              <div className="absolute inset-x-0 bottom-0 z-40 flex items-center justify-between px-3 py-2 bg-black/80 backdrop-blur-sm border-t border-white/10">
                <button
                  onClick={prevScene}
                  disabled={debugScene === 0}
                  className="flex items-center gap-1 px-2 py-1 rounded text-[10px] font-mono text-white bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-3 h-3" />
                  Prev
                </button>
                <span className="text-[10px] font-mono text-warm-gold">
                  {debugScene + 1}/3 &mdash; {SCENE_LABELS[debugScene]}
                </span>
                <button
                  onClick={nextScene}
                  disabled={debugScene === 2}
                  className="flex items-center gap-1 px-2 py-1 rounded text-[10px] font-mono text-white bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                  <ChevronRight className="w-3 h-3" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pause/Play control */}
      {!isDebug && (
        <button
          onClick={() => setIsPaused((p) => !p)}
          className="absolute top-2 right-2 z-50 group"
          aria-label={isPaused ? "Play animation" : "Pause animation"}
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/80 backdrop-blur-md border border-stone-200/60 text-stone-400 group-hover:text-stone-600 group-hover:bg-white transition-all shadow-sm">
            {isPaused ? (
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </span>
        </button>
      )}
    </div>
  );
}
