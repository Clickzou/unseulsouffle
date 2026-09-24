/**
 * Consentement aux cookies — règles CNIL (délibération 2020-091, recommandation
 * du 17 septembre 2020).
 *
 * - Rien de non essentiel n'est déposé avant un choix explicite.
 * - Refuser est aussi simple qu'accepter : même niveau, même taille de bouton.
 * - Le choix, dans un sens comme dans l'autre, est conservé 6 mois, durée que
 *   la CNIL recommande avant de redemander.
 * - Le choix se modifie à tout moment, depuis le footer ou la page /cookies/.
 *
 * Le choix est stocké dans un cookie first-party strictement nécessaire
 * (`uss_consentement`) : il est exempté de consentement, puisqu'il sert
 * précisément à mémoriser celui-ci.
 */

export const COOKIE_CONSENTEMENT = "uss_consentement";
export const DUREE_CHOIX_JOURS = 182;

/** Émis quand le choix change — la mesure d'audience s'y abonne. */
export const EVENEMENT_CHOIX = "uss:consentement";
/** Émis pour rouvrir le bandeau (lien « Gérer les cookies »). */
export const EVENEMENT_OUVRIR = "uss:ouvrir-cookies";

export type Choix = { mesure: boolean; date: string };

export function lireChoix(): Choix | null {
  if (typeof document === "undefined") return null;
  const brut = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${COOKIE_CONSENTEMENT}=`))
    ?.slice(COOKIE_CONSENTEMENT.length + 1);
  if (!brut) return null;
  try {
    const choix = JSON.parse(decodeURIComponent(brut)) as Choix;
    return typeof choix.mesure === "boolean" ? choix : null;
  } catch {
    return null;
  }
}

export function enregistrerChoix(mesure: boolean) {
  const choix: Choix = { mesure, date: new Date().toISOString() };
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_CONSENTEMENT}=${encodeURIComponent(JSON.stringify(choix))}; Max-Age=${
    DUREE_CHOIX_JOURS * 86400
  }; Path=/; SameSite=Lax${secure}`;

  // Retrait du consentement : on efface aussi les cookies de mesure déjà posés.
  if (!mesure) {
    for (const c of document.cookie.split("; ")) {
      const nom = c.split("=")[0];
      if (nom === "_ga" || nom.startsWith("_ga_")) {
        const domaine = window.location.hostname.replace(/^www\./, "");
        for (const d of ["", `; Domain=.${domaine}`]) {
          document.cookie = `${nom}=; Max-Age=0; Path=/${d}`;
        }
      }
    }
  }
  window.dispatchEvent(new CustomEvent(EVENEMENT_CHOIX, { detail: choix }));
}

export function ouvrirGestionCookies() {
  window.dispatchEvent(new Event(EVENEMENT_OUVRIR));
}
