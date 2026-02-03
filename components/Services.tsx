import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const pillars = [
    {
      id: "01",
      disciplineLabel: "01 // CORE_DISCIPLINE",
      serviceLabel: "AVAILABLE // PRODUCT_ENGINEERING",
      title: "Product Engineering",
      description:
        "Transforming complex visions into production-ready software. I provide the full-stack architecture needed to go from a concept to a live product in weeks, not months.",
      tags: "MVPS // WEB DEV & DESIGN // UI-UX_SYSTEMS",
      ctaText: "START_A_BUILD",
      ctaLink: "/contact",
    },
    {
      id: "02",
      disciplineLabel: "02 // SYSTEM_ORCHESTRATION",
      serviceLabel: "AVAILABLE // SYSTEMS_AUTOMATION",
      title: "Systems & Automation",
      description:
        "Eliminating operational friction by bridging the gap between your tools. I build custom automation scripts, data tools, and API integrations that make your software ecosystem work as a single unit.",
      tags: "DATA_SCRAPING // CUSTOM_TOOLS // API_ORCHESTRATION",
      ctaText: "OPTIMIZE_WORKFLOW",
      ctaLink: "/contact",
    },
    {
      id: "03",
      disciplineLabel: "03 // STRATEGIC_ADVISORY",
      serviceLabel: "AVAILABLE // TECHNICAL_ADVISORY",
      title: "Technical Advisory",
      description:
        'Acting as the "Dev in the room" for business decisions. I provide technical due diligence, software research, and API feasibility audits to ensure your technology choices support your long-term goals.',
      tags: "PLATFORM_AUDITS // TECH_ROADMAPPING // RISK_MITIGATION",
      ctaText: "REQUEST_AUDIT",
      ctaLink: "/contact",
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-32 bg-[#050505]"
      aria-labelledby="services-heading"
    >
      {/* Continuation of Work section glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 120% 80% at 50% 0%, rgba(64, 224, 255, 0.08) 0%, rgba(88, 28, 135, 0.05) 40%, rgba(15, 23, 42, 0.02) 70%, transparent 100%)",
          filter: "blur(150px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1600px] mx-auto px-6 relative">
        {/* Horizontal Service Breadcrumb */}
        <div className="mb-12">
          <p className="font-mono text-[8pt] text-cyber-accent tracking-wider">
            // CORE_CAPABILITIES
          </p>
        </div>

        {/* Three-Pillar Grid with Space Between */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0 -m-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative py-16 px-0 lg:px-12 transition-all duration-300 flex-1"
              style={{ maxWidth: index === 0 ? "none" : undefined }}
            >
              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(64, 224, 255, 0.02) 0%, rgba(88, 28, 135, 0.015) 100%)",
                }}
                aria-hidden="true"
              />

              {/* Vertical divider (appears between columns) */}
              {index < pillars.length - 1 && (
                <>
                  <div
                    className="hidden lg:block absolute right-0 top-0 bottom-0 w-px transition-opacity duration-300"
                    style={{
                      background: "rgba(255, 255, 255, 0.12)",
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="hidden lg:block absolute right-0 top-0 bottom-0 w-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "#40E0FF",
                      boxShadow: "0 0 12px rgba(64, 224, 255, 0.6)",
                    }}
                    aria-hidden="true"
                  />
                </>
              )}

              {/* Content */}
              <div className="relative h-full flex flex-col">
                {/* Discipline Label */}
                <p
                  className="font-mono text-[9pt] mb-8 font-semibold tracking-wider transition-all duration-300"
                  style={{ color: "#40E0FF" }}
                >
                  <span className="group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_rgba(64,224,255,0.6)] transition-all duration-300">
                    [ {pillar.disciplineLabel} ]
                  </span>
                </p>

                {/* Header */}
                <h3 className="text-3xl text-white font-bold mb-6 leading-tight tracking-tight group-hover:text-cyber-accent transition-colors duration-300">
                  {pillar.title}
                </h3>

                {/* Body */}
                <p className="text-base text-cyber-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                  {pillar.description}
                </p>

                {/* Feature Tags */}
                <div className="mb-8">
                  <div className="space-y-2 font-mono text-xs">
                    {pillar.tags.split(" // ").map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="flex items-center gap-2 text-cyber-gray-400 group-hover:text-white transition-colors duration-300"
                      >
                        <div className="w-1 h-1 rounded-full bg-cyber-accent flex-shrink-0" />
                        <span className="tracking-wide">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actionable Footer CTA */}
                <div className="mt-auto pt-6 border-t border-white/8">
                  <Link
                    href={pillar.ctaLink}
                    className="inline-flex items-center gap-1.5 font-mono text-[8px] text-cyber-gray-500 hover:text-cyber-accent transition-colors duration-300 uppercase tracking-wider"
                  >
                    <span>[ {pillar.ctaText} →</span>
                    <span>]</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
