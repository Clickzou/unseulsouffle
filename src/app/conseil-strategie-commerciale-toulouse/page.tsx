import type { Metadata } from "next";

import { GabaritPilier, metadataPilier } from "@/components/pilier/Gabarit";
import { pilierCommercial } from "@/lib/content/pilier-commercial";

/**
 * Silo 6 — intention propriétaire : « conseil en stratégie commerciale ».
 * Contenu : src/lib/content/pilier-commercial.ts
 */

/** Liste des articles rattachés : régénération avec la publication programmée. */
export const revalidate = 3600;

export const metadata: Metadata = metadataPilier(pilierCommercial);

export default function StrategieCommercialePage() {
  return <GabaritPilier page={pilierCommercial} />;
}
