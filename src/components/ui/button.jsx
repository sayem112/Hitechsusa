import { cn } from "@/lib/utils";

const variants = {
  default:
    "inline-flex items-center justify-center rounded-md bg-blue-500 font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50",
  outline:
    "inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
  ghost:
    "inline-flex items-center justify-center rounded-md font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white",
};

const sizes = {
  default: "h-10 px-4 py-2 text-sm",
  lg: "h-auto px-7 py-6 text-base",
  icon: "h-10 w-10",
};

export function Button({
  className,
  variant = "default",
  size = "default",
  href,
  type = "button",
  children,
  ...props
}) {
  const classes = cn(variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
