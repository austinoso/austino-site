"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/format-date";
import type { InsightMeta } from "@/lib/insights";

const CATEGORIES = ["All", "SEO", "Web Performance", "Market Data", "Local Market"] as const;

export default function InsightsContent({ insights }: { insights: InsightMeta[] }) {
  const [active, setActive] = useState<string>("All");

  const featured = insights.find((i) => i.featured) || insights[0];
  const filtered = active === "All" ? insights : insights.filter((i) => i.category === active);

  // After filtering, separate featured from rest
  const showFeatured = active === "All" || featured?.category === active;
  const rest = filtered.filter((i) => i.slug !== (showFeatured ? featured?.slug : ""));

  // First 2 get prominent cards, rest go to compact list
  const prominent = rest.slice(0, 2);
  const compact = rest.slice(2);

  return (
    <>
      {/* Category pills */}
      <div className="section-px pb-10 sm:pb-12">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`
                px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200
                ${
                  active === cat
                    ? "bg-warm-white text-white"
                    : "bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-700"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured article — editorial lead */}
      {showFeatured && featured && (
        <section aria-label="Featured article" className="section-px pb-10 sm:pb-14">
          <Link href={`/insights/${featured.slug}`} className="group block">
            <div className="border-l-[3px] border-warm-gold pl-6 sm:pl-8 py-1">
              <span className="inline-block text-[11px] font-mono text-warm-gold uppercase tracking-wider mb-3">
                {featured.category}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold font-display text-warm-white leading-[1.15] tracking-tight mb-3 group-hover:text-warm-gold transition-colors duration-200">
                {featured.title}
              </h2>
              <p className="text-[15px] sm:text-base text-stone-500 leading-relaxed max-w-xl mb-4">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-5 text-xs text-stone-400">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {featured.readTime}
                </span>
                <span className="inline-flex items-center gap-1 text-warm-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-auto">
                  Read <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Prominent cards — first 2 articles */}
      {prominent.length > 0 && (
        <section aria-label="Recent articles" className="section-px pb-10 sm:pb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {prominent.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group rounded-xl border border-stone-200 bg-white p-6 sm:p-7 transition-all duration-200 hover:border-stone-300 hover:shadow-sm"
              >
                <span className="inline-block text-[11px] font-mono text-warm-gold uppercase tracking-wider mb-3">
                  {insight.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-display text-warm-white leading-[1.25] tracking-tight mb-3 group-hover:text-warm-gold transition-colors duration-200">
                  {insight.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-5 line-clamp-2">
                  {insight.excerpt}
                </p>
                <div className="flex items-center gap-5 text-xs text-stone-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    <time dateTime={insight.date}>{formatDate(insight.date)}</time>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    {insight.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Compact list — remaining articles */}
      {compact.length > 0 && (
        <section aria-label="More articles" className="section-px pb-24 sm:pb-28 md:pb-32">
          <div className="border-t border-stone-200">
            {compact.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-5 border-b border-stone-200 transition-colors duration-200 hover:bg-stone-50 -mx-3 px-3 rounded-lg"
              >
                <span className="text-[11px] font-mono text-warm-gold uppercase tracking-wider shrink-0 sm:w-28">
                  {insight.category}
                </span>
                <h3 className="text-[15px] font-semibold text-warm-white leading-snug group-hover:text-warm-gold transition-colors duration-200 flex-1 min-w-0">
                  {insight.title}
                </h3>
                <span className="text-xs text-stone-400 shrink-0 hidden sm:block">
                  <time dateTime={insight.date}>{formatDate(insight.date)}</time>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <section className="section-px pb-24 sm:pb-28 md:pb-32 text-center">
          <p className="text-stone-500 text-[15px]">No articles in this category yet.</p>
        </section>
      )}
    </>
  );
}
