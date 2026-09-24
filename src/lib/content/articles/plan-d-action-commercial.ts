import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 6, stratégie commerciale (master § 3). Pilier du silo à
 * créer : en attendant, l'article se rattache à la home.
 * Requête : « plan d'action commercial exemple » (320/mois, KD 22, SE Ranking
 * 24/09/2026). Secondaires : « plan d'action commerciale » (320), « planification
 * commerciale » (210).
 * Signé par Nicolas Vimini : seuls les faits de sa bio (home.ts) sont utilisés.
 *
 * Anti-doublon : « politique commerciale » (12/2026) traite les RÈGLES de vente
 * (prix, remises, conditions). Celui-ci traite la mise en ACTIONS datées, chiffrées
 * et suivies, et renvoie vers lui.
 *
 * POINTS SENSIBLES :
 * - L'exemple chiffré (PME de 40 salariés) est explicitement fictif et présenté
 *   comme tel : ce n'est pas un cas client. À faire confirmer par l'auteur.
 * - Règles de prospection : CNIL (B to B) et article L223-1 du code de la
 *   consommation dans sa version du 11/08/2026 (démarchage téléphonique des
 *   consommateurs), lus le 24/09/2026. Formulation prudente, pas de conseil
 *   juridique.
 *
 * Liens vers d'autres articles : uniquement des articles publiés avant le
 * 15/02/2027 (politique-commerciale, taux-de-marge, directeur-commercial-externalise,
 * force-de-vente-externalisee).
 */
