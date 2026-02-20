"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  BarChart3,
  Mail,
  Settings,
  Clock,
  Repeat,
  DollarSign,
  CheckCircle2,
  Zap,
  ChevronDown,
  MessageSquare,
  Search,
  FileText,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ── Terminal visual data ── */
const terminalLines = [
  { text: "▶ New booking received — Jane D.", color: "text-cyber-accent" },
  { text: "  ↳ Added to Google Sheets", color: "text-[#4ADE80]" },
  { text: "  ↳ Confirmation SMS sent", color: "text-[#4ADE80]" },
  { text: "  ↳ Reminder scheduled (24h before)", color: "text-[#4ADE80]" },
  { text: "  ↳ Review request queued (2h after)", color: "text-[#4ADE80]" },
  { text: "▶ Daily revenue report generated", color: "text-cyber-accent" },
  { text: "  ↳ Emailed to owner@business.com", color: "text-[#4ADE80]" },
  { text: "▶ Low inventory alert — Product #412", color: "text-[#FEBC2E]" },
  { text: "  ↳ Reorder request sent to supplier", color: "text-[#4ADE80]" },
  { text: "  ↳ Team notified via Slack", color: "text-[#4ADE80]" },
  { text: "─── All tasks completed in 0.3s ───", color: "text-cyber-gray-500" },
];

/* ── FAQ data ── */
const faqs = [
  {
    q: "I\u2019m not a tech person. Is this going to be complicated for me?",
    a: "Not at all. You won\u2019t touch any code. Once everything\u2019s built, it just runs in the background. If it connects to tools you already use (Calendly, Sheets, email), it\u2019ll feel invisible \u2014 like things just started working better on their own.",
  },
  {
    q: "What if my business processes change?",
    a: "Automations can be adjusted. If you add a new service, change your pricing, or switch tools, I update the workflows to match. Everything\u2019s built to adapt to you, not the other way around.",
  },
  {
    q: "Do you only build custom-coded automations?",
    a: "No. I use whatever gets the job done fastest and works best for your situation \u2014 that might be Zapier, Make, custom scripts, or a combination. The point isn\u2019t the tool. It\u2019s that the problem gets solved and you stop doing it manually.",
  },
  {
    q: "How long does it take to build?",
    a: "Simple automations (like booking \u2192 confirmation \u2192 reminder) can be done in a week. More complex workflows with multiple integrations usually take 2\u20134 weeks. I\u2019ll scope it clearly before we start.",
  },
  {
    q: "What happens if something breaks?",
    a: "I build in error handling and monitoring. If something fails, the system retries automatically and I get notified. If you\u2019re on an ongoing partnership, I\u2019ll fix it before you even know it happened.",
  },
];

/* ── Scenario data (hoisted for carousel) ── */
const scenarios = [
  {
    icon: CalendarCheck,
    title: "Hands-free booking flow",
    steps: [
      "Customer books online",
      "Confirmation sent",
      "Reminder next day",
      "Review request sent",
    ],
    description:
      "A customer books online. They instantly get a confirmation text, a reminder the day before, and a follow-up asking for a review \u2014 all without you touching a thing.",
  },
  {
    icon: BarChart3,
    title: "End-of-day reporting",
    steps: [
      "Register closed",
      "Data pulled",
      "Spreadsheet updated",
      "Summary emailed",
    ],
    description:
      "You close out for the day. Your revenue automatically lands in a spreadsheet organized by month, with a summary emailed to you by morning.",
  },
  {
    icon: Mail,
    title: "Instant lead capture",
    steps: [
      "Form submitted",
      "Added to CRM",
      "Auto-reply sent",
      "You get notified",
    ],
    description:
      "Someone fills out your contact form. They show up in your CRM, get a personalized auto-reply, and you get a notification on your phone \u2014 all in under 3 seconds.",
  },
  {
    icon: Repeat,
    title: "Smart inventory alerts",
    steps: [
      "Stock drops low",
      "Reorder fires",
      "Team notified",
      "Sheet logged",
    ],
    description:
      "A product drops below threshold. A reorder request fires to your supplier, your team gets a message, and it\u2019s logged in your inventory sheet automatically.",
  },
];

