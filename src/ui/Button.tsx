import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost" | "success";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const styles: Record<Variant, string> = {
  primary: "bg-sun text-ink hover:brightness-95",
  success: "bg-mint text-ink hover:brightness-95",
  ghost: "border border-line bg-white text-ink hover:bg-cream",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold shadow-sm transition-all hover:shadow active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 sm:text-base ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
