"use client";

/* ─────────────────────────────────────────────────────────── */
/*  MarqueeStrip — infinite scroll ticker that adds movement   */
/*  and visual energy between sections. Classic agency motif.  */
/* ─────────────────────────────────────────────────────────── */

const items = [
  "Web Development",
  "Business Automation",
  "Growth Strategy",
  "SEO & Performance",
  "Local Dominance",
  "Custom Engineering",
  "UI/UX Design",
  "Technical Advisory",
];

export default function MarqueeStrip() {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-8 shrink-0">
      <span className="font-display text-sm sm:text-base font-bold uppercase tracking-[0.15em] text-white/[0.08] whitespace-nowrap">
        {item}
      </span>
      <span className="h-1.5 w-1.5 rounded-full bg-cyber-accent/20 shrink-0" />
    </span>
  ));

  return (
    <div
      className="relative w-full py-8 sm:py-10 overflow-hidden border-y border-white/[0.04] bg-[#060608]"
      aria-hidden="true"
    >
      <div className="flex gap-8 animate-marquee">
        {/* Duplicate content for seamless loop */}
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}
