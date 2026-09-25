import { createHmac, timingSafeEqual } from "crypto";

import type { Article } from "@/lib/content/article";

/**
 * Liens d'aperçu provisoires des articles programmés.
 *
 * Un article dont la date n'est pas atteinte répond 404 sur /infos-utiles/ : il
 * n'est lisible que par /apercu/<slug>/?e=<expiration>&s=<signature>. La signature
 * (HMAC-SHA256, clé `APERCU_SECRET`) couvre le slug ET l'expiration : on ne peut
 * ni deviner un lien, ni prolonger un lien reçu, ni le réutiliser pour un autre
 * article. Le lien expire 14 jours après la publication — passé la date, l'aperçu
 * redirige de toute façon vers l'article public.
 *
 * Les liens sont fabriqués ici, côté site, et transmis au tableau de bord Clickzou
 * par /api/articles-programmes/ : la clé ne quitte jamais ce projet.
 */

const JOURS_APRES_PUBLICATION = 14;

function cle(): string {
  const secret = process.env.APERCU_SECRET;
  if (!secret || secret.length < 32) throw new Error("APERCU_SECRET absente ou trop courte (32 caractères minimum).");
  return secret;
}

function signer(slug: string, expiration: number): string {
  return createHmac("sha256", cle()).update(`${slug}.${expiration}`).digest("base64url");
}

/** Chemin d'aperçu signé d'un article (sans le domaine). */
export function cheminApercu(article: Article): string {
  const fin = new Date(`${article.datePublication}T23:59:59Z`);
  fin.setUTCDate(fin.getUTCDate() + JOURS_APRES_PUBLICATION);
  const expiration = Math.floor(fin.getTime() / 1000);
  return `/apercu/${article.slug}/?e=${expiration}&s=${signer(article.slug, expiration)}`;
}

/** Vrai si la signature correspond au slug et à l'expiration, et que le lien n'a pas expiré. */
export function apercuValide(slug: string, e: string | undefined, s: string | undefined): boolean {
  if (!e || !s || !/^\d{9,11}$/.test(e)) return false;
  const expiration = Number(e);
  if (expiration * 1000 < Date.now()) return false;
  const attendu = Buffer.from(signer(slug, expiration));
  const recu = Buffer.from(s);
  return attendu.length === recu.length && timingSafeEqual(attendu, recu);
}
