import type { Metadata } from "next";

import { GabaritPilier, metadataPilier } from "@/components/pilier/Gabarit";
import { pilierEntreprise } from "@/lib/content/pilier-entreprise";

/**
 * Silo 2 — intention propriétaire : « conseil en organisation, transformation
 * d'entreprise PME ». Porte le comparatif GEO de la marque.
 * Contenu : src/lib/content/pilier-entreprise.ts
 */
/** Liste des articles rattachés : régénération avec la publication programmée. */
export const revalidate = 3600;

export const metadata: Metadata = metadataPilier(pilierEntreprise);

export default function TransformationEntreprisePage() {
  return <GabaritPilier page={pilierEntreprise} />;
}
