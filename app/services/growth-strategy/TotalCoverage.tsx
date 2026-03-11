import { Globe, CheckCircle2 } from "lucide-react";

const cities = ["Stockton", "Modesto", "Tracy"];
const services = [
  "Emergency Plumbing",
  "Water Heater Repair",
  "Drain Cleaning",
  "Leak Detection",
  "Sewer Line Repair",
  "Bathroom Remodel",
];

const features = [
  {
    title: "A page for every service \u00D7 every city",
    desc: "Six services across three cities means 18 pages \u2014 each one written for a specific search, with local details that make it genuinely useful. Not the same page with the city name swapped\u00A0in.",
  },
  {
    title: "City-specific proof points",
    desc: "Each page includes real local data \u2014 population, neighborhoods, nearby landmarks. Google can tell the difference between a page that knows Stockton and one that just mentions\u00A0it.",
  },
  {
    title: "Built for Google\u2019s technical standards",
    desc: "Proper schema markup, fast load times, internal linking between every page. The technical work that tells Google each page deserves to rank on its\u00A0own.",
  },
];

export default function TotalCoverage() {
  const totalPages = cities.length * services.length;

  return (
    <section data-fade className="px-6 sm:px-10 md:px-14 lg:px-20 pb-14 sm:pb-20 md:pb-24">
      {/* ── Add-on label ── */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-warm-gold/20 bg-warm-gold/[0.06] mb-8 sm:mb-10">
        <span className="text-[11px] font-mono font-medium text-warm-gold uppercase tracking-[0.15em]">
          Add-on
        </span>
      </div>

      {/* ── Heading ── */}
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-4 max-w-2xl">
        For businesses that need to{" "}
        <span className="text-gradient-gold">own every&nbsp;search.</span>
      </h2>
      <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mb-4 text-pretty">
        Not every business needs this. But if you&apos;re in a competitive market, offer a range of
        services, or cover more than one city, a handful of pages won&apos;t cut&nbsp;it.
      </p>
      <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mb-10 sm:mb-12 text-pretty">
        I build a dedicated page for every service you offer, in every city you serve. Each one
        targets a specific search and is built with real local detail. The result isn&apos;t just
        more pages. It&apos;s a site Google treats as the authority in your&nbsp;market.
      </p>

      {/* ── Coverage matrix mockup ── */}
      <div
        className="rounded-xl border border-stone-300 bg-[#F0EAE2] overflow-hidden select-none"
        style={{
          boxShadow: "12px 12px 0px 0px #C4B5A0, 0 8px 32px rgba(0,0,0,0.08)",
        }}
        aria-hidden="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-stone-300 bg-[#E8E2DA]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-warm-gold/10 border border-warm-gold/20 flex items-center justify-center">
              <Globe className="w-4 h-4 text-warm-gold" />
            </div>
            <div>
              <p className="text-sm font-semibold text-stone-900">Search Coverage</p>
              <p className="text-[11px] text-stone-500 font-mono">Example: Local Plumbing Co.</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5C8A64] animate-pulse" />
            <span className="text-[11px] text-[#5C8A64] font-mono">{totalPages} pages</span>
          </div>
        </div>

        {/* Matrix */}
        <div className="overflow-x-auto bg-[#FDFCFA]">
          <table className="w-full min-w-[420px]">
            <thead>
              <tr className="border-b border-stone-200/60">
                <th className="text-left px-5 sm:px-6 py-3 text-[11px] text-stone-400 font-mono uppercase tracking-wider w-[44%]">
                  Service
                </th>
                {cities.map((city) => (
                  <th
                    key={city}
                    className="px-3 sm:px-4 py-3 text-center text-[11px] text-stone-400 font-mono uppercase tracking-wider"
                  >
                    {city}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {services.map((service, i) => (
                <tr
                  key={service}
                  className={i < services.length - 1 ? "border-b border-stone-200/40" : ""}
                >
                  <td className="px-5 sm:px-6 py-3.5 text-sm text-stone-800 font-medium">
                    {service}
                  </td>
                  {cities.map((city) => (
                    <td key={city} className="px-3 sm:px-4 py-3.5 text-center">
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#5C8A64]/10">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5C8A64]" />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-6 py-3 border-t border-stone-300 bg-[#E8E2DA] flex items-center justify-between">
          <p className="text-[11px] text-stone-500">
            {totalPages} pages &middot; {totalPages} keywords targeted
          </p>
          <p className="text-[11px] text-stone-500 font-mono">Each page ranks independently</p>
        </div>
      </div>

      {/* ── Authority callout ── */}
      <div className="mt-8 sm:mt-10 rounded-xl border border-warm-gold/15 bg-warm-gold/[0.04] px-6 sm:px-8 py-6 sm:py-7">
        <h3 className="font-display text-lg sm:text-xl font-bold text-warm-white leading-snug tracking-tight mb-2">
          This is how Google picks the <span className="text-gradient-gold">authority.</span>
        </h3>
        <p className="text-[15px] text-stone-600 leading-relaxed max-w-2xl text-pretty">
          A business with 20+ interlinked, well-structured pages covering every service and city
          sends a clear signal: this is the expert. That&apos;s how you stop competing for page one
          and start owning&nbsp;it.
        </p>
      </div>

      {/* ── Features ── */}
      <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 mt-5 sm:mt-6">
        {features.map((f) => (
          <div key={f.title} className="border-l-2 border-warm-gold/20 pl-5 py-1">
            <h3 className="text-sm font-semibold text-warm-white mb-1.5">{f.title}</h3>
            <p className="text-[13px] text-stone-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
