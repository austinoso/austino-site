import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getProjectBySlug(slug);
  if (!study) return { title: "Project Not Found | austino" };
  return {
    title: `${study.title} | austino`,
    description: study.excerpt,
  };
}

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
    <main id="main-content" className="relative min-h-screen bg-[#050505]">
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
            "radial-gradient(ellipse 80% 40% at 50% 5%, rgba(64,224,255,0.04), transparent), radial-gradient(ellipse 60% 30% at 80% 50%, rgba(120,75,255,0.025), transparent)",
        }}
        aria-hidden="true"
      />

      <article className="relative max-w-6xl mx-auto px-6 sm:px-8 md:px-12 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 md:pb-36">
        {/* Back Navigation */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-mono text-cyber-gray-400 hover:text-white transition-colors duration-300 mb-10 sm:mb-14 tracking-wide"
          aria-label="Back to all work"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Back to Work</span>
        </Link>

        {/* Header */}
        <header className="mb-14 sm:mb-20">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[10px] font-mono text-cyber-accent uppercase tracking-[0.15em]">
              {study.category}
            </span>
            <span className="text-cyber-gray-500 text-[10px]">·</span>
            <span className="text-[10px] font-mono text-cyber-gray-500">
              {study.readTime}
            </span>
            <span className="text-cyber-gray-500 text-[10px]">·</span>
            <time className="text-[10px] font-mono text-cyber-gray-500">
              {study.publishedDate}
            </time>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight tracking-tight">
            {study.title}
          </h1>

          {/* Excerpt */}
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-3xl">
            {study.excerpt}
          </p>

          {/* Project Link */}
          {study.link && (
            <div className="mt-6">
              <a
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyber-accent text-[#050505] font-semibold text-sm rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)]"
              >
                {study.linkText || "Visit Live Site"}
                <svg
                  className="w-3.5 h-3.5"
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

        {/* Hero Image */}
        {study.image && (
          <div className="mb-14 sm:mb-20">
            <div
              className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#111318]"
              style={{
                boxShadow:
                  "0 32px 60px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03)",
              }}
            >
              {/* Chrome bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0D0F13]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                </div>
                {study.link && (
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] text-[11px] text-cyber-gray-400 font-mono">
                      <svg
                        className="w-2.5 h-2.5 opacity-40"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M11.5 1a3.5 3.5 0 00-3.5 3.5V7H3a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2H9V4.5a2.5 2.5 0 015 0V6h1V4.5A3.5 3.5 0 0011.5 1z" />
                      </svg>
                      {study.link
                        .replace(/^https?:\/\//, "")
                        .replace(/\/$/, "")}
                    </div>
                  </div>
                )}
              </div>

              <Image
                src={study.image}
                alt={study.title}
                width={1400}
                height={788}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        )}

        {/* Results + Challenge/Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 mb-14 sm:mb-20">
          {/* Results */}
          <section
            className="lg:col-span-1 p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-[#111318]"
            style={{
              boxShadow:
                "0 16px 40px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.02)",
            }}
          >
            <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-5">
              Results
            </p>
            <ul
              className="space-y-3.5"
              role="list"
              aria-label="Project results"
            >
              {study.results.map((result: string, index: number) => (
                <li key={index} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-4 h-4 text-[#4ADE80] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-cyber-gray-300 leading-relaxed">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Challenge */}
          <section
            className="p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-[#111318]"
            style={{
              boxShadow:
                "0 16px 40px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.02)",
            }}
          >
            <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-5">
              The Challenge
            </p>
            <p className="text-sm sm:text-base text-cyber-gray-300 leading-relaxed">
              {study.challenge}
            </p>
          </section>

          {/* Solution */}
          <section
            className="p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-[#111318]"
            style={{
              boxShadow:
                "0 16px 40px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.02)",
            }}
          >
            <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-5">
              The Approach
            </p>
            <p className="text-sm sm:text-base text-cyber-gray-300 leading-relaxed">
              {study.solution}
            </p>
          </section>
        </div>

        {/* Tech Stack */}
        <section className="mb-14 sm:mb-20">
          <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
            Tech Stack
          </p>
          <div
            className="flex flex-wrap gap-2"
            role="list"
            aria-label="Technologies used"
          >
            {study.techStack.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.06] text-cyber-gray-400 rounded font-mono text-xs"
                role="listitem"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Detailed Sections */}
        <div className="space-y-12 sm:space-y-16 mb-20 sm:mb-28">
          {study.sections.map(
            (section: { heading: string; content: string }, index: number) => (
              <section key={index} className="max-w-3xl">
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 leading-snug tracking-tight">
                  {section.heading}
                </h2>
                <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </section>
            ),
          )}
        </div>

        {/* CTA */}
        <div className="pt-10 border-t border-white/[0.06]">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
            <div className="max-w-xl">
              <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
                Your Project
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight tracking-tight mb-4">
                Need similar results?
              </h2>
              <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed">
                I&apos;d love to help your business achieve something similar.
                Reach out and I&apos;ll share a clear plan tailored to your
                needs.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-cyber-accent text-black font-semibold text-base rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(64,224,255,0.4)] w-full sm:w-auto"
              >
                <span>Start a Conversation</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
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
