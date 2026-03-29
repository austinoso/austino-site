"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { getGSAP } from "@/lib/gsap";

/* ─────────────────────────────────────────────────────────────────── */
/*  FullPresence                                                       */
/*  Three scroll-pinned acts: Get Found → Get Chosen → Get Better     */
/*  Desktop: section pins, copy + visual animate in, then unpins.     */
/*  Mobile: linear scroll, standard fade-in reveals.                  */
/* ─────────────────────────────────────────────────────────────────── */

/* ── Visual: Act 1 — animated SERP mockup ──────────────────────── */
function VisualGetFound() {
  const rootRef = useRef<HTMLDivElement>(null);
  const prefixRef = useRef<HTMLSpanElement>(null);
  const svcRef = useRef<HTMLSpanElement>(null);
  const cityRef = useRef<HTMLSpanElement>(null);
  const curRef = useRef<HTMLSpanElement>(null);
  const res1Ref = useRef<HTMLDivElement>(null);
  const res2Ref = useRef<HTMLDivElement>(null);
  const serpRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;
    let cancelled = false;

    getGSAP().then(({ gsap }) => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const prefix = prefixRef.current;
        const svc = svcRef.current;
        const city = cityRef.current;
        const cur = curRef.current;
        const r1 = res1Ref.current;
        const r2 = res2Ref.current;
        const serp = serpRef.current;
        const search = searchRef.current;
        if (!prefix || !svc || !city || !cur || !r1 || !r2 || !serp || !search) return;

        const SVC_STR = "massage";
        const CITY_STR = " in Modesto";
        const obj = { n: 0 };
        const cityObj = { n: 0 };

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

        tl.call(() => {
          obj.n = 0;
          cityObj.n = 0;
          prefix.textContent = "";
          svc.textContent = "";
          city.textContent = "";
        })
          .set(cur, { opacity: 1 })
          .set(serp, { opacity: 0, y: 10 })
          .set([r1, r2], { opacity: 0, y: 8 })
          /* type "best " */
          .to(obj, {
            n: 5,
            duration: 0.55,
            ease: "none",
            onUpdate() {
              prefix.textContent = "best ".slice(0, Math.round(obj.n));
            },
          })
          /* type service */
          .call(() => {
            obj.n = 0;
          })
          .to(obj, {
            n: SVC_STR.length,
            duration: 0.45,
            ease: "none",
            onUpdate() {
              svc.textContent = SVC_STR.slice(0, Math.round(obj.n));
            },
          })
          /* type city */
          .to(cityObj, {
            n: CITY_STR.length,
            duration: 0.65,
            ease: "none",
            onUpdate() {
              city.textContent = CITY_STR.slice(0, Math.round(cityObj.n));
            },
          })
          .to(cur, { opacity: 0, duration: 0.1 })
          .to({}, { duration: 0.3 })
          /* transition to SERP */
          .to(search, { opacity: 0, y: -12, duration: 0.35, ease: "power2.in" })
          .to(serp, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }, "-=0.1")
          .to(r1, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.1")
          .to(r2, { opacity: 0.4, y: 0, duration: 0.35, ease: "power2.out" }, "-=0.2")
          .to({}, { duration: 2.2 })
          /* reset */
          .to(serp, { opacity: 0, duration: 0.3 })
          .to(search, { opacity: 1, y: 0, duration: 0.3 }, "-=0.1");
      }, rootRef);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative w-full max-w-[540px] rounded-xl border border-stone-200 bg-white overflow-hidden select-none"
      style={{ boxShadow: "12px 12px 0px 0px #C4B5A0, 0 8px 32px rgba(0,0,0,0.08)" }}
      aria-hidden="true"
    >
      {/* Browser chrome */}
      <div className="bg-stone-100 border-b border-stone-200 px-3 py-2 flex items-center gap-2">
        <span className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-[9px] h-[9px] rounded-full bg-stone-300" />
          ))}
        </span>
        <span className="flex-1 text-center text-[11px] text-stone-400 bg-white border border-stone-200 rounded-md px-2 py-[3px] max-w-[160px] mx-auto truncate">
          google.com
        </span>
      </div>

      {/* Search panel */}
      <div ref={searchRef} className="p-5">
        {/* Google wordmark */}
        <div className="text-center mb-4 font-sans font-bold text-2xl leading-none">
          <span style={{ color: "#4285F4" }}>G</span>
          <span style={{ color: "#EA4335" }}>o</span>
          <span style={{ color: "#FBBC05" }}>o</span>
          <span style={{ color: "#4285F4" }}>g</span>
          <span style={{ color: "#34A853" }}>l</span>
          <span style={{ color: "#EA4335" }}>e</span>
        </div>
        {/* Search bar */}
        <div className="flex items-center gap-2 border border-stone-300 rounded-full px-4 py-2.5 shadow-sm bg-white">
          <svg width="14" height="14" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <circle cx="4.3" cy="4.3" r="3" stroke="#9AA0A6" strokeWidth="1.3" />
            <path d="M6.8 6.8 L8.8 8.8" stroke="#9AA0A6" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <div className="flex items-center text-sm text-stone-800" style={{ whiteSpace: "pre" }}>
            <span ref={prefixRef} />
            <span ref={svcRef} className="font-medium" />
            <span
              ref={curRef}
              className="inline-block w-[1.5px] h-[14px] bg-blue-500 mx-[1px]"
              style={{ opacity: 0 }}
            />
            <span ref={cityRef} />
          </div>
        </div>
      </div>

      {/* SERP panel */}
      <div
        ref={serpRef}
        className="absolute inset-x-0 top-[96px] bottom-0 bg-white px-4 pb-4 pt-2"
        style={{ opacity: 0 }}
      >
        <p className="text-[10px] text-stone-400 mb-2">About 8,200 results</p>
        {/* Result #1 — client */}
        <div
          ref={res1Ref}
          className="border border-stone-200 rounded-xl p-3.5 mb-2 shadow-sm"
          style={{ opacity: 0, transform: "translateY(8px)" }}
        >
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-[9px] bg-green-50 text-green-700 border border-green-100 px-1.5 py-[2px] rounded-full font-semibold">
              #1
            </span>
            <span className="text-[10px] text-stone-400">mymassagecottage.com</span>
          </div>
          <p className="text-[14px] font-semibold text-blue-600 leading-snug">
            My Massage Cottage — Modesto, CA
          </p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-amber-400 text-[11px] tracking-[0.5px]">★★★★★</span>
            <span className="text-[10px] text-stone-500">4.9 · 87 reviews · Open now</span>
          </div>
        </div>
        {/* Result #2 — competitors */}
        <div
          ref={res2Ref}
          className="border border-stone-100 rounded-xl p-3"
          style={{ opacity: 0, transform: "translateY(8px)" }}
        >
          <p className="text-[12px] font-medium text-blue-400">Valley Massage &amp; Wellness</p>
          <span className="text-[10px] text-stone-400">3.8 · 22 reviews</span>
        </div>
      </div>
    </div>
  );
}

