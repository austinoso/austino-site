import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageScrollAnimator from "@/components/ui/PageScrollAnimator";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { BackLink } from "@/components/ui/BackLink";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ServiceSection } from "@/components/ui/ServiceSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scale, Search, Palette, Code, Smartphone, Users, MapPin } from "lucide-react";

/* ── FAQ data ── */
const faqs = [
  {
    q: "Is the demo what my site will look like?",
    a: "No. The demo is a concept I made to show what\u2019s possible. Your site will be designed from scratch around your practice, your brand, and your goals. No templates, no recycled layouts.",
  },
  {
    q: "How long does it take to build a law firm website?",
    a: "Most projects take 2\u20134 weeks from start to launch. That covers discovery, design, development, content, and revisions. I work around your schedule \u2014 I know attorneys are busy.",
  },
  {
    q: "Do you only work with law firms in the Central Valley?",
    a: "I work with businesses across industries, but I\u2019m building a focused practice around law firms in this region because I understand the market and the competition here. If you\u2019re outside the Valley, we can still talk.",
  },
  {
    q: "What if I already have a website?",
    a: "That\u2019s fine \u2014 most firms I talk to do. The question is whether it\u2019s actually working for you. If it\u2019s not generating leads, not ranking on Google, or looks like it was built in 2015, it\u2019s time for something better.",
  },
  {
    q: "Can\u2019t I just use a legal website template?",
    a: "You can \u2014 and you\u2019ll look like every other firm that did. Templates share the same code, the same layouts, and the same limits. A custom site loads faster, ranks better, and actually looks like your firm.",
  },
  {
    q: "What does \u2018one firm per practice area\u2019 mean exactly?",
    a: "If you\u2019re a personal injury firm in Fresno and I build your site, I won\u2019t take on another personal injury firm in Fresno. You get my full effort, my best work, and zero conflict of interest. I\u2019m in your corner \u2014 not hedging my bets.",
  },
  {
    q: "How much does a custom law firm website cost?",
    a: "Entry packages start at $399 + $50/month \u2014 a limited-time rate. Custom law firm sites start at $999. You\u2019re paying for strategy, design, and clean code \u2014 not agency overhead, account managers, and recycled templates.",
  },
];

/* ── City data ── */
const cities = [
  { city: "Fresno", pop: "545K" },
  { city: "Bakersfield", pop: "407K" },
  { city: "Stockton", pop: "322K" },
  { city: "Modesto", pop: "218K" },
  { city: "Visalia", pop: "144K" },
  { city: "Merced", pop: "86K" },
  { city: "Clovis", pop: "120K" },
  { city: "Turlock", pop: "75K" },
  { city: "Manteca", pop: "84K" },
  { city: "Tracy", pop: "96K" },
  { city: "Hanford", pop: "58K" },
  { city: "Lodi", pop: "68K" },
];

