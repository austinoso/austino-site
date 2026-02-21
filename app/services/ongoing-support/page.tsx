"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  TrendingUp,
  MessageSquare,
  Smartphone,
  BarChart3,
  Target,
  Sparkles,
  Users,
  ChevronDown,
  Shield,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ── FAQ data ── */
const faqs = [
  {
    q: "What if I don\u2019t need changes every month?",
    a: "That\u2019s fine \u2014 this isn\u2019t about making changes for the sake of it. Some months I\u2019m optimizing a conversion flow. Other months I\u2019m monitoring data and confirming everything\u2019s running strong. You\u2019re paying for someone who\u2019s always watching, not someone who\u2019s always changing.",
  },
  {
    q: "How is this different from a maintenance plan?",
    a: "Maintenance keeps things from breaking. This is about making things better. I\u2019m proactively reading your analytics, spotting opportunities, and implementing improvements \u2014 not just applying security patches.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no long-term contracts. If you\u2019re not seeing value, you can stop. That said, the compounding nature of this work means the longer we work together, the more your site does for you.",
  },
  {
    q: "What kind of reporting do I get?",
    a: "You get a clear monthly summary: what changed, what the data shows, and what I\u2019m planning next. No jargon, no fluff \u2014 just results tied to your business goals.",
  },
  {
    q: "Do I need this if I just launched a new site?",
    a: "Especially then. The first few months after launch are when your data is freshest and your ranking momentum is building. That\u2019s the most impactful time to have someone optimizing in real-time.",
  },
];

