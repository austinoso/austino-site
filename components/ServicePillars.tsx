import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  LayoutTemplate,
  MessageSquareMore,
  Sparkles,
  Workflow,
} from "lucide-react";

function WebsiteScreenshot() {
  return (
    <div
      className="overflow-hidden rounded-xl border border-stone-200 bg-white"
      style={{ boxShadow: "0 2px 0 0 rgba(28,25,23,0.06) inset" }}
      aria-hidden="true"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-stone-200 bg-stone-100 px-3 py-2">
        <span className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-[9px] w-[9px] rounded-full bg-stone-300" />
          ))}
        </span>
        <span className="mx-auto max-w-[180px] flex-1 truncate rounded-md border border-stone-200 bg-white px-2 py-[3px] text-center text-[11px] text-stone-400">
          mymassagecottage.com
        </span>
      </div>
      {/* Screenshot */}
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <Image
          src="/assets/mymassagecottage.com.png"
          alt={"My Massage Cottage — a Manteca massage therapy business site built by Loud Bark"}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 90vw, 55vw"
        />
      </div>
    </div>
  );
}

function AutomationVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full rounded-xl border border-stone-200 bg-white p-5 sm:p-6 ${className}`}
      style={{ boxShadow: "12px 12px 0px 0px #00382A, 0 8px 32px rgba(0,0,0,0.25)" }}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-stone-200 pb-4">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#004D3A]">
            Workflow support
          </p>
          <p className="mt-1 text-[18px] font-semibold text-warm-white">What gets handled faster</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 bg-stone-50">
          <Workflow className="h-4 w-4 text-[#004D3A]" aria-hidden="true" />
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {[
          {
            icon: <MessageSquareMore className="h-4 w-4 text-[#004D3A]" aria-hidden="true" />,
            title: "Lead follow-up",
            text: "A new inquiry comes in and the next message does not depend on memory.",
          },
          {
            icon: <CalendarClock className="h-4 w-4 text-[#004D3A]" aria-hidden="true" />,
            title: "Scheduling",
            text: "Appointments, reminders, and internal tasks stay in sync with less chasing.",
          },
          {
            icon: <LayoutTemplate className="h-4 w-4 text-[#004D3A]" aria-hidden="true" />,
            title: "Repeatable admin",
            text: "The same steps happen the same way without burning time every week.",
          },
          {
            icon: <Sparkles className="h-4 w-4 text-[#004D3A]" aria-hidden="true" />,
            title: "Cleaner handoffs",
            text: "Nothing gets stuck between inquiry, response, scheduling, and delivery.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-stone-200 bg-stone-50/80 p-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-stone-200 bg-white">
              {item.icon}
            </div>
            <p className="mt-3 text-[15px] font-semibold text-warm-white">{item.title}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-stone-500">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* â”€â”€ Visibility section: animated Google SERP mockup â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function SerpVisual() {
  const threePack = [
    { name: "Your Business", rating: 4.8, reviews: 120, open: true, highlight: true },
    { name: "Local Competitor A", rating: 3.6, reviews: 18, open: false, highlight: false },
    { name: "Local Competitor B", rating: 4.0, reviews: 34, open: true, highlight: false },
  ];

  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-stone-200 bg-white select-none"
      style={{ boxShadow: "0 8px 32px rgba(28,25,23,0.07)" }}
      aria-hidden="true"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-stone-200 bg-stone-100 px-3 py-2">
        <span className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-[9px] w-[9px] rounded-full bg-stone-300" />
          ))}
        </span>
        <span className="mx-auto max-w-[160px] flex-1 truncate rounded-md border border-stone-200 bg-white px-2 py-[3px] text-center text-[11px] text-stone-400">
          google.com
        </span>
      </div>

      <div className="p-4">
        {/* Search bar */}
        <div className="mb-4 flex items-center gap-2.5 rounded-full border border-stone-300/80 bg-white px-4 py-2.5 shadow-sm">
          <svg width="14" height="14" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <circle cx="4.3" cy="4.3" r="3" stroke="#9AA0A6" strokeWidth="1.3" />
            <path d="M6.8 6.8 L8.8 8.8" stroke="#9AA0A6" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <span className="text-[13px] text-stone-700">your service + your city</span>
        </div>

        {/* Maps 3-pack */}
        <div className="mb-3 overflow-hidden rounded-xl border border-stone-200">
          <div className="flex items-center justify-between border-b border-stone-100 bg-stone-50 px-3 py-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400">
              Maps
            </span>
            <span className="text-[10px] text-[#1A73E8]">More places</span>
          </div>
          {/* Map preview strip */}
          <div
            className="relative h-12 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #D5E8C8 0%, #C3D8AD 100%)" }}
          >
            <svg className="absolute inset-0 h-full w-full opacity-25" aria-hidden="true">
              <line x1="0" y1="55%" x2="100%" y2="58%" stroke="white" strokeWidth="3" />
              <line x1="0" y1="20%" x2="100%" y2="22%" stroke="white" strokeWidth="1.5" />
              <line x1="28%" y1="0" x2="26%" y2="100%" stroke="white" strokeWidth="1.5" />
              <line x1="68%" y1="0" x2="70%" y2="100%" stroke="white" strokeWidth="1.5" />
            </svg>
            <div className="absolute left-[24%] top-[18%]" aria-hidden="true">
              <svg width="11" height="14" viewBox="0 0 10 13" fill="none">
                <path
                  d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 8 5 8s5-4.25 5-8c0-2.76-2.24-5-5-5z"
                  fill="#EA4335"
                />
                <circle cx="5" cy="5" r="2" fill="white" />
              </svg>
            </div>
          </div>
          {/* 3-pack listings */}
          {threePack.map((biz, i) => (
            <div
              key={biz.name}
              className={`flex items-center gap-2.5 px-3 py-2.5${i < 2 ? " border-b border-stone-100" : ""}${biz.highlight ? " bg-amber-50/50" : ""}`}
            >
              <span
                className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[8px] font-bold leading-none${biz.highlight ? " bg-amber-500 text-white" : " bg-stone-100 text-stone-400"}`}
              >
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p
                  className={`truncate text-[11px] font-medium leading-snug${biz.highlight ? " text-stone-800" : " text-stone-400"}`}
                >
                  {biz.name}
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[9px] text-amber-400">
                    {"\u2605".repeat(Math.round(biz.rating))}
                  </span>
                  <span className="text-[9px] text-stone-400">
                    {biz.rating} ({biz.reviews})
                  </span>
                </div>
              </div>
              {biz.open && (
                <span className="flex-shrink-0 text-[9px] font-medium text-green-600">Open</span>
              )}
            </div>
          ))}
        </div>

        {/* Organic result */}
        <div className="overflow-hidden rounded-xl border border-stone-200 p-3.5 shadow-sm">
          <div className="mb-1.5 flex items-center gap-2">
            <span className="text-[10px] text-stone-400">yourbusiness.com</span>
          </div>
          <p className="text-[13px] font-semibold leading-snug text-[#1A73E8]">
            Your Business &mdash; Your City, CA
          </p>
          <p className="mt-1.5 text-[11px] leading-relaxed text-stone-400">
            The go-to provider in your area. Book online or call today...
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServicePillars() {
  return (
    <div id="services">
      {/* â”€â”€ 01 Website â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section
        className="relative border-b border-stone-200 bg-white"
        aria-labelledby="website-heading"
      >
        <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-10 sm:py-24 md:px-16 lg:px-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20">
            {/* LEFT: Screenshot with offset warm accent panel */}
            <div>
              {/* Panel sits behind screenshot — peeks out bottom-left */}
              <div className="relative">
                <div
                  className="absolute -left-3 top-5 right-5 bottom-[-10px] rounded-2xl"
                  style={{
                    background: "linear-gradient(155deg, #D4EAE2 0%, #C2DED5 100%)",
                    boxShadow: "-8px 10px 0px 0px #A8CCBF",
                  }}
                  aria-hidden="true"
                />
                {/* Screenshot on top */}
                <div className="relative z-10">
                  <WebsiteScreenshot />
                  {/* Proof chip breaking out bottom-left */}
                  <div
                    className="absolute -bottom-5 left-3 z-10 flex items-center gap-2.5 rounded-xl border border-stone-100 bg-white px-3 py-2 shadow-[0_8px_28px_rgba(28,25,23,0.14),0_2px_6px_rgba(28,25,23,0.06)]"
                    aria-label="Page 1 search ranking for Manteca massage therapy"
                  >
                    <span
                      className="h-2 w-2 flex-shrink-0 rounded-full bg-green-500"
                      style={{ boxShadow: "0 0 0 3px rgba(22,163,74,0.2)" }}
                      aria-hidden="true"
                    />
                    <div className="leading-none">
                      <p className="mb-[3px] text-[11px] font-semibold text-stone-800">
                        Page&nbsp;1 ranking
                      </p>
                      <p className="text-[10px] text-stone-400">Manteca massage&nbsp;therapy</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="/work/my-massage-cottage"
                className="group mt-10 inline-flex items-center gap-1.5 text-[13px] text-stone-400 transition-colors duration-200 hover:text-[#004D3A]"
              >
                See the full case study
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* RIGHT: Copy */}
            <div className="flex flex-col">
              <h2
                id="website-heading"
                className="font-display text-[2.2rem] font-bold leading-[1.04] tracking-tight text-warm-white sm:text-[2.7rem]"
              >
                Built around your business,
                <br className="hidden sm:block" /> not a&nbsp;template.
              </h2>

              <p className="mt-5 max-w-[42ch] text-[16px] leading-relaxed text-stone-600">
                Everything starts from scratch &mdash; nothing to limit how fast it loads or how
                well it converts.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Ranks on Google",
                  "Looks right on any phone",
                  "Loads before they bounce",
                  "Designed to get calls",
                  "Yours to grow into",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-stone-200 bg-white px-4 py-2 text-[13px] font-medium text-stone-600"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <Link
                href="/services/web-development"
                className="group mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-[#004D3A] transition-colors duration-200 hover:text-[#003328]"
              >
                Explore web development
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ 02 Visibility â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section
        className="relative border-b border-stone-200 bg-[#F2F7F5]"
        aria-labelledby="visibility-heading"
      >
        <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-10 sm:py-24 md:px-16 lg:px-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
            {/* LEFT: Copy */}
            <div className="flex flex-col">
              <h2
                id="visibility-heading"
                className="font-display text-[2.2rem] font-bold leading-[1.04] tracking-tight text-warm-white sm:text-[2.7rem]"
              >
                Show up before
                <br className="hidden sm:block" /> someone&nbsp;else&nbsp;does.
              </h2>

              {/* Pull quote — amber left border gives it visual weight */}
              <blockquote className="mt-6 border-l-[3px] border-[#004D3A]/60 pl-4">
                <p className="text-[15px] leading-relaxed text-stone-600">
                  &ldquo;75% of people never scroll past page&nbsp;one.&rdquo;
                </p>
                <cite className="mt-1 block text-[13px] not-italic text-stone-400">HubSpot</cite>
              </blockquote>

              <p className="mt-5 text-[16px] leading-relaxed text-stone-600">
                Search is where buying decisions start. If your business isn&apos;t showing up,
                someone else is getting that&nbsp;call.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Google Business Profile",
                  "Local search pages",
                  "City-targeted content",
                  "AI answers",
                  "Competitor analysis",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-[13px] font-medium text-stone-600"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <Link
                href="/services/growth-strategy"
                className="group mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-[#004D3A] transition-colors duration-200 hover:text-[#003328]"
              >
                Explore growth strategy
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* RIGHT: SERP mockup with proof badge */}
            <div className="relative pb-6">
              <div className="relative">
                <div
                  className="absolute -right-3 top-5 left-5 bottom-[-10px] rounded-2xl"
                  style={{
                    background: "linear-gradient(155deg, #D4EAE2 0%, #C2DED5 100%)",
                    boxShadow: "8px 10px 0px 0px #A8CCBF",
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <SerpVisual />
                </div>
              </div>
              {/* Proof badge — real client results anchored to the visual */}
              <div className="absolute -bottom-2 right-4 z-10 flex items-center gap-5 rounded-xl border border-stone-100 bg-white px-5 py-3 shadow-[0_8px_28px_rgba(28,25,23,0.14),0_2px_6px_rgba(28,25,23,0.06)]">
                <div className="leading-none">
                  <span
                    className="h-2 w-2 inline-block rounded-full bg-green-500 mr-1.5 align-middle"
                    style={{ boxShadow: "0 0 0 3px rgba(22,163,74,0.2)" }}
                    aria-hidden="true"
                  />
                  <span className="text-[12px] font-semibold text-stone-700">Page&nbsp;1</span>
                  <p className="mt-0.5 text-[10px] text-stone-400">maps &amp; organic</p>
                </div>
                <div className="h-8 w-px bg-stone-200" aria-hidden="true" />
                <div className="leading-none">
                  <p className="text-[22px] font-bold text-warm-white">+72%</p>
                  <p className="mt-0.5 text-[11px] text-stone-400">clicks</p>
                </div>
                <div className="h-8 w-px bg-stone-200" aria-hidden="true" />
                <div className="leading-none">
                  <p className="text-[22px] font-bold text-warm-white">+76%</p>
                  <p className="mt-0.5 text-[11px] text-stone-400">impressions</p>
                </div>
                <div className="leading-snug">
                  <p className="text-[11px] font-semibold text-stone-600">Real client</p>
                  <p className="text-[11px] text-stone-500">first 2&nbsp;months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 Automation ────────────────────────────────────────────── */}
      <section
        className="relative border-b border-white/10 bg-[#004D3A]"
        aria-labelledby="automation-heading"
      >
        <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-10 sm:py-24 md:px-16 lg:px-20 lg:py-28">
          <h2 id="automation-heading" className="sr-only">
            Follow-through &amp; Automation
          </h2>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20">
            {/* LEFT: Visual */}
            <div className="relative flex justify-center lg:justify-start">
              <div
                className="pointer-events-none absolute inset-y-6 left-[-1rem] hidden w-[82%] rounded-[34px] bg-white/[0.05] lg:block"
                aria-hidden="true"
              />
              <AutomationVisual className="relative z-[1] w-full" />
            </div>

            {/* RIGHT: Copy */}
            <div className="flex flex-col">
              <h3 className="font-display text-[1.95rem] font-bold leading-[1.02] tracking-tight text-white sm:text-[2.35rem]">
                Keep good leads from slipping through.
              </h3>

              <p className="mt-5 text-[16px] leading-relaxed text-emerald-100/75 sm:text-[17px]">
                I naturally include automation where it makes sense — follow-up, scheduling,
                repeatable admin. If a business needs deeper workflow support, that can become its
                own project&nbsp;too.
              </p>

              <Link
                href="/services/automation"
                className="group mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-[#E07A5F] transition-colors duration-200 hover:text-[#C9604A]"
              >
                Explore automation
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
