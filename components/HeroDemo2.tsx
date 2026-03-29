"use client";

import { useState, useEffect, useRef, useCallback, type FC } from "react";

type GSAPType = (typeof import("gsap"))["gsap"];
/* ─────────────────────────────────────────────────────────────────── */
/*  HeroDemo2                                                          */
/*  Single browser-framed mockup. Three phases shown in tabs:         */
/*    01 Get Found  — someone types a search, your biz appears #1     */
/*    02 Get Chosen — site scrolls, reviews revealed below fold       */
/*    03 Get Better — chart draws in, metrics count up                */
/*  Tabs auto-advance every CYCLE_DURATION ms. Clicking a tab jumps.  */
/*  Animations only play on the active tab.                           */
/* ─────────────────────────────────────────────────────────────────── */

const CYCLE_DURATION = 5000; // ms per phase

/* ─── Search data ────────────────────────────────────────────────── */
/* Services that spin before landing. Each paired with SERP mock data. */
const SERVICES: Array<{
  label: string;
  biz: string;
  reviews: string;
  rating: string;
  resultCount: string;
  comp: string;
  compStats: string;
}> = [
  {
    label: "plumber",
    biz: "Valley Pro Plumbing",
    reviews: "142",
    rating: "4.9",
    resultCount: "12,400",
    comp: "City Wide Plumbing",
    compStats: "4.1 · 38 reviews",
  },
  {
    label: "dentist",
    biz: "Smile Dental Studio",
    reviews: "89",
    rating: "4.9",
    resultCount: "8,730",
    comp: "Central Valley Dental",
    compStats: "4.2 · 61 reviews",
  },
  {
    label: "family law attorney",
    biz: "Rivera Law Group",
    reviews: "56",
    rating: "4.8",
    resultCount: "5,920",
    comp: "Valley Legal Services",
    compStats: "3.9 · 24 reviews",
  },
  {
    label: "HVAC contractor",
    biz: "Central Air Solutions",
    reviews: "74",
    rating: "4.9",
    resultCount: "6,210",
    comp: "Valley Cooling Co.",
    compStats: "4.0 · 29 reviews",
  },
  {
    label: "landscaper",
    biz: "Green Valley Landscaping",
    reviews: "118",
    rating: "4.8",
    resultCount: "9,850",
    comp: "Modesto Lawn Care",
    compStats: "3.8 · 41 reviews",
  },
];

const SCROLL_DECOYS = [
  "electrician",
  "roofer",
  "chiropractor",
  "accountant",
  "landscaper",
  "attorney",
  "plumber",
  "dentist",
  "contractor",
];
const ROW_H = 24;
const VISIBLE_ROWS = 3;
const DROPDOWN_H = ROW_H * VISIBLE_ROWS;
const CENTER_ROW = 1;

function centerY(i: number) {
  return (CENTER_ROW - i) * ROW_H;
}

function buildScrollList(chosenLabel: string): string[] {
  const pool = SCROLL_DECOYS.filter((d) => d !== chosenLabel);
  const picked: string[] = [];
  const used = new Set<string>();
  while (picked.length < 6 && picked.length < pool.length) {
    const item = pool[Math.floor(Math.random() * pool.length)];
    if (!used.has(item)) {
      used.add(item);
      picked.push(item);
    }
  }
  return [...picked, chosenLabel];
}

const CITIES = ["Stockton", "Modesto", "Manteca", "Tracy", "Turlock", "Lathrop"];

function pick<T>(arr: T[], exclude?: T): T {
  const pool = exclude !== undefined ? arr.filter((x) => x !== exclude) : arr;
  return pool[Math.floor(Math.random() * pool.length)];
}

let _lastServiceIdx = -1;

