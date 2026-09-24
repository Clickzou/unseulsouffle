import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 2, transformation de l'entreprise. Signé Patrick Calvet.
 * Requête : « processus métier » (390/mois, KD 9). Secondaires : « qu'est-ce qu'un
 * processus » (260), « process métier » (390).
 *
 * ANTI-DOUBLON : « cartographie des processus » a son propre article (03/2027).
 * Celui-ci traite la notion (définition, familles, exemples, signes de panne,
 * description d'UN processus) et renvoie vers lui pour la carte d'ensemble.
 *
 * Sources ouvertes le 24/09/2026 : ISO, « Principes de management de la qualité »
 * (PDF) ; DGE, Baromètre France Num 2025 (rapport PDF, p. 40 et 43) ; France Num,
 * fiche du MOOC BPMN. Aucun chiffre sur le cabinet ni cas client.
 */
export const article: Article = {
  slug: "processus-metier",

  motCle: "processus métier (390/mois, KD 9) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "qu'est-ce qu'un processus (260/mois)",
    "process métier (390/mois)",
  ],

  // 41 / 42
  metaTitle: "Processus métier : définition et exemples",
  // 145 / 150
  metaDescription:
    "Processus métier : définition, différence avec une procédure, exemples en PME, signes d'un processus cassé et méthode pour le décrire simplement.",

  h1: "Processus métier : définition, exemples et méthode pour le rendre fiable",

  chapo:
    "Un processus métier est la suite d'activités par laquelle votre entreprise transforme une demande en résultat pour un client : une commande en livraison payée, un besoin en offre signée, une panne en machine qui tourne. Il traverse plusieurs services et c'est là qu'il casse, entre deux personnes, jamais au milieu d'un poste. Dans une PME, la plupart des processus métier ne sont écrits nulle part et tiennent grâce à quelques personnes qui savent. Tant qu'elles sont là, tout va bien. Voici ce qu'est un processus, en quoi il diffère d'une procédure, comment reconnaître celui qui fatigue votre organisation, et comment le décrire sans produire un classeur que personne n'ouvrira.",

  essentiel: {
    reponse:
      "Un processus métier est un enchaînement d'activités, souvent réparties entre plusieurs services, qui transforme une entrée (une demande client, une commande, une matière) en un résultat attendu par un client interne ou externe. On le distingue des processus de pilotage, qui orientent l'entreprise, et des processus support, qui fournissent les ressources. L'ISO en fait l'un des sept principes de management de la qualité : des résultats cohérents et prévisibles s'obtiennent plus efficacement quand les activités sont gérées comme des processus corrélés formant un système.",
    points: [
      "Un processus décrit le quoi et le qui, de bout en bout ; une procédure décrit le comment d'une étape",
      "Trois familles : processus métier (réalisation), processus de pilotage, processus support",
      "Un processus casse aux interfaces entre services, rarement à l'intérieur d'un poste",
      "Chaque processus a un pilote, un client, une entrée, une sortie et quelques indicateurs",
      "Le décrire se fait sur le terrain, avec ceux qui le font, pas depuis un bureau",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Qu'est-ce qu'un processus métier ?",
      blocs: [
        {
          type: "p",
          texte:
            "Un processus, au sens large, est un ensemble d'activités qui transforment des éléments d'entrée en un résultat. Le processus métier est celui qui produit ce que l'entreprise vend ou rend à ses clients : c'est son cœur d'activité, par opposition aux fonctions qui l'entourent. **Si vous deviez expliquer à un nouveau salarié comment une commande devient une facture encaissée, vous décririez un processus métier.**",
        },
        { type: "h3", texte: "Les cinq éléments d'un processus" },
        {
          type: "liste",
          items: [
            "**Un client**, interne ou externe, qui attend le résultat",
            "**Une entrée** qui déclenche le processus : une demande, une commande, une réclamation, une matière",
            "**Une sortie** attendue, mesurable : un produit livré, un devis envoyé, un problème résolu",
            "**Des activités** enchaînées, réparties entre plusieurs personnes ou services",
            "**Un pilote**, qui répond du résultat de bout en bout, au-delà des frontières des services",
          ],
        },
        { type: "h3", texte: "Pourquoi l'approche processus s'est imposée" },
        {
          type: "p",
          texte:
            "L'organigramme découpe l'entreprise en services verticaux. Le client, lui, traverse l'entreprise à l'horizontale : commerce, bureau d'études, achats, production, logistique, comptabilité. L'ISO a fait de l'« approche processus » l'un des sept [principes de management de la qualité](https://www.iso.org/iso/fr/pub100080.pdf) qui sous-tendent ISO 9001. Son énoncé : « des résultats cohérents et prévisibles sont obtenus de manière plus efficace et efficiente lorsque les activités sont comprises et gérées comme des processus corrélés fonctionnant comme un système cohérent ».",
        },
        { type: "h3", texte: "Processus métier et organisation" },
        {
          type: "p",
          texte:
            "Regarder l'entreprise par ses processus plutôt que par ses services change les questions qu'on se pose. On ne demande plus « qui est responsable de la production ? » mais « qui répond du délai entre la commande et la livraison ? ». C'est le point de départ de notre travail de [conseil en organisation](/transformation-entreprise/) : partir du fonctionnement réel, pas de l'organigramme.",
        },
      ],
    },

    {
      label: "Vocabulaire",
      titre: "Processus, process métier, procédure : ne pas confondre",
      blocs: [
        {
          type: "p",
          texte:
            "« Process métier » et « processus métier » désignent la même chose : le premier est un anglicisme courant dans l'industrie, le second le terme français. La vraie confusion est ailleurs, entre processus, procédure et mode opératoire. Elle produit des documents inutiles et des débats sans fin.",
        },
        {
          type: "tableau",
          entetes: ["Notion", "Ce qu'elle décrit"],
          lignes: [
            ["Processus", "Le quoi et le qui, de bout en bout : les grandes étapes, les acteurs, les entrées et les sorties"],
            ["Procédure", "Le comment d'une étape ou d'une activité : les règles à suivre, les validations, les documents"],
            ["Mode opératoire", "Le geste précis à un poste de travail : réglage d'une machine, contrôle d'une pièce"],
            ["Organigramme", "Qui dépend de qui : la hiérarchie, pas le chemin suivi par une commande"],
            ["Cartographie des processus", "La vue d'ensemble de tous les processus de l'entreprise et de leurs liens"],
          ],
        },
        { type: "h3", texte: "L'erreur classique : écrire des procédures avant le processus" },
        {
          type: "p",
          texte:
            "Beaucoup d'entreprises commencent par rédiger des procédures poste par poste. Chaque service optimise son morceau, et personne ne regarde ce qui se passe entre deux morceaux. On obtient des étapes bien documentées reliées par des transmissions floues, là où naissent les retards et les erreurs.",
        },
        { type: "h3", texte: "Une question de niveau de détail" },
        {
          type: "p",
          texte:
            "Un processus métier tient en général sur une page, en cinq à dix grandes étapes. S'il en faut vingt, c'est qu'on est descendu au niveau des procédures. S'il en faut deux, c'est qu'on décrit une fonction, pas un processus. Ce niveau de lecture est celui où le dirigeant peut décider ; le détail appartient aux équipes.",
        },
      ],
    },

    {
      label: "Les familles",
      titre: "Processus métier, pilotage, support : les trois familles de processus",
      blocs: [
        {
          type: "p",
          texte:
            "La plupart des démarches qualité classent les processus en trois familles. Ce classement n'est pas une formalité : il dit où se crée la valeur, et donc où porter l'effort en premier.",
        },
        {
          type: "tableau",
          entetes: ["Famille", "Exemples dans une PME industrielle"],
          lignes: [
            ["Processus métier (réalisation)", "Traiter une commande, concevoir un produit, fabriquer, livrer, assurer le service après-vente"],
            ["Processus de pilotage", "Définir la stratégie, construire le budget, suivre les indicateurs, conduire les revues de direction"],
            ["Processus support", "Recruter et former, acheter, maintenir les équipements, gérer l'informatique, tenir la comptabilité"],
          ],
        },
        { type: "h3", texte: "Les processus métier, ceux que le client voit" },
        {
          type: "p",
          texte:
            "Ce sont eux qui déterminent le délai, la qualité et le prix perçus par le client. Une PME en compte en général une poignée. Si vous en listez quinze, vous avez probablement découpé un même processus en plusieurs morceaux.",
        },
        { type: "h3", texte: "Les processus support, ceux qui bloquent sans prévenir" },
        {
          type: "p",
          texte:
            "Une maintenance mal organisée ou des achats lents ne se voient pas du client, mais ils freinent tous les processus métier à la fois. Dans l'industrie, c'est souvent par là qu'un problème de délai se révèle : la fabrication attend une pièce, un réglage, une validation.",
        },
        { type: "h3", texte: "Les processus de pilotage, ceux qu'on oublie" },
        {
          type: "p",
          texte:
            "Dans beaucoup de PME, le pilotage se fait dans la tête du dirigeant. Il existe bien, mais il n'est pas partagé. C'est l'une des raisons pour lesquelles l'entreprise dépend autant de lui.",
        },
      ],
    },

    {
      label: "Exemples",
      titre: "Exemples de processus métier dans une PME",
      blocs: [
        {
          type: "p",
          texte:
            "Les noms changent d'un secteur à l'autre, mais quatre processus métier reviennent dans presque toutes les PME de production et de services. Pour chacun, voici où il se grippe le plus souvent.",
        },
        { type: "h3", texte: "De la commande à l'encaissement" },
        {
          type: "p",
          texte:
            "Prise de commande, vérification de la faisabilité, planification, fabrication ou préparation, expédition, facturation, relance, encaissement. Il traverse presque tous les services. Les points de rupture typiques : une commande saisie avec des informations incomplètes, un planning qui ignore les stocks réels, une facture émise en retard parce que personne n'a signalé la livraison.",
        },
        { type: "h3", texte: "De la demande client au devis signé" },
        {
          type: "p",
          texte:
            "Qualification du besoin, chiffrage, validation technique, envoi, relance, négociation. Il conditionne le chiffre d'affaires futur et la marge. Il casse quand le chiffrage dépend d'une seule personne, ou quand le commerce promet un délai que la production n'a jamais validé.",
        },
        { type: "h3", texte: "Du besoin au produit nouveau" },
        {
          type: "p",
          texte:
            "Idée, cahier des charges, conception, prototype, industrialisation, lancement. C'est le processus le plus long et le moins répétitif, donc le plus difficile à décrire. Il se grippe au passage entre bureau d'études et atelier, quand un produit conçu sans l'avis de la production arrive sur une ligne qui ne sait pas le fabriquer au coût prévu.",
        },
        { type: "h3", texte: "De la réclamation à la solution" },
        {
          type: "p",
          texte:
            "Réception, enregistrement, analyse, réponse au client, action corrective. Le symptôme d'un processus défaillant est connu : la même réclamation revient, parce que la réponse au client a été faite mais que la cause n'a jamais été traitée.",
        },
      ],
    },

    {
      label: "Les signaux",
      titre: "Les signes qu'un processus métier est cassé",
      exergue: "Un processus ne casse presque jamais au milieu d'un poste. Il casse entre deux personnes.",
      blocs: [
        {
          type: "p",
          texte:
            "Un processus métier défaillant ne se signale pas par une panne franche. Il produit une fatigue diffuse, des urgences qui reviennent et des réunions pour rattraper ce qui aurait dû se faire seul. Cinq signes permettent de le repérer sans outil particulier.",
        },
        {
          type: "liste",
          items: [
            "**Tout tient par une personne** : quand elle est absente, le processus s'arrête ou ralentit nettement",
            "**Les ressaisies se multiplient** : la même information est tapée deux ou trois fois dans des outils différents",
            "**Les délais ne se prévoient pas** : personne ne sait dire combien de temps prend une commande standard",
            "**Les urgences remontent au dirigeant** : il arbitre des conflits entre services qui devraient se régler seuls",
            "**Chaque service se juge performant** alors que le client, lui, se plaint du résultat global",
          ],
        },
        { type: "h3", texte: "Le symptôme des interfaces" },
        {
          type: "p",
          texte:
            "Parmi les bénéfices de l'approche processus, l'ISO cite « une réduction des obstacles interfonctionnels ». C'est le cœur du sujet : chaque service peut bien travailler et le processus rester lent, parce que les transmissions entre services ne sont ni définies ni pilotées.",
        },
        { type: "h3", texte: "Le symptôme des outils" },
        {
          type: "p",
          texte:
            "Les ressaisies trahissent souvent des outils qui ne se parlent pas. Selon le [Baromètre France Num 2025](https://www.francenum.gouv.fr/files/2025-09/Barom%C3%A8tre%20France%20Num%202025%20-%20Rapport.pdf) de la Direction générale des Entreprises, mené auprès de 11 021 entreprises, 23 % des TPE et PME déclarent un logiciel de gestion multi-usages ou un progiciel de gestion intégré (PGI ou ERP). La proportion monte avec la taille, de 37 % entre 10 et 19 salariés à 48 % entre 50 et 249 salariés. Autrement dit, plus de la moitié des PME, même entre 50 et 249 salariés, ne déclarent pas d'outil de ce type : leurs processus circulent le plus souvent entre plusieurs logiciels, tableurs et messageries.",
        },
        { type: "h3", texte: "Attention au remède informatique" },
        {
          type: "p",
          texte:
            "Installer un ERP sur un processus mal défini revient à automatiser la confusion. L'outil impose une logique ; si personne n'a décidé au préalable qui fait quoi et dans quel ordre, les équipes contournent le logiciel avec des fichiers parallèles. Le processus d'abord, l'outil ensuite.",
        },
      ],
    },

    {
      label: "La méthode",
      titre: "Décrire un processus métier sans produire une usine à gaz",
      blocs: [
        {
          type: "p",
          texte:
            "Décrire un processus n'a d'intérêt que si la description sert à décider et à améliorer. Voici la démarche que nous recommandons pour un processus donné. La vue d'ensemble de tous les processus de l'entreprise est un autre exercice, détaillé dans notre article sur la [cartographie des processus](/infos-utiles/cartographie-des-processus/).",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Choisir un seul processus**, celui qui fait le plus souffrir le client ou les équipes, plutôt que de tout décrire d'un coup",
            "**Fixer ses bornes** : l'événement qui le déclenche et le résultat qui le termine",
            "**Suivre une commande réelle** sur le terrain, de bout en bout, avec les personnes qui la traitent",
            "**Dessiner les étapes et les transmissions** sur une page, en nommant qui fait quoi à chaque passage",
            "**Repérer les attentes, ressaisies et allers-retours**, là où le temps se perd",
            "**Désigner un pilote** qui répond du résultat de bout en bout",
          ],
        },
        { type: "h3", texte: "Le terrain, pas le bureau" },
        {
          type: "p",
          texte:
            "Un processus décrit en salle de réunion est le processus tel que chacun croit qu'il fonctionne. Suivre une commande réelle, poste par poste, révèle les contournements, les fichiers personnels et les coups de téléphone qui font réellement tourner l'entreprise. C'est ce fonctionnement réel qu'il faut décrire, puis améliorer.",
        },
        { type: "h3", texte: "Un formalisme léger" },
        {
          type: "p",
          texte:
            "Des post-it sur un mur suffisent pour commencer. Pour aller plus loin, il existe un langage normalisé, BPMN, dont France Num présente l'[initiation en ligne](https://www.francenum.gouv.fr/formations/introduction-la-cartographie-des-processus-metiers-avec-bpmn-cartopros) : une méthode de modélisation qui constitue la norme internationale ISO/CEI 19510. Utile quand le processus doit être informatisé, elle n'est pas nécessaire pour comprendre où il casse.",
        },
        { type: "h3", texte: "Le pilote de processus" },
        {
          type: "p",
          texte:
            "Parmi les actions possibles de l'approche processus, l'ISO recommande de « définir les autorités, les responsabilités et les obligations relatives au management des processus ». En pratique, un processus sans pilote reste un dessin. Le pilote n'est pas le chef de tous ceux qui y travaillent : il surveille le résultat de bout en bout et porte les améliorations entre services.",
        },
      ],
    },

    {
      label: "Faire vivre",
      titre: "Piloter et améliorer un processus métier dans la durée",
      blocs: [
        {
          type: "p",
          texte:
            "Un processus décrit puis rangé se dégrade en quelques mois. Ce qui le maintient, c'est un rythme de revue et quelques indicateurs regardés par ceux qui peuvent agir.",
        },
        { type: "h3", texte: "Deux ou trois indicateurs, pas davantage" },
        {
          type: "p",
          texte:
            "Un indicateur de délai (de la commande à la livraison), un de qualité (taux de retours, de réclamations ou de reprises) et, si besoin, un de coût. Ils se lisent sur une page, chaque mois, en présence du pilote. La construction de ces indicateurs est détaillée dans notre article sur le [tableau de bord KPI](/infos-utiles/tableau-de-bord-kpi/).",
        },
        { type: "h3", texte: "L'amélioration continue, à petits pas" },
        {
          type: "p",
          texte:
            "Une fois le processus visible, l'amélioration se fait par petites actions testées puis généralisées, plutôt que par une refonte complète. Les méthodes pour y parvenir, du PDCA aux rituels courts sur le terrain, font l'objet de notre article sur les [outils d'amélioration continue](/infos-utiles/outils-amelioration-continue/).",
        },
        { type: "h3", texte: "Ce que nous apportons" },
        {
          type: "p",
          texte:
            "Nous intervenons sur le terrain, aux côtés de vos équipes, pour décrire le processus qui bloque et installer son pilotage. Un conseiller référent porte le sujet du début à la fin ; si l'analyse montre que le problème est financier ou commercial, il fait appel au pilier concerné, sur ce point précis. Le périmètre est arrêté avec vous, écrit dans la proposition, et nous ne touchons pas à ce qui fonctionne. L'objectif est que vos équipes sachent faire vivre le processus sans nous.",
        },
        {
          type: "p",
          texte:
            "Si vous sentez que votre organisation consomme plus d'énergie qu'elle n'en produit sans savoir quel processus en est la cause, commencez par un [diagnostic d'entreprise](/diagnostic/) : quelques minutes suffisent pour situer le blocage principal.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce qu'un processus ?",
      r: [
        "Un processus est un ensemble d'activités enchaînées qui transforment une entrée, comme une demande ou une matière, en un résultat attendu par un client interne ou externe. Il a un début et une fin identifiables, traverse souvent plusieurs services et peut être mesuré par son délai, sa qualité et son coût. L'ISO recommande de gérer les activités comme des processus corrélés formant un système cohérent.",
      ],
    },
    {
      q: "Quelle est la différence entre un processus métier et une procédure ?",
      r: [
        "Le processus métier décrit le quoi et le qui, de bout en bout : les grandes étapes par lesquelles une commande devient une livraison encaissée, et les acteurs de chaque étape. La procédure décrit le comment d'une étape précise : les règles, validations et documents à respecter. Un processus s'appuie sur plusieurs procédures. Commencer par les procédures sans avoir décrit le processus laisse les transmissions entre services dans le flou.",
      ],
    },
    {
      q: "Process métier ou processus métier : quel terme employer ?",
      r: [
        "Les deux désignent la même chose. « Process » est un anglicisme très répandu dans l'industrie et les entreprises à culture anglo-saxonne ; « processus » est le terme français, utilisé dans les normes ISO traduites. Ce qui compte n'est pas le mot, mais que tout le monde dans l'entreprise parle de la même chose : un enchaînement d'activités de bout en bout, avec un client, une entrée, une sortie et un pilote.",
      ],
    },
    {
      q: "Combien de processus métier une PME a-t-elle ?",
      r: [
        "En général une poignée de processus de réalisation, comme la vente, la conception, la production, la livraison et le service après-vente, entourés de processus support et de pilotage. Si vous en listez quinze, vous avez probablement découpé un même processus en morceaux, ou confondu processus et procédures. Mieux vaut bien piloter quatre processus que documenter vingt activités.",
      ],
    },
    {
      q: "Faut-il un logiciel pour gérer ses processus métier ?",
      r: [
        "Non pour commencer. Un mur, des post-it et une commande réelle suivie sur le terrain suffisent pour comprendre où un processus casse. Un logiciel de gestion ou un ERP devient utile une fois le processus clarifié, pour supprimer les ressaisies. L'installer avant revient à automatiser la confusion : les équipes contournent l'outil avec des fichiers parallèles.",
      ],
    },
  ],

  sources: [
    {
      titre: "Principes de management de la qualité",
      editeur: "ISO",
      url: "https://www.iso.org/iso/fr/pub100080.pdf",
    },
    {
      titre: "Baromètre France Num — Résultats de l'enquête 2025",
      editeur: "Direction générale des Entreprises, France Num",
      url: "https://www.francenum.gouv.fr/files/2025-09/Barom%C3%A8tre%20France%20Num%202025%20-%20Rapport.pdf",
    },
    {
      titre: "Introduction à la cartographie des processus métiers avec BPMN - CARTOPRO'S",
      editeur: "France Num",
      url: "https://www.francenum.gouv.fr/formations/introduction-la-cartographie-des-processus-metiers-avec-bpmn-cartopros",
    },
  ],

  auteur: "patrick-calvet",
  datePublication: "2027-06-07",
  accent: "production",
  pilier: { href: "/transformation-entreprise/", ancre: "conseil en organisation" },

  valide: false,
};
