import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const superMellow = localFont({
  src: "../fonts/Super Mellow/Super Mellow.ttf",
  variable: "--font-heading",
  display: "swap",
});

const jost = localFont({
  src: "../fonts/Jost/Jost-VariableFont_wght.ttf",
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "../fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf",
  variable: "--font-button",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Well Brain — Carmen Susana",
  description: "Neurociencia aplicada al bienestar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${superMellow.variable} ${jost.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
