"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { retroButtonVariants, retroButtonInnerVariants } from "@/components/ui/retro-button";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Method", href: "/method" },
  { label: "Resources", href: "/resources", comingSoon: true },
  { label: "Community", href: "/community", comingSoon: true },
  { label: "Journal", href: "/journal", comingSoon: true },
  { label: "Courses", href: "/courses", comingSoon: true },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-cream shadow-[0_1px_0_0_rgba(29,29,29,0.08)]">
      <div className="flex w-full items-center justify-between px-10 py-5 lg:px-24">
        <Link href="/" className="relative z-10 block h-9 w-auto shrink-0 lg:h-20">
          <Image
            src="/brand/logo-wellbrain.png"
            alt="Well Brain"
            width={160}
            height={80}
            className="h-9 w-auto object-contain lg:h-20"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) =>
            item.comingSoon ? (
              <span key={item.href} className="group relative cursor-default">
                <span className="font-button text-xs uppercase tracking-wider text-ink/40">
                  {item.label}
                </span>
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2.5 py-1.5 font-button text-[10px] tracking-[0.15em] text-white uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  Coming Soon
                  <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-ink" />
                </span>
              </span>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="font-button text-xs uppercase tracking-wider text-ink/80 transition-colors duration-300 hover:text-ink"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/resources"
            className="group relative inline-flex h-10 items-center justify-center gap-2 overflow-hidden rounded-lg border-2 border-ink px-6 font-button text-xs tracking-[0.15em] text-ink uppercase transition-all duration-150 bg-gradient-to-r from-pink to-lavender hover:shadow-[0_4px_0_0_#1D1D1D] hover:-translate-y-1 active:translate-y-0 active:shadow-none"
          >
            <span className="relative z-10 whitespace-nowrap">Start Here</span>
            <div className="absolute top-1/2 left-[-100%] h-16 w-12 -translate-y-1/2 rotate-12 bg-white/50 transition-all duration-500 ease-in-out group-hover:left-[200%]" />
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="relative z-10 flex h-9 w-9 flex-col items-center justify-center gap-1.5 text-ink lg:hidden"
        >
          <span
            className={cn(
              "block h-px w-6 bg-current transition-transform duration-300",
              isMenuOpen && "translate-y-[3.5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-current transition-transform duration-300",
              isMenuOpen && "-translate-y-[3.5px] -rotate-45",
            )}
          />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden bg-cream transition-[grid-template-rows] duration-300 ease-out lg:hidden",
          isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-1 px-6 pb-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                {item.comingSoon ? (
                  <span className="flex items-center gap-3 py-2">
                    <span className="font-button text-sm uppercase tracking-wider text-ink/35">
                      {item.label}
                    </span>
                    <span className="font-button text-[9px] tracking-[0.15em] uppercase text-ink/30 border border-ink/20 rounded px-1.5 py-0.5">
                      Soon
                    </span>
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-button block py-2 text-sm uppercase tracking-wider text-ink/80 transition-colors duration-300 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/resources"
                onClick={() => setIsMenuOpen(false)}
                className="group relative inline-flex h-10 w-full items-center justify-center gap-2 overflow-hidden rounded-lg border-2 border-ink px-6 font-button text-xs tracking-[0.15em] text-ink uppercase transition-all duration-150 bg-gradient-to-r from-pink to-lavender hover:shadow-[0_4px_0_0_#1D1D1D] hover:-translate-y-1 active:translate-y-0 active:shadow-none"
              >
                <span className="relative z-10 whitespace-nowrap">Start Here</span>
                <div className="absolute top-1/2 left-[-100%] h-16 w-12 -translate-y-1/2 rotate-12 bg-white/50 transition-all duration-500 ease-in-out group-hover:left-[200%]" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
