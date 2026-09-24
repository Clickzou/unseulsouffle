"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { DEGRADE_LOGO } from "@/lib/content/home";
import {
  EVENEMENT_OUVRIR,
  enregistrerChoix,
  lireChoix,
} from "@/lib/consentement";

/**
 * Bandeau de consentement — voir src/lib/consentement.ts pour les règles CNIL.
 *
 * Pas de modale bloquante : le bandeau occupe le bas de l'écran, le site reste
 * lisible derrière (même raison que pour AideContact : Google pénalise les
 * interstitiels intrusifs sur mobile, et la CNIL n'impose pas de bloquer).
 * « Tout refuser » et « Tout accepter » ont exactement le même style.
 */
export function BandeauCookies() {
  const [ouvert, setOuvert] = useState(false);
  const [details, setDetails] = useState(false);
  const [mesure, setMesure] = useState(false);

  useEffect(() => {
    if (!lireChoix()) setOuvert(true);
    const rouvrir = () => {
      setMesure(lireChoix()?.mesure ?? false);
      setDetails(true);
      setOuvert(true);
    };
    window.addEventListener(EVENEMENT_OUVRIR, rouvrir);
    return () => window.removeEventListener(EVENEMENT_OUVRIR, rouvrir);
  }, []);

  if (!ouvert) return null;

  const choisir = (valeur: boolean) => {
    enregistrerChoix(valeur);
    setOuvert(false);
    setDetails(false);
  };

  const bouton =
    "inline-flex items-center justify-center rounded-bouton px-4 py-2.5 text-[13.5px] font-medium transition-colors";

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookies-titre"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-[680px] overflow-hidden rounded-carte border border-rule bg-surface shadow-[0_24px_60px_-20px_rgba(16,26,44,0.45)] sm:bottom-5"
    >
      <div
        aria-hidden="true"
        className="h-[3px] w-full"
        style={{ backgroundImage: `linear-gradient(90deg, ${DEGRADE_LOGO})` }}
      />
      <div className="max-h-[70vh] overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
        <h2 id="cookies-titre" className="font-serif text-[20px] leading-snug text-ink">
          Vos choix sur les cookies
        </h2>
        <p className="mt-2 text-[14px] leading-relaxed text-body">
          Nous utilisons des cookies nécessaires au fonctionnement du site et, avec votre
          accord, des cookies de mesure d&apos;audience pour comprendre quelles pages vous sont
          utiles. Aucun cookie publicitaire. Votre choix est conservé 6 mois et modifiable à
          tout moment.{" "}
          <Link href="/cookies/" className="text-teal underline underline-offset-[3px]">
            En savoir plus
          </Link>
        </p>

        {details && (
          <ul className="mt-5 grid gap-3">
            <li className="flex items-start justify-between gap-4 rounded-[12px] border border-rule-2 bg-ground px-4 py-3.5">
              <div>
                <p className="text-[14px] font-medium text-ink">Nécessaires</p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">
                  Mémorisent votre choix et assurent le fonctionnement du site. Toujours actifs.
                </p>
              </div>
              <span className="mt-0.5 shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-teal">
                Actifs
              </span>
            </li>
            <li className="flex items-start justify-between gap-4 rounded-[12px] border border-rule-2 bg-ground px-4 py-3.5">
              <div>
                <label htmlFor="cookies-mesure" className="text-[14px] font-medium text-ink">
                  Mesure d&apos;audience
                </label>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">
                  Statistiques de fréquentation anonymisées, pour améliorer les contenus.
                </p>
              </div>
              <button
                id="cookies-mesure"
                type="button"
                role="switch"
                aria-checked={mesure}
                onClick={() => setMesure((v) => !v)}
                className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors ${
                  mesure ? "bg-teal" : "bg-rule"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                    mesure ? "translate-x-5" : ""
                  }`}
                />
              </button>
            </li>
          </ul>
        )}

        <div className="mt-5 grid gap-2.5 sm:flex sm:flex-wrap sm:items-center">
          {details ? (
            <button
              type="button"
              onClick={() => choisir(mesure)}
              className={`${bouton} bg-teal text-white hover:bg-teal-dark sm:order-last sm:ml-auto`}
            >
              Enregistrer mes choix
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setDetails(true)}
              className={`${bouton} text-ink underline decoration-rule underline-offset-[3px] hover:text-teal sm:mr-auto sm:px-0`}
            >
              Personnaliser
            </button>
          )}
          <div className="grid grid-cols-2 gap-2.5 sm:flex">
            <button
              type="button"
              onClick={() => choisir(false)}
              className={`${bouton} border border-ink/80 text-ink hover:bg-ink hover:text-white`}
            >
              Tout refuser
            </button>
            <button
              type="button"
              onClick={() => choisir(true)}
              className={`${bouton} border border-ink/80 text-ink hover:bg-ink hover:text-white`}
            >
              Tout accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
