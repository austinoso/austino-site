"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { gsap } from "gsap";
import { signalHeroReady } from "@/lib/heroReady";
import WordReveal from "@/components/ui/WordReveal";
import {
  Mail,
  Calendar,
  FileText,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Cinematic hero: 5-scene loop that demos the full user → automation */
/*  journey inside a single browser frame.                             */
/* ------------------------------------------------------------------ */

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const masterTlRef = useRef<gsap.core.Timeline | null>(null);

  /* Scenes */
  const s1 = useRef<HTMLDivElement>(null);
  const s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null);
  const s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null);

  /* Cursor */
  const cursorRef = useRef<HTMLDivElement>(null);

  /* Stat counters (scene 5) */
  const statLeads = useRef<HTMLSpanElement>(null);
  const statConv = useRef<HTMLSpanElement>(null);
  const statScore = useRef<HTMLSpanElement>(null);

  /* Debug mode */
  const searchParams = useSearchParams();
  const isDebug = searchParams.get("debug") !== null;
  const [debugScene, setDebugScene] = useState(0);

  const SCENE_LABELS = [
    "Scene 1 — Landing Page",
    "Scene 2 — Booking Form",
    "Scene 3 — Confirmation",
    "Scene 4 — Automation",
    "Scene 5 — Results",
  ];

  const prevScene = useCallback(
    () => setDebugScene((s) => Math.max(0, s - 1)),
    [],
  );
  const nextScene = useCallback(
    () => setDebugScene((s) => Math.min(4, s + 1)),
    [],
  );

  /* ── Debug mode: show one scene at a time with all elements visible ── */
  useEffect(() => {
    if (!isDebug) return;
    const scenes = [s1, s2, s3, s4, s5].map((r) => r.current!);
    const cursor = cursorRef.current;
    if (!scenes.every(Boolean) || !cursor) return;

    // Show copy & visual immediately
    if (copyRef.current) gsap.set(copyRef.current, { opacity: 1, y: 0 });
    if (visualRef.current) gsap.set(visualRef.current, { opacity: 1, y: 0 });
    signalHeroReady();

    // Hide all scenes, then show only the active one
    scenes.forEach((s) => gsap.set(s, { opacity: 0, xPercent: 0, scale: 1 }));
    gsap.set(scenes[debugScene], { opacity: 1 });

    // Reset cursor
    gsap.set(cursor, { opacity: 0, scale: 1 });

    const mobile = !window.matchMedia("(min-width: 640px)").matches;

    // Scene-specific element states (show everything in "completed" state)
    switch (debugScene) {
      case 0: // Landing page — show cursor at "Book Now"
        gsap.set(cursor, {
          opacity: 1,
          left: mobile ? "7%" : "8%",
          top: mobile ? "58%" : "62%",
        });
        break;
      case 1: // Booking form — all fields filled, cursor at confirm
        gsap.set(".hv", { opacity: 1 });
        gsap.set(cursor, {
          opacity: 1,
          left: mobile ? "38%" : "46%",
          top: mobile ? "86%" : "91%",
        });
        break;
      case 2: // Confirmation — checkmark drawn, text visible
        gsap.set(".hv", { opacity: 0 });
        gsap.set(".hconfirm-circle", { strokeDashoffset: 0 });
        gsap.set(".hconfirm-check", { strokeDashoffset: 0 });
        gsap.set(".hconfirm-text", { opacity: 1, y: 0 });
        gsap.set(".hconfirm-details", { opacity: 1 });
        break;
      case 3: // Automation — all tasks visible with checks
        gsap.set(".hv", { opacity: 0 });
        gsap.set(".hconfirm-circle", { strokeDashoffset: 150.8 });
        gsap.set(".hconfirm-check", { strokeDashoffset: 35 });
        gsap.set(".hconfirm-text", { opacity: 0 });
        gsap.set(".hconfirm-details", { opacity: 0 });
        gsap.set(".htask", { opacity: 1, x: 0 });
        gsap.set(".htask-check", { strokeDashoffset: 0 });
        break;
      case 4: // Results — ring filled, counters at final values
        gsap.set(".hv", { opacity: 0 });
        gsap.set(".htask", { opacity: 0 });
        gsap.set(".hstat-ring", { strokeDashoffset: 0 });
        if (statLeads.current) statLeads.current.textContent = "47";
        if (statConv.current) statConv.current.textContent = "23%";
        if (statScore.current) statScore.current.textContent = "100";
        break;
    }
  }, [isDebug, debugScene]);

  /* ── Normal animation (skipped in debug mode) ── */
  useEffect(() => {
    if (isDebug) return;

    /* Skip looping animation if user prefers reduced motion */
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const scenes = [s1, s2, s3, s4, s5].map((r) => r.current!);
    const cursor = cursorRef.current;
    if (!scenes.every(Boolean) || !cursor) return;

    const ctx = gsap.context(() => {
      /* ── Entry animations (copy + visual fade-up) ── */
      if (copyRef.current) {
        if (prefersReducedMotion) {
          gsap.set(copyRef.current, { opacity: 1, y: 0 });
          signalHeroReady();
        } else {
          gsap.to(copyRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: signalHeroReady,
          });
        }
      }
      if (visualRef.current) {
        if (prefersReducedMotion) {
          gsap.set(visualRef.current, { opacity: 1, y: 0 });
        } else {
          gsap.to(visualRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: 0.3,
            ease: "power2.out",
          });
        }
      }

      /* If reduced motion, just show scene 1 statically */
      if (prefersReducedMotion) {
        gsap.set(scenes[0], { opacity: 1 });
        scenes.slice(1).forEach((s) => gsap.set(s, { opacity: 0 }));
        return;
      }

      /* ═══════════════════════════════════════════════ */
      /*  Master looping timeline                        */
      /* ═══════════════════════════════════════════════ */
      const isMobile = !window.matchMedia("(min-width: 640px)").matches;
      let firstPlay = true;
      const buildTimeline = () => {
        const tl = gsap.timeline({
          delay: firstPlay ? 1.5 : 0,
          paused: false,
          onComplete: () => {
            // Cross-fade scene 5 → scene 0, THEN rebuild
            const xfade = gsap.timeline({
              onComplete: () => {
                xfade.kill();
                // Reset all hidden elements imperatively before new timeline
                gsap.set(scenes.slice(1), {
                  opacity: 0,
                  xPercent: 0,
                  scale: 1,
                });
                gsap.set(cursor, {
                  opacity: 0,
                  left: "60%",
                  top: "20%",
                  scale: 1,
                });
                gsap.set(".hv", { opacity: 0 });
                gsap.set(".hbtn-book, .hbtn-confirm", {
                  scale: 1,
                });
                gsap.set(".hconfirm-circle", { strokeDashoffset: 150.8 });
                gsap.set(".hconfirm-check", { strokeDashoffset: 35 });
                gsap.set(".hconfirm-text", { opacity: 0, y: 8 });
                gsap.set(".hconfirm-details", { opacity: 0 });
                gsap.set(".htask", { opacity: 0, x: 20 });
                gsap.set(".htask-check", { strokeDashoffset: 20 });
                gsap.set(".hstat-ring", { strokeDashoffset: 97.4 });
                if (statLeads.current) statLeads.current.textContent = "0";
                if (statConv.current) statConv.current.textContent = "0%";
                if (statScore.current) statScore.current.textContent = "0";
                buildTimeline();
              },
            });
            xfade.to(
              scenes[4],
              { opacity: 0, duration: 0.6, ease: "power2.inOut" },
              0,
            );
            xfade.fromTo(
              scenes[0],
              { xPercent: 0, opacity: 0, scale: 1 },
              { opacity: 1, duration: 0.6 },
              0.15,
            );
          },
        });
        firstPlay = false;

        /* ───────────────────────────────────────── */
        /*  ACT 1 — The Customer Experience          */
        /* ───────────────────────────────────────── */

        /* Scene 1: Landing page — cursor glides to CTA and clicks */
        tl.addLabel("scene1", "+=0.6");
        // Cursor enters
        tl.to(cursor, { opacity: 1, duration: 0.35 }, "scene1+=0.4");
        // Cursor glides to "Book Now" button
        tl.to(
          cursor,
          {
            left: isMobile ? "7%" : "8%",
            top: isMobile ? "58%" : "62%",
            duration: 1.3,
            ease: "power2.inOut",
          },
          ">0.1",
        );
        // Click
        tl.to(cursor, { scale: 0.7, duration: 0.07 });
        tl.to(".hbtn-book", { scale: 0.96, duration: 0.1 }, "<");
        tl.to(cursor, { scale: 1, duration: 0.15, ease: "back.out(3)" });
        tl.to(
          ".hbtn-book",
          { scale: 1, duration: 0.25, ease: "power2.out" },
          "<",
        );
        tl.to({}, { duration: 0.35 });
        tl.to(cursor, { opacity: 0, duration: 0.15 });

        /* Transition 1 → 2: slide */
        tl.addLabel("t12", "+=0.12");
        tl.to(
          scenes[0],
          { xPercent: -30, opacity: 0, duration: 0.5, ease: "power2.inOut" },
          "t12",
        );
        tl.fromTo(
          scenes[1],
          { xPercent: 30, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" },
          "t12",
        );

        /* Scene 2: Booking form — fields auto-fill */
        tl.addLabel("scene2", "+=0.25");
        tl.to(".hv", { opacity: 1, duration: 0.25, stagger: 0.4 }, "scene2");
        // Cursor clicks "Confirm Booking"
        tl.set(
          cursor,
          { left: isMobile ? "38%" : "46%", top: isMobile ? "86%" : "91%" },
          "+=0.35",
        );
        tl.to(cursor, { opacity: 1, duration: 0.3 });
        tl.to(cursor, { scale: 0.7, duration: 0.07 });
        tl.to(".hbtn-confirm", { scale: 0.96, duration: 0.1 }, "<");
        tl.to(cursor, { scale: 1, duration: 0.15, ease: "back.out(3)" });
        tl.to(
          ".hbtn-confirm",
          { scale: 1, duration: 0.25, ease: "power2.out" },
          "<",
        );
        tl.to(cursor, { opacity: 0, duration: 0.15 }, "+=0.2");

        /* Transition 2 → 3: slide */
        tl.addLabel("t23", "+=0.12");
        tl.to(
          scenes[1],
          { xPercent: -30, opacity: 0, duration: 0.5, ease: "power2.inOut" },
          "t23",
        );
        tl.fromTo(
          scenes[2],
          { xPercent: 30, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" },
          "t23",
        );

        /* Scene 3: Confirmation — checkmark draws */
        tl.addLabel("scene3", "+=0.12");
        tl.to(
          ".hconfirm-circle",
          { strokeDashoffset: 0, duration: 0.55, ease: "power2.out" },
          "scene3",
        );
        tl.to(
          ".hconfirm-check",
          { strokeDashoffset: 0, duration: 0.35, ease: "power2.out" },
          "scene3+=0.3",
        );
        tl.to(
          ".hconfirm-text",
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
          "scene3+=0.5",
        );
        tl.to(
          ".hconfirm-details",
          { opacity: 1, duration: 0.3 },
          "scene3+=0.7",
        );
        tl.to({}, { duration: 1.0 }); // hold

        /* ───────────────────────────────────────── */
        /*  ACT 2 — Behind the Scenes                */
        /* ───────────────────────────────────────── */

        /* Transition 3 → 4: morph (scale pivot) */
        tl.addLabel("t34", "+=0.12");
        tl.to(
          scenes[2],
          { scale: 0.92, opacity: 0, duration: 0.4, ease: "power2.in" },
          "t34",
        );
        tl.fromTo(
          scenes[3],
          { scale: 1.06, opacity: 0, xPercent: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" },
          "t34+=0.3",
        );

        /* Scene 4: Automation cascade */
        tl.addLabel("scene4", "+=0.2");
        tl.to(
          ".htask",
          {
            opacity: 1,
            x: 0,
            duration: 0.35,
            stagger: 0.65,
            ease: "power2.out",
          },
          "scene4",
        );
        tl.to(
          ".htask-check",
          {
            strokeDashoffset: 0,
            duration: 0.3,
            stagger: 0.65,
            ease: "power2.out",
          },
          "scene4+=0.25",
        );
        tl.to({}, { duration: 0.8 }); // hold

        /* Transition 4 → 5: slide */
        tl.addLabel("t45", "+=0.12");
        tl.to(
          scenes[3],
          { xPercent: -30, opacity: 0, duration: 0.5, ease: "power2.inOut" },
          "t45",
        );
        tl.fromTo(
          scenes[4],
          { xPercent: 30, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" },
          "t45",
        );

        /* Scene 5: Results — counters tick up */
        tl.addLabel("scene5", "+=0.2");
        tl.to(
          ".hstat-ring",
          { strokeDashoffset: 0, duration: 1.2, ease: "power2.out" },
          "scene5",
        );
        const counters = { leads: 0, conv: 0, score: 0 };
        tl.fromTo(
          counters,
          { leads: 0, conv: 0, score: 0 },
          {
            leads: 47,
            conv: 23,
            score: 100,
            duration: 1.2,
            ease: "power2.out",
            onUpdate: () => {
              if (statLeads.current)
                statLeads.current.textContent = Math.round(
                  counters.leads,
                ).toString();
              if (statConv.current)
                statConv.current.textContent =
                  Math.round(counters.conv).toString() + "%";
              if (statScore.current)
                statScore.current.textContent = Math.round(
                  counters.score,
                ).toString();
            },
          },
          "scene5",
        );
        tl.to({}, { duration: 1.5 }); // hold — then onComplete handles cross-fade
      }; // end buildTimeline

      buildTimeline();
    }, heroRef);

    return () => ctx.revert();
  }, [isDebug]);

  /* ── Pause / Resume the hero animation loop ── */
  useEffect(() => {
    if (isDebug) return;
    const hero = heroRef.current;
    if (!hero) return;
    // Pause/resume all GSAP tweens scoped to this hero section
    if (isPaused) {
      gsap.getTweensOf(hero.querySelectorAll("*")).forEach((t) => t.pause());
      gsap.globalTimeline.getChildren(true, true, true).forEach((child) => {
        const targets = (child as gsap.core.Tween).targets?.();
        if (
          targets &&
          targets.some(
            (t: Element | unknown) => t instanceof Element && hero.contains(t),
          )
        ) {
          (child as gsap.core.Tween).pause();
        }
      });
    } else {
      gsap.getTweensOf(hero.querySelectorAll("*")).forEach((t) => t.resume());
      gsap.globalTimeline.getChildren(true, true, true).forEach((child) => {
        const targets = (child as gsap.core.Tween).targets?.();
        if (
          targets &&
          targets.some(
            (t: Element | unknown) => t instanceof Element && hero.contains(t),
          )
        ) {
          (child as gsap.core.Tween).resume();
        }
      });
    }
  }, [isPaused, isDebug]);

  /* ── Render ── */
  return (
    <section
      ref={heroRef}
      className="relative bg-[#050505] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Ambient gradients */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(64,224,255,0.05), transparent), radial-gradient(ellipse 60% 50% at 20% 50%, rgba(120,75,255,0.03), transparent)",
        }}
        aria-hidden="true"
      />
      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 pointer-events-none z-[5]"
        style={{
          background: "linear-gradient(to bottom, transparent, #0B0D10)",
        }}
        aria-hidden="true"
      />

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

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-12 pt-36 sm:pt-44 lg:pt-48 pb-20 sm:pb-28 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
          {/* ─── Copy ─── */}
          <div
            ref={copyRef}
            className="lg:col-span-6 flex flex-col"
            style={{ opacity: 0, transform: "translateY(18px)" }}
          >
            <p className="font-mono text-[11px] sm:text-xs text-cyber-accent/70 uppercase tracking-[0.18em] sm:tracking-[0.25em] mb-4">
              Performance &middot; Conversions &middot; Automation
            </p>

            <WordReveal
              text="Websites that work as hard as you do."
              as="h1"
              id="hero-heading"
              className="text-[2rem] sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
              immediate
            />

            <p className="mt-5 text-[15px] sm:text-base text-cyber-gray-300 max-w-md leading-relaxed">
              I build fast, high-converting sites that turn visitors into
              customers — then automate the follow-ups, bookings, and busywork
              so you can focus on running your business.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-cyber-accent text-[#050505] font-semibold rounded-xl transition-all text-sm shadow-lg shadow-cyber-accent/20 hover:shadow-xl hover:shadow-cyber-accent/30 hover:brightness-110"
                aria-label="Get a free consultation"
                data-umami-event="hero-cta"
              >
                Get a Free Consultation
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-[13px] text-cyber-gray-400/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
              Based in Northern California, serving clients everywhere.
            </div>
          </div>

          {/* ─── Visual: Cinematic Demo ─── */}
          <div
            ref={visualRef}
            className="lg:col-span-6 mb-8 sm:mb-10 lg:mb-0"
            style={{ opacity: 0, transform: "translateY(24px)" }}
          >
            <div className="relative">
              {/* Glow behind the browser */}
              <div
                className="absolute -inset-4 sm:-inset-6 rounded-3xl opacity-40 blur-2xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(64,224,255,0.12), transparent 70%)",
                }}
              />
              <div
                className="relative rounded-2xl border border-white/[0.08] bg-[#111318] overflow-hidden"
                style={{
                  boxShadow:
                    "0 32px 60px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03)",
                }}
                aria-hidden="true"
              >
                {/* Chrome bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0D0F13]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] text-[11px] text-cyber-gray-400 font-mono">
                      <svg
                        className="w-2.5 h-2.5 opacity-40"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M11.5 1a3.5 3.5 0 00-3.5 3.5V7H3a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2H9V4.5a2.5 2.5 0 015 0V6h1V4.5A3.5 3.5 0 0011.5 1z" />
                      </svg>
                      bloomstudio.com
                    </div>
                  </div>
                </div>

                {/* ══ Stage ══ */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#0A0C10]">
                  {/* ━━ Scene 1 — Landing Page ━━ */}
                  <div
                    ref={s1}
                    className="absolute inset-0 p-4 sm:p-5 flex flex-col"
                  >
                    {/* Nav */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] sm:text-[12px] font-semibold text-white tracking-tight">
                          Bloom Studio
                        </span>
                      </div>
                      <div className="hidden sm:flex items-center gap-4">
                        <span className="text-[8px] text-cyber-gray-500">
                          Services
                        </span>
                        <span className="text-[8px] text-cyber-gray-500">
                          About
                        </span>
                        <span className="text-[8px] text-cyber-gray-500">
                          Contact
                        </span>
                      </div>
                    </div>

                    {/* Hero area */}
                    <div className="mt-5 sm:mt-7 flex-1">
                      <p className="text-[16px] sm:text-[20px] font-semibold text-white leading-tight">
                        Look Good.
                        <br />
                        Feel Great.
                      </p>
                      <p className="text-[8px] sm:text-[10px] text-cyber-gray-400 mt-2 max-w-[75%] leading-relaxed">
                        Premium services tailored to you.
                        <br />
                        Book your next appointment online.
                      </p>
                      <button className="hbtn-book mt-3 sm:mt-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-cyber-accent rounded text-[8px] sm:text-[9px] font-semibold text-[#050505]">
                        Book Now
                      </button>
                    </div>

                    {/* Abstract service cards */}
                    <div className="flex gap-2 mt-auto">
                      <div className="h-10 sm:h-12 flex-1 rounded bg-white/[0.03] border border-white/[0.04]" />
                      <div className="h-10 sm:h-12 flex-1 rounded bg-white/[0.03] border border-white/[0.04]" />
                      <div className="h-10 sm:h-12 flex-1 rounded bg-white/[0.03] border border-white/[0.04]" />
                    </div>
                  </div>

                  {/* ━━ Scene 2 — Booking Form ━━ */}
                  <div
                    ref={s2}
                    className="absolute inset-0 p-3 sm:p-4 flex flex-col"
                    style={{ opacity: 0 }}
                  >
                    <p className="text-[13px] sm:text-[15px] font-semibold text-white mb-2 sm:mb-3">
                      Book Your Appointment
                    </p>
                    <div className="space-y-1.5 sm:space-y-2 flex-1">
                      {/* Name */}
                      <div>
                        <span className="text-[7px] sm:text-[8px] text-cyber-gray-500 uppercase tracking-wider font-mono">
                          Name
                        </span>
                        <div className="mt-0.5 px-2.5 py-[5px] sm:py-[7px] rounded bg-white/[0.04] border border-white/[0.06] flex items-center">
                          <span
                            className="hv text-[11px] sm:text-[13px] text-white leading-none"
                            style={{ opacity: 0 }}
                          >
                            Sarah Martinez
                          </span>
                        </div>
                      </div>
                      {/* Date & Time — side by side */}
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-[7px] sm:text-[8px] text-cyber-gray-500 uppercase tracking-wider font-mono">
                            Date
                          </span>
                          <div className="mt-0.5 px-2.5 py-[5px] sm:py-[7px] rounded bg-white/[0.04] border border-white/[0.06] flex items-center">
                            <span
                              className="hv text-[11px] sm:text-[13px] text-white leading-none"
                              style={{ opacity: 0 }}
                            >
                              Feb 20
                            </span>
                          </div>
                        </div>
                        <div>
                          <span className="text-[7px] sm:text-[8px] text-cyber-gray-500 uppercase tracking-wider font-mono">
                            Time
                          </span>
                          <div className="mt-0.5 px-2.5 py-[5px] sm:py-[7px] rounded bg-white/[0.04] border border-white/[0.06] flex items-center">
                            <span
                              className="hv text-[10px] sm:text-[13px] text-white leading-none"
                              style={{ opacity: 0 }}
                            >
                              2:00 PM
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Service */}
                      <div>
                        <span className="text-[7px] sm:text-[8px] text-cyber-gray-500 uppercase tracking-wider font-mono">
                          Service
                        </span>
                        <div className="mt-0.5 px-2.5 py-[5px] sm:py-[7px] rounded bg-white/[0.04] border border-white/[0.06] flex items-center">
                          <span
                            className="hv text-[10px] sm:text-[13px] text-white leading-none"
                            style={{ opacity: 0 }}
                          >
                            Premium Session · 60 min · $150
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Confirm button */}
                    <div className="mt-2 flex justify-center">
                      <button className="hbtn-confirm px-4 sm:px-5 py-1.5 sm:py-2 bg-cyber-accent rounded text-[8px] sm:text-[10px] font-semibold text-[#050505]">
                        Confirm Booking
                      </button>
                    </div>
                  </div>

                  {/* ━━ Scene 3 — Confirmation ━━ */}
                  <div
                    ref={s3}
                    className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4"
                    style={{ opacity: 0 }}
                  >
                    <svg
                      viewBox="0 0 52 52"
                      className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-3"
                    >
                      <circle
                        className="hconfirm-circle"
                        cx="26"
                        cy="26"
                        r="24"
                        fill="none"
                        stroke="#4ADE80"
                        strokeWidth="2"
                        strokeDasharray="150.8"
                        strokeDashoffset="150.8"
                      />
                      <path
                        className="hconfirm-check"
                        d="M15 27l7 7 15-15"
                        fill="none"
                        stroke="#4ADE80"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="35"
                        strokeDashoffset="35"
                      />
                    </svg>
                    <p
                      className="hconfirm-text text-[14px] sm:text-[17px] font-semibold text-white"
                      style={{ opacity: 0 }}
                    >
                      Booking Confirmed!
                    </p>
                    <div
                      className="hconfirm-details mt-3 sm:mt-4 space-y-1 sm:space-y-1.5 text-center"
                      style={{ opacity: 0 }}
                    >
                      <p className="text-[9px] sm:text-[11px] text-cyber-gray-300">
                        Sarah M. · Feb 20 · 2:00 PM
                      </p>
                      <p className="text-[9px] sm:text-[11px] text-cyber-gray-400">
                        Premium Session · 60 min
                      </p>
                      <p className="text-[8px] sm:text-[9px] text-cyber-gray-500 mt-2 sm:mt-3">
                        ✉ Confirmation sent to sarah@email.com
                      </p>
                    </div>
                  </div>

                  {/* ━━ Scene 4 — Automation Cascade ━━ */}
                  <div
                    ref={s4}
                    className="absolute inset-0 p-3 sm:p-4"
                    style={{ opacity: 0 }}
                  >
                    <div className="flex items-center gap-1.5 mb-1.5 sm:mb-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                      <p className="text-[8px] sm:text-[10px] font-mono text-cyber-gray-400 uppercase tracking-wider">
                        Behind the scenes
                      </p>
                    </div>
                    <p className="text-[11px] sm:text-[13px] font-semibold text-white mb-2 sm:mb-3">
                      Automation Running
                    </p>
                    <div className="space-y-1.5 sm:space-y-2">
                      {(
                        [
                          {
                            Icon: Mail,
                            text: "Confirmation email sent",
                            detail: "sarah@email.com",
                          },
                          {
                            Icon: FileText,
                            text: "Invoice generated",
                            detail: "$150.00",
                          },
                          {
                            Icon: Calendar,
                            text: "Google Calendar updated",
                            detail: "Feb 20, 2:00 PM",
                          },
                          {
                            Icon: Star,
                            text: "Follow-up scheduled",
                            detail: "Review request · 3 days",
                          },
                        ] as const
                      ).map((task, i) => (
                        <div
                          key={i}
                          className="htask flex items-center gap-2 sm:gap-2.5 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-lg bg-white/[0.03] border border-white/[0.05]"
                          style={{ opacity: 0 }}
                        >
                          <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded bg-[#4ADE80]/10 flex items-center justify-center">
                            <svg
                              viewBox="0 0 16 16"
                              className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                            >
                              <path
                                className="htask-check"
                                d="M3 8l4 4 6-7"
                                fill="none"
                                stroke="#4ADE80"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeDasharray="20"
                                strokeDashoffset="20"
                              />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] sm:text-[12px] font-semibold text-white">
                              {task.text}
                            </p>
                          </div>
                          <task.Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyber-gray-500 flex-shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ━━ Scene 5 — Results ━━ */}
                  <div
                    ref={s5}
                    className="absolute inset-0 p-4 sm:p-5 flex flex-col"
                    style={{ opacity: 0 }}
                  >
                    {/* Header row */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div>
                        <p className="text-[8px] sm:text-[10px] font-mono text-cyber-gray-500 uppercase tracking-wider">
                          Monthly Overview
                        </p>
                        <p className="text-[13px] sm:text-[16px] font-semibold text-white mt-0.5">
                          Your Results
                        </p>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]"></span>
                        <span className="text-[7px] sm:text-[8px] font-mono text-[#4ADE80]">
                          Live
                        </span>
                      </div>
                    </div>

                    {/* Stat cards */}
                    <div className="flex-1 grid grid-cols-3 gap-2 sm:gap-3">
                      {/* Lighthouse */}
                      <div className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-2.5 sm:p-3 flex flex-col items-center justify-center">
                        <div className="relative h-14 w-14 sm:h-16 sm:w-16 mb-1.5">
                          <svg
                            viewBox="0 0 36 36"
                            className="h-full w-full -rotate-90"
                          >
                            <circle
                              cx="18"
                              cy="18"
                              r="15.5"
                              fill="none"
                              stroke="rgba(255,255,255,0.06)"
                              strokeWidth="2.5"
                            />
                            <circle
                              className="hstat-ring"
                              cx="18"
                              cy="18"
                              r="15.5"
                              fill="none"
                              stroke="#4ADE80"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeDasharray="97.4"
                              strokeDashoffset="97.4"
                            />
                          </svg>
                          <span
                            ref={statScore}
                            className="absolute inset-0 flex items-center justify-center text-[12px] sm:text-[14px] font-bold text-white"
                          >
                            0
                          </span>
                        </div>
                        <p className="text-[7px] sm:text-[8px] text-cyber-gray-500 font-mono uppercase tracking-wider">
                          Lighthouse
                        </p>
                      </div>
                      {/* Leads */}
                      <div className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-2.5 sm:p-3 flex flex-col items-center justify-center">
                        <p className="text-[24px] sm:text-[30px] font-semibold text-white leading-none mb-1.5">
                          <span ref={statLeads}>0</span>
                        </p>
                        <p className="text-[7px] sm:text-[8px] text-cyber-gray-500 font-mono uppercase tracking-wider">
                          New Leads
                        </p>
                      </div>
                      {/* Conversion rate */}
                      <div className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-2.5 sm:p-3 flex flex-col items-center justify-center">
                        <p className="text-[24px] sm:text-[30px] font-semibold text-[#4ADE80] leading-none mb-1.5">
                          <span ref={statConv}>0%</span>
                        </p>
                        <p className="text-[7px] sm:text-[8px] text-cyber-gray-500 font-mono uppercase tracking-wider">
                          Conv. Rate
                        </p>
                      </div>
                    </div>

                    {/* Footer tagline */}
                    <div className="mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-white/[0.06] flex items-center justify-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-[#4ADE80]"></span>
                      <p className="text-[7px] sm:text-[9px] font-mono text-cyber-gray-500 uppercase tracking-wider">
                        All automated · Zero busywork
                      </p>
                    </div>
                  </div>

                  {/* ━━ Cursor ━━ */}
                  <div
                    ref={cursorRef}
                    className="absolute z-30 pointer-events-none"
                    style={{ opacity: 0, left: "60%", top: "20%" }}
                  >
                    <svg width="14" height="18" viewBox="0 0 16 20" fill="none">
                      <path
                        d="M1 1v14.5l4-4 3.5 7 2-1L7 10.5l5.5 0z"
                        fill="white"
                        stroke="#333"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>

                  {/* ━━ Debug overlay ━━ */}
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
                      <span className="text-[10px] font-mono text-cyber-accent">
                        {debugScene + 1}/5 — {SCENE_LABELS[debugScene]}
                      </span>
                      <button
                        onClick={nextScene}
                        disabled={debugScene === 4}
                        className="flex items-center gap-1 px-2 py-1 rounded text-[10px] font-mono text-white bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        Next
                        <ChevronRight className="w-3 h-3" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {/* Pause/Play control for animation — WCAG 2.2.2 compliance */}
              {!isDebug && (
                <button
                  onClick={() => setIsPaused((p) => !p)}
                  className="absolute top-2 right-2 z-50 p-1.5 rounded-md bg-black/60 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-black/80 transition-colors"
                  aria-label={isPaused ? "Play animation" : "Pause animation"}
                >
                  {isPaused ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
