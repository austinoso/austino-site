import { type LucideIcon } from "lucide-react";
import { type ReactNode } from "react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  /**
   * "inline"  — icon sits beside the title (default, used in WhatYouGet-style grids).
   * "stacked" — icon sits above the title (used in Always On / Landscape-style grids).
   */
  layout?: "inline" | "stacked";
  /**
   * When true, adds a subtle blue radial glow, a larger icon badge, and slightly
   * larger body text — intended for the featured / hero card in a bento grid.
   */
  accent?: boolean;
  /** Optional bottom slot — e.g. a stat + source citation or a bullet list. */
  footer?: ReactNode;
  className?: string;
}

const boxShadow =
  "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)";

export default function FeatureCard({
  icon: Icon,
  title,
  body,
  layout = "inline",
  accent = false,
  footer,
  className = "",
}: FeatureCardProps) {
  const isStacked = layout === "stacked";

  return (
    <div
      className={`group relative rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-cyber-accent/15 hover:bg-white/[0.03] flex flex-col overflow-hidden ${accent ? "p-7 sm:p-9" : "p-5 sm:p-6"} ${className}`}
      style={{ boxShadow }}
    >
      {/* Accent glow decoration — only on featured/accent cards */}
      {accent && (
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(64,224,255,0.06) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative flex flex-col flex-1">
        {isStacked ? (
          /* ── Stacked: large icon badge above title ── */
          <>
            <div
              className={`rounded-full flex items-center justify-center flex-shrink-0 mb-5 transition-all duration-300 group-hover:border-cyber-accent/30 group-hover:bg-cyber-accent/[0.08] ${
                accent
                  ? "w-12 h-12 border-2 border-cyber-accent/25 bg-cyber-accent/[0.06]"
                  : "w-10 h-10 border border-cyber-accent/20 bg-cyber-accent/[0.06]"
              }`}
            >
              <Icon
                className={`text-cyber-accent ${accent ? "w-5 h-5" : "w-[18px] h-[18px]"}`}
                aria-hidden="true"
              />
            </div>
            <p
              className={`font-semibold text-white mb-3 leading-snug ${
                accent ? "text-lg sm:text-xl" : "text-[15px]"
              }`}
            >
              {title}
            </p>
          </>
        ) : (
          /* ── Inline: small icon badge beside title ── */
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-shrink-0 w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center transition-all duration-300 group-hover:border-cyber-accent/30 group-hover:bg-cyber-accent/[0.08]">
              <Icon
                className="w-[18px] h-[18px] text-cyber-accent"
                aria-hidden="true"
              />
            </div>
            <p className="text-[15px] font-semibold text-white">{title}</p>
          </div>
        )}

        {/* Body */}
        <p
          className={`leading-relaxed transition-colors duration-300 group-hover:text-cyber-gray-300 flex-1 ${
            accent
              ? "text-[15px] sm:text-base text-cyber-gray-300 max-w-md mb-4"
              : "text-sm text-cyber-gray-400"
          }`}
        >
          {body}
        </p>

        {/* Footer slot — stat blocks, bullet lists, etc. */}
        {footer && (
          <div className="mt-4 pt-4 border-t border-white/[0.06]">{footer}</div>
        )}
      </div>
    </div>
  );
}
