import { timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";

import { articles, dateAtteinte } from "@/lib/content/articles";
import { champsEditables } from "@/lib/content/edition-client";

/**
 * GET /api/articles-programmes/contenu/?slug=<slug> — textes modifiables d'un
 * article, pour l'éditeur de l'espace client Clickzou (relecture par la cliente).
 * Même clé que /api/articles-programmes/ (`TABLEAU_DE_BORD_CLE`). Les textes
 * renvoyés intègrent les corrections déjà enregistrées.
 */

export const dynamic = "force-dynamic";

function autorise(requete: Request): boolean {
  const cle = process.env.TABLEAU_DE_BORD_CLE;
  const recu = requete.headers.get("authorization") ?? "";
  if (!cle || cle.length < 32) return false;
  const attendu = Buffer.from(`Bearer ${cle}`);
  const donne = Buffer.from(recu);
  return attendu.length === donne.length && timingSafeEqual(attendu, donne);
}

export async function GET(requete: Request) {
  if (!autorise(requete)) return NextResponse.json({ ok: false }, { status: 401 });
  const slug = new URL(requete.url).searchParams.get("slug") ?? "";
  const article = articles.find((a) => a.slug === slug);
  if (!article) return NextResponse.json({ ok: false, erreur: "Article introuvable" }, { status: 404 });

  return NextResponse.json(
    {
      ok: true,
      slug: article.slug,
      titre: article.h1,
      datePublication: article.datePublication,
      statut: dateAtteinte(article) ? "publie" : "programme",
      // Chemin du fichier de corrections dans le dépôt : Clickzou y écrit.
      fichierCorrections: "src/lib/content/corrections-client.json",
      champs: champsEditables(article),
    },
    { headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" } },
  );
}
