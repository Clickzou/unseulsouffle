import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GabaritMembre, metadataMembre } from "@/components/GabaritMembre";
import { membreParSlug } from "@/lib/content/membres";

const membre = membreParSlug("marjorie-anglade");

/** Liste des articles rattachés : régénération avec la publication programmée. */
export const revalidate = 3600;

export const metadata: Metadata = membre ? metadataMembre(membre) : {};

export default function Page() {
  if (!membre) notFound();
  return <GabaritMembre membre={membre} />;
}
