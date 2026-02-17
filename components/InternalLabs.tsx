import Link from "next/link";

export default function InternalLabs() {
  const projects = [
    {
      title: "DevOps Automation Suite",
      description:
        "Open-source CLI tools for streamlining deployment workflows and infrastructure management across cloud providers.",
      status: "Active Development",
      tech: ["TypeScript", "Node.js", "AWS SDK", "Docker"],
      link: "#",
    },
    {
      title: "API Monitoring Dashboard",
      description:
        "Real-time API health monitoring with intelligent alerting and performance analytics for distributed systems.",
      status: "Beta",
      tech: ["React", "WebSockets", "PostgreSQL", "Redis"],
      link: "#",
    },
    {
      title: "Code Quality Analyzer",
      description:
        "AI-powered code review assistant that identifies patterns, suggests improvements, and enforces best practices.",
      status: "Research",
      tech: ["Python", "Machine Learning", "AST Parsing"],
      link: "#",
    },
  ];

  return (
    <section
      id="labs"
      className="relative py-16 sm:py-20 px-6 bg-cyber-gray-900"
      aria-labelledby="labs-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-gray-800 border border-cyber-gray-700 mb-4">
            <span className="text-sm text-cyber-accent font-mono">
              INTERNAL_LABS
            </span>
          </div>
          <h2 id="labs-heading" className="section-heading">
            Experimental <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Innovation happens in the margins. Here's what I'm building in
            between client work— exploring new technologies and solving
            developer pain points.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          role="list"
          aria-label="Internal lab projects"
        >
          {projects.map((project, index) => (
            <article
              key={index}
              className="bento-card group relative overflow-hidden"
              role="listitem"
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyber-accent/10 border border-cyber-accent/20 text-xs font-medium text-cyber-accent">
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-cyber-accent animate-pulse"
                    aria-hidden="true"
                  />
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-cyber-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <div
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label={`Technologies used in ${project.title}`}
                >
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-mono bg-cyber-gray-700 text-cyber-gray-300 rounded"
                      role="listitem"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              <Link
                href={project.link}
                className="inline-flex items-center gap-2 text-cyber-accent hover:text-cyber-accent/80 transition-colors font-medium"
                aria-label={`Learn more about ${project.title}`}
              >
                <span>Learn More</span>
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

              {/* Decorative corner accent */}
              <div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyber-accent/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-cyber-gray-300 mb-6">
            Some of these projects are open source. Check them out on GitHub.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyber-accent hover:text-cyber-accent/80 transition-colors font-medium"
            aria-label="View open source projects on GitHub"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
