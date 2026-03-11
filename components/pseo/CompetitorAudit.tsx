// ── CompetitorAudit — legal pSEO section ──
// Visual audit scorecard showing real scan data as pass/fail rows.
// Styled like a professional report card — wall of red ✗ marks
// tells the story before you read the numbers.

import { FileSearch } from "lucide-react";

export interface AuditRow {
  label: string;
  /** e.g. "79%" */
  pct: string;
  /** e.g. "30/38" */
  fraction: string;
  /** true = bad (red ✗), false = good (green ✓) */
  failing: boolean;
}

interface CompetitorAuditProps {
  sectionLabel: string;
  heading: string;
  subtext: string;
  /** e.g. "42 firms scanned" */
  scanSummary: string;
  /** e.g. "38 sites analyzed" */
  sitesSummary: string;
  rows: AuditRow[];
  source: { label: string; href: string };
}

export default function CompetitorAudit({
  sectionLabel,
  heading,
  subtext,
  scanSummary,
  sitesSummary,
  rows,
  source,
}: CompetitorAuditProps) {
  const failCount = rows.filter((r) => r.failing).length;

  return (
    <section data-fade>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left — heading + context */}
        <div className="lg:col-span-5">
          <p className="section-label mb-5">{sectionLabel}</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-3">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-6">{subtext}</p>

          {/* Summary stats */}
          <div className="flex items-center gap-4 mb-2">
            <span className="font-display text-3xl font-bold text-warm-gold leading-none">
              {failCount}/{rows.length}
            </span>
            <span className="text-sm text-stone-500">categories failing</span>
          </div>
          <p className="text-[13px] text-stone-400 leading-relaxed">
            Based on a scan of {scanSummary} · {sitesSummary}
          </p>
        </div>

        {/* Right — audit scorecard */}
        <div className="lg:col-span-7">
          <div
            className="rounded-xl border border-stone-200 bg-white overflow-hidden"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
          >
            {/* Card header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-stone-200 bg-stone-50/60">
              <div className="flex items-center gap-2.5">
                <FileSearch className="w-4 h-4 text-warm-gold" aria-hidden="true" />
                <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                  Market Audit
                </span>
              </div>
              <span className="text-[11px] font-mono text-stone-400">{scanSummary}</span>
            </div>

            {/* Column headers */}
            <div className="grid grid-cols-[1fr_4.5rem_5rem_2.5rem] items-center px-5 py-2 border-b border-stone-100 bg-stone-50/30">
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                Signal
              </span>
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider text-right">
                Rate
              </span>
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider text-right">
                Count
              </span>
              <span className="sr-only">Status</span>
            </div>

            {/* Audit rows */}
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1fr_4.5rem_5rem_2.5rem] items-center px-5 py-3 ${
                  i < rows.length - 1 ? "border-b border-stone-100" : ""
                } ${row.failing ? "bg-red-50/40" : ""}`}
              >
                <span
                  className={`text-sm leading-snug ${
                    row.failing ? "text-stone-700 font-medium" : "text-stone-500"
                  }`}
                >
                  {row.label}
                </span>
                <span
                  className={`text-sm font-mono text-right ${
                    row.failing ? "text-red-600/80" : "text-emerald-600/80"
                  }`}
                >
                  {row.pct}
                </span>
                <span className="text-xs font-mono text-stone-400 text-right">{row.fraction}</span>
                <span className="flex justify-end" aria-hidden="true">
                  {row.failing ? (
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs font-bold">
                      ✗
                    </span>
                  ) : (
                    <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs font-bold">
                      ✓
                    </span>
                  )}
                </span>
              </div>
            ))}

            {/* Footer source */}
            <div className="px-5 py-3 border-t border-stone-200 bg-stone-50/30">
              <a
                href={source.href}
                className="text-[11px] font-mono text-stone-400 hover:text-stone-600 transition-colors"
              >
                {source.label} ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
