import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { EnTetePage } from "@/components/ui/EnTetePage";
import { SymboleAnime } from "@/components/ui/SymboleAnime";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/Footer";
import { CTAFinal } from "@/components/CTAFinal";
import { Reveal } from "@/components/ui/Reveal";
import { ACCENTS, SITE_URL, equipe } from "@/lib/content/home";
import type { Article } from "@/lib/content/article";
import { articlesDeLaPage, nombrePagesArticles } from "@/lib/content/articles";
import { couverture, minutesLecture, rubrique } from "@/lib/content/lecture";
import { NON_INDEXABLE, ROBOTS } from "@/lib/seo/indexation";

/**
 * Infos utiles — la rubrique d'articles de fond (le blog du cabinet), paginée.
 *
 * Mise en page magazine : en page 1, un article à la une puis une grille de 9
 * cartes ; les pages suivantes n'ont que la grille. Chaque carte porte la teinte
 * de l'expertise qui traite le sujet, comme partout sur le site.
 *
 * Pagination et SEO :
 *   - page 1 = /infos-utiles/ (jamais /page/1/, redirigée en 301), page n = /infos-utiles/page/n/ ;
 *   - chaque page a son propre canonical (pas de canonical vers la page 1, qui
 *     ferait ignorer les articles des pages suivantes), un title, une description
 *     et un H1 distincts ;
 *   - liens de pagination en vrais <a href>, toutes les pages numérotées : chaque
 *     page est à un clic de la page 1, les articles anciens restent découvrables ;
 *   - une page ne listant que des brouillons est en `noindex`, comme l'était la
 *     page 1 tant qu'aucun article n'était validé.
 */

const TITRE = "Infos utiles pour dirigeants de PME";

export function cheminPage(numero: number): string {
  return numero <= 1 ? "/infos-utiles/" : `/infos-utiles/page/${numero}/`;
}

export function metadataInfosUtiles(numero: number): Metadata {
  const total = nombrePagesArticles();
  const indexable = articlesDeLaPage(numero).some((article) => article.valide);
  return {
    title: numero <= 1 ? TITRE : `${TITRE} — page ${numero}`,
    description:
      numero <= 1
        ? "Articles de fond pour les dirigeants de PME et d'ETI : organisation, pilotage financier, management, place du dirigeant. Signés par l'équipe."
        : `Page ${numero} sur ${total} des articles de fond pour dirigeants de PME et d'ETI : organisation, pilotage financier, management, place du dirigeant.`,
    alternates: { canonical: cheminPage(numero) },
    robots: indexable ? ROBOTS : NON_INDEXABLE,
  };
}

function schema(numero: number, articles: Article[]) {
  const url = `${SITE_URL}${cheminPage(numero)}`;
  const fil = [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Infos utiles", item: `${SITE_URL}/infos-utiles/` },
  ];
  if (numero > 1) fil.push({ "@type": "ListItem", position: 3, name: `Page ${numero}`, item: url });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        url,
        name: numero <= 1 ? TITRE : `${TITRE} — page ${numero}`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: articles.map((article, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/infos-utiles/${article.slug}/`,
            name: article.h1,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: fil,
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

/* ─────────── Pagination ─────────── */

function Pagination({ numero, total }: { numero: number; total: number }) {
  const bouton =
    "inline-flex h-9 min-w-9 items-center justify-center rounded-full border px-3 font-mono text-[12.5px] transition-colors sm:h-11 sm:min-w-11 sm:px-4";
  const inactif = `${bouton} border-rule text-body hover:border-teal hover:text-teal`;

  return (
    <nav aria-label="Pagination des articles" className="mt-14 flex justify-center">
      <ul className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        {numero > 1 && (
          <li>
            <Link href={cheminPage(numero - 1)} className={inactif}>
              ← <span className="ml-2 hidden sm:inline">Plus récents</span>
              <span className="sr-only sm:hidden">Page précédente</span>
            </Link>
          </li>
        )}
        {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
          <li key={n}>
            {n === numero ? (
              <span aria-current="page" className={`${bouton} border-ink bg-ink text-white`}>
                <span className="sr-only">Page </span>
                {n}
              </span>
            ) : (
              <Link href={cheminPage(n)} className={inactif}>
                <span className="sr-only">Page </span>
                {n}
              </Link>
            )}
          </li>
        ))}
        {numero < total && (
          <li>
            <Link href={cheminPage(numero + 1)} className={inactif}>
              <span className="mr-2 hidden sm:inline">Plus anciens</span>
              <span className="sr-only sm:hidden">Page suivante</span> →
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

/* ─────────── Page ─────────── */

export function ListeInfosUtiles({ numero }: { numero: number }) {
  const total = nombrePagesArticles();
  const articles = articlesDeLaPage(numero);
  // En page 1, le premier article passe à la une ; ailleurs, tout va dans la grille.
  const [une, grille] = numero <= 1 ? [articles[0], articles.slice(1)] : [undefined, articles];
  const vide = articles.length === 0;

  // Grille de 3 colonnes sans trou : une carte large compte pour deux cases.
  // Reste de 2 → la première s'élargit ; reste de 1 → la première et la dernière.
  const reste = grille.length % 3;
  const estLarge = (i: number) =>
    (reste === 2 && i === 0) || (reste === 1 && grille.length > 1 && (i === 0 || i === grille.length - 1));

  return (
    <>
      <main>
        <EnTetePage
          fil={numero <= 1 ? "Infos utiles" : `Page ${numero}`}
          parent={numero <= 1 ? undefined : { href: "/infos-utiles/", label: "Infos utiles" }}
          label={numero <= 1 ? "Infos utiles" : `Infos utiles · page ${numero} sur ${total}`}
          accent="commercial"
          aside={<SymboleAnime />}
          anime
          h1={
            vide
              ? "Les publications commencent bientôt"
              : numero <= 1
                ? "Articles pour les dirigeants de PME"
                : `Articles pour les dirigeants de PME, page ${numero}`
          }
          lede={
            vide
              ? "Cette rubrique accueillera les articles de fond du cabinet. Rien n'y est publié pour l'instant — nous préférons le dire plutôt que d'afficher un contenu de remplissage."
              : numero <= 1
                ? "Des articles de fond sur les sujets qui bloquent réellement les PME et les ETI : organisation, pilotage financier, management, place du dirigeant. Écrits et signés par la personne qui traite le sujet au cabinet."
                : "La suite des articles de fond du cabinet, du plus récent au plus ancien : organisation, pilotage financier, management, place du dirigeant."
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

        {!vide && (
          <Section>
            {une && (
              <Reveal>
                <ALaUne article={une} />
              </Reveal>
            )}

            {grille.length > 0 && (
              <ul className={`grid gap-7 sm:grid-cols-2 lg:grid-cols-3 ${une ? "mt-10" : ""}`}>
                {grille.map((article, i) => (
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

            {total > 1 && <Pagination numero={numero} total={total} />}
          </Section>
        )}

        <Reveal>
          <CTAFinal />
        </Reveal>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(numero, articles)) }}
      />
    </>
  );
}