export default function LawFirmsCentralValleyPage() {
  return (
    <>
      <main id="main-content" className="relative min-h-screen bg-warm-bg">
        <PageScrollAnimator />
        <Navigation />

        <div className="page-frame">
          {/* ── Hero ── */}
          <div className="relative border-b border-stone-200 overflow-hidden">
            {/* Decorative circles */}
            <div
              className="absolute -right-[16rem] sm:-right-[12rem] md:-right-[16rem] top-6 sm:top-12 md:top-16 w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] md:w-[32rem] md:h-[32rem] rounded-full pointer-events-none"
              style={{ background: "rgba(0, 77, 58, 0.06)" }}
              aria-hidden="true"
            />
            <div
              className="absolute -right-[10rem] sm:-right-[6rem] md:-right-[8rem] top-[14rem] sm:top-[18rem] md:top-[22rem] w-[12rem] h-[12rem] sm:w-[14rem] sm:h-[14rem] md:w-[18rem] md:h-[18rem] rounded-full pointer-events-none"
              style={{ background: "rgba(0, 77, 58, 0.04)" }}
              aria-hidden="true"
            />

            <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-20 pt-16 pb-0 sm:pt-20 md:pt-24">
              <BackLink href="/#solutions" className="mb-10 sm:mb-14">
                Back to Home
              </BackLink>

              <section className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-20 sm:pb-24 lg:pb-28">
                <div data-hero-copy className="lg:col-span-7 flex flex-col">
                  <div className="flex items-center gap-2 mb-5 sm:mb-6">
                    <Scale className="w-3.5 h-3.5 text-[#004D3A]" aria-hidden="true" />
                    <span className="section-label">Law Firms</span>
                    <span className="text-xs font-mono text-stone-400 tracking-wide">
                      · Central Valley
                    </span>
                  </div>

                  <h1 className="font-display text-3xl sm:text-4xl md:text-[3.25rem] font-bold text-warm-white leading-[1.08] tracking-tight text-balance">
                    Most law firms have a website.{" "}
                    <span className="text-[#004D3A]">
                      Very few have an online&nbsp;presence.
                    </span>
                  </h1>

                  <p className="mt-4 sm:mt-5 text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl text-pretty">
                    An online presence does more than just exist &mdash; it builds trust, shows up
                    when people search, and makes it easy to take the next step. Most firms in the
                    Central Valley aren&apos;t there yet, which means the ones that start now have a
                    real advantage.
                  </p>

                  <div className="mt-9 sm:mt-10 flex flex-wrap items-center gap-x-7 gap-y-5">
                    <PrimaryButton href="/contact" arrow>
                      Get Your Free Site Review
                    </PrimaryButton>
                    <Link
                      href="#demo"
                      className="group inline-flex items-center gap-2 text-[15px] font-medium text-stone-500 hover:text-[#004D3A] transition-colors duration-200"
                    >
                      See the Demo
                      <ArrowRight
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>

                  {/* Trust signals */}
                  <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-lg bg-stone-50 border border-stone-200 px-3.5 py-1.5 text-[13px] font-medium text-stone-600">
                      <Search
                        className="w-3.5 h-3.5 text-[#004D3A] flex-shrink-0"
                        aria-hidden="true"
                      />
                      Built for Google
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-lg bg-stone-50 border border-stone-200 px-3.5 py-1.5 text-[13px] font-medium text-stone-600">
                      <Scale
                        className="w-3.5 h-3.5 text-[#004D3A] flex-shrink-0"
                        aria-hidden="true"
                      />
                      One firm per practice area
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-lg bg-stone-50 border border-stone-200 px-3.5 py-1.5 text-[13px] font-medium text-stone-600">
                      <MapPin
                        className="w-3.5 h-3.5 text-[#004D3A] flex-shrink-0"
                        aria-hidden="true"
                      />
                      Central Valley
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </span>
                  </div>
                </div>

                {/* Hero visual — warm browser mockup */}
                <div data-hero-visual className="lg:col-span-5">
                  <div
                    className="rounded-xl border border-stone-300 bg-[#0C0B09] overflow-hidden select-none"
                    style={{
                      boxShadow: "12px 12px 0px 0px #A8CCBF, 0 8px 32px rgba(0,0,0,0.08)",
                    }}
                  >
                    <div
                      className="flex items-center gap-3 px-4 py-2 border-b border-white/[0.04]"
                      aria-hidden="true"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
                        <span className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
                        <span className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.04]">
                          <span className="text-[10px] text-white/25 font-mono tracking-wide">
                            law-demo.loudbark.dev
                          </span>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://law-demo.loudbark.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/assets/law-site.PNG"
                        alt="Custom law firm website concept — design demo for Central Valley attorneys"
                        width={800}
                        height={500}
                        className="w-full h-auto"
                        priority
                      />
                    </a>
                  </div>
                  <p className="text-sm text-stone-500 mt-4">
                    Design concept.{" "}
                    <a
                      href="https://law-demo.loudbark.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#004D3A] hover:underline"
                    >
                      View live demo &rarr;
                    </a>
                  </p>
                </div>
              </section>
            </div>

            {/* Brand gradient bottom border */}
            <div
              className="absolute bottom-0 inset-x-0 h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent 5%, #B45309 25%, #DB2777 50%, #7C3AED 75%, transparent 95%)",
                opacity: 0.7,
              }}
              aria-hidden="true"
            />
          </div>

          {/* ── The Problem ── */}
          <ServiceSection
            gradient={0}
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
          >
            <section data-fade>
              <div className="mb-10 sm:mb-14">
                <p className="section-label mb-5">The Gap</p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance max-w-2xl">
                  Most firms in the Valley aren&apos;t doing this&nbsp;yet.
                </h2>
                <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
                  A site that was built years ago and never updated isn&apos;t pulling its weight.
                  It&apos;s not ranking on Google, not earning trust with visitors, and not giving
                  people a clear way to reach out. That&apos;s not a criticism &mdash; it&apos;s an
                  opportunity.
                </p>
              </div>

              {/* Bento stat cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
                {/* Featured — Template Trap */}
                <div className="md:col-span-2 rounded-xl bg-white border border-stone-200 p-6 sm:p-8 hover:shadow-sm transition-shadow duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <Palette className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
                      <h3 className="text-lg font-semibold text-warm-white">
                        Same templates, same first impression
                      </h3>
                    </div>
                    <p className="text-[15px] text-stone-500 leading-relaxed max-w-lg">
                      Most law firm sites come from the same handful of providers &mdash; FindLaw,
                      Avvo, Justia. Same layout, same stock photos, same copy. When a potential
                      client visits three firms and they all look the same, there&apos;s nothing to
                      remember. The firm that looks different earns the&nbsp;call.
                    </p>
                  </div>
                  {/* Template comparison — stacked cards */}
                  <div className="mt-6 pt-6 border-t border-stone-200">
                    <div className="relative h-[110px] sm:h-[130px]">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="absolute rounded-lg border border-stone-300 bg-white overflow-hidden"
                          style={{
                            width: "55%",
                            left: `${i * 20}%`,
                            top: `${i * 8}px`,
                            zIndex: i,
                            boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                          }}
                        >
                          <div className="flex items-center gap-1.5 px-2.5 py-1.5 border-b border-stone-200 bg-stone-50">
                            <div className="flex items-center gap-0.5">
                              <span className="h-1 w-1 rounded-full bg-stone-300" />
                              <span className="h-1 w-1 rounded-full bg-stone-300" />
                              <span className="h-1 w-1 rounded-full bg-stone-300" />
                            </div>
                            <div className="flex-1 flex justify-center">
                              <div className="h-1 w-14 rounded-sm bg-stone-200" />
                            </div>
                          </div>
                          <div className="p-2.5">
                            <div className="flex items-center gap-1 mb-1.5">
                              <div className="h-0.5 w-5 rounded-sm bg-stone-200" />
                              <div className="ml-auto flex gap-0.5">
                                <div className="h-0.5 w-2 rounded-sm bg-stone-200" />
                                <div className="h-0.5 w-2 rounded-sm bg-stone-200" />
                              </div>
                            </div>
                            <div className="h-7 sm:h-9 rounded-sm bg-stone-100 mb-1.5 flex items-end p-1.5">
                              <div className="h-0.5 w-3/4 rounded-sm bg-stone-200" />
                            </div>
                            <div className="space-y-0.5">
                              <div className="h-px w-full rounded-sm bg-stone-100" />
                              <div className="h-px w-5/6 rounded-sm bg-stone-100" />
                              <div className="h-px w-2/3 rounded-sm bg-stone-100" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[11px] text-stone-400 font-mono mt-3">
                      Three firms. One template. No one stands out.
                    </p>
                  </div>
                </div>

                {/* Right column — stacked cards */}
                <div className="flex flex-col gap-2">
                  {/* Not showing up on Google */}
                  <div className="rounded-xl bg-white border border-stone-200 p-6 sm:p-7 hover:shadow-sm transition-shadow duration-300 flex-1 flex flex-col">
                    <div className="flex items-center gap-2.5 mb-2">
                      <Search className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
                      <h3 className="text-base font-semibold text-warm-white">
                        Invisible on Google
                      </h3>
                    </div>
                    <p className="text-sm text-stone-500 leading-relaxed flex-1">
                      75% of people never scroll past page&nbsp;1. Most firm sites are slow,
                      bloated, and missing the signals Google looks&nbsp;for.
                    </p>
                    <div className="mt-4 pt-4 border-t border-stone-200">
                      <span className="font-display text-3xl font-bold text-[#004D3A] leading-none">
                        75%
                      </span>
                      <p className="text-[11px] font-mono text-stone-400 uppercase tracking-wider mt-1">
                        never scroll past page 1
                      </p>
                    </div>
                  </div>

                  {/* No path to action */}
                  <div className="rounded-xl bg-white border border-stone-200 p-6 sm:p-7 hover:shadow-sm transition-shadow duration-300 flex-1 flex flex-col">
                    <div className="flex items-center gap-2.5 mb-2">
                      <Users className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
                      <h3 className="text-base font-semibold text-warm-white">
                        No clear way to reach out
                      </h3>
                    </div>
                    <p className="text-sm text-stone-500 leading-relaxed flex-1">
                      Most firms bury a phone number three clicks deep and wonder why it isn&apos;t
                      ringing.
                    </p>
                    <div className="mt-4 pt-4 border-t border-stone-200">
                      <span className="font-display text-3xl font-bold text-[#004D3A] leading-none">
                        81%
                      </span>
                      <p className="text-[11px] font-mono text-stone-400 uppercase tracking-wider mt-1">
                        won&apos;t make a cold call
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full-width card — built for every firm */}
              <div className="rounded-xl bg-white border border-stone-200 p-6 sm:p-8 hover:shadow-sm transition-shadow duration-300 flex flex-col sm:flex-row sm:items-center sm:gap-10">
                <div className="flex items-center gap-2.5 mb-3 sm:mb-0 sm:flex-shrink-0">
                  <Code className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
                  <h3 className="text-base font-semibold text-warm-white">
                    Built for every firm, not yours
                  </h3>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed">
                  A family law practice in Modesto and a corporate firm in SF have nothing in common
                  &mdash; but their sites use the same template, same layout, same stock
                  &ldquo;About Us&rdquo; page. When your site doesn&apos;t reflect your actual
                  practice, it doesn&apos;t build trust. It raises&nbsp;questions.
                </p>
              </div>
            </section>
          </ServiceSection>

          {/* ── The Demo ── */}
          <ServiceSection
            gradient={1}
            className="overflow-hidden"
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
          >
            <section id="demo" data-fade>
              <div className="mb-10 sm:mb-14">
                <p className="section-label mb-5">The Solution</p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance max-w-2xl mb-3">
                  An online presence that builds trust &mdash; even when you&apos;re in&nbsp;court.
                </h2>
                <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
                  I build sites from scratch around your firm &mdash; not from a template library.
                  Every page, every section, every detail is there to earn trust and make it easy to
                  take the next step. Here&apos;s a concept I built to show what that
                  looks&nbsp;like.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Left — browser mockup */}
                <div className="lg:col-span-7">
                  <div
                    className="rounded-xl border border-stone-300 bg-[#0C0B09] overflow-hidden select-none"
                    style={{
                      boxShadow: "-12px 12px 0px 0px #A8CCBF, 0 8px 32px rgba(0,0,0,0.08)",
                    }}
                  >
                    <div
                      className="flex items-center gap-3 px-4 py-2 border-b border-white/[0.04]"
                      aria-hidden="true"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
                        <span className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
                        <span className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.04]">
                          <MapPin className="w-2.5 h-2.5 text-white/20" aria-hidden="true" />
                          <span className="text-[10px] text-white/25 font-mono tracking-wide">
                            law-demo.loudbark.dev
                          </span>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://law-demo.loudbark.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/assets/law-site.PNG"
                        alt="Full view of custom law firm website concept — design demo for Central Valley attorneys"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover object-top"
                      />
                    </a>
                  </div>
                  <p className="text-sm text-stone-500 mt-4">
                    Design concept built in{" "}
                    <span className="text-warm-white font-medium">2 weeks</span>.{" "}
                    <a
                      href="https://law-demo.loudbark.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#004D3A] hover:underline"
                    >
                      View live demo &rarr;
                    </a>
                  </p>
                </div>

                {/* Right — feature selling points */}
                <div className="lg:col-span-5 space-y-1">
                  {[
                    {
                      icon: Palette,
                      label: "Builds trust at first glance",
                      desc: "No stock gavel photos. No cookie-cutter layouts. Every color, section, and word is chosen to make visitors feel like they\u2019re in the right place.",
                    },
                    {
                      icon: Users,
                      label: "Turns visitors into consultations",
                      desc: "The layout guides people from \u2018I need help\u2019 to \u2018here\u2019s how to reach out\u2019 \u2014 naturally. Forms, booking links, and CTAs right where they\u2019re already looking.",
                    },
                    {
                      icon: Search,
                      label: "Shows up when people search",
                      desc: "Dedicated practice area pages, local search signals, and the technical foundation Google rewards. Built to rank for \u201C[specialty] attorney [city]\u201D searches.",
                    },
                    {
                      icon: Smartphone,
                      label: "Fast and sharp on every device",
                      desc: "Over 60% of people searching for an attorney do it from their phone. Your site loads in under 2 seconds and reads clean on any screen.",
                    },
                  ].map((d) => {
                    const Icon = d.icon;
                    return (
                      <div
                        key={d.label}
                        className="flex items-start gap-3 py-3 px-3 rounded-lg border border-transparent hover:border-stone-300 hover:bg-stone-50 transition-colors duration-200"
                      >
                        <div className="w-8 h-8 rounded-md bg-[#004D3A]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-warm-white block leading-snug">
                            {d.label}
                          </span>
                          <span className="text-[13px] text-stone-500 leading-relaxed block mt-0.5">
                            {d.desc}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </ServiceSection>

          {/* ── How It Works ── */}
          <ServiceSection
            gradient={2}
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
          >
            <section data-fade>
              <div className="mb-10 sm:mb-14">
                <p className="section-label mb-5">How It Works</p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance max-w-2xl mb-3">
                  You run your practice. I&apos;ll build the presence around&nbsp;it.
                </h2>
                <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
                  You shouldn&apos;t have to think about SEO, design, or site performance &mdash;
                  that&apos;s what you have me for.
                </p>
              </div>

              <div className="space-y-12 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-8">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    body: "I learn your firm \u2014 the cases you take, the clients you want more of, and what the online landscape looks like in your market. This isn\u2019t a questionnaire. It\u2019s a real conversation about what will actually move the needle.",
                  },
                  {
                    step: "02",
                    title: "Design & Build",
                    body: "Every page is built from scratch around your firm. Practice area pages that rank. Attorney bios that build trust. Contact flows people actually use. Nothing recycled \u2014 every decision is made to earn consultations.",
                  },
                  {
                    step: "03",
                    title: "Launch & Grow",
                    body: "Your site goes live with search optimization, analytics, and a strategy behind it. From there, I watch the data \u2014 what\u2019s working, what\u2019s not, where the opportunities are \u2014 and keep building on it.",
                  },
                ].map((item) => (
                  <div key={item.step}>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex items-center justify-center h-[38px] w-[38px] rounded-full bg-[#004D3A]/10 border border-[#004D3A]/20">
                        <span className="text-xs font-mono text-[#004D3A] font-semibold">
                          {item.step}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-warm-white mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone-500 leading-relaxed text-pretty max-w-sm">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Service links */}
              <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col sm:flex-row gap-4 sm:gap-8">
                <Link
                  href="/services/web-development"
                  className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-warm-white transition-colors duration-300"
                >
                  More about the build process
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/services/growth-strategy"
                  className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-warm-white transition-colors duration-300"
                >
                  How ongoing growth works
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </section>
          </ServiceSection>

          {/* ── What's Included ── */}
          <ServiceSection
            gradient={3}
            className="overflow-hidden"
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
          >
            <section data-fade>
              <div className="mb-10 sm:mb-14">
                <p className="section-label mb-5">What&apos;s Included</p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance max-w-2xl mb-3">
                  Built for how law firms actually get&nbsp;clients.
                </h2>
                <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
                  Every feature helps potential clients find you, trust you, and reach&nbsp;out.{" "}
                  <Link href="/services/web-development" className="text-[#004D3A] hover:underline">
                    See all features &rarr;
                  </Link>
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Left — practice area mockup */}
                <div className="lg:col-span-7">
                  <div
                    className="rounded-xl border border-stone-300 bg-[#0C0B09] overflow-hidden select-none"
                    style={{
                      boxShadow: "12px 12px 0px 0px #A8CCBF, 0 8px 32px rgba(0,0,0,0.08)",
                    }}
                  >
                    {/* Browser chrome */}}
                    <div
                      className="flex items-center gap-3 px-4 py-2 border-b border-white/[0.04]"
                      aria-hidden="true"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
                        <span className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
                        <span className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.04]">
                          <span className="text-[10px] text-white/25 font-mono">
                            yourfirm.com/practice-areas
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Tab bar */}
                    <div className="bg-[#0A0A0E] border-b border-white/[0.06] flex">
                      {[
                        { label: "Personal Injury", active: true },
                        { label: "Family Law", active: false },
                        { label: "Criminal Defense", active: false },
                        { label: "Estate Planning", active: false },
                      ].map((tab) => (
                        <div
                          key={tab.label}
                          className={`px-4 sm:px-5 py-3 text-xs font-medium border-r border-white/[0.04] transition-colors ${
                            tab.active
                              ? "text-white bg-[#0D0F13] border-b-2 border-b-[#004D3A]"
                              : "text-white/30"
                          }`}
                        >
                          {tab.label}
                        </div>
                      ))}
                    </div>
                    {/* Page preview */}
                    <div className="bg-[#0A0A0E] p-6 sm:p-8 space-y-5">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-white/20">
                        <span>Home</span>
                        <span>/</span>
                        <span>Practice Areas</span>
                        <span>/</span>
                        <span className="text-[#004D3A]/60">Personal Injury</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-6 w-3/4 rounded bg-white/[0.06]" />
                        <div className="h-3 w-full rounded bg-white/[0.03]" />
                        <div className="h-3 w-5/6 rounded bg-white/[0.03]" />
                        <div className="h-3 w-2/3 rounded bg-white/[0.03]" />
                      </div>
                      <div className="flex items-center gap-3 pt-2">
                        <div className="h-9 w-36 rounded-md bg-[#004D3A]/20 border border-[#004D3A]/30 flex items-center justify-center">
                          <span className="text-[10px] font-semibold text-[#004D3A]">
                            Free Consultation
                          </span>
                        </div>
                        <div className="h-9 w-28 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                          <span className="text-[10px] text-white/30">Call Now</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/[0.04]">
                        {[
                          { stat: "$2.1M+", label: "Recovered" },
                          { stat: "500+", label: "Cases Won" },
                          { stat: "15 yrs", label: "Experience" },
                        ].map((s) => (
                          <div key={s.label} className="text-center py-2 rounded bg-white/[0.02]">
                            <p className="text-sm font-semibold text-white">{s.stat}</p>
                            <p className="text-[10px] text-white/30">{s.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-stone-400 font-mono">
                    Each practice area gets its own page, copy, and search&nbsp;strategy.
                  </p>
                </div>

                {/* Right — feature list */}
                <div className="lg:col-span-5 space-y-1">
                  {[
                    {
                      icon: Scale,
                      label: "Practice Area Pages",
                      desc: "A dedicated page for each type of law you handle \u2014 written and optimized to rank for that specific search.",
                    },
                    {
                      icon: Users,
                      label: "Client Intake Flow",
                      desc: "Online forms that let people describe their situation and request a consultation. You get case details before the first call.",
                    },
                    {
                      icon: Search,
                      label: "Local Search Signals",
                      desc: "Location data, business listings, and site structure built so you show up for \u201C[specialty] attorney [city]\u201D searches.",
                    },
                    {
                      icon: MapPin,
                      label: "Central Valley Content",
                      desc: "Pages and search signals built around Fresno, Bakersfield, Stockton, Modesto, Visalia, and surrounding areas.",
                    },
                  ].map((d) => {
                    const Icon = d.icon;
                    return (
                      <div
                        key={d.label}
                        className="flex items-start gap-3 py-3.5 px-3 rounded-lg border border-transparent hover:border-stone-300 hover:bg-stone-50 transition-colors duration-200"
                      >
                        <div className="w-8 h-8 rounded-md bg-[#004D3A]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-warm-white block leading-snug">
                            {d.label}
                          </span>
                          <span className="text-[13px] text-stone-500 leading-relaxed block mt-0.5">
                            {d.desc}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </ServiceSection>

          {/* ── Why Central Valley ── */}
          <ServiceSection
            gradient={4}
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
          >
            <section data-fade>
              <p className="section-label mb-5">Why the Central Valley</p>
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                <div className="lg:col-span-7">
                  <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-4">
                    I grew up here. I know this&nbsp;market.
                  </h2>
                  <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-6 text-pretty">
                    I know the Central Valley. Most law firms here haven&apos;t touched their
                    websites in years &mdash; which means the firms that start building a real
                    online presence now become the obvious choice in their&nbsp;city.
                  </p>
                  <p className="text-base sm:text-lg text-stone-600 leading-relaxed text-pretty">
                    Most agencies will build sites for every lawyer in town &mdash; and try to rank
                    them all for the same searches. You end up paying someone who&apos;s also
                    working for your direct competition. I don&apos;t do that. When I&apos;m
                    building your online presence, I&apos;m all in on&nbsp;yours.
                  </p>

                  {/* Closer */}
                  <div className="mt-10 sm:mt-12 pt-8 border-t border-stone-200">
                    <p className="font-display text-2xl sm:text-3xl font-semibold text-warm-white leading-snug">
                      One firm per practice area. One city.{" "}
                      <span className="text-[#004D3A]">
                        Your competition won&apos;t get this from&nbsp;me.
                      </span>
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-mono text-stone-500">
                        Spots are limited &mdash; check availability
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right — cities served (warm card) */}
                <div className="lg:col-span-5">
                  <div className="rounded-xl border border-stone-200 bg-white overflow-hidden">
                    <div className="px-5 py-4 border-b border-stone-200 bg-stone-50 flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
                      <p className="text-sm font-semibold text-warm-white">Service Area</p>
                      <span className="ml-auto text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                        Central Valley
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                        {cities.map((item) => (
                          <div
                            key={item.city}
                            className="flex items-center justify-between py-2.5 border-b border-stone-100 last:border-0"
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#004D3A]/40" />
                              <span className="text-sm text-stone-700">{item.city}</span>
                            </div>
                            <span className="text-[10px] font-mono text-stone-400">{item.pop}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="px-5 py-3.5 border-t border-stone-200 bg-stone-50">
                      <p className="text-xs text-stone-500 leading-relaxed">
                        Not listed? If you&apos;re in the Valley or nearby,{" "}
                        <Link href="/contact" className="text-[#004D3A] hover:underline">
                          let&apos;s talk
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ServiceSection>

          {/* ── FAQ ── */}
          <ServiceSection gradient={5}>
            <section data-fade>
              <p className="section-label mb-5">Common Questions</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-10 max-w-2xl">
                Straight answers to the questions I hear&nbsp;most.
              </h2>
              <FAQAccordion faqs={faqs} idPrefix="law-firm-faq" />
            </section>
          </ServiceSection>

          {/* ── Final CTA ── */}
          <ServiceSection
            gradient={6}
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
          >
            <section data-fade>
              <p className="text-xs font-semibold text-[#004D3A] uppercase tracking-[0.2em] mb-5">
                Get Started
              </p>

              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-stone-900 leading-[1.1] tracking-tight max-w-2xl">
                Most firms won&apos;t do this.{" "}
                <span className="text-stone-500">That&apos;s your&nbsp;edge.</span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-stone-500 leading-relaxed max-w-xl">
                One conversation &mdash; no pitch, no pressure. I&apos;ll look at your current site,
                show you where the gaps are, and map out what a real online presence would look like
                for your firm.
              </p>

              <div className="mt-10 sm:mt-12 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#004D3A] hover:text-[#003328] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#004D3A]/40 focus:ring-offset-2"
                >
                  <span>Get Your Free Site Review</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <span className="text-[11px] font-mono text-stone-500">Free, no commitment</span>
              </div>

              <div className="border-t border-stone-200 mt-10 pt-6 flex flex-col sm:flex-row gap-4 sm:gap-8">
                <Link
                  href="/services/web-development"
                  className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-warm-white transition-colors duration-300"
                >
                  Explore Web Development
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/services/growth-strategy"
                  className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-warm-white transition-colors duration-300"
                >
                  Explore Growth Strategy
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </section>
          </ServiceSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
