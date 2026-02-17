import { Settings, Link2, ClipboardList } from "lucide-react";
import { terminalOutput } from "./data";

export default function Automation() {
  return (
    <div
      data-subsection
      className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
    >
      {/* Terminal mockup */}
      <div data-visual className="lg:col-span-7 lg:order-1 order-2">
        <div
          className="rounded-xl border border-white/[0.08] bg-[#0A0E14] overflow-hidden font-mono"
          style={{
            boxShadow:
              "0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
          }}
        >
          <div className="px-4 py-2.5 border-b border-white/[0.06] bg-[#0D1117] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/70" />
              </div>
              <span className="text-xs text-cyber-gray-500 ml-2">
                automation.sh
              </span>
            </div>
          </div>

          <div className="p-5 space-y-1.5 text-xs sm:text-[13px]">
            {terminalOutput.map((line, i) => {
              if (line.style === "sep") {
                return (
                  <div
                    data-line
                    key={i}
                    className="border-t border-white/[0.06] my-2"
                  />
                );
              }

              const colorClass =
                line.style === "cmd"
                  ? "text-cyber-gray-400"
                  : line.style === "info"
                    ? "text-cyan-300/80 pl-3"
                    : line.style === "ok"
                      ? "text-[#4ADE80] pl-3"
                      : line.style === "data"
                        ? "text-cyber-gray-300 pl-5"
                        : line.style === "accent"
                          ? "text-cyan-400 font-semibold pl-3"
                          : "text-cyber-gray-500";

              return (
                <div data-line key={i} className={colorClass}>
                  {line.style === "cmd" && (
                    <span className="text-cyan-400">$ </span>
                  )}
                  {line.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div data-content className="lg:col-span-5 lg:order-2 order-1 space-y-5">
        <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em]">
          Automation
        </p>
        <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight">
          Replacing manual chores with smart systems.
        </h3>
        <p className="text-base text-cyber-gray-300 leading-relaxed">
          Most local businesses lose hours every day to busy work that can be
          automated. I find those bottlenecks and build the bridges to fix them.
        </p>
        <div className="pt-4 space-y-4">
          <div data-feature className="flex items-start gap-3">
            <Settings className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-white">Custom Tooling</p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                Scripts tailored to your unique problems
              </p>
            </div>
          </div>
          <div data-feature className="flex items-start gap-3">
            <Link2 className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-white">
                Software Integration
              </p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                Connect your tools so they talk automatically
              </p>
            </div>
          </div>
          <div data-feature className="flex items-start gap-3">
            <ClipboardList className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-white">
                Workflow Digitization
              </p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                Paper forms to secure digital systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
