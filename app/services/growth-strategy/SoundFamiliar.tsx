export default function SoundFamiliar() {
  const pains = [
    "You launched your site months ago and the phone hasn't rung.",
    "You're invisible on Google — but you don't know what to fix.",
    "Competitors are showing up above you and you're not sure why.",
    "You know you should be doing 'something' with your website, but you don't have the time or the answers.",
  ];

  return (
    <section
      data-fade
      className="px-6 sm:px-10 md:px-14 lg:px-20 pb-14 sm:pb-20 md:pb-24"
    >
      <div className="max-w-3xl">
        <p className="section-label mb-4">Sound Familiar?</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-10 sm:mb-12">
          Your website launched.{" "}
          <span className="text-stone-400">Then nothing happened.</span>
        </h2>

        <div className="space-y-4">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="flex items-start gap-4 py-3"
            >
              <span className="block w-1.5 h-1.5 rounded-full bg-warm-gold/50 mt-2.5 shrink-0" />
              <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
                {pain}
              </p>
            </div>
          ))}
        </div>

        <p className="text-base sm:text-lg text-stone-400 leading-relaxed mt-10 border-t border-white/[0.06] pt-8 text-pretty">
          None of this means your business is failing &mdash; it means your
          website isn&apos;t working as hard as it could be.{" "}
          <span className="text-warm-white font-medium">That&apos;s fixable.</span>
        </p>
      </div>
    </section>
  );
}
