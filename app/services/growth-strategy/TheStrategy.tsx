import Link from "next/link";
import {
  FileText,
  Search,
  TrendingUp,
  MapPin,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  FileUp,
  LineChart,
  RefreshCw,
} from "lucide-react";

const deliverables = [
  {
    icon: Search,
    label: "Keyword research & targeting",
    desc: "I find what your customers are actually searching for so every page we build answers a real question.",
  },
  {
    icon: FileText,
    label: "Pages built around real searches",
    desc: "Service deep-dives, local landing pages, FAQs. Each one written to be genuinely useful.",
  },
  {
    icon: TrendingUp,
    label: "Conversion tracking & fixes",
    desc: "If visitors aren't booking, I find where they drop off and fix the friction.",
  },
  {
    icon: MapPin,
    label: "Google Business Profile management",
    desc: "Photos, posts, review responses. Your listing stands out in the map pack.",
  },
  {
    icon: RefreshCw,
    label: "Ongoing site updates",
    desc: "Photos, copy changes, new services, seasonal adjustments. Your site stays accurate without you touching it.",
  },
  {
    icon: LineChart,
    label: "Monthly analytics report",
    desc: "A plain-English summary of what changed, what the data shows, and what I'm doing next.",
  },
];

const metrics = [
  { label: "Organic visitors", value: "1,240", change: "+38%" },
  { label: "Keywords top 10", value: "23", change: "+7" },
  { label: "Pages published", value: "4", change: "new" },
];

const activityLog = [
  {
    type: "Content" as const,
    status: "published" as const,
    text: "Service page: Emergency Plumbing Repair",
    detail: "Targeting 'emergency plumber sacramento' — 320 searches/mo",
  },
  {
    type: "SEO" as const,
    status: "improved" as const,
    text: "'plumber near me' moved #8 → #3",
    detail: "Added schema markup + internal links from 3 pages",
  },
  {
    type: "GBP" as const,
    status: "updated" as const,
    text: "Published 4 photos + weekly Google post",
    detail: "Profile views up 28% — 12 new direction requests this month",
  },
  {
    type: "Content" as const,
    status: "published" as const,
    text: "FAQ page: Water Heater Installation",
    detail: "12 questions from actual Google searches in your area",
  },
  {
    type: "Design" as const,
    status: "updated" as const,
    text: "Homepage CTA and booking form redesign",
    detail: "A/B test showed 22% more form submissions",
  },
];

const typeBadgeColor: Record<string, string> = {
  Content: "bg-emerald-500/10 text-[#5C8A64] border-emerald-500/15",
  SEO: "bg-orange-500/10 text-orange-700 border-orange-500/15",
  GBP: "bg-sky-500/10 text-[#4663AC] border-sky-500/15",
  Design: "bg-violet-500/10 text-violet-600 border-violet-500/15",
};

const typeAccentBar: Record<string, string> = {
  Content: "bg-[#5C8A64]/50",
  SEO: "bg-orange-500/40",
  GBP: "bg-[#4663AC]/40",
  Design: "bg-violet-500/40",
};

const typeIconColor: Record<string, string> = {
  Content: "text-[#5C8A64]",
  SEO: "text-orange-600",
  GBP: "text-[#4663AC]",
  Design: "text-violet-500",
};

const statusIcon: Record<string, typeof CheckCircle2> = {
  published: FileUp,
  improved: ArrowUpRight,
  fixed: CheckCircle2,
  updated: CheckCircle2,
};

