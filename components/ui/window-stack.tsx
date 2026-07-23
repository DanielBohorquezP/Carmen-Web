import { cn } from "@/lib/utils";

interface WindowStackProps {
  className?: string;
  variant?: "diagonal" | "stacked-right";
}

/**
 * Ventanas decorativas apiladas detrás del elemento principal, para el
 * efecto de "marco de ventana" reutilizado en fotos y tarjetas del sitio
 * (paleta restringida a rosado/morado por decisión de marca). Renderizar
 * como hijo directo de un contenedor `relative`, junto al elemento
 * principal (que debe llevar `relative z-10`).
 *
 * - "diagonal": dos ventanas rotadas y redondeadas (look editorial suave).
 * - "stacked-right": dos ventanas rectas apiladas asomando a la derecha,
 *   estilo "ventanas de computador viejito" (sin rotación, bordes cuadrados).
 */
export function WindowStack({ className, variant = "diagonal" }: WindowStackProps) {
  if (variant === "stacked-right") {
    return (
      <>
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 z-0 translate-x-8 translate-y-8 border-2 border-ink bg-[#9B6FEA]",
            className,
          )}
        />
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 z-[1] translate-x-4 translate-y-4 border-2 border-ink bg-[#F6DE8C]",
            className,
          )}
        />
      </>
    );
  }

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
