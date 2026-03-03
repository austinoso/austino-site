export default function TheReality() {
  return (
    <section
      data-fade
      className="px-6 sm:px-10 md:px-14 lg:px-20 pb-14 sm:pb-20 md:pb-24"
    >
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-5 max-w-2xl">
        Your next customer is already searching.{" "}
        <span className="text-gradient-gold">Can they find you?</span>
      </h2>
      <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl text-pretty">
        Right now, people in your area are Googling the exact service you offer.
        If your business doesn&apos;t show up, or doesn&apos;t look credible
        when it does, that customer goes to whoever does.
      </p>

      {/* ── The insight ── */}
      <div className="border-t border-stone-200 mt-10 pt-10 sm:pt-12">
        <p className="font-display text-xl sm:text-2xl md:text-[1.75rem] font-semibold text-warm-white leading-snug tracking-tight text-pretty max-w-2xl">
          Google doesn&apos;t rank you once and walk away. It watches whether
          you <span className="text-gradient-gold">keep showing up.</span>
        </p>

        {/* What "showing up" means */}
        <div className="flex flex-wrap gap-2.5 mt-8 max-w-xl">
          {[
            "Content that answers what customers ask",
            "A site that\u2019s clearly maintained",
            "Fresh pages that target real searches",
          ].map((item) => (
            <span
              key={item}
              className="inline-flex items-center px-4 py-2 rounded-full border border-warm-gold/20 text-sm text-warm-gold bg-warm-gold/[0.05]"
            >
              {item}
            </span>
          ))}
        </div>

        {/* The close */}
        <div className="mt-12 sm:mt-14 pt-8 sm:pt-10 border-t border-stone-200">
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl text-pretty">
            I handle all of it.{" "}
            <span className="text-warm-white font-medium">
              Your site, your content, your search rankings, month after month.
            </span>{" "}
            One person accountable for the whole picture.
          </p>
        </div>
      </div>
    </section>
  );
}
