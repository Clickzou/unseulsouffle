import { NextResponse } from "next/server";
import { signalerEvenement } from "@/lib/evenements";

export const runtime = "nodejs";

/**
 * POST /api/evenement/  { type: "diagnostic_debut" | "diagnostic_fin" } —
 * appelé par le questionnaire (navigateur), relayé à Clickzou par le serveur
 * pour que la clé ne sorte jamais du serveur. Les demandes de contact sont
 * signalées directement par /api/contact/, pas par ici.
 */
const PERMIS = new Set(["diagnostic_debut", "diagnostic_fin"]);

export async function POST(requete: Request) {
  // Seules les pages du site peuvent l'appeler (pas un autre domaine).
  const origine = requete.headers.get("origin");
  if (origine && new URL(origine).host !== new URL(requete.url).host) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }
  const { type } = await requete.json().catch(() => ({}));
  if (!PERMIS.has(type)) return NextResponse.json({ ok: false }, { status: 400 });
  await signalerEvenement(type);
  return NextResponse.json({ ok: true });
}