/* ─── Phase 1: Get Found ─────────────────────────────────────────── */
function ScreenGetFound({
  isActive,
  onDone,
  isPaused,
}: {
  isActive: boolean;
  onDone: () => void;
  isPaused: boolean;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const prefixRef = useRef<HTMLSpanElement>(null);
  const serviceDisplayRef = useRef<HTMLSpanElement>(null);
  const cityDisplayRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const res1Ref = useRef<HTMLDivElement>(null);
  const res2Ref = useRef<HTMLDivElement>(null);
  const serpQueryRef = useRef<HTMLSpanElement>(null);
  const biz1NameRef = useRef<HTMLSpanElement>(null);
  const biz1MetaRef = useRef<HTMLSpanElement>(null);
  const biz1CityRef = useRef<HTMLSpanElement>(null);
  const biz2NameRef = useRef<HTMLSpanElement>(null);
  const biz2StatsRef = useRef<HTMLSpanElement>(null);
  const resultCountRef = useRef<HTMLSpanElement>(null);
  const onDoneRef = useRef(onDone);
  const ctxRef = useRef<ReturnType<GSAPType["context"]> | undefined>(undefined);
  const tlRef = useRef<ReturnType<GSAPType["timeline"]> | null>(null);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    tlRef.current?.paused(isPaused);
  }, [isPaused]);

  useEffect(
    () => () => {
      ctxRef.current?.revert();
    },
    [],
  );

  useEffect(() => {
    if (!isActive) return;
    if (typeof window === "undefined") return;

    const rootEl = rootRef.current;
    if (rootEl) rootEl.style.opacity = "0";

    const svcIdx = (() => {
      let idx: number;
      do {
        idx = Math.floor(Math.random() * SERVICES.length);
      } while (idx === _lastServiceIdx && SERVICES.length > 1);
      _lastServiceIdx = idx;
      return idx;
    })();
    const svc = SERVICES[svcIdx];
    const city = pick(CITIES);
    const finalQuery = `best ${svc.label} in ${city}`;
    const scrollItems = buildScrollList(svc.label);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (rootEl) rootEl.style.opacity = "";
      if (prefixRef.current) prefixRef.current.textContent = "best ";
      if (serviceDisplayRef.current) serviceDisplayRef.current.textContent = svc.label;
      if (cityDisplayRef.current) cityDisplayRef.current.textContent = ` in ${city}`;
      const t = setTimeout(() => onDoneRef.current(), 3000);
      return () => clearTimeout(t);
    }

    const listEl = listRef.current;
    if (listEl) {
      listEl.innerHTML = "";
      scrollItems.forEach((item) => {
        const div = document.createElement("div");
        div.textContent = item;
        Object.assign(div.style, {
          height: `${ROW_H}px`,
          display: "flex",
          alignItems: "center",
          paddingLeft: "14px",
          paddingRight: "14px",
          fontSize: "13px",
          color: "#44403c",
          fontFamily: "inherit",
          whiteSpace: "nowrap",
        });
        listEl.appendChild(div);
      });
    }

    if (serpQueryRef.current) serpQueryRef.current.textContent = finalQuery;
    if (biz1NameRef.current) biz1NameRef.current.textContent = svc.biz;
    if (biz1MetaRef.current)
      biz1MetaRef.current.textContent = `${svc.rating} · ${svc.reviews} reviews`;
    if (biz1CityRef.current) biz1CityRef.current.textContent = `${city} · Open now`;
    if (biz2NameRef.current) biz2NameRef.current.textContent = svc.comp;
    if (biz2StatsRef.current) biz2StatsRef.current.textContent = svc.compStats;
    if (resultCountRef.current)
      resultCountRef.current.textContent = `About ${svc.resultCount} results`;

    let cancelled = false;

    import("gsap").then(({ gsap }) => {
      if (cancelled) return;
      if (rootEl) rootEl.style.opacity = "";
      ctxRef.current?.revert();
      ctxRef.current = gsap.context(() => {
        const root = rootRef.current;
        const inner = innerRef.current;
        const prefix = prefixRef.current;
        const svcEl = serviceDisplayRef.current;
        const cityEl = cityDisplayRef.current;
        const cur = cursorRef.current;
        const drop = dropdownRef.current;
        const list = listRef.current;
        const r1 = res1Ref.current;
        const r2 = res2Ref.current;
        if (!root || !inner || !prefix || !svcEl || !cityEl || !cur || !drop || !list || !r1 || !r2)
          return;

        const PREFIX_STR = "best ";
        const CITY_STR = ` in ${city}`;
        const prefixObj = { n: 0 };
        const cityObj = { n: 0 };
        const slideUp = root.offsetHeight;

        const tl = gsap.timeline({
          onComplete: () => {
            if (!cancelled) onDoneRef.current();
          },
        });
        tlRef.current = tl;

        tl.call(() => {
          prefixObj.n = 0;
          cityObj.n = 0;
          prefix.textContent = "";
          svcEl.textContent = "";
          cityEl.textContent = "";
        })
          .set(inner, { y: 0 })
          .set(cur, { opacity: 1 })
          .set([r1, r2], { opacity: 0, y: 8 })
          .set(drop, { opacity: 0, scaleY: 0.8, transformOrigin: "top center" })
          .set(list, { y: centerY(0) })

          /* ── A: type "best " ── */
          .to(prefixObj, {
            n: PREFIX_STR.length,
            duration: 0.7,
            ease: "none",
            onUpdate() {
              prefix.textContent = PREFIX_STR.slice(0, Math.round(prefixObj.n));
            },
          })
          .to({}, { duration: 0.12 })

          /* ── B: dropdown opens ── */
          .to(drop, { opacity: 1, scaleY: 1, duration: 0.2, ease: "power2.out" })

          /* ── C: scroll through service options ──
             Fast through 0→1→2, slow-pause on 3, fast to 4,
             slow-pause on 5, spring-land on 6 (chosen).          */
          .to(list, { y: centerY(1), duration: 0.16, ease: "power1.in" })
          .to(list, { y: centerY(2), duration: 0.16, ease: "power1.in" })
          /* slow to item 3, pause */
          .to(list, { y: centerY(3), duration: 0.34, ease: "power3.out" })
          .to({}, { duration: 0.32 })
          /* speed through item 4 */
          .to(list, { y: centerY(4), duration: 0.2, ease: "power1.in" })
          /* slow to item 5, pause */
          .to(list, { y: centerY(5), duration: 0.38, ease: "power3.out" })
          .to({}, { duration: 0.28 })
          /* final spring land on chosen */
          .to(list, { y: centerY(6), duration: 0.52, ease: "back.out(1.3)" })
          .to({}, { duration: 0.28 })

          /* ── D: close dropdown, chosen word pops into bar ── */
          .to(drop, { opacity: 0, scaleY: 0.8, duration: 0.18, ease: "power2.in" })
          .call(() => {
            svcEl.textContent = svc.label;
          })
          .to(cur, { opacity: 0, duration: 0.08 })

          /* ── E: type " in {city}" ── */
          .to(cityObj, {
            n: CITY_STR.length,
            duration: 0.65,
            ease: "none",
            onUpdate() {
              cityEl.textContent = CITY_STR.slice(0, Math.round(cityObj.n));
            },
          })
          .to({}, { duration: 0.22 })

          /* ── F: slide up → SERP ── */
          .to(inner, { y: -slideUp, duration: 0.55, ease: "power2.inOut" })
          .to(r1, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }, "-=0.1")
          .to(r2, { opacity: 0.38, y: 0, duration: 0.3, ease: "power2.out" }, "-=0.2")
          .to({}, { duration: 1.8 });
      }, rootRef);
    });

    return () => {
      cancelled = true;
      tlRef.current = null;
      /* revert handled by unmount effect */
      if (prefixRef.current) prefixRef.current.textContent = "";
      if (serviceDisplayRef.current) serviceDisplayRef.current.textContent = "";
      if (cityDisplayRef.current) cityDisplayRef.current.textContent = "";
    };
  }, [isActive]);

  return (
    <div ref={rootRef} className="h-full bg-white overflow-hidden select-none">
      <div ref={innerRef} className="flex flex-col" style={{ height: "200%" }}>
        {/* ── Page 1: Google Homepage ── */}
        <div
          className="relative flex flex-col items-center justify-center gap-5 bg-white px-5"
          style={{ height: "50%" }}
        >
          {/* Google wordmark */}
          <div
            className="font-sans font-semibold leading-none"
            style={{ fontSize: 38, letterSpacing: -0.5 }}
          >
            <span style={{ color: "#4285F4" }}>G</span>
            <span style={{ color: "#EA4335" }}>o</span>
            <span style={{ color: "#FBBC05" }}>o</span>
            <span style={{ color: "#4285F4" }}>g</span>
            <span style={{ color: "#34A853" }}>l</span>
            <span style={{ color: "#EA4335" }}>e</span>
          </div>

          {/* Search bar + dropdown wrapper */}
          <div className="relative w-full">
            <div className="w-full flex items-center gap-2 border border-stone-300 rounded-full px-4 py-[10px] bg-white shadow-[0_2px_8px_rgba(32,33,36,0.14)]">
              <svg width="15" height="15" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <circle cx="4.3" cy="4.3" r="3" stroke="#9AA0A6" strokeWidth="1.3" />
                <path
                  d="M6.8 6.8 L8.8 8.8"
                  stroke="#9AA0A6"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
              {/* Three-part query: "best " · [chosen service] · " in {city}" */}
              <div className="flex-1 min-w-0 flex items-center overflow-hidden">
                <span
                  ref={prefixRef}
                  className="text-[14px] text-stone-800 whitespace-nowrap"
                  style={{ whiteSpace: "pre" }}
                />
                <span
                  ref={serviceDisplayRef}
                  className="text-[14px] text-stone-900 font-medium whitespace-nowrap"
                />
                <span
                  ref={cursorRef}
                  className="w-[1.5px] h-[16px] rounded-sm bg-blue-500 flex-shrink-0"
                  style={{ opacity: 0 }}
                />
                <span
                  ref={cityDisplayRef}
                  className="text-[14px] text-stone-800 whitespace-nowrap"
                  style={{ whiteSpace: "pre" }}
                />
              </div>
            </div>

            {/* ── Dropdown ── */}
            <div
              ref={dropdownRef}
              className="absolute left-0 right-0 top-full mt-[6px] bg-white border border-stone-200 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.10)] overflow-hidden z-10"
              style={{ opacity: 0 }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  height: DROPDOWN_H,
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
                }}
              >
                {/* Fixed selection band — items scroll past this */}
                <div
                  className="absolute inset-x-0 pointer-events-none bg-amber-50 border-y border-amber-200/60"
                  style={{ top: CENTER_ROW * ROW_H, height: ROW_H }}
                />
                {/* Scrolling list — hydrated imperatively each activation */}
                <div ref={listRef} className="absolute inset-x-0 top-0" />
              </div>
            </div>
          </div>

          {/* Search buttons */}
          <div className="flex gap-2">
            <span className="text-[10px] bg-stone-100 text-stone-600 px-4 py-2 rounded border border-stone-200">
              Google Search
            </span>
            <span className="text-[10px] bg-stone-100 text-stone-600 px-4 py-2 rounded border border-stone-200">
              I&apos;m Feeling Lucky
            </span>
          </div>
        </div>

        {/* ── Page 2: SERP ── */}
        <div className="flex flex-col bg-white overflow-hidden" style={{ height: "50%" }}>
          {/* SERP header */}
          <div className="flex items-center gap-2 px-3 pt-2.5 pb-2 border-b border-stone-100 flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <div className="flex-1 flex items-center border border-stone-300 rounded-full px-3 py-[6px] bg-white">
              <span ref={serpQueryRef} className="text-[13px] text-stone-800 truncate" />
            </div>
          </div>

          {/* Meta */}
          <div className="px-3 pt-2 pb-1 flex-shrink-0">
            <span ref={resultCountRef} className="text-[10px] text-stone-400" />
          </div>

          {/* Results */}
          <div className="flex-1 px-3 pb-2 flex flex-col gap-2 min-h-0 overflow-hidden">
            <div
              ref={res1Ref}
              className="border border-stone-200 rounded-xl p-3 shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
              style={{ opacity: 0, transform: "translateY(8px)" }}
            >
              <span
                ref={biz1NameRef}
                className="text-[15px] font-semibold text-blue-600 leading-tight block"
              />
              <div className="mt-[4px] flex items-center gap-1.5">
                <span className="text-amber-400 text-[13px] tracking-[0.5px]">★★★★★</span>
                <span ref={biz1MetaRef} className="text-[11px] text-stone-500" />
              </div>
              <div className="text-[11px] text-stone-400 mt-[3px] flex items-center gap-1">
                <svg viewBox="0 0 8 10" width="7" height="8" fill="#B45309" aria-hidden="true">
                  <path d="M4 0C2.3 0 1 1.3 1 3c0 2 3 7 3 7s3-5 3-7C7 1.3 5.7 0 4 0z" />
                </svg>
                <span ref={biz1CityRef} />
              </div>
              <div className="flex gap-1.5 mt-2">
                <span className="text-[9px] bg-green-50 text-green-700 px-2 py-[3px] rounded-full border border-green-100 font-semibold">
                  #1 Result
                </span>
                <span className="text-[9px] bg-stone-50 text-stone-500 px-2 py-[3px] rounded-full border border-stone-200">
                  Website
                </span>
                <span className="text-[9px] bg-stone-50 text-stone-500 px-2 py-[3px] rounded-full border border-stone-200">
                  Call
                </span>
              </div>
            </div>
            <div
              ref={res2Ref}
              className="border border-stone-100 rounded-xl p-2.5"
              style={{ opacity: 0, transform: "translateY(8px)" }}
            >
              <span ref={biz2NameRef} className="text-[13px] font-medium text-blue-400 block" />
              <span ref={biz2StatsRef} className="text-[11px] text-stone-400 mt-[2px] block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Phase 2: Get Chosen ─────────────────────────────────────────── */