/* ── Visual: Act 2 — real screenshot with browser frame ─────────── */
function VisualGetChosen() {
  return (
    <div
      className="w-full max-w-[540px] rounded-xl overflow-hidden border border-stone-200 select-none"
      style={{ boxShadow: "-12px 12px 0px 0px #C4B5A0, 0 8px 32px rgba(0,0,0,0.08)" }}
      aria-hidden="true"
    >
      {/* Browser chrome */}
      <div className="bg-stone-100 border-b border-stone-200 px-3 py-2 flex items-center gap-2">
        <span className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-[9px] h-[9px] rounded-full bg-stone-300" />
          ))}
        </span>
        <span className="flex-1 text-center text-[11px] text-stone-400 bg-white border border-stone-200 rounded-md px-2 py-[3px] max-w-[180px] mx-auto truncate">
          mymassagecottage.com
        </span>
      </div>
      {/* Screenshot */}
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <Image
          src="/assets/mymassagecottage.com.png"
          alt="My Massage Cottage website screenshot"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 90vw, 540px"
        />
        {/* Subtle overlay fade at bottom */}
        <div
          className="absolute bottom-0 inset-x-0 h-16"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(250,249,246,0.6))" }}
        />
      </div>
    </div>
  );
}

/* ── Visual: Act 3 — animated results dashboard ─────────────────── */
function VisualGetBetter() {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const areaRef = useRef<SVGPathElement>(null);
  const leadsRef = useRef<HTMLSpanElement>(null);
  const convRef = useRef<HTMLSpanElement>(null);
  const ratingRef = useRef<HTMLSpanElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;
    let cancelled = false;

    getGSAP().then(({ gsap }) => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const line = lineRef.current;
        const area = areaRef.current;
        const badge = badgeRef.current;
        const feed = feedRef.current;
        if (!line || !area) return;

        const leadsObj = { val: 0 };
        const convObj = { val: 0 };
        const ratingObj = { val: 0 };
        const totalLen = line.getTotalLength?.() ?? 300;
        const dot = root.querySelector<HTMLElement>(".gb-dot");

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

        tl.call(() => {
          leadsObj.val = 0;
          convObj.val = 0;
          ratingObj.val = 0;
          if (leadsRef.current) leadsRef.current.textContent = "0";
          if (convRef.current) convRef.current.textContent = "0%";
          if (ratingRef.current) ratingRef.current.textContent = "0.0";
          if (badge) badge.style.opacity = "0";
          if (feed) feed.style.opacity = "0";
        })
          .set(line, { strokeDasharray: totalLen, strokeDashoffset: totalLen })
          .set(area, { opacity: 0 })
          .to(line, { strokeDashoffset: 0, duration: 1.8, ease: "power2.inOut" })
          .to(area, { opacity: 1, duration: 1.0 }, "<0.4")
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
          .to(badge, { opacity: 1, duration: 0.4 }, "+=0.1")
          .fromTo(feed, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.4 }, "<0.15")
          .to({}, { duration: 2.0 });

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

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="w-full max-w-[540px] rounded-2xl border border-white/[0.06] bg-[#0C0B09] shadow-[0_8px_40px_rgba(0,0,0,0.3)] overflow-hidden select-none p-5"
      aria-hidden="true"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          <span className="gb-dot w-[7px] h-[7px] rounded-full bg-green-400 flex-shrink-0" />
          <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">
            Dashboard · Live
          </span>
        </div>
        <span className="text-[10px] font-mono text-stone-600">Last 90 days</span>
      </div>

      <div className="flex items-center justify-between mb-3">
        <p className="text-[13px] font-semibold text-stone-200">Your Results</p>
        <div
          ref={badgeRef}
          style={{ opacity: 0 }}
          className="text-[9px] text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded font-mono"
        >
          ↑ 340% since launch
        </div>
      </div>

      {/* Chart */}
      <div className="w-full mb-3" style={{ aspectRatio: "380 / 80" }}>
        <svg
          viewBox="0 0 380 80"
          style={{ width: "100%", height: "100%", overflow: "visible" }}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="fp-area-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B45309" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#B45309" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <line
            x1="0"
            y1="27"
            x2="380"
            y2="27"
            stroke="white"
            strokeOpacity="0.04"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="54"
            x2="380"
            y2="54"
            stroke="white"
            strokeOpacity="0.04"
            strokeWidth="0.5"
          />
          <path
            ref={areaRef}
            d="M0,79 C50,76 100,68 170,46 C240,24 300,8 380,2 L380,79 Z"
            fill="url(#fp-area-fill)"
            style={{ opacity: 0 }}
          />
          <path
            ref={lineRef}
            d="M0,79 C50,76 100,68 170,46 C240,24 300,8 380,2"
            stroke="#B45309"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <circle className="gb-dot" cx="380" cy="2" r="3.5" fill="#B45309" />
        </svg>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { ref: leadsRef, init: "0", color: "text-white", label: "New Leads" },
          { ref: convRef, init: "0%", color: "text-green-400", label: "Conv. Rate" },
          {
            ref: ratingRef,
            init: "0.0",
            color: "text-amber-400",
            label: "Avg. Rating",
            prefix: "★",
          },
        ].map(({ ref, init, color, label, prefix }) => (
          <div key={label} className="bg-white/[0.05] rounded-xl p-2.5 text-center">
            <div className={`text-[18px] font-bold leading-none ${color}`}>
              {prefix && <span>{prefix}</span>}
              <span ref={ref}>{init}</span>
            </div>
            <div className="text-[9px] text-stone-500 uppercase tracking-wide mt-1.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Activity feed */}
      <div ref={feedRef} style={{ opacity: 0 }} className="flex flex-col gap-1.5">
        <p className="text-[9px] font-mono text-stone-600 uppercase tracking-widest">
          Recent activity
        </p>
        {[
          { dot: "bg-green-400", text: "New lead: Marcus T.", time: "2m ago" },
          { dot: "bg-amber-400", text: "★★★★★ — Jennifer R.", time: "1h ago" },
        ].map(({ dot, text, time }) => (
          <div
            key={text}
            className="flex items-center gap-2 bg-white/[0.03] rounded-lg px-2.5 py-1.5"
          >
            <span
              className={`w-[5px] h-[5px] rounded-full flex-shrink-0 ${dot}`}
              aria-hidden="true"
            />
            <span className="text-[11px] text-stone-300 flex-1 min-w-0 truncate">{text}</span>
            <span className="text-[10px] text-stone-600 font-mono flex-shrink-0">{time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Act data ────────────────────────────────────────────────────── */
const ACTS = [
  {
    id: "get-found",
    step: "01",
    label: "Get Found",
    painStat: "75%",
    painLabel: "never scroll past page one",
    headline: "Show up when they're already looking.",
    body: "Google is where your customers make the decision before they ever call anyone. Whether your business appears — and where — is the whole game. We build the site structure and content strategy that puts you in front of the right searches in your city.",
    tags: ["Google Business Profile", "Local SEO", "City-targeted content"],
    visual: <VisualGetFound />,
    visualSide: "right" as const,
  },
  {
    id: "get-chosen",
    step: "02",
    label: "Get Chosen",
    painStat: "53%",
    painLabel: "of mobile visitors leave within 3 seconds",
    headline: "A site that earns the call.",
    body: "Getting found is only half of it. When someone lands on your page, they're deciding whether to trust you — in seconds. We build custom, not a template dressed up in your colors, because a site built around how your specific customers think converts differently.",
    tags: ["Custom code", "Fast load times", "Built to convert"],
    link: { href: "/work/my-massage-cottage", label: "See a real example →" },
    visual: <VisualGetChosen />,
    visualSide: "left" as const,
  },
  {
    id: "get-better",
    step: "03",
    label: "Get Better",
    painStat: null,
    painLabel: "Most agencies hand you a site and disappear.",
    headline: "The work doesn't stop at launch.",
    body: "Rankings take ongoing attention. Competitors move. New pages need to be built as you grow. We stay in it — monthly ranking checks, competitor monitoring, conversion testing — because the site is a working asset and we treat it like one.",
    tags: ["Monthly reporting", "Ranking checks", "Competitor monitoring"],
    link: { href: "/services/growth-strategy", label: "See how growth works →" },
    visual: <VisualGetBetter />,
    visualSide: "right" as const,
  },
] as const;

/* ── Single act section ──────────────────────────────────────────── */
function ActSection({ act, index }: { act: (typeof ACTS)[number]; index: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  /* ScrollTrigger pin + entrance animation — desktop only */
  useEffect(() => {
    if (typeof window === "undefined") return;
    /* Only pin on md+ screens */
    const mq = window.matchMedia("(min-width: 768px)");
    if (!mq.matches) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;
    let cancelled = false;

    getGSAP().then(({ gsap, ScrollTrigger }) => {
      if (cancelled) return;
      const section = sectionRef.current;
      const copy = copyRef.current;
      const visual = visualRef.current;
      if (!section || !copy || !visual) return;

      ctx = gsap.context(() => {
        /* Entrance animations — slide in from each side as section enters viewport */
        const copyFrom =
          act.visualSide === "right" ? { x: -40, opacity: 0 } : { x: 40, opacity: 0 };
        const visualFrom =
          act.visualSide === "right" ? { x: 40, opacity: 0 } : { x: -40, opacity: 0 };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            once: true,
          },
        });

        tl.from(copy, { ...copyFrom, duration: 0.75, ease: "power3.out" }).from(
          visual,
          { ...visualFrom, duration: 0.75, ease: "power3.out" },
          "<0.1",
        );
      });

      void ScrollTrigger; // imported but not used for pinning
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [act.visualSide]);

  const isLeftVisual = act.visualSide === "left";
  const sectionPadding =
    index === 0 ? "pt-14 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24" : "py-20 sm:py-24 md:py-28";

  return (
    <section
      ref={sectionRef}
      id={act.id}
      className="relative w-full border-b border-stone-200 overflow-hidden"
      aria-labelledby={`${act.id}-heading`}
    >
      {/* Subtle ambient glow per act */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            index === 1
              ? "radial-gradient(ellipse 55% 50% at 20% 50%, rgba(180,83,9,0.025), transparent 65%)"
              : index === 2
                ? "radial-gradient(ellipse 55% 50% at 80% 50%, rgba(219,39,119,0.018), transparent 65%)"
                : "radial-gradient(ellipse 55% 50% at 80% 50%, rgba(124,58,237,0.018), transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className={`relative w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 ${sectionPadding}`}>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center ${
            isLeftVisual ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""
          }`}
        >
          {/* Copy */}
          <div ref={copyRef} className="flex flex-col">
            {/* Step eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-mono text-warm-gold uppercase tracking-[0.2em]">
                {act.step} — {act.label}
              </span>
            </div>

            {/* Pain hook */}
            <div className="mb-6 inline-flex max-w-[26rem] items-start gap-3 self-start rounded-lg border border-stone-200 bg-white px-4 py-3 shadow-sm">
              {act.painStat ? (
                <>
                  <span className="font-display text-[1.75rem] font-bold text-warm-gold leading-none flex-shrink-0">
                    {act.painStat}
                  </span>
                  <span className="text-[13px] text-stone-500 leading-snug pt-1">
                    {act.painLabel}
                  </span>
                </>
              ) : (
                <span className="text-[13px] text-stone-500 leading-snug italic">
                  &ldquo;{act.painLabel}&rdquo;
                </span>
              )}
            </div>

            <h2
              id={`${act.id}-heading`}
              className="font-display text-[1.75rem] sm:text-[2.25rem] md:text-[2.5rem] font-bold text-warm-white leading-[1.1] tracking-tight mb-5"
            >
              {act.headline}
            </h2>

            <p className="text-base sm:text-[1.0625rem] text-stone-500 leading-relaxed mb-6">
              {act.body}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {act.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] font-medium text-stone-600 bg-white border border-stone-200 rounded-lg px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Optional link */}
            {"link" in act && act.link && (
              <Link
                href={act.link.href}
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-warm-gold hover:text-amber-700 transition-colors duration-200"
              >
                {act.link.label}
              </Link>
            )}
          </div>

          {/* Visual */}
          <div ref={visualRef} className="flex justify-center md:justify-end">
            <div className={`w-full ${isLeftVisual ? "md:justify-start flex" : ""}`}>
              {act.visual}
            </div>
          </div>
        </div>
      </div>

      {/* Step number watermark */}
      <div
        className="pointer-events-none absolute bottom-6 right-6 sm:bottom-8 sm:right-8 font-display font-bold text-[4rem] sm:text-[5rem] leading-none text-stone-100 select-none"
        aria-hidden="true"
      >
        {act.step}
      </div>
    </section>
  );
}

/* ── Main export ─────────────────────────────────────────────────── */
export default function FullPresence() {
  return (
    <div
      id="full-presence"
      className="relative border-t border-stone-200/80 bg-[#F7F3ED]"
    >
      <div
        className="pointer-events-none absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 10%, rgba(180,83,9,0.22) 50%, transparent 90%)",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/45 to-transparent" aria-hidden="true" />
      {ACTS.map((act, i) => (
        <ActSection key={act.id} act={act} index={i} />
      ))}
    </div>
  );
}
