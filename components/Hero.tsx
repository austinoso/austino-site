"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

/* -- Animation helpers (headline + supporting text below visual) -- */
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const lineAnim = (delay: number) =>
  ({ animation: `heroLineReveal 1s ${EASE} ${delay}s both` }) as React.CSSProperties;
const fadeAnim = (delay: number) =>
  ({ animation: `heroFadeIn 0.7s ease ${delay}s both` }) as React.CSSProperties;

/* -- Data --------------------------------------------------------- */
const CITIES = ["Modesto", "Tracy", "Stockton", "Manteca", "Lathrop", "Turlock", "Ripon"];

const INDUSTRIES = [
  {
    query: "massage therapist",
    biz: "Serenity Massage Studio",
    cat: "Massage therapist",
    rating: 4.9,
    reviews: 87,
    site: "serenitymassage.com",
  },
  {
    query: "hvac repair",
    biz: "Valley Comfort HVAC",
    cat: "HVAC contractor",
    rating: 4.8,
    reviews: 124,
    site: "valleycomforthvac.com",
  },
  {
    query: "family lawyer",
    biz: "Reyes Family Law",
    cat: "Family law attorney",
    rating: 5.0,
    reviews: 43,
    site: "reyesfamilylaw.com",
  },
  {
    query: "roofing contractor",
    biz: "Summit Roofing Co",
    cat: "Roofing contractor",
    rating: 4.7,
    reviews: 96,
    site: "summitroofingco.com",
  },
  {
    query: "plumber",
    biz: "Reliable Plumbing",
    cat: "Plumber",
    rating: 4.9,
    reviews: 211,
    site: "reliableplumbing.com",
  },
  {
    query: "dentist",
    biz: "Bright Smile Dental",
    cat: "Dentist",
    rating: 4.8,
    reviews: 158,
    site: "brightsmile.dental",
  },
  {
    query: "personal injury lawyer",
    biz: "Torres & Associates",
    cat: "PI attorney",
    rating: 4.9,
    reviews: 67,
    site: "torreslaw.com",
  },
  {
    query: "auto repair",
    biz: "Central Auto Works",
    cat: "Auto repair",
    rating: 4.7,
    reviews: 183,
    site: "centralautoworks.com",
  },
  {
    query: "landscaper",
    biz: "Green Valley Landscaping",
    cat: "Landscaper",
    rating: 4.8,
    reviews: 72,
    site: "gvlandscaping.com",
  },
  {
    query: "chiropractor",
    biz: "Valley Spine Chiropractic",
    cat: "Chiropractor",
    rating: 4.9,
    reviews: 104,
    site: "valleyspine.com",
  },
  {
    query: "hair salon",
    biz: "Studio 209 Salon",
    cat: "Hair salon",
    rating: 4.8,
    reviews: 89,
    site: "studio209salon.com",
  },
  {
    query: "electrician",
    biz: "Sparks Electric",
    cat: "Electrician",
    rating: 4.7,
    reviews: 156,
    site: "sparkselectric.com",
  },
];

type DiscoveryChannel = {
  id: "organic" | "maps" | "ai";
  label: string;
  accent: string;
  icon: React.ReactNode;
};

const DISCOVERY_CHANNELS: DiscoveryChannel[] = [
  {
    id: "organic",
    label: "Organic Search",
    accent: "bg-white border-white/80",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <circle cx="5.8" cy="5.8" r="4" stroke="#1A73E8" strokeWidth="1.5" />
        <path d="M9 9L12.5 12.5" stroke="#1A73E8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "maps",
    label: "Google Maps",
    accent: "bg-white border-white/80",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M7 1.5C5.07 1.5 3.5 3.07 3.5 5C3.5 7.75 7 12.5 7 12.5S10.5 7.75 10.5 5C10.5 3.07 8.93 1.5 7 1.5Z"
          fill="#EA4335"
        />
        <circle cx="7" cy="5" r="1.5" fill="white" />
      </svg>
    ),
  },
  {
    id: "ai",
    label: "AI Answers",
    accent: "bg-white border-white/80",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M7 0.5L8.2 5.3L13 6.5L8.2 7.7L7 12.5L5.8 7.7L1 6.5L5.8 5.3L7 0.5Z"
          fill="#34D399"
        />
      </svg>
    ),
  },
];

