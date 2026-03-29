import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageScrollAnimator from "@/components/ui/PageScrollAnimator";
import { BackLink } from "@/components/ui/BackLink";
import { ServiceSection } from "@/components/ui/ServiceSection";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import {
  Search,
  Gauge,
  MapPin,
  Users,
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Site Audit & Advisory | Loud Bark",
  description:
    "Get a free honest audit of your online presence — no pitch, no pressure. Or stay connected with an ongoing advisory retainer for $99/mo.",
};

/* ── What the audit covers ── */
const AUDIT_ITEMS = [
  {
    icon: Search,
    label: "Search visibility",
    desc: "Where you rank for your core services and why you're losing ground to competitors.",
  },
  {
    icon: Gauge,
    label: "Site health",
    desc: "Load speed, mobile experience, and technical issues that quietly hurt rankings.",
  },
  {
    icon: MapPin,
    label: "Google Business Profile",
    desc: "Whether your GBP is optimized, complete, and actually driving local traffic.",
  },
  {
    icon: Users,
    label: "Competitive landscape",
    desc: "What the top 3 businesses in your city are doing that you aren't.",
  },
];

/* ── Fake text convo ── */
const MESSAGES = [
  {
    from: "them",
    text: "Been thinking about adding a chatbot for after-hours intake. Worth doing?",
  },
  {
    from: "me",
    text: "It could be good for basic screening and catching after-hours leads. The tricky part is people will ask legal questions and you don't want the bot answering those.",
  },
  {
    from: "me",
    text: "On top of that, your intake software is pretty locked down. There's no clean way to route leads anywhere useful without a workaround.",
  },
  {
    from: "me",
    text: "Honestly, for your practice, it's probably not worth the headache. But if you're still curious I can look into tools built specifically for law firms.",
  },
  { from: "them", text: "Good to know before I spent money on it. Thanks." },
];

/* ── What's included / not included ── */
const INCLUDED = [
  "Text or email anytime with questions",
  "Calls when you need to talk it through",
  "Honest take on what's working and what isn't",
  "Guidance on Google Business Profile, rankings, site decisions",
  "Second opinion before you spend money on something",
];
const NOT_INCLUDED = [
  "Execution — I advise, I don\u2019t do the work for you",
  "Managed SEO or site updates",
  "A guaranteed response time (though I\u2019m usually quick)",
];

/* ── FAQ ── */
const FAQS = [
  {
    q: "How much does it cost?",
    a: "I typically start someone around $99/mo for the advisory retainer. It\u2019s a small enough number that it shouldn\u2019t feel like a risk, and high enough that you\u2019ll actually use it. No contracts \u2014 cancel anytime. If you eventually move forward with a full site build, the first month folds in.",
  },
  {
    q: "What topics do you cover?",
    a: "Mostly website development and local SEO \u2014 that\u2019s my wheelhouse. But I\u2019m open to any tech or online business question. If I\u2019m not 100% sure about something, I\u2019ll tell you that and do the research before giving you a half-baked answer.",
  },
  {
    q: "How is this different from just asking AI?",
    a: "AI is a great starting point \u2014 I use it myself every day. But AI hallucinates. It will give you a confident, detailed, wrong answer and you won\u2019t know the difference until something breaks. The advantage here is that I already know your business, your market, and your history. The answer you get is specific to you, not a generic response shaped to sound helpful.",
  },
  {
    q: "How fast do you respond?",
    a: "Usually same day, often within a few hours. I\u2019m not running a call center, but I\u2019m also not leaving you hanging for three days on a quick question. If something needs a longer answer, I\u2019ll let you know.",
  },
  {
    q: "Do I need to be technical to ask questions?",
    a: "Not at all. Most of my clients aren\u2019t technical \u2014 that\u2019s kind of the point. Ask it however it comes out naturally and I\u2019ll translate from there.",
  },
  {
    q: "What if I decide I want a full website later?",
    a: "That\u2019s often how this goes. When you\u2019re ready, we pick up where the advisory left off and fold it into a proper engagement. You\u2019re not starting from zero because I already know your situation.",
  },
  {
    q: "Is this only for businesses in the Central Valley?",
    a: "The free audit is most useful for businesses I can actually research locally \u2014 ranking data, GBP presence, competitor landscape. But the advisory retainer works for anyone, anywhere. If you have a business with online questions, I\u2019m happy to help.",
  },
];

