import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getAllInsights } from "@/lib/insights";
import { formatDate } from "@/lib/format-date";

export default function InsightsPage() {
  const insights = getAllInsights();
  const featured = insights.find((i) => i.featured) || insights[0];
  const rest = insights.filter((i) => i.slug !== featured?.slug);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Local Insights",
    description:
      "Practical advice on websites, SEO, and automation for small businesses in the Central Valley.",
    url: "https://www.loudbark.dev/insights",
    publisher: {
      "@type": "Organization",
      name: "loudbark.dev",
      url: "https://www.loudbark.dev",
    },
    blogPost: insights.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `https://www.loudbark.dev/insights/${post.slug}`,
      author: {
        "@type": "Person",
        name: "Austin Osorio",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <main id="main-content" className="relative min-h-screen bg-warm-bg">
        <Navigation />
        <div className="page-frame">
          {/* Hero */}
          <section className="pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 px-6 sm:px-10 md:px-14 lg:px-20">
            <p className="section-label mb-5">Local Insights</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-warm-white leading-[1.1] tracking-tight max-w-2xl">
              Practical advice for <span className="text-gradient-gold">local businesses</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              No jargon, no fluff — just honest insights on websites, SEO, and growing your business
              online in the Central&nbsp;Valley.
            </p>
          </section>

          {/* Featured Post */}
          {featured && (
            <section
              aria-label="Featured article"
              className="px-6 sm:px-10 md:px-14 lg:px-20 pb-12 sm:pb-16"
            >
              <Link
                href={`/insights/${featured.slug}`}
                className="group block rounded-xl border border-stone-200 bg-white p-7 sm:p-10 transition-colors duration-300 hover:bg-stone-50 hover:border-stone-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                  <div className="flex-1 min-w-0">
                    <span className="inline-block text-[11px] font-mono text-warm-gold uppercase tracking-wider mb-4">
                      {featured.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-display text-warm-white leading-[1.2] tracking-tight mb-4 group-hover:text-warm-gold transition-colors duration-300">
                      {featured.title}
                    </h2>
                    <p className="text-[15px] text-stone-500 leading-relaxed mb-6 max-w-lg">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-5 text-xs text-stone-400">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        {featured.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-stone-200 text-stone-400 group-hover:border-warm-gold/30 group-hover:text-warm-gold transition-colors duration-300 shrink-0 mt-2">
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </section>
          )}

          {/* Post Grid */}
          {rest.length > 0 && (
            <section
              aria-label="All articles"
              className="px-6 sm:px-10 md:px-14 lg:px-20 pb-24 sm:pb-28 md:pb-32"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {rest.map((insight) => (
                  <Link
                    key={insight.slug}
                    href={`/insights/${insight.slug}`}
                    className="group rounded-xl border border-stone-200 bg-white p-6 sm:p-7 transition-colors duration-300 hover:bg-stone-50 hover:border-stone-300"
                  >
                    <span className="inline-block text-[11px] font-mono text-warm-gold uppercase tracking-wider mb-3">
                      {insight.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-warm-white leading-[1.25] tracking-tight mb-3 group-hover:text-warm-gold transition-colors duration-300">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-stone-500 leading-relaxed mb-5 line-clamp-2">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center gap-5 text-xs text-stone-400">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        <time dateTime={insight.date}>{formatDate(insight.date)}</time>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        {insight.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Empty State */}
          {insights.length === 0 && (
            <section className="px-6 sm:px-10 md:px-14 lg:px-20 pb-24 sm:pb-28 md:pb-32 text-center">
              <p className="text-stone-500 text-[15px]">
                New insights coming soon — check back shortly.
              </p>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
