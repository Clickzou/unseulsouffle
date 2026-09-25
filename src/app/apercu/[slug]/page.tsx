import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { VueArticle } from "@/components/article/VueArticle";
import { apercuValide } from "@/lib/apercu";
import { articles, dateAtteinte } from "@/lib/content/articles";

/**
 * Aperçu provisoire d'un article programmé, pour la relecture par la cliente
 * depuis son tableau de bord Clickzou. Voir src/lib/apercu.ts.
 *
 * Jamais indexable, par quatre verrous qui se complètent :
 *   - lien signé et expirant : sans signature valide → 404, rien ne fuit ;
 *   - balise robots noindex/nofollow ici ;
 *   - en-tête X-Robots-Tag et Referrer-Policy no-referrer (next.config.mjs) —
 *     le jeton ne part pas dans l'en-tête Referer des liens sortants ;
 *   - Disallow /apercu/ dans robots.txt, et absent du sitemap.
 * Pas de JSON-LD, pas de canonical : la page n'a pas vocation à exister pour Google.
 */

export const dynamic = "force-dynamic";

type Props = { params: { slug: string }; searchParams: { e?: string; s?: string } };

export const metadata: Metadata = {
  title: "Aperçu d'article",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } },
};

export default function ApercuArticle({ params, searchParams }: Props) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article || !apercuValide(article.slug, searchParams.e, searchParams.s)) notFound();

  // Déjà en ligne : l'aperçu n'a plus lieu d'être, on renvoie vers la vraie page.
  if (dateAtteinte(article)) redirect(`/infos-utiles/${article.slug}/`);

  return <VueArticle article={article} apercu />;
}
