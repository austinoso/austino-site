import {
  Paintbrush,
  Search,
  Gauge,
  Smartphone,
  BookOpen,
  BarChart3,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const solutions: {
  icon: LucideIcon;
  solves: string;
  title: string;
  body: string;
}[] = [
  {
    icon: Paintbrush,
    solves: "Trust & bounce rate",
    title: "Custom design that builds credibility",
    body: "No templates. Every layout and interaction is designed to make your business look as good as it actually is.",
  },
  {
    icon: Smartphone,
    solves: "Mobile & phone anxiety",
    title: "Mobile-first with self-service built in",
    body: "Responsive on every device. Online booking, forms, and FAQs so customers can act without picking up the phone.",
  },
  {
    icon: Gauge,
    solves: "Speed & Core Web Vitals",
    title: "Sub-second loads, passing every metric",
    body: "Optimized images, minimal JavaScript, edge-cached globally. Google measures this — and your visitors feel it.",
  },
  {
    icon: Search,
    solves: "Crawlability & structure",
    title: "Technical SEO from the ground up",
    body: "Schema markup, XML sitemap, proper headings, meta tags, and optimized images — so Google understands what you do.",
  },
  {
    icon: BookOpen,
    solves: "Topical authority & E-E-A-T",
    title: "Content that proves your expertise",
    body: "Service pages, FAQs, case studies, and structured content that signal real authority to Google.",
  },
  {
    icon: BarChart3,
    solves: "Local search & conversions",
    title: "Analytics, tracking, and local SEO",
    body: "Google Business integration, local schema, and conversion tracking set up from day one.",
  },
];

function SolutionCard({ s }: { s: (typeof solutions)[number] }) {
  return (
    <div className="border-b border-r border-white/[0.06] p-5 sm:p-7 flex flex-col">
      <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0 mb-4">
        <s.icon className="w-4 h-4 text-cyber-accent" aria-hidden="true" />
      </div>
      <p className="text-[10px] font-mono text-cyber-accent/60 uppercase tracking-widest mb-1.5">
        {s.solves}
      </p>
      <h3 className="text-[15px] font-semibold text-white mb-2">{s.title}</h3>
      <p className="text-sm text-cyber-gray-400 leading-relaxed">{s.body}</p>
    </div>
  );
}

export default function WhatYouGet() {
  return (
    <section data-fade>
      <p className="section-label mb-4">What I Build</p>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        Every problem above has a solution baked into what I build.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-12">
        This isn&apos;t a generic website package. Every deliverable maps
        directly to the trust, speed, and visibility issues that cost small
        businesses real customers.
      </p>

      {/* ── Bento grid — image + 6 solution cards + CTA ── */}
      {/*
        lg (3 cols):
        ┌──────────────────┬──────────┐
        │                  │  Card 1  │
        │      IMAGE       ├──────────┤
        │  (2col, 2rows)   │  Card 2  │
        ├─────────┬────────┼──────────┤
        │ Card 3  │ Card 4 │  Card 5  │
        ├─────────┼────────┴──────────┤
        │ Card 6  │    CTA (2col)     │
        └─────────┴───────────────────┘
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.06]">
        {/* ── Featured image cell — edge-to-edge, no inner card ── */}
        <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 border-b border-r border-white/[0.06] flex flex-col bg-[#0A0A0E]">
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
            src="/assets/mymassagecottage-demo.PNG"
            alt="My Massage Cottage — client website built with custom code"
            width={1200}
            height={900}
            className="w-full h-auto flex-1 object-cover"
          />
          <p className="text-sm text-cyber-gray-400 px-5 py-4 border-t border-white/[0.06]">
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
        </div>

        {/* ── Cards 1–2 — stacked right of image on lg ── */}
        <SolutionCard s={solutions[0]} />
        <SolutionCard s={solutions[1]} />

        {/* ── Cards 3–5 — bottom row on lg ── */}
        <SolutionCard s={solutions[2]} />
        <SolutionCard s={solutions[3]} />
        <SolutionCard s={solutions[4]} />

        {/* ── Card 6 — bottom-left ── */}
        <SolutionCard s={solutions[5]} />

        {/* ── CTA cell — bottom-right spanning 2 cols ── */}
        <div className="md:col-span-1 lg:col-span-2 border-b border-r border-white/[0.06] bg-cyber-accent/[0.03] p-6 sm:p-8 flex flex-col justify-center">
          <p className="text-base text-white font-medium mb-5">
            Ready to turn these problems into a competitive advantage?
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-cyber-accent text-[#060608] font-semibold text-sm rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)] w-full sm:w-auto"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/services/growth-strategy"
              className="inline-flex items-center gap-2 text-sm text-cyber-gray-400 hover:text-cyber-accent transition-colors duration-300"
            >
              Ongoing strategy?
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