type Phase = "idle" | "typing" | "organic" | "maps" | "ai";

/* -- Stars helper ------------------------------------------------- */
function Stars({ rating, count }: { rating: number; count: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  return (
    <span className="inline-flex items-center gap-1">
      <span className="text-[#FBBC04] text-[11px] tracking-[1px]">
        {"\u2605".repeat(full)}
        {hasHalf ? "\u2605" : ""}
        {"\u2606".repeat(empty)}
      </span>
      <span className="text-[11px] text-stone-500">
        {rating} ({count})
      </span>
    </span>
  );
}

/* -- SearchDemo -- the hero visual -------------------------------- */
function SearchDemo({ onPhaseChange }: { onPhaseChange?: (phase: Phase) => void }) {
  const queryRef = useRef<HTMLSpanElement>(null);
  const [phase, setPhase] = useState<Phase>(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return "organic";
    }
    return "idle";
  });
  const [combo, setCombo] = useState({ city: CITIES[0], industry: INDUSTRIES[0] });
  const cancelRef = useRef(false);
  const prevRef = useRef({ cityIdx: -1, indIdx: -1 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    /* Reduced motion: show static organic result */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (queryRef.current) {
        queryRef.current.textContent = `best ${INDUSTRIES[0].query} ${CITIES[0]}`;
      }
      return;
    }

    cancelRef.current = false;
    const cancelled = () => cancelRef.current;
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    async function typeText(text: string) {
      const el = queryRef.current;
      if (!el) return;
      el.textContent = "";
      for (let i = 1; i <= text.length; i++) {
        if (cancelled()) return;
        el.textContent = text.slice(0, i);
        await sleep(40 + Math.random() * 35);
      }
    }

    async function runCycle() {
      if (cancelled()) return;

      /* Pick random city + industry, avoiding immediate repeats */
      let cIdx: number, iIdx: number;
      do {
        cIdx = Math.floor(Math.random() * CITIES.length);
      } while (cIdx === prevRef.current.cityIdx);
      do {
        iIdx = Math.floor(Math.random() * INDUSTRIES.length);
      } while (iIdx === prevRef.current.indIdx);
      prevRef.current = { cityIdx: cIdx, indIdx: iIdx };

      const city = CITIES[cIdx];
      const industry = INDUSTRIES[iIdx];

      setCombo({ city, industry });
      setPhase("typing");
      if (queryRef.current) queryRef.current.textContent = "";

      await sleep(600);
      if (cancelled()) return;

      await typeText(`best ${industry.query} ${city}`);
      if (cancelled()) return;
      await sleep(500);
      if (cancelled()) return;

      setPhase("organic");
      await sleep(3000);
      if (cancelled()) return;

      setPhase("maps");
      await sleep(3000);
      if (cancelled()) return;

      setPhase("ai");
      await sleep(3500);
      if (cancelled()) return;

      setPhase("idle");
      await sleep(800);
      if (cancelled()) return;

      runCycle();
    }

    runCycle();
    return () => {
      cancelRef.current = true;
    };
  }, []);

  useEffect(() => {
    onPhaseChange?.(phase);
  }, [onPhaseChange, phase]);

  const activeTab = phase === "maps" ? "maps" : phase === "ai" ? "ai" : "all";

  return (
    <div
      className="w-full max-w-[700px] mx-auto rounded-[28px] border border-white/[0.08] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.35),0_2px_12px_rgba(0,0,0,0.2)] overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Browser chrome — hidden on mobile to save height */}
      <div className="hidden sm:flex bg-stone-50 border-b border-stone-100 px-4 py-2.5 items-center gap-3">
        <span className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-2 h-2 rounded-full bg-stone-300/80" />
          ))}
        </span>
        <span className="flex-1 text-center text-[11px] text-stone-400 bg-white border border-stone-200/60 rounded-lg px-3 py-1 max-w-[200px] mx-auto truncate">
          google.com
        </span>
      </div>

      <div className="px-4 sm:px-5 pt-4 pb-5">
        {/* Search bar */}
        <div className="flex items-center gap-2.5 border border-stone-200 rounded-full px-4 py-2.5 shadow-sm mb-3">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <circle cx="5.8" cy="5.8" r="4" stroke="#9AA0A6" strokeWidth="1.5" />
            <path d="M9 9L12.5 12.5" stroke="#9AA0A6" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div className="flex items-center text-[12px] sm:text-[14px] text-stone-800 h-[20px]">
            <span ref={queryRef} className="leading-[20px]" />
            <span
              className="inline-block w-[2px] h-[16px] bg-blue-500 ml-[1px]"
              style={{
                animation:
                  phase === "typing" || phase === "idle"
                    ? "heroCursorBlink 0.8s step-end infinite"
                    : "none",
                opacity: phase === "typing" || phase === "idle" ? 1 : 0,
                transition: "opacity 0.2s",
              }}
            />
          </div>
        </div>

        {/* Tab bar */}
        <div className="flex gap-5 sm:gap-6 border-b border-stone-100 mb-0 text-[11px] sm:text-[12px]">
          {(["all", "maps", "ai"] as const).map((tab) => (
            <span
              key={tab}
              className={`pb-2.5 relative cursor-default transition-colors duration-200 ${
                activeTab === tab ? "text-[#1A73E8] font-medium" : "text-stone-400"
              }`}
            >
              {tab === "all" ? "All" : tab === "maps" ? "Maps" : "AI Overview"}
              <span
                className={`absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-[#1A73E8] transition-opacity duration-200 ${
                  activeTab === tab ? "opacity-100" : "opacity-0"
                }`}
              />
            </span>
          ))}
        </div>

        {/* Results area -- all three panels stacked, opacity-driven */}
        <div className="relative h-[220px] sm:h-[240px] mt-4">
          {/* Organic results */}
          <div
            className={`absolute inset-0 transition-all duration-300 ease-out ${
              phase === "organic"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <p className="text-[10px] text-stone-400 mb-2.5">
              About {((combo.industry.reviews * 97 + 1200) | 0).toLocaleString()} results
            </p>
            <div className="rounded-xl border border-amber-200/60 bg-amber-50/30 p-3 sm:p-3.5">
              <p className="text-[10px] text-stone-400 mb-0.5">{combo.industry.site}</p>
              <p className="text-[13px] sm:text-[14px] font-medium text-[#1A0DAB] leading-snug mb-1">
                {combo.industry.biz} &mdash; {combo.city}, CA
              </p>
              <Stars rating={combo.industry.rating} count={combo.industry.reviews} />
              <p className="text-[11px] text-stone-500 leading-relaxed mt-1">
                Professional {combo.industry.cat.toLowerCase()} serving {combo.city} and the Central
                Valley. Trusted by locals...
              </p>
            </div>
            {/* Ghost result */}
            <div className="mt-3 px-3.5 opacity-[0.2]">
              <div className="h-2 w-28 bg-stone-300 rounded mb-2" />
              <div className="h-3 w-44 bg-stone-300 rounded mb-1.5" />
              <div className="h-2 w-20 bg-stone-300 rounded" />
            </div>
          </div>

          {/* Maps results */}
          <div
            className={`absolute inset-0 transition-all duration-300 ease-out ${
              phase === "maps"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <div className="flex items-center gap-1.5 mb-3">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M7 1.5C5.07 1.5 3.5 3.07 3.5 5C3.5 7.75 7 12.5 7 12.5S10.5 7.75 10.5 5C10.5 3.07 8.93 1.5 7 1.5Z"
                  fill="#EA4335"
                />
                <circle cx="7" cy="5" r="1.5" fill="white" />
              </svg>
              <span className="text-[12px] font-medium text-stone-700">
                Places {"\u00B7"} {combo.city}, CA
              </span>
            </div>
            {/* #1 highlighted */}
            <div className="rounded-xl border border-amber-200/60 bg-amber-50/30 p-3 mb-2">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[13px] font-semibold text-stone-800">
                  {combo.industry.biz}
                </span>
                <span className="text-[8px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                  #1
                </span>
              </div>
              <Stars rating={combo.industry.rating} count={combo.industry.reviews} />
              <span className="text-[10px] text-stone-400 block mt-0.5">
                {combo.industry.cat} {"\u00B7"} Open now
              </span>
            </div>
            {/* Ghost #2 and #3 */}
            <div className="px-3 py-2 opacity-[0.2]">
              <div className="h-2.5 w-36 bg-stone-300 rounded mb-1" />
              <div className="h-2 w-20 bg-stone-300 rounded" />
            </div>
            <div className="px-3 py-1.5 opacity-[0.12]">
              <div className="h-2.5 w-32 bg-stone-300 rounded mb-1" />
              <div className="h-2 w-16 bg-stone-300 rounded" />
            </div>
          </div>

          {/* AI Overview */}
          <div
            className={`absolute inset-0 transition-all duration-300 ease-out ${
              phase === "ai"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <div className="rounded-xl border border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-blue-50/30 p-3.5 sm:p-4">
              <div className="flex items-center gap-1.5 mb-2.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M7 0.5L8.2 5.3L13 6.5L8.2 7.7L7 12.5L5.8 7.7L1 6.5L5.8 5.3L7 0.5Z"
                    fill="#886BF2"
                  />
                </svg>
                <span className="text-[12px] font-semibold text-purple-700">AI Overview</span>
              </div>
              <p className="text-[12px] sm:text-[13px] text-stone-600 leading-relaxed">
                Based on local reviews,{" "}
                <strong className="text-stone-800">{combo.industry.biz}</strong> is a top-rated{" "}
                {combo.industry.cat.toLowerCase()} in {combo.city}, CA. With a{" "}
                {combo.industry.rating}-star rating across {combo.industry.reviews} reviews, they're
                consistently recommended by locals.
              </p>
              <div className="flex items-center gap-1.5 mt-3">
                <span className="w-3 h-3 rounded-full bg-stone-200 flex-shrink-0" />
                <span className="text-[10px] text-stone-400">{combo.industry.site}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiscoveryBadge({
  channel,
  active = false,
  className = "",
}: {
  channel: DiscoveryChannel;
  active?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border px-5 py-3 flex items-center gap-2.5 transition-[transform,box-shadow,opacity] duration-300 ease-out ${
        active
          ? "scale-[1.05] opacity-100 shadow-[0_8px_32px_rgba(0,0,0,0.20),0_2px_8px_rgba(0,0,0,0.08)]"
          : "scale-100 opacity-90 shadow-[0_4px_16px_rgba(0,0,0,0.12),0_1px_4px_rgba(0,0,0,0.06)]"
      } ${channel.accent} ${className}`}
    >
      <span className="flex-shrink-0">{channel.icon}</span>
      <span className="text-[14px] font-semibold text-stone-700 leading-tight">
        {channel.label}
      </span>
    </div>
  );
}