export default function AutomationPage() {
  const mainRef = useRef<HTMLElement>(null);
  // id="main-content" added in JSX for skip nav
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeScenario, setActiveScenario] = useState(0);
  const demoRef = useRef<HTMLDivElement>(null);
  const chainTlRef = useRef<gsap.core.Timeline | null>(null);

  /* play the chain animation for a given scenario index */
  const playChainAnimation = useCallback(() => {
    if (chainTlRef.current) {
      chainTlRef.current.kill();
    }
    const container = demoRef.current;
    if (!container) return;

    const tl = gsap.timeline();
    chainTlRef.current = tl;

    const steps = container.querySelectorAll("[data-step]");
    const checks = container.querySelectorAll("[data-check]");
    const desc = container.querySelector("[data-chain-desc]");
    const panel = container.querySelector("[data-panel]");

    /* Reset everything instantly */
    gsap.set(steps, { opacity: 0, x: -8 });
    gsap.set(checks, { opacity: 0, scale: 0.5 });
    if (desc) gsap.set(desc, { opacity: 0, y: 10 });
    if (panel) gsap.set(panel, { opacity: 0 });

    /* Panel fades in */
    if (panel) {
      tl.to(panel, { opacity: 1, duration: 0.35, ease: "power2.out" }, 0);
    }

    /* Steps slide in sequentially, then check appears */
    steps.forEach((step, i) => {
      const offset = 0.3 + i * 0.45;
      tl.to(
        step,
        { opacity: 1, x: 0, duration: 0.55, ease: "power2.out" },
        offset,
      );
      if (checks[i]) {
        tl.to(
          checks[i],
          { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(1.7)" },
          offset + 0.35,
        );
      }
    });

    /* Description fades in as the punchline */
    if (desc) {
      tl.to(
        desc,
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        "-=0.05",
      );
    }
  }, []);

  /* Play animation when activeScenario changes */
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      playChainAnimation();
    });
    return () => cancelAnimationFrame(raf);
  }, [activeScenario, playChainAnimation]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((el) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      const heroVisual = mainRef.current?.querySelector("[data-hero-visual]");
      if (heroVisual) {
        gsap.from(heroVisual, {
          x: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.2,
        });
      }

      const heroCopy = mainRef.current?.querySelector("[data-hero-copy]");
      if (heroCopy) {
        gsap.from(heroCopy, {
          x: -30,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.1,
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((el, i) => {
        gsap.from(el, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      /* ScrollTrigger for demo section — play animation on first enter */
      if (demoRef.current) {
        ScrollTrigger.create({
          trigger: demoRef.current,
          start: "top 80%",
          once: true,
          onEnter: () => playChainAnimation(),
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={mainRef}
      id="main-content"
      className="relative min-h-screen bg-[#050505]"
    >
      <Navigation />

      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />

      {/* Accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 5%, rgba(64,224,255,0.04), transparent), radial-gradient(ellipse 60% 30% at 20% 60%, rgba(120,75,255,0.025), transparent)",
        }}
        aria-hidden="true"
      />

      <article className="relative max-w-6xl mx-auto px-6 sm:px-8 md:px-12 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 md:pb-36">
        {/* Back Navigation */}
        <Link
          href="/#solutions"
          className="inline-flex items-center gap-2 text-sm font-mono text-cyber-gray-400 hover:text-white transition-colors duration-300 mb-10 sm:mb-14 tracking-wide"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>

        {/* ═══════════════════════════════════════════ */}
        {/* 1 ─ HERO: 50/50 copy + terminal visual    */}
        {/* ═══════════════════════════════════════════ */}
        <section className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24 sm:mb-32">
          <div data-hero-copy className="lg:col-span-5 space-y-6">
            <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em]">
              Automation
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight text-balance">
              The $37,000 spreadsheet.
            </h1>
            <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed">
              Two hours of manual work a day adds up to over $37,000 in four
              years — before you count the errors and the missed follow-ups.
              That&apos;s a lot to spend on a task code can handle in seconds.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
              <span className="text-xs font-mono text-cyber-gray-500">
                Build once · Runs forever · Zero errors
              </span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-cyber-accent text-[#050505] font-semibold text-sm rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)]"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Terminal visual */}
          <div data-hero-visual className="lg:col-span-7">
            <div
              className="rounded-xl border border-white/[0.08] bg-[#111318] overflow-hidden"
              style={{
                boxShadow:
                  "0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
              }}
            >
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-[#0D0F13]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/70" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/[0.04] text-[11px] text-cyber-gray-500 font-mono">
                    automation-workflow.log
                  </div>
                </div>
              </div>
              <div className="p-5 font-mono text-xs sm:text-sm space-y-1.5 min-h-[280px]">
                {terminalLines.map((line, i) => (
                  <div key={i} className={`${line.color} leading-relaxed`}>
                    {line.text}
                  </div>
                ))}
                <div className="pt-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                  <span className="text-cyber-gray-500">
                    Listening for new events...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* 2 ─ REAL EXAMPLES: tabs + demo                  */}
        {/* ═══════════════════════════════════════════════ */}
        <section data-fade className="mb-24 sm:mb-32">
          <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
            Real Examples
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
            What automation actually looks like.
          </h2>
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-12 sm:mb-14">
            Click any example to see the flow in action.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 lg:items-center">
            {/* Left: scenario tabs */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {scenarios.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === activeScenario;
                return (
                  <button
                    key={s.title}
                    onClick={() => setActiveScenario(i)}
                    className={`group flex items-center gap-3 px-4 py-3.5 rounded-lg text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal flex-shrink-0 lg:flex-shrink ${
                      isActive
                        ? "bg-white/[0.05] border border-cyber-accent/20"
                        : "bg-transparent border border-transparent hover:bg-white/[0.03] hover:border-white/[0.06]"
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isActive
                          ? "bg-cyber-accent/10 border border-cyber-accent/30"
                          : "bg-white/[0.03] border border-white/[0.06] group-hover:border-white/[0.1]"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 transition-colors duration-300 ${
                          isActive
                            ? "text-cyber-accent"
                            : "text-cyber-gray-400 group-hover:text-cyber-gray-300"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-cyber-gray-400 group-hover:text-cyber-gray-300"
                      }`}
                    >
                      {s.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: workflow panel */}
            <div ref={demoRef} className="lg:col-span-8">
              {(() => {
                const scenario = scenarios[activeScenario];
                const Icon = scenario.icon;
                return (
                  <div
                    data-panel
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
                  >
                    {/* Panel header */}
                    <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.01]">
                      <div className="w-6 h-6 rounded-md bg-cyber-accent/10 flex items-center justify-center">
                        <Icon
                          className="w-3.5 h-3.5 text-cyber-accent"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-sm font-medium text-white">
                        {scenario.title}
                      </span>
                      <div className="ml-auto flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyber-accent animate-pulse" />
                        <span className="text-[10px] font-mono text-cyber-accent/60 uppercase tracking-wider">
                          Live
                        </span>
                      </div>
                    </div>

                    {/* Step flow */}
                    <div className="px-5 sm:px-6 py-4 sm:py-5">
                      <div className="space-y-2">
                        {scenario.steps.map((step, i) => (
                          <div
                            key={`${activeScenario}-${i}`}
                            data-step
                            className="flex items-center gap-3.5 px-3.5 py-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors"
                          >
                            <div className="flex-shrink-0 w-7 h-7 rounded-full border border-cyber-accent/25 bg-cyber-accent/[0.07] flex items-center justify-center">
                              <span className="text-[11px] font-semibold text-cyber-accent font-mono">
                                {i + 1}
                              </span>
                            </div>
                            <span className="text-[13px] sm:text-sm text-cyber-gray-200 font-medium">
                              {step}
                            </span>
                            <div
                              data-check
                              className="ml-auto flex items-center gap-1.5"
                            >
                              <CheckCircle2
                                className="w-3.5 h-3.5 text-cyber-accent/50"
                                aria-hidden="true"
                              />
                              <span className="text-[10px] font-mono text-cyber-accent/60 uppercase tracking-wider hidden sm:inline">
                                Done
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Description */}
                      <p
                        data-chain-desc
                        className="text-sm text-cyber-gray-400 leading-relaxed mt-5 pt-4 border-t border-white/[0.04]"
                      >
                        {scenario.description}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* 3 ─ ALWAYS ON: 24/7 reliability       */}
        {/* ═══════════════════════════════════════ */}
        <section data-fade className="mb-24 sm:mb-32">
          <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
            Always On
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
            It works while you sleep. And doesn&apos;t call in sick.
          </h2>
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
            This isn&apos;t an argument against your employees — it&apos;s about
            freeing them up to do work that actually requires a human. The
            repetitive stuff? That&apos;s where code shines.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                icon: Clock,
                title: "24/7/365",
                description:
                  "Runs at 2am on Christmas just as reliably as 10am on a Tuesday. No overtime, no holidays.",
              },
              {
                icon: Zap,
                title: "Milliseconds, not minutes",
                description:
                  "A task that takes a person 15 minutes takes code about 200 milliseconds. That gap adds up fast.",
              },
              {
                icon: CheckCircle2,
                title: "Zero human error",
                description:
                  "No fat-fingered numbers. No skipped rows. No 'I forgot to send that email.' Every time, exactly right.",
              },
            ].map((point) => (
              <div
                key={point.title}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8"
                style={{
                  boxShadow:
                    "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
                }}
              >
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] w-fit mb-5">
                  <point.icon className="w-4 h-4 text-cyber-accent" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-cyber-gray-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════ */}
        {/* 4 ─ INTEGRATION: before/after 50/50       */}
        {/* ═══════════════════════════════════════════ */}
        <section data-fade className="mb-24 sm:mb-32">
          <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
            Integration
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
            You already pay for the tools. They just don&apos;t talk to each
            other.
          </h2>
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
            Most businesses already use Calendly, QuickBooks, Google Sheets,
            Mailchimp, or a dozen other apps. The problem isn&apos;t the tools.
            It&apos;s the gap between them. That gap is where your time and
            money disappear — and it&apos;s exactly what I fill.
          </p>

          <div
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8"
            style={{
              boxShadow:
                "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Before */}
              <div>
                <p className="text-[10px] font-mono text-cyber-gray-500 uppercase tracking-wider mb-4">
                  Without integration
                </p>
                <div className="space-y-3">
                  {[
                    "Customer books on Calendly",
                    "You manually copy their info to Google Sheets",
                    "You write a confirmation email by hand",
                    "You set a phone reminder to follow up",
                    "You forget the follow-up 40% of the time",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-xs font-mono text-cyber-gray-500 mt-0.5 w-4 flex-shrink-0">
                        {i + 1}.
                      </span>
                      <p className="text-sm text-cyber-gray-400 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* After */}
              <div>
                <p className="text-[10px] font-mono text-cyber-accent uppercase tracking-wider mb-4">
                  With integration
                </p>
                <div className="space-y-3">
                  {[
                    "Customer books on Calendly",
                    "Everything else happens automatically",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-xs font-mono text-cyber-accent mt-0.5 w-4 flex-shrink-0">
                        {i + 1}.
                      </span>
                      <p className="text-sm text-cyber-gray-300 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <Settings
                      className="w-4 h-4 text-cyber-accent"
                      aria-hidden="true"
                    />
                    <p className="text-sm text-cyber-gray-300">
                      Sheets updated, confirmation sent, reminder scheduled,
                      follow-up queued, review request timed — all in under 3
                      seconds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* 5 ─ THE MATH: cost comparison          */}
        {/* ═══════════════════════════════════════ */}
        <section data-fade className="mb-24 sm:mb-32">
          <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
            The Math
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
            Build once. Runs forever.
          </h2>
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
            You pay once for a custom automation. It runs for years. Compare
            that to paying someone $18/hr to do the same task every single day —
            indefinitely.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {/* Manual */}
            <div
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8"
              style={{
                boxShadow:
                  "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <p className="font-mono text-xs text-cyber-gray-500 uppercase tracking-wider">
                  Manual process
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl sm:text-4xl font-semibold text-white font-mono">
                    $9,360
                  </p>
                  <p className="text-sm text-cyber-gray-500 font-mono">
                    per year (2 hrs/day × $18/hr)
                  </p>
                </div>
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-cyber-gray-400">Year 1</span>
                    <span className="text-white font-mono">$9,360</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-cyber-gray-400">Year 2</span>
                    <span className="text-white font-mono">$18,720</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-cyber-gray-400">Year 3</span>
                    <span className="text-white font-mono">$28,080</span>
                  </div>
                  <div className="flex justify-between text-sm border-t border-white/[0.06] pt-2">
                    <span className="text-cyber-gray-400">Year 4</span>
                    <span className="text-[#FF5F57] font-mono font-semibold">
                      $37,440
                    </span>
                  </div>
                </div>
                <p className="text-xs text-cyber-gray-500 leading-relaxed pt-1">
                  Plus errors. Plus missed follow-ups. Plus the opportunity cost
                  of what that person could be doing instead.
                </p>
              </div>
            </div>

            {/* Automated */}
            <div
              className="rounded-xl border border-cyber-accent/20 bg-white/[0.02] p-6 sm:p-8 relative overflow-hidden"
              style={{
                boxShadow:
                  "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(64,224,255,0.04)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(64,224,255,0.03), transparent)",
                }}
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex items-center gap-2 mb-5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#4ADE80]" />
                  <p className="font-mono text-xs text-cyber-accent uppercase tracking-wider">
                    Automated
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-3xl sm:text-4xl font-semibold text-white font-mono">
                      One-time
                    </p>
                    <p className="text-sm text-cyber-accent font-mono">
                      build cost, then $0/hr forever
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-cyber-gray-400">Year 1</span>
                      <span className="text-white font-mono">Build cost</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-cyber-gray-400">Year 2</span>
                      <span className="text-[#4ADE80] font-mono">$0</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-cyber-gray-400">Year 3</span>
                      <span className="text-[#4ADE80] font-mono">$0</span>
                    </div>
                    <div className="flex justify-between text-sm border-t border-white/[0.06] pt-2">
                      <span className="text-cyber-gray-400">Year 4</span>
                      <span className="text-[#4ADE80] font-mono font-semibold">
                        $0
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-cyber-gray-300 leading-relaxed pt-1">
                    Zero errors. Zero sick days. Runs 24/7 at machine speed. And
                    your employee gets their 2 hours back every day to do
                    meaningful work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════ */}
        {/* 6 ─ HOW IT WORKS: process timeline      */}
        {/* ════════════════════════════════════════ */}
        <section data-fade className="mb-24 sm:mb-32">
          <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
            The Process
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
            How we get from &quot;this is eating my time&quot; to &quot;it just
            runs.&quot;
          </h2>
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
            You don&apos;t need to know how automation works. You just need to
            tell me what&apos;s slowing you down.
          </p>

          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-6">
            {[
              {
                step: "01",
                icon: MessageSquare,
                title: "Audit",
                description:
                  "We walk through your daily operations. I identify every task that\u2019s repetitive, manual, or error-prone.",
              },
              {
                step: "02",
                icon: FileText,
                title: "Blueprint",
                description:
                  "I map out what gets automated, which tools connect, and what the workflow looks like.",
              },
              {
                step: "03",
                icon: Settings,
                title: "Build & Connect",
                description:
                  "I build the automations, connect your existing tools, and test every edge case before it goes live.",
              },
              {
                step: "04",
                icon: Zap,
                title: "Go Live & Monitor",
                description:
                  "We flip the switch. I monitor everything for the first week and fine-tune based on real data.",
              },
            ].map((item) => (
              <div
                key={item.step}
                data-step
                className="relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8"
                style={{
                  boxShadow:
                    "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cyber-accent/10 border border-cyber-accent/20">
                    <span className="text-xs font-mono text-cyber-accent font-semibold">
                      {item.step}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                </div>
                <p className="text-sm text-cyber-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════ */}
        {/* 7 ─ FAQ             */}
        {/* ════════════════════ */}
        <section data-fade className="mb-24 sm:mb-32">
          <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
            Common Questions
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-10 max-w-2xl">
            Things you might be wondering.
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-colors duration-200 hover:border-white/[0.10]"
                style={{
                  boxShadow:
                    "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left"
                  aria-expanded={openFaq === i}
                  aria-controls={`auto-faq-panel-${i}`}
                  id={`auto-faq-btn-${i}`}
                >
                  <span className="text-sm font-medium text-white pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyber-gray-500 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`auto-faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`auto-faq-btn-${i}`}
                  hidden={openFaq !== i}
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-sm text-cyber-gray-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═════════════════════════ */}
        {/* 8 ─ CLOSER + CTA        */}
        {/* ═════════════════════════ */}
        {/* ─── Closer ─── */}
        <section data-fade className="mb-20 sm:mb-28">
          <div className="border-t border-white/[0.06] pt-10 max-w-xl">
            <p className="text-lg sm:text-xl text-cyber-gray-300 leading-relaxed">
              If you&apos;re doing the same task twice, you&apos;re paying
              twice.{" "}
              <span className="text-white font-medium">
                Let&apos;s find the bottleneck and fix it.
              </span>
            </p>
            <Link
              href="/services/ongoing-support"
              className="inline-flex items-center gap-2 text-sm text-cyber-accent/70 hover:text-cyber-accent transition-colors duration-300 mt-6"
            >
              Already automated? Keep your site evolving with ongoing support
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section data-fade>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
            <div className="max-w-xl">
              <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
                Get Started
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight tracking-tight text-balance mb-4">
                What&apos;s eating your time?
              </h2>
              <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed">
                Tell me what&apos;s slowing you down and I&apos;ll map out
                exactly what can be automated — and what it would save you.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-cyber-accent text-black font-semibold text-base rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(64,224,255,0.4)] w-full sm:w-auto"
              >
                <span>Start a Conversation</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
