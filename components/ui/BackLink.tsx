import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type BackLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
};

export function BackLink({ href, children, className = "mb-8 sm:mb-10", ...rest }: BackLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-sm font-mono text-stone-500 hover:text-warm-white transition-colors duration-300 tracking-wide ${className}`}
      {...rest}
    >
      <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
      <span>{children}</span>
    </Link>
  );
}
