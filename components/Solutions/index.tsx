import WordReveal from "@/components/ui/WordReveal";
import SolutionsAnimator from "./SolutionsAnimator";
import WebDevelopment from "./WebDevelopment";
import Automation from "./Automation";
import OngoingSupport from "./OngoingSupport";

/* ────────────────────────────────────────────────────────────────── */
/*  Solutions — server component (children are also server components */
/*  except AutomationDashboard which is the only client child)       */
/* ────────────────────────────────────────────────────────────────── */

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden w-full pt-16 pb-0 sm:pt-20 sm:pb-0 md:pt-24 md:pb-0 border-b border-stone-200"
      aria-labelledby="solutions-heading"
    >
      {/* Decorative semicircle — rose, top-right edge */}
      <div
        className="absolute -right-[10rem] sm:-right-[12rem] md:-right-[16rem] -top-[6rem] sm:-top-[8rem] md:-top-[10rem] w-[18rem] h-[18rem] sm:w-[22rem] sm:h-[22rem] md:w-[28rem] md:h-[28rem] rounded-full pointer-events-none"
        style={{ background: "rgba(219, 39, 119, 0.05)" }}
        aria-hidden="true"
      />

      {/* Gradient divider line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(180,83,9,0.10) 25%, rgba(167,139,250,0.08) 50%, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Client-side scroll animations */}
      <SolutionsAnimator />

      <div className="px-6 sm:px-10 md:px-14 lg:px-20 relative">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <p data-animate="label" className="section-label mb-5">
            The Edge
          </p>
          <WordReveal
            text="How you take the lead."
            id="solutions-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white leading-[1.1] tracking-tight"
            accentWords={["lead."]}
          />
        </div>

        <div>
          {/* ── Core offering: Build + Grow ── */}
          <WebDevelopment />

          <div className="mt-20 sm:mt-24">
            <OngoingSupport />
          </div>

          {/* ── Optional add-on: Automation ── */}
          <div className="mt-20 sm:mt-24 pt-12 sm:pt-14 border-t border-stone-200">
            <Automation />
          </div>
        </div>

        {/* Closer — consultative positioning — elevated as visual anchor */}
        <div
          data-closer
          className="mt-20 sm:mt-28 py-12 sm:py-16 -mx-6 sm:-mx-10 md:-mx-14 lg:-mx-20 px-6 sm:px-10 md:px-14 lg:px-20 border-y border-stone-200"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(251,191,36,0.04), transparent 80%)",
          }}
        >
          <p className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.15] tracking-tight max-w-3xl">
            I only work with one business per niche in your area.{" "}
            <span className="text-gradient">
              Your competition won&apos;t get this from me.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
