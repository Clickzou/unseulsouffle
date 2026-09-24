import { NextResponse } from "next/server";
import { articles } from "@/lib/content/articles";
import type { Article } from "@/lib/content/article";
import { equipe } from "@/lib/content/home";

/**
 * E-mail de contrôle avant publication — décision de JC le 24/09/2026 : les
 * articles partent sans relecture préalable, mais il reçoit chaque vendredi le
 * texte complet de l'article du lundi suivant, pour vérifier (pas pour valider).
 *
 * Déclenché par Vercel Cron (vercel.json), le vendredi à 7 h UTC. Envoie tous
 * les articles dont la date tombe dans les 7 jours qui suivent : l'article du
 * lundi suivant, et lui seul avec le rythme d'un article par semaine.
 *
 * Variables d'environnement (Vercel) :
 *   CRON_SECRET              posé par Vercel dans l'en-tête Authorization du cron
 *   RESEND_API_KEY           même clé que le formulaire de contact
 *   ALERTE_PUBLICATION_TO    destinataire(s), séparés par des virgules — par défaut
 *                            contact@unseulsouffle.fr (choix de JC, 24/09/2026)
 *   ALERTE_FROM              expéditeur de cet e-mail (facultatif) — utile tant que
 *                            unseulsouffle.fr n'est pas vérifié dans Resend
 *   CONTACT_FROM             expéditeur par défaut, domaine vérifié dans Resend
 *
 * Test manuel : GET /api/cron/annonce-article/?date=2026-10-02 avec l'en-tête
 * `Authorization: Bearer <CRON_SECRET>` — simule l'envoi du vendredi 2 octobre.
 * Ajouter `&voir=1` pour afficher l'e-mail sans l'envoyer.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function aujourdhuiParis(): string {
  return new Intl.DateTimeFormat("fr-CA", { timeZone: "Europe/Paris" }).format(new Date());
}

function plusJours(date: string, n: number): string {
  const d = new Date(`${date}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

function echapper(texte: string): string {
  return texte.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

/** Balisage des contenus (`**gras**`, `[ancre](url)`) vers du HTML d'e-mail. */
function enHtml(texte: string, base: string): string {
  return echapper(texte)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, ancre: string, url: string) => {
      const lien = url.startsWith("/") ? `${base}${url}` : url;
      return `<a href="${lien}" style="color:#0d6e69">${ancre}</a>`;
    });
}

function dateLongue(date: string): string {
  return new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${date}T12:00:00Z`),
  );
}

function corpsArticle(a: Article, base: string): string {
  const auteur = equipe.find((m) => m.slug === a.auteur)?.nom ?? a.auteur;
  const url = `${base}/infos-utiles/${a.slug}/`;
  const p = (t: string) => `<p style="margin:0 0 12px">${enHtml(t, base)}</p>`;
  const blocs = a.chapitres
    .map((c) => {
      const contenu = c.blocs
        .map((b) => {
          switch (b.type) {
            case "p":
              return p(b.texte);
            case "h3":
              return `<h4 style="font-size:15px;margin:18px 0 8px">${echapper(b.texte)}</h4>`;
            case "liste":
              return `<ul style="margin:0 0 12px;padding-left:20px">${b.items.map((i) => `<li>${enHtml(i, base)}</li>`).join("")}</ul>`;
            case "tableau":
              return `<table style="border-collapse:collapse;margin:0 0 14px;font-size:13px">
                <tr>${b.entetes.map((e) => `<th style="text-align:left;border-bottom:1px solid #ccc;padding:4px 10px 4px 0">${echapper(e)}</th>`).join("")}</tr>
                ${b.lignes.map((l) => `<tr>${l.map((c2) => `<td style="vertical-align:top;border-bottom:1px solid #eee;padding:4px 10px 4px 0">${enHtml(c2, base)}</td>`).join("")}</tr>`).join("")}
              </table>`;
            case "encadre":
              return `<div style="background:#e8f1ef;padding:10px 14px;margin:0 0 12px"><strong>${echapper(b.titre)}</strong><br>${enHtml(b.texte, base)}</div>`;
            case "etape":
              return `<p style="margin:0 0 12px;color:#7c8494">[Fiche de l'étape ${b.n} de la méthode]</p>`;
            default:
              return "";
          }
        })
        .join("");
      return `<h3 style="font-size:17px;margin:26px 0 10px">${echapper(c.titre)}</h3>${contenu}`;
    })
    .join("");

  return `
    <div style="border-top:3px solid #0d6e69;margin-top:28px;padding-top:18px">
      <p style="margin:0;color:#7c8494;font-size:13px">Publication le ${dateLongue(a.datePublication)} · signé ${echapper(auteur)} · requête ${echapper(a.motCle)}</p>
      <h2 style="font-size:22px;margin:8px 0 6px">${echapper(a.h1)}</h2>
      <p style="margin:0 0 4px;font-size:13px"><strong>Titre Google :</strong> ${echapper(a.metaTitle)} | Un Seul Souffle</p>
      <p style="margin:0 0 16px;font-size:13px"><strong>Description Google :</strong> ${echapper(a.metaDescription)}</p>
      <p style="margin:0 0 16px;font-size:13px">En ligne à partir du jour de publication : <a href="${url}" style="color:#0d6e69">${url}</a></p>
      ${p(a.chapo)}
      <div style="background:#f3f4f6;padding:12px 16px;margin:0 0 12px">
        <strong>L'essentiel</strong>${p(a.essentiel.reponse)}
        <ul style="margin:0;padding-left:20px">${a.essentiel.points.map((x) => `<li>${enHtml(x, base)}</li>`).join("")}</ul>
      </div>
      ${blocs}
      <h3 style="font-size:17px;margin:26px 0 10px">Questions fréquentes</h3>
      ${a.faq.map((f) => `<p style="margin:0 0 4px"><strong>${echapper(f.q)}</strong></p>${f.r.map(p).join("")}`).join("")}
      <h3 style="font-size:17px;margin:26px 0 10px">Sources</h3>
      <ul style="margin:0;padding-left:20px;font-size:13px">${a.sources
        .map((s) => `<li><a href="${s.url}" style="color:#0d6e69">${echapper(s.titre)}</a> — ${echapper(s.editeur)}</li>`)
        .join("")}</ul>
    </div>`;
}

