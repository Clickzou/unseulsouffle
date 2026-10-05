/**
 * Relecture des articles par la cliente, depuis son espace Clickzou
 * (clickzou.fr/espace-client, demande de JC du 05/10/2026).
 *
 * La cliente modifie le TEXTE d'un article programmé ; Clickzou enregistre ses
 * modifications dans `corrections-client.json` (commit GitHub), et le registre
 * des articles les applique au chargement. Restent verrouillés, donc absents de
 * `champsEditables` et refusés par `appliquerCorrections` : H1, titres H2,
 * balises meta, mots-clés, sources, pilier, date, slug. Les liens internes
 * `[ancre](/url/)` sont contrôlés côté Clickzou : un texte qui en perd ou en
 * change un est refusé avant tout commit.
 */
import type { Article } from "@/lib/content/article";
import corrections from "./corrections-client.json";

export type ChampEditable = {
  /** Adresse du texte dans l'objet article : « chapitres.2.blocs.1.texte ». */
  chemin: string;
  /** Regroupement à l'écran : « Chapô », « Chapitre 3 — <titre> », « FAQ ». */
  section: string;
  libelle: string;
  texte: string;
};

type CorrectionsClient = Record<string, { champs: Record<string, string>; modifieLe?: string; par?: string }>;

const EDITABLES = [
  /^chapo$/,
  /^essentiel\.reponse$/,
  /^essentiel\.points\.\d+$/,
  /^chapitres\.\d+\.exergue$/,
  /^chapitres\.\d+\.blocs\.\d+\.texte(\.\d+)?$/,
  /^chapitres\.\d+\.blocs\.\d+\.titre$/,
  /^chapitres\.\d+\.blocs\.\d+\.items\.\d+$/,
  /^chapitres\.\d+\.blocs\.\d+\.entetes\.[01]$/,
  /^chapitres\.\d+\.blocs\.\d+\.lignes\.\d+\.[01]$/,
  /^faq\.\d+\.q$/,
  /^faq\.\d+\.r\.\d+$/,
];

export function estEditable(chemin: string): boolean {
  return EDITABLES.some((re) => re.test(chemin));
}

export function champsEditables(a: Article): ChampEditable[] {
  const champs: ChampEditable[] = [];
  const ajouter = (chemin: string, section: string, libelle: string, texte: unknown) => {
    if (typeof texte === "string" && texte.trim()) champs.push({ chemin, section, libelle, texte });
  };
  ajouter("chapo", "Introduction", "Chapô", a.chapo);
  ajouter("essentiel.reponse", "L'essentiel", "Réponse", a.essentiel.reponse);
  a.essentiel.points.forEach((p, i) => ajouter(`essentiel.points.${i}`, "L'essentiel", `Point ${i + 1}`, p));
  a.chapitres.forEach((c, ci) => {
    const section = `Chapitre ${ci + 1} — ${c.titre}`;
    ajouter(`chapitres.${ci}.exergue`, section, "Phrase en exergue", c.exergue);
    c.blocs.forEach((b, bi) => {
      const base = `chapitres.${ci}.blocs.${bi}`;
      if (b.type === "p") ajouter(`${base}.texte`, section, "Paragraphe", b.texte);
      else if (b.type === "h3") ajouter(`${base}.texte`, section, "Intertitre", b.texte);
      else if (b.type === "liste") b.items.forEach((t, i) => ajouter(`${base}.items.${i}`, section, `Liste — élément ${i + 1}`, t));
      else if (b.type === "tableau") {
        b.entetes.forEach((t, i) => ajouter(`${base}.entetes.${i}`, section, `Tableau — en-tête ${i + 1}`, t));
        b.lignes.forEach((l, li) => l.forEach((t, k) => ajouter(`${base}.lignes.${li}.${k}`, section, `Tableau — ligne ${li + 1}, colonne ${k + 1}`, t)));
      } else if (b.type === "encadre") {
        ajouter(`${base}.titre`, section, "Encadré — titre", b.titre);
        ajouter(`${base}.texte`, section, "Encadré — texte", b.texte);
      } else if (b.type === "referent") b.texte.forEach((t, i) => ajouter(`${base}.texte.${i}`, section, `Présentation — paragraphe ${i + 1}`, t));
    });
  });
  a.faq.forEach((f, fi) => {
    ajouter(`faq.${fi}.q`, "Questions fréquentes", `Question ${fi + 1}`, f.q);
    f.r.forEach((t, i) => ajouter(`faq.${fi}.r.${i}`, "Questions fréquentes", `Réponse ${fi + 1}${f.r.length > 1 ? ` — paragraphe ${i + 1}` : ""}`, t));
  });
  return champs.filter((c) => estEditable(c.chemin));
}

/** Pose un texte à son adresse, seulement si un texte s'y trouve déjà (pas de création de structure). */
function poser(objet: unknown, chemin: string, texte: string) {
  const etapes = chemin.split(".");
  let courant: unknown = objet;
  for (const e of etapes.slice(0, -1)) {
    if (courant === null || typeof courant !== "object") return;
    courant = (courant as Record<string, unknown>)[e];
  }
  const dernier = etapes.at(-1)!;
  if (courant && typeof courant === "object" && typeof (courant as Record<string, unknown>)[dernier] === "string") {
    (courant as Record<string, unknown>)[dernier] = texte;
  }
}

export function appliquerCorrections(a: Article): Article {
  const c = (corrections as CorrectionsClient)[a.slug];
  if (!c?.champs) return a;
  const copie = structuredClone(a);
  for (const [chemin, texte] of Object.entries(c.champs)) {
    if (estEditable(chemin) && typeof texte === "string") poser(copie, chemin, texte);
  }
  return copie;
}
