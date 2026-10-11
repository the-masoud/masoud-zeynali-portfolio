import React from "react";
import Link from "next/link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  className = "",
  "aria-label": ariaLabel,
  ...props
}) => {
  const baseStyles =
    "action-button group inline-flex items-center justify-center font-sans font-medium focus-visible:ring-2 focus-visible:ring-accent-cyan disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "text-xs px-3 py-2 rounded-lg gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-lg gap-2",
    lg: "text-sm px-6 py-3.5 rounded-lg gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/40 shadow-[0_0_20px_rgba(56,189,248,0.08)]",
    secondary:
      "bg-canvas-900 text-fg-primary border border-border-panel",
    outline:
      "bg-transparent text-fg-secondary border border-border-subtle",
    ghost:
      "bg-transparent text-fg-secondary border border-transparent",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} aria-label={ariaLabel} {...props}>
      {children}
    </button>
  );
};
