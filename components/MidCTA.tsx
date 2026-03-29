import { PrimaryButton } from "@/components/ui/PrimaryButton";

/* ────────────────────────────────────────────────────────────────── */
/*  MidCTA — confidence pivot between Services and Case Study        */
/*  Compact summary + single CTA — no heading, body does the work    */
/* ────────────────────────────────────────────────────────────────── */

export default function MidCTA() {
  return (
    <section
      className="relative border-t border-[#A8CCBF] bg-[#C5E8DC] py-14 sm:py-16"
      aria-label="Summary call to action"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 md:px-14 lg:px-20">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-16">
          <div className="border-l-[3px] border-[#004D3A]/40 pl-5">
            <p className="max-w-[28ch] text-[1.35rem] sm:text-[1.6rem] font-semibold text-[#114232] leading-[1.3] tracking-tight">
              You&apos;ll know what I&apos;m doing at each step &mdash; and
              why it matters for your&nbsp;rankings.
            </p>
          </div>

          <div className="flex flex-shrink-0 flex-col items-start sm:items-end gap-3">
            <PrimaryButton
              href="/contact"
              arrow
              data-umami-event="mid-cta-book-call"
            >
              Book a Strategy Call
            </PrimaryButton>
            <p className="text-[11px] font-mono text-[#114232]/40 tracking-[0.12em]">
              Free &mdash; no commitment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
