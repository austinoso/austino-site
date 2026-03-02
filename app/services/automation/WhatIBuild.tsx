import {
  Link2,
  Hammer,
  RefreshCw,
  FileSpreadsheet,
  LayoutDashboard,
  Bell,
} from "lucide-react";

const pillars = [
  {
    icon: Link2,
    label: "Connect what you have",
    heading:
      "Your tools already work. They just don\u2019t talk to each other.",
    body: "You probably pay for Calendly, Google Sheets, QuickBooks, Mailchimp, or a dozen other apps. The problem isn\u2019t the tools. It\u2019s the gaps between them. I write the code that closes those gaps so data flows automatically instead of being copy-pasted by a human.",
    examples: [
      {
        icon: RefreshCw,
        text: "Sync a booking calendar with your CRM and accounting software, automatically",
      },
      {
        icon: FileSpreadsheet,
        text: "A scheduled script that pulls POS data into your revenue spreadsheet every night",
      },
      {
        icon: Bell,
        text: "Auto-send confirmation texts, reminder emails, and follow-up review requests when a new booking comes in",
      },
    ],
    featured: false,
  },
  {
    icon: Hammer,
    label: "Build what you need",
    heading: "When off-the-shelf doesn\u2019t cut it, I build it from scratch.",
    body: "Sometimes the tool you need doesn\u2019t exist yet. A dashboard that shows exactly the metrics you care about. An internal app that replaces three spreadsheets and a whiteboard. If you can describe the problem, I can build the solution.",
    examples: [
      {
        icon: LayoutDashboard,
        text: "Custom dashboards that give you a real-time view of your business: revenue, bookings, inventory, all in one place",
      },
      {
        icon: FileSpreadsheet,
        text: "Internal tools that replace manual processes your team currently does in spreadsheets and sticky notes",
      },
      {
        icon: Bell,
        text: "Alert systems that notify you when something needs attention. Low inventory, missed payments, overdue tasks",
      },
    ],
    featured: true,
  },
] as const;

export default function WhatIBuild() {
  return (
    <section data-fade>
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-warm-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        Custom code, built around how you actually&nbsp;work.
      </h2>
      <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mb-12 sm:mb-16">
        Every business runs differently. I study how your operation works,
        identify what&apos;s costing you time or money, and find the best way to
        fix it. Sometimes that&apos;s custom code. Sometimes it&apos;s an
        existing tool configured the right way. Either way, the solution fits
        your workflow, not the other way around.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        {pillars.map((pillar) => {
          const PillarIcon = pillar.icon;
          return (
            <div
              key={pillar.label}
              className={`rounded-xl p-7 sm:p-8 flex flex-col transition-colors duration-300 ${
                pillar.featured
                  ? "border border-warm-gold/20 bg-warm-gold/[0.03] hover:bg-warm-gold/[0.06] hover:border-warm-gold/30"
                  : "border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.10]"
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-md border border-warm-gold/15 bg-warm-gold/10 flex items-center justify-center flex-shrink-0">
                  <PillarIcon
                    className="w-[18px] h-[18px] text-warm-gold"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-[11px] font-mono text-warm-gold uppercase tracking-wider font-medium">
                  {pillar.label}
                </p>
              </div>

              {/* Copy */}
              <h3 className="text-lg sm:text-xl font-semibold font-display text-warm-white leading-snug tracking-tight mb-3">
                {pillar.heading}
              </h3>
              <p className="text-sm text-stone-400 leading-relaxed mb-8">
                {pillar.body}
              </p>

              {/* Examples */}
              <div className="mt-auto space-y-3.5">
                <p className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                  For example
                </p>
                {pillar.examples.map((ex) => {
                  const ExIcon = ex.icon;
                  return (
                    <div key={ex.text} className="flex items-start gap-3">
                      <ExIcon
                        className="w-3.5 h-3.5 text-warm-gold/60 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <p className="text-sm text-stone-300 leading-relaxed">
                        {ex.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Spectrum callout */}
      <div className="mt-8 sm:mt-10 rounded-lg border border-white/[0.06] bg-white/[0.015] px-6 sm:px-8 py-5 sm:py-6">
        <div>
          <p className="text-sm font-medium text-warm-white mb-1">
            The range is wide, and that&apos;s the point.
          </p>
          <p className="text-sm text-stone-400 leading-relaxed">
            A cron job that syncs a spreadsheet with a CRM. A full custom
            dashboard that replaces four tools. If you can describe the problem,
            I&apos;ll scope a solution that fits your goals and budget.
          </p>
        </div>
      </div>
    </section>
  );
}
