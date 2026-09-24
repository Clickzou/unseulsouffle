"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DEGRADE_LOGO } from "@/lib/content/home";

/**
 * Menu mobile et tablette (sous `lg`).
 *
 * Remplace l'ancien `<details>` : un petit panneau flottant qui ne se fermait
 * pas au clic sur un lien, laissait défiler la page derrière et n'offrait ni
 * le DAF externalisé ni les coordonnées. Ici, un panneau plein écran :
 * - se ferme au clic sur un lien, sur Échap, et au changement de page ;
 * - bloque le défilement de la page derrière lui ;
 * - signale la page en cours (`aria-current`) ;
 * - reprend les liens groupés, le diagnostic et les téléphones — ce qu'on
 *   cherche sur un téléphone, c'est souvent d'appeler.
 */
const GROUPES = [
  {
    titre: "Accompagnements",
    liens: [
      { href: "/transformation-dirigeant/", label: "Coaching dirigeant" },
      { href: "/transformation-entreprise/", label: "Conseil en organisation" },
      { href: "/daf-externalise-toulouse/", label: "DAF externalisé" },
    ],
  },
  {
    titre: "Le cabinet",
    liens: [
      { href: "/un-seul-souffle/", label: "Notre approche" },
      { href: "/notre-equipe/", label: "Notre équipe" },
      { href: "/tarifs/", label: "Tarifs" },
      { href: "/infos-utiles/", label: "Infos utiles" },
      { href: "/contact/", label: "Contact" },
    ],
  },
];

export function MenuMobile({ surPhoto = false }: { surPhoto?: boolean }) {
  const [ouvert, setOuvert] = useState(false);
  const chemin = usePathname();
  const [monte, setMonte] = useState(false);
  useEffect(() => setMonte(true), []);

  // Fermeture au changement de page.
  useEffect(() => setOuvert(false), [chemin]);

  useEffect(() => {
    if (!ouvert) return;
    const avant = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const auClavier = (e: KeyboardEvent) =>
      e.key === "Escape" && setOuvert(false);
    window.addEventListener("keydown", auClavier);
    return () => {
      document.body.style.overflow = avant;
      window.removeEventListener("keydown", auClavier);
    };
  }, [ouvert]);

  return (
    <div className="shrink-0 lg:hidden">
      <button
        type="button"
        aria-expanded={ouvert}
        aria-controls="menu-mobile"
        aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOuvert((v) => !v)}
        className={`flex h-10 w-10 items-center justify-center rounded-bouton border transition-colors ${
          surPhoto
            ? "border-white/25 text-[#e8e6e0] hover:border-white/50"
            : "border-rule text-ink hover:border-teal"
        }`}
      >
        <span
          aria-hidden="true"
          className="grid h-[15px] w-[18px] grid-rows-3 items-center"
        >
          <span className="h-[1.5px] w-full bg-current" />
          <span className="h-[1.5px] w-full bg-current" />
          <span className="h-[1.5px] w-full bg-current" />
        </span>
      </button>

      {/* Rendu dans <body> : un ancêtre transformé (hero, animations) ferait
          sinon de `fixed` un positionnement relatif à lui, et le panneau
          s'arrêterait au bas du hero. */}
      {monte &&
        createPortal(
          <div
            id="menu-mobile"
            hidden={!ouvert}
            className="fixed inset-0 z-50 overflow-y-auto bg-ground"
          >
            <div
              aria-hidden="true"
              className="h-[3px] w-full"
              style={{
                backgroundImage: `linear-gradient(90deg, ${DEGRADE_LOGO})`,
              }}
            />
            {/* Barre du panneau : le logo reste visible et la croix est à la place
            exacte du bouton qui a ouvert le menu. */}
            <div className="flex items-center justify-between border-b border-rule-2 px-5 py-5 sm:px-8">
              <Link
                href="/"
                onClick={() => setOuvert(false)}
                className="flex items-center gap-2.5"
              >
                <Image
                  src="/logo/symbole.webp"
                  alt=""
                  width={34}
                  height={40}
                  className="h-8 w-auto sm:h-9"
                />
                <span className="font-serif text-[17px] tracking-tight text-ink sm:text-[19px]">
                  Un Seul Souffle
                </span>
              </Link>
              <button
                type="button"
                aria-label="Fermer le menu"
                onClick={() => setOuvert(false)}
                className="flex h-10 w-10 items-center justify-center rounded-bouton border border-rule text-ink transition-colors hover:border-teal"
              >
                <span aria-hidden="true" className="relative h-[18px] w-[18px]">
                  <span className="absolute left-0 top-1/2 h-[1.5px] w-full rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-[1.5px] w-full -rotate-45 bg-current" />
                </span>
              </button>
            </div>
            <nav
              aria-label="Menu principal"
              className="mx-auto flex min-h-[calc(100%-84px)] max-w-[640px] flex-col px-5 pb-8 pt-8 sm:px-8"
            >
              <div className="grid gap-9 sm:grid-cols-2 sm:gap-8">
                {GROUPES.map((groupe) => (
                  <div key={groupe.titre}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted">
                      {groupe.titre}
                    </p>
                    <ul className="mt-3 border-t border-rule">
                      {groupe.liens.map((lien) => {
                        const actif =
                          chemin === lien.href ||
                          chemin === lien.href.slice(0, -1);
                        return (
                          <li key={lien.href} className="border-b border-rule">
                            <Link
                              href={lien.href}
                              aria-current={actif ? "page" : undefined}
                              onClick={() => setOuvert(false)}
                              className={`flex items-center justify-between py-3.5 font-serif text-[21px] leading-tight transition-colors hover:text-teal ${
                                actif ? "text-teal" : "text-ink"
                              }`}
                            >
                              {lien.label}
                              <span
                                aria-hidden="true"
                                className="text-[15px] text-muted"
                              >
                                →
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <Link
                  href="/diagnostic/"
                  onClick={() => setOuvert(false)}
                  className="flex items-center justify-center gap-2 rounded-bouton bg-teal px-5 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-teal-dark"
                >
                  Diagnostic gratuit en 5 min <span aria-hidden="true">→</span>
                </Link>
                <div className="mt-3 grid grid-cols-2 gap-3 text-center text-[14px]">
                  <a
                    href="tel:+33663446585"
                    className="rounded-bouton border border-rule bg-surface px-3 py-3 text-ink"
                  >
                    <span className="block text-[11px] text-muted">Muriel</span>
                    06 63 44 65 85
                  </a>
                  <a
                    href="tel:+33625080009"
                    className="rounded-bouton border border-rule bg-surface px-3 py-3 text-ink"
                  >
                    <span className="block text-[11px] text-muted">
                      Marjorie
                    </span>
                    06 25 08 00 09
                  </a>
                </div>
              </div>
            </nav>
          </div>,
          document.body,
        )}
    </div>
  );
}