function ScreenGetChosen({
  isActive,
  onDone,
  isPaused,
}: {
  isActive: boolean;
  onDone: () => void;
  isPaused: boolean;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const onDoneRef = useRef(onDone);
  const ctxRef = useRef<ReturnType<GSAPType["context"]> | undefined>(undefined);
  const tlRef = useRef<ReturnType<GSAPType["timeline"]> | null>(null);
  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);
  useEffect(() => {
    tlRef.current?.paused(isPaused);
  }, [isPaused]);
  useEffect(
    () => () => {
      ctxRef.current?.revert();
    },
    [],
  );

  useEffect(() => {
    if (!isActive) return;
    if (typeof window === "undefined") return;

    const rootEl = rootRef.current;
    if (rootEl) rootEl.style.opacity = "0";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (rootEl) rootEl.style.opacity = "";
      const t = setTimeout(() => onDoneRef.current(), 3000);
      return () => clearTimeout(t);
    }

    let cancelled = false;

    import("gsap").then(({ gsap }) => {
      if (cancelled) return;
      if (rootEl) rootEl.style.opacity = "";
      ctxRef.current?.revert();
      ctxRef.current = gsap.context(() => {
        const inner = innerRef.current;
        if (!inner) return;

        const tl = gsap.timeline({
          onComplete: () => {
            if (!cancelled) onDoneRef.current();
          },
        });
        tlRef.current = tl;
        tl.set(inner, { y: 0 })
          .to({}, { duration: 0.6 })
          .to(inner, { y: -150, duration: 2.4, ease: "power1.inOut" })
          .to({}, { duration: 1.2 });
      }, rootRef);
    });

    return () => {
      cancelled = true;
      tlRef.current = null;
      /* revert handled by unmount effect */
    };
  }, [isActive]);

  return (
    <div ref={rootRef} className="h-full bg-white flex flex-col overflow-hidden select-none">
      {/* Fixed nav */}
      <div className="bg-stone-900 px-4 py-[9px] flex items-center justify-between flex-shrink-0">
        <span className="text-[13px] font-bold text-white">Valley Pro</span>
        <div className="flex items-center gap-3">
          <span className="text-[9px] text-stone-400">Services</span>
          <span className="text-[9px] text-stone-400">Reviews</span>
          <span className="text-[9px] bg-amber-500 text-white px-2 py-[3px] rounded font-medium">
            Call Now
          </span>
        </div>
      </div>

      {/* Scrolling content window */}
      <div className="flex-1 overflow-hidden">
        <div ref={innerRef}>
          {/* Hero section */}
          <div className="px-4 pt-4 pb-5 bg-gradient-to-br from-white to-amber-50/30">
            <div className="text-[9px] text-amber-700 font-mono uppercase tracking-widest mb-2">
              Trusted · Modesto CA
            </div>
            <div className="text-[18px] font-bold text-stone-900 leading-tight mb-3">
              Plumbing you
              <br />
              can count on.
            </div>
            <div className="inline-flex items-center gap-1 bg-amber-600 text-white text-[10px] font-semibold px-3 py-1.5 rounded-full">
              Get a Free Quote →
            </div>
            <div className="mt-3 text-[9px] text-stone-400">
              &ldquo;Fast, honest, and skilled.&rdquo; — James R.
            </div>
          </div>

          <div className="h-px bg-stone-100" />

          {/* Reviews section */}
          <div className="px-4 pt-3 pb-4">
            <div className="text-[11px] font-semibold text-stone-800 mb-2.5">
              What customers say
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-stone-50 rounded-xl p-2 border border-stone-100">
                <div className="text-[9px] text-amber-400 mb-[2px] tracking-[1px]">★★★★★</div>
                <div className="text-[9px] text-stone-600 leading-snug">
                  &ldquo;Showed up same day, fixed it right.&rdquo;
                </div>
                <div className="text-[8px] text-stone-400 mt-[2px]">— Maria G., Modesto</div>
              </div>
              <div className="bg-stone-50 rounded-xl p-2 border border-stone-100">
                <div className="text-[9px] text-amber-400 mb-[2px] tracking-[1px]">★★★★★</div>
                <div className="text-[9px] text-stone-600 leading-snug">
                  &ldquo;Best plumber I&apos;ve used in the Valley.&rdquo;
                </div>
                <div className="text-[8px] text-stone-400 mt-[2px]">— Tom A.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Phase 3: Get Better ─────────────────────────────────────────── */
function ScreenGetBetter({
  isActive,
  onDone,
  isPaused,
}: {
  isActive: boolean;
  onDone: () => void;
  isPaused: boolean;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const areaRef = useRef<SVGPathElement>(null);
  const leadsRef = useRef<HTMLSpanElement>(null);
  const convRef = useRef<HTMLSpanElement>(null);
  const ratingRef = useRef<HTMLSpanElement>(null);
  const deltaBadgeRef = useRef<HTMLDivElement>(null);
  const feedRef = useRef<HTMLDivElement>(null);
  const onDoneRef = useRef(onDone);
  const ctxRef = useRef<ReturnType<GSAPType["context"]> | undefined>(undefined);
  const tlRef = useRef<ReturnType<GSAPType["timeline"]> | null>(null);
  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);
  useEffect(() => {
    tlRef.current?.paused(isPaused);
  }, [isPaused]);
  useEffect(
    () => () => {
      ctxRef.current?.revert();
    },
    [],
  );

  useEffect(() => {
    if (!isActive) return;
    if (typeof window === "undefined") return;

    const rootEl = rootRef.current;
    if (rootEl) rootEl.style.opacity = "0";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (rootEl) rootEl.style.opacity = "";
      const t = setTimeout(() => onDoneRef.current(), 3000);
      return () => clearTimeout(t);
    }

    let cancelled = false;

    const leadsObj = { val: 0 };
    const convObj = { val: 0 };
    const ratingObj = { val: 0 };

    import("gsap").then(({ gsap }) => {
      if (cancelled) return;
      if (rootEl) rootEl.style.opacity = "";
      ctxRef.current?.revert();
      ctxRef.current = gsap.context(() => {
        const root = rootRef.current;
        const line = lineRef.current;
        const area = areaRef.current;
        if (!root || !line) return;

        const totalLen = line.getTotalLength?.() ?? 260;
        const dot = root.querySelector<HTMLElement>(".gb-dot");

        const tl = gsap.timeline({
          onComplete: () => {
            if (!cancelled) onDoneRef.current();
          },
        });
        tlRef.current = tl;

        /* reset */
        tl.call(() => {
          leadsObj.val = 0;
          convObj.val = 0;
          ratingObj.val = 0;
          if (leadsRef.current) leadsRef.current.textContent = "0";
          if (convRef.current) convRef.current.textContent = "0%";
          if (ratingRef.current) ratingRef.current.textContent = "0.0";
          if (deltaBadgeRef.current) deltaBadgeRef.current.style.opacity = "0";
          if (feedRef.current) feedRef.current.style.opacity = "0";
        })
          /* chart line draws left→right */
          .set(line, { strokeDasharray: totalLen, strokeDashoffset: totalLen })
          .set(area, { opacity: 0 })
          .to(line, { strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut" })
          /* area fill fades in as line draws */
          .to(area, { opacity: 1, duration: 1.0, ease: "power1.in" }, "<0.4")
          /* numbers count up */
          .to(
            leadsObj,
            {
              val: 47,
              duration: 1.3,
              ease: "power2.out",
              onUpdate() {
                if (leadsRef.current)
                  leadsRef.current.textContent = String(Math.round(leadsObj.val));
              },
            },
            "<-0.8",
          )
          .to(
            convObj,
            {
              val: 23,
              duration: 1.3,
              ease: "power2.out",
              onUpdate() {
                if (convRef.current) convRef.current.textContent = `${Math.round(convObj.val)}%`;
              },
            },
            "<0.1",
          )
          .to(
            ratingObj,
            {
              val: 4.9,
              duration: 1.3,
              ease: "power2.out",
              onUpdate() {
                if (ratingRef.current) ratingRef.current.textContent = ratingObj.val.toFixed(1);
              },
            },
            "<0.1",
          )
          /* delta badge fades in once numbers have landed */
          .to(deltaBadgeRef.current, { opacity: 1, duration: 0.4, ease: "power1.out" }, "+=0.05")
          /* activity feed slides up and fades in */
          .fromTo(
            feedRef.current,
            { opacity: 0, y: 6 },
            { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
            "<0.15",
          )
          .to({}, { duration: 1.6 }); /* hold */

        /* pulse on the endpoint dot */
        if (dot) {
          gsap.to(dot, {
            scale: 1.7,
            opacity: 0.3,
            duration: 0.9,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        }
      }, rootRef);
    });

    const leadsEl = leadsRef.current;
    const convEl = convRef.current;
    const ratingEl = ratingRef.current;
    const badgeEl = deltaBadgeRef.current;
    const feedEl = feedRef.current;
    return () => {
      cancelled = true;
      tlRef.current = null;
      /* revert handled by unmount effect */
      if (leadsEl) leadsEl.textContent = "0";
      if (convEl) convEl.textContent = "0%";
      if (ratingEl) ratingEl.textContent = "0.0";
      if (badgeEl) badgeEl.style.opacity = "0";
      if (feedEl) feedEl.style.opacity = "0";
    };
  }, [isActive]);

  return (
    <div
      ref={rootRef}
      className="h-full bg-[#0C0B09] flex flex-col overflow-hidden select-none p-3"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <span
            className="gb-dot w-[6px] h-[6px] rounded-full bg-green-400 flex-shrink-0 inline-block"
            aria-hidden="true"
          />
          <span className="text-[9px] font-mono text-stone-400 uppercase tracking-widest">
            Dashboard · Live
          </span>
        </div>
        <span className="text-[9px] font-mono text-stone-600">Last 90 days</span>
      </div>

      {/* Title + delta badge */}
      <div className="flex items-center justify-between mb-2">
        <div className="text-[12px] font-semibold text-stone-200">Your Results</div>
        <div
          ref={deltaBadgeRef}
          style={{ opacity: 0 }}
          className="text-[9px] text-green-400 bg-green-400/[0.1] border border-green-400/20 px-1.5 py-0.5 rounded font-mono"
        >
          ↑ 340% since launch
        </div>
      </div>

      {/* Chart */}
      <div className="w-full mb-2.5" style={{ aspectRatio: "220 / 52" }}>
        <svg
          viewBox="0 0 220 52"
          style={{ width: "100%", height: "100%", overflow: "visible" }}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hd2-area-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B45309" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#B45309" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          {/* Subtle grid lines */}
          <line
            x1="0"
            y1="17"
            x2="220"
            y2="17"
            stroke="white"
            strokeOpacity="0.04"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="34"
            x2="220"
            y2="34"
            stroke="white"
            strokeOpacity="0.04"
            strokeWidth="0.5"
          />
          {/* Area fill */}
          <path
            ref={areaRef}
            d="M0,51 C30,49 60,43 100,30 C140,17 175,6 220,1 L220,51 Z"
            fill="url(#hd2-area-fill)"
            style={{ opacity: 0 }}
          />
          {/* Line */}
          <path
            ref={lineRef}
            d="M0,51 C30,49 60,43 100,30 C140,17 175,6 220,1"
            stroke="#B45309"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            style={{ strokeDasharray: 300, strokeDashoffset: 300 }}
          />
          {/* Endpoint dot */}
          <circle className="gb-dot" cx="220" cy="1" r="2.5" fill="#B45309" />
        </svg>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-3 gap-1.5 mb-2.5">
        <div className="bg-white/[0.05] rounded-lg p-2 text-center">
          <div className="text-[15px] font-bold leading-none text-white">
            <span ref={leadsRef}>0</span>
          </div>
          <div className="text-[8px] text-stone-500 uppercase tracking-wide mt-1">New Leads</div>
        </div>
        <div className="bg-white/[0.05] rounded-lg p-2 text-center">
          <div className="text-[15px] font-bold leading-none text-green-400">
            <span ref={convRef}>0%</span>
          </div>
          <div className="text-[8px] text-stone-500 uppercase tracking-wide mt-1">Conv. Rate</div>
        </div>
        <div className="bg-white/[0.05] rounded-lg p-2 text-center">
          <div className="text-[15px] font-bold leading-none text-amber-400">
            ★<span ref={ratingRef}>0.0</span>
          </div>
          <div className="text-[8px] text-stone-500 uppercase tracking-wide mt-1">Avg. Rating</div>
        </div>
      </div>

      {/* Activity feed */}
      <div ref={feedRef} style={{ opacity: 0 }} className="flex flex-col gap-1">
        <div className="text-[8px] font-mono text-stone-600 uppercase tracking-widest mb-0.5">
          Recent activity
        </div>
        <div className="flex items-center gap-2 bg-white/[0.03] rounded-md px-2 py-1.5">
          <span
            className="w-[5px] h-[5px] rounded-full bg-green-400 flex-shrink-0"
            aria-hidden="true"
          />
          <span className="text-[10px] text-stone-300 flex-1 min-w-0 truncate">
            New lead: Marcus T.
          </span>
          <span className="text-[9px] text-stone-600 font-mono flex-shrink-0">2m ago</span>
        </div>
        <div className="flex items-center gap-2 bg-white/[0.03] rounded-md px-2 py-1.5">
          <span
            className="w-[5px] h-[5px] rounded-full bg-amber-400 flex-shrink-0"
            aria-hidden="true"
          />
          <span className="text-[10px] text-stone-300 flex-1 min-w-0 truncate">
            ★★★★★ — Jennifer R.
          </span>
          <span className="text-[9px] text-stone-600 font-mono flex-shrink-0">1h ago</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Step metadata ──────────────────────────────────────────────── */
const STEPS: Array<{
  id: string;
  step: string;
  label: string;
  duration: number; /* ms — matches animation cycle for progress bar */
  Cmp: FC<{ isActive: boolean; onDone: () => void; isPaused: boolean }>;
}> = [
  { id: "get-found", step: "01", label: "Get Found", duration: 7500, Cmp: ScreenGetFound },
  { id: "get-chosen", step: "02", label: "Get Chosen", duration: 4700, Cmp: ScreenGetChosen },
  { id: "get-better", step: "03", label: "Get Better", duration: 4400, Cmp: ScreenGetBetter },
];

/* ─────────────────────────────────────────────────────────────────── */
/*  Main export                                                        */
/* ─────────────────────────────────────────────────────────────────── */
export default function HeroDemo2() {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [paused, setPaused] = useState(false);
  const transitionRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pausedRef = useRef(false);

  /*
   * goNext — called by each screen's onRepeat (animation-driven, not timer-driven).
   * If paused the call is silently ignored; the animation keeps looping and will
   * call goNext again on the next cycle after the user unpauses.
   */
  const goNext = useCallback(() => {
    if (pausedRef.current) return;
    if (transitionRef.current) return; // already mid-transition
    setTransitioning(true);
    transitionRef.current = setTimeout(() => {
      transitionRef.current = null;
      setActive((p) => (p + 1) % 3);
      setTransitioning(false);
    }, 180);
  }, []);

  /* Jump to a specific tab on manual click */
  const goTo = useCallback((index: number) => {
    if (transitionRef.current) {
      clearTimeout(transitionRef.current);
      transitionRef.current = null;
    }
    setTransitioning(true);
    transitionRef.current = setTimeout(() => {
      transitionRef.current = null;
      setActive(index);
      setTransitioning(false);
    }, 180);
  }, []);

  /* Play/pause — unpausing lets the next onRepeat naturally fire goNext */
  const togglePause = useCallback(() => {
    const next = !pausedRef.current;
    pausedRef.current = next;
    setPaused(next);
  }, []);

  useEffect(() => {
    return () => {
      if (transitionRef.current) clearTimeout(transitionRef.current);
    };
  }, []);

  const { Cmp, duration } = STEPS[active];

  return (
    <div className="flex flex-col w-full max-w-[520px] mx-auto">
      <div
        className="rounded-[22px]"
        style={{
          boxShadow:
            "12px 12px 0 0 #C4B5A0, 20px 20px 0 0 rgba(180,83,9,0.09), 0 10px 28px rgba(28,25,23,0.08)",
        }}
      >
        <div className="rounded-t-[22px] overflow-hidden border border-b-0 border-[#D8D2CA] bg-[#0C0B09]">
          {/* Chrome bar */}
          <div className="flex items-center gap-2 px-3 py-[10px] bg-[#15120F] border-b border-white/[0.08] flex-shrink-0">
            <span className="flex gap-[5px]" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <span key={i} className="w-[7px] h-[7px] rounded-full bg-white/[0.18]" />
              ))}
            </span>
            <span className="flex-1 rounded-md border border-white/[0.06] bg-white/[0.04] px-2.5 py-[4px] text-center text-[9px] text-stone-400 max-w-[190px] mx-auto">
              {active === 0
                ? "google.com"
                : active === 1
                  ? "valleyproplumbing.com"
                  : "app.loudbark.dev"}
            </span>
          </div>

          {/* Screen content — fixed height */}
          <div
            className="h-[280px] sm:h-[300px] lg:h-[320px]"
            style={{
              opacity: transitioning ? 0 : 1,
              transition: "opacity 180ms ease",
            }}
          >
            <Cmp isActive={!transitioning} onDone={goNext} isPaused={paused} />
          </div>
        </div>

        {/* Phase tabs + play/pause */}
        <div className="-mt-px flex gap-1.5 items-stretch rounded-b-[22px] border border-t-0 border-[#D8D2CA] bg-white px-2 py-2">
          {STEPS.map(({ id, step, label }, i) => {
            const on = active === i;
            return (
              <button
                key={id}
                onClick={() => goTo(i)}
                aria-label={`View ${label} phase`}
                aria-pressed={on}
                className="flex-1 flex items-center gap-2 px-3 py-2.5 rounded-xl text-left relative overflow-hidden"
                style={{
                  background: on ? "#1C1917" : "#FFFFFF",
                  border: on ? "1.5px solid rgba(180,83,9,0.18)" : "1.5px solid #E7E5E4",
                  boxShadow: on ? "0 2px 6px rgba(28,25,23,0.06)" : "none",
                  transition:
                    "background 300ms ease, border-color 300ms ease, box-shadow 300ms ease",
                }}
              >
                {on && !paused && (
                  <span
                    key={`prog-${active}`}
                    className="tab-progress absolute bottom-0 left-0 h-[2px] rounded-full bg-amber-600/60"
                    style={{ animation: `tabProgress ${STEPS[i].duration}ms linear forwards` }}
                    aria-hidden="true"
                  />
                )}
                <span
                  className="text-[9px] font-mono tracking-widest leading-none"
                  style={{ color: on ? "#D97706" : "#C4BDB7", transition: "color 300ms ease" }}
                >
                  {step}
                </span>
                <span
                  className="text-[11px] font-semibold leading-none"
                  style={{ color: on ? "#F5F5F4" : "#A89E96", transition: "color 300ms ease" }}
                >
                  {label}
                </span>
                {on && (
                  <span
                    className="ml-auto w-[5px] h-[5px] rounded-full flex-shrink-0 opacity-80"
                    style={{ background: "#D97706" }}
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}

          <button
            onClick={togglePause}
            aria-label={paused ? "Resume auto-advance" : "Pause auto-advance"}
            className="flex-shrink-0 w-9 flex items-center justify-center rounded-xl border transition-colors duration-200 hover:border-stone-300"
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #E7E5E4",
              color: "#A89E96",
            }}
          >
            {paused ? (
              <svg width="9" height="11" viewBox="0 0 9 11" fill="currentColor" aria-hidden="true">
                <path d="M0.5 0.5 L8.5 5.5 L0.5 10.5 Z" />
              </svg>
            ) : (
              <svg width="9" height="11" viewBox="0 0 9 11" fill="currentColor" aria-hidden="true">
                <rect x="0" y="0" width="3" height="11" rx="1" />
                <rect x="5.5" y="0" width="3" height="11" rx="1" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
