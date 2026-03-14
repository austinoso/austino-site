import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { BackLink } from "@/components/ui/BackLink";
import { BrowserMockup } from "@/components/ui/BrowserMockup";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getProjectBySlug(slug);
  if (!study) return { title: "Project Not Found | Loud Bark" };
  const metaTitle = study.seoTitle || study.title;
  const metaDescription = study.seoExcerpt || study.excerpt;
  return {
    title: `${metaTitle} | Loud Bark`,
    description: metaDescription,
    alternates: {
      canonical: `https://www.loudbark.dev/work/${slug}`,
    },
    openGraph: {
      title: `${metaTitle} | Loud Bark`,
      description: metaDescription,
      url: `https://www.loudbark.dev/work/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getProjectBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <main id="main-content" className="relative min-h-screen bg-warm-bg">
        <Navigation />

        <div className="page-frame">
          <article>
            {/* Back nav + Header */}
            <header className="border-b border-stone-200 px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-14 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20">
              <BackLink href="/work" className="mb-10 sm:mb-14" aria-label="Back to all work">
                Back to Work
              </BackLink>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-[10px] font-mono text-warm-gold uppercase tracking-[0.2em]">
                  {study.category}
                </span>
                <span className="text-stone-500 text-[10px]">·</span>
                <span className="text-[10px] font-mono text-stone-400">{study.readTime}</span>
                <span className="text-stone-500 text-[10px]">·</span>
                <time className="text-[10px] font-mono text-stone-400">{study.publishedDate}</time>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white mb-5 leading-[1.1] tracking-tight">
                {study.title}
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl text-pretty">
                {study.excerpt}
              </p>

              {study.link && (
                <div className="mt-6">
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold text-sm rounded-lg px-7 py-3.5 shadow-lg shadow-amber-600/20 transition-all duration-300 hover:brightness-110 hover:-translate-y-px hover:shadow-xl hover:shadow-amber-600/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-warm-bg"
                  >
                    {study.linkText || "Visit Live Site"}
                    <span className="sr-only"> (opens in a new tab)</span>
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
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

            {/* Hero Image — browser mockup */}
            {study.image && (
              <section className="border-b border-white/[0.06]">
                <BrowserMockup
                  variant="dark"
                  url={
                    study.link
                      ? study.link.replace(/^https?:\/\//, "").replace(/\/$/, "")
                      : undefined
                  }
                >
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={1400}
                    height={788}
                    sizes="(min-width: 1200px) 1200px, 100vw"
                    quality={80}
                    className="w-full h-auto"
                    priority
                  />
                </BrowserMockup>
              </section>
            )}

            {/* Challenge & Approach — two columns */}
            <section className="border-b border-stone-200 px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-warm-white mb-3 leading-snug tracking-tight">
                    The Challenge
                  </h3>
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed text-pretty">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-warm-white mb-3 leading-snug tracking-tight">
                    The Approach
                  </h3>
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed text-pretty">
                    {study.solution}
                  </p>
                </div>
              </div>
            </section>

            {/* Results */}
            <section className="border-b border-stone-200 px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20">
              <h3 className="font-display text-lg sm:text-xl font-semibold text-warm-white mb-6 leading-snug tracking-tight">
                Results
              </h3>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4"
                role="list"
                aria-label="Project results"
              >
                {study.results.map((result: string, index: number) => (
                  <div key={index} className="flex items-start gap-3" role="listitem">
                    <span className="mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-warm-gold/60" />
                    <p className="text-sm sm:text-base text-stone-500 leading-relaxed text-pretty">
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Detailed Sections */}
            {study.sections.map((section: { heading: string; content: string }, index: number) => (
              <section
                key={index}
                className="border-b border-stone-200 px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20"
              >
                <div className="max-w-3xl">
                  <h2 className="font-display text-xl sm:text-2xl font-semibold text-warm-white mb-4 leading-snug tracking-tight">
                    {section.heading}
                  </h2>
                  <p className="text-base sm:text-lg text-stone-600 leading-relaxed text-pretty">
                    {section.content}
                  </p>
                </div>
              </section>
            ))}

            {/* CTA */}
            <section className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
                <div className="max-w-xl">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-warm-white leading-snug tracking-tight mb-4">
                    Need similar results?
                  </h2>
                  <p className="text-base sm:text-lg text-stone-600 leading-relaxed text-pretty">
                    I&apos;d love to help your business achieve something similar. Reach out and
                    I&apos;ll share a clear plan tailored to your needs.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <PrimaryButton href="/contact" size="lg" arrow className="w-full sm:w-auto">
                    Start a Conversation
                  </PrimaryButton>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Generate static params for all projects
export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug: slug,
  }));
}
