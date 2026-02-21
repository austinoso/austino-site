import { CheckCircle2, Clock, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const sections: {
  icon: LucideIcon;
  heading: string;
  body: string;
  points: string[];
}[] = [
  {
    icon: Clock,
    heading: "The real cost of doing it yourself",
    body: "DIY can work — but the hours add up fast, and the real gap isn't the tool. It's knowing what makes visitors trust you, stick around, and reach out.",
    points: [
      "Depending on how you value your time, DIY can quietly cost as much as hiring someone",
      "A site that looks finished isn't the same as one built to convert",
      "It's like representing yourself in court — you can, but there's a reason people hire a specialist",
    ],
  },
  {
    icon: Users,
    heading: "Your team builds the message. I build the machine.",
    body: "A marketing team can put together a great-looking site with solid copy. What they can't do is build the features that keep people coming back — estimators, booking flows, interactive tools, and performance tuned at the code level.",
    points: [
      "Custom features your visitors actually want to use, not just read",
      "Booking, estimators, and dashboards that close leads",
      "Performance and SEO tuned at the code level, not a plugin",
    ],
  },
];

const cardStyle = {
  boxShadow:
    "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
};

export default function SpecialistDifference() {
  return (
    <section data-fade className="mb-24 sm:mb-32">
      <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
        Why a Specialist
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-8 max-w-2xl">
        Your website deserves someone whose main thing is websites.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {sections.map((section, si) => (
          <div
            key={si}
            className="relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 overflow-hidden flex flex-col"
            style={cardStyle}
          >
            {/* Accent glow */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(64,224,255,0.05) 0%, transparent 70%)",
              }}
            />

            <div className="relative flex-1 flex flex-col">
              <div className="w-10 h-10 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.06] flex items-center justify-center mb-5">
                <section.icon
                  className="w-[18px] h-[18px] text-cyber-accent"
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
                {section.heading}
              </h3>
              <p className="text-[15px] text-cyber-gray-300 leading-relaxed mb-6 flex-1">
                {section.body}
              </p>

              <div className="space-y-2.5 pt-5 border-t border-white/[0.06]">
                {section.points.map((point, pi) => (
                  <div key={pi} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-cyber-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
