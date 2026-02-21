import Link from "next/link";
import {
  ArrowRight,
  Eye,
  MousePointerClick,
  CalendarCheck,
  UserCheck,
} from "lucide-react";

const steps = [
  {
    icon: Eye,
    label: "Visitor",
    metric: "finds you online",
    color: "text-cyber-gray-400",
    barWidth: "100%",
    barColor: "bg-white/[0.08]",
  },
  {
    icon: MousePointerClick,
    label: "Engaged",
    metric: "stays & explores",
    color: "text-cyber-gray-300",
    barWidth: "72%",
    barColor: "bg-cyber-accent/20",
  },
  {
    icon: CalendarCheck,
    label: "Lead",
    metric: "books or contacts",
    color: "text-cyber-accent",
    barWidth: "38%",
    barColor: "bg-cyber-accent/40",
  },
  {
    icon: UserCheck,
    label: "Customer",
    metric: "pays & returns",
    color: "text-[#4ADE80]",
    barWidth: "21%",
    barColor: "bg-[#4ADE80]/50",
  },
];

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24 sm:mb-32">
      <div data-hero-copy className="lg:col-span-6 space-y-6">
        <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em]">
          Web Development
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight text-balance">
          Your website could be closing more deals.
        </h1>
        <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed">
          Your customers expect to find answers, book appointments, and place
          orders — all from your website. Let&apos;s be honest, most people
          would rather do everything online than make a call. That&apos;s not
          just good for them — it saves you from answering the same questions on
          repeat.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-7 py-3.5 bg-cyber-accent text-[#050505] font-semibold text-sm rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)]"
        >
          Get a Free Consultation
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>

      {/* Conversion funnel visual */}
      <div data-hero-visual className="lg:col-span-6">
        <div
          className="rounded-xl border border-white/[0.08] bg-[#111318] overflow-hidden"
          style={{
            boxShadow:
              "0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
          }}
        >
          <div className="px-5 py-3.5 border-b border-white/[0.06] bg-[#0D0F13] flex items-center justify-between">
            <p className="text-[11px] font-semibold text-white">
              How your site turns visitors into customers
            </p>
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
              <span className="text-[9px] text-[#4ADE80] font-medium font-mono">
                Optimized
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-6 space-y-4">
            {steps.map((step, i) => (
              <div key={step.label}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg border border-white/[0.06] bg-white/[0.03] flex items-center justify-center flex-shrink-0">
                    <step.icon
                      className={`w-4 h-4 ${step.color}`}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className={`text-sm font-semibold ${step.color}`}>
                        {step.label}
                      </p>
                      <p className="text-[11px] text-cyber-gray-500 font-mono">
                        {step.metric}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden ml-11">
                  <div
                    className={`h-full rounded-full ${step.barColor}`}
                    style={{ width: step.barWidth }}
                  />
                </div>
                {i < steps.length - 1 && (
                  <div className="flex justify-center ml-11 my-1">
                    <div className="w-px h-3 bg-white/[0.06]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="px-5 sm:px-6 py-3.5 border-t border-white/[0.06] bg-[#0D0F13]">
            <p className="text-[11px] text-cyber-gray-500 leading-relaxed">
              Every section of your site should push visitors one step closer to
              becoming a customer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
