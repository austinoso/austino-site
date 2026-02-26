import { Settings, Link2, ClipboardList, ArrowRight } from "lucide-react";
import Link from "next/link";
import AutomationDashboard from "@/components/Solutions/AutomationDashboard";

export default function Automation() {
  return (
    <div
      data-subsection
      className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
    >
      <div data-content className="lg:col-span-5 space-y-5">
        <div className="inline-flex items-center gap-2">
          <span className="section-label">Automation</span>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white leading-snug">
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
              <p className="text-sm font-medium text-white">Custom Solutions</p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                Tools built around your specific workflow
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
              <p className="text-sm font-medium text-white">Go Paperless</p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                Replace paper forms with secure digital systems
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

      {/* Live automation dashboard */}
      <div data-visual className="lg:col-span-7">
        <AutomationDashboard />
      </div>
    </div>
  );
}
