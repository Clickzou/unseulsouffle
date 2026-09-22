import Link from "next/link";
import { Shell, Label } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/Header";
import { ACCENTS } from "@/lib/content/home";
import type { PagePilier } from "@/lib/content/pilier";

/**
 * En-tête des pages piliers.
 *
 * Pas de photo, contrairement à la home : le hero sombre est le signal d'entrée
 * du site et doit le rester. Une page pilier s'ouvre sur son H1 et son chapô,
 * au-dessus de la ligne de flottaison, parce qu'elle se lit — elle ne s'annonce pas.
 *
 * Le fil d'Ariane est visible autant qu'il est balisé : le visiteur qui arrive
 * par Google sur cette page doit savoir où il est.
 */
export function PilierHero({ page }: { page: PagePilier }) {
  const accent = ACCENTS[page.accent];

  return (
    <div className="bg-mist">
      <Header />

      <Shell>
        <header className="max-w-[54rem] pb-16 pt-12 sm:pb-20 sm:pt-16">
          <nav aria-label="Fil d'Ariane" className="mb-9 font-mono text-[11.5px] text-muted">
            <Link href="/" className="transition-colors hover:text-teal">
              Accueil
            </Link>
            <span aria-hidden="true" className="px-2 text-rule">
              /
            </span>
            <span className="text-body">{page.fil}</span>
          </nav>

          <Label style={{ color: accent.texte }}>{page.fil}</Label>

          <h1 className="mt-4 max-w-[20ch] text-[clamp(33px,4.8vw,52px)] leading-[1.08] text-ink">
            {page.h1}
          </h1>

          {/* Filet à la teinte du pilier : le lecteur retrouve, d'une page à
              l'autre, la couleur que la home a associée à ce sujet. */}
          <div
            aria-hidden="true"
            className="mt-7 h-px w-20"
            style={{ backgroundColor: accent.vif }}
          />

          <p className="mt-7 max-w-prose text-lg leading-relaxed text-body">{page.lede}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/diagnostic/" arrow>
              Diagnostiquer mon entreprise en 5 min
            </Button>
            <Button href="/contact/" variant="line">
              Parler à Marjorie et Muriel
            </Button>
          </div>
        </header>
      </Shell>
    </div>
  );
}
