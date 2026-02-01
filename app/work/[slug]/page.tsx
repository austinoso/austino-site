import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getProjectBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="relative min-h-screen">
      <Navigation />

      <article className="max-w-4xl mx-auto px-6 py-32">
        {/* Header */}
        <header className="mb-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-cyber-accent hover:text-cyber-accent/80 transition-colors mb-6"
            aria-label="Back to all work"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            <span>Back to Work</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-medium text-cyber-accent bg-cyber-accent/10 px-4 py-1.5 rounded-full">
              {study.category}
            </span>
            <span className="text-sm text-cyber-gray-400">
              {study.readTime}
            </span>
            <span className="text-sm text-cyber-gray-400">•</span>
            <time className="text-sm text-cyber-gray-400">
              {study.publishedDate}
            </time>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {study.title}
          </h1>
        </header>

        {/* Challenge & Solution Overview */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <section className="bento-card">
            <h2 className="text-cyber-accent font-semibold mb-3">Challenge</h2>
            <p className="text-cyber-gray-300 leading-relaxed">
              {study.challenge}
            </p>
          </section>
          <section className="bento-card">
            <h2 className="text-cyber-accent font-semibold mb-3">Solution</h2>
            <p className="text-cyber-gray-300 leading-relaxed">
              {study.solution}
            </p>
          </section>
        </div>

        {/* Results */}
        <section className="bento-card mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Results & Impact
          </h2>
          <ul className="space-y-3" role="list" aria-label="Project results">
            {study.results.map((result: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-cyber-accent flex-shrink-0 mt-0.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-cyber-gray-300">{result}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
          <div
            className="flex flex-wrap gap-3"
            role="list"
            aria-label="Technologies used"
          >
            {study.techStack.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-4 py-2 bg-cyber-gray-800 border border-cyber-gray-700 text-cyber-gray-300 rounded-lg font-mono text-sm"
                role="listitem"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Detailed Sections */}
        <div className="space-y-12">
          {study.sections.map((section: any, index: number) => (
            <section key={index}>
              <h2 className="text-2xl font-bold text-white mb-4">
                {section.heading}
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-cyber-gray-300 leading-relaxed text-lg">
                  {section.content}
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <aside className="mt-16 p-8 bento-card text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Similar Results?
          </h2>
          <p className="text-cyber-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can apply these strategies to your project and
            create measurable impact for your business.
          </p>
          <Link
            href="/contact"
            className="cyber-button inline-block"
            aria-label="Contact to discuss your project"
          >
            Schedule a Discovery Call
          </Link>
        </aside>
      </article>

      <Footer />
    </main>
  );
}

// Generate static params for all projects
export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug: slug,
  }));
}
