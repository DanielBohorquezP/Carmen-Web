import { cn } from "@/lib/utils";

interface RetroWindowBarProps {
  label: string;
  className?: string;
  onClose?: () => void;
  closeLabel?: string;
}

/**
 * Barra de título estilo ventana de computador viejito (Win95/Mac clásico),
 * para superponer sobre fotos y darles aire de "screenshot" retro.
 */
export function RetroWindowBar({ label, className, onClose, closeLabel = "Cerrar" }: RetroWindowBarProps) {
  return (
    <div
      className={cn(
        "absolute inset-x-0 top-0 z-10 flex h-7 items-center justify-between border-b-2 border-ink bg-[#FFF9F2] px-2",
        className,
      )}
    >
      <span className="truncate font-button text-[10px] font-semibold tracking-wider text-ink">
        {label}
      </span>
      <div className="flex shrink-0 items-center gap-1 pl-2">
        <span className="h-[9px] w-[9px] border border-ink" />
        <span className="h-[9px] w-[9px] border border-ink" />
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="relative flex h-[9px] w-[9px] items-center justify-center border border-ink focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-1 focus-visible:outline-none"
          >
            <span className="absolute inset-0 flex items-center justify-center text-[7px] leading-none text-ink">
              ×
            </span>
          </button>
        ) : (
          <span className="relative h-[9px] w-[9px] border border-ink">
            <span className="absolute inset-0 flex items-center justify-center text-[7px] leading-none text-ink">
              ×
            </span>
          </span>
        )}
      </div>
    </div>
  );
}
