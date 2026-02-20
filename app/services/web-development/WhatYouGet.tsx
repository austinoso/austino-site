import {
  Code,
  Palette,
  Search,
  Smartphone,
  Gauge,
  BarChart3,
  Shield,
  Accessibility,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const deliverables = [
  {
    icon: Code,
    title: "Custom code, no templates",
    detail:
      "Built from scratch in Next.js. No page builders, no bloat, no shared themes — just clean code written for your business.",
  },
  {
    icon: Palette,
    title: "Design tailored to your brand",
    detail:
      "Layout, typography, and color all designed around your services and audience. Every section has a job.",
  },
  {
    icon: Search,
    title: "Technical SEO baked in",
    detail:
      "Schema markup, meta tags, sitemap, proper heading structure, and optimized images — so Google knows exactly what you do and where you do it.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first responsive design",
    detail:
      "Designed for phones first, then scaled up. Looks sharp on every screen size.",
  },
  {
    icon: Gauge,
    title: "Sub-second load times",
    detail:
      "Optimized images, minimal JavaScript, edge-cached delivery. Your site loads before they blink.",
  },
  {
    icon: BarChart3,
    title: "Analytics and tracking",
    detail:
      "Google Analytics and Search Console set up from day one so you can see exactly where traffic comes from and what converts.",
  },
  {
    icon: Shield,
    title: "Hosting and SSL included",
    detail:
      "Deployed to a global CDN with HTTPS, automatic backups, and 99.9% uptime. No separate hosting bill.",
  },
  {
    icon: Accessibility,
    title: "ADA accessibility built in",
    detail:
      "Every site I build follows WCAG accessibility standards \u2014 proper contrast, keyboard navigation, screen reader support. It\u2019s not an afterthought. It\u2019s baked into the code from day one.",
  },
];

export default function WhatYouGet() {
  return (
    <section data-fade>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        Here&apos;s exactly what I build to fix it.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
        Every site is hand-coded, designed around your business, and built to
        perform. No templates, no shortcuts.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {deliverables.map((item) => (
          <div
            key={item.title}
            className="group relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6 transition-colors hover:border-cyber-accent/15 hover:bg-white/[0.03]"
            style={{
              boxShadow:
                "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
            }}
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center">
                <item.icon className="w-[18px] h-[18px] text-cyber-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-[15px] font-semibold text-white mb-1">
                  {item.title}
                </p>
                <p className="text-sm text-cyber-gray-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inline CTA */}
      <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-cyber-accent text-[#050505] font-semibold text-sm rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)] w-full sm:w-auto"
        >
          Get a Free Consultation
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
        <p className="text-sm text-cyber-gray-400">
          No commitment, no pressure — just a clear plan for your site.
        </p>
      </div>
    </section>
  );
}
