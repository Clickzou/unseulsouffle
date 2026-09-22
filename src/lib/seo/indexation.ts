import type { Metadata } from "next";

/**
 * INTERRUPTEUR GÉNÉRAL D'INDEXATION.
 *
 * `false` pendant toute la refonte : le site ne doit pas être découvert par
 * Google ni par les moteurs génératifs tant qu'il n'est pas validé. Un site de
 * préproduction indexé se retrouve en double avec le site en production, ce qui
 * dilue les signaux et peut faire sortir les bonnes URL des résultats.
 *
 * MISE EN LIGNE — une seule ligne à changer : passer `INDEXABLE` à `true`.
 * Cela réactive d'un coup les métadonnées de toutes les pages ET le robots.txt.
 * Vérifier ensuite dans la Search Console que l'indexation est bien demandée.
 *
 * Les pages volontairement exclues en permanence — mentions légales,
 * confidentialité, 404, actualités tant qu'elle est vide — utilisent
 * `NON_INDEXABLE` et ne dépendent pas de cet interrupteur.
 */
export const INDEXABLE = false;

/** Pages exclues en permanence, quel que soit l'état de l'interrupteur. */
export const NON_INDEXABLE: Metadata["robots"] = {
  index: false,
  follow: false,
  nocache: true,
};

/**
 * Directives des pages destinées à être indexées, une fois le site ouvert.
 *
 * `max-image-preview: large` autorise la grande vignette dans les résultats —
 * utile sur les pages équipe, où la photo porte la confiance.
 */
export const ROBOTS: Metadata["robots"] = INDEXABLE
  ? { index: true, follow: true, "max-image-preview": "large" }
  : NON_INDEXABLE;
