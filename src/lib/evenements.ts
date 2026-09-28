/**
 * Signale un événement du site à l'espace client Clickzou (onglet Statistiques
 * de la cliente) : demande de contact envoyée, diagnostic commencé ou terminé.
 *
 * Appelé côté serveur seulement, avec la clé déjà partagée pour l'API des
 * articles (TABLEAU_DE_BORD_CLE). Aucune donnée personnelle : un type, et la
 * date posée par Clickzou. Ne lève jamais d'erreur : un compteur ne doit pas
 * faire échouer un envoi de formulaire. 8 s au plus : avec 3 s, le premier
 * signal du 28/09/2026 s'est perdu pendant le démarrage à froid de Clickzou.
 */
export type TypeEvenement = "contact" | "diagnostic_debut" | "diagnostic_fin";

const URL_EVENEMENTS = process.env.CLICKZOU_EVENEMENTS_URL || "https://clickzou.fr/api/espace-client/evenements/";

export async function signalerEvenement(type: TypeEvenement): Promise<void> {
  const cle = process.env.TABLEAU_DE_BORD_CLE;
  if (!cle) return;
  try {
    const reponse = await fetch(URL_EVENEMENTS, {
      method: "POST",
      headers: { Authorization: `Bearer ${cle}`, "Content-Type": "application/json" },
      body: JSON.stringify({ type }),
      signal: AbortSignal.timeout(8000),
    });
    if (!reponse.ok) console.error(`[evenements] ${type} refusé par Clickzou :`, reponse.status);
  } catch (e) {
    console.error(`[evenements] ${type} non transmis :`, (e as Error).message);
  }
}
