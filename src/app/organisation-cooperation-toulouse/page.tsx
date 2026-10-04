import type { Metadata } from "next";

import { GabaritPilier, metadataPilier } from "@/components/pilier/Gabarit";
import { pilierCooperation } from "@/lib/content/pilier-cooperation";

/**
 * Silo Organisation & coopération — intention propriétaire : « organisation et
 * coopération », « passer de l'expert au pilote ». Ne vise pas « conseil en
 * organisation » (propriété de /transformation-entreprise/).
 * Contenu : src/lib/content/pilier-cooperation.ts
 */

/** Liste des articles rattachés : régénération avec la publication programmée. */
export const revalidate = 3600;

export const metadata: Metadata = metadataPilier(pilierCooperation);

export default function OrganisationCooperationPage() {
  return <GabaritPilier page={pilierCooperation} />;
}
