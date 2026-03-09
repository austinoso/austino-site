import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { ScrollingScreenshot } from "@/components/ui/ScrollingScreenshot";

const features = [
  "Design That Builds Trust",
  "Booking, Reviews & Payments",
  "Sub-Second Load Times",
];

export default function WebDevelopment() {
  return (
    <div data-subsection>
      {/* ── Label + Heading ── */}
      <div className="mb-10">
        <span className="text-xs font-semibold text-warm-gold uppercase tracking-[0.2em] block mb-5">
          Web Development
        </span>
        <h3 className="font-display text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-warm-white leading-[1.15] tracking-tight max-w-xl">
          Ranks higher. Loads faster. Converts&nbsp;more.
        </h3>
      </div>

      {/* ── Cinematic browser mockup — full width ── */}
      <div data-visual className="relative mb-10 sm:mb-12">
        <BrowserMockup url="mymassagecottage.com">
          <ScrollingScreenshot
            src="/assets/mymassagecottage.com.png"
            alt="My Massage Cottage — full website I designed and built, scrolling through the complete page"
            width={3448}
            height={4886}
          />
        </BrowserMockup>
      </div>

      {/* ── Two-column: description left, features right — mirrors Growth Strategy ── */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left — description + CTA */}
        <div className="flex flex-col justify-between">
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed text-pretty">
            The typical local business site blends in and underperforms. I build sites that match
            how your customers actually search and give them a reason to choose you over the
            next&nbsp;result.
          </p>
          <Link
            href="/services/web-development"
            className="inline-flex self-start items-center gap-2 text-sm font-mono font-medium text-warm-gold hover:text-amber-700 transition-colors duration-300 mt-5"
          >
            Explore web development
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Right — feature pills with warm gold tint */}
        <div className="flex flex-wrap gap-3 items-start content-start">
          {features.map((label) => (
            <span
              data-feature
              key={label}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-stone-200 bg-white text-sm text-stone-600"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-warm-gold/50" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
