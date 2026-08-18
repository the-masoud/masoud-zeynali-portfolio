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
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-mono font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 rounded-sm gap-1.5",
    md: "text-sm px-5 py-2.5 rounded gap-2",
    lg: "text-base px-6 py-3.5 rounded gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/40 hover:bg-accent-cyan/20 hover:border-accent-cyan shadow-[0_0_15px_rgba(56,189,248,0.15)] active:scale-[0.98]",
    secondary:
      "bg-canvas-900 text-fg-primary border border-border-panel hover:bg-canvas-800 hover:border-fg-muted active:scale-[0.98]",
    outline:
      "bg-transparent text-fg-secondary border border-border-subtle hover:text-fg-primary hover:border-fg-secondary active:scale-[0.98]",
    ghost:
      "bg-transparent text-fg-secondary hover:text-accent-cyan hover:bg-canvas-850",
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
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
