import React, { ReactNode } from "react";

export function PillButton({
  children,
  variant = "solid",
  className = "",
}: {
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-[color:var(--moss-dark)] shadow-sm"
      : "border border-foreground/30 text-foreground hover:bg-foreground/5";
  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}
