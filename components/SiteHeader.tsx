"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Sobre Carmen", href: "/sobre-carmen", variant: "outline" as const },
  { label: "Recursos", href: "/productos", variant: "solid" as const },
];

const ANNOUNCEMENT_DISMISSED_KEY = "wellbrain_announcement_dismissed";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (localStorage.getItem(ANNOUNCEMENT_DISMISSED_KEY) !== "1") {
      setShowAnnouncement(true);
    }
  }, []);

  const dismissAnnouncement = () => {
    localStorage.setItem(ANNOUNCEMENT_DISMISSED_KEY, "1");
    setShowAnnouncement(false);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      {showAnnouncement && (
        <div className="relative flex items-center justify-center bg-cream px-10 py-2 text-center text-xs font-semibold tracking-wide text-dark sm:text-sm">
          <a href="#suscribete" className="hover:underline">
            Regístrate y recibe gratis tu Brain Habits Guide
          </a>
          <button
            type="button"
            onClick={dismissAnnouncement}
            aria-label="Cerrar aviso"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-dark/70 transition-colors hover:text-dark"
          >
            <X className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      )}
      <header
        className={`transition-colors duration-500 ${
          scrolled ? "bg-cream shadow-sm" : "bg-[#FFC7DB]"
        }`}
      >
        <div className="flex items-center justify-between gap-2 py-2.5 pl-4 pr-3 sm:py-3 sm:pl-8 sm:pr-6 md:pl-16 md:pr-10 lg:pl-24 lg:pr-12">
          <Link href="/" className="flex shrink-0 items-center">
            <img src="/brand/logo-wellbrain.png" alt="Well Brain" className="h-9 w-auto sm:h-14 md:h-16" />
          </Link>
          <nav className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs font-semibold tracking-wide sm:gap-3 sm:text-sm sm:tracking-wide sm:text-base">
            {NAV_LINKS.map((link) =>
              link.variant === "solid" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-1.5 text-dark transition-all hover:scale-[1.03] sm:px-5 sm:py-2 ${
                    scrolled ? "bg-pink" : "bg-cream"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border-2 border-dark px-3 py-1.5 text-dark transition-all hover:scale-[1.03] sm:px-5 sm:py-2"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </header>
    </div>
  );
}
