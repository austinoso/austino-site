import { LogOut, PhoneOff, ShieldCheck, Smartphone, Zap } from "lucide-react";

export default function FirstImpressions() {
  return (
    <section data-fade className="mb-24 sm:mb-32">
      <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
        First Impressions
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        A better first impression means better leads.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-12">
        Visitors decide whether to trust you in milliseconds. Design, speed, and
        mobile experience are the first things they judge — and the data backs
        it up.
      </p>

      {/* Bento grid — 5 cells, asymmetric */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5">
        {/* Featured cell — Trust & Credibility — spans 3 cols, 2 rows */}
        <div
          className="md:col-span-3 md:row-span-2 relative rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
          style={{
            boxShadow:
              "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
        >
          {/* Accent glow */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(64,224,255,0.06) 0%, transparent 70%)",
            }}
          />

          <div className="relative p-7 sm:p-9 flex flex-col h-full">
            <div className="w-12 h-12 rounded-full border-2 border-cyber-accent/25 bg-cyber-accent/[0.06] flex items-center justify-center mb-6">
              <ShieldCheck className="w-5 h-5 text-cyber-accent" aria-hidden />
            </div>

            <p className="text-lg sm:text-xl font-semibold text-white mb-3">
              Trust &amp; Credibility
            </p>
            <p className="text-[15px] sm:text-base text-cyber-gray-300 leading-relaxed max-w-md mb-4 flex-1">
              Your website is often the first interaction a potential customer
              has with your business. Before they read a single word,
              they&apos;re already deciding if you look legitimate. An outdated
              layout, broken elements, or generic stock photos signal that the
              business behind it hasn&apos;t kept up either.
            </p>

            <div className="flex items-end gap-4">
              <p className="text-5xl sm:text-6xl font-semibold text-white font-mono tracking-tighter leading-none">
                46%
              </p>
              <div className="pb-1.5">
                <p className="text-sm text-cyber-gray-400 leading-snug">
                  judge credibility based on visual design
                </p>
                <a
                  href="https://credibility.stanford.edu/pdf/Stanford-MakovskyWebCredStudy2002-prelim.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-cyber-accent/60 hover:text-cyber-accent transition-colors font-mono mt-0.5 inline-block"
                >
                  Stanford Web Credibility, 2002 ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Top-right — Visual Design */}
        <div
          className="md:col-span-2 relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7 flex flex-col"
          style={{
            boxShadow:
              "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
              <PhoneOff className="w-4 h-4 text-cyber-accent" aria-hidden />
            </div>
            <p className="text-base font-semibold text-white">Phone Anxiety</p>
          </div>

          <p className="text-[15px] text-cyber-gray-300 leading-relaxed flex-1 mb-5">
            Most younger customers would rather leave your site than pick up the
            phone. If they can&apos;t book or get answers online, they&apos;ll
            find someone where they can.
          </p>

          <div className="flex items-baseline gap-2.5 pt-4 border-t border-white/[0.06]">
            <p className="text-2xl font-semibold text-white font-mono tracking-tight leading-none">
              81%
            </p>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-cyber-gray-400 leading-snug">
                need to build up courage before making a call
              </p>
              <a
                href="https://www.bankmycell.com/blog/why-millennials-ignore-calls"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-cyber-accent/60 hover:text-cyber-accent transition-colors font-mono mt-0.5 inline-block"
              >
                BankMyCell ↗
              </a>
            </div>
          </div>
        </div>

        {/* Mid-right — Mobile */}
        <div
          className="md:col-span-2 relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7 flex flex-col"
          style={{
            boxShadow:
              "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-4 h-4 text-cyber-accent" aria-hidden />
            </div>
            <p className="text-base font-semibold text-white">
              Mobile Experience
            </p>
          </div>

          <p className="text-[15px] text-cyber-gray-300 leading-relaxed flex-1 mb-5">
            Most of your visitors are on their phone. If your site breaks on
            mobile, they&apos;re gone.
          </p>

          <div className="flex items-baseline gap-2.5 pt-4 border-t border-white/[0.06]">
            <p className="text-2xl font-semibold text-white font-mono tracking-tight leading-none">
              50%+
            </p>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-cyber-gray-400 leading-snug">
                of all web traffic is mobile
              </p>
              <a
                href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-cyber-accent/60 hover:text-cyber-accent transition-colors font-mono mt-0.5 inline-block"
              >
                Statcounter, 2025 ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom-left — Speed */}
        <div
          className="md:col-span-2 relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7 flex flex-col"
          style={{
            boxShadow:
              "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 text-cyber-accent" aria-hidden />
            </div>
            <p className="text-base font-semibold text-white">
              Perceived Speed
            </p>
          </div>

          <p className="text-[15px] text-cyber-gray-300 leading-relaxed flex-1 mb-5">
            Visitors equate your site&apos;s speed with your service quality.
            Fast and smooth signals competent and reliable.
          </p>

          <div className="flex items-baseline gap-2.5 pt-4 border-t border-white/[0.06]">
            <p className="text-2xl font-semibold text-white font-mono tracking-tight leading-none">
              3s
            </p>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-cyber-gray-400 leading-snug">
                before bounce probability jumps 32%
              </p>
              <a
                href="https://business.google.com/ca-en/think/marketing-strategies/mobile-page-speed-new-industry-benchmarks/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-cyber-accent/60 hover:text-cyber-accent transition-colors font-mono mt-0.5 inline-block"
              >
                Think with Google ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom-right — Bounce on Bad Design */}
        <div
          className="md:col-span-3 relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7 flex flex-col"
          style={{
            boxShadow:
              "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
              <LogOut className="w-4 h-4 text-cyber-accent" aria-hidden />
            </div>
            <p className="text-base font-semibold text-white">
              Bounce on Bad Design
            </p>
          </div>

          <p className="text-[15px] text-cyber-gray-300 leading-relaxed flex-1 mb-5">
            An unattractive layout doesn&apos;t just look bad — it actively
            drives people away before they even read your offer.
          </p>

          <div className="flex items-baseline gap-2.5 pt-4 border-t border-white/[0.06]">
            <p className="text-2xl font-semibold text-white font-mono tracking-tight leading-none">
              38%
            </p>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-cyber-gray-400 leading-snug">
                stop engaging if the layout is unattractive
              </p>
              <a
                href="https://blog.hubspot.com/marketing/compelling-stats-website-design-optimization-list"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-cyber-accent/60 hover:text-cyber-accent transition-colors font-mono mt-0.5 inline-block"
              >
                Adobe via HubSpot ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
