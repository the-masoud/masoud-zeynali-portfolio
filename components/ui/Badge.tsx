import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "emerald" | "steel" | "outline";
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "cyan",
  dot = false,
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-full tracking-wider border transition-colors";

  const variantStyles = {
    cyan: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    steel: "bg-slate-800/60 text-slate-300 border-slate-700/60",
    outline: "bg-transparent text-fg-secondary border-border-subtle",
  };

  const dotColors = {
    cyan: "bg-accent-cyan",
    emerald: "bg-emerald-400",
    steel: "bg-slate-400",
    outline: "bg-fg-muted",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant]}`}
          />
          <span
            className={`relative inline-flex rounded-full h-1.5 w-1.5 ${dotColors[variant]}`}
          />
        </span>
      )}
      {children}
    </span>
  );
};
