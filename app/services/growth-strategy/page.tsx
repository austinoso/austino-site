"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronDown, Search } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ── FAQ data ── */
const faqs = [
  {
    q: "What kind of content do you create?",
    a: "Service deep-dives, FAQ pages, educational content, and location-specific landing pages \u2014 all written to match how your customers actually search. I handle the research and drafting. I just need 60 seconds of your expertise via a voice memo or a quick call to add the human touch Google rewards.",
  },
  {
    q: "How is this different from SEO?",
    a: "Traditional SEO is often a checklist \u2014 meta tags, keywords, backlinks. This is about becoming the authority in your space. I\u2019m building actual pages with real value that both Google and your customers reward. The SEO happens as a byproduct of doing useful work.",
  },
  {
    q: "What if I don\u2019t need changes every month?",
    a: "That\u2019s fine \u2014 this isn\u2019t about making changes for the sake of it. Some months I\u2019m building a new service page. Other months the data says everything\u2019s performing well, so I\u2019m monitoring and planning the next move. You\u2019re paying for a strategist who\u2019s always watching, not someone who\u2019s always tinkering.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes \u2014 no long-term contracts. That said, this kind of growth isn\u2019t overnight. Google takes time to index new pages and build trust in your site. Most clients start seeing real movement by month two or three, and it compounds from there. Every page I publish keeps working long after it goes live.",
  },
  {
    q: "Do I need this if I just launched a new site?",
    a: "Especially then. The first few months after launch are when your ranking momentum is building fastest. That\u2019s the most impactful time to have someone reading the data, fixing what\u2019s underperforming, and publishing the pages that establish your authority early.",
  },
];

