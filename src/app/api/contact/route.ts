import { NextResponse } from "next/server";

/**
 * Envoi du formulaire de contact via Resend (API REST, sans dépendance).
 *
 * Variables d'environnement (.env.local en local, Vercel en production) :
 *   RESEND_API_KEY   clé API Resend (obligatoire)
 *   CONTACT_TO       destinataire des demandes     — défaut : contact@unseulsouffle.fr
 *   CONTACT_FROM     expéditeur, domaine vérifié dans Resend
 *                    — défaut : Un Seul Souffle <site@unseulsouffle.fr>
 *
 * Le domaine de CONTACT_FROM doit être vérifié dans Resend (enregistrements DNS),
 * sinon Resend refuse l'envoi. Le visiteur est mis en `reply_to` : répondre à
 * l'e-mail reçu lui répond directement.
 */

export const runtime = "nodejs";

type Donnees = {
  nom?: string;
  entreprise?: string;
  email?: string;
  telephone?: string;
  message?: string;
  /** Champ piège invisible : rempli uniquement par les robots. */
  site?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function nettoyer(valeur: unknown, max: number): string {
  return typeof valeur === "string" ? valeur.trim().slice(0, max) : "";
}

function echapper(texte: string): string {
  return texte.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(requete: Request) {
  let corps: Donnees;
  try {
    corps = await requete.json();
  } catch {
    return NextResponse.json({ ok: false, erreur: "Requête invalide." }, { status: 400 });
  }

  // Robot : on répond « ok » sans rien envoyer, pour ne pas l'aider à s'adapter.
  if (nettoyer(corps.site, 200)) return NextResponse.json({ ok: true });

  const nom = nettoyer(corps.nom, 120);
  const entreprise = nettoyer(corps.entreprise, 160);
  const email = nettoyer(corps.email, 200);
  const telephone = nettoyer(corps.telephone, 40);
  const message = nettoyer(corps.message, 5000);

  if (!nom || !email || !message) {
    return NextResponse.json({ ok: false, erreur: "Nom, e-mail et message sont obligatoires." }, { status: 400 });
  }
  if (!EMAIL.test(email)) {
    return NextResponse.json({ ok: false, erreur: "L'adresse e-mail n'est pas valide." }, { status: 400 });
  }

  const cle = process.env.RESEND_API_KEY;
  if (!cle) {
    console.error("[contact] RESEND_API_KEY absente : aucun envoi possible.");
    return NextResponse.json(
      { ok: false, erreur: "L'envoi n'est pas encore configuré. Écrivez-nous à contact@unseulsouffle.fr." },
      { status: 503 },
    );
  }

  const destinataire = process.env.CONTACT_TO || "contact@unseulsouffle.fr";
  const expediteur = process.env.CONTACT_FROM || "Un Seul Souffle <site@unseulsouffle.fr>";

  const lignes: [string, string][] = [
    ["Nom", nom],
    ["Entreprise", entreprise || "—"],
    ["E-mail", email],
    ["Téléphone", telephone || "—"],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#101a2c;line-height:1.6">
      <h2 style="font-size:18px;margin:0 0 16px">Nouvelle demande depuis le site</h2>
      <table style="border-collapse:collapse;margin-bottom:20px">
        ${lignes
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 16px 4px 0;color:#7c8494">${k}</td><td style="padding:4px 0">${echapper(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <div style="padding:16px 20px;background:#f3f4f6;border-radius:8px;white-space:pre-wrap">${echapper(message)}</div>
    </div>`;

  const texte = `${lignes.map(([k, v]) => `${k} : ${v}`).join("\n")}\n\n${message}`;

  try {
    const reponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${cle}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: expediteur,
        to: [destinataire],
        reply_to: email,
        subject: `Demande de ${nom}${entreprise ? ` (${entreprise})` : ""} — site Un Seul Souffle`,
        html,
        text: texte,
      }),
    });

    if (!reponse.ok) {
      console.error("[contact] Resend a refusé l'envoi :", reponse.status, await reponse.text());
      return NextResponse.json(
        { ok: false, erreur: "L'envoi a échoué. Réessayez ou écrivez-nous à contact@unseulsouffle.fr." },
        { status: 502 },
      );
    }
  } catch (erreur) {
    console.error("[contact] Erreur réseau vers Resend :", erreur);
    return NextResponse.json(
      { ok: false, erreur: "L'envoi a échoué. Réessayez ou écrivez-nous à contact@unseulsouffle.fr." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
