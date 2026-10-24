import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { buttonClass } from "./buttonClass";
import type { ButtonSize, ButtonVariant } from "./buttonClass";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${buttonClass(variant, size)} disabled:opacity-50 ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
