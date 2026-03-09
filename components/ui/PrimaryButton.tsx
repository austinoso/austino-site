import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonSize = "sm" | "default" | "lg";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  default: "px-7 py-3.5 text-[15px]",
  lg: "px-7 sm:px-8 py-3.5 sm:py-4 text-base",
};

const base =
  "group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-lg transition-all duration-300 hover:brightness-110 hover:-translate-y-px shadow-lg shadow-amber-600/20 hover:shadow-xl hover:shadow-amber-600/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-warm-bg";

type CommonProps = {
  children: React.ReactNode;
  size?: ButtonSize;
  arrow?: boolean;
  className?: string;
  "data-umami-event"?: string;
};

type LinkProps = CommonProps & {
  href: string;
  onClick?: never;
  disabled?: never;
  type?: never;
  "aria-label"?: string;
  "aria-busy"?: never;
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type Props = LinkProps | ButtonProps;

export function PrimaryButton({
  children,
  size = "default",
  arrow = false,
  className = "",
  ...rest
}: Props) {
  const classes = `${base} ${sizeClasses[size]} ${className}`.trim();

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
        {arrow && (
          <ArrowRight
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        )}
      </Link>
    );
  }

  const { disabled, ...btnRest } = rest as ButtonProps;
  return (
    <button
      className={`${classes} ${disabled ? "disabled:opacity-50 disabled:cursor-not-allowed" : ""}`}
      disabled={disabled}
      {...btnRest}
    >
      {children}
      {arrow && (
        <ArrowRight
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
