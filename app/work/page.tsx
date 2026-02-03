import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects";

export default function CaseStudiesPage() {
  const projects = getAllProjects();

  return (
    <main className="relative min-h-screen bg-[#050505]">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 py-32">
        {/* Breadcrumb Header */}
        <div className="mb-8">
          <p className="font-mono text-[8pt] text-cyber-accent tracking-wider">
            // PORTFOLIO
          </p>
        </div>

        {/* Header */}
        <div className="mb-16 space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Selected <span className="text-cyber-accent">Work</span>
          </h1>
          <p className="text-xl text-cyber-gray-400 max-w-2xl">
            Production systems and commercial platforms built from the ground
            up. Technical deep-dives into architecture, challenges, and
            solutions.
          </p>
        </div>

        {/* Work Grid - Large Mockups */}
        <div
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          role="list"
          aria-label="Work projects"
        >
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="group relative"
              role="listitem"
            >
              <Link href={`/work/${project.slug}`} className="block">
                <div
                  className="relative rounded-xl overflow-hidden transition-all duration-300 group-hover:border-white/10"
                  style={{
                    backgroundColor: "rgba(10, 14, 20, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  {/* Image with Overlay on Hover */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/assets/stake-sight-demo.PNG"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-accent text-black font-semibold rounded-lg transition-all duration-300 hover:bg-white">
                        <span>View Project</span>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Project Number & Category */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-[8pt] text-cyber-accent tracking-wider">
                        // PROJECT_{String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] font-mono text-cyber-gray-500 tracking-wider">
                        [ {project.category.toUpperCase().replace(/ /g, "_")} ]
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-cyber-accent transition-colors">
                      {project.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-cyber-gray-400 leading-relaxed mb-4">
                      {project.excerpt}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-1 bg-black/30 border border-white/5 text-cyber-gray-400 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="text-[11px] font-mono px-2.5 py-1 text-cyber-gray-500">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center max-w-3xl mx-auto space-y-6">
          <p className="font-mono text-[8pt] text-cyber-accent tracking-wider">
            // READY_TO_BUILD
          </p>
          <h2 className="text-4xl font-bold text-white">
            Want Results Like These?
          </h2>
          <p className="text-lg text-cyber-gray-400">
            Let's discuss how we can apply these proven strategies and technical
            approaches to solve your unique business challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-cyber-accent text-black font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(64,224,255,0.5)]"
          >
            Start a Conversation
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
