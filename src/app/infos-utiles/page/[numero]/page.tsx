import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ListeInfosUtiles, metadataInfosUtiles } from "@/components/infos-utiles/ListeInfosUtiles";
import { nombrePagesArticles } from "@/lib/content/articles";

/** Publication programmée des articles : régénération toutes les heures. */
export const revalidate = 3600;

/**
 * Infos utiles, pages 2 et suivantes : 9 articles par page.
 *
 * /infos-utiles/page/1/ est redirigée en 301 vers /infos-utiles/ (next.config.mjs).
 * Un numéro hors limites ou mal écrit (« 02 », « abc ») répond 404 : une page de
 * liste vide servie en 200 serait une soft 404 aux yeux de Google.
 */

function numeroValide(brut: string): number | undefined {
  const numero = Number(brut);
  return String(numero) === brut && numero >= 2 && numero <= nombrePagesArticles() ? numero : undefined;
}

export function generateStaticParams() {
  return Array.from({ length: Math.max(0, nombrePagesArticles() - 1) }, (_, i) => ({ numero: String(i + 2) }));
}

// Next 15 : params est une promesse.
type Props = { params: Promise<{ numero: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const numero = numeroValide((await params).numero);
  return numero ? metadataInfosUtiles(numero) : {};
}

export default async function InfosUtilesPageSuivante({ params }: Props) {
  const numero = numeroValide((await params).numero);
  if (!numero) notFound();
  return <ListeInfosUtiles numero={numero} />;
}