export default function WhatsIncluded() {
  return (
    <section data-fade className="px-6 sm:px-10 md:px-14 lg:px-20 pb-14 sm:pb-20 md:pb-24">
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-4 max-w-2xl">
        Everything your site needs to <span className="text-[#004D3A]">keep growing.</span>
      </h2>
      <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl mb-10 sm:mb-12 text-pretty">
        This isn&apos;t a one-time audit or a PDF of recommendations. It&apos;s ongoing, hands-on
        work, every month.
      </p>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left — deliverable list */}
        <div className="lg:col-span-5 space-y-1">
          {deliverables.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.label}
                className="flex items-start gap-3 py-3 px-3 rounded-lg border border-transparent hover:border-stone-300 hover:bg-stone-50 transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-md bg-[#004D3A]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-sm font-medium text-warm-white block leading-snug">
                    {d.label}
                  </span>
                  <span className="text-[13px] text-stone-500 leading-relaxed block mt-0.5">
                    {d.desc}
                  </span>
                </div>
              </div>
            );
          })}
          <p className="text-xs text-stone-500 pt-2 pl-3">
            Every deliverable shows up in your monthly report &rarr;
          </p>
        </div>

        {/* Right — monthly report mockup */}
        <div className="lg:col-span-7">
          <div
            className="rounded-xl border border-stone-300 bg-[#F0EAE2] overflow-hidden select-none"
            style={{
              boxShadow: "12px 12px 0px 0px #A8CCBF, 0 8px 32px rgba(0,0,0,0.08)",
            }}
            aria-hidden="true"
          >
            {/* Report header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-stone-300 bg-[#E8E2DA]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#004D3A]/10 border border-[#004D3A]/20 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-900">Growth Report</p>
                  <p className="text-[11px] text-stone-500 font-mono">February 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5C8A64] animate-pulse" />
                <span className="text-[11px] text-[#5C8A64] font-mono">Active</span>
              </div>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-3 border-b border-stone-200/60 bg-[#FDFCFA]">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="px-5 sm:px-6 py-5 border-r border-stone-200/60 last:border-r-0"
                >
                  <p className="text-[11px] text-stone-500 font-mono uppercase tracking-wider mb-1">
                    {m.label}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-bold font-mono text-stone-900 leading-none">
                      {m.value}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-[#5C8A64]">
                      {m.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Activity log */}
            <div className="px-5 sm:px-6 py-5 bg-[#F9F7F4]">
              <div className="flex items-center gap-2 mb-2.5">
                <Clock className="w-3.5 h-3.5 text-stone-400" aria-hidden="true" />
                <p className="text-[11px] text-stone-400 font-mono uppercase tracking-wider">
                  This month&apos;s work
                </p>
              </div>
              <div className="space-y-0">
                {activityLog.map((entry, i) => {
                  const StatusIcon = statusIcon[entry.status];
                  return (
                    <div
                      key={i}
                      className={`group flex items-start gap-3 py-3 px-3 -mx-3 rounded-lg hover:bg-black/[0.02] transition-colors duration-150 ${
                        i > 0 ? "border-t border-stone-200/40" : ""
                      }`}
                    >
                      <StatusIcon
                        className={`w-4 h-4 mt-0.5 shrink-0 ${typeIconColor[entry.type]}`}
                        aria-hidden="true"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                          <span
                            className={`inline-flex text-[10px] font-mono font-medium px-1.5 py-0.5 rounded border ${typeBadgeColor[entry.type]}`}
                          >
                            {entry.type}
                          </span>
                          <span className="text-sm text-stone-800 font-medium">{entry.text}</span>
                        </div>
                        <p className="text-xs text-stone-500 leading-relaxed">{entry.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Report footer */}
            <div className="px-5 sm:px-6 py-3 border-t border-stone-300 bg-[#E8E2DA] flex items-center justify-between">
              <p className="text-[11px] text-stone-500">5 tasks completed &middot; 0 issues open</p>
              <p className="text-[11px] text-stone-500 font-mono">Next report: Mar 1, 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Foundation tie-in */}
      <div className="mt-10 sm:mt-12 rounded-lg border border-stone-200 bg-white px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div className="flex-1">
          <p className="text-sm sm:text-[15px] text-stone-600 leading-relaxed text-pretty">
            <span className="text-warm-white font-medium">
              This strategy is built on a foundation Google already loves.
            </span>{" "}
            Sub-second load times, clean code, zero template bloat. A site people trust and search
            engines reward.
          </p>
        </div>
        <Link
          href="/services/web-development"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#004D3A] hover:text-[#003027] transition-colors duration-200 shrink-0 whitespace-nowrap"
        >
          See the web dev service
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