/* -- ShuffleChip — slot-machine text swap for discovery channels --- */
function ShuffleChip({ activePhase }: { activePhase: Phase }) {
  const resolvedId: DiscoveryChannel["id"] =
    activePhase === "maps" ? "maps" : activePhase === "ai" ? "ai" : "organic";
  const channel = DISCOVERY_CHANNELS.find((c) => c.id === resolvedId)!;
  const prevRef = useRef(resolvedId);
  const [slots, setSlots] = useState<
    { id: string; channel: DiscoveryChannel; state: "in" | "out" }[]
  >([{ id: "init", channel, state: "in" }]);

  useEffect(() => {
    if (resolvedId === prevRef.current) return;
    const next = DISCOVERY_CHANNELS.find((c) => c.id === resolvedId)!;
    const outId = prevRef.current;
    prevRef.current = resolvedId;

    setSlots((prev) => [
      ...prev.map((s) => (s.state === "in" ? { ...s, state: "out" as const } : s)),
      { id: `${resolvedId}-${Date.now()}`, channel: next, state: "in" as const },
    ]);

    // Clean up exited slots after animation
    const timer = setTimeout(() => {
      setSlots((prev) => prev.filter((s) => s.state !== "out"));
    }, 350);
    return () => clearTimeout(timer);
  }, [resolvedId]);

  return (
    <div className="relative h-[44px] w-[180px] rounded-xl border bg-white border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.10),0_1px_4px_rgba(0,0,0,0.05)] overflow-hidden">
      {slots.map((slot) => (
        <div
          key={slot.id}
          className="absolute inset-0 flex items-center justify-center gap-2.5"
          style={{
            animation: `${slot.state === "in" ? "chipSlideIn" : "chipSlideOut"} 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
          }}
        >
          <span className="flex-shrink-0">{slot.channel.icon}</span>
          <span className="text-[14px] font-semibold text-stone-700 leading-tight">
            {slot.channel.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* -- Hero --------------------------------------------------------- */
export default function Hero() {
  const [activePhase, setActivePhase] = useState<Phase>("idle");

  return (
    <section className="relative overflow-hidden bg-[#004D3A]" aria-labelledby="hero-heading">
      {/* Vignette — darker at edges, slight lift in center */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 35%, rgba(0,77,58,0.0) 0%, rgba(0,30,22,0.6) 100%)",
        }}
      />

      <div className="relative z-0 w-full max-w-[1600px] mx-auto px-4 sm:px-10 md:px-16 lg:px-20 pt-28 sm:pt-28 pb-16 sm:pb-24 flex flex-col">
        {/* Visual — mockup with ambient back-glow */}
        <div
          className="order-2 sm:order-1 w-full max-w-[960px] mx-auto mb-8 sm:mb-10 mt-8 sm:mt-0"
          style={fadeAnim(0.05)}
        >
          {/* Mobile/tablet: single chip above demo, shuffle animation */}
          <div className="xl:hidden mb-4 flex justify-center">
            <ShuffleChip activePhase={activePhase} />
          </div>
          <div className="relative">
            {/* Ambient glow behind mockup — the mockup is "lit" */}
            <div
              className="absolute inset-x-[8%] -top-16 -bottom-8 rounded-[40%] blur-[80px] pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 40%, rgba(16,185,129,0.12) 0%, rgba(0,77,58,0.06) 40%, transparent 70%)",
              }}
            />
            <SearchDemo onPhaseChange={setActivePhase} />
            <div className="hidden xl:block">
              <DiscoveryBadge
                channel={DISCOVERY_CHANNELS[0]}
                active={activePhase === DISCOVERY_CHANNELS[0].id}
                className="absolute left-0 top-[26%] -translate-x-[28%] origin-right"
              />
              <DiscoveryBadge
                channel={DISCOVERY_CHANNELS[1]}
                active={activePhase === DISCOVERY_CHANNELS[1].id}
                className="absolute right-0 top-[47%] translate-x-[24%] origin-left"
              />
              <DiscoveryBadge
                channel={DISCOVERY_CHANNELS[2]}
                active={activePhase === DISCOVERY_CHANNELS[2].id}
                className="absolute right-[10%] bottom-[8%] translate-y-[30%] origin-top"
              />
            </div>
          </div>
        </div>

        {/* Copy block — headline + body + proof card + CTAs */}
        <div className="order-1 sm:order-2 relative text-center max-w-[860px] mx-auto">
          {/* Soft light pool — gives the text content a "stage" */}
          <div
            className="absolute inset-x-[-20%] -top-8 -bottom-4 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 50% 40%, rgba(167,243,208,0.07) 0%, rgba(16,185,129,0.03) 35%, transparent 70%)",
            }}
          />
          <h1
            id="hero-heading"
            className="font-display tracking-tight"
            style={{ fontSize: "clamp(1.9rem, 5.6vw, 4.7rem)", lineHeight: 0.99 }}
          >
            <span className="block overflow-hidden">
              <span
                className="block font-medium pb-[0.18em]"
                style={{ ...lineAnim(0.15), color: "rgba(250,249,246,0.75)" }}
              >
                Get Found on Google.
              </span>
            </span>
            <span className="block overflow-hidden" style={{ marginTop: "-0.06em" }}>
              <span
                className="block font-extrabold pb-[0.18em] sm:whitespace-nowrap text-white"
                style={lineAnim(0.25)}
              >
                Turn Clicks Into Clients.
              </span>
            </span>
          </h1>

          <p
            className="text-[0.95rem] sm:text-[1.2rem] text-emerald-100/80 leading-relaxed font-sans mt-3 sm:mt-4 max-w-[620px] mx-auto text-pretty"
            style={fadeAnim(0.5)}
          >
            Websites and local SEO for Central Valley service businesses that want more visibility,
            more calls, and a site customers actually&nbsp;trust.
          </p>

          {/* CTA row */}
          <div
            className="mt-5 sm:mt-7 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
            style={fadeAnim(0.55)}
          >
            <PrimaryButton
              href="/contact"
              arrow
              size="lg"
              aria-label="Book a free strategy call"
              data-umami-event="hero-cta"
            >
              Book a Free Strategy Call
            </PrimaryButton>
            <Link
              href="#services"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.07] px-5 py-3 text-[15px] font-medium text-white/80 shadow-[0_10px_24px_rgba(0,0,0,0.15)] transition-all duration-200 hover:border-white/25 hover:bg-white/[0.12] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#004D3A]"
              data-umami-event="hero-see-how"
            >
              See How It Works
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
                aria-hidden="true"
              >
                <path
                  d="M7 2v10M2 8l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Proof — trust signal below CTAs, catches hesitators */}
          <a
            href="https://maps.app.goo.gl/Sb9a7rGdK6r6eVzE7"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 sm:mt-5 inline-flex flex-col items-center gap-1.5 sm:gap-2 transition-opacity duration-200 hover:opacity-90"
            style={fadeAnim(0.7)}
            aria-label="Read Shannon's Google review"
          >
            <span className="text-[14px] sm:text-[15px] italic text-white/65 leading-snug">
              &ldquo;Even my clients have complimented how user-friendly
              my&nbsp;website&nbsp;is.&rdquo;
            </span>
            <span className="flex items-center gap-2">
              <span className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="12"
                    height="12"
                    viewBox="0 0 14 14"
                    fill="#FBBC04"
                    aria-hidden="true"
                  >
                    <path d="M7 1l1.6 3.3 3.6.5-2.6 2.5.6 3.6L7 9.3l-3.2 1.7.6-3.6L1.8 4.8l3.6-.5z" />
                  </svg>
                ))}
              </span>
              <span className="text-[13px] text-white/55">Shannon&nbsp;H.</span>
            </span>
          </a>
        </div>
      </div>

      {/* Bottom fade — dark hero → cream page */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(250,249,246,0.06) 50%, rgba(250,249,246,0.20))",
        }}
      />
    </section>
  );
}
