import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "dark" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-body font-medium tracking-wide transition-all duration-300 ease-out rounded-full disabled:opacity-50 disabled:pointer-events-none disabled:translate-y-0 disabled:shadow-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-blush-soft text-cream hover:bg-rose hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0",
  outline:
    "bg-transparent text-ink border border-ink/20 hover:border-ink hover:bg-ink hover:text-cream",
  dark: "bg-ink text-cream hover:bg-rose hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0",
  ghost: "bg-cream text-ink border border-transparent hover:border-line",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-sm sm:text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: () => void;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
