import Link from "next/link";
import { ArrowRight, Bell, Smartphone, Search, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-start pb-0">
      <div data-hero-copy className="lg:col-span-6 space-y-6 lg:py-10">
        <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold font-display text-warm-white leading-[1.1] tracking-tight text-balance">
          Your website could be closing{" "}
          <span className="text-gradient-gold">more deals.</span>
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed text-balance">
          Your customers want to book appointments, place orders, and get
          answers without picking up the phone. If they can&apos;t do it on your
          website, they&apos;ll do it on someone else&apos;s.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:-translate-y-px shadow-lg shadow-amber-600/20 hover:shadow-xl hover:shadow-amber-600/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-warm-bg"
        >
          Get a Free Consultation
          <ArrowRight
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* Phone mockup — what the customer actually sees */}
      <div
        data-hero-visual
        className="lg:col-span-6 relative select-none"
        aria-hidden="true"
      >
        <div className="flex justify-center items-start max-h-[300px] sm:max-h-none overflow-hidden">
          <div className="relative w-full max-w-[320px] sm:w-[300px] sm:max-w-none mt-0 sm:mt-6 lg:mt-0">
            {/* ── Floating cards ── */}

            {/* Notification card — top-left */}
            <div
              className="hidden sm:block absolute top-6 -left-10 sm:-left-16 z-10 w-[180px] rounded-xl border border-stone-200 bg-warm-surface/95 p-3 backdrop-blur-sm"
              style={{
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.08), 0 0 20px rgba(212,168,83,0.06)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-warm-green/10 border border-warm-green/20 flex items-center justify-center flex-shrink-0">
                  <Bell
                    className="w-3.5 h-3.5 text-warm-green"
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-warm-white leading-tight">
                    New booking
                  </p>
                  <p className="text-[9px] text-stone-500">Just now</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-warm-green/[0.06] border border-warm-green/10">
                <span className="h-1 w-1 rounded-full bg-warm-green animate-pulse" />
                <span className="text-[9px] text-warm-green/80 font-mono">
                  Jane D. — 60 min session
                </span>
              </div>
            </div>

            {/* Speed card — bottom-left */}
            <div
              className="hidden sm:block absolute top-[52%] -left-8 sm:-left-14 z-10 w-[150px] rounded-xl border border-stone-200 bg-warm-surface/95 p-3 backdrop-blur-sm"
              style={{
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.08), 0 0 20px rgba(212,168,83,0.06)",
              }}
            >
              <p className="text-[9px] text-stone-500 uppercase tracking-wider font-mono mb-1.5">
                Load time
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold text-warm-green font-mono leading-none">
                  1.2
                </span>
                <span className="text-[10px] text-warm-green/70 font-mono">
                  sec
                </span>
              </div>
              <div className="mt-2 h-1 rounded-full bg-stone-200 overflow-hidden">
                <div className="h-full w-[25%] rounded-full bg-warm-green/60" />
              </div>
              <p className="text-[8px] text-stone-500 mt-1">
                Avg competitor: 4.8s
              </p>
            </div>

            {/* SEO + Mobile card — right */}
            <div
              className="hidden sm:block absolute top-20 -right-8 sm:-right-16 z-10 w-[140px] rounded-xl border border-stone-200 bg-warm-surface/95 p-3 backdrop-blur-sm"
              style={{
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.08), 0 0 20px rgba(212,168,83,0.06)",
              }}
            >
              <p className="text-[9px] text-stone-500 uppercase tracking-wider font-mono mb-2">
                Site status
              </p>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-warm-gold/10 border border-warm-gold/20 flex items-center justify-center">
                    <Search
                      className="w-2.5 h-2.5 text-warm-gold"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-[9px] font-medium text-warm-white leading-tight">
                      SEO
                    </p>
                    <p className="text-[8px] text-warm-green">Optimized</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-warm-gold/10 border border-warm-gold/20 flex items-center justify-center">
                    <Smartphone
                      className="w-2.5 h-2.5 text-warm-gold"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-[9px] font-medium text-warm-white leading-tight">
                      Mobile
                    </p>
                    <p className="text-[8px] text-warm-green">Responsive</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Phone frame ── */}
            <div
              className="relative rounded-t-[2.5rem] border-[3px] border-b-0 border-stone-300 bg-[#0C0B09] overflow-hidden shadow-2xl"
              style={{
                boxShadow:
                  "0 32px 64px -16px rgba(0,0,0,0.25), inset 0 0 20px rgba(0,0,0,0.3)",
              }}
            >
              {/* Dynamic Island */}
              <div className="flex justify-center pt-3 pb-2 bg-[#0C0B09]">
                <div className="w-[90px] h-[22px] rounded-full bg-[#000] border border-white/[0.08]" />
              </div>

              {/* Screen content — mini business website */}
              <div className="px-4 pb-8 space-y-4 bg-[#100F0C]">
                {/* Mini nav bar */}
                <div className="flex items-center justify-between py-2">
                  <span className="text-[10px] font-bold text-white tracking-wide">
                    YourBusiness
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] text-stone-500">Services</span>
                    <span className="text-[8px] text-stone-500">About</span>
                    <span className="text-[8px] text-stone-500">Contact</span>
                  </div>
                </div>

                {/* Hero area */}
                <div className="rounded-lg bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.06] p-4">
                  <p className="text-[9px] text-stone-500 font-mono uppercase tracking-wider mb-1">
                    Manteca, CA
                  </p>
                  <p className="text-sm font-bold text-white leading-snug mb-1">
                    Expert care you can trust.
                  </p>
                  <p className="text-[9px] text-stone-400 leading-relaxed mb-3">
                    Professional service with online booking &mdash; available
                    24/7.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1.5 bg-amber-400 text-warm-bg text-[9px] font-bold rounded-md">
                      Book Now
                    </span>
                    <span className="px-3 py-1.5 border border-white/[0.1] text-[9px] text-white rounded-md">
                      Learn More
                    </span>
                  </div>
                </div>

                {/* Reviews */}
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="w-2.5 h-2.5 fill-amber-400 text-amber-400"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="text-[9px] text-stone-400">
                      4.9 (84 reviews)
                    </span>
                  </div>
                  <p className="text-[9px] text-stone-300 italic leading-relaxed">
                    &ldquo;Booked online in seconds. Best experience
                    I&apos;ve&nbsp;had!&rdquo;
                  </p>
                  <p className="text-[8px] text-stone-500 mt-1">
                    — Sarah M., verified customer
                  </p>
                </div>

                {/* Quick services */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5 text-center">
                    <p className="text-[9px] font-medium text-white">
                      Online Booking
                    </p>
                    <p className="text-[8px] text-stone-500 mt-0.5">
                      24/7 available
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5 text-center">
                    <p className="text-[9px] font-medium text-white">
                      Instant Answers
                    </p>
                    <p className="text-[8px] text-stone-500 mt-0.5">
                      FAQ & pricing
                    </p>
                  </div>
                </div>

                {/* Services list — extends past the clip */}
                <div className="space-y-2">
                  <p className="text-[10px] font-semibold text-white">
                    Popular Services
                  </p>
                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-medium text-white">
                        Deep Tissue Massage
                      </p>
                      <p className="text-[8px] text-stone-500">60 min · $85</p>
                    </div>
                    <span className="px-2 py-1 bg-amber-500/15 text-[8px] font-semibold text-amber-300 rounded">
                      Book
                    </span>
                  </div>
                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-medium text-white">
                        Sports Recovery
                      </p>
                      <p className="text-[8px] text-stone-500">90 min · $120</p>
                    </div>
                    <span className="px-2 py-1 bg-amber-500/15 text-[8px] font-semibold text-amber-300 rounded">
                      Book
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom fade — crops phone on mobile */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-bg to-transparent sm:hidden pointer-events-none" />
      </div>
    </section>
  );
}
