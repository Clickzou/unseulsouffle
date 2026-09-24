"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { EVENEMENT_CHOIX, lireChoix, type Choix } from "@/lib/consentement";

/**
 * Google Analytics 4, chargé UNIQUEMENT après accord explicite.
 *
 * Tant que `NEXT_PUBLIC_GA_ID` n'est pas renseigné (.env.local + Vercel), rien
 * n'est chargé, même avec accord. Le script n'est jamais présent dans la page
 * avant le consentement : pas de requête vers Google, pas de cookie `_ga`.
 *
 * Si l'accord est retiré en cours de visite, les cookies `_ga` sont effacés
 * (lib/consentement) et GA est désactivé pour le reste de la visite.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function MesureAudience() {
  const [accord, setAccord] = useState(false);

  useEffect(() => {
    setAccord(lireChoix()?.mesure ?? false);
    const surChoix = (e: Event) => {
      const mesure = (e as CustomEvent<Choix>).detail.mesure;
      setAccord(mesure);
      if (!mesure && GA_ID) {
        (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = true;
      }
    };
    window.addEventListener(EVENEMENT_CHOIX, surChoix);
    return () => window.removeEventListener(EVENEMENT_CHOIX, surChoix);
  }, []);

  if (!GA_ID || !accord) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window['ga-disable-${GA_ID}']=false;window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
