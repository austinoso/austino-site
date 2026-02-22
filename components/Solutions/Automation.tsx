import { Settings, Link2, ClipboardList, ArrowRight } from "lucide-react";
import Link from "next/link";

/* Static snapshot of the live dashboard — no animation, just a frozen frame */
const SNAPSHOT = [
  {
    label: "New booking received",
    detail: "Jane D. — 60min session",
    accent: "cyan" as const,
    status: "done" as const,
  },
  {
    label: "Confirmation SMS sent",
    detail: "+1 (555) 012-3456",
    accent: "green" as const,
    status: "done" as const,
  },
  {
    label: "Reminder scheduled",
    detail: "24h before appointment",
    accent: "green" as const,
    status: "done" as const,
  },
  {
    label: "Revenue report generated",
    detail: "Emailed to owner",
    accent: "cyan" as const,
    status: "done" as const,
  },
  {
    label: "Low inventory alert",
    detail: "Product #412 — reorder sent",
    accent: "amber" as const,
    status: "done" as const,
  },
  {
    label: "Invoice auto-processed",
    detail: "#1847 — $125.00",
    accent: "green" as const,
    status: "done" as const,
  },
];

function accentText(a: string) {
  return a === "amber"
    ? "text-amber-400"
    : a === "green"
      ? "text-emerald-400"
      : "text-cyan-400";
}
function accentBg(a: string) {
  return a === "amber"
    ? "bg-amber-400/15"
    : a === "green"
      ? "bg-emerald-400/15"
      : "bg-cyan-400/15";
}
function accentLine(a: string) {
  return a === "amber"
    ? "bg-amber-400/50"
    : a === "green"
      ? "bg-emerald-400/50"
      : "bg-cyan-400/50";
}

export default function Automation() {
  return (
    <div
      data-subsection
      className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
    >
      {/* Static dashboard snapshot */}
      <div data-visual className="lg:col-span-7 lg:order-1 order-2">
        <div
          className="rounded-xl border border-white/[0.08] bg-[#0A0E14] overflow-hidden"
          style={{
            boxShadow:
              "0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
          }}
          role="img"
          aria-label="Automation dashboard showing completed tasks"
        >
          {/* Header */}
          <div className="px-4 py-3 border-b border-white/[0.06] bg-[#0D1117] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                  Live
                </span>
              </div>
              <span className="text-xs text-cyber-gray-400 font-medium">
                Activity Monitor
              </span>
            </div>
            <span className="text-[11px] text-cyber-gray-500 font-mono tabular-nums">
              47 processed
            </span>
          </div>

          {/* Feed */}
          <div className="p-3 min-h-[260px]">
            <div className="space-y-0.5">
              {SNAPSHOT.map((task, i) => (
                <div
                  key={i}
                  data-line
                  className="flex items-center gap-3 py-2 px-2.5 rounded-lg"
                >
                  <div className="flex items-center gap-2.5 flex-shrink-0">
                    <div
                      className={`w-0.5 h-8 rounded-full ${accentLine(task.accent)}`}
                    />
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${accentBg(task.accent)}`}
                    >
                      <svg
                        className={`w-3 h-3 ${accentText(task.accent)}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] text-white/90 leading-tight truncate">
                      {task.label}
                    </p>
                    <p className="text-[11px] text-cyber-gray-500 leading-tight mt-0.5 truncate">
                      {task.detail}
                    </p>
                  </div>
                  <span
                    className={`flex-shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full ${accentText(task.accent)} ${accentBg(task.accent)}`}
                  >
                    done
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 py-2.5 border-t border-white/[0.06] bg-[#0D1117]/50 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[11px] text-cyber-gray-500">
                All systems operational
              </span>
            </div>
            <span className="text-[11px] text-emerald-400/70 font-mono">
              ~3.5h saved today
            </span>
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
            <Settings
              className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium text-white">Custom Tooling</p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                Scripts tailored to your unique problems
              </p>
            </div>
          </div>
          <div data-feature className="flex items-start gap-3">
            <Link2
              className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
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
            <ClipboardList
              className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
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
        <Link
          href="/services/automation"
          className="inline-flex items-center gap-2 text-sm font-mono text-cyber-accent hover:text-white transition-colors duration-300 mt-6"
        >
          Explore automation{" "}
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
