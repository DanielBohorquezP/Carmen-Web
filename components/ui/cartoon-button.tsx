import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CartoonButtonProps {
  label: string;
  href?: string;
  color?: string;
  hasHighlight?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function CartoonButton({
  label,
  href,
  color = "bg-gradient-to-r from-pink to-lavender",
  hasHighlight = true,
  disabled = false,
  icon,
  onClick,
  className,
}: CartoonButtonProps) {
  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };

  const sharedClasses = cn(
    "group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-lg border-2 border-ink px-8",
    "font-button text-xs tracking-[0.15em] text-ink uppercase transition-all duration-150",
    color,
    disabled
      ? "pointer-events-none opacity-50"
      : "hover:shadow-[0_4px_0_0_#1D1D1D] hover:-translate-y-1 active:translate-y-0 active:shadow-none",
    className,
  );

  const content = (
    <>
      <span className="relative z-10 whitespace-nowrap">{label}</span>
      {icon && <span className="relative z-10">{icon}</span>}
      {hasHighlight && !disabled && (
        <div className="absolute top-1/2 left-[-100%] h-24 w-16 -translate-y-1/2 rotate-12 bg-white/50 transition-all duration-500 ease-in-out group-hover:left-[200%]" />
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} onClick={onClick} className={sharedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={cn(sharedClasses, disabled ? "cursor-not-allowed" : "cursor-pointer")}
    >
      {content}
    </button>
  );
}
