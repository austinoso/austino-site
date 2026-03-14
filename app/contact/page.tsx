import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <main id="main-content" className="relative min-h-screen bg-warm-bg">
        <Navigation />

        <div className="page-frame">
          {/* Header */}
          <section className="relative overflow-hidden border-b border-stone-200 px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            {/* Decorative semicircle — amber, right edge (matches hero) */}
            <div
              className="absolute -right-[10rem] sm:-right-[12rem] md:-right-[16rem] top-0 sm:top-4 md:top-6 w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] md:w-[28rem] md:h-[28rem] rounded-full pointer-events-none"
              style={{ background: "rgba(180, 83, 9, 0.06)" }}
              aria-hidden="true"
            />
            <p className="section-label mb-5">Get Started</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-[1.1] tracking-tight mb-5">
              Tell me about your business.
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl text-pretty">
              No jargon, no pressure. Fill out what you can and I&apos;ll follow
              up with a clear plan within 24 hours. Or email me directly at{" "}
              <a
                href="mailto:connect@loudbark.dev"
                className="text-warm-gold hover:underline"
              >
                connect@loudbark.dev
              </a>
              .
            </p>
          </section>

          {/* Form + Sidebar */}
          <section className="border-b border-stone-200 px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20">
            <div className="grid lg:grid-cols-3 gap-14 lg:gap-20">
              {/* Form — 2/3 */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              {/* Sidebar — 1/3 */}
              <aside
                className="lg:col-span-1 space-y-10"
                aria-label="Additional information"
              >
                {/* Availability */}
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-warm-green animate-pulse" />
                    <span className="text-sm font-medium text-stone-900">
                      Accepting new projects
                    </span>
                  </div>
                  <p className="text-sm text-stone-500 leading-relaxed text-pretty">
                    Based in California&apos;s Central Valley, serving clients
                    everywhere. Typical response time: same business day.
                  </p>
                </div>

                {/* What happens next */}
                <div>
                  <p className="section-label mb-4">What Happens Next</p>
                  <ul className="space-y-4">
                    {[
                      "I review your message and do my homework",
                      "We hop on a quick call to talk through it",
                      "I send you a clear plan with timeline and cost",
                      "You decide. Zero obligation",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="font-mono text-[10px] text-warm-gold/60 mt-1 flex-shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm text-stone-500 leading-relaxed text-pretty">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
