import { Bot, Radio, Lightbulb } from "lucide-react";
import { statusItems } from "./data";

export default function OngoingSupport() {
  return (
    <div
      data-subsection
      className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
    >
      <div data-content className="lg:col-span-5 space-y-5">
        <p className="font-mono text-[10px] text-cyber-gray-500 uppercase tracking-[0.2em]">
          Ongoing Support
        </p>
        <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight">
          Your partner for what comes next.
        </h3>
        <p className="text-base text-cyber-gray-300 leading-relaxed">
          You shouldn&apos;t have to be a software expert to grow your business.
          I serve as your technical point of contact whenever you want to
          improve your digital setup.
        </p>
        <div className="pt-4 space-y-4">
          <div data-feature className="flex items-start gap-3">
            <Bot className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-white">Modern Features</p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                AI chatbots, integrations, new capabilities
              </p>
            </div>
          </div>
          <div data-feature className="flex items-start gap-3">
            <Radio className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-white">
                Ongoing Monitoring
              </p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                Constant watch on your site&apos;s health
              </p>
            </div>
          </div>
          <div data-feature className="flex items-start gap-3">
            <Lightbulb className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-white">System Advice</p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                Vet software before it enters your stack
              </p>
            </div>
          </div>
        </div>
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
                Site Health Dashboard
              </p>
              <p className="text-[11px] text-cyber-gray-500 font-mono mt-0.5">
                Last updated: 2 minutes ago
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
                  Uptime
                </p>
                <p
                  data-count="99.9"
                  data-suffix="%"
                  data-decimal="true"
                  className="text-2xl font-bold text-white font-mono"
                >
                  0%
                </p>
                <p className="text-[10px] text-[#4ADE80] mt-1">
                  ↑ 0.1% from last month
                </p>
              </div>
              <div className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-4">
                <p className="text-[10px] text-cyber-gray-500 uppercase tracking-wider font-mono mb-1">
                  Avg Response
                </p>
                <p
                  data-count="127"
                  data-suffix="ms"
                  className="text-2xl font-bold text-white font-mono"
                >
                  0ms
                </p>
                <p className="text-[10px] text-[#4ADE80] mt-1">↓ 23ms faster</p>
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
