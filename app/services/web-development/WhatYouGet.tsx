import {
  Code,
  Search,
  Gauge,
  BarChart3,
  Shield,
  Accessibility,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FeatureCard from "@/components/ui/FeatureCard";

const deliverables: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Code,
    title: "Custom-built for your brand",
    body: "Hand-coded from scratch — no templates, no page builders. Layout, typography, color, and responsive behavior all designed around your business from the ground up.",
  },
  {
    icon: Search,
    title: "Technical SEO baked in",
    body: "Schema markup, meta tags, sitemap, proper heading structure, and optimized images — so Google knows exactly what you do and where you do it.",
  },
  {
    icon: Gauge,
    title: "Sub-second load times",
    body: "Optimized images, minimal JavaScript, edge-cached delivery. Your site loads before they blink.",
  },
  {
    icon: BarChart3,
    title: "Analytics and tracking",
    body: "Analytics and search tracking set up from day one so you can see exactly where traffic comes from and what converts.",
  },
  {
    icon: Shield,
    title: "Hosting and SSL included",
    body: "Deployed to a global CDN with HTTPS, automatic backups, and 99.9% uptime. No separate hosting bill.",
  },
  {
    icon: Accessibility,
    title: "ADA accessibility built in",
    body: "Every site follows WCAG standards \u2014 proper contrast, keyboard navigation, screen reader support. Baked into the code from day one.",
  },
];

export default function WhatYouGet() {
  return (
    <section data-fade>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        Here&apos;s exactly what I build.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
        Every site is hand-coded, designed around your business, and built to
        perform. No templates, no shortcuts.
      </p>

      {/* Browser screenshot */}
      <div
        className="rounded-xl border border-white/[0.08] bg-[#111318] overflow-hidden mb-6 sm:mb-8"
        style={{
          boxShadow:
            "0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
        }}
      >
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-[#0D0F13]">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/70" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/[0.04] text-[11px] text-cyber-gray-500 font-mono">
              mymassagecottage.com
            </div>
          </div>
        </div>
        <Image
          src="/assets/my-massage-cottage-demo.jpg"
          alt="My Massage Cottage — client website built with custom code"
          width={1200}
          height={900}
          className="w-full h-auto"
        />
      </div>

      {/* Case study footnote */}
      <p className="text-sm text-cyber-gray-400 mb-10 sm:mb-12">
        Built in <span className="text-white font-medium">2 weeks</span> and
        ranking on{" "}
        <span className="text-white font-medium">page 1 of Google</span>.{" "}
        <Link
          href="/work/my-massage-cottage"
          className="text-cyber-accent hover:underline"
        >
          Read the case study &rarr;
        </Link>
      </p>

      {/* Feature cards — 3 col grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12">
        {deliverables.map((d) => (
          <FeatureCard
            key={d.title}
            icon={d.icon}
            title={d.title}
            body={d.body}
          />
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
