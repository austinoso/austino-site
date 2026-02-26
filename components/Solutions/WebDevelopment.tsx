import {
  Heart,
  Sparkles,
  Zap as ZapIcon,
  ArrowRight,
  Smartphone,
  Zap,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WebDevelopment() {
  return (
    <div
      data-subsection
      className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
    >
      {/* Website preview + overlapping Performance report */}
      <div data-visual className="lg:col-span-7 lg:order-1 order-2">
        <div className="relative pb-12 sm:pb-16">
          {/* Browser mockup */}
          <div
            className="rounded-xl border border-white/[0.08] bg-[#0C0D12] overflow-hidden"
            style={{
              boxShadow:
                "0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.04)",
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
            <div className="relative aspect-[16/9]">
              <Image
                src="/assets/mymassagecottage-demo.PNG"
                alt="My Massage Cottage — client website preview"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Speed test card — overlapping bottom-left */}
          <div
            data-speed-card
            className="absolute -bottom-4 -left-2 sm:-left-6 w-[220px] sm:w-[240px] rounded-xl border border-white/[0.08] bg-[#111318]/95 overflow-hidden"
            style={{
              boxShadow:
                "0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
            }}
          >
            <div className="px-4 py-3 border-b border-white/[0.06] flex items-center justify-between">
              <p className="text-[11px] font-semibold text-white flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-[#4ADE80]" aria-hidden="true" />
                Speed Test
              </p>
            </div>

            <div className="p-4 space-y-3">
              {/* Your site — fast */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-cyber-gray-400">
                    Your site
                  </span>
                  <span
                    data-speed="1.2"
                    className="text-[11px] font-bold text-[#4ADE80] font-mono"
                  >
                    0s
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                  <div
                    data-bar
                    className="h-full rounded-full bg-[#4ADE80]"
                    style={{ width: "25%" }}
                  />
                </div>
              </div>

              {/* Competitor — slow */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-cyber-gray-400">
                    Avg. competitor
                  </span>
                  <span
                    data-speed="4.8"
                    className="text-[11px] font-bold text-cyber-gray-500 font-mono"
                  >
                    0s
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                  <div
                    data-bar
                    className="h-full rounded-full bg-cyber-gray-600"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              {/* Quick stats */}
              <div className="pt-2 border-t border-white/[0.04] flex items-center gap-3">
                <span className="flex items-center gap-1 text-[10px] text-[#4ADE80]">
                  <Smartphone className="w-3 h-3" aria-hidden="true" />
                  Mobile-ready
                </span>
                <span className="flex items-center gap-1 text-[10px] text-[#4ADE80]">
                  <Search className="w-3 h-3" aria-hidden="true" />
                  SEO-optimized
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-content className="lg:col-span-5 lg:order-2 order-1 space-y-5">
        <div className="inline-flex items-center gap-2">
          <span className="section-label">Web Development</span>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white leading-snug">
          A website that outranks, outloads, and outconverts.
        </h3>
        <p className="text-base text-cyber-gray-300 leading-relaxed">
          While your competitors sit on slow templates, your site will load
          instantly, rank higher on Google, and turn visitors into paying
          customers — around the clock.
        </p>
        <div className="pt-4 space-y-4">
          <div data-feature className="flex items-start gap-3">
            <Sparkles
              className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium text-white">
                Design That Builds Trust
              </p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                Professional design and strategic layout that builds credibility
                instantly and moves visitors toward action
              </p>
            </div>
          </div>
          <div data-feature className="flex items-start gap-3">
            <Heart
              className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium text-white">
                Features Customers Love
              </p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                Online booking, ordering, payments &mdash; the convenience that
                keeps people coming back
              </p>
            </div>
          </div>
          <div data-feature className="flex items-start gap-3">
            <ZapIcon
              className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium text-white">
                Blazing Fast, Everywhere
              </p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                Sub-second load times on any device &mdash; because 53% of
                visitors leave if your site takes longer than 3 seconds
              </p>
            </div>
          </div>
        </div>
        <Link
          href="/services/web-development"
          className="inline-flex items-center gap-2 text-sm font-mono text-cyber-accent hover:text-white transition-colors duration-300 mt-6"
        >
          Explore web development{" "}
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
