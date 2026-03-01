import Link from "next/link";
import Image from "next/image";

const tools = [
  {
    title: "Online Booking",
    body: "Customers pick a time, confirm, and get a reminder — no phone tag, no back-and-forth.",
  },
  {
    title: "Quote & Contact Forms",
    body: "Forms that collect exactly what you need to follow up fast, sent straight to\u00A0your\u00A0inbox.",
  },
  {
    title: "Payments & Deposits",
    body: "Accept payments or deposits at the point of booking. Fewer no-shows, faster\u00A0cash\u00A0flow.",
  },
  {
    title: "Instant Answers",
    body: "Smart FAQ sections, service details, and pricing — so customers get what they need without waiting on\u00A0you.",
  },
  {
    title: "Automatic Follow-Ups",
    body: "Booking confirmations, appointment reminders, review requests \u2014 all sent automatically so nothing slips through the\u00A0cracks.",
  },
];

export default function DesignAndTools() {
  return (
    <section data-fade>
      {/* ── Design & Credibility ── */}
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 pb-0">
        <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.15] tracking-tight text-balance max-w-2xl mb-6">
          A site that looks as good as{" "}
          <span className="text-gradient-gold">your work.</span>
        </h2>
        <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mb-14 sm:mb-20">
          No templates. No page builders. Every layout, animation, and
          interaction is designed from scratch to make your business look
          premium — because first impressions are everything.
        </p>
      </div>

      {/* ── Case Study + Design Points ── */}
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — Browser mockup (floating card) */}
        <div>
          <div
            className="rounded-xl border border-white/[0.08] bg-[#0C0B09] overflow-hidden"
            style={{
              boxShadow:
                "0 24px 48px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)",
            }}
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-3 px-4 py-2 border-b border-white/[0.04]">
              <div className="flex items-center gap-1.5">
                <span className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
                <span className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
                <span className="h-[9px] w-[9px] rounded-full bg-white/[0.08]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.04]">
                  <svg
                    className="w-2.5 h-2.5 text-white/20"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 1a4 4 0 0 0-4 4v3H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1V5a4 4 0 0 0-4-4zm2 7H6V5a2 2 0 1 1 4 0v3z" />
                  </svg>
                  <span className="text-[10px] text-white/25 font-mono tracking-wide">
                    mymassagecottage.com
                  </span>
                </div>
              </div>
            </div>
            <Image
              src="/assets/mymassagecottage-demo.PNG"
              alt="My Massage Cottage — client website built with custom code"
              width={1200}
              height={900}
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-sm text-stone-400 mt-4">
            Built in <span className="text-warm-white font-medium">2 weeks</span> and
            ranking on{" "}
            <span className="text-warm-white font-medium">page 1 of Google</span>.{" "}
            <Link
              href="/work/my-massage-cottage"
              className="text-warm-gold hover:underline"
            >
              Read the case study &rarr;
            </Link>
          </p>
        </div>

        {/* Right — Design selling points */}
        <div>
          <dl className="space-y-8 sm:space-y-10">
            <div>
              <dt className="text-base font-semibold text-warm-white mb-2">
                Unique to your brand
              </dt>
              <dd className="text-[15px] text-stone-400 leading-relaxed">
                The design, layout, and personality of your site are built
                around your business and the people you serve &mdash; not
                pulled from a catalog that thousands of other companies use.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold text-warm-white mb-2">
                Designed to get results, not just look nice
              </dt>
              <dd className="text-[15px] text-stone-400 leading-relaxed">
                Every section has a job — build trust, answer questions, and
                guide visitors toward booking. Beauty with purpose.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold text-warm-white mb-2">
                Looks great on every screen
              </dt>
              <dd className="text-[15px] text-stone-400 leading-relaxed">
                Built mobile-first, because that&apos;s where most of your
                customers are. No tiny text, no pinch-to-zoom, no broken
                layouts.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* ── Built-In Business Tools ── */}
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 mt-20 sm:mt-28">
        <div className="mb-10 sm:mb-14 max-w-xl">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-warm-white leading-[1.15] tracking-tight text-balance mb-3">
            It even works while you sleep.
          </h3>
          <p className="text-sm sm:text-base text-stone-400 leading-relaxed">
            Every site comes with tools that let customers take action — no
            phone calls required.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-6 sm:p-7 transition-colors duration-300 hover:bg-white/[0.04] hover:border-white/[0.10]"
            >
              <h4 className="text-base font-semibold text-warm-white mb-2">
                {tool.title}
              </h4>
              <p className="text-sm text-stone-400 leading-relaxed">
                {tool.body}
              </p>
            </div>
          ))}

          {/* Wildcard — custom development */}
          <div
            className="rounded-xl border border-warm-gold/20 bg-warm-gold/[0.03] p-6 sm:p-7 transition-colors duration-300 hover:bg-warm-gold/[0.06] hover:border-warm-gold/30"
          >
            <h4 className="text-base font-semibold text-warm-gold mb-2">
              Need something specific?
            </h4>
            <p className="text-sm text-stone-400 leading-relaxed">
              Most of the time the right tool already exists. But if your business needs something that doesn&apos;t, I build it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
