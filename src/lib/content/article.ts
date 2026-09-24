/**
 * Modèle de contenu des articles de fond (master § 6 et § 9).
 *
 * Même principe que les pages piliers : le contenu est un objet, le rendu un
 * gabarit. Les chapitres réutilisent les blocs des piliers (`Chapitre`, `Bloc`),
 * donc le même balisage `[ancre](/url/)` pour le maillage et les sources.
 *
 * Un article porte UNE requête qui n'appartient à aucune page du menu
 * (docs/seo/ETUDE_MOTS_CLES.md § 3) et pointe vers un pilier : il nourrit le silo
 * sans lui disputer son intention.
 */

import type { CleAccent, QuestionFAQ } from "@/lib/content/home";
import type { Chapitre } from "@/lib/content/pilier";

export type Source = {
  /** Titre exact de la page citée. */
  titre: string;
  /** Organisme qui publie : Bpifrance, INSEE, DARES, CCI, France Num, ordre professionnel… */
  editeur: string;
  url: string;
};

export type Article = {
  /** Segment d'URL : /infos-utiles/<slug>/ */
  slug: string;

  /** Requête visée, avec son volume SE Ranking au moment de la rédaction. */
  motCle: string;
  motsClesSecondaires: string[];

  /** Max 42 caractères : le gabarit ajoute « | Un Seul Souffle » (18) → 60 au total. */
  metaTitle: string;
  /** Max 150 caractères, bénéfice ou CTA implicite. */
  metaDescription: string;
  /** Un seul H1, requête principale présente. */
  h1: string;
  /** Chapô : la réponse à l'intention, requête principale dans les 100 premiers mots. */
  chapo: string;
  /** Bloc « L'essentiel » (GEO, master § 8) : réponse autonome et 3 à 5 points. */
  essentiel: { reponse: string; points: string[] };

  chapitres: Chapitre[];
  faq: QuestionFAQ[];
  /** Au moins 2 sources autoritaires réellement consultées (master § 5). */
  sources: Source[];

  /** Slug d'un membre de `equipe` (home.ts) : l'article est signé par une personne. */
  auteur: string;
  /** ISO 8601 (AAAA-MM-JJ). */
  datePublication: string;
  dateMaj?: string;
  accent: CleAccent;
  /** Page pilier de rattachement, liée dans le premier tiers et rappelée en fin d'article. */
  pilier: { href: string; ancre: string };

  /**
   * `false` : servi en noindex et exclu du sitemap, quel que soit l'interrupteur
   * général. Le 24/09/2026, JC a décidé de publier sans relecture préalable des
   * auteurs : tous les articles sont à `true`, et un e-mail de contrôle part le
   * vendredi précédant chaque publication (api/cron/annonce-article). Remettre
   * `false` sur un article suffit à le retirer de l'index.
   */
  valide: boolean;
};
