/**
 * Modèle de contenu commun aux pages piliers (master § 4 — 1 intention = 1 page).
 *
 * Le contenu est séparé du rendu, comme pour la home : une page pilier est un
 * objet `PagePilier`, et `src/app/<slug>/page.tsx` ne fait que le passer au
 * gabarit. Deux conséquences voulues :
 *   - la rédaction SEO se relit d'un seul fichier, sans lire de JSX ;
 *   - le JSON-LD (Service, FAQPage, BreadcrumbList) est construit depuis le même
 *     objet que l'affichage, donc balisage et contenu ne peuvent pas diverger.
 */

import type { CleAccent, QuestionFAQ } from "@/lib/content/home";

/* ─────────── Blocs de corps ───────────
 * Volontairement peu de types : une page pilier est un texte de fond, pas une
 * page composée. Tout bloc supplémentaire doit se justifier par une intention
 * de lecture, jamais par un effet.
 */

export type Bloc =
  /**
   * Paragraphe. Accepte un balisage minimal, résolu par `RichText` :
   *   [texte](/url/)  lien interne à ancre exacte (maillage, master § 5)
   *   **texte**       emphase — à réserver à la phrase citable de la section
   */
  | { type: "p"; texte: string }
  /** Liste à puces. Même balisage que `p` dans chaque item. */
  | { type: "liste"; items: string[] }
  /**
   * Renvoi vers une étape de la méthode, par son numéro dans `etapes` (home.ts).
   * Le détail (symptôme, action, résultat, format) n'est donc écrit qu'une fois
   * pour tout le site : la home et la page pilier ne peuvent pas se contredire.
   */
  | { type: "etape"; n: string }
  /** Tableau à deux colonnes — format le plus repris par les moteurs IA (master § 8.2). */
  | { type: "tableau"; entetes: [string, string]; lignes: [string, string][] }
  /**
   * Le comparatif « cabinet classique vs équipe de direction externalisée »,
   * repris tel quel de `comparatif` (home.ts). Le master le désigne comme l'actif
   * GEO prioritaire de la marque (§ 11, point 16) : il est donc écrit une fois et
   * réaffiché, jamais reformulé d'une page à l'autre.
   */
  | { type: "comparatif" }
  /** Les cinq expertises, depuis `piliers` (home.ts), avec leurs référents. */
  | { type: "expertises" }
  /**
   * Encadré de fin de section. `aFournir` marque une donnée que le client doit
   * livrer : même convention que la FAQ de la home, le placeholder est visible
   * à l'écran et exclu du JSON-LD.
   */
  | { type: "encadre"; titre: string; texte: string; aFournir?: boolean };

export type Chapitre = {
  /** H2 de la section. Porte un mot-clé secondaire ou une variante (master § 6). */
  titre: string;
  /** Sur-titre monospace. Sert de repère de rubrique, jamais de décoration. */
  label?: string;
  blocs: Bloc[];
};

/* ─────────── Page ─────────── */

export type PagePilier = {
  /** Chemin canonique, trailing slash inclus. */
  href: string;
  /** Fil d'Ariane et BreadcrumbList : libellé court de la page. */
  fil: string;
  accent: CleAccent;

  /** Max 60 caractères une fois le template « | Un Seul Souffle » appliqué. */
  metaTitle: string;
  /** Max 150 caractères, avec bénéfice ou CTA implicite. */
  metaDescription: string;
  /** Nom du service pour le JSON-LD `Service`. */
  nomService: string;

  /** H1 — un seul par page, mot-clé principal présent. */
  h1: string;
  /** Chapô sous le H1. Porte le mot-clé principal dans les 100 premiers mots. */
  lede: string;

  /**
   * Bloc « L'essentiel » — checklist GEO nº 1 (master § 8) : une réponse
   * factuelle et autonome, extractible sans le contexte de la page.
   */
  essentiel: { reponse: string; points: string[] };

  chapitres: Chapitre[];
  faq: QuestionFAQ[];

  /** Renvoi vers l'autre parcours, en fin de page. Le dirigeant doit pouvoir se
   *  corriger s'il s'est trompé de porte. */
  bascule: { titre: string; texte: string; href: string; ancre: string };
};
