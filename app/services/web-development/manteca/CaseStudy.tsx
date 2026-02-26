import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Search,
  Smartphone,
  Calendar,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    label: "Research",
    title: "Found the right tools for her business",
    body: "Before writing a line of code, I evaluated booking platforms to match her workflow and budget — not just the popular option. The right choice meant she wasn't paying for features she'd never use.",
  },
  {
    icon: Smartphone,
    label: "Build",
    title: "Built a site designed to convert",
    body: "Fast, mobile-first, and focused on one thing: making it effortless for someone to find the business, see what's offered, and book an appointment. Services, pricing, and location — all clear, no digging.",
  },
  {
    icon: Calendar,
    label: "Launch",
    title: "Ready to accept bookings from day one",
    body: "Online booking was live before the doors opened. She didn't have to wait weeks for web presence — customers could find and book her the moment she launched.",
  },
  {
    icon: TrendingUp,
    label: "Grow",
    title: "Ongoing content strategy and tracking",
    body: "This isn't a build-and-disappear project. I'm actively working on content strategy, tracking what's working, and building the pages that help her show up in local search results over time.",
  },
];

export default function CaseStudy() {
  return (
    <section id="case-study" data-fade className="scroll-mt-20">
      <p className="section-label mb-4">Local Proof</p>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        How a new Manteca business started getting found.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-12">
        My Massage Cottage came to me with zero online presence and an opening
        day approaching fast. Here&apos;s what I built — and what&apos;s
        happening now.
      </p>

      {/* ── Browser frame with site screenshot ── */}
      <div className="rounded-lg border border-white/[0.06] overflow-hidden bg-[#0A0A0E] mb-10">
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
          alt="My Massage Cottage website — a Manteca massage therapy business built with custom code"
          width={1200}
          height={900}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* ── Steps timeline ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-white/[0.06]">
        {steps.map((step, i) => (
          <div
            key={step.label}
            data-step
            className="border-b border-r border-white/[0.06] p-6 sm:p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
                <step.icon
                  className="w-4 h-4 text-cyber-accent"
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="text-[10px] font-mono text-cyber-accent/60 uppercase tracking-widest">
                  Step {i + 1} — {step.label}
                </p>
                <h3 className="text-[15px] font-semibold text-white">
                  {step.title}
                </h3>
              </div>
            </div>
            <p className="text-sm text-cyber-gray-400 leading-relaxed">
              {step.body}
            </p>
          </div>
        ))}
      </div>

      {/* ── Results + link ── */}
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-lg border border-white/[0.06] bg-white/[0.015] p-6 sm:p-8">
        <div>
          <p className="text-sm font-medium text-white mb-2">
            The result so far:
          </p>
          <ul className="space-y-1.5">
            <li className="flex items-center gap-2 text-sm text-cyber-gray-300">
              <span className="w-1 h-1 rounded-full bg-cyber-accent flex-shrink-0" />
              Accepting online bookings from day one
            </li>
            <li className="flex items-center gap-2 text-sm text-cyber-gray-300">
              <span className="w-1 h-1 rounded-full bg-cyber-accent flex-shrink-0" />
              Fast, mobile-first site that builds trust with new clients
            </li>
            <li className="flex items-center gap-2 text-sm text-cyber-gray-300">
              <span className="w-1 h-1 rounded-full bg-cyber-accent flex-shrink-0" />
              Showing up in local search results and growing
            </li>
            <li className="flex items-center gap-2 text-sm text-cyber-gray-300">
              <span className="w-1 h-1 rounded-full bg-cyber-accent flex-shrink-0" />
              Ongoing content strategy driving organic traffic
            </li>
          </ul>
        </div>
        <Link
          href="/work/my-massage-cottage"
          className="inline-flex items-center gap-2 text-sm text-cyber-accent hover:underline transition-colors flex-shrink-0"
        >
          Read the full case study
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
