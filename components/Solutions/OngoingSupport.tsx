import { Shield, PhoneCall, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { statusItems } from "./data";

export default function OngoingSupport() {
  return (
    <div
      data-subsection
      className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
    >
      <div data-content className="lg:col-span-5 space-y-5">
        <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em]">
          Ongoing Partnership
        </p>
        <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight">
          A developer in your corner, long after launch.
        </h3>
        <p className="text-base text-cyber-gray-300 leading-relaxed">
          Once your site is live, you can keep me on as your go-to technical
          resource — monitoring performance, recommending tools, and building
          new capabilities whenever you&apos;re ready to grow.
        </p>
        <div className="pt-4 space-y-4">
          <div data-feature className="flex items-start gap-3">
            <Shield
              className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium text-white">
                Managed &amp; Monitored
              </p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                Updates, uptime, and security — handled for you
              </p>
            </div>
          </div>
          <div data-feature className="flex items-start gap-3">
            <PhoneCall
              className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium text-white">
                On-Call Consultant
              </p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                Need advice or want to try something new? I&apos;m a call away
              </p>
            </div>
          </div>
          <div data-feature className="flex items-start gap-3">
            <TrendingUp
              className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium text-white">Growth Ready</p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                As your business scales, I build the features to match
              </p>
            </div>
          </div>
        </div>
        <Link
          href="/services/ongoing-support"
          className="inline-flex items-center gap-2 text-sm font-mono text-cyber-accent hover:text-white transition-colors duration-300 mt-6"
        >
          Learn more <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>

      {/* Dashboard mockup */}
      <div data-visual className="lg:col-span-7">
        <div
          className="rounded-xl border border-white/[0.08] bg-[#111318] overflow-hidden"
          style={{
            boxShadow:
              "0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
          }}
        >
          <div className="px-5 py-4 border-b border-white/[0.06] flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Business Dashboard
              </p>
              <p className="text-[11px] text-cyber-gray-500 font-mono mt-0.5">
                Last 30 days
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#4ADE80] animate-pulse" />
              <span className="text-[10px] text-[#4ADE80] font-medium">
                All systems operational
              </span>
            </div>
          </div>

          <div className="p-5 space-y-5">
            {/* Metric cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-4">
                <p className="text-[10px] text-cyber-gray-500 uppercase tracking-wider font-mono mb-1">
                  Visitors
                </p>
                <p
                  data-count="2847"
                  data-suffix=""
                  className="text-2xl font-bold text-white font-mono"
                >
                  0
                </p>
                <p className="text-[10px] text-[#4ADE80] mt-1">
                  ↑ 34% from last month
                </p>
              </div>
              <div className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-4">
                <p className="text-[10px] text-cyber-gray-500 uppercase tracking-wider font-mono mb-1">
                  Conversion Rate
                </p>
                <p
                  data-count="4.8"
                  data-suffix="%"
                  data-decimal="true"
                  className="text-2xl font-bold text-white font-mono"
                >
                  0%
                </p>
                <p className="text-[10px] text-[#4ADE80] mt-1">↑ 1.2% higher</p>
              </div>
            </div>

            {/* Status rows */}
            <div className="space-y-0">
              {statusItems.map((item) => (
                <div
                  data-row
                  key={item.name}
                  className="flex items-center justify-between py-2.5 border-b border-white/[0.04] last:border-0"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
                    <span className="text-sm text-cyber-gray-300">
                      {item.name}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-mono ${item.accent ? "text-[#4ADE80]" : "text-cyber-gray-500"}`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
