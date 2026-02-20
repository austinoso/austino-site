import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24 sm:mb-32">
      <div data-hero-copy className="lg:col-span-6 space-y-6">
        <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em]">
          Web Development
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight text-balance">
          Your website could be closing more deals.
        </h1>
        <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed">
          Google uses{" "}
          <a
            href="https://web.dev/articles/vitals"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-accent underline decoration-cyber-accent/30 hover:decoration-cyber-accent transition-colors"
          >
            Core Web Vitals
          </a>{" "}
          — load speed, responsiveness, and visual stability — as direct ranking
          signals. A site that scores well doesn&apos;t just rank higher, it
          converts better. Faster pages mean more trust, fewer bounces, and more
          customers walking through your door.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-7 py-3.5 bg-cyber-accent text-[#050505] font-semibold text-sm rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)]"
        >
          Get a Free Consultation
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>

      {/* Browser mockup + score overlay */}
      <div data-hero-visual className="lg:col-span-6">
        <div className="relative pb-12 sm:pb-16">
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
                priority
              />
            </div>
          </div>

          {/* Lighthouse overlay */}
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
              {[
                { label: "Performance", value: 100 },
                { label: "Accessibility", value: 100 },
                { label: "SEO", value: 100 },
                { label: "Best Practices", value: 100 },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="text-[10px] text-cyber-gray-400 w-20 flex-shrink-0">
                    {s.label}
                  </span>
                  <div className="flex-1 h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#4ADE80]"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-white w-6 text-right font-mono">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
