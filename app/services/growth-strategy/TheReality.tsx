const googleFactors = [
  {
    title: "People-first content",
    description: "Real expertise, not generic filler written for\u00A0bots.",
  },
  {
    title: "Genuinely useful pages",
    description:
      "Each one answers a real question your customers are\u00A0searching.",
  },
  {
    title: "Actively maintained",
    description: "Clearly trustworthy and kept\u00A0current.",
  },
];

export default function TheReality() {
  return (
    <section
      data-fade
      className="px-6 sm:px-10 md:px-14 lg:px-20 pb-14 sm:pb-20 md:pb-24"
    >
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Left — heading + citation */}
        <div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance">
            Google rewards the businesses that{" "}
            <span className="text-gradient-gold">keep showing up.</span>
          </h2>

          <p className="mt-8 text-[13px] text-stone-500">
            This isn&apos;t my framework. It&apos;s Google&apos;s.{" "}
            <a
              href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-gold hover:text-amber-700 transition-colors"
            >
              Google&apos;s Helpful Content Guidelines &rarr;
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>

        {/* Right — what "showing up" means */}
        <div className="space-y-4 lg:pt-2">
          {googleFactors.map((factor) => (
            <div
              key={factor.title}
              className="rounded-xl border border-stone-200 bg-white p-5"
              style={{
                boxShadow: "6px 6px 0px 0px #C4B5A0",
              }}
            >
              <p className="text-[15px] font-semibold text-warm-white">
                {factor.title}
              </p>
              <p className="text-sm text-stone-500 leading-relaxed mt-1">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
