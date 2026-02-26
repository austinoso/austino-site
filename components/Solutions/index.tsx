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
      className="relative w-full pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28 border-b border-white/[0.06]"
      style={{
        backgroundColor: "rgba(6,6,8,0.92)",
        backgroundImage: [
          "radial-gradient(ellipse 70% 50% at 90% 15%, rgba(64,224,255,0.07), rgba(167,139,250,0.05) 50%, transparent 100%)",
          "radial-gradient(ellipse 60% 45% at 5% 80%, rgba(244,114,182,0.05), rgba(167,139,250,0.04) 50%, transparent 100%)",
          "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(64,224,255,0.03), transparent 80%)",
        ].join(", "),
      }}
      aria-labelledby="solutions-heading"
    >
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
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight"
            accentWords={["lead."]}
          />
        </div>

        <div className="space-y-20 sm:space-y-24">
          <OngoingSupport />
          <WebDevelopment />
          <Automation />
        </div>

        {/* Closer — consultative positioning */}
        <div
          data-closer
          className="mt-16 sm:mt-20 pt-10 border-t border-white/[0.06] max-w-2xl"
        >
          <p className="font-display text-2xl sm:text-3xl font-semibold text-cyber-gray-300 leading-snug">
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