export default function ConsultingPage() {
  return (
    <>
      <main id="main-content" className="relative min-h-screen bg-warm-bg">
        <PageScrollAnimator />
        <Navigation />

        <div className="page-frame">
          {/* ── Hero ── */}
          <div className="relative border-b border-stone-200 overflow-hidden">
            <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-16 pb-0 sm:pt-20 md:pt-24">
              <BackLink href="/#solutions">Back to Home</BackLink>

              <section className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-16 sm:pb-20 md:pb-24">
                {/* Copy */}
                <div data-hero-copy className="lg:col-span-6 space-y-6">
                  <p className="section-label">Free Audit</p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-stone-900 leading-[1.1] tracking-tight text-balance">
                    Get a straight answer before you spend a dollar.
                  </h1>
                  <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-lg">
                    Book a free 30-minute call. I&apos;ll review your current online presence and
                    tell you exactly where you&apos;re losing ground — and what I&apos;d do
                    differently. No pitch, no pressure. You leave with a clear picture either way.
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <PrimaryButton href="/contact" arrow>
                      Book a Free Audit
                    </PrimaryButton>
                    <span className="text-[12px] font-mono text-stone-500">
                      30 min &mdash; completely free
                    </span>
                  </div>
                </div>

                {/* Visual — audit checklist card */}
                <div data-hero-visual className="lg:col-span-6">
                  <div
                    className="rounded-xl border border-stone-200 bg-white overflow-hidden select-none"
                    style={{ boxShadow: "10px 10px 0px 0px #A8CCBF, 0 8px 32px rgba(0,0,0,0.06)" }}
                    role="img"
                    aria-label="Audit review card"
                  >
                    {/* Card header */}
                    <div className="flex items-center gap-3 px-5 py-3.5 border-b border-stone-100 bg-stone-50">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-stone-200" />
                        <div className="w-3 h-3 rounded-full bg-stone-200" />
                        <div className="w-3 h-3 rounded-full bg-stone-200" />
                      </div>
                      <span className="text-[11px] font-mono text-stone-400 mx-auto pr-10">
                        Audit — your-business.com
                      </span>
                    </div>
                    {/* Items */}
                    <div className="divide-y divide-stone-100">
                      {AUDIT_ITEMS.map(({ icon: Icon, label, desc }, i) => (
                        <div key={label} className="flex items-start gap-4 px-5 py-4">
                          <div className="w-8 h-8 rounded-lg bg-[#004D3A]/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                            <Icon className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[13px] font-semibold text-stone-800">{label}</p>
                            <p className="text-[12px] text-stone-500 mt-0.5 leading-snug">{desc}</p>
                          </div>
                          {/* Fake progress indicator */}
                          <div
                            className={`shrink-0 mt-1 w-1.5 h-1.5 rounded-full ${
                              i < 2 ? "bg-emerald-500" : "bg-stone-300"
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                      ))}
                    </div>
                    {/* Footer */}
                    <div className="px-5 py-3.5 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-stone-400">2 of 4 reviewed</span>
                      <span className="text-[11px] font-semibold text-[#004D3A]">In progress</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* ── Two paths after the audit ── */}
          <ServiceSection gradient={0}>
            <section data-fade>
              <p className="section-label mb-5">After the Audit</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-tight tracking-tight max-w-2xl">
                Two ways to work together.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-stone-500 leading-relaxed max-w-lg">
                After the call, you&apos;ll know exactly where you stand. What happens next is up to
                you.
              </p>

              <div className="mt-12 grid md:grid-cols-2 gap-6">
                {/* Path A — Full Presence (featured) */}
                <div className="relative rounded-2xl border border-[#004D3A]/20 bg-[#004D3A] p-7 flex flex-col overflow-hidden">
                  {/* Subtle radial glow */}
                  <div
                    className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1.5">
                        Path A
                      </p>
                      <h3 className="text-xl font-bold font-display text-white">
                        Become a full client
                      </h3>
                    </div>
                    <span className="shrink-0 text-[10px] font-mono font-semibold bg-white/15 text-white px-2.5 py-1 rounded-full tracking-wide">
                      Recommended
                    </span>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    We build your site and work the Full Presence system together — show up on
                    Google, convert the visitors, and keep improving over time. Advisory is included
                    because we&apos;re working together.
                  </p>
                  <div className="mt-auto pt-6">
                    <Link
                      href="/services/web-development"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition-colors"
                    >
                      See what&apos;s included{" "}
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                {/* Path B — AMA */}
                <div className="relative rounded-2xl border border-stone-200 bg-white p-7 flex flex-col">
                  <div className="mb-5">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-1.5">
                      Path B
                    </p>
                    <h3 className="text-xl font-bold font-display text-stone-900">
                      Ask Me Anything
                    </h3>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Not ready for a full build yet? You can keep me in your contacts for questions,
                    second opinions, and guidance whenever you need it — without committing to a
                    bigger project.
                  </p>
                  <p className="mt-4 text-[13px] text-stone-400 font-mono">
                    Starting at $99/mo &middot; cancel anytime
                  </p>
                  <div className="mt-auto pt-5">
                    <Link
                      href="#ama"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-stone-700 transition-colors"
                    >
                      How it works <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </ServiceSection>

          {/* ── Ask Me Anything detail ── */}
          <ServiceSection gradient={1}>
            <section data-fade id="ama">
              <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                {/* Left — copy */}
                <div>
                  <p className="section-label mb-5">Ask Me Anything</p>
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-tight tracking-tight">
                    A tech friend who actually knows your business.
                  </h2>
                  <p className="mt-5 text-base sm:text-lg text-stone-500 leading-relaxed">
                    That&apos;s the whole idea. Text or email whenever you have a question. If
                    it&apos;s easier to talk it through, we jump on a quick call. No agenda, no
                    fifty-slide deck, no sales pitch disguised as advice.
                  </p>
                  <p className="mt-4 text-sm text-stone-500 leading-relaxed">
                    Whether you&apos;re second-guessing an agency quote, trying to figure out why
                    your rankings dropped, or just need a gut-check before spending money on
                    something — you get a straight answer, not a sales pitch.
                  </p>

                  {/* Included */}
                  <div className="mt-10 space-y-3">
                    <p className="text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-4">
                      What&apos;s included
                    </p>
                    {INCLUDED.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className="w-4 h-4 text-[#004D3A] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-stone-600 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Not included */}
                  <div className="mt-7 space-y-3">
                    <p className="text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-4">
                      What it&apos;s not
                    </p>
                    {NOT_INCLUDED.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <XCircle
                          className="w-4 h-4 text-stone-400 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-stone-500 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <PrimaryButton href="/contact" size="sm" arrow>
                      Get Started
                    </PrimaryButton>
                    <p className="mt-3 text-[12px] font-mono text-stone-400">
                      Questions about pricing? See the FAQ below.
                    </p>
                  </div>
                </div>

                {/* Right — phone mockup */}
                <div>
                  <div
                    className="mx-auto max-w-[320px] rounded-[2.5rem] border-[6px] border-stone-800 bg-stone-900 overflow-hidden shadow-2xl shadow-black/30 select-none"
                    role="img"
                    aria-label="Example text conversation with an advisory client"
                  >
                    {/* Phone chrome */}
                    <div className="bg-stone-900 flex items-center justify-between px-5 pt-3 pb-2">
                      <div className="w-16 h-1.5 rounded-full bg-stone-700 mx-auto" />
                    </div>
                    {/* Status bar */}
                    <div className="bg-white px-4 py-2 flex items-center gap-3 border-b border-stone-100">
                      <div className="w-8 h-8 rounded-full bg-[#004D3A] flex items-center justify-center shrink-0">
                        <span className="text-[11px] font-bold text-white">AU</span>
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold text-stone-900">Austin</p>
                        <p className="text-[10px] text-stone-400">Loud Bark</p>
                      </div>
                      <div className="ml-auto flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#004D3A]" aria-hidden="true" />
                        <MessageCircle className="w-3.5 h-3.5 text-[#004D3A]" aria-hidden="true" />
                      </div>
                    </div>
                    {/* Messages */}
                    <div className="bg-white px-3 pt-5 pb-6 space-y-3 min-h-[320px]">
                      <p className="text-center text-[10px] text-stone-400 pb-1">Today</p>
                      {MESSAGES.map((msg, i) => (
                        <div
                          key={i}
                          className={`flex ${msg.from === "me" ? "justify-start" : "justify-end"}`}
                        >
                          <div
                            className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-[12px] leading-snug ${
                              msg.from === "me"
                                ? "bg-[#004D3A] text-white rounded-tl-sm"
                                : "bg-stone-100 text-stone-800 rounded-tr-sm"
                            }`}
                          >
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ServiceSection>

          {/* ── FAQ ── */}
          <ServiceSection gradient={2}>
            <section data-fade>
              <p className="section-label mb-5">FAQ</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 leading-tight tracking-tight max-w-xl mb-10">
                Common questions.
              </h2>
              <div className="max-w-2xl divide-y divide-stone-200 border-y border-stone-200">
                {FAQS.map(({ q, a }) => (
                  <details key={q} className="group">
                    <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none">
                      <span className="text-[15px] font-semibold text-stone-800 group-open:text-[#004D3A] transition-colors">
                        {q}
                      </span>
                      <span
                        className="shrink-0 w-5 h-5 rounded-full border border-stone-300 flex items-center justify-center text-stone-400 group-open:border-[#004D3A]/40 group-open:text-[#004D3A] transition-colors"
                        aria-hidden="true"
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path
                            d="M5 2v6M2 5h6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            className="group-open:[transform:rotate(45deg)] transition-transform duration-200 origin-center"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p className="pb-5 text-sm text-stone-500 leading-relaxed pr-8">{a}</p>
                  </details>
                ))}
              </div>
            </section>
          </ServiceSection>

          {/* ── Final CTA ── */}
          <ServiceSection
            gradient={3}
            padding="section-px pt-10 pb-14 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24"
          >
            <section data-fade>
              <div className="h-px bg-stone-200 mb-14 sm:mb-16" />

              <p className="text-xs font-semibold text-[#004D3A] uppercase tracking-[0.2em] mb-5">
                Start Here
              </p>

              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-stone-900 leading-[1.1] tracking-tight max-w-2xl">
                Book the free audit. <span className="text-stone-400">No strings attached.</span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-stone-500 leading-relaxed max-w-xl">
                Thirty minutes. I&apos;ll tell you what&apos;s working, what isn&apos;t, and what
                I&apos;d do first. Whether we work together after that is entirely up to you.
              </p>

              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#004D3A] hover:text-[#003027] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#004D3A]/40 focus:ring-offset-2"
                >
                  <span>Book a Free Audit</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <span className="text-[11px] font-mono text-stone-500">
                  Or email connect@loudbark.dev
                </span>
              </div>

              <div className="border-t border-stone-200 mt-10 pt-6 flex flex-col sm:flex-row gap-4 sm:gap-8">
                <Link
                  href="/services/web-development"
                  className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors duration-300"
                >
                  Ready for a full site? See Web Development
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/services/growth-strategy"
                  className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors duration-300"
                >
                  Want to rank higher? See SEO & Web Strategy
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