export default function GrowthStrategyPage() {
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
      className="relative min-h-screen bg-cyber-dark"
    >
      <Navigation />

      <div className="page-frame">
        {/* ── Hero ── */}
        <div
          className="relative border-b border-white/[0.06] overflow-hidden"
          style={{
            backgroundImage: [
              "radial-gradient(ellipse 80% 70% at 85% 10%, rgba(64,224,255,0.12), rgba(52,211,153,0.08) 40%, rgba(167,139,250,0.05) 70%, transparent 100%)",
              "radial-gradient(ellipse 60% 55% at 10% 90%, rgba(64,224,255,0.06), rgba(52,211,153,0.03) 50%, transparent 80%)",
            ].join(", "),
          }}
        >
          <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <Link
              href="/#solutions"
              className="inline-flex items-center gap-2 text-sm font-mono text-cyber-gray-400 hover:text-white transition-colors duration-300 mb-10 sm:mb-14 tracking-wide"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back to Home</span>
            </Link>
            <section className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div data-hero-copy className="lg:col-span-6 space-y-6">
                <p className="section-label">Growth Strategy</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white leading-tight tracking-tight">
                  Launched is just the starting line.
                </h1>
                <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed text-pretty">
                  A beautiful website is just the starting line. Without someone
                  reading the data, improving what&apos;s underperforming, and
                  building new content that ranks — your competitors will pass
                  you. I stay on as your web strategist, turning your site into
                  a growth engine.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-cyber-accent text-[#060608] font-semibold text-sm rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)]"
                >
                  Get a Free Consultation
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

              {/* Dashboard visual */}
              <div data-hero-visual className="lg:col-span-6">
                <div className="rounded-lg border border-white/[0.06] bg-[#0A0A0E] overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-[#0D0F13]">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/70" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/[0.04] text-[11px] text-cyber-gray-500 font-mono">
                        growth-dashboard
                      </div>
                    </div>
                  </div>
                  <div className="p-5 space-y-4">
                    {/* Metric cards */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        {
                          label: "Organic Traffic",
                          value: "2,847",
                          change: "+34%",
                        },
                        { label: "Bounce Rate", value: "31%", change: "−12%" },
                        {
                          label: "Keywords Top 10",
                          value: "47",
                          change: "+18 new",
                        },
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
                        Recent Actions
                      </p>
                      <div className="space-y-2.5">
                        {[
                          {
                            action: "Published deep-dive service page",
                            result: "+340 organic visits",
                          },
                          {
                            action: "Reworked booking page (high bounce)",
                            result: "+22% completion",
                          },
                          {
                            action: "Added FAQ schema markup",
                            result: "Rich results enabled",
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
                        99.9% uptime · 47 keywords ranking in top 10
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ── The Reality ── */}
        <div className="border-b border-white/[0.06]">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <section data-fade>
              <p className="section-label mb-4">The Reality</p>
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                <div className="lg:col-span-7">
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-4">
                    Most businesses in your area aren&apos;t doing this.
                    That&apos;s your opening.
                  </h2>
                  <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed mb-8 text-pretty">
                    The vast majority of local businesses launch a site and
                    never touch it again. No new content, no data review, no
                    strategy. That means the bar is low — and the first business
                    that starts building real search authority is the one Google
                    rewards.
                  </p>

                  <div className="space-y-5">
                    {[
                      {
                        title: "Rankings don't hold themselves",
                        body: "Google rewards sites that consistently publish relevant content. A static site slowly drops as competitors build authority around the same keywords you're trying to win.",
                      },
                      {
                        title: "Bounce rate is a silent killer",
                        body: "If visitors land on your page and leave without booking, something's wrong — the layout, the copy, the load time. Without someone reading the data, you'd never know.",
                      },
                      {
                        title: "Customers search in ways you don't expect",
                        body: `People Google things like \"best personal trainer for beginners near me.\" If you don't have a page answering that specific question, someone else does — and they get the click.`,
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3.5"
                      >
                        <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-cyber-accent/50 flex-shrink-0" />
                        <div>
                          <h3 className="text-sm font-semibold text-white mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-cyber-gray-400 leading-relaxed text-pretty">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Search results mockup */}
                <div
                  className="lg:col-span-5 hidden lg:block"
                  aria-hidden="true"
                >
                  <div className="rounded-lg border border-white/[0.08] bg-[#0A0A0E] overflow-hidden">
                    <div className="px-4 py-3 border-b border-white/[0.08] bg-[#0D0F13]">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.06]">
                        <Search className="w-3 h-3 text-cyber-gray-400" />
                        <span className="text-[11px] text-cyber-gray-300 font-mono">
                          best personal trainer near me
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      {/* Competitor results */}
                      <div className="flex items-start gap-3 py-3 border-b border-white/[0.06]">
                        <span className="text-[10px] font-mono text-cyber-accent w-4 pt-1 flex-shrink-0">
                          1
                        </span>
                        <div className="min-w-0">
                          <p className="text-[11px] text-[#8AB4F8] mb-0.5 truncate">
                            elitefit.com/personal-training
                          </p>
                          <p className="text-xs text-white/90 leading-snug mb-0.5">
                            Personal Training — Free Consultation
                          </p>
                          <p className="text-[10px] text-cyber-gray-400">
                            Updated weekly · 14 pages · Schema markup
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 py-3 border-b border-white/[0.06]">
                        <span className="text-[10px] font-mono text-cyber-gray-500 w-4 pt-1 flex-shrink-0">
                          2
                        </span>
                        <div className="min-w-0">
                          <p className="text-[11px] text-[#8AB4F8] mb-0.5 truncate">
                            ironworksgym.com/trainers
                          </p>
                          <p className="text-xs text-white/90 leading-snug mb-0.5">
                            Certified Personal Trainers — All Levels
                          </p>
                          <p className="text-[10px] text-cyber-gray-400">
                            Updated monthly · 10 service pages
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 py-3 border-b border-white/[0.06]">
                        <span className="text-[10px] font-mono text-cyber-gray-500 w-4 pt-1 flex-shrink-0">
                          3
                        </span>
                        <div className="min-w-0">
                          <p className="text-[11px] text-[#8AB4F8] mb-0.5 truncate">
                            peakperformance.co/coaching
                          </p>
                          <p className="text-xs text-white/90 leading-snug mb-0.5">
                            1-on-1 Coaching — Downtown Location
                          </p>
                          <p className="text-[10px] text-cyber-gray-400">
                            Blog + FAQ pages · Updated bi-weekly
                          </p>
                        </div>
                      </div>
                      {/* Gap */}
                      <div className="py-1.5 text-center">
                        <span className="text-[10px] text-cyber-gray-500 font-mono">
                          ···
                        </span>
                      </div>
                      {/* Your business — buried */}
                      <div className="flex items-start gap-3 py-3 rounded-md bg-white/[0.03] -mx-2 px-2">
                        <span className="text-[10px] font-mono text-cyber-gray-500 w-4 pt-1 flex-shrink-0">
                          5
                        </span>
                        <div className="min-w-0">
                          <p className="text-[11px] text-cyber-gray-500 mb-0.5 truncate">
                            yourbusiness.com
                          </p>
                          <p className="text-xs text-white/50 leading-snug mb-0.5">
                            Your Business — Home
                          </p>
                          <p className="text-[10px] text-cyber-gray-500">
                            Last updated 14mo ago · 4 pages
                          </p>
                        </div>
                      </div>
                      <div className="pt-3 mt-1 border-t border-white/[0.06]">
                        <p className="text-[10px] text-cyber-gray-500 font-mono text-center">
                          Page 1 of ~3,100 results
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div
          className="relative border-b border-white/[0.06] overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 55% 60% at 55% 15%, rgba(64,224,255,0.04), rgba(167,139,250,0.02) 50%, transparent 80%)",
          }}
        >
          <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <section data-fade>
              <p className="section-label mb-4">The Strategy</p>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-4 max-w-xl">
                Data tells us what to fix. Content builds your authority.
              </h2>
              <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-xl mb-14 text-pretty">
                Every month I&apos;m doing two things: using real data to
                improve what&apos;s already there, and building new content that
                helps you rank for more of the searches your customers are
                making.
              </p>

              <div className="grid md:grid-cols-3 border-t border-l border-white/[0.06]">
                {[
                  {
                    step: "01",
                    title: "Read the Data",
                    body: "I monitor your traffic, bounce rates, conversions, and keyword rankings. When a page isn't performing, I dig into why — and I fix it.",
                  },
                  {
                    step: "02",
                    title: "Improve What's Underperforming",
                    body: "High bounce rate on your booking page? I test a new layout. Visitors dropping off before the CTA? I move it above the fold. Every change is backed by data, not guesswork.",
                  },
                  {
                    step: "03",
                    title: "Build Search Authority",
                    body: "I create new pages — service deep-dives, FAQ content, location-specific landing pages — designed to capture the long-tail searches your customers are already making.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="relative border-b border-r border-white/[0.06] p-6 sm:p-8 group"
                  >
                    {/* Accent top stripe */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyber-accent/40 via-cyber-accent/10 to-transparent" />
                    <span className="block text-6xl sm:text-7xl font-bold font-display text-cyber-accent/[0.15] leading-none select-none mb-6">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-cyber-gray-400 leading-relaxed text-pretty">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* ── Your Dashboard ── */}
        <div
          className="relative border-b border-white/[0.06] overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 65% 60% at 10% 35%, rgba(74,222,128,0.06), rgba(64,224,255,0.03) 50%, transparent 80%)",
          }}
        >
          <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <section data-fade>
              <p className="section-label mb-4">Your Dashboard</p>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
                Numbers that mean something to your business.
              </h2>
              <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10 text-pretty">
                Every metric I track maps directly to a business outcome you
                care about. You get a monthly summary in plain English — what
                changed, what the data shows, and what I&apos;m planning next.
              </p>

              {/* Bento grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-white/[0.06]">
                {/* Growth chart — spans 2 cols on lg */}
                <div
                  className="col-span-2 border-b border-r border-white/[0.06] p-6 sm:p-8"
                  aria-hidden="true"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-xs font-mono text-cyber-gray-500 uppercase tracking-wider mb-1">
                        Organic Traffic
                      </p>
                      <p className="text-2xl sm:text-3xl font-semibold text-white font-mono">
                        2,847
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-mono text-[#4ADE80] mb-1">
                        +180% YoY
                      </p>
                      <p className="text-[10px] font-mono text-cyber-gray-500">
                        ↑ 34% from last month
                      </p>
                    </div>
                  </div>
                  <svg
                    viewBox="0 0 400 100"
                    fill="none"
                    className="w-full h-28 sm:h-32"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="bentoGrowthFill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="rgb(74,222,128)"
                          stopOpacity="0.12"
                        />
                        <stop
                          offset="100%"
                          stopColor="rgb(74,222,128)"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    {[25, 50, 75].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="400"
                        y2={y}
                        stroke="rgba(255,255,255,0.03)"
                        strokeWidth="0.5"
                      />
                    ))}
                    <path
                      d="M0 88 C30 85 60 80 90 72 C120 64 150 54 180 44 C210 35 240 26 270 18 C300 12 330 7 360 4 L400 2"
                      stroke="rgb(74,222,128)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M0 88 C30 85 60 80 90 72 C120 64 150 54 180 44 C210 35 240 26 270 18 C300 12 330 7 360 4 L400 2 L400 100 L0 100 Z"
                      fill="url(#bentoGrowthFill)"
                    />
                    <circle
                      cx="0"
                      cy="88"
                      r="3"
                      fill="#0A0A0E"
                      stroke="rgb(74,222,128)"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="90"
                      cy="72"
                      r="3"
                      fill="#0A0A0E"
                      stroke="rgb(74,222,128)"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="180"
                      cy="44"
                      r="3"
                      fill="#0A0A0E"
                      stroke="rgb(74,222,128)"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="300"
                      cy="12"
                      r="3"
                      fill="#0A0A0E"
                      stroke="rgb(74,222,128)"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="400"
                      cy="2"
                      r="3"
                      fill="#0A0A0E"
                      stroke="rgb(74,222,128)"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <div className="flex justify-between mt-3">
                    <span className="text-[10px] font-mono text-cyber-gray-600">
                      Jan
                    </span>
                    <span className="text-[10px] font-mono text-cyber-gray-600">
                      Apr
                    </span>
                    <span className="text-[10px] font-mono text-cyber-gray-600">
                      Jul
                    </span>
                    <span className="text-[10px] font-mono text-cyber-gray-600">
                      Oct
                    </span>
                    <span className="text-[10px] font-mono text-cyber-gray-600">
                      Now
                    </span>
                  </div>
                </div>

                {/* Keywords */}
                <div className="col-span-2 lg:col-span-1 border-b border-r border-white/[0.06] p-6 sm:p-8 flex flex-col">
                  <p className="text-xs font-mono text-cyber-gray-500 uppercase tracking-wider mb-2">
                    Keywords in Top 10
                  </p>
                  <p className="text-3xl sm:text-4xl font-semibold text-white font-mono mb-1">
                    47
                  </p>
                  <p className="text-xs font-mono text-[#4ADE80] mb-4">
                    +18 new this quarter
                  </p>
                  <p className="text-sm text-cyber-gray-400 leading-relaxed mt-auto text-pretty">
                    Every keyword is a door. Each new service page or piece of
                    content I publish opens another one.
                  </p>
                </div>

                {/* Google Ranking */}
                <div className="col-span-2 lg:col-span-1 border-b border-r border-white/[0.06] p-6 sm:p-8 flex flex-col">
                  <p className="text-xs font-mono text-cyber-gray-500 uppercase tracking-wider mb-2">
                    Google Ranking
                  </p>
                  <p className="text-3xl sm:text-4xl font-semibold text-white font-mono mb-1">
                    #1
                  </p>
                  <p className="text-xs font-mono text-[#4ADE80] mb-4">
                    Up from #8 at launch
                  </p>
                  <p className="text-sm text-cyber-gray-400 leading-relaxed mt-auto text-pretty">
                    First organic result for your core service in your area. The
                    compounding result of consistent content building.
                  </p>
                </div>

                {/* Bounce rate — 2 cols on lg */}
                <div className="col-span-2 border-b border-r border-white/[0.06] p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <p className="text-xs font-mono text-cyber-gray-500 uppercase tracking-wider mb-2">
                        Bounce Rate
                      </p>
                      <div className="flex items-baseline gap-3 mb-1">
                        <p className="text-3xl sm:text-4xl font-semibold text-white font-mono">
                          31%
                        </p>
                        <p className="text-xs font-mono text-[#4ADE80]">
                          ↓ 12% since launch
                        </p>
                      </div>
                      <p className="text-sm text-cyber-gray-400 leading-relaxed max-w-md mt-3 text-pretty">
                        This was 43% at launch. I reworked the copy and layout
                        on three underperforming pages — now visitors stay and
                        act.
                      </p>
                    </div>
                    {/* Mini bar chart */}
                    <div
                      className="flex-shrink-0 flex items-end gap-1.5 h-16 sm:h-20 pt-2"
                      aria-hidden="true"
                    >
                      {[
                        { h: "100%", label: "43%", dim: true },
                        { h: "81%", label: "", dim: true },
                        { h: "67%", label: "", dim: true },
                        { h: "56%", label: "", dim: false },
                        { h: "48%", label: "", dim: false },
                        { h: "40%", label: "", dim: false },
                        { h: "35%", label: "", dim: false },
                        { h: "31%", label: "31%", dim: false },
                      ].map((bar, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center gap-1"
                          style={{ height: "100%" }}
                        >
                          <div
                            className="w-3 sm:w-4 rounded-sm mt-auto"
                            style={{
                              height: bar.h,
                              backgroundColor: bar.dim
                                ? "rgba(255,255,255,0.06)"
                                : "rgba(74,222,128,0.3)",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Conversion rate — 2 cols on lg */}
                <div className="col-span-2 border-b border-r border-white/[0.06] p-6 sm:p-8 flex flex-col">
                  <p className="text-xs font-mono text-cyber-gray-500 uppercase tracking-wider mb-2">
                    Visitor → Lead Conversion
                  </p>
                  <div className="flex items-baseline gap-3 mb-1">
                    <p className="text-3xl sm:text-4xl font-semibold text-white font-mono">
                      4.8%
                    </p>
                    <p className="text-xs font-mono text-[#4ADE80]">
                      ↑ 2.1x from launch
                    </p>
                  </div>
                  <p className="text-sm text-cyber-gray-400 leading-relaxed mt-2 max-w-lg text-pretty">
                    Industry average sits around 2.3%. Better copy, faster
                    pages, and clearer calls to action turned more of your
                    existing traffic into actual inquiries.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ── Long-Term ── */}
        <div
          className="relative border-b border-white/[0.06] overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 55% at 90% 85%, rgba(64,224,255,0.04), rgba(167,139,250,0.03) 50%, transparent 80%)",
          }}
        >
          <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <section data-fade>
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
                {/* Left: heading + growth curve */}
                <div className="lg:col-span-5">
                  <p className="section-label mb-4">Long-Term</p>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-4">
                    A site that compounds every month.
                  </h2>
                  <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed text-pretty">
                    Every page I build keeps working after it&apos;s published.
                    Every fix I make stacks on the last. The longer we work
                    together, the harder your site works for you.
                  </p>

                  {/* Growth curve visual */}
                  <div className="mt-10 hidden lg:block" aria-hidden="true">
                    <div className="rounded-lg border border-white/[0.06] bg-[#0A0A0E] p-5">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono text-cyber-gray-500 uppercase tracking-wider">
                          Organic Traffic
                        </span>
                        <span className="text-[10px] font-mono text-[#4ADE80]">
                          +180% YoY
                        </span>
                      </div>
                      <svg
                        viewBox="0 0 200 80"
                        fill="none"
                        className="w-full h-24"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id="ltGrowthFill"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="rgb(64,224,255)"
                              stopOpacity="0.12"
                            />
                            <stop
                              offset="100%"
                              stopColor="rgb(64,224,255)"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                        {[20, 40, 60].map((y) => (
                          <line
                            key={y}
                            x1="0"
                            y1={y}
                            x2="200"
                            y2={y}
                            stroke="rgba(255,255,255,0.04)"
                            strokeWidth="0.5"
                          />
                        ))}
                        <path
                          d="M0 70 C20 68 40 62 60 55 C80 48 100 38 120 28 C140 20 160 12 180 6 L200 2"
                          stroke="rgb(64,224,255)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          fill="none"
                        />
                        <path
                          d="M0 70 C20 68 40 62 60 55 C80 48 100 38 120 28 C140 20 160 12 180 6 L200 2 L200 80 L0 80 Z"
                          fill="url(#ltGrowthFill)"
                        />
                        <circle
                          cx="0"
                          cy="70"
                          r="2.5"
                          fill="#0A0A0E"
                          stroke="rgb(64,224,255)"
                          strokeWidth="1"
                        />
                        <circle
                          cx="50"
                          cy="58"
                          r="2.5"
                          fill="#0A0A0E"
                          stroke="rgb(64,224,255)"
                          strokeWidth="1"
                        />
                        <circle
                          cx="120"
                          cy="28"
                          r="2.5"
                          fill="#0A0A0E"
                          stroke="rgb(64,224,255)"
                          strokeWidth="1"
                        />
                        <circle
                          cx="200"
                          cy="2"
                          r="2.5"
                          fill="#0A0A0E"
                          stroke="rgb(64,224,255)"
                          strokeWidth="1"
                        />
                      </svg>
                      <div className="flex justify-between mt-2">
                        <span className="text-[9px] font-mono text-cyber-gray-600">
                          Month 1
                        </span>
                        <span className="text-[9px] font-mono text-cyber-gray-600">
                          Month 3
                        </span>
                        <span className="text-[9px] font-mono text-cyber-gray-600">
                          Month 6
                        </span>
                        <span className="text-[9px] font-mono text-cyber-gray-600">
                          Month 12
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: vertical timeline */}
                <div className="lg:col-span-7">
                  <div className="relative pl-8 sm:pl-10">
                    {/* Timeline line */}
                    <div
                      className="absolute left-[15px] sm:left-[18px] top-2 bottom-2 w-px"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(64,224,255,0.3), rgba(64,224,255,0.08) 50%, rgba(167,139,250,0.12))",
                      }}
                    />

                    {[
                      {
                        month: "Month 1",
                        title: "Baseline & strategy",
                        description:
                          "Analytics go live. I audit your current rankings, identify pages with high bounce rates, and map out which keywords you should be targeting. We establish your baseline so every future improvement is measurable.",
                      },
                      {
                        month: "Month 3",
                        title: "Data-driven fixes",
                        description:
                          "Data shows your booking page has a 60% bounce rate. I redesign the flow, simplify the form, and completions jump 22%. Two new service deep-dive pages go live and start indexing.",
                      },
                      {
                        month: "Month 6",
                        title: "Authority building",
                        description:
                          "You\u2019re now ranking for 30+ keywords you weren\u2019t targeting before. New pages are pulling in organic traffic for specific searches your customers actually make — without paying for ads.",
                      },
                      {
                        month: "Month 12",
                        title: "Compounding results",
                        description:
                          "Your site is a genuine authority in your space. Traffic is up 180%, local rankings dominate, and your site generates leads on autopilot — while competitors still have a 5-page brochure.",
                      },
                    ].map((milestone, i) => (
                      <div
                        key={milestone.month}
                        className={`relative ${i < 3 ? "pb-10 sm:pb-12" : ""}`}
                      >
                        {/* Timeline node */}
                        <div className="absolute left-[-25px] sm:left-[-31px] top-1">
                          <div className="w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full bg-[#0A0A0E] border-2 border-cyber-accent/40 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyber-accent/60" />
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-mono text-cyber-accent font-semibold tracking-wider mb-2">
                            {milestone.month}
                          </p>
                          <h3 className="text-sm font-semibold text-white mb-1.5">
                            {milestone.title}
                          </h3>
                          <p className="text-sm text-cyber-gray-400 leading-relaxed max-w-lg text-pretty">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="border-b border-white/[0.06]">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <section data-fade>
              <p className="section-label mb-4">Common Questions</p>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-10 max-w-2xl">
                Things you might be wondering.
              </h2>

              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-colors duration-200 hover:border-white/[0.10]"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex items-center justify-between w-full px-6 py-5 text-left"
                      aria-expanded={openFaq === i}
                      aria-controls={`growth-faq-panel-${i}`}
                      id={`growth-faq-btn-${i}`}
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
                      id={`growth-faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`growth-faq-btn-${i}`}
                      hidden={openFaq !== i}
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === i
                          ? "max-h-60 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-6 pb-5 text-sm text-cyber-gray-400 leading-relaxed text-pretty">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* ── Final CTA ── */}
        <div className="border-b border-white/[0.06]">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <section data-fade>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
                <div className="max-w-xl">
                  <p className="section-label mb-4">Get Started</p>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-4">
                    Let&apos;s turn your site into a growth engine.
                  </h2>
                  <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed text-pretty">
                    Whether you just launched or your current site has been
                    sitting still, I&apos;d love to talk about what a growth
                    strategy looks like for your business.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-cyber-accent text-[#060608] font-semibold text-base rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)] w-full sm:w-auto"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
              <div className="border-t border-white/[0.06] mt-10 pt-6">
                <Link
                  href="/services/automation"
                  className="inline-flex items-center gap-2 text-sm text-cyber-accent/70 hover:text-cyber-accent transition-colors duration-300"
                >
                  Still handling tasks manually? See how automation can help
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
