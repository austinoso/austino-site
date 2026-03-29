"use client";

import { useState, useEffect, useRef, type FC } from "react";

type GSAPType = (typeof import("gsap"))["gsap"];

/* ─────────────────────────────────────────────────────────────────── */
/*  HeroScreens                                                        */
/*  Animations only play when the card is highlighted (isActive).     */
/*  Get Found  — someone types a search, result appears.              */
/*  Get Chosen — site scrolls, revealing reviews below.               */
/*  Get Better — chart draws in, numbers count up.                    */
/* ─────────────────────────────────────────────────────────────────── */

const CYCLE_DURATION = 5000; // ms each card stays highlighted

/* ─── Screen 1: Get Found ─────────────────────────────────────────── */
function ScreenGetFound({ isActive }: { isActive: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const queryRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const res1Ref = useRef<HTMLDivElement>(null);
  const res2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: ReturnType<GSAPType["context"]> | undefined;
    let cancelled = false;

    import("gsap").then(({ gsap }) => {
      if (cancelled) return;

      ctx = gsap.context(() => {
        const q = queryRef.current;
        const cur = cursorRef.current;
        const r1 = res1Ref.current;
        const r2 = res2Ref.current;
        if (!q || !r1 || !r2) return;

        const QUERY = "best plumber near me";
        const obj = { n: 0 };

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.0 });

        /* Position 0: reset everything on each loop */
        tl.call(() => {
          obj.n = 0;
          q.textContent = "";
        })
          .set(cur, { opacity: 1 })
          .set([r1, r2], { opacity: 0, y: 8 })
          /* Type the query character by character */
          .to(obj, {
            n: QUERY.length,
            duration: 1.8,
            ease: "none",
            onUpdate() {
              q.textContent = QUERY.slice(0, Math.round(obj.n));
            },
          })
          /* Cursor blinks, then hides as results arrive */
          .to(cur, { opacity: 0, duration: 0.1 }, "+=0.1")
          /* Primary result slides in */
          .to(r1, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "+=0.15")
          /* Competitor result fades in dimly */
          .to(r2, { opacity: 0.38, y: 0, duration: 0.3, ease: "power2.out" }, "-=0.2");
        /* repeatDelay 1.0s → user reads the result, then loop */
      }, rootRef);
    });

    const qEl = queryRef.current;
    return () => {
      cancelled = true;
      ctx?.revert();
      if (qEl) qEl.textContent = "";
    };
  }, [isActive]);

  return (
    <div ref={rootRef} className="h-full bg-white flex flex-col select-none overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-2.5 py-[7px] border-b border-stone-100 flex-shrink-0">
        <span className="flex gap-[3px]" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-[5px] h-[5px] rounded-full bg-stone-200" />
          ))}
        </span>
        <span className="flex-1 bg-stone-50 border border-stone-200/60 rounded text-[7px] text-stone-400 px-2 py-[2px] text-center">
          google.com
        </span>
      </div>

      {/* Search box */}
      <div className="mx-2.5 mt-2 flex items-center gap-1.5 border border-stone-200 rounded-lg px-2 py-[5px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
        <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <circle cx="4.3" cy="4.3" r="3" stroke="#9CA3AF" strokeWidth="1.3" />
          <path d="M6.8 6.8 L8.8 8.8" stroke="#9CA3AF" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        <span ref={queryRef} className="text-[8px] text-stone-700 flex-1 min-w-0" />
        <span
          ref={cursorRef}
          className="w-[1.5px] h-[9px] rounded-sm bg-stone-600 flex-shrink-0"
          style={{ opacity: 0 }}
        />
      </div>

      {/* Results */}
      <div className="flex-1 px-2.5 pt-2 pb-1.5 flex flex-col gap-1.5 min-h-0">
        {/* Primary — #1 result */}
        <div
          ref={res1Ref}
          className="border border-stone-200 rounded-lg p-2 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
          style={{ opacity: 0, transform: "translateY(8px)" }}
        >
          <div className="text-[9px] font-semibold text-blue-600 leading-tight">
            Valley Pro Plumbing
          </div>
          <div className="text-[6.5px] mt-[2px] flex items-center gap-[2px]">
            <span className="text-amber-400 tracking-[1px]">★★★★★</span>
            <span className="text-stone-500 ml-0.5">4.9 · 142 reviews</span>
          </div>
          <div className="text-[6.5px] text-stone-400 mt-[1px] flex items-center gap-1">
            <svg viewBox="0 0 8 10" width="5" height="6" fill="#B45309" aria-hidden="true">
              <path d="M4 0C2.3 0 1 1.3 1 3c0 2 3 7 3 7s3-5 3-7C7 1.3 5.7 0 4 0z" />
            </svg>
            Modesto · Open now
          </div>
          <div className="flex gap-1 mt-1.5">
            <span className="text-[6px] bg-green-50 text-green-700 px-1.5 py-[2px] rounded-full border border-green-100 font-semibold">
              #1 Result
            </span>
            <span className="text-[6px] bg-stone-50 text-stone-500 px-1.5 py-[2px] rounded-full border border-stone-200">
              Website
            </span>
            <span className="text-[6px] bg-stone-50 text-stone-500 px-1.5 py-[2px] rounded-full border border-stone-200">
              Call
            </span>
          </div>
        </div>

        {/* Competitor — dimmed */}
        <div
          ref={res2Ref}
          className="border border-stone-100 rounded-lg p-2"
          style={{ opacity: 0, transform: "translateY(8px)" }}
        >
          <div className="text-[8.5px] font-medium text-blue-500">City Wide Plumbing</div>
          <div className="text-[6.5px] text-stone-400 mt-[2px]">4.1 · 38 reviews</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Screen 2: Get Chosen ────────────────────────────────────────── */
