import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

const variantClasses: Record<string, string> = {
  default: "bg-accent",
  secondary: "bg-cream",
  outline: "bg-white",
};

export function Badge({ variant = "default", className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border-2 border-ink px-2.5 py-0.5 text-xs font-bold text-ink ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
