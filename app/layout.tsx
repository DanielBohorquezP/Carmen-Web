import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const spaceGroteskBody = localFont({
  src: "../fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf",
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "../fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf",
  variable: "--font-button",
  display: "swap",
});

const spaceGroteskPoppins = localFont({
  src: "../fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf",
  variable: "--font-poppins",
  display: "swap",
});

const superMellowDisplay = localFont({
  src: "../fonts/Super Mellow/Super Mellow.ttf",
  variable: "--font-display",
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
      className={`${cormorantGaramond.variable} ${spaceGroteskBody.variable} ${spaceGrotesk.variable} ${spaceGroteskPoppins.variable} ${superMellowDisplay.variable}`}
    >
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
