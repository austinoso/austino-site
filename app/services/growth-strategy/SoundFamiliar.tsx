export default function SoundFamiliar() {
  const pains = [
    "You\u2019re paying for a website that isn\u2019t bringing in\u00A0customers.",
    "Competitors are showing up above you and you\u2019re not sure\u00A0why.",
    "You know you should be doing \u2018something\u2019 with your website, but you don\u2019t have the time or the\u00A0answers.",
  ];

  return (
    <section
      data-fade
      className="px-6 sm:px-10 md:px-14 lg:px-20 pb-14 sm:pb-20 md:pb-24"
    >
      <div className="max-w-2xl">
        <p className="section-label mb-10 sm:mb-14">Sound Familiar?</p>

        <div className="space-y-6 sm:space-y-8">
          {pains.map((pain, i) => (
            <p
              key={i}
              className="font-display text-xl sm:text-2xl md:text-[1.65rem] font-semibold text-warm-white leading-snug tracking-tight text-pretty"
            >
              {pain}
            </p>
          ))}
        </div>

        <p className="text-base sm:text-lg text-stone-500 leading-relaxed mt-10 sm:mt-14 border-t border-stone-200 pt-8 text-pretty">
          Good news:{" "}
          <span className="text-warm-white font-medium">
            all of this is fixable.
          </span>
        </p>
      </div>
    </section>
  );
}
