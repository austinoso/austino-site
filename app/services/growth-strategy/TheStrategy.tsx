import Link from "next/link";
import {
  FileText,
  Search,
  TrendingUp,
  MapPin,
  Palette,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  FileUp,
} from "lucide-react";

const deliverables = [
  {
    icon: BarChart3,
    label: "Monthly analytics report",
    desc: "A plain-English summary of what changed, what the data shows, and what I'm doing next.",
  },
  {
    icon: Search,
    label: "SEO keyword tracking",
    desc: "I find the exact words your customers are searching and build pages to show up for them.",
  },
  {
    icon: FileText,
    label: "New content pages",
    desc: "Service pages, location pages, FAQs — each one designed to rank for a specific search.",
  },
  {
    icon: TrendingUp,
    label: "Conversion optimization",
    desc: "If visitors aren't booking, I find where they drop off and fix the friction.",
  },
  {
    icon: MapPin,
    label: "Google Business Profile",
    desc: "Photos, posts, review responses — so your listing stands out in the map pack.",
  },
  {
    icon: Palette,
    label: "Ongoing design updates",
    desc: "Seasonal changes, new services, fresh content — your site stays current without you touching it.",
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
    detail: "Targeting 'emergency plumber manteca' — 320 searches/mo",
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
  Content: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  SEO: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  GBP: "bg-sky-500/15 text-sky-400 border-sky-500/20",
  Design: "bg-violet-500/15 text-violet-400 border-violet-500/20",
};

const statusIcon: Record<string, typeof CheckCircle2> = {
  published: FileUp,
  improved: ArrowUpRight,
  fixed: CheckCircle2,
  updated: CheckCircle2,
};

export default function WhatsIncluded() {
  return (
    <section
      data-fade
      className="px-6 sm:px-10 md:px-14 lg:px-20 pb-14 sm:pb-20 md:pb-24"
    >
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-4 max-w-2xl">
        Everything your site needs to{" "}
        <span className="text-gradient-gold">keep growing.</span>
      </h2>
      <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-xl mb-10 sm:mb-12 text-pretty">
        This isn&apos;t a one-time audit or a PDF of recommendations. It&apos;s
        ongoing, hands-on work, every month.
      </p>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left — deliverable list */}
        <div className="lg:col-span-5 space-y-1">
          {deliverables.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.label}
                className="flex items-start gap-3 py-3 px-3 rounded-lg border border-transparent hover:border-white/[0.06] hover:bg-white/[0.02] transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-md bg-warm-gold/10 border border-warm-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon
                    className="w-4 h-4 text-warm-gold/70"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span className="text-sm font-medium text-warm-white block leading-snug">
                    {d.label}
                  </span>
                  <span className="text-[13px] text-stone-400 leading-relaxed block mt-0.5">
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
            className="rounded-xl border border-white/[0.08] bg-warm-surface overflow-hidden"
            style={{
              boxShadow:
                "0 24px 48px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)",
            }}
          >
            {/* Report header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-warm-gold/10 border border-warm-gold/20 flex items-center justify-center">
                  <BarChart3
                    className="w-4 h-4 text-warm-gold"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-warm-white">
                    Growth Report
                  </p>
                  <p className="text-[11px] text-stone-500 font-mono">
                    February 2026
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] text-emerald-400/80 font-mono">
                  Active
                </span>
              </div>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-3 border-b border-white/[0.06]">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="px-5 sm:px-6 py-4 border-r border-white/[0.06] last:border-r-0"
                >
                  <p className="text-[11px] text-stone-500 font-mono uppercase tracking-wider mb-1">
                    {m.label}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-bold font-mono text-warm-white leading-none">
                      {m.value}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-emerald-400">
                      {m.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Activity log */}
            <div className="px-5 sm:px-6 py-4">
              <div className="flex items-center gap-2 mb-4">
                <Clock
                  className="w-3.5 h-3.5 text-stone-500"
                  aria-hidden="true"
                />
                <p className="text-[11px] text-stone-500 font-mono uppercase tracking-wider">
                  This month&apos;s work
                </p>
              </div>
              <div className="space-y-1">
                {activityLog.map((entry, i) => {
                  const StatusIcon = statusIcon[entry.status];
                  return (
                    <div
                      key={i}
                      className="group flex items-start gap-3 py-2.5 px-3 -mx-3 rounded-lg hover:bg-white/[0.02] transition-colors duration-150"
                    >
                      <StatusIcon
                        className="w-4 h-4 text-emerald-400/60 mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                          <span
                            className={`inline-flex text-[10px] font-mono font-medium px-1.5 py-0.5 rounded border ${typeBadgeColor[entry.type]}`}
                          >
                            {entry.type}
                          </span>
                          <span className="text-sm text-warm-white font-medium">
                            {entry.text}
                          </span>
                        </div>
                        <p className="text-xs text-stone-500 leading-relaxed">
                          {entry.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Report footer */}
            <div className="px-5 sm:px-6 py-3 border-t border-white/[0.06] bg-white/[0.02] flex items-center justify-between">
              <p className="text-[11px] text-stone-500">
                5 tasks completed &middot; 0 issues open
              </p>
              <p className="text-[11px] text-stone-500 font-mono">
                Next report: Mar 1, 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Foundation tie-in */}
      <div className="mt-10 sm:mt-12 rounded-lg border border-white/[0.06] bg-white/[0.02] px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div className="flex-1">
          <p className="text-sm sm:text-[15px] text-stone-300 leading-relaxed text-pretty">
            <span className="text-warm-white font-medium">This strategy is built on a foundation Google already loves.</span>{" "}
            Sub-second load times, clean code, zero template bloat. A site people trust and search engines reward.
          </p>
        </div>
        <Link
          href="/services/web-development"
          className="inline-flex items-center gap-2 text-sm font-medium text-warm-gold hover:text-amber-300 transition-colors duration-200 shrink-0 whitespace-nowrap"
        >
          See the web dev service
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
