import type { Metadata } from "next";

import { GabaritPilier, metadataPilier } from "@/components/pilier/Gabarit";
import { pilierOrganisationIndustrielle } from "@/lib/content/pilier-organisation-industrielle";

/**
 * Silo 5a — intention propriétaire : « conseil en organisation industrielle ».
 * Contenu : src/lib/content/pilier-organisation-industrielle.ts
 */

/** Liste des articles rattachés : régénération avec la publication programmée. */
export const revalidate = 3600;

export const metadata: Metadata = metadataPilier(pilierOrganisationIndustrielle);

export default function OrganisationIndustriellePage() {
  return <GabaritPilier page={pilierOrganisationIndustrielle} />;
}
