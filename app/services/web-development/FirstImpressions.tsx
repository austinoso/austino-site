import { LogOut, PhoneOff, ShieldCheck, Smartphone, Zap } from "lucide-react";

export default function FirstImpressions() {
  return (
    <section data-fade>
      <p className="section-label mb-4">First Impressions</p>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        A better first impression means better leads.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-12">
        Visitors decide whether to trust you in milliseconds. Design, speed, and
        mobile experience are the first things they judge — and the data backs
        it up.
      </p>

      {/* Outlined bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 border-t border-l border-white/[0.06]">
        {/* ── Trust & Credibility — featured, 3 cols × 2 rows ── */}
        <div className="md:col-span-3 md:row-span-2 border-b border-r border-white/[0.06] p-7 sm:p-9 flex flex-col">
          <div className="w-10 h-10 rounded-full border border-cyber-accent/25 bg-cyber-accent/[0.06] flex items-center justify-center flex-shrink-0 mb-5">
            <ShieldCheck
              className="w-[18px] h-[18px] text-cyber-accent"
              aria-hidden="true"
            />
          </div>
          <h3 className="font-display text-lg sm:text-xl font-semibold text-white leading-snug mb-3">
            Trust &amp; Credibility
          </h3>
          <p className="text-[15px] text-cyber-gray-300 leading-relaxed max-w-md flex-1">
            Your website is often the first interaction a potential customer has
            with your business. Before they read a single word, they&apos;re
            already deciding if you look legitimate. An outdated layout, broken
            elements, or generic stock photos signal that the business behind it
            hasn&apos;t kept up either.
          </p>
          <div className="mt-auto pt-6">
            <div className="flex items-end gap-4">
              <span className="font-display text-5xl sm:text-6xl font-bold text-cyber-accent leading-none">
                46%
              </span>
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
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Phone Anxiety ── */}
        <div className="md:col-span-2 border-b border-r border-white/[0.06] p-6 sm:p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
              <PhoneOff
                className="w-[18px] h-[18px] text-cyber-accent"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-[15px] font-semibold text-white">
              Phone Anxiety
            </h3>
          </div>
          <p className="text-sm text-cyber-gray-400 leading-relaxed flex-1">
            Most younger customers would rather leave your site than pick up the
            phone. If they can&apos;t book or get answers online, they&apos;ll
            find someone where they can.
          </p>
          <div className="mt-auto pt-5">
            <div className="flex items-end gap-3">
              <span className="font-display text-3xl sm:text-4xl font-bold text-cyber-accent leading-none">
                81%
              </span>
              <div className="pb-0.5">
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
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile Experience ── */}
        <div className="md:col-span-2 border-b border-r border-white/[0.06] p-6 sm:p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
              <Smartphone
                className="w-[18px] h-[18px] text-cyber-accent"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-[15px] font-semibold text-white">
              Mobile Experience
            </h3>
          </div>
          <p className="text-sm text-cyber-gray-400 leading-relaxed flex-1">
            Most of your visitors are on their phone. If your site breaks on
            mobile, they&apos;re gone.
          </p>
          <div className="mt-auto pt-5">
            <div className="flex items-end gap-3">
              <span className="font-display text-3xl sm:text-4xl font-bold text-cyber-accent leading-none">
                50%+
              </span>
              <div className="pb-0.5">
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
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Perceived Speed ── */}
        <div className="md:col-span-2 border-b border-r border-white/[0.06] p-6 sm:p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
              <Zap
                className="w-[18px] h-[18px] text-cyber-accent"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-[15px] font-semibold text-white">
              Perceived Speed
            </h3>
          </div>
          <p className="text-sm text-cyber-gray-400 leading-relaxed flex-1">
            Visitors equate your site&apos;s speed with your service quality.
            Fast and smooth signals competent and reliable.
          </p>
          <div className="mt-auto pt-5">
            <div className="flex items-end gap-3">
              <span className="font-display text-3xl sm:text-4xl font-bold text-cyber-accent leading-none">
                3s
              </span>
              <div className="pb-0.5">
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
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bounce on Bad Design ── */}
        <div className="md:col-span-3 border-b border-r border-white/[0.06] p-6 sm:p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
              <LogOut
                className="w-[18px] h-[18px] text-cyber-accent"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-[15px] font-semibold text-white">
              Bounce on Bad Design
            </h3>
          </div>
          <p className="text-sm text-cyber-gray-400 leading-relaxed flex-1">
            An unattractive layout doesn&apos;t just look bad — it actively
            drives people away before they even read your offer.
          </p>
          <div className="mt-auto pt-5">
            <div className="flex items-end gap-3">
              <span className="font-display text-3xl sm:text-4xl font-bold text-cyber-accent leading-none">
                38%
              </span>
              <div className="pb-0.5">
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
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
