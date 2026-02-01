import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default function CaseStudiesPage() {
  const projects = getAllProjects();

  return (
    <main className="relative min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 py-32">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="section-heading">
            <span className="text-gradient">Work</span>
          </h1>
          <p className="section-subheading mx-auto">
            Technical deep-dives into real-world projects, challenges, and
            solutions. Learn from production experience and battle-tested
            architectures.
          </p>
        </div>

        {/* Work Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Work projects"
        >
          {projects.map((study) => {
            const Icon = study.icon;
            return (
              <article
                key={study.slug}
                className="bento-card group"
                role="listitem"
              >
                {/* Icon */}
                <div
                  className="mb-6 text-cyber-accent transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <Icon className="w-12 h-12" strokeWidth={1.5} />
                </div>

                {/* Category & Read Time */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-cyber-accent bg-cyber-accent/10 px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                  <span className="text-xs text-cyber-gray-400">
                    {study.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-3 leading-tight">
                  {study.title}
                </h2>

                {/* Excerpt */}
                <p className="text-cyber-gray-300 mb-6 leading-relaxed">
                  {study.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/work/${study.slug}`}
                  className="inline-flex items-center gap-2 text-cyber-accent hover:text-cyber-accent/80 transition-colors font-medium"
                  aria-label={`View project: ${study.title}`}
                >
                  <span>View Project</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </article>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center p-12 bento-card">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-cyber-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can apply these proven strategies and technical
            approaches to solve your unique business challenges.
          </p>
          <Link
            href="/contact"
            className="cyber-button inline-block"
            aria-label="Start a project discussion"
          >
            Start a Conversation
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
