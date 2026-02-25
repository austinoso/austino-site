import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ── Static snapshot of the Activity Monitor ──────────────── */
const SNAPSHOT = [
  {
    label: "New booking received",
    detail: "Jane D. — 60min session",
    accent: "cyan",
  },
  {
    label: "Confirmation SMS sent",
    detail: "+1 (555) 012-3456",
    accent: "green",
  },
  {
    label: "Reminder scheduled",
    detail: "24h before appointment",
    accent: "green",
  },
  {
    label: "Revenue report generated",
    detail: "Emailed to owner",
    accent: "cyan",
  },
  {
    label: "Low inventory alert",
    detail: "Product #412 — reorder sent",
    accent: "amber",
  },
  {
    label: "Invoice auto-processed",
    detail: "#1847 — $125.00",
    accent: "green",
  },
] as const;

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

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <div data-hero-copy className="lg:col-span-5 space-y-6">
        <p className="section-label">Automation</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white leading-tight tracking-tight text-balance">
          The $37,000 spreadsheet.
        </h1>
        <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed">
          Two hours of manual work a day adds up to over $37,000 in four years —
          before you count the errors and the missed follow-ups. That&apos;s a
          lot to spend on a task code can handle in seconds.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-7 py-3.5 bg-cyber-accent text-[#060608] font-semibold text-sm rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)]"
        >
          Get a Free Consultation
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>

      {/* Static Activity Monitor snapshot */}
      <div data-hero-visual className="lg:col-span-7">
        <div
          className="rounded-lg border border-white/[0.06] bg-[#0A0A0E] overflow-hidden"
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
    </section>
  );
}
