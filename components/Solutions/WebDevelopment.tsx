import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    label: "Design That Builds Trust",
    desc: "Custom-crafted for your brand — not a template with your logo pasted on",
  },
  {
    label: "Features Customers Love",
    desc: "Online booking, reviews, payments — the things that actually convert visitors",
  },
  {
    label: "Blazing Fast, Everywhere",
    desc: "Sub-second loads on any device. Google rewards speed with higher rankings",
  },
];

export default function WebDevelopment() {
  return (
    <div data-subsection className="space-y-10">
      {/* ── Header row: text left, performance badge right ── */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <span className="text-xs font-semibold text-warm-gold uppercase tracking-[0.2em] block mb-5">
            Web Development
          </span>
          <h3 className="font-display text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-warm-white leading-[1.15] tracking-tight max-w-xl">
            Ranks higher. Loads faster. Converts&nbsp;more.
          </h3>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed mt-5 max-w-xl text-pretty">
            While your competitors sit on slow templates, your site will load
            instantly, rank higher on Google, and turn visitors into paying
            customers. Around the&nbsp;clock.
          </p>
        </div>

        {/* Performance badge — reinforces the speed/ranking message */}
        <div
          className="hidden md:flex flex-shrink-0 items-center gap-5 rounded-xl border border-stone-200 bg-white/60 px-6 py-5"
          aria-hidden="true"
        >
          {/* Score ring */}
          <div className="relative h-16 w-16 flex-shrink-0">
            <svg viewBox="0 0 48 48" className="h-full w-full -rotate-90">
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="currentColor"
                className="text-stone-200"
                strokeWidth="3"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="url(#perf-grad)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="125.66"
                strokeDashoffset="6.28"
              />
              <defs>
                <linearGradient id="perf-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#16a34a" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-display text-lg font-bold text-green-600">
              95
            </span>
          </div>
          {/* Metric labels */}
          <div className="space-y-1.5 text-xs">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <span className="text-stone-500">Performance</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <span className="text-stone-500">Accessibility</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <span className="text-stone-500">SEO</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Full-width browser mockup ── */}
      <div data-visual>
        <div
          className="rounded-2xl border border-stone-200 bg-white overflow-hidden select-none"
          style={{
            boxShadow:
              "0 32px 64px -16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
          }}
        >
          <div
            className="flex items-center gap-2 px-5 py-3 border-b border-stone-200 bg-stone-50"
            aria-hidden="true"
          >
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/70" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-stone-100 text-[11px] text-stone-500 font-mono">
                mymassagecottage.com
              </div>
            </div>
          </div>
          <div className="relative aspect-[16/10] sm:aspect-[16/9]">
            <Image
              src="/assets/mymassagecottage-demo.PNG"
              alt="My Massage Cottage — client website preview"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* ── Features in cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {features.map((f, i) => (
          <div
            data-feature
            key={i}
            className="rounded-xl border border-stone-200 bg-white/60 p-5 sm:p-6"
          >
            <p className="text-[15px] font-semibold text-warm-white leading-snug">
              {f.label}
            </p>
            <p className="mt-2 text-sm text-stone-500 leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>

      <Link
        href="/services/web-development"
        className="inline-flex items-center gap-2 text-sm font-mono font-medium text-warm-gold hover:text-amber-700 transition-colors duration-300"
      >
        Explore web development{" "}
        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
}
