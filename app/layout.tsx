import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

const magicRetro = localFont({
  src: "../fonts/MagicRetro.ttf",
  variable: "--font-magic-retro",
});

const mountHills = localFont({
  src: "../fonts/MountHills.otf",
  variable: "--font-mount-hills",
});

const zodiak = localFont({
  src: "../fonts/Zodiak-BlackItalic.ttf",
  variable: "--font-zodiak",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Well Brain — Carmen Susana",
  description:
    "Neurociencia aplicada a tu bienestar, con respaldo médico real. Well Brain traduce la ciencia del cerebro en hábitos que sí se sostienen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${magicRetro.variable} ${mountHills.variable} ${zodiak.variable} ${poppins.variable} antialiased`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
