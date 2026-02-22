import { LogOut, PhoneOff, ShieldCheck, Smartphone, Zap } from "lucide-react";
import FeatureCard from "@/components/ui/FeatureCard";

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
        <FeatureCard
          icon={ShieldCheck}
          title="Trust & Credibility"
          body="Your website is often the first interaction a potential customer has with your business. Before they read a single word, they're already deciding if you look legitimate. An outdated layout, broken elements, or generic stock photos signal that the business behind it hasn't kept up either."
          layout="stacked"
          accent={true}
          className="md:col-span-3 md:row-span-2 h-full"
          footer={
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
          }
        />

        {/* Top-right — Phone Anxiety */}
        <FeatureCard
          icon={PhoneOff}
          title="Phone Anxiety"
          body="Most younger customers would rather leave your site than pick up the phone. If they can't book or get answers online, they'll find someone where they can."
          layout="inline"
          className="md:col-span-2"
          footer={
            <div className="flex items-baseline gap-2.5">
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
          }
        />

        {/* Mid-right — Mobile Experience */}
        <FeatureCard
          icon={Smartphone}
          title="Mobile Experience"
          body="Most of your visitors are on their phone. If your site breaks on mobile, they're gone."
          layout="inline"
          className="md:col-span-2"
          footer={
            <div className="flex items-baseline gap-2.5">
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
          }
        />

        {/* Bottom-left — Perceived Speed */}
        <FeatureCard
          icon={Zap}
          title="Perceived Speed"
          body="Visitors equate your site's speed with your service quality. Fast and smooth signals competent and reliable."
          layout="inline"
          className="md:col-span-2"
          footer={
            <div className="flex items-baseline gap-2.5">
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
          }
        />

        {/* Bottom-right — Bounce on Bad Design */}
        <FeatureCard
          icon={LogOut}
          title="Bounce on Bad Design"
          body="An unattractive layout doesn't just look bad — it actively drives people away before they even read your offer."
          layout="inline"
          className="md:col-span-3"
          footer={
            <div className="flex items-baseline gap-2.5">
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
          }
        />
      </div>
    </section>
  );
}
