import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function Card({ children, className = "", href }: CardProps) {
  const cardContent = (
    <div
      className={`relative p-10 rounded-2xl transition-all duration-300 group ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-2xl"
        style={{
          backgroundImage: `
            linear-gradient(rgba(64, 224, 255, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(64, 224, 255, 1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(64, 224, 255, 0.5), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative">{children}</div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[1px] bg-cyber-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ width: "100%" }}
        aria-hidden="true"
      />
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
