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

export default function SpecialistDifference() {
  return (
    <section data-fade>
      <p className="section-label mb-4">Why a Specialist</p>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight text-balance mb-8 max-w-2xl">
        Your website deserves someone whose main thing is websites.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white/[0.06]">
        {sections.map((section, si) => (
          <div
            key={si}
            className="border-b border-r border-white/[0.06] p-7 sm:p-9 flex flex-col"
          >
            <div className="w-10 h-10 rounded-full border border-cyber-accent/25 bg-cyber-accent/[0.06] flex items-center justify-center flex-shrink-0 mb-5">
              <section.icon
                className="w-[18px] h-[18px] text-cyber-accent"
                aria-hidden="true"
              />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-semibold text-white leading-snug mb-3">
              {section.heading}
            </h3>
            <p className="text-[15px] text-cyber-gray-300 leading-relaxed flex-1 mb-6">
              {section.body}
            </p>
            <div className="mt-auto pt-6 space-y-2.5">
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
        ))}
      </div>
    </section>
  );
}