function ScreenGetChosen({ isActive }: { isActive: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: ReturnType<GSAPType["context"]> | undefined;
    let cancelled = false;

    import("gsap").then(({ gsap }) => {
      if (cancelled) return;

      ctx = gsap.context(() => {
        const inner = innerRef.current;
        if (!inner) return;

        /* Scroll the site content up, revealing reviews below the fold */
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });

        tl.set(inner, { y: 0 })
          .to({}, { duration: 0.5 }) /* brief pause at top so hero is visible */
          .to(inner, { y: -108, duration: 2.2, ease: "power1.inOut" })
          .to({}, { duration: 1.2 }); /* hold on reviews before resetting */
      }, rootRef);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [isActive]);

  return (
    <div ref={rootRef} className="h-full bg-white flex flex-col overflow-hidden select-none">
      {/* Nav — always visible, doesn't scroll */}
      <div className="bg-stone-900 px-3 py-[7px] flex items-center justify-between flex-shrink-0">
        <span className="text-[9px] font-bold text-white">Valley Pro</span>
        <div className="flex items-center gap-2">
          <span className="text-[6.5px] text-stone-400">Services</span>
          <span className="text-[6.5px] text-stone-400">Reviews</span>
          <span className="text-[6.5px] bg-amber-500 text-white px-1.5 py-[2px] rounded font-medium">
            Call Now
          </span>
        </div>
      </div>

      {/* Clipping window — content scrolls inside this */}
      <div className="flex-1 overflow-hidden">
        <div ref={innerRef}>
          {/* Section 1 — Hero */}
          <div className="px-3 pt-2.5 pb-3 bg-gradient-to-br from-white to-amber-50/30">
            <div className="text-[6px] text-amber-700 font-mono uppercase tracking-widest mb-1.5">
              Trusted · Modesto CA
            </div>
            <div className="text-[12px] font-bold text-stone-900 leading-tight mb-2">
              Plumbing you
              <br />
              can count on.
            </div>
            <div className="inline-flex items-center gap-1 bg-amber-600 text-white text-[7px] font-semibold px-2.5 py-1 rounded-full">
              Get a Free Quote →
            </div>
            <div className="mt-2.5 text-[6px] text-stone-400">
              &ldquo;Fast, honest, and skilled.&rdquo; — James R.
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-stone-100" />

          {/* Section 2 — Reviews */}
          <div className="px-3 pt-2.5 pb-3">
            <div className="text-[7.5px] font-semibold text-stone-800 mb-2">What customers say</div>
            <div className="flex flex-col gap-1.5">
              <div className="bg-stone-50 rounded-lg p-1.5 border border-stone-100">
                <div className="text-[6.5px] text-amber-400 mb-[2px] tracking-[1px]">★★★★★</div>
                <div className="text-[6.5px] text-stone-600 leading-snug">
                  &ldquo;Showed up same day, fixed it right.&rdquo;
                </div>
                <div className="text-[6px] text-stone-400 mt-[2px]">— Maria G., Modesto</div>
              </div>
              <div className="bg-stone-50 rounded-lg p-1.5 border border-stone-100">
                <div className="text-[6.5px] text-amber-400 mb-[2px] tracking-[1px]">★★★★★</div>
                <div className="text-[6.5px] text-stone-600 leading-snug">
                  &ldquo;Best plumber I&apos;ve used in the Valley.&rdquo;
                </div>
                <div className="text-[6px] text-stone-400 mt-[2px]">— Tom A.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Screen 3: Get Better ────────────────────────────────────────── */
function ScreenGetBetter({ isActive }: { isActive: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const leadsRef = useRef<HTMLSpanElement>(null);
  const convRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isActive) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: ReturnType<GSAPType["context"]> | undefined;
    let cancelled = false;

    const leadsObj = { val: 0 };
    const convObj = { val: 0 };

    import("gsap").then(({ gsap }) => {
      if (cancelled) return;

      ctx = gsap.context(() => {
        const root = rootRef.current;
        const line = lineRef.current;
        if (!root || !line) return;

        const totalLen = line.getTotalLength?.() ?? 220;
        const dot = root.querySelector<HTMLElement>(".gb-dot");

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });

        /* Position 0: reset on each loop */
        tl.call(() => {
          leadsObj.val = 0;
          convObj.val = 0;
          if (leadsRef.current) leadsRef.current.textContent = "0";
          if (convRef.current) convRef.current.textContent = "0%";
        })
          .set(line, { strokeDasharray: totalLen, strokeDashoffset: totalLen })
          /* Chart draws in */
          .to(line, { strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut" })
          /* Numbers count up in parallel with the chart */
          .to(
            leadsObj,
            {
              val: 47,
              duration: 1.4,
              ease: "power2.out",
              onUpdate() {
                if (leadsRef.current)
                  leadsRef.current.textContent = String(Math.round(leadsObj.val));
              },
            },
            "<",
          )
          .to(
            convObj,
            {
              val: 23,
              duration: 1.4,
              ease: "power2.out",
              onUpdate() {
                if (convRef.current) convRef.current.textContent = `${Math.round(convObj.val)}%`;
              },
            },
            "<0.1",
          )
          .to({}, { duration: 1.4 }); /* hold at full result */

        /* Live dot pulse — runs independently */
        if (dot) {
          gsap.to(dot, {
            scale: 1.6,
            opacity: 0.35,
            duration: 0.85,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        }
      }, rootRef);
    });

    const leadsEl = leadsRef.current;
    const convEl = convRef.current;
    return () => {
      cancelled = true;
      ctx?.revert();
      if (leadsEl) leadsEl.textContent = "0";
      if (convEl) convEl.textContent = "0%";
    };
  }, [isActive]);

  return (
    <div ref={rootRef} className="h-full bg-[#0C0B09] flex flex-col overflow-hidden select-none">
      <div className="px-2.5 pt-2 pb-1 flex items-center gap-1.5 flex-shrink-0">
        <span
          className="gb-dot w-[5px] h-[5px] rounded-full bg-green-400 flex-shrink-0 inline-block"
          aria-hidden="true"
        />
        <span className="text-[6.5px] font-mono text-stone-400 uppercase tracking-wider">
          Dashboard · Live
        </span>
      </div>

      <div className="flex-1 px-2.5 pb-2 flex flex-col justify-between min-h-0">
        <div className="text-[9px] font-semibold text-stone-300">Your Results</div>

        <svg
          viewBox="0 0 120 32"
          style={{ height: "38px", width: "100%" }}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hsg-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B45309" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#B45309" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            ref={lineRef}
            d="M0,31 C15,29 30,23 50,15 C70,6 90,2 120,0.5"
            stroke="#B45309"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            style={{ strokeDasharray: 300, strokeDashoffset: 300 }}
          />
          <circle cx="120" cy="0.5" r="2" fill="#B45309" />
        </svg>

        <div className="grid grid-cols-3 gap-1">
          <div className="bg-white/[0.05] rounded p-1.5 text-center">
            <div className="text-[10px] font-bold leading-none text-white">
              <span ref={leadsRef}>0</span>
            </div>
            <div className="text-[5.5px] text-stone-600 uppercase tracking-wide mt-[3px]">
              Leads
            </div>
          </div>
          <div className="bg-white/[0.05] rounded p-1.5 text-center">
            <div className="text-[10px] font-bold leading-none text-green-400">
              <span ref={convRef}>0%</span>
            </div>
            <div className="text-[5.5px] text-stone-600 uppercase tracking-wide mt-[3px]">
              Conv.
            </div>
          </div>
          <div className="bg-white/[0.05] rounded p-1.5 text-center">
            <div className="text-[10px] font-bold leading-none text-amber-400">
              <span className="text-[8px]">★</span>4.9
            </div>
            <div className="text-[5.5px] text-stone-600 uppercase tracking-wide mt-[3px]">
              Rating
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Step metadata ──────────────────────────────────────────────── */
const STEPS: Array<{ id: string; step: string; label: string; Cmp: FC<{ isActive: boolean }> }> = [
  { id: "get-found", step: "01", label: "Get Found", Cmp: ScreenGetFound },
  { id: "get-chosen", step: "02", label: "Get Chosen", Cmp: ScreenGetChosen },
  { id: "get-better", step: "03", label: "Get Better", Cmp: ScreenGetBetter },
];

/* ─── Main export ────────────────────────────────────────────────── */
export default function HeroScreens() {
  const [active, setActive] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setActive((p) => (p + 1) % 3);
        setFadeIn(true);
      }, 200);
    }, CYCLE_DURATION);

    return () => clearInterval(id);
  }, []);

  const ActiveCmp = STEPS[active].Cmp;

  return (
    <>
      {/* ── Desktop: all 3 visible, active one elevated ── */}
      <div className="hidden md:grid md:grid-cols-3 gap-3 lg:gap-4">
        {STEPS.map(({ id, step, label, Cmp }, i) => {
          const on = active === i;
          return (
            <div
              key={id}
              className="flex flex-col rounded-xl overflow-hidden"
              style={{
                opacity: on ? 1 : 0.4,
                transform: on ? "scale(1) translateY(0)" : "scale(0.975) translateY(3px)",
                boxShadow: on
                  ? "8px 8px 0px 0px #C4B5A0, 0 0 0 1.5px rgba(180,83,9,0.18), 0 4px 20px rgba(0,0,0,0.06)"
                  : "4px 4px 0px 0px #E0D9D3",
                transition:
                  "opacity 400ms cubic-bezier(0.16,1,0.3,1), transform 400ms cubic-bezier(0.16,1,0.3,1), box-shadow 400ms ease",
              }}
            >
              <div className="h-[172px]">
                <Cmp isActive={on} />
              </div>

              {/* Step chip */}
              <div
                className="px-3 py-2.5 flex items-center gap-2 border-t"
                style={{
                  background: on ? "#FFFFFF" : "#F7F6F4",
                  borderColor: on ? "rgba(180,83,9,0.15)" : "#E7E5E4",
                  transition: "background 400ms ease, border-color 400ms ease",
                }}
              >
                <span
                  className="text-[9px] font-mono tracking-widest"
                  style={{ color: on ? "#B45309" : "#C4BDB7", transition: "color 400ms ease" }}
                >
                  {step}
                </span>
                <span
                  className="text-[11px] font-semibold"
                  style={{ color: on ? "#1C1917" : "#B0A89E", transition: "color 400ms ease" }}
                >
                  {label}
                </span>
                {on && (
                  <span
                    className="ml-auto w-[5px] h-[5px] rounded-full flex-shrink-0"
                    style={{ background: "#B45309", opacity: 0.8 }}
                    aria-hidden="true"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Mobile: single cycling card ── */}
      <div className="md:hidden">
        <div
          className="rounded-xl overflow-hidden"
          style={{ boxShadow: "8px 8px 0px 0px #C4B5A0" }}
        >
          <div
            className="h-[200px]"
            style={{ opacity: fadeIn ? 1 : 0, transition: "opacity 200ms ease" }}
          >
            <ActiveCmp isActive={fadeIn} />
          </div>

          {/* Footer: label + pill nav dots */}
          <div className="px-4 py-2.5 bg-white border-t border-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-mono tracking-widest" style={{ color: "#B45309" }}>
                {STEPS[active].step}
              </span>
              <span className="text-[12px] font-semibold text-stone-700">
                {STEPS[active].label}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setFadeIn(false);
                    setTimeout(() => {
                      setActive(i);
                      setFadeIn(true);
                    }, 100);
                  }}
                  aria-label={`Go to step ${i + 1}`}
                  className="rounded-full flex-shrink-0"
                  style={{
                    width: active === i ? "18px" : "6px",
                    height: "6px",
                    background: active === i ? "#B45309" : "#D4CCC5",
                    transition: "width 300ms cubic-bezier(0.16,1,0.3,1), background 300ms ease",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
