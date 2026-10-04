import type { Metadata } from "next";

import { GabaritPilier, metadataPilier } from "@/components/pilier/Gabarit";
import { pilierQvt } from "@/lib/content/pilier-qvt";

/**
 * Silo 4, volet QVT — intention : « conseil en QVT », équilibre au travail.
 * Contenu : src/lib/content/pilier-qvt.ts
 */

/** Liste des articles rattachés : régénération avec la publication programmée. */
export const revalidate = 3600;

export const metadata: Metadata = metadataPilier(pilierQvt);

export default function QvtEquilibrePage() {
  return <GabaritPilier page={pilierQvt} />;
}
