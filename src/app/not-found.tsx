import Link from "next/link";
import type { Metadata } from "next";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shell, Label } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ACCENTS } from "@/lib/content/home";

/**
 * Page 404 du site.
 *
 * Next sert par défaut un écran blanc « This page could not be found » — en
 * anglais, sans menu et sans issue. Sur une maquette montrée à une cliente,
 * c'est le pire écran possible : il ressemble à une panne.
 *
 * Celle-ci garde l'en-tête, le pied de page et une sortie vers les pages qui
 * existent. La liste ci-dessous distingue ce qui est en ligne de ce qui reste à
 * produire : pendant la refonte, elle sert d'état d'avancement ; à la mise en
 * ligne, il suffira de retirer le bloc « à venir ».
 */
export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

const EN_LIGNE = [
  { href: "/", label: "Accueil" },
  { href: "/transformation-dirigeant/", label: "Transformation du dirigeant" },
  { href: "/transformation-entreprise/", label: "Transformation de l'entreprise" },
];

const A_VENIR = [
  "Le cabinet",
  "Notre équipe",
  "Diagnostic",
  "Contact",
  "Pilotage financier externalisé",
  "Actualités",
];

export default function NotFound() {
  return (
    <>
      <div className="bg-mist">
        <Header />

        <Shell>
          <main className="max-w-[54rem] pb-20 pt-16 sm:pb-24 sm:pt-20">
            <Label style={{ color: ACCENTS.production.texte }}>Erreur 404</Label>

            <h1 className="mt-4 max-w-[18ch] text-[clamp(31px,4.4vw,48px)] leading-[1.08] text-ink">
              Cette page n&apos;existe pas encore
            </h1>

            <div
              aria-hidden="true"
              className="mt-7 h-px w-20"
              style={{ backgroundColor: ACCENTS.production.vif }}
            />

            <p className="mt-7 max-w-prose text-lg leading-relaxed text-body">
              La refonte est en cours : les pages sont mises en ligne au fur et à mesure. Si vous
              êtes arrivé ici depuis le menu, c&apos;est que la page visée fait partie de celles qui
              restent à produire.
            </p>

            <div className="mt-11 grid gap-10 sm:grid-cols-2">
              <div>
                <h2 className="font-mono text-[10px] uppercase tracking-[0.13em] text-teal">
                  Déjà en ligne
                </h2>
                <ul className="mt-4 grid gap-2.5">
                  {EN_LIGNE.map((page) => (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        className="border-b border-teal/35 text-[15.5px] text-teal transition-colors hover:border-teal"
                      >
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted">
                  À venir
                </h2>
                <ul className="mt-4 grid gap-2.5 text-[15.5px] text-muted">
                  {A_VENIR.map((label) => (
                    <li key={label}>{label}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-11">
              <Button href="/" variant="line" arrow>
                Revenir à l&apos;accueil
              </Button>
            </div>
          </main>
        </Shell>
      </div>

      <Footer />
    </>
  );
}
