import { Heart, Sparkles, Zap as ZapIcon, ArrowRight } from "lucide-react";
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
        <div className="relative">
          {/* Browser mockup */}
          <div
            className="rounded-xl border border-white/[0.08] bg-[#0C0B09] overflow-hidden"
            style={{
              boxShadow:
                "0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-[#0D0C09]">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/70" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/[0.04] text-[11px] text-stone-500 font-mono">
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
        </div>
      </div>

      <div data-content className="lg:col-span-5 lg:order-2 order-1 space-y-5">
        <div className="inline-flex items-center gap-2">
          <span className="text-xs font-semibold text-warm-gold uppercase tracking-[0.2em]">
            Web Development
          </span>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-warm-white leading-snug">
          Ranks higher. Loads faster. Converts&nbsp;more.
        </h3>
        <p className="text-base text-stone-300 leading-relaxed text-pretty">
          While your competitors sit on slow templates, your site will load
          instantly, rank higher on Google, and turn visitors into paying
          customers. Around the clock.
        </p>
        <div className="pt-4 space-y-4">
          <div data-feature className="flex items-start gap-3">
            <Sparkles
              className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5"
              aria-hidden="true"
              style={{ filter: "drop-shadow(0 0 6px rgba(212,168,83,0.3))" }}
            />
            <p className="text-sm font-medium text-white">
              Design That Builds Trust
            </p>
          </div>
          <div data-feature className="flex items-start gap-3">
            <Heart
              className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5"
              aria-hidden="true"
              style={{ filter: "drop-shadow(0 0 6px rgba(212,168,83,0.3))" }}
            />
            <p className="text-sm font-medium text-white">
              Features Customers Love
            </p>
          </div>
          <div data-feature className="flex items-start gap-3">
            <ZapIcon
              className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5"
              aria-hidden="true"
              style={{ filter: "drop-shadow(0 0 6px rgba(212,168,83,0.3))" }}
            />
            <p className="text-sm font-medium text-white">
              Blazing Fast, Everywhere
            </p>
          </div>
        </div>
        <Link
          href="/services/web-development"
          className="inline-flex items-center gap-2 text-sm font-mono text-warm-gold hover:text-amber-300 transition-colors duration-300 mt-6"
        >
          Explore web development{" "}
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
