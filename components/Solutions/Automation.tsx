import { Settings, Link2, ClipboardList, ArrowRight } from "lucide-react";
import Link from "next/link";
import AutomationDashboard from "@/components/Solutions/AutomationDashboard";

export default function Automation() {
  return (
    <div
      data-subsection
      className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
    >
      {/* Live automation dashboard */}
      <div data-visual className="lg:col-span-7 lg:order-1 order-2">
        <AutomationDashboard />
      </div>

      <div data-content className="lg:col-span-5 lg:order-2 order-1 space-y-5">
        <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em]">
          Automation
        </p>
        <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight">
          Speed your competitors don&apos;t have.
        </h3>
        <p className="text-base text-cyber-gray-300 leading-relaxed">
          While other businesses do follow-ups, scheduling, and data entry by
          hand, yours runs on autopilot. I find the bottlenecks and build the
          systems that eliminate them.
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
