import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type BackLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  inverted?: boolean;
  "aria-label"?: string;
};

export function BackLink({
  href,
  children,
  className = "mb-8 sm:mb-10",
  inverted = false,
  ...rest
}: BackLinkProps) {
  const colors = inverted
    ? "text-white/40 hover:text-white/80"
    : "text-stone-500 hover:text-warm-white";
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-sm font-mono transition-colors duration-300 tracking-wide ${colors} ${className}`}
      {...rest}
    >
      <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
      <span>{children}</span>
    </Link>
  );
}
