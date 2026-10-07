/**
 * Podcast du cabinet, page /podcasts/ (rubrique « Actualités », demande de la
 * cliente du 07/10/2026).
 *
 * Tout vient des pages Ausha de l'émission, relevées le 07/10/2026 : titres,
 * dates, durées, invitée. Les résumés reformulent leurs descriptions sans rien
 * ajouter. Pas de lecteur intégré (choix de JC) : chaque épisode s'écoute sur
 * Ausha ou sur la plateforme du visiteur, sans cookie tiers sur le site.
 *
 * Nouvel épisode : l'ajouter EN TÊTE de `EPISODES`, avec sa page Ausha.
 */

export type Episode = {
  numero: number;
  titre: string;
  /** AAAA-MM-JJ, date de publication sur Ausha. */
  date: string;
  minutes: number;
  resume: string;
  invite?: string;
  /** Page Ausha de l'épisode (lecture directe dans le navigateur). */
  url: string;
  /** Article du site sur le même sujet, affiché seulement une fois publié. */
  article?: string;
};

export const EMISSION = {
  titre: "Parler vrai : dans la tête du dirigeant",
  description:
    "Les difficultés dont les dirigeants parlent en rendez-vous sont rarement celles dont ils parlent en public : la fatigue, les doutes, les arbitrages difficiles, la solitude. Ce podcast met des mots sur ce que vivent réellement les dirigeants de TPE et de PME. Sans recette miracle, sans discours culpabilisant, avec notre regard de terrain.",
  url: "https://smartlink.ausha.co/parler-vrai-dans-la-tete-du-dirigeant",
  plateformes: [
    { nom: "Spotify", url: "https://open.spotify.com/show/033Z2TcoRf9jTsb9X4QmkX" },
    { nom: "Apple Podcasts", url: "https://podcasts.apple.com/fr/podcast/parler-vrai-dans-la-tete-du-dirigeant/id6796719646" },
    { nom: "Deezer", url: "https://www.deezer.com/show/1003446642" },
  ],
};

export const EPISODES: Episode[] = [
  {
    numero: 3,
    titre: "Alléger sa charge mentale, ralentir, se déconnecter",
    date: "2026-09-07",
    minutes: 44,
    resume:
      "« Je dors avec mon téléphone à côté de moi. » La charge mentale n'est pas une simple fatigue. Pourquoi il est si difficile de ralentir, ce qui se passe dans le corps, et des pistes concrètes pour alléger, sans culpabiliser de vouloir ralentir.",
    invite: "Olivia Artur, sophrologue et spécialiste de la qualité de vie au travail",
    url: "https://podcast.ausha.co/parler-vrai-dans-la-tete-du-dirigeant/episode-3-alleger-sa-charge-mentale-ralentir-se-deconnecter",
    article: "charge-mentale",
  },
  {
    numero: 2,
    titre: "Nos pistes pour sortir de la solitude",
    date: "2026-07-31",
    minutes: 45,
    resume:
      "Les bascules qui permettent de sortir de la solitude du dirigeant. Elle ne disparaît pas parce que l'environnement a changé.",
    url: "https://podcast.ausha.co/parler-vrai-dans-la-tete-du-dirigeant/episode-1-nos-pistes-pour-sortir-de-la-solitude",
    article: "solitude-du-dirigeant",
  },
  {
    numero: 1,
    titre: "La solitude du dirigeant",
    date: "2026-07-31",
    minutes: 34,
    resume:
      "Le sujet qui est ressorti le plus largement de notre sondage LinkedIn : la solitude du dirigeant. Un sujet dont on parle peu.",
    url: "https://podcast.ausha.co/parler-vrai-dans-la-tete-du-dirigeant/episode-1-la-solitude-du-dirigeant",
    article: "solitude-du-dirigeant",
  },
];
