import type { PagePilier } from "@/lib/content/pilier";
import { offre } from "@/lib/content/tarifs";

/**
 * Silo 3 — Pilotage financier (master § 3). Référente : Marjorie Anglade.
 * Intention propriétaire : « DAF externalisé » (480/mois) et « DAF à temps partagé »
 * (260/mois) — docs/seo/ETUDE_MOTS_CLES.md.
 *
 * ATTENTION — TITRE RÉGLEMENTÉ. L'URL héritée contenait « expert-comptable » ; elle
 * est devenue /daf-externalise-toulouse/ (301 dans next.config.mjs). Le titre
 * d'expert-comptable est protégé (ordonnance du 19 septembre 1945) :
 * seule une personne inscrite à l'Ordre peut s'en prévaloir. Marjorie Anglade
 * l'est (confirmé par la cliente le 24/09/2026, n° SUPRA 190000386201) : le titre
 * est cité pour elle, à titre personnel, parce qu'il rassure. Le cabinet, lui, ne
 * le revendique pas et ne tient aucune comptabilité — c'est l'angle éditorial de
 * la page : ce qui sépare un DAF externalisé d'un expert-comptable.
 * Voir la note de vigilance en fin de page.
 */
export const pilierFinance: PagePilier = {
  href: "/daf-externalise-toulouse/",
  fil: "Pilotage financier externalisé",
  accent: "finance",

  // « DAF externalisé pour PME à Toulouse » = 36 + 18 = 54 / 60
  metaTitle: "DAF externalisé pour PME à Toulouse",
  // 144 / 150
  metaDescription:
    "DAF externalisé à temps partagé pour PME et ETI à Toulouse : trésorerie, tableaux de bord, prévisionnel. Le pilotage, au-delà de la comptabilité.",
  nomService: "Direction financière externalisée pour PME et ETI",

  h1: "DAF externalisé pour PME à Toulouse : piloter au-delà de la comptabilité",
  lede:
    "Votre comptable vous dit où vous en étiez. Un DAF externalisé vous dit où vous allez. Marjorie Anglade prend en charge le pilotage financier de votre PME à temps partagé — trésorerie, tableaux de bord, prévisionnel — sans que vous ayez à recruter un DAF à plein temps.",

  essentiel: {
    reponse:
      "Le pilotage financier externalisé d'Un Seul Souffle met à disposition des PME et ETI de 10 à 250 salariés une directrice financière à temps partagé, Marjorie Anglade. Elle installe les outils de pilotage qui manquent — prévisionnel de trésorerie, tableaux de bord de gestion, analyse de marge — et les fait vivre mois après mois. Ce service ne remplace pas votre expert-comptable, qui produit vos comptes et vos déclarations : il intervient en amont de la décision, quand la comptabilité intervient en aval. Il se souscrit seul, sans transformation globale de l'entreprise, à Toulouse et en Occitanie.",
    points: [
      "Pour qui : PME et ETI de 10 à 250 salariés, sans DAF en interne",
      "Référente : Marjorie Anglade, associée fondatrice, expert-comptable inscrite à l'Ordre",
      "Ce que ça couvre : trésorerie, tableaux de bord, prévisionnel, analyse de marge",
      "Ne remplace pas : votre expert-comptable, avec qui le travail se fait en complément",
      "Format : temps partagé, volume adapté à la taille de l'entreprise",
      "Se souscrit seul, sans accompagnement global",
      "Zone : Toulouse, Haute-Garonne, Occitanie",
    ],
  },

  chapitres: [
    {
      label: "La confusion à lever",
      titre: "DAF externalisé ou expert-comptable : deux métiers différents",
      blocs: [
        {
          type: "p",
          texte:
            "C'est la première question que posent les dirigeants, et elle est légitime : « j'ai déjà un comptable, pourquoi en faudrait-il un deuxième ? » La réponse tient en une phrase. **Votre expert-comptable regarde le passé ; un DAF externalisé prépare les décisions à venir.** Les deux sont nécessaires, et ils ne font pas le même travail.",
        },
        {
          type: "tableau",
          entetes: ["Votre expert-comptable", "Un DAF externalisé"],
          lignes: [
            [
              "Produit les comptes annuels, les déclarations fiscales et sociales",
              "Construit le prévisionnel et les tableaux de bord qui servent à décider",
            ],
            [
              "Travaille sur des données closes, souvent avec plusieurs semaines de recul",
              "Travaille sur la trésorerie des prochains mois, avant que les décisions soient prises",
            ],
            [
              "Répond d'une obligation légale et engage sa responsabilité sur les comptes",
              "Répond d'un besoin de pilotage : marge, seuil de rentabilité, capacité d'investissement",
            ],
            [
              "Vous dit ce que l'entreprise a fait",
              "Vous dit ce que l'entreprise peut se permettre de faire",
            ],
            [
              "Intervient après la clôture",
              "Intervient chaque mois, aux côtés du dirigeant",
            ],
          ],
        },
        {
          type: "p",
          texte:
            "Nous ne sommes pas votre expert-comptable et nous ne cherchons pas à le remplacer : nous travaillons avec lui, à partir des données qu'il produit. Un cabinet comptable qui tient bien ses comptes est d'ailleurs la meilleure base de départ pour un pilotage utile.",
        },
      ],
    },

    {
      label: "Pour qui",
      titre: "Quand une PME a besoin d'un DAF à temps partagé",
      blocs: [
        {
          type: "p",
          texte:
            "Le besoin d'un DAF à temps partagé apparaît presque toujours au même moment : l'entreprise est devenue trop grande pour être pilotée de tête, et trop petite pour justifier un directeur financier à plein temps. Entre les deux, il y a une zone où le dirigeant décide au feeling, avec un décalage de plusieurs mois sur ses chiffres. Beaucoup de PME toulousaines se trouvent dans cette zone.",
        },
        {
          type: "liste",
          items: [
            "Vous savez que l'entreprise gagne de l'argent, sans savoir précisément où ni pourquoi",
            "Votre trésorerie se pilote au solde bancaire, pas à un prévisionnel",
            "Vous découvrez votre résultat à la clôture, parfois avec de mauvaises surprises",
            "Vous hésitez sur un investissement faute de savoir ce que l'entreprise peut absorber",
            "Votre banque demande des éléments que vous mettez des jours à rassembler",
            "Vous avez des tableaux de bord, mais personne ne les met à jour ni ne les commente",
          ],
        },
        {
          type: "p",
          texte:
            "Recruter un DAF pour une PME de cette taille coûte cher et se justifie rarement à temps plein. Le DAF en temps partagé résout exactement ce problème : vous avez la compétence quand vous en avez besoin, au volume qui correspond à votre entreprise. Si vous ne savez pas encore où se situe votre blocage, le [diagnostic d'entreprise](/diagnostic/) en ligne vous aide à le situer.",
        },
      ],
    },

    {
      label: "Le travail",
      titre: "Ce que fait un directeur financier externalisé dans votre PME",
      blocs: [
        {
          type: "p",
          texte:
            "Le travail d'un directeur financier externalisé tient en trois outils, installés dans cet ordre par Marjorie Anglade. **Le prévisionnel de trésorerie d'abord.** C'est l'outil qui change le plus vite la vie d'un dirigeant : savoir, à trois et six mois, ce qui entre et ce qui sort. Tant qu'il n'existe pas, chaque échéance importante se vit comme un risque, et les décisions d'investissement se prennent sans marge de sécurité.",
        },
        {
          type: "p",
          texte:
            "**Les tableaux de bord de gestion ensuite** — ceux que vous regarderez réellement. Un tableau de bord utile tient sur une page, se met à jour sans y passer deux jours, et porte les quelques indicateurs qui pilotent votre activité. Nous les construisons à partir de votre métier, pas d'un modèle générique.",
        },
        {
          type: "p",
          texte:
            "**L'analyse de marge enfin.** Beaucoup de PME ignorent lesquels de leurs clients, produits ou chantiers gagnent de l'argent, et lesquels en consomment. C'est souvent à ce moment que la conversation devient inconfortable, et c'est souvent là que se trouve le gisement le plus immédiat.",
        },
        {
          type: "encadre",
          titre: "Ce que vous obtenez",
          texte:
            "Un prévisionnel tenu à jour, des tableaux de bord que vous lisez en cinq minutes, une visibilité sur vos marges par segment, et un point mensuel avec quelqu'un qui connaît votre dossier. La traduction concrète : des décisions d'investissement prises avec une marge de sécurité connue.",
        },
        {
          type: "p",
          texte:
            "Le pilotage financier est aussi le premier chantier ouvert dans beaucoup de transformations, parce qu'il conditionne la capacité à arbitrer tous les autres. Il peut à l'inverse rester votre seul sujet. Si le besoin dépasse la finance, voir notre [conseil en organisation](/transformation-entreprise/).",
        },
      ],
    },

    {
      label: "Le modèle",
      titre: "Directeur financier à temps partagé : le modèle et ce qu'il implique",
      blocs: [
        {
          type: "p",
          texte:
            "Le principe du directeur financier à temps partagé est simple : une directrice financière expérimentée intervient chez vous pour un volume défini, réparti sur l'année. Vous ne payez pas un poste, vous payez un niveau de compétence et une régularité. C'est ce qui distingue un DAF externalisé d'un recrutement.",
        },
        {
          type: "p",
          texte:
            "Ce modèle a une contrepartie qu'il faut connaître : il suppose que vos données de base soient saisies correctement et à temps. Un prévisionnel construit sur une comptabilité en retard de trois mois ne vaut rien. Quand c'est le cas, remettre les saisies à jour fait partie des premiers travaux — et c'est parfois le vrai chantier.",
        },
        {
          type: "p",
          texte:
            "Marjorie Anglade est associée fondatrice du cabinet. Elle porte le pilier finance et pilotage, et fait appel à un collègue quand un sujet sort de son périmètre — une marge qui se dégrade pour une raison commerciale, par exemple. Sa présentation détaillée est sur sa page : [Marjorie Anglade](/marjorie-anglade/).",
        },
        { type: "tarifs", offre: "finance" },
      ],
    },
  ],

  faq: [
    {
      q: "Combien coûte un DAF externalisé ?",
      r: [offre("finance").reponse],
    },
    {
      q: "Qu'est-ce qu'un DAF externalisé à temps partagé ?",
      r: [
        "C'est un directeur financier qui n'est pas salarié de votre entreprise et qui intervient chez vous pour un volume défini, réparti sur l'année. Il construit le prévisionnel de trésorerie, installe les tableaux de bord et analyse vos marges, puis les fait vivre mois après mois.",
        "Un directeur financier externalisé apporte la compétence d'un DAF sans le coût d'un poste à plein temps. Chez Un Seul Souffle, c'est Marjorie Anglade qui tient ce rôle auprès des PME et ETI d'Occitanie.",
      ],
    },
    {
      q: "Un DAF externalisé remplace-t-il mon expert-comptable ?",
      r: [
        "Non. Votre expert-comptable produit vos comptes annuels, vos déclarations fiscales et sociales, et engage sa responsabilité sur ces documents. Nous n'intervenons pas sur ce périmètre.",
        "Notre travail commence là où le sien s'arrête : construire le prévisionnel, installer les tableaux de bord, analyser les marges et préparer vos décisions. Nous travaillons à partir des données qu'il produit, en complément et non en concurrence.",
      ],
    },
    {
      q: "À partir de quelle taille une PME a-t-elle besoin d'un DAF à temps partagé ?",
      r: [
        "En pratique, le besoin apparaît vers 10 salariés et devient net au-delà de 20, quand le dirigeant ne peut plus tenir ses chiffres de tête et qu'un DAF à plein temps ne se justifie pas encore.",
        "Le critère le plus fiable n'est pas l'effectif mais la question suivante : savez-vous aujourd'hui ce que votre trésorerie sera dans trois mois ? Si la réponse est non, le besoin existe.",
      ],
    },
    {
      q: "Faut-il prendre tout l'accompagnement du cabinet ?",
      r: [
        "Non. Le pilotage financier externalisé se souscrit seul, sans transformation globale de l'entreprise. C'est même le cas le plus fréquent.",
        "Si le travail sur les chiffres met au jour un problème qui n'est pas financier — une organisation qui coûte cher, une stratégie commerciale mal calibrée — nous vous le disons. Vous restez libre d'en rester là.",
      ],
    },
    {
      q: "Combien de temps avant d'avoir des tableaux de bord utilisables ?",
      r: [
        "Cela dépend entièrement de l'état de vos données de base. Avec une comptabilité à jour et un outil de gestion correctement alimenté, les premiers tableaux de bord arrivent vite.",
        "Si les saisies ont du retard, remettre les données en ordre est le premier chantier. Nous le disons dès le diagnostic, parce que construire un prévisionnel sur des données fausses ne sert à rien.",
      ],
    },
    {
      q: "Votre DAF externalisé intervient-il sur site ou à distance ?",
      r: [
        "Les deux. Le point mensuel se tient de préférence sur site à Toulouse, en Haute-Garonne et en Occitanie ; le travail de construction et de mise à jour se fait à distance.",
        "Pour une première intervention, une présence sur place est utile : comprendre une marge suppose de comprendre le métier.",
      ],
    },
  ],

  bascule: {
    titre: "Si le blocage dépasse les chiffres",
    texte:
      "Une marge qui se dégrade a rarement une cause uniquement financière. Quand le pilotage met au jour un problème d'organisation, de production ou de stratégie commerciale, c'est la transformation de l'entreprise qui prend le relais — sur le périmètre que vous décidez.",
    href: "/transformation-entreprise/",
    ancre: "Découvrir la transformation de l'entreprise",
  },
};
