import { Settings, Link2, ClipboardList, ArrowRight } from "lucide-react";
import Link from "next/link";
import AutomationDashboard from "@/components/Solutions/AutomationDashboard";

export default function Automation() {
  return (
    <div
      data-subsection
      className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
    >
      <div data-content className="lg:col-span-5 lg:order-2 order-1 space-y-5">
        <div className="inline-flex items-center gap-2.5">
          <span className="text-[10px] font-mono text-stone-500 uppercase tracking-[0.15em] border border-white/[0.06] rounded-full px-2.5 py-0.5">
            Add-on
          </span>
          <span className="text-xs font-semibold text-rose-400 uppercase tracking-[0.2em]">
            Automation
          </span>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-warm-white leading-snug">
          Then automate what slows you&nbsp;down.
        </h3>
        <p className="text-base text-stone-300 leading-relaxed">
          Your site and growth strategy are running. Now let&apos;s eliminate
          the busywork. I find the bottlenecks in your daily operations and
          build custom systems that handle follow-ups, scheduling, and data
          entry on&nbsp;autopilot.
        </p>
        <div className="pt-4 space-y-4">
          <div data-feature className="flex items-start gap-3">
            <Settings
              className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5"
              aria-hidden="true"
              style={{ filter: "drop-shadow(0 0 6px rgba(251,113,133,0.3))" }}
            />
            <p className="text-sm font-medium text-white">
              Workflow Automation
            </p>
          </div>
          <div data-feature className="flex items-start gap-3">
            <Link2
              className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5"
              aria-hidden="true"
              style={{ filter: "drop-shadow(0 0 6px rgba(251,113,133,0.3))" }}
            />
            <p className="text-sm font-medium text-white">
              Software Integration
            </p>
          </div>
          <div data-feature className="flex items-start gap-3">
            <ClipboardList
              className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5"
              aria-hidden="true"
              style={{ filter: "drop-shadow(0 0 6px rgba(251,113,133,0.3))" }}
            />
            <p className="text-sm font-medium text-white">Go Paperless</p>
          </div>
        </div>
        <Link
          href="/services/automation"
          className="inline-flex items-center gap-2 text-sm font-mono text-rose-400 hover:text-rose-300 transition-colors duration-300 mt-6"
        >
          Explore automation{" "}
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>

      {/* Live automation dashboard */}
      <div data-visual className="lg:col-span-7 lg:order-1 order-2">
        <AutomationDashboard />
      </div>
    </div>
  );
}
