import Link from "next/link";
import Image from "next/image";

const TECH_STACK = [
  "TypeScript",
  "React",
  "Node.js",
  "SQL",
  "Next.js",
  "Python",
  "Docker",
  "Supabase",
  "Expo",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-[#050505] overflow-hidden flex flex-col"
      aria-labelledby="hero-heading"
    >
      {/* Large radial gradient for 3D depth effect */}
      <div
        className="absolute inset-0 bg-gradient-radial from-[#0A0E14] via-[#050505] to-[#050505] opacity-90"
        aria-hidden="true"
      />

      {/* Background Layer - Subtle geometric depth element */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-[800px] h-[800px] rounded-full border border-white/[0.02]"
          style={{
            boxShadow: "inset 0 0 100px rgba(255,255,255,0.01)",
          }}
        />
      </div>

      {/* Main Content - Asymmetric 60/40 Split */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-32 sm:pt-36 md:pt-40 lg:pt-32 flex-1 flex items-center">
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-20 items-center w-full">
          {/* Left Column (60%) - The Pitch */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6">
            {/* Ribbon - Left-aligned with refined spacing */}
            <p className="font-mono text-[9px] sm:text-[10px] text-cyber-gray-500 uppercase tracking-[0.2em] font-normal">
              EST. 2020 // 6+ YEARS EXPERIENCE // FULL-STACK DEVELOPMENT
            </p>

            {/* H1 - Bold and Direct with tighter line-height */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
            >
              A Technical Partner for Your Next Idea.
            </h1>

            {/* Sub-headline with better spacing */}
            <p className="text-lg sm:text-xl md:text-2xl text-cyber-gray-300 max-w-2xl leading-relaxed">
              I work with clients to build custom software, web apps, and
              digital tools—focusing on logistics and feasibility so your
              project launches on a solid foundation.
            </p>

            {/* Availability Badge */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-cyber-accent animate-ping opacity-75" />
              </div>
              <span className="text-sm font-mono text-cyber-gray-400 tracking-wide">
                Available for Select Projects
              </span>
            </div>

            {/* Primary CTA with hover glow */}
            <div className="pt-2 sm:pt-4">
              <Link
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#050505] font-semibold rounded-lg transition-all text-sm sm:text-base shadow-lg shadow-white/10"
                aria-label="Start a conversation"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* Right Column (40%) - The Proof */}
          <div className="lg:col-span-2 relative">
            {/* 3D Mockup Container */}
            <div className="relative">
              {/* Floating Glass Image - Enhanced visibility */}
              <div
                className="relative transform lg:rotate-2 p-4 rounded-2xl"
                style={{
                  transformStyle: "preserve-3d",
                  backgroundColor: "#1a2c38",
                  boxShadow:
                    "0 0 60px rgba(64, 224, 255, 0.15), 0 20px 40px rgba(0, 0, 0, 0.4)",
                }}
              >
                {/* Mockup Content - Stake Sight Demo with floating glass effect */}
                <div
                  className="relative aspect-video overflow-hidden"
                  style={{
                    borderRadius: "8px",
                    border: "2px solid rgba(64, 224, 255, 0.2)",
                    boxShadow: "inset 0 0 20px rgba(64, 224, 255, 0.1)",
                  }}
                >
                  <Image
                    src="/assets/stake-sight-demo.PNG"
                    alt="Stake Sight - Data Orchestration Platform Demo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Soft Mesh Gradient Glow - Spills into background and behind text */}
              <div
                className="absolute -inset-40 -z-10"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse 1200px 800px at 60% 50%, rgba(64, 224, 255, 0.08) 0%, rgba(64, 224, 255, 0.02) 50%, transparent 70%)",
                  filter: "blur(200px)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Label below mockup */}
            <div className="mt-6 text-center lg:text-left">
              <span className="text-xs font-mono text-cyber-gray-500 tracking-widest uppercase">
                LATEST_BUILD: SPECIALIZED_DATA_TOOLING
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tech stack marquee */}
      <div className="relative z-10 py-6 mt-auto">
        <div className="overflow-hidden" aria-label="Technology stack">
          <div className="flex animate-marquee">
            {[...Array(4)].map((_, setIndex) => (
              <div
                key={setIndex}
                className="flex gap-12 items-center px-4 flex-shrink-0"
              >
                {TECH_STACK.map((tech, techIndex) => (
                  <span key={techIndex} className="flex items-center gap-12">
                    <span className="text-sm font-mono text-cyber-gray-600 whitespace-nowrap">
                      {tech}
                    </span>
                    <span className="text-cyber-gray-800">•</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