export default function OngoingSupportPage() {
  const mainRef = useRef<HTMLElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            "radial-gradient(ellipse 80% 40% at 50% 5%, rgba(64,224,255,0.04), transparent), radial-gradient(ellipse 60% 30% at 70% 60%, rgba(120,75,255,0.025), transparent)",
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
        {/* 1 ─ HERO: 50/50 copy + dashboard visual   */}
        {/* ═══════════════════════════════════════════ */}
        <section className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24 sm:mb-32">
          <div data-hero-copy className="lg:col-span-6 space-y-6">
            <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em]">
              Ongoing Partnership
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight text-balance">
              The web changed. Did your site?
            </h1>
            <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed">
              Your site won&apos;t break — I built it with clean, hand-coded
              architecture. But the web doesn&apos;t stand still. Customer
              expectations shift, competitors redesign, and what was
              cutting-edge last year becomes the baseline tomorrow.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-cyber-accent text-[#050505] font-semibold text-sm rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)]"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Dashboard visual */}
          <div data-hero-visual className="lg:col-span-6">
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
                    analytics-dashboard
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-4">
                {/* Metric cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Page Speed", value: "98", change: "+14" },
                    { label: "Bounce Rate", value: "31%", change: "−12%" },
                    { label: "Avg. Session", value: "3:42", change: "+45s" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-3"
                    >
                      <p className="text-[10px] text-cyber-gray-500 uppercase tracking-wider font-mono mb-1">
                        {m.label}
                      </p>
                      <p className="text-lg font-semibold text-white font-mono">
                        {m.value}
                      </p>
                      <p className="text-[10px] text-[#4ADE80] font-mono mt-0.5">
                        {m.change}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Recent actions log */}
                <div className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-4">
                  <p className="text-[10px] text-cyber-gray-500 uppercase tracking-wider font-mono mb-3">
                    Recent Optimizations
                  </p>
                  <div className="space-y-2.5">
                    {[
                      {
                        action: "CTA button relocated above fold",
                        result: "+12% click-through",
                        time: "3 days ago",
                      },
                      {
                        action: "Form fields simplified (8 → 4)",
                        result: "+22% completion",
                        time: "1 week ago",
                      },
                      {
                        action: "Schema markup expanded",
                        result: "Rich results enabled",
                        time: "2 weeks ago",
                      },
                    ].map((log) => (
                      <div
                        key={log.action}
                        className="flex items-center justify-between text-xs"
                      >
                        <span className="text-cyber-gray-300">
                          {log.action}
                        </span>
                        <span className="text-[#4ADE80] font-mono flex-shrink-0 ml-3">
                          {log.result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Uptime bar */}
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
                  <span className="text-[10px] text-cyber-gray-500 font-mono">
                    99.9% uptime · 0 outages this quarter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* 2 ─ THE LANDSCAPE: things change fast    */}
        {/* ═══════════════════════════════════════ */}
        <section data-fade className="mb-24 sm:mb-32">
          <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
            The Landscape
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
            Last year&apos;s best practice is this year&apos;s bare minimum.
          </h2>
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
            The web evolves fast. Having a developer who&apos;s already immersed
            in this means your site evolves with it — without you needing to
            keep up yourself.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                icon: Shield,
                title: "Accessibility is no longer optional",
                description:
                  "ADA lawsuits against websites are rising every year. Beyond legal risk, inaccessible sites lose customers who can't navigate them. It's not just the right thing \u2014 it's a business decision.",
              },
              {
                icon: Smartphone,
                title: "Mobile-first became mobile-only",
                description:
                  "Over 50% of local searches happen on phones. Google now indexes your mobile site first. If your mobile experience is an afterthought, your rankings reflect that.",
              },
              {
                icon: Target,
                title: "Google never stops changing",
                description:
                  "Google makes thousands of ranking changes every year. What got you to page 1 last year might not keep you there. Someone needs to be watching.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8"
                style={{
                  boxShadow:
                    "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
                }}
              >
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] w-fit mb-5">
                  <item.icon
                    className="w-4 h-4 text-cyber-accent"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-sm font-semibold text-white mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-cyber-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════ */}
        {/* 3 ─ PROACTIVE: Monitor → Analyze → Optimize */}
        {/* ═══════════════════════════════════════════ */}
        <section data-fade className="mb-24 sm:mb-32">
          <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
            Proactive Optimization
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
            I watch the numbers so you don&apos;t have to.
          </h2>
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
            I set up real monitoring on your site and gather actual data —
            traffic, conversions, bounce rates, user behavior. But I don&apos;t
            just send you a report. If the data tells me that a small tweak
            could improve your bookings, I make it happen. You never have to
            ask.
          </p>

          <div
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8"
            style={{
              boxShadow:
                "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: Eye,
                  title: "Monitor",
                  description:
                    "Uptime, speed, traffic, and user behavior tracked around the clock. If something changes, I know before you do.",
                },
                {
                  icon: BarChart3,
                  title: "Analyze",
                  description:
                    "I read the data in terms of your business goals. More visitors means nothing if they're not booking — I look deeper than surface metrics.",
                },
                {
                  icon: Sparkles,
                  title: "Optimize",
                  description:
                    "If moving a CTA button or rewording a headline could improve conversions, I test it and implement it. Proactive, not reactive.",
                },
              ].map((step, i) => (
                <div key={step.title} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                      <step.icon
                        className="w-4 h-4 text-cyber-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-cyber-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ */}
        {/* 4 ─ DASHBOARD: metrics that matter          */}
        {/* ═══════════════════════════════════════════ */}
        <section data-fade className="mb-24 sm:mb-32">
          <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
            Your Dashboard
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
            Numbers that mean something to your business.
          </h2>
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
            I don&apos;t just hand you a spreadsheet of analytics jargon. Every
            metric I track maps directly to a business outcome you care about.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {[
              {
                metric: "2,847",
                label: "Visitors this month",
                meaning:
                  "This many people walked through your digital front door. When this goes up, your potential customer pool is growing.",
                trend: "↑ 34% from last month",
                trendColor: "text-[#4ADE80]",
              },
              {
                metric: "4.8%",
                label: "Conversion rate",
                meaning:
                  "Out of every 100 visitors, about 5 take action — book, call, or fill out a form. I work to push this number higher every month.",
                trend: "↑ 1.2% higher than average",
                trendColor: "text-[#4ADE80]",
              },
              {
                metric: "#3",
                label: "Google ranking (local)",
                meaning:
                  "When someone in your area searches for your service, you're the third result they see. Higher = more clicks without paying for ads.",
                trend: "Up from #8 at launch",
                trendColor: "text-[#4ADE80]",
              },
              {
                metric: "99.9%",
                label: "Uptime",
                meaning:
                  "Your site has been online and reachable 99.9% of the time. Every minute of downtime is a potential customer who hits a dead end.",
                trend: "0 outages this quarter",
                trendColor: "text-cyber-gray-400",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8"
                style={{
                  boxShadow:
                    "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
                }}
              >
                <div className="flex items-baseline justify-between mb-1">
                  <p className="text-3xl font-semibold text-white font-mono">
                    {item.metric}
                  </p>
                  <p className={`text-xs font-mono ${item.trendColor}`}>
                    {item.trend}
                  </p>
                </div>
                <p className="text-xs text-cyber-gray-500 font-mono uppercase tracking-wider mb-4">
                  {item.label}
                </p>
                <p className="text-sm text-cyber-gray-400 leading-relaxed">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* 5 ─ GROWTH TIMELINE: compounding value   */}
        {/* ═══════════════════════════════════════ */}
        <section data-fade className="mb-24 sm:mb-32">
          <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
            Long-Term
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
            A site that gets smarter over time.
          </h2>
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
            This isn&apos;t a maintenance plan. It&apos;s a compounding
            investment. The longer we work together, the more your site does for
            you.
          </p>

          <div
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
            style={{
              boxShadow:
                "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
            }}
          >
            {[
              {
                month: "Month 1",
                icon: Eye,
                title: "Baseline & monitoring",
                description:
                  "Analytics and uptime monitoring go live. We establish your baseline numbers — traffic, conversions, rankings — so every future improvement is measurable.",
              },
              {
                month: "Month 3",
                icon: TrendingUp,
                title: "Data-driven improvements",
                description:
                  "Data shows visitors are dropping off your booking page. I redesign the flow, simplify the form, and conversions jump 18%. You didn't have to ask — I spotted it.",
              },
              {
                month: "Month 6",
                icon: Sparkles,
                title: "New capabilities",
                description:
                  "Google tightens its Core Web Vitals thresholds and your competitors start slipping. I\u2019ve already optimized your load times, added lazy loading for new content, and your performance score stays in the green.",
              },
              {
                month: "Month 12",
                icon: Users,
                title: "Scaling with your growth",
                description:
                  "Your site has kept pace with your growth every step of the way — new services added, a customer portal launched, and your Google ranking has climbed to #1 locally.",
              },
            ].map((milestone, i) => (
              <div
                key={milestone.month}
                className={`flex gap-5 sm:gap-8 p-6 sm:p-8 ${
                  i < 3 ? "border-b border-white/[0.06]" : ""
                }`}
              >
                <div className="flex-shrink-0 w-20 sm:w-24">
                  <p className="text-xs font-mono text-cyber-accent font-semibold tracking-wider">
                    {milestone.month}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <milestone.icon className="w-4 h-4 text-cyber-accent flex-shrink-0" />
                    <h3 className="text-sm font-semibold text-white">
                      {milestone.title}
                    </h3>
                  </div>
                  <p className="text-sm text-cyber-gray-400 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════ */}
        {/* 6 ─ FAQ             */}
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
                  aria-controls={`support-faq-panel-${i}`}
                  id={`support-faq-btn-${i}`}
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
                  id={`support-faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`support-faq-btn-${i}`}
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
        {/* 7 ─ CLOSER + CTA        */}
        {/* ═════════════════════════ */}
        {/* ─── Closer ─── */}
        <section data-fade className="mb-20 sm:mb-28">
          <div className="border-t border-white/[0.06] pt-10 max-w-xl">
            <p className="text-lg sm:text-xl text-cyber-gray-300 leading-relaxed">
              You don&apos;t need a developer who shows up at launch and
              disappears.{" "}
              <span className="text-white font-medium">
                You need one who&apos;s watching, adapting, and building — long
                after day one.
              </span>
            </p>
            <Link
              href="/services/automation"
              className="inline-flex items-center gap-2 text-sm text-cyber-accent/70 hover:text-cyber-accent transition-colors duration-300 mt-6"
            >
              Still handling tasks manually? See how automation can help
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
              <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4">
                Let&apos;s keep your site ahead of the curve.
              </h2>
              <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed">
                Whether you&apos;re launching something new or your current site
                needs a partner behind the scenes, I&apos;d love to chat about
                what ongoing support looks like for your business.
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
