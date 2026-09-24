import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 1, accompagnement du dirigeant. Signé Muriel Saffroy.
 * Requête : « leadership en management » (480/mois, KD 19). Secondaires :
 * « manager leadership » (480), « leadership managérial » (480).
 *
 * L'intention « coaching dirigeant » appartient au pilier /transformation-dirigeant/ :
 * cet article traite le leadership exercé par les managers et le rôle du dirigeant
 * dans son développement, et renvoie vers lui.
 *
 * Points sensibles : le stress des managers est évoqué à partir des chiffres de
 * l'Apec, sans conseil médical ; renvoi vers le médecin du travail. La grille des
 * styles (chapitre 3) est une lecture pratique du cabinet inspirée de Goleman
 * (HBR, 2000), présentée comme telle, pas comme sa typologie exacte.
 * Liens vers articles : uniquement des slugs publiés avant le 21/06/2027
 * (role-du-manager, delegation-de-pouvoir, coaching-en-management).
 */
export const article: Article = {
  slug: "leadership-manager",

  motCle: "leadership en management (480/mois, KD 19) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "manager leadership (480/mois)",
    "leadership managérial (480/mois)",
    "styles de leadership",
  ],

  // 40 / 42
  metaTitle: "Leadership en management : mode d'emploi",
  // 149 / 150
  metaDescription:
    "Leadership en management : entraîner plutôt que contrôler, adapter son style à la situation, et le rôle du dirigeant pour faire grandir ses managers.",

  h1: "Leadership en management : ce qui fait qu'une équipe suit son manager",

  chapo:
    "Le leadership en management, c'est la capacité d'un manager à obtenir l'engagement de son équipe, et pas seulement son obéissance. Le management organise le travail : objectifs, moyens, délais, contrôle. Le leadership donne une raison de le faire bien : un cap compris, une confiance réelle, des décisions assumées. Un manager efficace a besoin des deux, dosés selon la situation et la maturité de l'équipe. Ce n'est pas un don : c'est un ensemble de pratiques qui s'apprennent. Et dans une PME, il dépend autant du dirigeant que du manager lui-même, parce que c'est le dirigeant qui donne, ou non, le droit de décider.",

  essentiel: {
    reponse:
      "Le leadership en management désigne la part du rôle de manager qui consiste à entraîner une équipe plutôt qu'à la contrôler : donner du sens, faire confiance, décider et soutenir. Il complète le management, qui organise le travail, fixe les objectifs et vérifie les résultats. Les travaux de Daniel Goleman, publiés dans la Harvard Business Review en 2000, montrent que les dirigeants les plus efficaces utilisent plusieurs styles selon les situations plutôt qu'un seul. En PME, le leadership managérial se développe par la pratique : clarification des décisions, rituels d'équipe, retour sur les situations réelles, et un dirigeant qui délègue vraiment.",
    points: [
      "Management : organiser le travail ; leadership : donner envie de le faire bien",
      "Pas d'opposition entre manager et leader : un bon manager exerce les deux",
      "Plusieurs styles de leadership, à choisir selon la situation et l'équipe",
      "Le leadership se construit par des pratiques, pas par une personnalité",
      "Le dirigeant conditionne le leadership de ses managers : sans droit de décider, pas de leadership",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Leadership en management : de quoi parle-t-on ?",
      blocs: [
        {
          type: "p",
          texte:
            "Le mot leadership a été tellement employé qu'il ne veut plus rien dire. Revenons au concret. Un manager a une équipe, des objectifs et des moyens. Le management, c'est l'ensemble de ce qu'il fait pour que le travail soit fait : répartir, planifier, contrôler, corriger. Le leadership, c'est ce qui fait que l'équipe s'engage au-delà du minimum : elle comprend pourquoi, elle ose proposer, elle ne cache pas les problèmes.",
        },
        { type: "h3", texte: "Une influence, pas un statut" },
        {
          type: "p",
          texte:
            "Le statut de manager donne une autorité : celle de décider, d'affecter, d'évaluer. Le leadership est une influence : les autres suivent parce qu'ils le veulent, pas parce qu'ils y sont tenus. **On peut être nommé manager ; on ne peut pas être nommé leader.** C'est l'équipe qui en décide, au fil des situations où le manager a tenu parole, pris ses responsabilités ou défendu ses collaborateurs.",
        },
        { type: "h3", texte: "Le leadership managérial se mesure au quotidien" },
        {
          type: "p",
          texte:
            "Il ne se voit pas dans les grands discours, mais dans des moments ordinaires : la réunion où un problème est posé sans crainte, la décision prise sans attendre la validation du dirigeant, l'erreur reconnue et corrigée au lieu d'être cachée. Ce sont ces moments que nous travaillons dans un [coaching dirigeant](/transformation-dirigeant/) ou avec une équipe de direction : non pas des principes, mais la façon dont les décisions circulent réellement dans l'entreprise.",
        },
      ],
    },

    {
      label: "Manager ou leader",
      titre: "Manager et leadership : pourquoi il ne faut pas choisir",
      blocs: [
        {
          type: "p",
          texte:
            "Beaucoup de contenus opposent le manager, gestionnaire rigide, au leader, visionnaire inspirant. Cette opposition fait de jolies infographies et de mauvais managers. Une équipe a besoin d'un cadre clair et d'une raison d'y adhérer. Un manager qui n'est que gestionnaire obtient la conformité ; un manager qui n'est qu'inspirant obtient de l'enthousiasme sans résultat.",
        },
        {
          type: "tableau",
          entetes: ["Le manager qui contrôle seulement", "Le manager qui exerce aussi le leadership"],
          lignes: [
            ["Fixe des objectifs chiffrés", "Fixe des objectifs et explique pourquoi ils comptent"],
            ["Vérifie que les tâches sont faites", "Vérifie les résultats et laisse l'équipe choisir le chemin"],
            ["Remonte les décisions au dirigeant par prudence", "Décide dans son périmètre et assume"],
            ["Apprend les problèmes en dernier", "Apprend les problèmes tôt, parce qu'on ose les lui dire"],
            ["Sanctionne l'erreur", "Analyse l'erreur et distingue la faute de la prise de risque raisonnable"],
            ["Parle surtout d'activité", "Parle du travail réel : ce qui bloque, ce qui aide, ce qui manque"],
          ],
        },
        { type: "h3", texte: "Le rôle du manager inclut les deux" },
        {
          type: "p",
          texte:
            "Organiser et entraîner ne sont pas deux métiers. Ce sont deux faces du même rôle, que nous détaillons dans notre article sur le [rôle du manager](/infos-utiles/role-du-manager/). Un manager qui néglige l'organisation perd la confiance de son équipe dès que les plannings déraillent. Un manager qui néglige l'engagement voit partir ses meilleurs éléments.",
        },
      ],
    },

    {
      label: "Les styles",
      titre: "Les styles de leadership : adapter sa posture à la situation",
      blocs: [
        {
          type: "p",
          texte:
            "Il n'existe pas de bon style de leadership dans l'absolu. Dans un article devenu classique de la Harvard Business Review, [« Leadership That Gets Results »](https://hbr.org/2000/03/leadership-that-gets-results), Daniel Goleman soutient que les dirigeants les plus efficaces utilisent plusieurs approches, chacune au bon moment et dans la bonne mesure, et que cette souplesse s'apprend. Pour un manager de PME, cela se traduit par une question simple : de quoi cette situation et cette personne ont-elles besoin maintenant ?",
        },
        {
          type: "p",
          texte:
            "Voici la grille pratique que nous utilisons avec les managers. Elle ne reprend pas mot pour mot une typologie académique ; elle en tire une règle d'usage.",
        },
        {
          type: "tableau",
          entetes: ["Situation", "Posture de leadership adaptée"],
          lignes: [
            ["Crise, urgence, sécurité en jeu", "Directive : décider vite, expliquer ensuite"],
            ["Nouveau collaborateur, compétence en construction", "Accompagnante : montrer, faire faire, corriger souvent"],
            ["Équipe compétente face à un problème complexe", "Participative : poser le problème, construire la décision ensemble"],
            ["Collaborateur autonome et fiable", "Délégative : fixer le résultat et le périmètre, puis s'effacer"],
            ["Changement de cap, perte de sens", "Visionnaire : expliquer où l'on va et pourquoi, sans tout dicter"],
          ],
        },
        { type: "h3", texte: "Le piège du style unique" },
        {
          type: "p",
          texte:
            "Chaque manager a un style naturel, souvent celui qui lui a réussi comme expert. Le technicien promu manager continue de décider seul parce qu'il sait faire ; le manager très consensuel consulte même quand l'urgence exige de trancher. Le leadership managérial commence le jour où l'on remarque son style par défaut et où l'on choisit, parfois, d'en sortir.",
        },
        { type: "h3", texte: "Adapter n'est pas changer d'avis" },
        {
          type: "p",
          texte:
            "Varier la posture ne veut pas dire varier les règles. Les objectifs, les valeurs et les limites restent stables ; c'est la manière d'accompagner qui change. Une équipe accepte très bien un manager directif en crise et participatif le reste du temps, à condition qu'il soit prévisible sur l'essentiel.",
        },
      ],
    },

    {
      label: "Les effets",
      titre: "Ce que le leadership managérial change pour une équipe",
      blocs: [
        {
          type: "p",
          texte:
            "Le leadership n'est pas une affaire de climat agréable. Il se traduit en capacité d'une équipe à régler ses problèmes sans tout faire remonter. Les données publiques en donnent une idée. Selon l'INSEE, qui exploite l'enquête Conditions de travail 2019, [68 % des salariés du privé déclarent être « aidés par leurs supérieurs hiérarchiques pour mener à bien leurs tâches »](https://www.insee.fr/fr/statistiques/5391998?sommaire=5392045). Autrement dit, près d'un sur trois ne le déclare pas.",
        },
        { type: "h3", texte: "Le soutien, premier geste de leadership" },
        {
          type: "p",
          texte:
            "Soutenir ne veut pas dire faire à la place. C'est être disponible quand le travail se complique, débloquer une ressource, arbitrer entre deux priorités contradictoires. L'INRS range d'ailleurs le soutien parmi les [conseils qu'il adresse aux managers](https://www.inrs.fr/publications/essentiels/risques-psychosociaux-managers.html) pour prévenir les risques psychosociaux, aux côtés de l'autonomie, de la reconnaissance, du sens donné au travail et de l'évaluation de la charge.",
        },
        { type: "h3", texte: "L'autonomie, ce qui libère le manager lui-même" },
        {
          type: "p",
          texte:
            "Une équipe autonome règle ses incidents sans attendre. La même page de l'INSEE relève que seuls 17 % des cadres ne peuvent pas régler eux-mêmes les incidents, quand cette proportion est bien plus élevée chez les ouvriers. Ce qui vaut pour les catégories vaut pour les équipes : plus le manager distribue le droit d'agir, moins il est l'unique point de passage, et plus il a de temps pour ce qui relève réellement de lui.",
        },
        { type: "h3", texte: "La reconnaissance, souvent oubliée" },
        {
          type: "p",
          texte:
            "Reconnaître le travail ne coûte rien et se fait rarement. Il ne s'agit pas de féliciter en général, mais de nommer précisément ce qui a été bien fait et pourquoi c'était utile. C'est aussi ce qui rend crédible la critique le jour où elle est nécessaire.",
        },
      ],
    },

    {
      label: "En PME",
      titre: "Pourquoi le leadership des managers s'use en PME",
      blocs: [
        {
          type: "p",
          texte:
            "Dans une PME de 10 à 250 salariés, les managers sont souvent d'anciens experts promus parce qu'ils étaient les meilleurs techniquement. Personne ne leur a appris à manager, et le dirigeant, pris par le reste, leur délègue des tâches plus que des décisions. Le résultat est connu : des managers coincés entre une équipe qui attend des réponses et un dirigeant qui garde la main.",
        },
        { type: "h3", texte: "Un rôle devenu moins attractif" },
        {
          type: "p",
          texte:
            "L'Apec mesure ce malaise. D'après son étude « Cadres et management » publiée en janvier 2026 et [présentée sur son site](https://www.apec.fr/tendances-emploi-cadre/vie-pro-et-carriere/devenir-manager-merci,-mais-non-merci-pour-de-plus-en-plus-de-cadres.html), la part des cadres souhaitant accéder à des responsabilités hiérarchiques est passée de 42 % à 34 % entre 2022 et 2025. Chez les moins de 35 ans, elle est tombée de 63 % à 47 %. Près de six managers sur dix disent ressentir parfois un stress intense, et 24 % des cadres se disent rebutés par la charge de travail des managers.",
        },
        { type: "h3", texte: "Ce que ces chiffres disent pour vous" },
        {
          type: "p",
          texte:
            "Si le rôle de manager se résume à absorber la pression d'en haut et les demandes d'en bas, sans marge de décision, il use ceux qui l'occupent et décourage ceux qui pourraient le prendre. Le leadership managérial n'est pas seulement une qualité à développer chez vos managers : c'est une condition pour que vous puissiez encore en recruter ou en promouvoir. Si un manager montre des signes d'épuisement durable, la première porte reste le médecin du travail ou le médecin traitant, pas un programme de développement.",
        },
      ],
    },

    {
      label: "Les pratiques",
      titre: "Développer son leadership de manager : cinq pratiques concrètes",
      blocs: [
        {
          type: "p",
          texte:
            "Le leadership ne s'apprend pas dans un livre, mais il ne tombe pas du ciel non plus. Il se construit par des pratiques répétées, observables, que l'équipe finit par tenir pour acquises. Cinq d'entre elles font la plus grande différence.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Clarifier qui décide quoi.** Pour chaque sujet récurrent, écrire qui tranche, qui est consulté et qui est informé. La moitié des tensions viennent de décisions dont personne ne sait à qui elles appartiennent",
            "**Tenir un rituel court et régulier.** Un point d'équipe hebdomadaire consacré aux problèmes du travail réel, pas à la lecture d'indicateurs que tout le monde a déjà vus",
            "**Donner un retour précis et rapide.** Sur un fait, dans les jours qui suivent, en séparant la personne de l'action",
            "**Formuler le droit à l'erreur.** Dire à l'avance quelles erreurs sont acceptables dans quel périmètre, et le tenir le jour où elles arrivent",
            "**Expliquer les décisions qui viennent d'en haut.** Un manager qui transmet sans expliquer perd son crédit ; un manager qui critique la direction devant son équipe perd le sien aussi",
          ],
        },
        { type: "h3", texte: "Travailler sur des situations réelles" },
        {
          type: "p",
          texte:
            "Une formation transmet des principes identiques à tous. Le leadership progresse surtout en revenant sur ce qui s'est vraiment passé : cette réunion où personne n'a osé contredire, cette décision reprise par le dirigeant, ce conflit laissé pourrir. C'est le principe du [coaching en management](/infos-utiles/coaching-en-management/), et celui des cercles d'avancée que nous animons : des groupes de six à huit personnes, en sessions de trois heures sur trois mois, qui travaillent sur les situations apportées par les participants.",
        },
      ],
    },

    {
      label: "Le dirigeant",
      titre: "Le leadership des managers commence chez le dirigeant",
      exergue: "On ne peut pas demander du leadership à un manager à qui l'on n'a jamais donné le droit de décider.",
      blocs: [
        {
          type: "p",
          texte:
            "Un dirigeant qui veut des managers leaders doit d'abord regarder sa propre manière de faire. Dans beaucoup de PME, faire valider par le dirigeant n'est pas un manque de courage des managers : c'est la conduite la plus rationnelle, parce que toute décision prise sans lui risque d'être défaite.",
        },
        { type: "h3", texte: "Déléguer des décisions, pas des tâches" },
        {
          type: "p",
          texte:
            "Confier une tâche ne développe aucun leadership. Confier une décision, avec un périmètre clair et le droit de se tromper, oblige le manager à arbitrer, à expliquer et à assumer. C'est exactement ce que le leadership demande. Les conditions pour que cette délégation tienne, y compris sur le plan juridique, sont détaillées dans notre article sur la [délégation de pouvoir](/infos-utiles/delegation-de-pouvoir/).",
        },
        { type: "h3", texte: "Ne pas reprendre ce qui a été délégué" },
        {
          type: "p",
          texte:
            "C'est le point le plus difficile, et nous le disons franchement à chaque dirigeant. Revenir sur une décision déléguée, même une seule fois devant l'équipe, suffit à rappeler à tout le monde que le vrai décideur n'a pas changé. Mieux vaut un désaccord exprimé en tête-à-tête et une décision maintenue qu'une décision corrigée en public.",
        },
        { type: "h3", texte: "Se faire accompagner, sur un périmètre défini" },
        {
          type: "p",
          texte:
            "Ce travail se fait rarement seul, parce qu'il touche aux habitudes du dirigeant autant qu'à celles des managers. Au cabinet, il est porté par [Muriel Saffroy](/muriel-saffroy/), coach professionnelle certifiée ICF et facilitatrice en intelligence collective, qui a elle-même dirigé des sites industriels pendant vingt ans. Elle reste votre interlocutrice du début à la fin, et le périmètre de l'accompagnement est écrit dans la proposition. Si vous voulez d'abord savoir si le frein est chez vos managers, chez vous ou dans l'organisation, commencez par notre [diagnostic d'entreprise](/diagnostic/).",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle différence entre management et leadership ?",
      r: [
        "Le management organise le travail : objectifs, planning, répartition des tâches, contrôle des résultats. Le leadership obtient l'engagement de l'équipe : donner du sens, faire confiance, décider et soutenir. Le premier repose sur l'autorité du poste, le second sur l'influence que l'équipe reconnaît au manager. Un manager efficace exerce les deux : sans organisation, l'équipe s'épuise ; sans leadership, elle exécute le minimum et cache ses problèmes.",
      ],
    },
    {
      q: "Le leadership est-il inné ou peut-il s'apprendre ?",
      r: [
        "Il s'apprend. Certaines personnes ont plus de facilité à prendre la parole ou à trancher, mais le leadership managérial repose surtout sur des pratiques : clarifier les décisions, donner des retours précis, tenir des rituels, reconnaître le travail, assumer ses choix. Ces pratiques progressent par l'expérience et par le retour sur des situations réelles, avec un pair, un coach ou un groupe de managers.",
      ],
    },
    {
      q: "Quels sont les principaux styles de leadership ?",
      r: [
        "On distingue couramment des styles directif, accompagnant, participatif, délégatif et visionnaire, selon le degré de contrôle et d'implication de l'équipe. Aucun n'est bon en soi. Les travaux publiés par Daniel Goleman dans la Harvard Business Review en 2000 montrent que les dirigeants les plus efficaces en utilisent plusieurs, selon la situation. La question utile est donc : de quoi cette équipe a-t-elle besoin maintenant ?",
      ],
    },
    {
      q: "Comment développer le leadership de mes managers en PME ?",
      r: [
        "Commencez par leur donner des décisions, pas seulement des tâches, avec un périmètre écrit et un droit à l'erreur explicite. Évitez de revenir publiquement sur ce que vous avez délégué. Installez un rituel d'équipe centré sur le travail réel et prévoyez un espace où vos managers peuvent revenir sur leurs situations difficiles, en coaching individuel ou en groupe de pairs. Le progrès se voit en quelques mois.",
      ],
    },
    {
      q: "Un bon expert fait-il un bon manager ?",
      r: [
        "Pas forcément. L'expertise donne une légitimité de départ, mais le rôle change : il ne s'agit plus de bien faire soi-même, mais de faire bien faire aux autres. Beaucoup d'experts promus continuent de décider seuls ou de reprendre le travail de leur équipe. Un accompagnement dans les premiers mois, et un dirigeant qui leur délègue de vraies décisions, rendent le passage beaucoup plus sûr.",
      ],
    },
  ],

  sources: [
    {
      titre: "Leadership That Gets Results",
      editeur: "Harvard Business Review (Daniel Goleman, mars-avril 2000)",
      url: "https://hbr.org/2000/03/leadership-that-gets-results",
    },
    {
      titre: "Conditions de travail",
      editeur: "INSEE (Emploi, chômage, revenus du travail, édition 2021)",
      url: "https://www.insee.fr/fr/statistiques/5391998?sommaire=5392045",
    },
    {
      titre: "Managers : agissez pour prévenir les risques psychosociaux",
      editeur: "INRS",
      url: "https://www.inrs.fr/publications/essentiels/risques-psychosociaux-managers.html",
    },
    {
      titre: "Devenir manager ? « Merci, mais non merci » pour de plus en plus de cadres",
      editeur: "Apec",
      url: "https://www.apec.fr/tendances-emploi-cadre/vie-pro-et-carriere/devenir-manager-merci,-mais-non-merci-pour-de-plus-en-plus-de-cadres.html",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2027-06-21",
  accent: "organisation",
  pilier: { href: "/transformation-dirigeant/", ancre: "coaching dirigeant" },

  valide: false,
};
