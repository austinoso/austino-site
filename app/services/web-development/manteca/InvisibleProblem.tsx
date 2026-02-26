import { EyeOff, Clock, MousePointerClick } from "lucide-react";

const problems = [
  {
    icon: EyeOff,
    stat: "75%",
    statLabel: "never scroll past page 1",
    heading: "Invisible where it counts",
    body: "If your business isn't on the first page of Google when someone searches \"plumber in Manteca\" or \"massage near me,\" you don't exist to that customer. Three out of four people never click past page one.",
    source: {
      label: "HubSpot, 2024",
      href: "https://www.hubspot.com/marketing-statistics",
    },
  },
  {
    icon: Clock,
    stat: "0.05s",
    statLabel: "to form a first impression",
    heading: "Your site is being judged instantly",
    body: "Visitors decide whether to stay or leave in 50 milliseconds. A slow, dated, or confusing site doesn't get a second chance — they hit back and click your competitor instead.",
    source: {
      label: "Lindgaard et al., Behaviour & IT, 2006",
      href: "https://doi.org/10.1080/01449290500330448",
    },
  },
  {
    icon: MousePointerClick,
    stat: "46%",
    statLabel: "of Google searches are local",
    heading: "Local searches lead to action",
    body: "Nearly half of all Google searches have local intent. People searching for services in Manteca are ready to buy — they just need to find someone they trust. If your site doesn't show up, someone else's will.",
    source: {
      label: "GoGulf / Safari Digital",
      href: "https://www.safaridigital.com.au/blog/local-seo-statistics/",
    },
  },
];

export default function InvisibleProblem() {
  return (
    <section data-fade>
      <p className="section-label mb-4">The Problem</p>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        Having a website isn&apos;t the same as being found.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-12">
        Most Manteca businesses have some kind of website. But when a
        potential customer pulls out their phone and searches for what you
        do, does your site actually show up? For most local businesses, the
        honest answer is no.
      </p>

      <div className="border-t border-white/[0.06]">
        {problems.map((problem) => (
          <div
            key={problem.heading}
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr] border-b border-white/[0.06]"
          >
            {/* Left — stat + icon */}
            <div className="p-6 sm:p-8 md:border-r md:border-white/[0.06] flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
                  <problem.icon
                    className="w-[18px] h-[18px] text-cyber-accent"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-white">
                  {problem.heading}
                </h3>
              </div>
              <div className="ml-12">
                <span className="font-display text-2xl sm:text-3xl font-bold text-cyber-accent leading-none">
                  {problem.stat}
                </span>
                <p className="text-xs text-cyber-gray-400 mt-1">
                  {problem.statLabel}
                </p>
              </div>
            </div>

            {/* Right — description */}
            <div className="p-6 sm:p-8 flex flex-col justify-center border-t border-white/[0.06] md:border-t-0">
              <p className="text-sm sm:text-[15px] text-cyber-gray-300 leading-relaxed">
                {problem.body}
              </p>
              <a
                href={problem.source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-cyber-accent/60 hover:text-cyber-accent transition-colors font-mono mt-2 inline-block"
              >
                {problem.source.label} ↗
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
