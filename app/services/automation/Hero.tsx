import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ── Static snapshot of the Activity Monitor ──────────────── */
const SNAPSHOT = [
  {
    label: "New booking received",
    detail: "Jane D. — 60min session",
    accent: "gold",
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
    accent: "gold",
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
      : "text-warm-gold";
}
function accentBg(a: string) {
  return a === "amber"
    ? "bg-amber-400/15"
    : a === "green"
      ? "bg-emerald-400/15"
      : "bg-warm-gold/15";
}
function accentLine(a: string) {
  return a === "amber"
    ? "bg-amber-400/50"
    : a === "green"
      ? "bg-emerald-400/50"
      : "bg-warm-gold/50";
}

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-16 sm:pb-20 md:pb-24">
      <div data-hero-copy className="lg:col-span-5 space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-warm-white leading-tight tracking-tight text-balance">
          The $37,000 spreadsheet.
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
          Two hours of manual work a day adds up to over $37,000 in four years.
          Before you count the errors and the missed follow-ups. I build custom
          code that either connects the tools you already use or creates
          entirely new ones, so the repetitive work runs itself.
        </p>

        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:-translate-y-px shadow-lg shadow-amber-600/20 hover:shadow-xl hover:shadow-amber-600/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-warm-bg"
        >
          Get a Free Consultation
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>

      {/* Static Activity Monitor snapshot */}
      <div data-hero-visual className="lg:col-span-7">
        <div
          className="rounded-lg border border-white/[0.08] bg-[#0C0B09] overflow-hidden select-none"
          style={{ boxShadow: '12px 12px 0px 0px #CEC8C1' }}
          role="img"
          aria-label="Automation dashboard showing completed tasks"
          aria-hidden="true"
        >
          {/* Header */}
          <div className="px-4 py-3 border-b border-white/[0.06] bg-[#0F0E0B] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                  Live
                </span>
              </div>
              <span className="text-xs text-stone-400 font-medium">
                Activity Monitor
              </span>
            </div>
            <span className="text-[11px] text-stone-400 font-mono tabular-nums">
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
                    <p className="text-[11px] text-stone-400 leading-tight mt-0.5 truncate">
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
          <div className="px-4 py-2.5 border-t border-white/[0.06] bg-[#0F0E0B] flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[11px] text-stone-400">
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
