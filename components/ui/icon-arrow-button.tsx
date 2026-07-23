import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconArrowButtonProps {
  href?: string;
  onClick?: () => void;
  label: string;
  className?: string;
  /** Cuando se pasa, renderiza un círculo sólido de este color en vez del estilo outline/invert por defecto. */
  tone?: string;
}

export function IconArrowButton({
  href,
  onClick,
  label,
  className,
  tone,
}: IconArrowButtonProps) {
  const sharedClasses = tone
    ? cn(
        "group/arrow inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300 hover:scale-105",
        className,
      )
    : cn(
        "group/arrow inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-white transition-all duration-300",
        "hover:-translate-y-0.5 hover:bg-ink hover:text-white hover:shadow-[0_4px_0_0_#1D1D1D] active:translate-y-0 active:shadow-none",
        "sm:h-10 sm:w-10",
        className,
      );

  const sharedStyle = tone ? { backgroundColor: tone } : undefined;

  const content = (
    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/arrow:rotate-45" />
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        aria-label={label}
        className={sharedClasses}
        style={sharedStyle}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(sharedClasses, "cursor-pointer")}
      style={sharedStyle}
    >
      {content}
    </button>
  );
}
