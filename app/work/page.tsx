import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getAllProjects } from "@/lib/projects";

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <main className="relative min-h-screen bg-[#050505]">
      <Navigation />

      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />

      {/* Accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 60% 10%, rgba(64,224,255,0.04), transparent), radial-gradient(ellipse 60% 30% at 20% 60%, rgba(120,75,255,0.025), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 md:px-12 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 md:pb-36">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
            Projects
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight mb-5">
            Work that speaks for itself.
          </h1>
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-xl">
            Real projects for real businesses. Each case study walks through the
            problem, the approach, and the results.
          </p>
        </div>

        {/* Project Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
          role="list"
          aria-label="Work projects"
        >
          {projects.map((project) => (
            <article key={project.slug} role="listitem">
              <Link
                href={`/work/${project.slug}`}
                className="group block rounded-xl border border-white/[0.06] bg-[#111318] overflow-hidden transition-colors duration-300 hover:border-white/[0.12]"
                style={{
                  boxShadow:
                    "0 16px 40px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.02)",
                }}
              >
                {/* Thumbnail */}
                {project.image && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent opacity-60" />
                  </div>
                )}

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-mono text-cyber-accent uppercase tracking-[0.15em]">
                      {project.category}
                    </span>
                    <span className="text-cyber-gray-500 text-[10px]">·</span>
                    <span className="text-[10px] font-mono text-cyber-gray-500">
                      {project.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-semibold text-white leading-snug tracking-tight mb-2 group-hover:text-cyber-accent transition-colors duration-300">
                    {project.title.split(":")[0]}
                  </h2>

                  <p className="text-sm text-cyber-gray-400 leading-relaxed line-clamp-2 mb-4">
                    {project.excerpt}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 bg-white/[0.04] border border-white/[0.06] text-cyber-gray-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 text-cyber-gray-500">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyber-gray-500 group-hover:text-cyber-accent transition-colors duration-300">
                    <span>Read case study</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 sm:mt-28 pt-10 border-t border-white/[0.06]">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
            <div className="max-w-xl">
              <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
                Your Project
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight tracking-tight mb-4">
                Want results like these?
              </h2>
              <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed">
                Tell me what&apos;s slowing your business down. I&apos;ll put
                together a clear plan — no jargon, no obligations.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-cyber-accent text-black font-semibold text-base rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(64,224,255,0.4)] w-full sm:w-auto"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
