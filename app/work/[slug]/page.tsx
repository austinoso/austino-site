import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
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
    <main className="relative min-h-screen bg-[#050505]">
      <Navigation />

      {/* Background Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 100% 60% at 50% 0%, rgba(64, 224, 255, 0.06) 0%, rgba(88, 28, 135, 0.03) 40%, transparent 70%)",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />

      <article className="relative max-w-[1400px] mx-auto px-6 py-32">
        {/* Back Navigation */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-[11px] text-cyber-accent hover:text-white transition-colors mb-12 tracking-wider"
          aria-label="Back to all work"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK_TO_WORK</span>
        </Link>

        {/* Header */}
        <header className="mb-16">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="font-mono text-[11px] text-cyber-accent tracking-wider font-semibold">
              // {study.category.toUpperCase().replace(/ /g, "_")}
            </span>
            <span className="text-cyber-gray-500">•</span>
            <span className="font-mono text-[10px] text-cyber-gray-500 tracking-[0.2em] uppercase">
              {study.readTime}
            </span>
            <span className="text-cyber-gray-500">•</span>
            <time className="font-mono text-[10px] text-cyber-gray-500 tracking-[0.2em] uppercase">
              {study.publishedDate}
            </time>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            {study.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-cyber-gray-300 leading-relaxed max-w-4xl">
            {study.excerpt}
          </p>

          {/* Project Link */}
          {study.link && (
            <div className="mt-8">
              <a
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-accent text-black font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(64,224,255,0.5)]"
              >
                {study.linkText || "Visit Live Site"}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          )}
        </header>

        {/* Image & Results Side by Side */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16 items-start">
          {/* Image - 60% width (3 columns) */}
          {study.image && (
            <div className="lg:col-span-3">
              <div
                className="relative rounded-xl overflow-hidden"
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
                      "radial-gradient(circle at center, rgba(64, 224, 255, 0.15) 0%, transparent 70%)",
                    filter: "blur(60px)",
                  }}
                  aria-hidden="true"
                />
                <Image
                  src={study.image}
                  alt={study.title}
                  width={1400}
                  height={788}
                  className="w-full h-auto relative z-10"
                  priority
                />
              </div>
            </div>
          )}

          {/* Results - 40% width (2 columns) */}
          <section
            className="lg:col-span-2 relative p-8 rounded-xl"
            style={{
              backgroundColor: "rgba(10, 14, 20, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <h2 className="font-mono text-[11px] text-cyber-accent tracking-wider font-semibold mb-6">
              // RESULTS_&_IMPACT
            </h2>
            <ul className="space-y-4" role="list" aria-label="Project results">
              {study.results.map((result: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyber-accent flex-shrink-0 mt-0.5" />
                  <span className="text-cyber-gray-300 leading-relaxed">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <section
            className="relative p-8 rounded-xl"
            style={{
              backgroundColor: "rgba(10, 14, 20, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <h2 className="font-mono text-[11px] text-cyber-accent tracking-wider font-semibold mb-4">
              // THE_CHALLENGE
            </h2>
            <p className="text-cyber-gray-300 leading-relaxed text-lg">
              {study.challenge}
            </p>
          </section>
          <section
            className="relative p-8 rounded-xl"
            style={{
              backgroundColor: "rgba(10, 14, 20, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <h2 className="font-mono text-[11px] text-cyber-accent tracking-wider font-semibold mb-4">
              // THE_SOLUTION
            </h2>
            <p className="text-cyber-gray-300 leading-relaxed text-lg">
              {study.solution}
            </p>
          </section>
        </div>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="font-mono text-[11px] text-cyber-accent tracking-wider font-semibold mb-4">
            // TECH_STACK
          </h2>
          <div
            className="flex flex-wrap gap-2"
            role="list"
            aria-label="Technologies used"
          >
            {study.techStack.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-black/20 border border-white/5 text-cyber-gray-400 rounded font-mono text-xs"
                role="listitem"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Detailed Sections */}
        <div className="space-y-12 mb-20">
          {study.sections.map((section: any, index: number) => (
            <section key={index} className="max-w-4xl">
              <h2 className="text-3xl font-bold text-white mb-5 leading-tight tracking-tight">
                {section.heading}
              </h2>
              <p className="text-cyber-gray-300 leading-relaxed text-lg">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* CTA */}
        <aside
          className="relative p-12 rounded-xl text-center overflow-hidden"
          style={{
            backgroundColor: "rgba(10, 14, 20, 0.8)",
            border: "1px solid rgba(64, 224, 255, 0.2)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at center, rgba(64, 224, 255, 0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Need Similar Results?
            </h2>
            <p className="text-cyber-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Let's discuss how we can apply these strategies to your project
              and create measurable impact for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base text-black font-semibold transition-all duration-300 bg-cyber-accent hover:bg-white hover:shadow-[0_0_30px_rgba(64,224,255,0.5)]"
              aria-label="Contact to discuss your project"
            >
              Schedule a Discovery Call
            </Link>
          </div>
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
