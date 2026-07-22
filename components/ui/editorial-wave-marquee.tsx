"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface EditorialWaveMarqueeProps {
  /** Frase que se repite en el listón (se agrega el separador " • " automáticamente). */
  text: string;
  /**
   * Controla tipografía/color/tamaño del listón (ej. "text-[9vw] text-[#9B6FEA]").
   * El tamaño de fuente define también la amplitud de la ola, ya que esta se
   * calcula en `em`.
   */
  className?: string;
  /** Duración de una vuelta completa del loop horizontal. Lento y pausado por diseño. */
  durationSeconds?: number;
  /** Amplitud de la ola en `em` (relativa al tamaño de fuente). Sutil por diseño. */
  amplitudeEm?: number;
  /** Cuántos caracteres abarca un ciclo completo de la ola (ola ancha y suave). */
  periodChars?: number;
  /** Cuántas veces se repite la frase dentro de una "copia" del listón. */
  repeat?: number;
}

/**
 * Listón tipográfico editorial: texto oversized que se desplaza en loop
 * infinito horizontal mientras cada carácter ondula verticalmente sobre una
 * curva senoidal ancha y suave (las letras mantienen su orientación, no
 * rotan). Pensado como capa decorativa de fondo detrás de otro contenido.
 *
 * El loop es matemáticamente cerrado: se renderizan dos copias idénticas del
 * listón y se anima `translate3d(0,0,0) -> translate3d(-50%,0,0)`; como
 * ambas copias comparten exactamente el mismo patrón de ola (índice de
 * carácter local, no global), el fotograma justo antes y justo después del
 * reinicio del loop es visualmente idéntico.
 */
export function EditorialWaveMarquee({
  text,
  className,
  durationSeconds = 60,
  amplitudeEm = 0.14,
  periodChars = 90,
  repeat = 6,
}: EditorialWaveMarqueeProps) {
  const [tabHidden, setTabHidden] = useState(false);

  useEffect(() => {
    const handleVisibility = () => setTabHidden(document.hidden);
    handleVisibility();
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const unit = `${text}   •   `;
  const copy = unit.repeat(repeat);
  const chars = [...copy, ...copy];

  return (
    <div className={cn("relative w-full overflow-hidden", className)} aria-hidden="true">
      <span className="sr-only">{text}</span>
      <div
        data-paused={tabHidden}
        className="editorial-marquee-track flex w-max items-baseline whitespace-nowrap font-heading uppercase leading-none will-change-transform"
        style={{ "--marquee-duration": `${durationSeconds}s` } as CSSProperties}
      >
        {chars.map((char, i) => {
          const localIndex = i % copy.length;
          const phase = ((localIndex % periodChars) / periodChars) * Math.PI * 2;
          const y = Math.sin(phase) * amplitudeEm;
          return (
            <span
              key={i}
              className="inline-block"
              style={{ transform: `translate3d(0, ${y.toFixed(3)}em, 0)` }}
            >
              {char === " " ? " " : char}
            </span>
          );
        })}
      </div>
    </div>
  );
}
