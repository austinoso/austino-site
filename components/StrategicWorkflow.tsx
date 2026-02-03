export default function StrategicWorkflow() {
  const steps = [
    {
      id: "01",
      label: "01 // CONSULTATION",
      annotation: "DIAGNOSTIC_AUDIT",
      title: "Initial Consultation",
      description:
        "A high-level call to walk through your ideas, business goals, and project requirements. The focus is purely on understanding what you want to achieve and exploring the vision for the build.",
    },
    {
      id: "02",
      label: "02 // RESEARCH",
      annotation: "PLATFORM_FEASIBILITY",
      title: "Technical Research",
      description:
        "I spend time independently assessing the project's technical viability. I'll look into the logistics to determine how it can be built and what is required to make it happen.",
    },
    {
      id: "03",
      label: "03 // STRATEGY",
      annotation: "TECHNICAL_ROADMAP",
      title: "Roadmap & Strategy",
      description:
        "We reconvene to review my findings. I provide a transparent quote and a clear project roadmap so we can align on the budget and timeline before moving into development.",
    },
    {
      id: "04",
      label: "04 // EXECUTION",
      annotation: "PRODUCTION_CYCLE",
      title: "Execution & Launch",
      description:
        "Once the plan is locked in, the build begins. You'll receive consistent updates through iterative feedback loops to ensure the final shipment is production-ready.",
    },
  ];

  return (
    <section
      id="workflow"
      className="relative w-full py-16 sm:py-24 md:py-32 bg-[#050505]"
      aria-labelledby="workflow-heading"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 50% 50%, rgba(64, 224, 255, 0.04) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <p className="font-mono text-[8pt] text-cyber-accent tracking-wider">
            // STRATEGIC_WORKFLOW
          </p>
        </div>

        {/* Horizontal Timeline Layout */}
        <div className="relative">
          {/* Horizontal Spine/Roadmap Line */}
          <div
            className="hidden lg:block absolute h-px bg-[#1A1A1A]"
            style={{ top: "32px", left: "32px", right: "32px" }}
            aria-hidden="true"
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                {/* Vertical Connector from Badge Down */}
                <div
                  className="hidden lg:block absolute w-px bg-[#1A1A1A]"
                  style={{ top: "64px", height: "24px", left: "32px" }}
                  aria-hidden="true"
                />

                {/* Step Number Badge */}
                <div className="flex justify-start mb-12">
                  <div
                    className="w-16 h-16 rounded-full border-2 flex items-center justify-center font-mono text-base font-bold transition-all duration-300 relative z-10"
                    style={{
                      borderColor: "#1A1A1A",
                      color: "#40E0FF",
                      backgroundColor: "#050505",
                    }}
                  >
                    <span className="group-hover:drop-shadow-[0_0_8px_rgba(64,224,255,0.6)] transition-all duration-300">
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  {/* Step Label */}
                  <p
                    className="font-mono text-[8pt] mb-5 font-semibold tracking-wider"
                    style={{ color: "#40E0FF" }}
                  >
                    [ {step.label} ]
                  </p>

                  {/* Step Title */}
                  <h3 className="text-2xl md:text-2xl text-white font-bold mb-4 leading-tight tracking-tight group-hover:text-cyber-accent transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-base text-cyber-gray-400 leading-relaxed group-hover:text-cyber-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
