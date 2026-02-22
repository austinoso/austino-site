import { CheckCircle2, Clock, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FeatureCard from "@/components/ui/FeatureCard";

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
    <section data-fade className="mb-24 sm:mb-32">
      <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
        Why a Specialist
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-8 max-w-2xl">
        Your website deserves someone whose main thing is websites.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {sections.map((section, si) => (
          <FeatureCard
            key={si}
            icon={section.icon}
            title={section.heading}
            body={section.body}
            layout="stacked"
            accent={true}
            footer={
              <div className="space-y-2.5">
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
            }
          />
        ))}
      </div>
    </section>
  );
}
