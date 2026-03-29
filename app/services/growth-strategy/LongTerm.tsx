import TimelineCards from "./TimelineCards";

export default function LongTerm() {
  return (
    <section data-fade className="px-6 sm:px-10 md:px-14 lg:px-20 pb-14 sm:pb-20 md:pb-24">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 lg:items-start">
        {/* Left: heading — sticks at viewport center while scrolling */}
        <div className="lg:col-span-5 lg:sticky lg:top-[calc(50vh-100px)]">
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-4">
            A site that gets <span className="text-[#004D3A]">stronger every month.</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed text-pretty">
            Every page I build keeps pulling traffic after it&apos;s published. Every fix I make
            stacks on the last.
          </p>
          <p className="mt-5 text-sm text-stone-500 leading-relaxed border-l-2 border-[#004D3A]/25 pl-4 text-pretty">
            This isn&apos;t paid ads. You won&apos;t see results overnight. But every month the
            results stack, and the gap between you and your competitors gets harder for them
            to&nbsp;close.
          </p>
        </div>

        {/* Right: timeline (client island) */}
        <div className="lg:col-span-7">
          <TimelineCards />
        </div>
      </div>
    </section>
  );
}
