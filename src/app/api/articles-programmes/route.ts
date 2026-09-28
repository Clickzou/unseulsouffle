import { timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";

import { cheminApercu } from "@/lib/apercu";
import { sansAnnotation } from "@/lib/content/article";
import { articles, dateAtteinte } from "@/lib/content/articles";
import { SITE_URL, equipe } from "@/lib/content/home";

/**
 * Liste des articles pour le tableau de bord client Clickzou (clickzou.fr/espace-client).
 *
 * Authentification : `Authorization: Bearer <TABLEAU_DE_BORD_CLE>` — la même valeur
 * est posée côté Clickzou. Sans clé valide : 401, et la liste des articles
 * programmés (donc leurs sujets à venir) ne sort pas.
 *
 * Pour chaque article : statut (publié / programmé), lien public ou lien d'aperçu
 * signé, et la matière utile à la génération des posts LinkedIn (chapô, points
 * clés, mots-clés, pilier).
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

/** Texte brut : retire le balisage `**gras**` et `[ancre](url)` des contenus. */
function brut(texte: string): string {
  return texte.replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export async function GET(requete: Request) {
  if (!autorise(requete)) return NextResponse.json({ ok: false }, { status: 401 });

  // Deux adresses :
  //   - `url` : l'adresse DÉFINITIVE (SITE_URL, www.unseulsouffle.fr), celle que
  //     l'on diffuse — posts LinkedIn compris, qui restent en ligne des années ;
  //   - `urlActuelle` / `apercuUrl` : le domaine réellement servi, celui de la
  //     requête (vercel.app tant que le vrai domaine n'est pas branché), pour que
  //     la cliente puisse lire dès maintenant.
  const base = new URL(requete.url).origin;

  const liste = [...articles]
    .sort((a, b) => a.datePublication.localeCompare(b.datePublication))
    .map((a) => {
      const publie = dateAtteinte(a);
      return {
        slug: a.slug,
        titre: a.h1,
        datePublication: a.datePublication,
        statut: publie ? "publie" : "programme",
        url: `${SITE_URL}/infos-utiles/${a.slug}/`,
        urlActuelle: `${base}/infos-utiles/${a.slug}/`,
        apercuUrl: publie ? null : `${base}${cheminApercu(a)}`,
        auteur: equipe.find((m) => m.slug === a.auteur)?.nom ?? a.auteur,
        motCle: sansAnnotation(a.motCle),
        motsClesSecondaires: a.motsClesSecondaires.map(sansAnnotation),
        metaDescription: a.metaDescription,
        chapo: brut(a.chapo),
        essentiel: { reponse: brut(a.essentiel.reponse), points: a.essentiel.points.map(brut) },
        pilier: a.pilier,
      };
    });

  return NextResponse.json(
    { ok: true, site: "Un Seul Souffle", articles: liste },
    { headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" } },
  );
}
