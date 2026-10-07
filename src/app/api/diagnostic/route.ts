import { NextResponse } from "next/server";
import { transmettreDiagnostic } from "@/lib/evenements";
import { niveau, PILIERS_DIAGNOSTIC, PROFIL, QUESTIONS, resultatDiagnostic } from "@/lib/content/questionnaire";

/**
 * POST /api/diagnostic/ — le visiteur a laissé ses coordonnées à la fin du
 * diagnostic et coché le consentement (demande de JC du 07/10/2026).
 *
 * Le navigateur envoie les réponses brutes ; le résultat est recalculé ici avec
 * le même code que l'écran (resultatDiagnostic) : ni le mail ni l'espace client
 * ne reprennent un texte venu du navigateur, hormis les coordonnées.
 *
 * Deux envois, indépendants :
 *  - un e-mail d'alerte aux associées (Resend, CONTACT_TO, réponse = visiteur) ;
 *  - le diagnostic à l'onglet « Diagnostics » de l'espace client Clickzou.
 * Réussite si l'un des deux est parti : le contact n'est pas perdu.
 */

export const runtime = "nodejs";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function nettoyer(valeur: unknown, max: number): string {
  return typeof valeur === "string" ? valeur.trim().slice(0, max) : "";
}

function echapper(texte: string): string {
  return texte.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(requete: Request) {
  // Seules les pages du site peuvent l'appeler (pas un autre domaine).
  const origine = requete.headers.get("origin");
  if (origine && new URL(origine).host !== new URL(requete.url).host) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  let corps: Record<string, unknown>;
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
  const taille = PROFIL.options.find((o) => o === corps.taille) ?? "";

  if (!nom || !email) {
    return NextResponse.json({ ok: false, erreur: "Nom et e-mail sont obligatoires." }, { status: 400 });
  }
  if (!EMAIL.test(email)) {
    return NextResponse.json({ ok: false, erreur: "L'adresse e-mail n'est pas valide." }, { status: 400 });
  }
  if (corps.consentement !== true) {
    return NextResponse.json({ ok: false, erreur: "Merci de cocher la case d'accord." }, { status: 400 });
  }

  const reponses = Array.isArray(corps.reponses) ? corps.reponses : [];
  const valides =
    reponses.length === QUESTIONS.length &&
    reponses.every((v, i) => Number.isInteger(v) && (v >= 0 ? v <= 3 : v === -1 && PILIERS_DIAGNOSTIC[QUESTIONS[i].pilier].nonConcerneAutorise));
  const resultat = valides ? resultatDiagnostic(reponses as number[]) : null;
  if (!resultat?.prioritaire) {
    return NextResponse.json({ ok: false, erreur: "Le diagnostic est incomplet." }, { status: 400 });
  }

  const nomPilier = (i: number) => PILIERS_DIAGNOSTIC[i].nom;
  const prio = { pilier: nomPilier(resultat.prioritaire.i), score: resultat.prioritaire.score };
  const scores = resultat.scores.map((score, i) => ({ pilier: nomPilier(i), score }));
  const non = resultat.non.map((n) => ({ pilier: nomPilier(n.pilier), affirmation: n.affirmation }));

  const [mailParti, transmis] = await Promise.all([
    envoyerAlerte({ nom, entreprise, email, telephone, taille, prio, scores, non }),
    transmettreDiagnostic({ nom, entreprise, email, telephone, taille, resultat: { prioritaire: prio, scores, non } }),
  ]);

  if (!mailParti && !transmis) {
    return NextResponse.json(
      { ok: false, erreur: "L'envoi a échoué. Écrivez-nous à contact@unseulsouffle.fr." },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}

async function envoyerAlerte(d: {
  nom: string;
  entreprise: string;
  email: string;
  telephone: string;
  taille: string;
  prio: { pilier: string; score: number };
  scores: { pilier: string; score: number | null }[];
  non: { pilier: string; affirmation: string }[];
}): Promise<boolean> {
  const cle = process.env.RESEND_API_KEY;
  if (!cle) {
    console.error("[diagnostic] RESEND_API_KEY absente : pas d'e-mail d'alerte.");
    return false;
  }
  const destinataire = process.env.CONTACT_TO || "contact@unseulsouffle.fr";
  const expediteur = process.env.CONTACT_FROM || "Un Seul Souffle <site@unseulsouffle.fr>";

  const lignes: [string, string][] = [
    ["Nom", d.nom],
    ["Entreprise", d.entreprise || "—"],
    ["E-mail", d.email],
    ["Téléphone", d.telephone || "—"],
    ["Taille", d.taille ? `${d.taille} salariés` : "—"],
  ];
  const libelleScore = (s: number | null) => (s === null ? "non concerné" : `${s}/100 (${niveau(s).libelle.toLowerCase()})`);
  const espaceClient = "https://clickzou.fr/espace-client/dashboard/diagnostics/";

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#101a2c;line-height:1.6">
      <h2 style="font-size:18px;margin:0 0 6px">Nouveau diagnostic avec demande de rappel</h2>
      <p style="margin:0 0 16px;color:#7c8494">Priorité : <strong style="color:#101a2c">${echapper(d.prio.pilier)}</strong>, ${libelleScore(d.prio.score)}</p>
      <table style="border-collapse:collapse;margin-bottom:20px">
        ${lignes.map(([k, v]) => `<tr><td style="padding:4px 16px 4px 0;color:#7c8494">${k}</td><td style="padding:4px 0">${echapper(v)}</td></tr>`).join("")}
      </table>
      <h3 style="font-size:15px;margin:0 0 6px">Scores</h3>
      <ul style="margin:0 0 20px;padding-left:18px">
        ${d.scores.map((s) => `<li>${echapper(s.pilier)} : ${libelleScore(s.score)}</li>`).join("")}
      </ul>
      <h3 style="font-size:15px;margin:0 0 6px">A répondu « non » à</h3>
      ${
        d.non.length
          ? `<ul style="margin:0 0 20px;padding-left:18px">${d.non.map((n) => `<li><span style="color:#7c8494">${echapper(n.pilier)} — </span>${echapper(n.affirmation)}</li>`).join("")}</ul>`
          : `<p style="margin:0 0 20px">Aucune réponse franchement négative.</p>`
      }
      <p style="margin:0;color:#7c8494">Répondre à cet e-mail écrit directement à ${echapper(d.nom)}. Le suivi se tient dans votre espace client : <a href="${espaceClient}">onglet Diagnostics</a>.</p>
    </div>`;

  const texte = [
    `Nouveau diagnostic avec demande de rappel`,
    `Priorité : ${d.prio.pilier}, ${libelleScore(d.prio.score)}`,
    "",
    ...lignes.map(([k, v]) => `${k} : ${v}`),
    "",
    "Scores :",
    ...d.scores.map((s) => `- ${s.pilier} : ${libelleScore(s.score)}`),
    "",
    "A répondu « non » à :",
    ...(d.non.length ? d.non.map((n) => `- ${n.pilier} — ${n.affirmation}`) : ["Aucune réponse franchement négative."]),
    "",
    `Suivi : ${espaceClient}`,
  ].join("\n");

  try {
    const reponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${cle}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: expediteur,
        to: [destinataire],
        reply_to: d.email,
        subject: `Diagnostic : ${d.nom}${d.entreprise ? ` (${d.entreprise})` : ""} — priorité ${d.prio.pilier}`,
        html,
        text: texte,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!reponse.ok) console.error("[diagnostic] Resend a refusé l'envoi :", reponse.status, await reponse.text());
    return reponse.ok;
  } catch (erreur) {
    console.error("[diagnostic] Erreur réseau vers Resend :", erreur);
    return false;
  }
}
