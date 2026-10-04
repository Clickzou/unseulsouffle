import type { Metadata } from "next";

import { GabaritPilier, metadataPilier } from "@/components/pilier/Gabarit";
import { pilierStrategieIndustrielle } from "@/lib/content/pilier-strategie-industrielle";

/**
 * Silo 5b — intention propriétaire : « conseil en stratégie industrielle ».
 * Contenu : src/lib/content/pilier-strategie-industrielle.ts
 */

/** Liste des articles rattachés : régénération avec la publication programmée. */
export const revalidate = 3600;

export const metadata: Metadata = metadataPilier(pilierStrategieIndustrielle);

export default function StrategieIndustriellePage() {
  return <GabaritPilier page={pilierStrategieIndustrielle} />;
}
