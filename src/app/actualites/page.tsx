import type { Metadata } from "next";

import { EnTetePage } from "@/components/ui/EnTetePage";
import { Section, SectionHead, Label } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { SITE_URL } from "@/lib/content/home";

/**
 * Actualités — rubrique en attente de sa première publication.
 *
 * Deux décisions du devis validé se rencontrent ici : supprimer l'article de
 * démonstration « Site web en construction », qui était indexable, et trancher
 * le sort de la rubrique.
 *
 * Elle est conservée parce que la mécanique éditoriale du master (§ 9) en
 * dépend : chaque épisode de podcast produit un article de fond qui pointe vers
 * son silo. Mais une rubrique vide qui feint d'être alimentée dessert le
 * cabinet — cette page dit donc franchement qu'elle démarre, plutôt que
 * d'afficher un article factice.
 *
 * `noindex` tant qu'aucun article n'existe : une page de liste vide indexée est
 * un signal de qualité négatif. À basculer en `index` à la première publication.
 */
export const metadata: Metadata = {
  // 47 / 60
  title: "Actualités et publications",
  description:
    "Articles de fond, épisodes de podcast et publications d'Un Seul Souffle pour les dirigeants de PME et d'ETI.",
  alternates: { canonical: "/actualites/" },
  robots: { index: false, follow: true },
};

const PROGRAMME = [
  {
    n: "01",
    titre: "Un épisode de podcast par mois",
    texte:
      "Des conversations avec des dirigeants de PME et d'ETI sur ce qui bloque réellement dans leur entreprise. Publié également en vidéo, avec chapitrage.",
  },
  {
    n: "02",
    titre: "Deux contenus de fond par mois",
    texte:
      "Des articles écrits, pas des transcriptions : structurés, sourcés, et rattachés au domaine qu'ils traitent. Signés par la personne qui a mené le travail.",
  },
  {
    n: "03",
    titre: "Des cas concrets, une fois les accords obtenus",
    texte:
      "Situation de départ, intervention, résultat mesuré. Avec le secteur et la taille de l'entreprise, et jamais de chiffre qui ne soit vérifiable.",
  },
];

function schema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/actualites/#page`,
        url: `${SITE_URL}/actualites/`,
        name: "Actualités et publications",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/actualites/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Actualités",
            item: `${SITE_URL}/actualites/`,
          },
        ],
      },
    ],
  };
}

export default function ActualitesPage() {
  return (
    <>
      <main>
        <EnTetePage
          fil="Actualités"
          label="Publications"
          accent="commercial"
          h1="Les publications commencent bientôt"
          lede="Cette rubrique accueillera les articles de fond, les épisodes de podcast et les cas clients du cabinet. Rien n'y est publié pour l'instant — nous préférons le dire plutôt que d'afficher un contenu de remplissage."
        >
          <div className="flex flex-wrap gap-3">
            <Button href="/diagnostic/" arrow>
              Diagnostiquer mon entreprise en 5 min
            </Button>
            <Button href="/contact/" variant="line">
              Être prévenu des publications
            </Button>
          </div>
        </EnTetePage>

        <Reveal>
          <Section ton="surface">
            <SectionHead
              label="Ce qui arrive"
              titre="Le programme éditorial"
              lede="Peu de contenus, mais utiles. Un dirigeant n'a pas besoin d'un article par semaine : il a besoin de trois textes qui traitent vraiment son problème."
            />

            <ol className="grid gap-px overflow-hidden rounded-carte border border-rule bg-rule sm:grid-cols-3">
              {PROGRAMME.map((item) => (
                <li key={item.n} className="bg-surface p-7">
                  <Label>{item.n}</Label>
                  <h2 className="mt-3 font-serif text-[20px] font-normal text-ink">
                    {item.titre}
                  </h2>
                  <p className="mt-2.5 text-[15.5px] leading-relaxed">{item.texte}</p>
                </li>
              ))}
            </ol>

            <p className="mt-9 max-w-prose rounded-carte border-l-2 border-amber bg-amber-wash px-5 py-4 font-mono text-[13px] leading-relaxed text-amber">
              [Note de production] Cette page reste en noindex tant qu&apos;aucun article
              n&apos;est publié : une page de liste vide indexée est un signal de qualité négatif.
              À basculer en index dès la première publication.
            </p>
          </Section>
        </Reveal>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema()) }}
      />
    </>
  );
}
