const SHADOW_RIGHT = "12px 12px 0px 0px #C4B5A0, 0 8px 32px rgba(0,0,0,0.08)";
const SHADOW_LEFT = "-12px 12px 0px 0px #C4B5A0, 0 8px 32px rgba(0,0,0,0.08)";

type BrowserMockupProps = {
  children: React.ReactNode;
  /** URL displayed in the address bar. Omit for no URL bar. */
  url?: string;
  /** Shadow direction for the hard offset shadow */
  shadowDirection?: "left" | "right";
  /** Visual theme for the chrome bar */
  variant?: "light" | "warm" | "dark";
  /** Container background/border classes if you need to override */
  className?: string;
  /** Dot opacity (some mockups use softer dots) */
  dotOpacity?: number;
  /** Additional props for the outer wrapper */
  role?: string;
  "aria-label"?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

const variants = {
  light: {
    container: "bg-white border-stone-200",
    chrome: "border-b border-stone-200 bg-stone-50",
    dots: 80,
    urlBar: "bg-stone-100 text-stone-500",
  },
  warm: {
    container: "bg-[#F0EAE2] border-stone-300",
    chrome: "border-b border-stone-300 bg-[#E8E2DA]",
    dots: 85,
    urlBar: "bg-[#F7F4F0] text-stone-500",
  },
  dark: {
    container: "bg-warm-surface border-white/[0.06]",
    chrome: "border-b border-white/[0.06] bg-warm-bg",
    dots: 100,
    urlBar: "bg-white/[0.04] text-stone-400",
  },
};

export function BrowserMockup({
  children,
  url,
  shadowDirection = "right",
  variant = "light",
  className = "",
  dotOpacity,
  ...rest
}: BrowserMockupProps) {
  const v = variants[variant];
  const opacity = dotOpacity ?? v.dots;
  const shadow = shadowDirection === "left" ? SHADOW_LEFT : SHADOW_RIGHT;

  return (
    <div
      className={`rounded-xl border overflow-hidden select-none ${v.container} ${className}`}
      style={{ boxShadow: shadow }}
      {...rest}
    >
      {/* Chrome bar */}
      <div
        className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 ${v.chrome}`}
        aria-hidden="true"
      >
        <div className="flex items-center gap-1.5">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: `rgba(255, 95, 87, ${opacity / 100})` }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: `rgba(254, 188, 46, ${opacity / 100})` }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: `rgba(40, 200, 64, ${opacity / 100})` }}
          />
        </div>
        {url && (
          <div className="flex-1 flex justify-center">
            <div
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono ${v.urlBar}`}
            >
              <svg
                className="w-2.5 h-2.5 opacity-40"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M11.5 1a3.5 3.5 0 00-3.5 3.5V7H3a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2H9V4.5a2.5 2.5 0 015 0V6h1V4.5A3.5 3.5 0 0011.5 1z" />
              </svg>
              {url}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      {children}
    </div>
  );
}
