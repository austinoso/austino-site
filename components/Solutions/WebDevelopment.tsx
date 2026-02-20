import { Zap, Search, LayoutTemplate, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { scores } from "./data";

export default function WebDevelopment() {
  return (
    <div
      data-subsection
      className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
    >
      <div data-content className="lg:col-span-5 space-y-5">
        <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em]">
          Web Development
        </p>
        <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight">
          Websites that turn visitors into customers.
        </h3>
        <p className="text-base text-cyber-gray-300 leading-relaxed">
          Your website should be bringing in customers around the clock. I build
          fast, search-optimized sites that load instantly, rank locally, and
          make it easy for people to take action.
        </p>
        <div className="pt-4 space-y-4">
          <div data-feature className="flex items-start gap-3">
            <LayoutTemplate
              className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium text-white">Strategic Layout</p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                Every section and CTA designed to move visitors toward action
              </p>
            </div>
          </div>
          <div data-feature className="flex items-start gap-3">
            <Search
              className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium text-white">Found On Google</p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                Technical SEO so local customers find you first
              </p>
            </div>
          </div>
          <div data-feature className="flex items-start gap-3">
            <Zap
              className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium text-white">Built For Speed</p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                Fast loads keep visitors on the page and Google ranking you
                higher
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

      {/* Website preview + overlapping Performance report */}
      <div data-visual className="lg:col-span-7">
        <div className="relative pb-12 sm:pb-16">
          {/* Browser mockup */}
          <div
            className="rounded-xl border border-white/[0.08] bg-[#111318] overflow-hidden"
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
            <div className="relative aspect-[16/9]">
              <Image
                src="/assets/my-massage-cottage-demo.jpg"
                alt="My Massage Cottage — client website preview"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Performance report card — overlapping bottom-right */}
          <div
            className="absolute -bottom-4 -right-2 sm:-right-6 w-[220px] sm:w-[240px] rounded-xl border border-white/[0.08] bg-[#111318]/95 overflow-hidden"
            style={{
              boxShadow:
                "0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="px-4 py-3 border-b border-white/[0.06] flex items-center justify-between">
              <p className="text-[11px] font-semibold text-white">
                Performance
              </p>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
                <span className="text-[9px] text-[#4ADE80] font-medium">
                  All passed
                </span>
              </div>
            </div>

            <div className="p-4 space-y-2">
              {scores.map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="text-[10px] text-cyber-gray-400 w-20 flex-shrink-0">
                    {s.label}
                  </span>
                  <div className="flex-1 h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                    <div
                      data-bar
                      className="h-full rounded-full bg-[#4ADE80]"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                  <span
                    data-score={s.value}
                    className="text-[10px] font-bold text-white w-6 text-right font-mono"
                  >
                    0
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
