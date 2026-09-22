import type { Metadata } from "next";

import { GabaritPilier, metadataPilier } from "@/components/pilier/Gabarit";
import { pilierDirigeant } from "@/lib/content/pilier-dirigeant";

/**
 * Silo 1 — intention propriétaire : « accompagnement / coaching dirigeant PME ».
 * Contenu : src/lib/content/pilier-dirigeant.ts
 */
export const metadata: Metadata = metadataPilier(pilierDirigeant);

export default function TransformationDirigeantPage() {
  return <GabaritPilier page={pilierDirigeant} />;
}
