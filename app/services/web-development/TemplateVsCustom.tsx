import { Gauge, LayoutTemplate, Code, TrendingUp } from "lucide-react";

const comparisons = [
  {
    icon: Gauge,
    title: "Speed",
    template:
      "Templates ship bloated code for features you\u2019ll never use. Every extra kilobyte slows you down.",
    custom:
      "Custom sites only ship what\u2019s needed. Nothing extra, nothing wasted.",
  },
  {
    icon: LayoutTemplate,
    title: "Design",
    template:
      "50 other businesses bought the same template. Your site looks like everyone else\u2019s.",
    custom:
      "Every section and CTA is designed around how your specific customers think and act.",
  },
  {
    icon: Code,
    title: "SEO",
    template:
      "Template builders often output messy code that Google struggles to read and rank.",
    custom:
      "Hand-coded sites speak Google\u2019s language fluently — clean markup, proper structure, fast loads.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    template:
      "Hit a wall with your template? You\u2019re starting over from scratch.",
    custom:
      "Custom code grows with your business. Need a booking system? A portal? It all plugs in.",
  },
];

export default function TemplateVsCustom() {
  return (
    <section data-fade className="mb-24 sm:mb-32">
      <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
        The Difference
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        Template vs. custom-built.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
        Templates aren&apos;t always bad. But there are real trade-offs most
        people don&apos;t see until it&apos;s too late.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {comparisons.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-white/[0.06] bg-[#111318] p-6 sm:p-8"
            style={{
              boxShadow:
                "0 16px 40px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.02)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                <item.icon
                  className="w-4 h-4 text-cyber-accent"
                  aria-hidden="true"
                />
              </div>
              <p className="text-sm font-semibold text-white">{item.title}</p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-mono text-cyber-gray-500 uppercase tracking-wider mb-1.5">
                  Template
                </p>
                <p className="text-sm text-cyber-gray-400 leading-relaxed">
                  {item.template}
                </p>
              </div>
              <div className="border-t border-white/[0.06] pt-4">
                <p className="text-[10px] font-mono text-cyber-accent uppercase tracking-wider mb-1.5">
                  Custom-built
                </p>
                <p className="text-sm text-cyber-gray-300 leading-relaxed">
                  {item.custom}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
