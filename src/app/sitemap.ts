import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content/home";
import { INDEXABLE } from "@/lib/seo/indexation";
import { articlesValides } from "@/lib/content/articles";
import { tarifsProvisoires } from "@/lib/content/tarifs";

/**
 * Trailing slash sur toutes les URL, cohérent avec `trailingSlash: true`.
 *
 * N'y figurent que les pages indexables. Sont donc absentes : les mentions
 * légales et la confidentialité (noindex — master § 2), ainsi que les actualités
 * tant que la rubrique est vide — déclarer au sitemap une page qu'on demande par
 * ailleurs de ne pas indexer envoie deux signaux contradictoires.
 */
const PAGES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/transformation-dirigeant/", priority: 0.9 },
  { path: "/transformation-entreprise/", priority: 0.9 },
  { path: "/daf-externalise-toulouse/", priority: 0.8 },
  { path: "/conseil-strategie-commerciale-toulouse/", priority: 0.8 },
  { path: "/organisation-cooperation-toulouse/", priority: 0.8 },
  { path: "/conseil-organisation-industrielle-toulouse/", priority: 0.8 },
  { path: "/conseil-strategie-industrielle-toulouse/", priority: 0.8 },
  { path: "/qvt-equilibre-travail-toulouse/", priority: 0.8 },
  { path: "/un-seul-souffle/", priority: 0.7 },
  { path: "/notre-equipe/", priority: 0.7 },
  { path: "/diagnostic/", priority: 0.7 },
  { path: "/muriel-saffroy/", priority: 0.6 },
  { path: "/marjorie-anglade/", priority: 0.6 },
  { path: "/contact/", priority: 0.6 },
  { path: "/podcasts/", priority: 0.6 },
];

/** Publication programmée des articles : régénération toutes les heures. */
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  // Refonte en cours : sitemap vide plutôt que supprimé, pour que l'URL continue
  // de répondre 200 et que la bascule d'indexation le remplisse d'un coup.
  if (!INDEXABLE) return [];

  // /tarifs/ n'entre qu'une fois tous les prix réels (garde-fou de tarifs.ts).
  const chemins = tarifsProvisoires ? PAGES : [...PAGES, { path: "/tarifs/", priority: 0.7 }];

  // Pas de `lastModified` sur les pages fixes : une date qui change à chaque
  // régénération sans que la page ait changé fait ignorer tous les lastmod du
  // site (master § 2). Seuls les articles portent une date exacte.
  const pages: MetadataRoute.Sitemap = chemins.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority,
  }));

  // Articles : seulement ceux que leur auteur a validés (les brouillons sont en
  // noindex). La liste /infos-utiles/ n'entre qu'avec son premier article validé.
  const valides = articlesValides();
  if (valides.length === 0) return pages;

  return [
    ...pages,
    {
      url: `${SITE_URL}/infos-utiles/`,
      // La liste change quand un article sort : sa date est celle du plus récent.
      lastModified: new Date(
        valides.reduce((max, a) => ((a.dateMaj ?? a.datePublication) > max ? (a.dateMaj ?? a.datePublication) : max), ""),
      ),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...valides.map((article) => ({
      url: `${SITE_URL}/infos-utiles/${article.slug}/`,
      lastModified: new Date(article.dateMaj ?? article.datePublication),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
