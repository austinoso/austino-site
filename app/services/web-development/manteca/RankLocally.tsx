import { MapPin, FileCode2, Smartphone, Gauge, Star } from "lucide-react";

export default function RankLocally() {
  return (
    <section data-fade>
      <p className="section-label mb-4">What It Takes</p>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        What it actually takes to rank locally in Manteca.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-12">
        Local SEO isn&apos;t a magic trick. It&apos;s a set of specific,
        technical things your website needs to do — and most small business
        sites in the Central Valley aren&apos;t doing any of them.
      </p>

      {/* Bento grid — 5-col like FirstImpressions */}
      <div className="grid grid-cols-1 md:grid-cols-5 border-t border-l border-white/[0.06]">
        {/* ── Google Business Profile — featured, 3 cols × 2 rows ── */}
        <div className="md:col-span-3 md:row-span-2 border-b border-r border-white/[0.06] p-7 sm:p-9 flex flex-col">
          <div className="w-10 h-10 rounded-full border border-cyber-accent/25 bg-cyber-accent/[0.06] flex items-center justify-center flex-shrink-0 mb-5">
            <MapPin
              className="w-[18px] h-[18px] text-cyber-accent"
              aria-hidden="true"
            />
          </div>
          <h3 className="font-display text-lg sm:text-xl font-semibold text-white leading-snug mb-3">
            Google Business Profile Integration
          </h3>
          <p className="text-[15px] text-cyber-gray-300 leading-relaxed max-w-md flex-1">
            Your website and your Google Business Profile need to tell the
            same story — same name, address, phone number, hours, and
            services. When they match, Google trusts your listing more and
            ranks it higher in the local map pack.
          </p>
          <p className="text-sm text-cyber-accent/70 leading-relaxed mt-4">
            Most Manteca businesses have a profile but it doesn&apos;t connect
            to their website at all. That disconnect hurts both.
          </p>
        </div>

        {/* ── Local Schema ── */}
        <div className="md:col-span-2 border-b border-r border-white/[0.06] p-6 sm:p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
              <FileCode2
                className="w-[18px] h-[18px] text-cyber-accent"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-[15px] font-semibold text-white">
              Local Schema Markup
            </h3>
          </div>
          <p className="text-sm text-cyber-gray-400 leading-relaxed flex-1">
            Structured data tells Google exactly what your business does and
            where you&apos;re located — in a language it can parse without
            guessing. Invisible to visitors, critical for rankings.
          </p>
          <p className="text-xs text-cyber-accent/60 mt-3">
            Template builders don&apos;t add this. Most web designers skip it.
          </p>
        </div>

        {/* ── Mobile-First ── */}
        <div className="md:col-span-2 border-b border-r border-white/[0.06] p-6 sm:p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
              <Smartphone
                className="w-[18px] h-[18px] text-cyber-accent"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-[15px] font-semibold text-white">
              Mobile-First Design
            </h3>
          </div>
          <p className="text-sm text-cyber-gray-400 leading-relaxed flex-1">
            Google indexes the mobile version of your site first. If it&apos;s
            slow or hard to navigate on a phone, that&apos;s the version
            Google ranks — and most of your Manteca customers see.
          </p>
          <p className="text-xs text-cyber-accent/60 mt-3">
            60%+ of local searches happen on mobile.
          </p>
        </div>

        {/* ── Page Speed ── */}
        <div className="md:col-span-2 border-b border-r border-white/[0.06] p-6 sm:p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
              <Gauge
                className="w-[18px] h-[18px] text-cyber-accent"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-[15px] font-semibold text-white">
              Page Speed &amp; Core Web Vitals
            </h3>
          </div>
          <p className="text-sm text-cyber-gray-400 leading-relaxed flex-1">
            Google measures load speed, layout stability, and interactivity.
            These are confirmed ranking signals. A slow site gets pushed
            down — even if your content is solid.
          </p>
          <p className="text-xs text-cyber-accent/60 mt-3">
            Template sites ship bloated code. Custom sites only ship what&apos;s needed.
          </p>
        </div>

        {/* ── Content / E-E-A-T ── */}
        <div className="md:col-span-3 border-b border-r border-white/[0.06] p-6 sm:p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
              <Star
                className="w-[18px] h-[18px] text-cyber-accent"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-[15px] font-semibold text-white">
              Content That Proves Expertise
            </h3>
          </div>
          <p className="text-sm text-cyber-gray-400 leading-relaxed flex-1">
            Service pages, FAQ sections, and location-specific content signal
            to Google that your business is real, local, and knows what
            it&apos;s talking about. This is Google&apos;s E-E-A-T framework
            in action — Experience, Expertise, Authoritativeness, Trust.
          </p>
          <p className="text-xs text-cyber-accent/60 mt-3">
            A single homepage with your phone number isn&apos;t enough anymore.
            Google rewards depth.
          </p>
        </div>
      </div>
    </section>
  );
}
