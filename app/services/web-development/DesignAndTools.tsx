import Link from "next/link";
import Image from "next/image";
import {
  Fingerprint,
  Target,
  Smartphone,
  Zap,
  CalendarCheck,
  FileText,
  CreditCard,
  MessageCircleQuestion,
  BellRing,
  Wrench,
} from "lucide-react";

const designPoints = [
  {
    icon: Fingerprint,
    label: "Built around your business",
    desc: "No shared templates. Everything is designed around your business, your market, and your clientele.",
  },
  {
    icon: Target,
    label: "Every section earns its place",
    desc: "Not a digital brochure. Each page builds trust, answers questions, and drives bookings.",
  },
  {
    icon: Smartphone,
    label: "Mobile-first, always",
    desc: "Most local sites are desktop designs crammed onto a phone. Yours starts where your customers are.",
  },
  {
    icon: Zap,
    label: "Speed that ranks",
    desc: "Template sites load in 4\u20136 seconds. Yours loads in under one.",
  },
];

const tools = [
  {
    icon: CalendarCheck,
    title: "Online Booking",
    body: "Customers pick a time, confirm, and get a reminder — no phone tag, no back-and-forth.",
  },
  {
    icon: FileText,
    title: "Quote & Contact Forms",
    body: "Forms that collect exactly what you need to follow up fast, sent straight to\u00A0your\u00A0inbox.",
  },
  {
    icon: CreditCard,
    title: "Payments & Deposits",
    body: "Accept payments or deposits at the point of booking. Fewer no-shows, faster\u00A0cash\u00A0flow.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Instant Answers",
    body: "Smart FAQ sections, service details, and pricing — so customers get what they need without waiting on\u00A0you.",
  },
  {
    icon: BellRing,
    title: "Confirmations & Reminders",
    body: "Booking confirmations and appointment reminders sent automatically, so customers show up and you don\u2019t have to chase\u00A0them.",
  },
];

export default function DesignAndTools() {
  return (
    <section data-fade>
      {/* ── Design & Credibility ── */}
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 pb-0">
        <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance max-w-2xl mb-6">
          A site that looks as good as{" "}
          <span className="text-gradient-gold">your work.</span>
        </h2>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mb-10 sm:mb-14">
          No templates. No page builders. Every layout, animation, and
          interaction is designed from scratch to make your business look
          premium — because first impressions are everything.
        </p>
      </div>

      {/* ── Case Study + Design Points ── */}
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left — Browser mockup */}
        <div className="lg:col-span-7">
          <div
            className="rounded-xl border border-stone-300 bg-[#0C0B09] overflow-hidden select-none"
            style={{
              boxShadow: "-12px 12px 0px 0px #CEC8C1",
            }}
          >
            {/* Browser chrome */}
            <div
              className="flex items-center gap-3 px-4 py-2 border-b border-white/[0.04]"
              aria-hidden="true"
            >
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
          <p className="text-sm text-stone-500 mt-4">
            Built in{" "}
            <span className="text-warm-white font-medium">2 weeks</span> and
            ranking on{" "}
            <span className="text-warm-white font-medium">
              page 1 of Google
            </span>
            .{" "}
            <Link
              href="/work/my-massage-cottage"
              className="text-warm-gold hover:underline"
            >
              Read the case study &rarr;
            </Link>
          </p>
        </div>

        {/* Right — Design selling points */}
        <div className="lg:col-span-5 space-y-1">
          {designPoints.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.label}
                className="flex items-start gap-3 py-3 px-3 rounded-lg border border-transparent hover:border-stone-300 hover:bg-stone-50 transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-md bg-warm-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-warm-gold" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-sm font-medium text-warm-white block leading-snug">
                    {d.label}
                  </span>
                  <span className="text-[13px] text-stone-500 leading-relaxed block mt-0.5">
                    {d.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Built-In Business Tools ── */}
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 mt-16 sm:mt-20">
        <div className="mb-10 sm:mb-14 max-w-xl">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-3">
            Your site does the busy work.
          </h3>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Every site comes with tools that let customers take action.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.title}
                className="rounded-xl bg-white border border-stone-200 p-6 sm:p-7 transition-colors duration-300 hover:bg-stone-50 hover:border-stone-300"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <Icon className="w-4 h-4 text-warm-gold" aria-hidden="true" />
                  <h4 className="text-base font-semibold text-warm-white">
                    {tool.title}
                  </h4>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {tool.body}
                </p>
              </div>
            );
          })}

          {/* Wildcard — custom development */}
          <div className="rounded-xl border border-warm-gold/20 bg-warm-gold/[0.03] p-6 sm:p-7 transition-colors duration-300 hover:bg-warm-gold/[0.06] hover:border-warm-gold/30">
            <div className="flex items-center gap-2.5 mb-2">
              <Wrench className="w-4 h-4 text-warm-gold" aria-hidden="true" />
              <h4 className="text-base font-semibold text-warm-gold">
                Need something specific?
              </h4>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              Most of the time the right tool already exists. But if your
              business needs something that doesn&apos;t, I build it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
