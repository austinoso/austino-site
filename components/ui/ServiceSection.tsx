/**
 * ServiceSection — wrapper for service page content sections.
 * Provides the border, gradient divider, and standard padding.
 */

const GRADIENTS = [
  "linear-gradient(90deg, transparent, rgba(212,168,83,0.05) 30%, rgba(244,114,182,0.04) 55%, rgba(167,139,250,0.03) 75%, transparent)",
  "linear-gradient(90deg, transparent 5%, rgba(244,114,182,0.04) 30%, rgba(212,168,83,0.05) 55%, rgba(167,139,250,0.03) 80%, transparent 95%)",
  "linear-gradient(90deg, transparent, rgba(167,139,250,0.04) 25%, rgba(244,114,182,0.05) 50%, rgba(212,168,83,0.03) 75%, transparent)",
  "linear-gradient(90deg, transparent, rgba(212,168,83,0.04) 30%, rgba(244,114,182,0.05) 55%, rgba(167,139,250,0.03) 75%, transparent)",
  "linear-gradient(90deg, transparent 5%, rgba(244,114,182,0.04) 25%, rgba(212,168,83,0.05) 50%, rgba(167,139,250,0.04) 75%, transparent 95%)",
  "linear-gradient(90deg, transparent, rgba(212,168,83,0.04) 35%, rgba(244,114,182,0.04) 55%, rgba(167,139,250,0.03) 75%, transparent)",
  "linear-gradient(90deg, transparent, rgba(244,114,182,0.04) 25%, rgba(212,168,83,0.05) 50%, rgba(167,139,250,0.04) 75%, transparent)",
];

type ServiceSectionProps = {
  children: React.ReactNode;
  /** Which gradient preset to use (0-based index, wraps around). Omit for no gradient. */
  gradient?: number;
  /** Override the inner padding classes. Use empty string for no wrapper. */
  padding?: string;
  /** Extra classes on the outer wrapper */
  className?: string;
};

export function ServiceSection({
  children,
  gradient,
  padding = "section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32",
  className = "",
}: ServiceSectionProps) {
  const bg = gradient !== undefined ? GRADIENTS[gradient % GRADIENTS.length] : undefined;

  return (
    <div className={`relative border-b border-stone-200 ${className}`}>
      {bg && (
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{ background: bg }}
          aria-hidden="true"
        />
      )}
      {padding ? <div className={padding}>{children}</div> : children}
    </div>
  );
}
