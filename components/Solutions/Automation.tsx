import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AutomationDashboard from "@/components/Solutions/AutomationDashboard";

const capabilities = [
  "Workflow Automation",
  "Software Integration",
  "Go Paperless",
];

export default function Automation() {
  return (
    <div
      data-subsection
      className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start"
    >
      {/* ── Dashboard — left, compact ── */}
      <div data-visual className="order-2 lg:order-1">
        <AutomationDashboard />
      </div>

      {/* ── Content — right ── */}
      <div data-content className="order-1 lg:order-2 space-y-5 lg:pt-4">
        <div className="inline-flex items-center gap-2.5">
          <span className="text-[10px] font-mono text-stone-500 uppercase tracking-[0.15em] border border-stone-200 rounded-full px-2.5 py-0.5">
            Add-on
          </span>
          <span className="text-xs font-semibold text-rose-400 uppercase tracking-[0.2em]">
            Automation
          </span>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-warm-white leading-snug">
          Then automate what slows you&nbsp;down.
        </h3>
        <p className="text-base text-stone-600 leading-relaxed">
          Your site and growth strategy are running. Now let&apos;s eliminate
          the busywork. I find the bottlenecks in your daily operations and
          build custom systems that handle follow-ups, scheduling, and data
          entry on&nbsp;autopilot.
        </p>

        {/* ── Capabilities as inline tags ── */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          {capabilities.map((c) => (
            <span
              data-feature
              key={c}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-rose-200 bg-rose-50 text-sm text-stone-600"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-rose-400/60"
                aria-hidden="true"
              />
              {c}
            </span>
          ))}
        </div>

        <Link
          href="/services/automation"
          className="inline-flex items-center gap-2 text-sm font-mono font-medium text-rose-600 hover:text-rose-700 transition-colors duration-300 mt-1"
        >
          Explore automation{" "}
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
