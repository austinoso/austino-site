"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import FeatureCard from "@/components/ui/FeatureCard";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  TrendingUp,
  FileText,
  BarChart3,
  Target,
  Sparkles,
  Users,
  ChevronDown,
  Search,
  PenTool,
} from "lucide-react";

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
              Growth Strategy
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
              Launched is just the starting line.
            </h1>
            <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed">
              A beautiful website is just the starting line. Without someone
              reading the data, improving what&apos;s underperforming, and
              building new content that ranks — your competitors will pass you.
              I stay on as your web strategist, turning your site into a growth
              engine.
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

        {/* ═══════════════════════════════════════ */}
        {/* 2 ─ THE REALITY: what happens when you stop */}
        {/* ═══════════════════════════════════════ */}
        <section data-fade className="mb-24 sm:mb-32">
          <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
            The Reality
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
            Most businesses in your area aren&apos;t doing this. That&apos;s
            your opening.
          </h2>
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
            The vast majority of local businesses launch a site and never touch
            it again. No new content, no data review, no strategy. That means
            the bar is low — and the first business that starts building real
            search authority is the one Google rewards.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <FeatureCard
              icon={TrendingUp}
              title="Rankings don't hold themselves"
              body="Google rewards sites that consistently publish relevant content. A static site slowly drops as competitors build authority around the same keywords you're trying to win."
              layout="stacked"
            />
            <FeatureCard
              icon={BarChart3}
              title="Bounce rate is a silent killer"
              body="If visitors land on your page and leave without booking, something's wrong — the layout, the copy, the load time. Without someone reading the data, you'd never know."
              layout="stacked"
            />
            <FeatureCard
              icon={Search}
              title="Customers search in ways you don't expect"
              body={`People Google things like "deep tissue for tech neck near me." If you don't have a page answering that specific question, someone else does — and they get the click.`}
              layout="stacked"
            />
          </div>
        </section>

        {/* ═══════════════════════════════════════════ */}
        {/* 3 ─ THE STRATEGY: Data + Content + Authority */}
        {/* ═══════════════════════════════════════════ */}
        <section data-fade className="mb-24 sm:mb-32">
          <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
            The Strategy
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
            Data tells us what to fix. Content builds your authority.
          </h2>
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
            Every month I&apos;m doing two things: using real data to improve
            what&apos;s already there, and building new content that helps you
            rank for more of the searches your customers are making.
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
                  title: "Read the Data",
                  description:
                    "I monitor your traffic, bounce rates, conversions, and keyword rankings. When a page isn't performing, I dig into why — and I fix it.",
                },
                {
                  icon: Sparkles,
                  title: "Improve What's Underperforming",
                  description:
                    "High bounce rate on your booking page? I test a new layout. Visitors dropping off before the CTA? I move it above the fold. Every change is backed by data, not guesswork.",
                },
                {
                  icon: PenTool,
                  title: "Build Search Authority",
                  description:
                    "I create new pages — service deep-dives, FAQ content, location-specific landing pages — designed to capture the long-tail searches your customers are already making.",
                },
              ].map((step) => (
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
            Every metric I track maps directly to a business outcome you care
            about. You get a monthly summary in plain English — what changed,
            what the data shows, and what I&apos;m planning next.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {[
              {
                metric: "2,847",
                label: "Organic visitors this month",
                meaning:
                  "These people found you through Google — not ads, not social media. When this goes up, your visibility is compounding and your content strategy is working.",
                trend: "↑ 34% from last month",
                trendColor: "text-[#4ADE80]",
              },
              {
                metric: "47",
                label: "Keywords in top 10",
                meaning:
                  "Every keyword is a door. Each new service page or piece of content I publish opens another one. Last quarter you had 29. Now you have 47 — and growing.",
                trend: "+18 new this quarter",
                trendColor: "text-[#4ADE80]",
              },
              {
                metric: "31%",
                label: "Bounce rate",
                meaning:
                  "This was 43% at launch. When visitors leave right away, it tells us the page isn't matching their intent. I reworked the copy and layout on three underperforming pages — now visitors stay and act.",
                trend: "↓ 12% since launch",
                trendColor: "text-[#4ADE80]",
              },
              {
                metric: "#1",
                label: "Google ranking (local)",
                meaning:
                  "When someone in your area searches for your core service, you're the first organic result. This is the compounding result of consistent content building and on-page optimization.",
                trend: "Up from #8 at launch",
                trendColor: "text-[#4ADE80]",
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
            A site that compounds every month.
          </h2>
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
            Every page I build keeps working after it&apos;s published. Every
            fix I make stacks on the last. The longer we work together, the
            harder your site works for you.
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
                title: "Baseline & strategy",
                description:
                  "Analytics go live. I audit your current rankings, identify pages with high bounce rates, and map out which keywords you should be targeting. We establish your baseline so every future improvement is measurable.",
              },
              {
                month: "Month 3",
                icon: BarChart3,
                title: "Data-driven fixes",
                description:
                  "Data shows your booking page has a 60% bounce rate. I redesign the flow, simplify the form, and completions jump 22%. Two new service deep-dive pages go live and start indexing.",
              },
              {
                month: "Month 6",
                icon: FileText,
                title: "Authority building",
                description:
                  "You\u2019re now ranking for 30+ keywords you weren\u2019t targeting before. New pages are pulling in organic traffic for specific searches your customers actually make — without paying for ads.",
              },
              {
                month: "Month 12",
                icon: Users,
                title: "Compounding results",
                description:
                  "Your site is a genuine authority in your space. Traffic is up 180%, local rankings dominate, and your site generates leads on autopilot — while competitors still have a 5-page brochure.",
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
              You don&apos;t need someone who sets and forgets.{" "}
              <span className="text-white font-medium">
                You need a strategist who&apos;s reading the data, fixing
                what&apos;s not working, and building your site into the
                authority Google can&apos;t ignore.
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
                Let&apos;s turn your site into a growth engine.
              </h2>
              <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed">
                Whether you just launched or your current site has been sitting
                still, I&apos;d love to talk about what a growth strategy looks
                like for your business.
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
