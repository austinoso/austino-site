import { Zap, CheckCircle2 } from "lucide-react";

export default function Integration() {
  return (
    <section data-fade>
      <p className="section-label mb-4">Integration</p>
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        You already pay for the tools. They just don&apos;t talk to each other.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
        Most businesses already use Calendly, QuickBooks, Google Sheets,
        Mailchimp, or a dozen other apps. The problem isn&apos;t the tools.
        It&apos;s the gap between them. That gap is where your time and money
        disappear — and it&apos;s exactly what I fill.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-0">
        {/* Without integration */}
        <div className="lg:pr-12">
          <p className="text-xs font-mono text-cyber-gray-400 uppercase tracking-wider mb-6">
            Without integration
          </p>
          <div className="space-y-4">
            {[
              "A customer reaches out",
              "You log their info in a spreadsheet",
              "You send them an email manually",
              "You update your calendar",
              "You remind yourself to follow up later",
              "You do this 10+ times a week",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <span className="text-xs font-mono text-cyber-gray-500 mt-0.5 w-5 flex-shrink-0 text-right">
                  {i + 1}.
                </span>
                <p
                  className={`text-sm leading-relaxed ${i === 5 ? "text-red-400" : "text-cyber-gray-400"}`}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs font-mono text-cyber-gray-500 tracking-wide">
            ~20 min every time &middot; multiply that by every customer, every
            week
          </p>
        </div>

        {/* Divider */}
        <div className="hidden lg:flex flex-col items-center">
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-cyber-gray-700 to-transparent" />
          <div className="my-4 flex items-center justify-center w-8 h-8 rounded-full border border-cyber-accent/30">
            <Zap className="w-3.5 h-3.5 text-cyber-accent" aria-hidden="true" />
          </div>
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-cyber-gray-700 to-transparent" />
        </div>

        {/* Mobile divider */}
        <div className="lg:hidden flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyber-gray-700 to-transparent" />
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-cyber-accent/30">
            <Zap className="w-3.5 h-3.5 text-cyber-accent" aria-hidden="true" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyber-gray-700 to-transparent" />
        </div>

        {/* With integration */}
        <div className="lg:pl-12">
          <p className="text-xs font-mono text-cyber-accent uppercase tracking-wider mb-6">
            With integration
          </p>
          <div className="space-y-4">
            {[
              "A customer reaches out",
              "Everything else happens automatically",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-xs font-mono text-cyber-accent mt-0.5 w-5 flex-shrink-0 text-right">
                  {i + 1}.
                </span>
                <p className="text-sm text-white leading-relaxed">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
            {[
              "Spreadsheet updated",
              "Email sent",
              "Calendar blocked",
              "Follow-up scheduled",
              "Team notified",
            ].map((task) => (
              <span
                key={task}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyber-accent/80"
              >
                <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                {task}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs font-mono text-cyber-gray-400 tracking-wide">
            Seconds, not minutes. Nothing falls through the cracks.
          </p>
        </div>
      </div>
    </section>
  );
}
