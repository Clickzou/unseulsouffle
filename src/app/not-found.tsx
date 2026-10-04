import Link from "next/link";
import type { Metadata } from "next";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shell, Label } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ACCENTS } from "@/lib/content/home";
import { NON_INDEXABLE } from "@/lib/seo/indexation";

/**
 * Page 404 du site.
 *
 * Next sert par défaut un écran blanc « This page could not be found » — en
 * anglais, sans menu et sans issue. Sur une maquette montrée à une cliente,
 * c'est le pire écran possible : il ressemble à une panne.
 *
 * Celle-ci garde l'en-tête, le pied de page et une sortie vers les pages du
 * site. Depuis la mise en ligne (28/09/2026), elle ne parle plus de refonte :
 * les anciennes adresses WordPress sont redirigées (next.config.mjs), un visiteur
 * qui arrive ici a suivi un lien erroné.
 */
export const metadata: Metadata = {
  title: "Page introuvable",
  robots: NON_INDEXABLE,
};

// Mêmes libellés et même ordre que le pied de page (Footer.tsx).
const ACCOMPAGNEMENTS = [
  { href: "/transformation-dirigeant/", label: "Coaching dirigeant" },
  { href: "/transformation-entreprise/", label: "Conseil en organisation" },
  { href: "/daf-externalise-toulouse/", label: "DAF externalisé" },
  { href: "/conseil-strategie-commerciale-toulouse/", label: "Stratégie commerciale" },
  { href: "/diagnostic/", label: "Diagnostic gratuit" },
];

const CABINET = [
  { href: "/", label: "Accueil" },
  { href: "/un-seul-souffle/", label: "Notre approche" },
  { href: "/notre-equipe/", label: "Notre équipe" },
  { href: "/tarifs/", label: "Tarifs" },
  { href: "/infos-utiles/", label: "Nos articles" },
  { href: "/contact/", label: "Contact" },
];

function ListeLiens({ titre, liens }: { titre: string; liens: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="font-mono text-[10px] uppercase tracking-[0.13em] text-teal">{titre}</h2>
      <ul className="mt-4 grid gap-2.5">
        {liens.map((page) => (
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
  );
}

export default function NotFound() {
  return (
    <>
      <div className="bg-mist">
        <Header />

        <Shell>
          <main className="max-w-[54rem] pb-20 pt-16 sm:pb-24 sm:pt-20">
            <Label style={{ color: ACCENTS.production.texte }}>Erreur 404</Label>

            <h1 className="mt-4 max-w-[18ch] text-[clamp(31px,4.4vw,48px)] leading-[1.08] text-ink">
              Cette page est introuvable
            </h1>

            <div
              aria-hidden="true"
              className="mt-7 h-px w-20"
              style={{ backgroundColor: ACCENTS.production.vif }}
            />

            <p className="mt-7 max-w-prose text-lg leading-relaxed text-body">
              L&apos;adresse suivie ne correspond à aucune page du site. Elle a peut-être changé,
              ou le lien contient une erreur. Voici les pages principales du cabinet.
            </p>

            <div className="mt-11 grid gap-10 sm:grid-cols-2">
              <ListeLiens titre="Accompagnements" liens={ACCOMPAGNEMENTS} />
              <ListeLiens titre="Le cabinet" liens={CABINET} />
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
