export type ButtonVariant = "default" | "ghost" | "outline";
export type ButtonSize = "default" | "sm" | "lg";

// ボタン・リンク共通の見た目（太枠＋ずらし影）
const base =
  "inline-flex items-center justify-center gap-2 border-2 border-ink font-display font-extrabold text-ink transition-transform cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5";

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-accent shadow-hard",
  ghost: "border-transparent bg-transparent hover:border-ink",
  outline: "bg-white shadow-hard",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "rounded-[14px] px-5 py-3 text-sm",
  sm: "rounded-xl px-4 py-2.5 text-sm",
  lg: "rounded-[14px] px-6 py-3.5 text-base",
};

export function buttonClass(variant: ButtonVariant = "default", size: ButtonSize = "default") {
  return `${base} ${variantClasses[variant]} ${sizeClasses[size]}`;
}