export async function GET(requete: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || requete.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const params = new URL(requete.url).searchParams;
  const jour = /^\d{4}-\d{2}-\d{2}$/.test(params.get("date") ?? "") ? params.get("date")! : aujourdhuiParis();
  const fin = plusJours(jour, 7);
  const aVenir = articles
    .filter((a) => a.datePublication > jour && a.datePublication <= fin)
    .sort((a, b) => a.datePublication.localeCompare(b.datePublication));

  if (aVenir.length === 0) return NextResponse.json({ ok: true, envoye: 0, jour });

  const cle = process.env.RESEND_API_KEY;
  const voir = params.get("voir") === "1";
  const destinataires = (process.env.ALERTE_PUBLICATION_TO || process.env.CONTACT_TO || "contact@unseulsouffle.fr").split(",").map((s) => s.trim()).filter(Boolean);
  if (!voir && (!cle || destinataires.length === 0)) {
    console.error("[annonce-article] RESEND_API_KEY ou ALERTE_PUBLICATION_TO absente.");
    return NextResponse.json({ ok: false, erreur: "configuration" }, { status: 503 });
  }

  // Domaine réellement servi (vercel.app tant que le vrai domaine n'est pas branché).
  const hote = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const base = hote ? `https://${hote}` : "https://www.unseulsouffle.fr";

  const titres = aVenir.map((a) => a.h1).join(" · ");
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#101a2c;line-height:1.6;max-width:720px">
      <p style="margin:0 0 8px">Bonjour,</p>
      <p style="margin:0 0 8px">${aVenir.length > 1 ? "Ces articles seront publiés" : "Cet article sera publié"} automatiquement sur le site Un Seul Souffle. Rien à faire si tout vous convient.</p>
      <p style="margin:0 0 8px;color:#7c8494;font-size:13px">Pour le reporter ou le corriger avant sa sortie, il suffit de changer sa date ou son texte dans src/lib/content/articles/.</p>
      ${aVenir.map((a) => corpsArticle(a, base)).join("")}
    </div>`;

  // `?voir=1` : renvoie l'e-mail dans le navigateur au lieu de l'envoyer.
  if (params.get("voir") === "1") {
    return new NextResponse(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }

  const reponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${cle}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.ALERTE_FROM || process.env.CONTACT_FROM || "Un Seul Souffle <site@unseulsouffle.fr>",
      to: destinataires,
      subject: `À paraître lundi sur Un Seul Souffle : ${titres}`,
      html,
    }),
  });

  if (!reponse.ok) {
    const detail = await reponse.text();
    console.error("[annonce-article] Resend a refusé l'envoi :", reponse.status, detail);
    return NextResponse.json({ ok: false, erreur: detail.slice(0, 300) }, { status: 502 });
  }
  return NextResponse.json({ ok: true, envoye: aVenir.length, jour, slugs: aVenir.map((a) => a.slug) });
}
