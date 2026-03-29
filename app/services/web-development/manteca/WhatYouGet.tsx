import {
  Code,
  Search,
  BarChart3,
  Paintbrush,
  Calendar,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

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
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-4 max-w-2xl">
        Everything your Manteca business needs to{" "}
        <span className="text-[#004D3A]">get found and convert.</span>
      </h2>
      <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mb-12">
        Not a vague &ldquo;website package.&rdquo; Every deliverable is tied to a specific problem
        that costs local businesses real customers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {deliverables.map((d) => (
          <div
            key={d.title}
            className="rounded-xl bg-white border border-stone-200 p-6 sm:p-7 transition-colors duration-300 hover:bg-stone-50 hover:border-stone-300"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <d.icon className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
              <h3 className="text-base font-semibold text-warm-white">{d.title}</h3>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">{d.body}</p>
          </div>
        ))}

        {/* Wildcard — custom needs */}
        <div className="rounded-xl border border-[#004D3A]/20 bg-[#004D3A]/[0.03] p-6 sm:p-7 transition-colors duration-300 hover:bg-[#004D3A]/[0.06] hover:border-[#004D3A]/30">
          <div className="flex items-center gap-2.5 mb-2">
            <Wrench className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
            <h3 className="text-base font-semibold text-[#004D3A]">Need something specific?</h3>
          </div>
          <p className="text-sm text-stone-500 leading-relaxed">
            Every business has unique needs. If something isn&apos;t on this list, tell me what it
            is and I&apos;ll build&nbsp;it.
          </p>
        </div>
      </div>

      {/* CTA bar */}
      <div className="mt-8 border-t border-stone-200 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <p className="text-[15px] text-stone-600 leading-relaxed max-w-md">
          Want to see how this would work for your business?
        </p>
        <PrimaryButton href="/contact" size="sm" arrow className="flex-shrink-0">
          Get a Free Local Audit
        </PrimaryButton>
      </div>
    </section>
  );
}
