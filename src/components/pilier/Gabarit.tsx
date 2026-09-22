import type { Metadata } from "next";

import { PilierHero } from "@/components/pilier/PilierHero";
import { EssentielPilier } from "@/components/pilier/EssentielPilier";
import { Corps } from "@/components/pilier/Corps";
import { Bascule } from "@/components/pilier/Bascule";
import { FAQ } from "@/components/FAQ";
import { CTAFinal } from "@/components/CTAFinal";
import { Footer } from "@/components/Footer";
import { AideContact } from "@/components/AideContact";
import { Reveal } from "@/components/ui/Reveal";
import { buildPilierSchema } from "@/lib/seo/schema";
import type { PagePilier } from "@/lib/content/pilier";
import { ROBOTS } from "@/lib/seo/indexation";

/**
 * Gabarit unique des pages piliers : même ordre de lecture sur tous les silos.
 *
 *   H1 + chapô → L'essentiel (réponse GEO) → chapitres → autre parcours → FAQ → CTA
 *
 * L'ordre n'est pas un choix de mise en page mais de conversion (master § 7) :
 * la réponse d'abord, la preuve ensuite, l'action à la fin — et une sortie vers
 * l'autre parcours avant la FAQ, pour qui s'est trompé de page.
 */

/** Métadonnées dérivées du contenu : titre, description et canonical d'un seul endroit. */
export function metadataPilier(page: PagePilier): Metadata {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: page.href },
    robots: ROBOTS,
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url: page.href,
      siteName: "Un Seul Souffle",
      title: page.h1,
      description: page.metaDescription,
      images: [{ url: "/og-equipe.webp", width: 1200, height: 630, alt: "L'équipe Un Seul Souffle" }],
    },
  };
}

export function GabaritPilier({ page }: { page: PagePilier }) {
  return (
    <>
      <main>
        <PilierHero page={page} />
        <Reveal>
          <EssentielPilier page={page} />
        </Reveal>

        <Corps page={page} />

        <Reveal>
          <Bascule page={page} />
        </Reveal>
        <Reveal>
          {/* Le corps se termine sur un fond alterné ; la FAQ prend `surface`
              pour ne pas coller deux sections de même ton à la suite. */}
          <FAQ
            items={page.faq}
            titre={`Questions fréquentes — ${page.fil.toLowerCase()}`}
            ton="surface"
          />
        </Reveal>
        <Reveal>
          <CTAFinal />
        </Reveal>
      </main>
      <Footer />
      <AideContact />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPilierSchema(page)) }}
      />
    </>
  );
}