export const article: Article = {
  slug: "plan-d-action-commercial",

  motCle: "plan d'action commercial exemple (320/mois, KD 22) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "plan d'action commerciale (320/mois)",
    "planification commerciale (210/mois)",
  ],

  // 42 / 42
  metaTitle: "Plan d'action commercial : exemple complet",
  // 144 / 150
  metaDescription:
    "Plan d'action commercial : un exemple chiffré de PME, les rubriques à remplir, la planification trimestrielle et les indicateurs pour le suivre.",

  h1: "Plan d'action commercial : un exemple complet et la méthode pour construire le vôtre",

  chapo:
    "Un plan d'action commercial transforme un objectif de chiffre d'affaires en une liste d'actions datées, chiffrées, confiées à une personne et suivies chaque mois. L'exemple de plan d'action commercial présenté plus bas tient sur une page : trois objectifs, une dizaine d'actions, un responsable et un indicateur par ligne. C'est le format qui fonctionne dans une PME de 10 à 250 salariés. Voici ce qu'il doit contenir, un exemple complet, la manière de le planifier trimestre par trimestre et les raisons pour lesquelles tant de plans finissent dans un tiroir.",

  essentiel: {
    reponse:
      "Un plan d'action commercial est le document opérationnel qui décline la stratégie commerciale en actions concrètes : pour chaque objectif, il précise la cible, l'action, le responsable, l'échéance, le budget et l'indicateur de résultat. Bpifrance Création le résume en quatre temps : définir les objectifs, lister les actions, les caler dans un calendrier et mettre en place des outils de contrôle. Dans une PME, un plan utile tient sur une page, couvre douze mois découpés en trimestres et se revoit une fois par mois avec l'équipe commerciale.",
    points: [
      "Un plan d'action commercial répond à six questions par ligne : quoi, pour qui, qui, quand, combien, comment on mesure",
      "Trois à cinq objectifs chiffrés suffisent ; au-delà, plus personne ne sait ce qui compte",
      "La planification commerciale se fait par trimestre, avec une revue mensuelle courte",
      "La prospection respecte les règles de la CNIL et, envers les particuliers, le consentement téléphonique exigé depuis le 11 août 2026",
      "Un plan échoue rarement sur le contenu : il échoue faute de responsable nommé et de revue régulière",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Plan d'action commercial : de quoi parle-t-on ?",
      blocs: [
        {
          type: "p",
          texte:
            "Beaucoup de dirigeants de PME ont un objectif commercial ; peu ont un plan. L'objectif dit « + 15 % de chiffre d'affaires » ; le plan dit qui appelle quels clients, à partir de quand, et combien de rendez-vous on attend en mars. **Un objectif sans plan est un vœu ; un plan sans objectif est une agitation.**",
        },
        { type: "h3", texte: "Stratégie, politique, plan : trois étages" },
        {
          type: "p",
          texte:
            "La stratégie commerciale fixe le cap à plusieurs années : quels marchés, quelle position, quelle offre. La politique commerciale écrit les règles qui permettent de le tenir, notamment sur les prix, les remises et les conditions de vente ; nous l'avons détaillée dans notre article sur la [politique commerciale d'une PME](/infos-utiles/politique-commerciale/). Le plan d'action commercial est l'étage du dessous : il traduit tout cela en tâches datées pour les douze prochains mois.",
        },
        { type: "h3", texte: "La définition retenue par Bpifrance Création" },
        {
          type: "p",
          texte:
            "La fiche [« Vendre : le plan d'actions commerciales »](https://bpifrance-creation.fr/encyclopedie/developper-lactivite-son-entreprise/vendre-negocier/vendre-plan-dactions-commerciales) de Bpifrance Création le présente comme la feuille de route qui formalise la stratégie. Elle exige deux qualités : un plan structuré, avec pour chaque action une cible, un objectif, des moyens et un délai, et un plan réaliste.",
        },
        {
          type: "p",
          texte:
            "C'est ce travail de traduction que nous menons au sein de notre [cabinet de conseil à Toulouse](/) avec les PME et ETI d'Occitanie : non pas écrire le plan à votre place, mais le construire avec ceux qui l'exécuteront, pour qu'il soit encore utilisé en juin.",
        },
      ],
    },

    {
      label: "Les rubriques",
      titre: "Ce que doit contenir un plan d'action commerciale",
      blocs: [
        {
          type: "p",
          texte:
            "Qu'on écrive « plan d'action commercial » ou « plan d'action commerciale », le contenu est le même : un tableau dont chaque ligne est une action et chaque colonne une question à trancher avant de lancer quoi que ce soit.",
        },
        {
          type: "tableau",
          entetes: ["Rubrique", "La question à laquelle elle répond"],
          lignes: [
            ["Objectif", "Quel résultat chiffré cette action sert-elle ? (chiffre d'affaires, nombre de clients, marge, part d'un segment)"],
            ["Cible", "Quels clients ou prospects précisément : secteur, taille, zone, clients dormants, comptes à développer"],
            ["Action", "Ce qui sera fait concrètement : campagne d'appels, salon, relance des devis, offre de lancement, visite terrain"],
            ["Responsable", "Une seule personne nommée, qui rend compte de l'avancement ; pas « l'équipe commerciale »"],
            ["Échéance", "Une date de début, une date de fin, et les jalons intermédiaires"],
            ["Budget", "Le coût direct (salon, outil, supports) et le temps passé, souvent oublié"],
            ["Indicateur", "Le chiffre qui dira si l'action a marché : rendez-vous obtenus, devis émis, taux de transformation, marge"],
          ],
        },
        { type: "h3", texte: "Des objectifs peu nombreux et chiffrés" },
        {
          type: "p",
          texte:
            "Trois à cinq objectifs suffisent pour une PME, chacun chiffré, daté et rattaché à un indicateur que vous savez mesurer. « Développer la notoriété » ne permet pas de décider en septembre s'il faut continuer. Bpifrance Création le rappelle dans sa fiche [« Stratégie : planifier vos actions »](https://bpifrance-creation.fr/encyclopedie/letude-marche/determiner-sa-strategie/strategie-planifier-vos-actions) : chaque action doit pouvoir être mesurée, évaluée et comparée à son coût.",
        },
        { type: "h3", texte: "Le budget en temps, pas seulement en euros" },
        {
          type: "p",
          texte:
            "Dans une PME, la ressource la plus rare est le temps des deux ou trois personnes qui vendent. Si ce temps n'est pas retiré d'ailleurs, l'action ne se fera pas, ou se fera au détriment des clients existants.",
        },
      ],
    },

    {
      label: "L'exemple",
      titre: "Plan d'action commercial : exemple complet pour une PME industrielle",
      exergue:
        "Un bon plan d'action commercial tient sur une page et se lit en deux minutes en réunion.",
      blocs: [
        {
          type: "p",
          texte:
            "L'exemple qui suit est fictif. Il décrit une PME de 40 salariés qui fabrique des pièces mécaniques pour l'industrie, réalise l'essentiel de son chiffre d'affaires avec une vingtaine de clients et veut réduire sa dépendance au premier d'entre eux. Les chiffres sont illustratifs : ils montrent la forme, pas une norme à reproduire.",
        },
        { type: "h3", texte: "Les trois objectifs de l'année" },
        {
          type: "liste",
          items: [
            "**Objectif 1** : ramener la part du premier client de 35 % à moins de 30 % du chiffre d'affaires, en gagnant de nouveaux comptes",
            "**Objectif 2** : réactiver les clients qui n'ont rien commandé depuis dix-huit mois",
            "**Objectif 3** : relever la marge moyenne des devis signés, en cessant d'accorder des remises non prévues",
          ],
        },
        { type: "h3", texte: "Le tableau d'actions" },
        {
          type: "tableau",
          entetes: ["Action (objectif, responsable, échéance)", "Indicateur et cible"],
          lignes: [
            ["Constituer une liste de 150 industriels de la région dans deux secteurs cibles (obj. 1, assistante commerciale, fin janvier)", "Liste qualifiée : 150 contacts avec un interlocuteur nommé"],
            ["Campagne d'appels et de courriels vers cette liste, 15 contacts par semaine (obj. 1, commercial sédentaire, février à mai)", "25 rendez-vous obtenus sur la période"],
            ["Visites et chiffrages chez les prospects rencontrés (obj. 1, responsable commercial, mars à juin)", "15 devis émis, 4 nouveaux comptes signés avant septembre"],
            ["Présence sur un salon professionnel régional avec une offre d'échantillonnage (obj. 1, dirigeant et responsable commercial, octobre)", "40 contacts qualifiés, 8 rendez-vous dans le mois"],
            ["Appel de chaque client inactif avec une offre de revue technique gratuite (obj. 2, commercial sédentaire, février et mars)", "30 clients appelés, 8 nouvelles commandes"],
            ["Relance systématique des devis à J+8 et J+21 (obj. 1 et 2, assistante commerciale, toute l'année)", "Taux de transformation des devis suivi chaque mois"],
            ["Grille de remises écrite, validée par le dirigeant, au-delà de laquelle toute remise doit être justifiée (obj. 3, dirigeant, fin janvier)", "Remise moyenne par devis suivie chaque mois"],
            ["Revue mensuelle du plan, 45 minutes (tous objectifs, responsable commercial, chaque premier lundi)", "12 revues tenues sur l'année"],
          ],
        },
        { type: "h3", texte: "Ce que cet exemple montre" },
        {
          type: "p",
          texte:
            "Chaque ligne a un nom en face et un indicateur lisible sans calcul. L'objectif de marge porte sur la remise, la variable que l'équipe contrôle réellement ; pour le relier à la rentabilité, voyez notre article sur le [calcul du taux de marge](/infos-utiles/taux-de-marge/). Enfin, la revue mensuelle figure dans le plan : c'est une action, avec un responsable, pas une bonne intention.",
        },
      ],
    },

    {
      label: "Le calendrier",
      titre: "Planification commerciale : découper l'année en trimestres",
      blocs: [
        {
          type: "p",
          texte:
            "La planification commerciale consiste à répartir les actions dans le temps en fonction de la saisonnalité de votre marché, de la charge de l'équipe et des délais de décision de vos clients. Bpifrance Création distingue le court terme, jusqu'à six mois, le moyen terme, de six à vingt-quatre mois, et le long terme au-delà. Pour un plan d'action commercial, l'horizon utile est de douze mois, piloté par trimestre.",
        },
        { type: "h3", texte: "Tenir compte du cycle de vente" },
        {
          type: "p",
          texte:
            "En vente aux entreprises, entre le premier contact et la première commande, il s'écoule souvent plusieurs mois. Une campagne lancée en septembre produira son chiffre d'affaires l'année suivante : jugez-la d'abord sur les indicateurs d'étape, rendez-vous, devis, essais, et évitez de la placer sur les mois où l'équipe est absorbée par la production ou les congés.",
        },
        { type: "h3", texte: "Le rythme de pilotage" },
        {
          type: "liste",
          items: [
            "**Chaque semaine** : un point de quinze minutes sur les rendez-vous et devis en cours, sans refaire le plan",
            "**Chaque mois** : la revue du plan, ligne par ligne, avec une décision par action en retard (relancer, modifier, abandonner)",
            "**Chaque trimestre** : l'ajustement des objectifs du trimestre suivant à la lumière des résultats",
          ],
        },
      ],
    },

    {
      label: "Les actions",
      titre: "Choisir les actions de votre plan commercial",
      blocs: [
        {
          type: "p",
          texte:
            "Bpifrance Création classe les actions commerciales en trois familles : la vente traditionnelle, menée par les équipes sur le terrain, le marketing direct, par messages personnalisés, et la communication institutionnelle, qui construit la notoriété. Sa fiche donne un principe simple : « Misez 20 % de votre énergie sur des actions qui produiront 80 % de retours positifs. »",
        },
        { type: "h3", texte: "Commencer par les clients existants" },
        {
          type: "p",
          texte:
            "Les actions les plus rentables sont souvent les moins spectaculaires : relancer les devis, rappeler les clients inactifs, proposer un produit complémentaire. Elles coûtent peu, la relation existe déjà et le délai de décision est court.",
        },
        { type: "h3", texte: "Prospecter dans les règles" },
        {
          type: "p",
          texte:
            "La prospection de nouveaux clients reste indispensable, mais elle est encadrée. Pour les courriels vers des professionnels, la CNIL indique dans sa fiche sur [la prospection commerciale par courrier électronique, SMS-MMS et automate d'appel](https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel) que la prospection peut se fonder sur l'intérêt légitime lorsque l'objet de la sollicitation est en rapport avec la profession de la personne démarchée, à condition qu'elle ait été informée et puisse s'y opposer.",
        },
        {
          type: "p",
          texte:
            "Si vous vendez aussi à des particuliers, la règle a changé. Depuis le 11 août 2026, l'[article L223-1 du code de la consommation](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032221441/2026-08-11) interdit de démarcher par téléphone un consommateur qui n'a pas exprimé préalablement son consentement. La DEETS de La Réunion, dans sa note [« Démarchage téléphonique : à partir du 11 août 2026, le consentement devient la règle »](https://reunion.deets.gouv.fr/Demarchage-telephonique-a-partir-du-11-aout-2026-le-consentement-devient-la), rappelle que les manquements exposent une personne morale à une amende pouvant atteindre 375 000 euros. En cas de doute sur un fichier ou un canal, faites valider votre pratique par un juriste avant de lancer la campagne.",
        },
        { type: "h3", texte: "Externaliser une partie des actions" },
        {
          type: "p",
          texte:
            "Quand l'équipe n'a pas le temps de prospecter, une partie des actions peut être confiée à l'extérieur : prestataire de prospection, agent commercial, commerciaux à temps partagé. Le plan d'action reste alors le document qui dit ce qu'on attend d'eux et comment on le mesure. Les options et leurs limites sont détaillées dans notre article sur la [force de vente externalisée](/infos-utiles/force-de-vente-externalisee/).",
        },
      ],
    },

    {
      label: "Le suivi",
      titre: "Suivre un plan d'action commercial avec quelques indicateurs",
      blocs: [
        {
          type: "p",
          texte:
            "Bpifrance Création conclut sa fiche sur ce point : chacune des actions décidées doit être intégrée à un tableau de bord commercial. Sans suivi, le plan devient un document d'intention ; avec trop d'indicateurs, un reporting que personne ne lit.",
        },
        {
          type: "tableau",
          entetes: ["Indicateur", "Ce qu'il vous dit"],
          lignes: [
            ["Nombre de rendez-vous obtenus", "Si la prospection produit des occasions, bien avant les commandes"],
            ["Nombre et montant des devis émis", "Si les rendez-vous se transforment en demandes réelles"],
            ["Taux de transformation des devis", "Si l'offre et le prix convainquent, et où se situe la perte"],
            ["Remise moyenne accordée", "Si la marge se négocie à la baisse au fil des affaires"],
            ["Chiffre d'affaires par segment ou par client", "Si la dépendance aux gros comptes diminue comme prévu"],
            ["Taux d'avancement des actions", "Si le plan a été exécuté : une action sans résultat n'a parfois tout simplement pas été faite"],
          ],
        },
        { type: "h3", texte: "Décider en revue, pas constater" },
        {
          type: "p",
          texte:
            "La revue mensuelle sert à décider. Pour chaque action en retard ou décevante, trois options seulement : on la relance avec des moyens réalistes, on la modifie, ou on l'abandonne et on réaffecte le temps. **Une revue qui se contente de constater les retards enseigne à l'équipe que le plan n'engage personne.**",
        },
      ],
    },

    {
      label: "Les pièges",
      titre: "Pourquoi un plan d'action commercial finit dans un tiroir",
      blocs: [
        {
          type: "p",
          texte:
            "La plupart des plans d'action commerciale ne manquent pas d'idées. Ils meurent pour des raisons d'organisation, presque toujours les mêmes.",
        },
        {
          type: "liste",
          items: [
            "**Écrit par le dirigeant seul** : l'équipe découvre des objectifs qu'elle n'a pas discutés et n'en porte aucun",
            "**Trop d'actions** : trente lignes pour trois commerciaux, c'est la garantie qu'aucune ne sera menée jusqu'au bout",
            "**Pas de responsable nommé** : « l'équipe » ne rend jamais compte, une personne si",
            "**Pas de temps dégagé** : les actions s'ajoutent au quotidien sans rien retirer",
            "**Pas de revue** : le plan est présenté en janvier et ressorti en décembre pour constater l'écart",
          ],
        },
        { type: "h3", texte: "Le vrai goulot : la disponibilité du dirigeant" },
        {
          type: "p",
          texte:
            "Quand toutes les décisions commerciales remontent au dirigeant, remises, priorités, relances importantes, le plan dépend de sa disponibilité, déjà saturée. Le remède n'est pas un meilleur plan : ce sont des règles écrites qui permettent à l'équipe d'agir sans attendre un feu vert, et un responsable qui pilote le plan au quotidien.",
        },
      ],
    },

    {
      label: "Passer à l'action",
      titre: "Qui doit porter le plan d'action commercial dans une PME ?",
      blocs: [
        {
          type: "p",
          texte:
            "Le plan appartient à la personne qui dirige l'activité commerciale. Dans une PME de trente ou cinquante salariés, c'est souvent le dirigeant lui-même, qui le pilote entre deux urgences de production ou de trésorerie.",
        },
        { type: "h3", texte: "Trois options réalistes" },
        {
          type: "liste",
          items: [
            "**Un responsable interne** : à condition de lui donner le temps, les règles de décision et l'accès aux chiffres",
            "**Un directeur commercial recruté** : quand l'activité commerciale occupe une personne à plein temps",
            "**Un directeur commercial externalisé** : pour construire le plan, installer le pilotage et former un relais interne, sur une durée définie",
          ],
        },
        {
          type: "p",
          texte:
            "Nicolas Vimini, directeur commercial externalisé avec vingt ans d'expérience en développement commercial, porte la stratégie commerciale au cabinet. Il intervient pour clarifier la stratégie, structurer l'organisation commerciale et piloter l'activité avec des indicateurs adaptés. Le périmètre est arrêté avec vous et ne s'élargit pas sans votre accord ; si le sujet révèle un problème de marge ou d'organisation, une autre expertise est appelée sur ce point précis. Le rôle et ses différences avec un agent ou un consultant sont détaillés dans notre article sur le [directeur commercial externalisé](/infos-utiles/directeur-commercial-externalise/).",
        },
        {
          type: "p",
          texte:
            "Si votre plan d'action commercial existe mais ne produit pas ce qu'il promet, le problème n'est peut-être pas commercial. Notre [diagnostic d'entreprise](/diagnostic/) vous aide à situer le blocage en quelques minutes, avant tout échange.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce qu'un plan d'action commercial ?",
      r: [
        "C'est le document qui décline la stratégie commerciale en actions concrètes sur une période donnée, en général douze mois. Pour chaque objectif chiffré, il précise la cible, l'action, la personne responsable, l'échéance, le budget et l'indicateur qui dira si l'action a fonctionné. Dans une PME, il tient idéalement sur une page et se revoit chaque mois avec l'équipe commerciale.",
      ],
    },
    {
      q: "Quelle différence entre plan d'action commercial et politique commerciale ?",
      r: [
        "La politique commerciale fixe les règles durables : à qui l'entreprise vend, à quel prix, avec quelles remises et quelles conditions. Le plan d'action commercial organise les actions de l'année pour atteindre les objectifs : prospection, relances, salons, offres. La politique dit comment on vend ; le plan dit ce qu'on fait, qui le fait et quand.",
      ],
    },
    {
      q: "Combien d'actions mettre dans un plan d'action commercial ?",
      r: [
        "La capacité de l'équipe fixe la limite. Pour une PME avec deux ou trois personnes qui vendent, trois à cinq objectifs et une dizaine d'actions constituent un maximum raisonnable. Au-delà, les actions se disputent le même temps et aucune n'est menée jusqu'au bout. Mieux vaut huit actions tenues que trente commencées.",
      ],
    },
    {
      q: "Comment faire la planification commerciale sur l'année ?",
      r: [
        "Partez des objectifs annuels, découpez-les en trimestres, puis placez chaque action en tenant compte de la saisonnalité de votre marché, de la charge de l'équipe et de la durée de votre cycle de vente. Une action de prospection produit souvent ses commandes plusieurs mois plus tard. Prévoyez un point hebdomadaire court, une revue mensuelle du plan et un ajustement à chaque fin de trimestre.",
      ],
    },
    {
      q: "Peut-on prospecter des entreprises par courriel sans leur accord ?",
      r: [
        "Selon la CNIL, la prospection vers des professionnels peut reposer sur l'intérêt légitime lorsque le message est en rapport avec la profession de la personne sollicitée, à condition qu'elle ait été informée et puisse s'y opposer simplement. Vérifiez aussi que vos messages s'adressent bien à la fonction concernée, pas à tout l'annuaire d'une entreprise. Les règles sont plus strictes envers les particuliers, notamment pour le téléphone depuis le 11 août 2026. En cas de doute, consultez un juriste.",
      ],
    },
  ],

  sources: [
    {
      titre: "Vendre : le plan d'actions commerciales",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/developper-lactivite-son-entreprise/vendre-negocier/vendre-plan-dactions-commerciales",
    },
    {
      titre: "Stratégie : planifier vos actions",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/letude-marche/determiner-sa-strategie/strategie-planifier-vos-actions",
    },
    {
      titre: "La prospection commerciale par courrier électronique, SMS-MMS et automate d'appel",
      editeur: "CNIL",
      url: "https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel",
    },
    {
      titre: "Chapitre III : Consentement au démarchage téléphonique (Articles L223-1 à L223-7) - Code de la consommation",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032221441/2026-08-11",
    },
    {
      titre: "Démarchage téléphonique : à partir du 11 août 2026, le consentement devient la règle",
      editeur: "DEETS La Réunion (ministère du Travail)",
      url: "https://reunion.deets.gouv.fr/Demarchage-telephonique-a-partir-du-11-aout-2026-le-consentement-devient-la",
    },
  ],

  auteur: "nicolas-vimini",
  datePublication: "2027-02-15",
  accent: "commercial",
  pilier: { href: "/", ancre: "cabinet de conseil à Toulouse" },

  valide: false,
};
