import type { Metadata } from "next";

import { GabaritPilier, metadataPilier } from "@/components/pilier/Gabarit";
import { pilierFinance } from "@/lib/content/pilier-finance";

/**
 * Silo 3 — intention propriétaire : « DAF externalisé, pilotage financier PME ».
 * Contenu : src/lib/content/pilier-finance.ts (voir la note sur le titre réglementé).
 */
export const metadata: Metadata = metadataPilier(pilierFinance);

export default function PilotageFinancierPage() {
  return <GabaritPilier page={pilierFinance} />;
}
