import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CartoonButton } from "@/components/ui/cartoon-button";
import { CurvedMarqueeText } from "@/components/ui/curved-marquee-text";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-ink lg:min-h-[125vh]">
      <Image
        src="/photos/homepage.png"
        alt="Mujer leyendo su journal Well Brain en la tina, rodeada de velas y luz cálida"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_15%]"
      />

      {/* Destellos decorativos */}
      <SparkleIcon className="absolute top-32 right-[12%] h-5 w-5 text-white/40" />
      <SparkleIcon className="absolute right-[22%] bottom-24 h-3 w-3 text-lavender/60" />
      <span className="absolute right-10 bottom-10 z-[1] h-8 w-8 rounded-full bg-gradient-to-br from-white/70 via-lavender/40 to-transparent shadow-[0_0_20px_rgba(216,196,255,0.4)]" />

      {/* Columna de contenido: título/botón arriba, marquee siempre abajo del todo.
          flex-col + justify-between hace que la sección (y la foto, que la cubre
          entera con object-cover) crezca más allá de 100vh si hace falta, en vez
          de recortar o superponer el marquee sobre el texto en pantallas anchas y bajas. */}
      <div className="relative z-10 flex w-full flex-1 flex-col justify-between pt-28 pb-6 sm:pt-32 lg:pt-52 lg:pb-2">
        <div className="max-w-3xl space-y-6 px-10 lg:px-24">
          <h1 className="font-display text-5xl leading-[0.95] uppercase tracking-tight text-white [text-shadow:2px_3px_0_rgba(0,0,0,0.25),0_10px_24px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-7xl">
            <span className="block">Change</span>
            <span className="block whitespace-nowrap">
              Your <span className="text-lavender">Brain</span>
            </span>
            <span className="block">Change</span>
            <span className="block whitespace-nowrap">
              Your <span className="text-pink">Life</span>
            </span>
          </h1>

          <div className="mt-10 sm:mt-12 lg:mt-14">
            <CartoonButton
              label="Start Your Journey"
              href="/method"
              color="bg-pink"
              icon={<ArrowRight className="h-5 w-5" />}
              className="h-18 px-14 text-base text-ink tracking-[0.2em] border-transparent"
            />
          </div>
        </div>

        {/* Texto decorativo gigante: marquee infinito sobre una curva suave (colina), a sangre (sin el padding horizontal del bloque de texto) */}
        <CurvedMarqueeText
          className="pointer-events-none mt-16 h-32 w-full shrink-0 select-none sm:mt-20 sm:h-44 lg:mt-24 lg:h-60"
          fill="#D8C4FF"
        />
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
