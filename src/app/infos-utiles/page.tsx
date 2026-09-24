import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { EnTetePage } from "@/components/ui/EnTetePage";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/Footer";
import { CTAFinal } from "@/components/CTAFinal";
import { Reveal } from "@/components/ui/Reveal";
import { ACCENTS, SITE_URL, equipe } from "@/lib/content/home";
import type { Article } from "@/lib/content/article";
import { articlesTries, articlesValides } from "@/lib/content/articles";
import { couverture, minutesLecture, rubrique } from "@/lib/content/lecture";
import { NON_INDEXABLE, ROBOTS } from "@/lib/seo/indexation";

/** Publication programmée des articles : régénération toutes les heures. */
export const revalidate = 3600;

/**
 * Infos utiles — la rubrique d'articles de fond (le blog du cabinet).
 *
 * Mise en page magazine : un article à la une, puis une grille de cartes. Chaque
 * carte porte la teinte de l'expertise qui traite le sujet, comme partout sur le
 * site : le lecteur voit d'un coup d'œil de quel domaine relève l'article.
 *
 * `noindex` tant qu'aucun article n'est validé par son auteur : une page de liste
 * ne listant que des brouillons ne doit pas être indexée. Elle bascule d'elle-même
 * en `index` à la première validation.
 */
export const metadata: Metadata = {
  title: "Infos utiles pour dirigeants de PME",
  description:
    "Articles de fond pour les dirigeants de PME et d'ETI : organisation, pilotage financier, management, place du dirigeant. Signés par l'équipe.",
  alternates: { canonical: "/infos-utiles/" },
  robots: articlesValides().length > 0 ? ROBOTS : NON_INDEXABLE,
};

function schema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/infos-utiles/#page`,
        url: `${SITE_URL}/infos-utiles/`,
        name: "Infos utiles pour dirigeants de PME",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/infos-utiles/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Infos utiles", item: `${SITE_URL}/infos-utiles/` },
        ],
      },
    ],
  };
}

/* ─────────── Morceaux de carte ─────────── */

function Etiquette({ article }: { article: Article }) {
  const teinte = ACCENTS[article.accent];
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em]"
      style={{ backgroundColor: `${teinte.vif}1f`, color: teinte.texte }}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: teinte.vif }} />
      {rubrique(article)}
    </span>
  );
}

function Signature({ article }: { article: Article }) {
  const auteur = equipe.find((membre) => membre.slug === article.auteur);
  return (
    <div className="flex items-center gap-3">
      {auteur?.photo && (
        <Image
          src={auteur.photo}
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-cover"
        />
      )}
      <p className="text-[13.5px] leading-tight">
        <span className="text-ink">{auteur?.nom}</span>
        <span className="block font-mono text-[11px] text-muted">
          {minutesLecture(article)} min de lecture
        </span>
      </p>
    </div>
  );
}

/** L'article à la une : image et texte côte à côte sur grand écran. */
function ALaUne({ article }: { article: Article }) {
  const image = couverture(article);
  return (
    <Link
      href={`/infos-utiles/${article.slug}/`}
      className="group grid overflow-hidden rounded-[18px] border border-rule bg-surface transition-shadow duration-300 hover:shadow-[0_24px_60px_-30px_rgba(20,32,54,0.45)] lg:grid-cols-[1.15fr_1fr]"
    >
      <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(min-width: 1024px) 620px, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[10.5px] uppercase tracking-label text-muted">À la une</span>
          <Etiquette article={article} />
        </div>
        <h2 className="mt-5 font-serif text-[clamp(26px,3vw,36px)] font-normal leading-[1.15] text-ink transition-colors group-hover:text-teal">
          {article.h1}
        </h2>
        <p className="mt-4 text-[16.5px] leading-relaxed">{article.metaDescription}</p>
        <div className="mt-8 flex items-center justify-between gap-4">
          <Signature article={article} />
          <span className="font-mono text-[12px] text-teal transition-transform group-hover:translate-x-1">
            Lire l&apos;article →
          </span>
        </div>
      </div>
    </Link>
  );
}

function Carte({ article, large = false }: { article: Article; large?: boolean }) {
  const image = couverture(article);
  return (
    <Link
      href={`/infos-utiles/${article.slug}/`}
      className="group flex h-full flex-col overflow-hidden rounded-[16px] border border-rule bg-surface transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-24px_rgba(20,32,54,0.4)]"
    >
      <div className={`relative aspect-[16/10] overflow-hidden ${large ? "lg:aspect-[21/9]" : ""}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={large ? "(min-width: 1024px) 740px, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.05]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Etiquette article={article} />
        <h2
          className={`mt-4 font-serif font-normal leading-snug text-ink transition-colors group-hover:text-teal ${
            large ? "text-[21px] lg:text-[26px]" : "text-[21px]"
          }`}
        >
          {article.h1}
        </h2>
        <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed">{article.metaDescription}</p>
        <div aria-hidden="true" className="flex-1" />
        <div className="mt-6 border-t border-rule-2 pt-5">
          <Signature article={article} />
        </div>
      </div>
    </Link>
  );
}

/* ─────────── Page ─────────── */

export default function InfosUtilesPage() {
  const [une, ...suite] = articlesTries();
  // Grille de 3 colonnes sans trou : une carte large compte pour deux cases.
  // Reste de 2 → la première s'élargit ; reste de 1 → la première et la dernière.
  const reste = suite.length % 3;
  const estLarge = (i: number) =>
    (reste === 2 && i === 0) || (reste === 1 && suite.length > 1 && (i === 0 || i === suite.length - 1));

  return (
    <>
      <main>
        <EnTetePage
          fil="Infos utiles"
          label="Infos utiles"
          accent="commercial"
          anime
          h1={une ? "Articles pour les dirigeants de PME" : "Les publications commencent bientôt"}
          lede={
            une
              ? "Des articles de fond sur les sujets qui bloquent réellement les PME et les ETI : organisation, pilotage financier, management, place du dirigeant. Écrits et signés par la personne qui traite le sujet au cabinet."
              : "Cette rubrique accueillera les articles de fond du cabinet. Rien n'y est publié pour l'instant — nous préférons le dire plutôt que d'afficher un contenu de remplissage."
          }
        >
          <div className="flex flex-wrap gap-3">
            <Button href="/diagnostic/" arrow>
              Diagnostiquer mon entreprise en 5 min
            </Button>
            <Button href="/contact/" variant="line">
              Poser une question
            </Button>
          </div>
        </EnTetePage>

        {une && (
          <Section>
            <Reveal>
              <ALaUne article={une} />
            </Reveal>

            {suite.length > 0 && (
              <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {suite.map((article, i) => (
                  <Reveal
                    as="li"
                    key={article.slug}
                    delay={(i % 3) * 90}
                    className={estLarge(i) ? "lg:col-span-2" : undefined}
                  >
                    <Carte article={article} large={estLarge(i)} />
                  </Reveal>
                ))}
              </ul>
            )}
          </Section>
        )}

        <Reveal>
          <CTAFinal />
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
