import { cn } from "@/lib/utils";

interface WindowStackProps {
  className?: string;
}

/**
 * Dos "ventanas" decorativas (rosada y lavanda) apiladas detrás del
 * elemento principal, para el efecto de "marco de ventana" reutilizado en
 * fotos y tarjetas del sitio (paleta restringida a rosado/morado por
 * decisión de marca). Renderizar como hijo directo de un contenedor
 * `relative`, junto al elemento principal (que debe llevar `relative z-10`).
 */
export function WindowStack({ className }: WindowStackProps) {
  return (
    <>
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 z-0 translate-x-2 translate-y-2 rotate-[-4deg] scale-[0.95] rounded-2xl border-2 border-pink bg-pink/55",
          className,
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 z-[1] translate-x-[-8px] translate-y-[-6px] rotate-[3deg] scale-[0.975] rounded-2xl border-2 border-lavender bg-lavender/60",
          className,
        )}
      />
    </>
  );
}
