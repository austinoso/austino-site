import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Work() {
  const [flagship] = getAllProjects(); // Get first project (Stake Sight)

  return (
    <section
      id="work"
      className="relative pt-24 pb-24 px-6 bg-[#050505]"
      aria-labelledby="work-heading"
    >
      {/* Transitional Mesh Gradient - Cyan to Purple/Navy */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 0%, rgba(64, 224, 255, 0.08) 0%, rgba(88, 28, 135, 0.05) 40%, rgba(15, 23, 42, 0.02) 70%, transparent 100%)",
          filter: "blur(150px)",
        }}
        aria-hidden="true"
      />

      {/* Flagship Showcase */}
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        {/* Featured Work Breadcrumb */}
        <div className="mb-8">
          <p className="font-mono text-[8pt] text-cyber-accent tracking-wider">
            // FEATURED_WORK
          </p>
        </div>

        {/* 40/60 Asymmetric Split */}
        <div
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center"
          style={{ marginBottom: "80px" }}
        >
          {/* Left 40% - Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2
                id="work-heading"
                className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight"
              >
                {flagship.title}
              </h2>
              <p className="text-lg text-cyber-gray-300 leading-relaxed">
                {flagship.excerpt}
              </p>
            </div>

            {/* Feature Strip */}
            <div className="space-y-3 font-mono text-sm text-cyber-gray-400">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-accent" />
                <span>Real-time Data Sync</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-accent" />
                <span>Automated Crypto Payments</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-accent" />
                <span>Admin Suite</span>
              </div>
            </div>

            {/* CTA */}
            <Link
              href={`/work/${flagship.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-base text-white font-semibold transition-all duration-300 group border border-cyber-accent/30 bg-cyber-accent/10 hover:bg-cyber-accent/20"
            >
              <span>View Full Case Study</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right 60% - Floating Mockup */}
          <div className="lg:col-span-3 relative">
            <div
              className="relative rounded-xl overflow-hidden transition-transform duration-500 hover:scale-[1.02] aspect-[16/10]"
              style={{
                boxShadow: "0 40px 100px rgba(0, 0, 0, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-50 z-0"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(64, 224, 255, 0.2) 0%, transparent 70%)",
                  filter: "blur(60px)",
                }}
                aria-hidden="true"
              />

              <Image
                src="/assets/stake-sight-demo.PNG"
                alt="Stake Sight Platform Demo"
                fill
                className="relative z-10 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Explore More Work Link - Bottom Right */}
        <div className="flex justify-end">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-cyber-gray-500 hover:text-cyber-accent transition-colors duration-300 font-mono text-[10px] uppercase tracking-wider"
          >
            <span>Explore More Work →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
