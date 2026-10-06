import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { VueArticle } from "@/components/article/VueArticle";
import { articlesPublies, trouverArticle } from "@/lib/content/articles";
import { NON_INDEXABLE, ROBOTS } from "@/lib/seo/indexation";

/** Publication programmée des articles : régénération toutes les heures. */
export const revalidate = 3600;

/**
 * Article de fond. Gabarit : `VueArticle`.
 *
 * Un article non validé par son auteur (`valide: false`) est servi en noindex,
 * sans signalement visible. Un article programmé (date future) répond 404 : il
 * n'est visible que par son lien d'aperçu signé (/apercu/[slug]/).
 */

export function generateStaticParams() {
  return articlesPublies().map((article) => ({ slug: article.slug }));
}

// Next 15 : params est une promesse.
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = trouverArticle((await params).slug);
  if (!article) return {};
  const href = `/infos-utiles/${article.slug}/`;
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: href },
    robots: article.valide ? ROBOTS : NON_INDEXABLE,
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url: href,
      siteName: "Un Seul Souffle",
      title: article.h1,
      description: article.metaDescription,
      publishedTime: article.datePublication,
      modifiedTime: article.dateMaj ?? article.datePublication,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = trouverArticle((await params).slug);
  if (!article) notFound();
  return <VueArticle article={article} />;
}
