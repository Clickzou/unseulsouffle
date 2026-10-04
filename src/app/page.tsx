import type { Metadata } from "next";

import { Hero } from "@/components/Hero";
import { Piliers } from "@/components/Piliers";
import { Essentiel } from "@/components/Essentiel";
import { Blocages } from "@/components/Blocages";
import { Comparatif } from "@/components/Comparatif";
import { Methode } from "@/components/Methode";
import { Parcours } from "@/components/Parcours";
import { AvisGoogle } from "@/components/AvisGoogle";
import { PourQui } from "@/components/PourQui";
import { FAQ } from "@/components/FAQ";
import { ArticlesLies } from "@/components/infos-utiles/ArticlesLies";
import { articlesTries } from "@/lib/content/articles";
import { CTAFinal } from "@/components/CTAFinal";
import { Footer } from "@/components/Footer";
import { AideContact } from "@/components/AideContact";
import { Reveal } from "@/components/ui/Reveal";
import { buildHomeSchema } from "@/lib/seo/schema";
import { ROBOTS } from "@/lib/seo/indexation";

/**
 * Page d'accueil — intention propriétaire : « cabinet de conseil Toulouse »
 * (170 recherches/mois, la seule requête générique locale mesurable — voir
 * docs/seo/ETUDE_MOTS_CLES.md). « Équipe de direction externalisée » (30/mois)
 * reste la signature de marque dans le texte, pas la cible.
 *
 * Règle structurante (master § 4) : la home NE cible PAS les termes des silos en
 * signal H1. Ses mentions de services pointent en lien à ancre exacte vers la page
 * dédiée, jamais en texte brut — sinon elle cannibalise ses propres pages piliers.
 */
/** Derniers articles : la home se régénère avec la publication programmée. */
export const revalidate = 3600;

export const metadata: Metadata = {
  // 56 / 60 caractères
  title: "Cabinet de conseil pour PME à Toulouse | Un Seul Souffle",
  // 144 / 150 caractères
  description:
    "Cabinet de conseil pour dirigeants de TPE et PME à Toulouse : un expert référent, jusqu'à la mise en œuvre sur le terrain. Diagnostic gratuit.",
  alternates: { canonical: "/" },
  robots: ROBOTS,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Un Seul Souffle",
    title: "Cabinet de conseil pour dirigeants de TPE et PME à Toulouse",
    description:
      "Un expert référent dédié à votre sujet, cinq autres expertises en appui si besoin. Pas un rapport : un accompagnement jusqu'à la mise en œuvre.",
    images: [{ url: "/og-equipe.webp", width: 1200, height: 630, alt: "L'équipe Un Seul Souffle" }],
  },
};

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Reveal>
          <Piliers />
        </Reveal>
        <Reveal>
          <Essentiel />
        </Reveal>
        <Reveal>
          <Blocages />
        </Reveal>
        <Reveal>
          <Comparatif />
        </Reveal>
        <Reveal>
          <Methode />
        </Reveal>
        <Reveal>
          <Parcours />
        </Reveal>
        {/* Rendu seulement quand la fiche Google a des avis. */}
        <AvisGoogle />
        <Reveal>
          <PourQui />
        </Reveal>
        <ArticlesLies
          articles={articlesTries().slice(0, 3)}
          label="Nos articles"
          titre="Les derniers articles du cabinet"
        />
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal>
          <CTAFinal />
        </Reveal>
      </main>
      <Footer credit />
      <AideContact />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildHomeSchema()) }}
      />
    </>
  );
}
