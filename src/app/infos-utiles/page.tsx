import type { Metadata } from "next";

import { ListeInfosUtiles, metadataInfosUtiles } from "@/components/infos-utiles/ListeInfosUtiles";

/** Publication programmée des articles : régénération toutes les heures. */
export const revalidate = 3600;

/**
 * Infos utiles, page 1 : l'article à la une + 9 cartes. La suite est servie par
 * /infos-utiles/page/[numero]/. Gabarit et règles SEO : `ListeInfosUtiles`.
 */
export function generateMetadata(): Metadata {
  return metadataInfosUtiles(1);
}

export default function InfosUtilesPage() {
  return <ListeInfosUtiles numero={1} />;
}
