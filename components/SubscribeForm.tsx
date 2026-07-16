"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

export function SubscribeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStatus("success");
  }

  return (
    <section id="suscribete" className="scroll-mt-28 bg-coral px-6 py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          className="rounded-[2rem] bg-cream p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-display text-4xl leading-tight text-dark md:text-5xl">
            Súmate a la comunidad Well Brain
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-dark/70">
            Recibe promociones, novedades y contenido exclusivo directo a tu
            correo.
          </p>

          {status === "success" ? (
            <p className="mt-6 rounded-xl bg-lilac/30 px-4 py-3 text-sm font-medium text-dark">
              ¡Listo! Ya formas parte de la comunidad Well Brain.
            </p>
          ) : (
            <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subscribe-name"
                  className="text-xs font-semibold uppercase tracking-wide text-dark"
                >
                  Nombre
                </label>
                <input
                  id="subscribe-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="rounded-lg border border-dark/20 bg-white px-4 py-2.5 text-sm text-dark placeholder:text-dark/40 focus:border-pink focus:outline-none"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subscribe-email"
                  className="text-xs font-semibold uppercase tracking-wide text-dark"
                >
                  Correo electrónico
                </label>
                <input
                  id="subscribe-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-lg border border-dark/20 bg-white px-4 py-2.5 text-sm text-dark placeholder:text-dark/40 focus:border-pink focus:outline-none"
                  placeholder="tu@correo.com"
                />
              </div>
              <button
                type="submit"
                className="mt-2 rounded-xl bg-pink px-6 py-3 text-sm font-semibold tracking-wide text-dark transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Quiero suscribirme
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 24, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: 2 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="rounded-[2rem] bg-cream p-3 shadow-2xl">
            <img
              src="/photos/subscribe-room.jpg"
              alt="Un espacio real Well Brain"
              className="h-[400px] w-full rounded-[1.5rem] object-cover md:h-[460px]"
            />
          </div>
          <img
            src="/brand/sticker-control.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 -left-8 w-24 rotate-6 drop-shadow-xl md:w-28"
          />
        </motion.div>
      </div>
    </section>
  );
}
