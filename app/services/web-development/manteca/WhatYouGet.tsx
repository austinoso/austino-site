import {
  Code,
  Search,
  BarChart3,
  Paintbrush,
  Calendar,
  Wrench,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const deliverables: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Code,
    title: "Custom-coded website",
    body: "No templates, no page builders. Clean, fast code that loads in under 2 seconds and is built specifically for your business and your customers in Manteca.",
  },
  {
    icon: Search,
    title: "Local SEO setup",
    body: "Local schema markup, NAP consistency, Google Business Profile integration, XML sitemap, and proper heading structure — everything Google needs to rank you locally.",
  },
  {
    icon: Paintbrush,
    title: "Design that builds trust",
    body: "Professional, mobile-first design that makes your business look as good as it actually is. No stock photos, no generic layouts — just your brand, done right.",
  },
  {
    icon: Calendar,
    title: "Online booking or lead capture",
    body: "Whether your customers need to book appointments, request quotes, or place orders — I'll set up the right tool and integrate it seamlessly into your site.",
  },
  {
    icon: BarChart3,
    title: "Analytics and conversion tracking",
    body: "Google Analytics, Search Console, and conversion tracking set up from day one. You'll know where visitors come from, what they do, and what's working.",
  },
  {
    icon: Wrench,
    title: "Ongoing support and updates",
    body: "Need hours updated, a new service added, or a seasonal promotion? Send me a message and it's done — usually the same day. Your site stays current without you touching code.",
  },
];

export default function WhatYouGet() {
  return (
    <section data-fade>
      <p className="section-label mb-4">What You Get</p>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        Everything your Manteca business needs to get found and convert.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-12">
        Not a vague &ldquo;website package.&rdquo; Every deliverable is
        tied to a specific problem that costs local businesses real
        customers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.06]">
        {deliverables.map((d) => (
          <div
            key={d.title}
            className="border-b border-r border-white/[0.06] p-5 sm:p-7 flex flex-col"
          >
            <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0 mb-4">
              <d.icon
                className="w-4 h-4 text-cyber-accent"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-[15px] font-semibold text-white mb-2">
              {d.title}
            </h3>
            <p className="text-sm text-cyber-gray-400 leading-relaxed">
              {d.body}
            </p>
          </div>
        ))}
      </div>

      {/* CTA bar */}
      <div className="mt-8 rounded-lg border border-white/[0.06] bg-cyber-accent/[0.03] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p className="text-base text-white font-medium">
          Want to see how this would work for your business?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-cyber-accent text-[#060608] font-semibold text-sm rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)] flex-shrink-0"
        >
          Get a Free Local Audit
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
