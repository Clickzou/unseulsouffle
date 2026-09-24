import type { Metadata } from "next";
import { Newsreader, Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { BandeauCookies } from "@/components/cookies/BandeauCookies";
import { MesureAudience } from "@/components/cookies/MesureAudience";

// `adjustFontFallback: false` + fallback explicite : Newsreader porte un axe optique
// variable dont next/font ne trouve pas les métriques d'override. Sans ces deux
// options, le build émet un warning et le fallback se fait sans ajustement.
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.unseulsouffle.fr"),
  title: {
    default: "Cabinet de conseil pour PME à Toulouse | Un Seul Souffle",
    template: "%s | Un Seul Souffle",
  },
  // Validation Search Console par balise meta : aucun cookie, aucun script,
  // donc hors du champ du consentement. Code à renseigner dans
  // NEXT_PUBLIC_GSC_VERIFICATION (.env.local + Vercel).
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${newsreader.variable} ${archivo.variable} ${plexMono.variable}`}>
      <body className="bg-ground text-body font-sans antialiased">
        {children}
        <BandeauCookies />
        <MesureAudience />
      </body>
    </html>
  );
}
