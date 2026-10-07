/**
 * Signale un événement du site à l'espace client Clickzou (onglet Statistiques
 * de la cliente) : demande de contact envoyée, diagnostic commencé ou terminé.
 *
 * Appelé côté serveur seulement, avec la clé déjà partagée pour l'API des
 * articles (TABLEAU_DE_BORD_CLE). L'événement est anonyme : un type, et la
 * date posée par Clickzou. Pour une demande de contact, l'e-mail est joint
 * pour une seule raison : marquer « demande envoyée » le diagnostic de la même
 * personne dans l'onglet Diagnostics ; Clickzou ne le garde pas avec l'événement.
 *
 * Ne lève jamais d'erreur : un compteur ne doit pas faire échouer un envoi de
 * formulaire. 8 s au plus : avec 3 s, le premier signal du 28/09/2026 s'est
 * perdu pendant le démarrage à froid de Clickzou.
 */
export type TypeEvenement = "contact" | "diagnostic_debut" | "diagnostic_fin";

const URL_EVENEMENTS = process.env.CLICKZOU_EVENEMENTS_URL || "https://clickzou.fr/api/espace-client/evenements/";
const URL_DIAGNOSTICS = process.env.CLICKZOU_DIAGNOSTICS_URL || "https://clickzou.fr/api/espace-client/diagnostics/";

async function envoyerAClickzou(url: string, corps: object, quoi: string): Promise<boolean> {
  const cle = process.env.TABLEAU_DE_BORD_CLE;
  if (!cle) return false;
  try {
    const reponse = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${cle}`, "Content-Type": "application/json" },
      body: JSON.stringify(corps),
      signal: AbortSignal.timeout(8000),
    });
    if (!reponse.ok) console.error(`[evenements] ${quoi} refusé par Clickzou :`, reponse.status);
    return reponse.ok;
  } catch (e) {
    console.error(`[evenements] ${quoi} non transmis :`, (e as Error).message);
    return false;
  }
}

export async function signalerEvenement(type: TypeEvenement, email?: string): Promise<void> {
  await envoyerAClickzou(URL_EVENEMENTS, type === "contact" && email ? { type, email } : { type }, type);
}

/** Diagnostic avec coordonnées (consentement donné) : onglet Diagnostics de l'espace client. */
export type DiagnosticTransmis = {
  nom: string;
  entreprise: string;
  email: string;
  telephone: string;
  taille: string;
  resultat: {
    prioritaire: { pilier: string; score: number };
    scores: { pilier: string; score: number | null }[];
    non: { pilier: string; affirmation: string }[];
  };
};

export async function transmettreDiagnostic(diagnostic: DiagnosticTransmis): Promise<boolean> {
  return envoyerAClickzou(URL_DIAGNOSTICS, diagnostic, "diagnostic");
}
