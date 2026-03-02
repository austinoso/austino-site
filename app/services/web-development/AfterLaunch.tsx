import Link from "next/link";
import { ArrowRight } from "lucide-react";

const points = [
  {
    title: "You never touch the tech",
    body: "Hosting, speed, security, updates, backups. All handled. You won\u2019t get a login to manage or a dashboard to learn. If something needs to change, you tell me and it\u00A0happens.",
  },
  {
    title: "Your site grows with you",
    body: "New service? New location? I update the site to match. New pages, updated copy, whatever it needs. And with a Growth Strategy plan, I\u2019m actively building new content and improving what\u2019s already\u00A0there.",
  },
  {
    title: "Results compound over time",
    body: "The longer your site is live and actively managed, the more Google trusts it. Rankings climb, traffic grows, and each month builds on\u00A0the\u00A0last.",
  },
];

export default function AfterLaunch() {
  return (
    <section data-fade>
      {/* Heading — generous whitespace, breathing section */}
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 pb-12 sm:pb-20">
        <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance max-w-2xl mb-4">
          After launch, you&apos;re not on your own.
        </h2>
        <p className="text-[15px] text-stone-400 leading-relaxed max-w-xl mb-10 sm:mb-16">
          This isn&apos;t a build-and-disappear situation. Your site stays
          managed, supported, and working harder for you over time.
        </p>

        {/* Points — 3-col on md+, stacked on mobile */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {points.map((point, i) => (
            <div key={point.title} className="relative pl-8 sm:pl-0">
              <span className="absolute left-0 top-0 sm:static text-2xl sm:text-3xl font-display font-bold text-warm-gold/30 leading-none sm:mb-3 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold text-warm-white mb-1.5">
                {point.title}
              </h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Growth Strategy link */}
      <div className="border-t border-white/[0.06] px-8 sm:px-10 md:px-14 lg:px-20 py-8 sm:py-10">
        <Link
          href="/services/growth-strategy"
          className="inline-flex items-center gap-2 text-sm text-warm-gold hover:text-warm-white transition-colors duration-300"
        >
          Learn more about Growth Strategy
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
