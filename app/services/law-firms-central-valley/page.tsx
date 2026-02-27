import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageScrollAnimator from "@/components/ui/PageScrollAnimator";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Scale,
  Search,
  Palette,
  Code,
  Smartphone,
  Users,
  MapPin,
} from "lucide-react";

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
    a: "Most projects start at $1,500. You\u2019re paying for strategy, design, and clean code \u2014 not agency overhead, account managers, and recycled templates.",
  },
];

export default function LawFirmsCentralValleyPage() {
  return (
    <main id="main-content" className="relative min-h-screen bg-cyber-dark">
      <PageScrollAnimator />
      <Navigation />

      <div className="page-frame">
        {/* ── Hero ── */}
        <div
          className="relative border-b border-white/[0.06] overflow-hidden"
          style={{
            backgroundImage: [
              "radial-gradient(ellipse 80% 70% at 85% 10%, rgba(64,224,255,0.14), rgba(167,139,250,0.12) 40%, rgba(244,114,182,0.06) 70%, transparent 100%)",
              "radial-gradient(ellipse 60% 55% at 10% 90%, rgba(64,224,255,0.08), rgba(167,139,250,0.04) 50%, transparent 80%)",
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
                <div className="flex items-center gap-2">
                  <p className="section-label">Law Firms</p>
                  <span className="text-xs font-mono text-cyber-gray-500 tracking-wide">
                    · Central Valley
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white leading-tight tracking-tight text-balance">
                  Most law firms have a website.{" "}
                  <span className="text-cyber-accent">
                    Very few have an online presence.
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed text-pretty">
                  An online presence does more than just exist &mdash; it builds
                  trust, shows up when people search, and makes it easy to take
                  the next step. Most firms in the Central Valley aren&apos;t
                  there yet, which means the ones that start now have a real
                  advantage.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-7 py-3.5 bg-cyber-accent text-[#060608] font-semibold text-sm rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)]"
                  >
                    Get Your Free Site Review
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Hero visual — browser mockup with screenshot */}
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
                        law-demo.austino.dev
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://law-demo.austino.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block"
                  >
                    <Image
                      src="/assets/law-site.PNG"
                      alt="Custom law firm website concept designed for a Central Valley practice — this is a design demo, not a template"
                      width={800}
                      height={500}
                      className="w-full h-auto"
                      priority
                    />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ── The Problem ── */}
        <div className="border-b border-white/[0.06]">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <section data-fade>
              <p className="section-label mb-4">The Gap</p>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
                Most firms in the Valley aren&apos;t doing this yet.
              </h2>
              <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-12 text-pretty">
                A site that was built years ago and never updated isn&apos;t
                pulling its weight. It&apos;s not ranking on Google, not earning
                trust with visitors, and not giving people a clear way to reach
                out. That&apos;s not a criticism &mdash; it&apos;s an
                opportunity.
              </p>

              {/* Bento grid */}
              <div className="grid grid-cols-1 md:grid-cols-5 border-t border-l border-white/[0.06]">
                {/* Featured — Template Trap (3 cols, 2 rows) */}
                <div className="md:col-span-3 md:row-span-2 border-b border-r border-white/[0.06] p-7 sm:p-9 flex flex-col">
                  <div className="w-10 h-10 rounded-full border border-cyber-accent/25 bg-cyber-accent/[0.06] flex items-center justify-center flex-shrink-0 mb-5">
                    <Palette
                      className="w-[18px] h-[18px] text-cyber-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-white leading-snug mb-3">
                    Same templates, same first impression
                  </h3>
                  <p className="text-[15px] text-cyber-gray-300 leading-relaxed max-w-md flex-1">
                    Most law firm sites come from the same handful of providers
                    &mdash; FindLaw, Avvo, Justia. Same layout, same stock
                    photos, same copy. When a potential client visits three
                    firms and they all look the same, there&apos;s nothing to
                    remember. Nothing that says &ldquo;this is the one.&rdquo;
                    The firm that looks different earns the call.
                  </p>
                  {/* Comparison strip — three identical templates stacked like cards */}
                  <div className="mt-auto pt-6">
                    <div className="relative h-[110px] sm:h-[130px]">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="absolute rounded-md border border-white/[0.08] bg-[#0A0C0F] overflow-hidden shadow-lg"
                          style={{
                            width: "55%",
                            left: `${i * 20}%`,
                            top: `${i * 8}px`,
                            zIndex: i,
                          }}
                        >
                          {/* Browser chrome */}
                          <div className="flex items-center gap-1.5 px-2.5 py-1.5 border-b border-white/[0.06] bg-white/[0.02]">
                            <div className="flex items-center gap-0.5">
                              <span className="h-1 w-1 rounded-full bg-[#FF5F57]/50" />
                              <span className="h-1 w-1 rounded-full bg-[#FEBC2E]/50" />
                              <span className="h-1 w-1 rounded-full bg-[#28C840]/50" />
                            </div>
                            <div className="flex-1 flex justify-center">
                              <div className="h-1 w-14 rounded-sm bg-white/[0.06]" />
                            </div>
                          </div>
                          {/* Page content */}
                          <div className="p-2.5">
                            {/* Nav */}
                            <div className="flex items-center gap-1 mb-1.5">
                              <div className="h-0.5 w-5 rounded-sm bg-white/[0.10]" />
                              <div className="ml-auto flex gap-0.5">
                                <div className="h-0.5 w-2 rounded-sm bg-white/[0.06]" />
                                <div className="h-0.5 w-2 rounded-sm bg-white/[0.06]" />
                              </div>
                            </div>
                            {/* Hero */}
                            <div className="h-7 sm:h-9 rounded-sm bg-white/[0.03] mb-1.5 flex items-end p-1.5">
                              <div className="h-0.5 w-3/4 rounded-sm bg-white/[0.08]" />
                            </div>
                            {/* Body */}
                            <div className="space-y-0.5">
                              <div className="h-px w-full rounded-sm bg-white/[0.05]" />
                              <div className="h-px w-5/6 rounded-sm bg-white/[0.05]" />
                              <div className="h-px w-2/3 rounded-sm bg-white/[0.04]" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-cyber-gray-500 font-mono mt-3">
                      Three firms. One template. No one stands out.
                    </p>
                  </div>
                </div>

                {/* Invisible on Google */}
                <div className="md:col-span-2 border-b border-r border-white/[0.06] p-6 sm:p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
                      <Search
                        className="w-[18px] h-[18px] text-cyber-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-[15px] font-semibold text-white">
                      Not showing up on Google
                    </h3>
                  </div>
                  <p className="text-sm text-cyber-gray-400 leading-relaxed text-pretty flex-1">
                    75% of people never scroll past page&nbsp;1. Most firm sites
                    are slow, bloated, and missing the behind-the-scenes signals
                    Google looks for. If your site isn&apos;t built for search,
                    people who need you right now can&apos;t find you.
                  </p>
                  <div className="mt-auto pt-5">
                    <div className="flex items-end gap-3">
                      <span className="font-display text-3xl sm:text-4xl font-bold text-cyber-accent leading-none">
                        75%
                      </span>
                      <p className="text-xs text-cyber-gray-400 leading-snug pb-0.5">
                        never scroll past page&nbsp;1
                      </p>
                    </div>
                  </div>
                </div>

                {/* No path to action */}
                <div className="md:col-span-2 border-b border-r border-white/[0.06] p-6 sm:p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
                      <Users
                        className="w-[18px] h-[18px] text-cyber-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-[15px] font-semibold text-white">
                      No clear way to reach out
                    </h3>
                  </div>
                  <p className="text-sm text-cyber-gray-400 leading-relaxed text-pretty flex-1">
                    Someone lands on your site, stressed, looking for help. If
                    there&apos;s no obvious way to reach out &mdash; a form, a
                    booking link, a clear next step &mdash; they leave. Most
                    firms bury a phone number three clicks deep and wonder why
                    the phone isn&apos;t ringing.
                  </p>
                  <div className="mt-auto pt-5">
                    <div className="flex items-end gap-3">
                      <span className="font-display text-3xl sm:text-4xl font-bold text-cyber-accent leading-none">
                        81%
                      </span>
                      <p className="text-xs text-cyber-gray-400 leading-snug pb-0.5">
                        won&apos;t make a cold call
                      </p>
                    </div>
                  </div>
                </div>

                {/* One-size-fits-none */}
                <div className="md:col-span-2 border-b border-r border-white/[0.06] p-6 sm:p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
                      <Code
                        className="w-[18px] h-[18px] text-cyber-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-[15px] font-semibold text-white">
                      Built for every firm, not yours
                    </h3>
                  </div>
                  <p className="text-sm text-cyber-gray-400 leading-relaxed text-pretty flex-1">
                    A family law practice in Modesto and a corporate firm in SF
                    have nothing in common &mdash; but their sites use the same
                    template, same layout, same stock &ldquo;About Us&rdquo;
                    page. When your site doesn&apos;t reflect your actual
                    practice, it doesn&apos;t build trust. It raises questions.
                  </p>
                </div>

                {/* Search results visual — all results look identical */}
                <div
                  className="md:col-span-3 border-b border-r border-white/[0.06] bg-[#0A0A0E] flex flex-col overflow-hidden"
                  aria-hidden="true"
                >
                  <div className="px-4 py-2.5 border-b border-white/[0.06] bg-[#0D0F13] flex-shrink-0">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.06]">
                      <Search
                        className="w-3 h-3 text-cyber-gray-400"
                        aria-hidden="true"
                      />
                      <span className="text-[11px] text-cyber-gray-300 font-mono">
                        personal injury attorney fresno
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    {[
                      {
                        url: "fresnolawteam.com",
                        title: "Fresno Law Team — Injury Attorneys",
                      },
                      {
                        url: "valleylawgroup.com",
                        title: "Valley Law Group — Personal Injury",
                      },
                      {
                        url: "smithandpartners.com",
                        title: "Smith & Partners — Injury Lawyers",
                      },
                      {
                        url: "centralvalleylaw.com",
                        title: "Central Valley Law — PI Attorney",
                      },
                    ].map((r, i) => (
                      <div
                        key={r.url}
                        className={`flex items-start gap-3 py-2.5 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}
                      >
                        <span className="text-[10px] font-mono text-cyber-gray-500 w-3 pt-0.5 flex-shrink-0">
                          {i + 1}
                        </span>
                        <div className="min-w-0">
                          <p className="text-[11px] text-[#8AB4F8] mb-0.5 truncate">
                            {r.url}
                          </p>
                          <p className="text-[11px] text-white/50 leading-snug">
                            {r.title}
                          </p>
                          <p className="text-[9px] text-cyber-gray-500 mt-0.5">
                            Template &middot; Stock photos &middot; Generic copy
                          </p>
                        </div>
                      </div>
                    ))}
                    <p className="text-[10px] text-cyber-gray-500 font-mono mt-auto pt-3 text-center border-t border-white/[0.06]">
                      4 results. Same template. Who stands out?
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ── The Demo ── */}
        <div
          className="relative border-b border-white/[0.06] overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 55% 60% at 55% 15%, rgba(64,224,255,0.04), rgba(167,139,250,0.02) 50%, transparent 80%)",
          }}
        >
          <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <section data-fade>
              <p className="section-label mb-4">The Solution</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white leading-[1.1] tracking-tight text-balance mb-4 max-w-2xl">
                An online presence that builds trust &mdash; even when
                you&apos;re in court.
              </h2>
              <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-12 text-pretty">
                I build sites from scratch around your firm &mdash; not from a
                template library. Every page, every section, every detail is
                there to do one thing: earn trust with the right people and make
                it easy to take the next step. Here&apos;s a concept I built to
                show what that looks like.
              </p>

              {/* Bento: demo + feature cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-white/[0.06]">
                {/* Screenshot cell */}
                <div className="lg:row-span-2 border-b border-r border-white/[0.06] bg-[#0A0A0E] overflow-hidden flex flex-col">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-[#0D0F13]">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/70" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/[0.04] text-[11px] text-cyber-gray-500 font-mono">
                        <MapPin className="w-2.5 h-2.5" />
                        law-demo.austino.dev
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://law-demo.austino.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Image
                      src="/assets/law-site.PNG"
                      alt="Full view of custom law firm website concept — design demo for Central Valley attorneys"
                      width={800}
                      height={600}
                      className="w-full h-auto flex-1 object-cover object-top"
                    />
                  </a>
                  <div className="border-t border-white/[0.06] bg-[#0D0F13] px-4 py-2.5 flex items-center justify-center">
                    <a
                      href="https://law-demo.austino.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-cyber-accent/70 hover:text-cyber-accent transition-colors font-mono"
                    >
                      View live demo &rarr;
                    </a>
                  </div>
                </div>

                {/* Feature cards — 2×2 on right */}
                {[
                  {
                    icon: Palette,
                    title: "Builds trust at first glance",
                    body: "No stock gavel photos. No cookie-cutter layouts. Every color, section, and word is chosen to make visitors feel like they\u2019re in the right place \u2014 before they read the fine print. When your site looks like it was built for your firm, people trust it.",
                  },
                  {
                    icon: Users,
                    title: "Turns visitors into consultations",
                    body: "Most people on a law firm site are stressed and short on time. The layout guides them from \u2018I need help\u2019 to \u2018here\u2019s how to reach out\u2019 \u2014 naturally, without friction. Forms, booking links, and calls-to-action right where they\u2019re already looking.",
                  },
                  {
                    icon: Search,
                    title: "Shows up when people search",
                    body: "Dedicated practice area pages, local search signals, and the technical foundation Google rewards. Built so you rank for searches like \u201Cpersonal injury attorney Fresno\u201D \u2014 not buried on page\u00A03.",
                  },
                  {
                    icon: Smartphone,
                    title: "Fast and sharp on every device",
                    body: "Over 60% of people searching for an attorney do it from their phone. Your site loads in under 2 seconds, reads clean on any screen, and makes it easy to take action with one tap.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-r border-white/[0.06] p-5 sm:p-6 flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
                        <item.icon
                          className="w-4 h-4 text-cyber-accent"
                          aria-hidden="true"
                        />
                      </div>
                      <h4 className="text-[15px] font-semibold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-cyber-gray-400 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* ── Not a Template ── */}
        <div className="border-b border-white/[0.06]">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <section data-fade>
              <p className="section-label mb-4">How It Works</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white leading-[1.1] tracking-tight text-pretty mb-4 max-w-2xl">
                You run your practice. I&apos;ll build the presence
                around&nbsp;it.
              </h2>
              <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-14 text-pretty">
                You shouldn&apos;t have to think about SEO, design, or site
                performance &mdash; that&apos;s what you have me for.
              </p>

              <div className="space-y-12 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-0">
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
                ].map((item, i) => (
                  <div key={item.step} className="relative group">
                    {i < 2 && (
                      <div
                        className="hidden sm:block absolute top-[18px] right-0 w-full h-px z-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to right, rgba(64,224,255,0.2), rgba(64,224,255,0.04))",
                          left: "calc(38px + 1rem)",
                          width: "calc(100% - 38px - 1rem)",
                        }}
                      />
                    )}

                    <div className="relative z-10 sm:pr-8">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="flex items-center justify-center h-[38px] w-[38px] rounded-full bg-cyber-dark border border-cyber-accent/25 shadow-[0_0_16px_rgba(64,224,255,0.06)]">
                          <span className="text-xs font-mono text-cyber-accent font-semibold">
                            {item.step}
                          </span>
                        </div>
                        {i < 2 && (
                          <div
                            className="flex-1 h-px sm:hidden"
                            style={{
                              background:
                                "linear-gradient(to right, rgba(64,224,255,0.2), rgba(64,224,255,0.04))",
                            }}
                          />
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-semibold text-white mb-2.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-cyber-gray-400 leading-relaxed text-pretty max-w-sm">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service links */}
              <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row gap-4 sm:gap-8">
                <Link
                  href="/services/web-development"
                  className="inline-flex items-center gap-2 text-sm text-cyber-accent/70 hover:text-cyber-accent transition-colors duration-300"
                >
                  More about the build process
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/services/growth-strategy"
                  className="inline-flex items-center gap-2 text-sm text-cyber-accent/70 hover:text-cyber-accent transition-colors duration-300"
                >
                  How ongoing growth works
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </section>
          </div>
        </div>

        {/* ── What You Get ── */}
        <div
          className="relative border-b border-white/[0.06] overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 65% 60% at 15% 35%, rgba(167,139,250,0.05), rgba(64,224,255,0.06) 50%, transparent 85%)",
          }}
        >
          <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <section data-fade>
              <p className="section-label mb-4">What&apos;s Included</p>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
                Built for how law firms actually get clients.
              </h2>
              <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-2 text-pretty">
                Every feature helps potential clients find you, trust you, and
                reach&nbsp;out.
              </p>
              <Link
                href="/services/web-development"
                className="inline-flex items-center gap-2 text-sm text-cyber-accent/70 hover:text-cyber-accent transition-colors mb-8"
              >
                See all features
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>

              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                {/* Left — browser mockup showing practice area pages */}
                <div className="lg:col-span-7">
                  <div
                    className="rounded-lg border border-white/[0.06] overflow-hidden"
                    style={{
                      boxShadow:
                        "0 4px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.02)",
                    }}
                  >
                    {/* Browser chrome */}
                    <div className="px-4 py-3 bg-[#0D0F13] border-b border-white/[0.06] flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/[0.06]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/[0.06]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/[0.06]" />
                      </div>
                      <div className="flex-1 mx-2 px-3 py-1 rounded bg-white/[0.03] border border-white/[0.04]">
                        <span className="text-[10px] font-mono text-cyber-gray-500">
                          yourfirm.com/practice-areas
                        </span>
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
                              ? "text-white bg-[#0D0F13] border-b-2 border-b-cyber-accent"
                              : "text-cyber-gray-500"
                          }`}
                        >
                          {tab.label}
                        </div>
                      ))}
                    </div>
                    {/* Page preview */}
                    <div className="bg-[#0A0A0E] p-6 sm:p-8 space-y-5">
                      {/* Breadcrumb */}
                      <div className="flex items-center gap-2 text-[10px] font-mono text-cyber-gray-600">
                        <span>Home</span>
                        <span>/</span>
                        <span>Practice Areas</span>
                        <span>/</span>
                        <span className="text-cyber-accent/60">
                          Personal Injury
                        </span>
                      </div>
                      {/* H1 placeholder */}
                      <div className="space-y-2">
                        <div className="h-6 w-3/4 rounded bg-white/[0.06]" />
                        <div className="h-3 w-full rounded bg-white/[0.03]" />
                        <div className="h-3 w-5/6 rounded bg-white/[0.03]" />
                        <div className="h-3 w-2/3 rounded bg-white/[0.03]" />
                      </div>
                      {/* CTA placeholder */}
                      <div className="flex items-center gap-3 pt-2">
                        <div className="h-9 w-36 rounded-md bg-cyber-accent/20 border border-cyber-accent/30 flex items-center justify-center">
                          <span className="text-[10px] font-semibold text-cyber-accent">
                            Free Consultation
                          </span>
                        </div>
                        <div className="h-9 w-28 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                          <span className="text-[10px] text-cyber-gray-500">
                            Call Now
                          </span>
                        </div>
                      </div>
                      {/* Stats row */}
                      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/[0.04]">
                        {[
                          { stat: "$2.1M+", label: "Recovered" },
                          { stat: "500+", label: "Cases Won" },
                          { stat: "15 yrs", label: "Experience" },
                        ].map((s) => (
                          <div
                            key={s.label}
                            className="text-center py-2 rounded bg-white/[0.02]"
                          >
                            <p className="text-sm font-semibold text-white">
                              {s.stat}
                            </p>
                            <p className="text-[10px] text-cyber-gray-500">
                              {s.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-cyber-gray-600 font-mono">
                    Each practice area gets its own page, copy, and
                    search&nbsp;strategy.
                  </p>
                </div>

                {/* Right — feature list */}
                <div className="lg:col-span-5 space-y-0 lg:pt-2">
                  {[
                    {
                      icon: Scale,
                      title: "Practice Area Pages",
                      body: "A dedicated page for each type of law you handle \u2014 written and optimized to rank for that specific search.",
                    },
                    {
                      icon: Users,
                      title: "Client Intake Flow",
                      body: "Online forms that let people describe their situation and request a consultation. You get case details before the first call.",
                    },
                    {
                      icon: Search,
                      title: "Local Search Signals",
                      body: "Location data, business listings, and site structure built so you show up for \u201C[specialty] attorney [city]\u201D searches.",
                    },
                    {
                      icon: MapPin,
                      title: "Central Valley Content",
                      body: "Pages and search signals built around Fresno, Bakersfield, Stockton, Modesto, Visalia, and surrounding areas.",
                    },
                  ].map((item, i) => (
                    <div
                      key={item.title}
                      className={`flex items-start gap-4 py-5 ${
                        i > 0 ? "border-t border-white/[0.06]" : ""
                      }`}
                    >
                      <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon
                          className="w-4 h-4 text-cyber-accent"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="text-[15px] font-semibold text-white mb-1">
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
            </section>
          </div>
        </div>

        {/* ── Why Central Valley ── */}
        <div className="border-b border-white/[0.06]">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <section data-fade>
              <p className="section-label mb-4">Why the Central Valley</p>
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                <div className="lg:col-span-7">
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-4">
                    I grew up here. I know this market.
                  </h2>
                  <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed mb-6 text-pretty">
                    I know the Central Valley. Most law firms here haven&apos;t
                    touched their websites in years &mdash; which means the
                    firms that start building a real online presence now become
                    the obvious choice in their&nbsp;city.
                  </p>
                  <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed text-pretty">
                    Most agencies will build sites for every lawyer in town
                    &mdash; and try to rank them all for the same searches. You
                    end up paying someone who&apos;s also working for your
                    direct competition. I don&apos;t do that. When I&apos;m
                    building your online presence, I&apos;m all in on yours.
                  </p>

                  {/* Closer — mirrors homepage style */}
                  <div className="mt-10 sm:mt-12 pt-8 border-t border-white/[0.06]">
                    <p className="font-display text-2xl sm:text-3xl font-semibold text-cyber-gray-300 leading-snug">
                      One firm per practice area. One city.{" "}
                      <span className="text-gradient">
                        Your competition won&apos;t get this from&nbsp;me.
                      </span>
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                      <span className="text-xs font-mono text-cyber-gray-400">
                        Spots are limited — check availability
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right column — cities served */}
                <div className="lg:col-span-5">
                  <div
                    className="rounded-lg border border-white/[0.06] overflow-hidden"
                    style={{
                      boxShadow:
                        "0 4px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.02)",
                    }}
                  >
                    {/* Header */}
                    <div className="px-5 py-4 border-b border-white/[0.06] bg-[#0D0F13] flex items-center gap-3">
                      <MapPin
                        className="w-4 h-4 text-cyber-accent"
                        aria-hidden="true"
                      />
                      <p className="text-sm font-semibold text-white">
                        Service Area
                      </p>
                      <span className="ml-auto text-[10px] font-mono text-cyber-gray-500 uppercase tracking-wider">
                        Central Valley
                      </span>
                    </div>
                    {/* City grid */}
                    <div className="bg-[#0A0A0E] p-5">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                        {[
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
                        ].map((item) => (
                          <div
                            key={item.city}
                            className="flex items-center justify-between py-2.5 border-b border-white/[0.04] last:border-0"
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-cyber-accent/40" />
                              <span className="text-sm text-cyber-gray-200">
                                {item.city}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-cyber-gray-500">
                              {item.pop}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Footer */}
                    <div className="px-5 py-3.5 border-t border-white/[0.06] bg-[#0D0F13]">
                      <p className="text-xs text-cyber-gray-400 leading-relaxed">
                        Not listed? If you&apos;re in the Valley or nearby,{" "}
                        <Link
                          href="/contact"
                          className="text-cyber-accent/70 hover:text-cyber-accent transition-colors"
                        >
                          let&apos;s talk
                        </Link>
                        .
                      </p>
                    </div>
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
                Straight answers to the questions I hear most.
              </h2>

              <FAQAccordion faqs={faqs} idPrefix="law-firm-faq" />
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
                    Most firms won&apos;t do this. That&apos;s your edge.
                  </h2>
                  <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed text-pretty">
                    One conversation &mdash; no pitch, no pressure. I&apos;ll
                    look at your current site, show you where the gaps are, and
                    map out what a real online presence would look like for your
                    firm. Even if we don&apos;t work together, you&apos;ll walk
                    away knowing what to fix.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-cyber-accent text-[#060608] font-semibold text-base rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)] w-full sm:w-auto"
                  >
                    <span>Get Your Free Site Review</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
              <div className="border-t border-white/[0.06] mt-10 pt-6 flex flex-col sm:flex-row gap-4 sm:gap-8">
                <Link
                  href="/services/web-development"
                  className="inline-flex items-center gap-2 text-sm text-cyber-accent/70 hover:text-cyber-accent transition-colors duration-300"
                >
                  Explore Web Development
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/services/growth-strategy"
                  className="inline-flex items-center gap-2 text-sm text-cyber-accent/70 hover:text-cyber-accent transition-colors duration-300"
                >
                  Explore Growth Strategy
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
