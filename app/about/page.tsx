import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Austin Osorio — Web Developer & SEO Strategist, Central Valley | Loud Bark",
  description:
    "One person, the whole picture. I handle design, development, data, and strategy — no black boxes, no jargon, no promises I can\u2019t back up.",
  alternates: {
    canonical: "https://www.loudbark.dev/about",
  },
  openGraph: {
    title: "Austin Osorio — Web Developer & SEO Strategist, Central Valley | Loud Bark",
    description:
      "One person, the whole picture. I handle design, development, data, and strategy — no black boxes, no jargon, no promises I can\u2019t back up.",
    url: "https://www.loudbark.dev/about",
  },
};

/* ── Reusable browser-chrome mockup frame (dark, matches design system) ── */
function BrowserMockup({
  src,
  alt,
  domain,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  domain: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-white/[0.08] bg-[#0C0B09] overflow-hidden select-none ${className}`}
      style={{
        boxShadow: "12px 12px 0px 0px #A8CCBF, 0 8px 32px rgba(0,0,0,0.08)",
      }}
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-3 px-4 py-2 border-b border-white/[0.04]">
        <div className="flex gap-1.5">
          <div className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
          <div className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
          <div className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.04]">
          <span className="text-[10px] text-white/25 font-mono">{domain}</span>
        </div>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className="w-full h-auto object-cover"
        priority={priority}
        sizes="(max-width: 768px) 90vw, 500px"
      />
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://www.loudbark.dev/#founder",
            name: "Austin Osorio",
            jobTitle: "Founder & Lead Engineer",
            url: "https://www.loudbark.dev",
            image: "https://www.loudbark.dev/assets/bio-pic.png",
            worksFor: {
              "@id": "https://www.loudbark.dev/#business",
            },
            knowsAbout: [
              "Web Development",
              "Local SEO",
              "Business Automation",
              "Next.js",
              "TypeScript",
            ],
            sameAs: [
              "https://github.com/austinoso",
              "https://linkedin.com/in/austinoso",
            ],
          }),
        }}
      />
      <main id="main-content" className="relative min-h-screen bg-warm-bg">
        <Navigation />

        <div className="page-frame">
          {/* ── Section 1: Hero — text + mockup ── */}
          <section
            className="relative overflow-hidden border-b border-stone-200 px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24"
            aria-labelledby="about-hero-heading"
          >
            {/* Decorative semicircle — amber, right edge */}
            <div
              className="absolute -right-[10rem] sm:-right-[12rem] md:-right-[16rem] top-0 sm:top-4 md:top-6 w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] md:w-[28rem] md:h-[28rem] rounded-full pointer-events-none"
              style={{ background: "rgba(0, 77, 58, 0.06)" }}
              aria-hidden="true"
            />

            <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Text column */}
              <div className="lg:col-span-7">
                <p className="section-label mb-5">About Loud Bark</p>
                <h1
                  id="about-hero-heading"
                  className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-[1.1] tracking-tight mb-5"
                >
                  I&apos;d rather show you how it works than ask you to{"\u00A0"}
                  <span className="text-[#004D3A]">trust</span> me.
                </h1>
                <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl text-pretty">
                  Most agencies hand you a proposal full of jargon and expect you to take their word
                  for it. I&apos;d rather walk you through it — how search engines actually decide
                  who ranks, where your competitors have gaps, what I&apos;d build differently. You
                  should be able to explain the strategy yourself before{"\u00A0"}we{"\u00A0"}start.
                </p>
              </div>

              {/* Mockup column — real project proof */}
              <div className="lg:col-span-5">
                <BrowserMockup
                  src="/assets/mymassagecottage-demo.PNG"
                  alt="My Massage Cottage — a live client site built by Loud Bark"
                  domain="mymassagecottage.com"
                  priority
                />
              </div>
            </div>
          </section>

          {/* ── Section 2: How this is different — numbered editorial ── */}
          <section
            className="border-b border-stone-200 px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-0 sm:pt-16 md:pt-20"
            aria-labelledby="how-different-heading"
          >
            <p className="section-label mb-8 sm:mb-10" id="how-different-heading">
              How This Is Different
            </p>

            <div className="max-w-3xl">
              {/* Item 01 */}
              <div className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[4.5rem_1fr] gap-x-4 sm:gap-x-6 pb-10 sm:pb-12 border-b border-stone-200">
                <span className="font-mono text-3xl sm:text-4xl font-bold text-[#004D3A]/30 leading-none pt-0.5 select-none">
                  01
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-warm-white leading-snug tracking-tight">
                    No black boxes.
                  </h3>
                  <p className="text-[15px] text-stone-500 leading-relaxed mt-2.5">
                    Every decision has a reason, and I&apos;ll walk you through it. Site
                    architecture, keyword targeting, why one page structure beats another.
                    You&apos;ll know the logic behind{"\u00A0"}every{"\u00A0"}move.
                  </p>
                </div>
              </div>

              {/* Item 02 */}
              <div className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[4.5rem_1fr] gap-x-4 sm:gap-x-6 py-10 sm:py-12 border-b border-stone-200">
                <span className="font-mono text-3xl sm:text-4xl font-bold text-[#004D3A]/30 leading-none pt-0.5 select-none">
                  02
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-warm-white leading-snug tracking-tight">
                    Custom code. Not a template with your logo{"\u00A0"}on{"\u00A0"}it.
                  </h3>
                  <p className="text-[15px] text-stone-500 leading-relaxed mt-2.5">
                    Template sites are cheap for a reason. They&apos;re bloated, slow, and built for
                    the platform — not for your customers or for Google. I build from scratch.
                    Faster sites, cleaner code, and pages Google actually wants{"\u00A0"}to
                    {"\u00A0"}rank.
                  </p>
                </div>
              </div>

              {/* Item 03 */}
              <div className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[4.5rem_1fr] gap-x-4 sm:gap-x-6 py-10 sm:py-12">
                <span className="font-mono text-3xl sm:text-4xl font-bold text-[#004D3A]/30 leading-none pt-0.5 select-none">
                  03
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-warm-white leading-snug tracking-tight">
                    No promises I can&apos;t back{"\u00A0"}up.
                  </h3>
                  <p className="text-[15px] text-stone-500 leading-relaxed mt-2.5">
                    I won&apos;t tell you &ldquo;page one in 30 days.&rdquo; I&apos;ll tell you what
                    it takes to get there, how long it&apos;ll realistically take, and what the
                    milestones{"\u00A0"}look{"\u00A0"}like.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 3: Background — editorial spread with photo ── */}
          <section
            className="border-b border-stone-200 px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20"
            aria-labelledby="background-heading"
          >
            <p className="section-label mb-8 sm:mb-10">Background</p>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Photo column — editorial treatment */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start gap-4">
                <div className="relative">
                  <div
                    className="relative w-52 h-64 sm:w-60 sm:h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden border border-stone-200"
                    style={{
                      boxShadow: "12px 12px 0px 0px #A8CCBF, 0 8px 32px rgba(0,0,0,0.06)",
                    }}
                  >
                    <Image
                      src="/assets/bio-pic.png"
                      alt="Austin O., developer and founder of Loud Bark"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 240px, 260px"
                    />
                  </div>
                </div>
                {/* Name + role below photo */}
                <div className="text-center lg:text-left mt-1">
                  <p className="text-lg font-semibold text-warm-white leading-snug tracking-tight">
                    Austin O.
                  </p>
                  <p className="font-mono text-[10px] text-[#004D3A] uppercase tracking-widest mt-1">
                    Developer &amp; Founder
                  </p>
                </div>
              </div>

              {/* Text column */}
              <div className="lg:col-span-7">
                <h2
                  id="background-heading"
                  className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.1] tracking-tight"
                >
                  Six years of building. Now focused{"\u00A0"}
                  <span className="text-[#004D3A]">here.</span>
                </h2>

                <p className="text-base sm:text-lg text-stone-600 leading-relaxed mt-8 sm:mt-10">
                  I started in software engineering — agencies, freelance, building tools and sites
                  for businesses across different industries. That&apos;s where I figured out why
                  most &ldquo;SEO-optimized&rdquo; sites don&apos;t actually rank — how
                  Google&apos;s crawlers read a page, what they skip, and why clean architecture
                  matters more than whatever plugin someone{"\u00A0"}installed.
                </p>

                <p className="text-base sm:text-lg text-stone-600 leading-relaxed mt-5">
                  Now I work with businesses in Modesto, Stockton, Manteca, Tracy, Turlock, and
                  across the Central Valley. The focus is narrower. The work is better{"\u00A0"}for
                  {"\u00A0"}it.
                </p>

                {/* Pull-quote */}
                <blockquote className="mt-8 sm:mt-10 pl-5 sm:pl-6 relative">
                  <div
                    className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
                    style={{
                      background:
                        "linear-gradient(to bottom, #B45309 0%, #DB2777 50%, #7C3AED 100%)",
                    }}
                    aria-hidden="true"
                  />
                  <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-medium">
                    &ldquo;I&apos;d rather have ten clients who are actually ranking than fifty who
                    are wondering what they&apos;re paying{"\u00A0"}for.&rdquo;
                  </p>
                </blockquote>

                {/* Rosa — integrated mention */}
                <div className="mt-8 sm:mt-10 flex items-center gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200/60">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-stone-200 flex-shrink-0">
                    <Image
                      src="/assets/rosa.jpg"
                      alt="Rosa the dog, office mascot"
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-warm-white">
                      Rosa{" "}
                      <span className="font-mono text-[10px] text-[#004D3A] uppercase tracking-widest ml-1.5">
                        Head of Morale
                      </span>
                    </p>
                    <p className="text-[13px] text-stone-500 leading-relaxed mt-0.5">
                      Three years in stress management, perimeter security, and unsolicited desk
                      {"\u00A0"}visits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 4: CTA — visual proof strip ── */}
          <section
            className="px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-24 sm:pt-16 sm:pb-32 md:pt-20 md:pb-36"
            aria-labelledby="cta-heading"
          >
            <p className="section-label mb-5">See the Work</p>
            <h2
              id="cta-heading"
              className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-stone-900 leading-[1.1] tracking-tight max-w-2xl"
            >
              Judge the results.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-stone-500 leading-relaxed max-w-xl">
              I can talk about how I work all day. The projects page is where it{"\u00A0"}shows.
            </p>

            {/* Project proof thumbnails */}
            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-2xl">
              {/* My Massage Cottage */}
              <Link
                href="/work/my-massage-cottage"
                className="group block rounded-xl border border-stone-200 bg-white overflow-hidden hover:border-stone-300 transition-colors duration-300"
              >
                <div className="relative aspect-[16/10] bg-[#0C0B09]">
                  <Image
                    src="/assets/mymassagecottage-demo-smaller.PNG"
                    alt="My Massage Cottage website"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 90vw, 300px"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-warm-white group-hover:text-[#004D3A] transition-colors duration-200">
                    My Massage Cottage
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">Web + Growth</p>
                </div>
              </Link>

              {/* Law firm site (mock) */}
              <Link
                href="/work"
                className="group block rounded-xl border border-stone-200 bg-white overflow-hidden hover:border-stone-300 transition-colors duration-300"
              >
                <div className="relative aspect-[16/10] bg-[#0C0B09]">
                  <Image
                    src="/assets/law-site.PNG"
                    alt="Law firm website design"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 90vw, 300px"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-warm-white group-hover:text-[#004D3A] transition-colors duration-200">
                    Law Firm Website
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">Web Development</p>
                </div>
              </Link>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#004D3A] hover:text-[#003328] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#004D3A]/40 focus:ring-offset-2"
              >
                <span>See All Projects</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-warm-white transition-colors duration-300"
              >
                Or start a conversation
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
