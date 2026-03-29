import EdgeGlobe from "./EdgeGlobe";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const seoFeatures = [
  {
    title: "Business Info Google Can Read",
    body: "Your name, address, hours, services, and reviews are tagged so Google actually understands them. That helps you show up in maps, local results, and those info boxes at the top of search.",
  },
  {
    title: "Pages Built for Search Engines",
    body: "Clear page titles, readable web addresses, smart page-to-page links, and proper behind-the-scenes labels on every page. The basics Google needs to find and rank you.",
  },
  {
    title: "Local Search Signals",
    body: "Content that mentions your city, location tags Google can read, an embedded map, and your name, address, and phone number matching everywhere. That\u2019s how you show up when nearby customers search.",
  },
  {
    title: "Analytics & Lead Tracking",
    body: "Know exactly where your customers come from. Every form submission, phone call, and booking is tracked so you can see what\u2019s working.",
  },
];

const perfStats = [
  {
    number: "90+",
    label: "out of 100 on Google's speed test. Most sites score under\u00A050",
  },
  {
    number: "<2.5s",
    label: "Full page load, before visitors give up and\u00A0leave",
  },
  {
    number: "99.9%",
    label: "Uptime: your site stays online around the clock, even during traffic\u00A0spikes",
  },
];

export default function PerformanceAndSEO() {
  return (
    <section data-fade>
      {/* ── Speed & Performance — 2-col with CA edge map ── */}
      <div className="relative overflow-x-clip sm:pt-28 md:pt-32">
        {/* Subtle fade so the globe doesn't fight with the heading */}
        <div className="hidden lg:block absolute inset-0 z-[5] bg-gradient-to-r from-[#F2F7F5] from-30% via-[#F2F7F5]/40 via-45% to-transparent to-55% pointer-events-none" />
        <div className="relative z-10 pt-12 sm:pt-20 p-6 sm:p-10 max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-6">
            Fast enough to pass <span className="text-[#004D3A]">Google&apos;s speed test.</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Your site runs on the same network that powers Shopify and Netflix. Every page is
            optimized down to the image sizes, fonts, and code, so nothing slows it down, even on a
            bad connection.
          </p>
        </div>
        <div className="hidden lg:block">
          <EdgeGlobe />
        </div>
        {/* Spacer to give the map room to breathe */}
        <div className="hidden lg:block h-64" />
      </div>

      {/* Perf stats — mobile: staggered, desktop: horizontal strip */}
      <div className="sm:hidden px-10 space-y-8 py-10">
        {perfStats.map((stat, i) => {
          const isRight = i % 2 !== 0;
          return (
            <div key={stat.label} className={`max-w-[75%] ${isRight ? "text-right ml-auto" : ""}`}>
              <span className="block font-display text-[3.25rem] font-bold leading-none mb-2 tracking-tight text-warm-white">
                {stat.number}
              </span>
              <p className="text-[13px] text-stone-500 leading-relaxed">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Perf stats strip — desktop */}
      <div className="hidden sm:grid sm:grid-cols-3 border-t border-stone-200 bg-warm-surface/50">
        {perfStats.map((stat, i) => (
          <div
            key={stat.label}
            className={`p-6 sm:p-10 transition-colors duration-300 hover:bg-stone-50 ${
              i < perfStats.length - 1 ? "sm:border-r border-stone-200" : ""
            }`}
          >
            <span className="block font-display text-4xl sm:text-5xl font-bold leading-none mb-3 tracking-tight text-warm-white">
              {stat.number}
            </span>
            <p className="text-[15px] text-stone-500 leading-relaxed">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* ── SEO & Local Search ── */}
      <div className="border-t border-stone-200">
        <div className="pt-10 sm:pt-20 px-6 sm:px-10">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-warm-white leading-[1.2] tracking-tight text-balance max-w-xl mb-3">
            Built to rank from day one.
          </h3>
          <p className="text-[15px] text-stone-600 leading-relaxed max-w-xl mb-8 sm:mb-16">
            Most sites launch without any SEO foundation. Yours comes with everything Google looks
            for, already in place before you go live.
          </p>
        </div>

        {/* Gold-accent editorial list — 1 col mobile, 2 col desktop */}
        <div className="px-10 sm:px-10 sm:grid sm:grid-cols-2 sm:gap-x-16 space-y-6 sm:space-y-0 sm:gap-y-10 pb-8 sm:pb-16">
          {seoFeatures.map((feature) => (
            <div key={feature.title} className="border-l-2 border-[#004D3A]/40 pl-5">
              <h4 className="text-[15px] sm:text-base font-semibold text-warm-white mb-1.5 sm:mb-2">
                {feature.title}
              </h4>
              <p className="text-[13px] sm:text-sm text-stone-500 leading-relaxed">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="border-t border-stone-200 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <p className="text-[15px] text-stone-600 leading-relaxed max-w-md">
          Want all of this working for your business?
        </p>
        <PrimaryButton href="/contact" size="sm" arrow className="flex-shrink-0">
          Get a Free Consultation
        </PrimaryButton>
      </div>
    </section>
  );
}
