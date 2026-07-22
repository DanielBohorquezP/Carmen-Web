import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CartoonButton } from "@/components/ui/cartoon-button";
import { CurvedMarqueeText } from "@/components/ui/curved-marquee-text";
import { HandDrawnCircle, HandDrawnUnderline } from "@/components/ui/hand-drawn";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-ink">
      <Image
        src="/photos/fondo-ppal.png"
        alt="Mujer sonriendo con luz natural cálida"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_25%]"
      />

      {/* Oscurecimiento cálido: más fuerte a la izquierda para el texto, suave a la derecha sobre el rostro */}
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(26,18,14,0.72)_0%,rgba(26,18,14,0.4)_38%,rgba(26,18,14,0.08)_65%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1a120e]/50 to-transparent" />

      {/* Destellos decorativos */}
      <SparkleIcon className="absolute top-32 right-[12%] h-5 w-5 text-white/40" />
      <SparkleIcon className="absolute right-[22%] bottom-24 h-3 w-3 text-lavender/60" />
      <span className="absolute right-10 bottom-10 z-[1] h-8 w-8 rounded-full bg-gradient-to-br from-white/70 via-lavender/40 to-transparent shadow-[0_0_20px_rgba(216,196,255,0.4)]" />

      {/* Columna de contenido: título/botón arriba, marquee siempre abajo del todo.
          flex-col + justify-between hace que la sección (y la foto, que la cubre
          entera con object-cover) crezca más allá de 100vh si hace falta, en vez
          de recortar o superponer el marquee sobre el texto en pantallas anchas y bajas. */}
      <div className="relative z-10 flex w-full flex-1 flex-col justify-between pt-28 pb-6 sm:pt-32 lg:pt-32 lg:pb-2">
        <div className="max-w-2xl space-y-6 px-10 lg:px-24">
          <h1 className="font-heading text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            CHANGE
            <br />
            YOUR <span className="text-lavender">BRAIN</span>
            <br />
            CHANGE
            <br />
            YOUR <span className="text-pink">LIFE</span>
          </h1>

          <div className="mt-16">
            <CartoonButton
              label="Start Your Journey"
              href="/method"
              color="bg-[#9B6FEA]"
              icon={<ArrowRight className="h-5 w-5" />}
              className="h-18 px-14 text-base text-white tracking-[0.2em] border-transparent"
            />
          </div>
        </div>

        {/* Texto decorativo gigante: marquee infinito sobre una curva suave (colina), a sangre (sin el padding horizontal del bloque de texto) */}
        <CurvedMarqueeText className="pointer-events-none mt-10 h-32 w-full shrink-0 select-none sm:mt-16 sm:h-44 lg:mt-20 lg:h-60" />
      </div>
    </section>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0c.6 5.4 1.6 8.6 4 11 2.4 2.4 5.6 3.4 8 4-2.4.6-5.6 1.6-8 4-2.4 2.4-3.4 5.6-4 11-.6-5.4-1.6-8.6-4-11-2.4-2.4-5.6-3.4-8-4 2.4-.6 5.6-1.6 8-4 2.4-2.4 3.4-5.6 4-11Z" />
    </svg>
  );
}
