import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 1, accompagnement du dirigeant. Signé Muriel Saffroy.
 * Requête : « dirigeant d'entreprise » (320/mois, KD 26). Secondaires :
 * « gérant d'entreprise » (260), « rôle du dirigeant ».
 *
 * Angle : ce qu'est un dirigeant au sens du droit (gérant de SARL, président de
 * SAS), ce que son statut implique, puis ce que le rôle exige réellement et ce
 * que le quotidien en fait. Les articles « prendre une décision », « délégation de
 * pouvoir » et « solitude du dirigeant » traitent chacun un morceau ; celui-ci
 * donne la vue d'ensemble et y renvoie.
 *
 * VIGILANCE JURIDIQUE : les règles citées viennent du Code de commerce (L223-18,
 * L227-6, ouverts sur Légifrance) et de Bpifrance Création, consultés le
 * 24/09/2026. Aucun conseil sur le choix d'un statut : renvoi vers l'avocat ou
 * l'expert-comptable. VIGILANCE SANTÉ : chiffres du baromètre Bpifrance Le Lab /
 * Fondation MMA 2025, renvoi vers le médecin traitant et le 3114, aucun conseil
 * médical. Aucun cas client, aucun résultat chiffré du cabinet.
 */
export const article: Article = {
  slug: "gerant-d-entreprise",

  motCle: "dirigeant d'entreprise (320/mois, KD 26) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "gérant d'entreprise (260/mois)",
    "rôle du dirigeant",
    "gérant majoritaire ou minoritaire",
  ],

  // 39 / 42
  metaTitle: "Dirigeant d'entreprise : rôle et statut",
  // 147 / 150
  metaDescription:
    "Dirigeant d'entreprise : gérant ou président, pouvoirs, statut social, responsabilités, et ce que le rôle exige vraiment au quotidien dans une PME.",

  h1: "Dirigeant d'entreprise : rôle, statut et ce que le métier exige vraiment",

  chapo:
    "Un dirigeant d'entreprise est la personne qui représente la société et agit en son nom : le gérant dans une SARL, le président dans une SAS. La loi lui donne des pouvoirs très étendus face aux tiers, et en contrepartie une responsabilité civile, pénale et fiscale. Son statut social dépend de la forme de la société et, pour un gérant de SARL, de la part du capital qu'il détient. Mais le droit ne dit pas l'essentiel : le rôle du dirigeant est de fixer le cap, d'arbitrer, d'organiser et de choisir les personnes. Dans une PME, l'opérationnel dévore souvent ce rôle. Voici ce que recouvre le métier, et comment lui rendre sa place.",

  essentiel: {
    reponse:
      "Le dirigeant d'entreprise est le représentant légal d'une société : gérant de SARL ou d'EURL, président (et le cas échéant directeur général) de SAS ou de SASU. Selon le Code de commerce, il est investi des pouvoirs les plus étendus pour agir au nom de la société à l'égard des tiers. Il engage sa responsabilité civile en cas de faute de gestion, et sa responsabilité pénale ou fiscale dans les cas prévus par la loi. Le gérant majoritaire de SARL relève des travailleurs non salariés ; le gérant minoritaire ou égalitaire est assimilé salarié. Au-delà du statut, son rôle est de décider du cap et de l'organisation.",
    points: [
      "Gérant de SARL ou président de SAS : des pouvoirs très larges face aux tiers, fixés entre associés par les statuts",
      "Statut social du gérant de SARL : travailleur non salarié s'il est majoritaire, assimilé salarié sinon",
      "Responsabilité civile, pénale et fiscale : le mandat social n'est pas une protection",
      "Selon Bpifrance Le Lab, les dirigeants de PME et d'ETI consacrent à peine 10 % de leur agenda à autre chose que l'opérationnel",
      "Le rôle propre du dirigeant : cap, arbitrages, organisation, choix des personnes, relations extérieures",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Dirigeant d'entreprise : qui est-il au sens du droit ?",
      blocs: [
        {
          type: "p",
          texte:
            "Dans le langage courant, on dit « patron », « chef d'entreprise » ou « gérant » sans distinction. Le droit, lui, parle de mandataire social : la personne désignée pour représenter la société et agir en son nom. Son titre dépend de la forme juridique.",
        },
        {
          type: "h3",
          texte: "Le gérant de SARL",
        },
        {
          type: "p",
          texte:
            "Selon l'[article L223-18 du Code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031013015), la SARL est gérée par une ou plusieurs personnes physiques, associées ou non, nommées par les associés. Entre associés, les pouvoirs du gérant sont fixés par les statuts. **À l'égard des tiers, « le gérant est investi des pouvoirs les plus étendus pour agir en toute circonstance au nom de la société ».** Les clauses des statuts qui limitent ces pouvoirs sont inopposables aux tiers.",
        },
        {
          type: "h3",
          texte: "Le président de SAS",
        },
        {
          type: "p",
          texte:
            "Dans une SAS, l'[article L227-6 du Code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006227034) prévoit que la société est représentée par un président désigné selon les statuts, investi des pouvoirs les plus étendus dans la limite de l'objet social. Les statuts peuvent confier ces pouvoirs à un directeur général ou à un directeur général délégué. Là encore, les limitations statutaires ne sont pas opposables aux tiers.",
        },
        {
          type: "p",
          texte:
            "Concrètement : ce que signe le dirigeant engage la société, même s'il a dépassé ce que les associés l'autorisaient à faire. D'où l'importance de statuts bien rédigés et d'un pacte clair entre associés. Pour ces actes, l'avocat ou l'expert-comptable de l'entreprise reste l'interlocuteur qualifié.",
        },
        {
          type: "p",
          texte:
            "Le droit décrit un pouvoir. Il ne dit rien de la façon de l'exercer, et c'est là que la plupart des dirigeants de PME butent : non pas sur leurs prérogatives, mais sur le temps et l'énergie qu'il leur reste pour les exercer. C'est ce que travaille un [coaching dirigeant](/transformation-dirigeant/) : la fonction, plus que la personne.",
        },
      ],
    },

    {
      label: "Gérant d'entreprise",
      titre: "Gérant d'entreprise : majoritaire, égalitaire ou minoritaire",
      blocs: [
        {
          type: "p",
          texte:
            "Dans une SARL, la part de capital détenue par le gérant change son régime social. Selon Bpifrance Création, dans sa fiche [Quelle est la situation sociale et fiscale du gérant de SARL ?](https://bpifrance-creation.fr/moment-de-vie/quelle-est-situation-sociale-fiscale-du-gerant-sarl), la première question à se poser est de savoir si l'on est gérant majoritaire, égalitaire ou minoritaire.",
        },
        {
          type: "tableau",
          entetes: ["Situation du gérant de SARL", "Conséquence sociale selon Bpifrance Création"],
          lignes: [
            [
              "Gérant majoritaire",
              "Travailleur non salarié, affilié à la Sécurité sociale des indépendants ; cotisations minimales dues même sans rémunération",
            ],
            [
              "Gérant égalitaire ou minoritaire",
              "Assimilé salarié, affilié au régime général ; protection proche de celle d'un salarié, hors assurance chômage",
            ],
            [
              "Gérant minoritaire ou égalitaire avec contrat de travail",
              "Possible pour des fonctions techniques nettement distinctes du mandat, avec rémunération séparée et lien de subordination",
            ],
            [
              "Dividendes d'un gérant majoritaire, SARL à l'IS",
              "Soumis à cotisations sociales pour la fraction supérieure à 10 % du capital, des primes d'émission et des comptes courants",
            ],
          ],
        },
        {
          type: "p",
          texte:
            "Bpifrance Création précise aussi que le gérant égalitaire n'est pas couvert par l'assurance chômage, et recommande d'interroger France Travail au préalable. Ces règles évoluent : faites valider votre situation par votre expert-comptable avant toute décision de rémunération ou de répartition du capital.",
        },
        {
          type: "h3",
          texte: "Nommé, révocable, démissionnaire",
        },
        {
          type: "p",
          texte:
            "La fiche [Gérant minoritaire ou majoritaire de SARL](https://bpifrance-creation.fr/encyclopedie/statut-du-dirigeant-son-conjoint/regime-social-du-dirigeant/gerant-minoritaire-ou) de Bpifrance Création rappelle que le gérant peut être révoqué par les associés pour « juste motif », par exemple une faute de gestion ou une divergence avec les associés, et qu'il peut démissionner à tout moment, dans les conditions prévues par les statuts. Le dirigeant d'une PME familiale, souvent associé majoritaire, oublie volontiers qu'il est lui aussi un mandataire, pas le propriétaire de la fonction.",
        },
      ],
    },

    {
      label: "Responsabilités",
      titre: "Les responsabilités qui pèsent sur le dirigeant",
      blocs: [
        {
          type: "p",
          texte:
            "Des pouvoirs étendus appellent une responsabilité à la mesure. Bpifrance Création la classe en trois volets pour le gérant de SARL, qui sont aussi les trois inquiétudes les plus fréquentes chez les dirigeants de PME.",
        },
        {
          type: "liste",
          items: [
            "**Responsabilité civile** : en cas de faute ayant causé un préjudice à la société, aux associés ou à un tiers. Trois types de fautes sont cités : infraction aux règles applicables aux SARL, violation des statuts, faute de gestion, comme accepter des commandes que la société n'est pas en état d'honorer",
            "**Responsabilité pénale** : dans les cas prévus par le Code de commerce, articles L241-2 à L241-9, tels que l'abus de biens sociaux ou la présentation de comptes annuels non fidèles",
            "**Responsabilité fiscale** : lorsque des manœuvres frauduleuses ou l'inobservation grave et répétée des obligations fiscales ont rendu impossible le recouvrement des impôts dus par la société",
          ],
        },
        {
          type: "h3",
          texte: "Ce que cela change dans la pratique",
        },
        {
          type: "p",
          texte:
            "La responsabilité ne disparaît pas, mais elle s'organise. Une [délégation de pouvoir](/infos-utiles/delegation-de-pouvoir/) répond à des conditions strictes, à vérifier avec un avocat : mal construite, elle ne protège personne. Même logique pour la finance : un dirigeant qui découvre sa situation à la clôture prend ses décisions à l'aveugle. **Connaître ses chiffres en continu n'est pas un luxe de grande entreprise, c'est la première protection du dirigeant.**",
        },
      ],
    },

    {
      label: "Rôle du dirigeant",
      titre: "Le rôle du dirigeant : ce que personne d'autre ne peut tenir",
      blocs: [
        {
          type: "p",
          texte:
            "Retirez tout ce qu'un bon collaborateur pourrait faire à votre place. Ce qui reste, c'est votre rôle. Dans une PME de 10 à 250 salariés, il tient en cinq fonctions.",
        },
        {
          type: "tableau",
          entetes: ["Fonction du dirigeant", "Ce qu'elle veut dire concrètement"],
          lignes: [
            ["Fixer le cap", "Dire où l'entreprise va à trois ans, et ce qu'elle refuse de faire pour y aller"],
            ["Arbitrer", "Trancher entre des options défendables quand les équipes ne peuvent pas le faire seules"],
            ["Organiser", "Décider qui décide quoi, et faire en sorte que les décisions ne remontent pas toutes"],
            ["Choisir les personnes", "Recruter, promouvoir, séparer : les décisions qui façonnent l'entreprise pour des années"],
            ["Tenir les relations extérieures", "Associés, banque, grands clients, partenaires : engager la parole de l'entreprise"],
          ],
        },
        {
          type: "h3",
          texte: "Décider, plutôt qu'exécuter",
        },
        {
          type: "p",
          texte:
            "Les cinq fonctions ont un point commun : ce sont des décisions, pas des tâches. Un dirigeant qui passe ses journées à exécuter, même brillamment, laisse vacantes les fonctions que lui seul peut tenir. Savoir [prendre une décision](/infos-utiles/prendre-une-decision/) dans de bonnes conditions, avec les bonnes informations et au bon moment, est le cœur du métier.",
        },
        {
          type: "h3",
          texte: "Gérant, manager, entrepreneur : trois casquettes",
        },
        {
          type: "p",
          texte:
            "Dans une PME, le dirigeant porte souvent trois casquettes à la fois. Celle du mandataire social, qui signe et répond devant les associés. Celle du manager, qui anime une équipe de direction. Celle de l'entrepreneur, qui cherche les relais de croissance. La difficulté n'est pas de les porter, c'est de savoir laquelle on porte à un moment donné, et de ne pas laisser la plus urgente écraser les deux autres.",
        },
      ],
    },

    {
      label: "Le quotidien",
      titre: "Ce que le quotidien fait du rôle du dirigeant",
      blocs: [
        {
          type: "p",
          texte:
            "Les enquêtes de Bpifrance Le Lab décrivent un écart constant entre le rôle et l'agenda. Selon [Trouver l'inspiration en tant que chef d'entreprise](https://lelab.bpifrance.fr/Etudes/trouver-l-inspiration-en-tant-que-chef-d-entreprise-entre-manque-de-temps-et-pratiques-variees), les deux tiers des dirigeants de PME et d'ETI déclarent travailler plus de 50 heures par semaine.",
        },
        {
          type: "p",
          texte:
            "Le [communiqué de présentation de l'étude](https://presse.bpifrance.fr/a-travers-une-nouvelle-etude-bpifrance-fait-lanatomie-de-la-quete-dinspiration-constante-et-proteiforme-des-dirigeants-de-pme-et-eti-francaises), menée fin 2023 auprès de 439 dirigeants, précise qu'ils consacrent **à peine 10 % de leur agenda à des activités autres qu'opérationnelles** (veille, lecture, événements, formation, analyse de tendances), et qu'ils aimeraient y consacrer deux fois plus de temps. 45 % déclarent que leurs discussions avec des consultants, coachs, avocats ou experts-comptables les aident à identifier des idées pour améliorer la gestion de leur entreprise.",
        },
        {
          type: "h3",
          texte: "Comment l'opérationnel prend toute la place",
        },
        {
          type: "p",
          texte:
            "Le mécanisme est connu. Le dirigeant est souvent le meilleur technicien ou le meilleur commercial de sa maison ; c'est ainsi qu'il a fondé ou repris l'entreprise. Chaque fois qu'un dossier coince, il est plus rapide de le traiter soi-même que d'expliquer. Les managers l'ont compris : remonter vers lui reste pour eux le choix le plus sûr. En quelques années, l'entreprise s'organise autour de sa disponibilité, et le temps consacré au cap et à l'organisation se réduit à ce qui reste le soir.",
        },
      ],
    },

    {
      label: "Le coût humain",
      titre: "Diriger une entreprise : un rôle qui use",
      blocs: [
        {
          type: "p",
          texte:
            "Le baromètre 2025 de la santé des dirigeants de TPE et PME, publié par la Fondation MMA des Entrepreneurs du Futur et Bpifrance Le Lab et résumé dans [1 dirigeant sur 3 est en mauvaise santé mentale en 2025](https://lelab.bpifrance.fr/Etudes/1-dirigeant-sur-3-est-en-mauvaise-sante-mentale-en-2025), relève que seuls 68 % des dirigeants se considèrent en bonne santé mentale, contre 76 à 80 % les années précédentes. 48 % déclarent des troubles du sommeil. Un dirigeant sur trois renonce à se soigner, d'abord faute de temps (68 %).",
        },
        {
          type: "p",
          texte:
            "Deux résultats du baromètre parlent directement du rôle. Les dirigeants qui détiennent 100 % du capital sont les plus exposés (37 % en mauvaise santé mentale). Et la santé psychologique se dégrade avec l'ancienneté : 35 % en mauvaise santé après 15 à 20 ans de gestion, contre 17 % dans les entreprises de moins de trois ans. Porter seul, longtemps, a un coût. Nous en parlons plus longuement dans notre article sur la [solitude du dirigeant](/infos-utiles/solitude-du-dirigeant/).",
        },
        {
          type: "encadre",
          titre: "Quand la fatigue s'installe",
          texte:
            "Une fatigue qui ne passe plus, un sommeil durablement dégradé, une irritabilité inhabituelle : ce sont des signaux à montrer à votre médecin traitant, pas à interpréter seul. En cas de détresse ou d'idées noires, appelez le [3114](https://3114.fr/), numéro national de prévention du suicide, gratuit, 24 h/24 et 7 j/7.",
        },
      ],
    },

    {
      label: "Reprendre sa place",
      titre: "Redonner au dirigeant d'entreprise son vrai rôle",
      blocs: [
        {
          type: "p",
          texte:
            "Retrouver son rôle ne consiste pas à travailler moins, mais à travailler ailleurs : moins dans l'exécution, davantage dans les décisions qui n'appartiennent qu'à vous. Quatre gestes y contribuent.",
        },
        {
          type: "liste",
          items: [
            "**Faire l'inventaire de ses décisions** : pendant deux semaines, noter chaque décision prise, puis se demander lesquelles auraient pu l'être par quelqu'un d'autre",
            "**Déléguer des décisions, pas seulement des tâches** : donner à un manager le droit explicite de trancher dans un périmètre, y compris celui de se tromper",
            "**Installer une instance qui arbitre** : un comité de direction, même à trois, qui décide réellement au lieu de valider",
            "**Protéger du temps pour le cap** : une demi-journée fixe par semaine, sans opérationnel, tenue comme un rendez-vous client",
          ],
        },
        {
          type: "p",
          texte:
            "Ces gestes paraissent simples. Ils échouent pourtant souvent pour une raison banale : le dirigeant reprend ce qu'il a délégué au premier écart. La co-responsabilité suppose un droit à l'erreur formulé et tenu, et c'est d'abord au dirigeant de le tenir.",
        },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, ce travail commence par l'étape Aligner, pour remettre de la clarté dans vos priorités, puis l'étape Coopérer, en cercles de six à huit personnes, pour installer la co-responsabilité autour de vous. Un conseiller référent vous suit du début à la fin ; une autre expertise du cabinet n'intervient que si le sujet l'exige. Si vous voulez d'abord savoir si le nœud est chez vous ou dans l'organisation, commencez par un [diagnostic d'entreprise](/diagnostic/).",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle différence entre gérant et dirigeant d'entreprise ?",
      r: [
        "« Dirigeant » est le terme générique : il désigne la personne qui représente la société et agit en son nom. « Gérant » est le titre de ce dirigeant dans une SARL ou une EURL. Dans une SAS ou une SASU, on parle de président, parfois assisté d'un directeur général. Les pouvoirs face aux tiers sont comparables, très étendus dans les deux cas ; le statut social et les règles de nomination diffèrent.",
      ],
    },
    {
      q: "Quel est le rôle d'un dirigeant d'entreprise ?",
      r: [
        "Juridiquement, représenter la société et agir en son nom, dans le respect des statuts et de l'intérêt social. Dans les faits, son rôle propre tient en cinq fonctions que personne d'autre ne peut tenir : fixer le cap, arbitrer, organiser les responsabilités, choisir les personnes et engager la parole de l'entreprise auprès des associés, de la banque et des grands clients. Tout le reste peut, en principe, être confié à d'autres.",
      ],
    },
    {
      q: "Le gérant de SARL est-il salarié ?",
      r: [
        "Pas au sens du contrat de travail. Selon Bpifrance Création, le gérant majoritaire relève des travailleurs non salariés et de la Sécurité sociale des indépendants. Le gérant minoritaire ou égalitaire est assimilé salarié et affilié au régime général, sans assurance chômage. Il peut cumuler un contrat de travail pour des fonctions techniques distinctes, rémunérées à part, avec un lien de subordination réel. Faites valider votre cas par votre expert-comptable.",
      ],
    },
    {
      q: "Un dirigeant d'entreprise est-il responsable personnellement ?",
      r: [
        "Oui, dans certains cas. Il engage sa responsabilité civile s'il commet une faute, par exemple une faute de gestion ou une violation des statuts, qui cause un préjudice à la société, aux associés ou à un tiers. Sa responsabilité pénale peut être recherchée pour des infractions comme l'abus de biens sociaux, et sa responsabilité fiscale en cas de manquements graves et répétés. Pour toute situation concrète, consultez un avocat.",
      ],
    },
    {
      q: "Comment un dirigeant de PME peut-il sortir de l'opérationnel ?",
      r: [
        "En commençant par ses décisions plutôt que par ses tâches. Notez pendant deux semaines toutes les décisions que vous prenez, identifiez celles qu'un manager pourrait prendre, puis déléguez-les explicitement, avec le droit de se tromper. Installez une instance qui arbitre vraiment, et protégez chaque semaine un temps fixe pour le cap. Selon Bpifrance Le Lab, les dirigeants de PME y consacrent aujourd'hui à peine 10 % de leur agenda.",
      ],
    },
  ],

  sources: [
    {
      titre: "Article L223-18 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031013015",
    },
    {
      titre: "Article L227-6 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006227034",
    },
    {
      titre: "Quelle est la situation sociale et fiscale du gérant de SARL ?",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/moment-de-vie/quelle-est-situation-sociale-fiscale-du-gerant-sarl",
    },
    {
      titre: "Gérant minoritaire ou majoritaire de SARL",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/statut-du-dirigeant-son-conjoint/regime-social-du-dirigeant/gerant-minoritaire-ou",
    },
    {
      titre:
        "Trouver l'inspiration en tant que chef d'entreprise : entre manque de temps et pratiques variées",
      editeur: "Bpifrance Le Lab",
      url: "https://lelab.bpifrance.fr/Etudes/trouver-l-inspiration-en-tant-que-chef-d-entreprise-entre-manque-de-temps-et-pratiques-variees",
    },
    {
      titre:
        "A travers une nouvelle étude, Bpifrance fait l'anatomie de la quête d'inspiration constante et protéiforme des dirigeants de PME et ETI françaises.",
      editeur: "Bpifrance",
      url: "https://presse.bpifrance.fr/a-travers-une-nouvelle-etude-bpifrance-fait-lanatomie-de-la-quete-dinspiration-constante-et-proteiforme-des-dirigeants-de-pme-et-eti-francaises",
    },
    {
      titre: "Numéro national de prévention du suicide - 3114",
      editeur: "3114, numéro national de prévention du suicide",
      url: "https://3114.fr/",
    },
    {
      titre: "1 dirigeant sur 3 est en mauvaise santé mentale en 2025",
      editeur: "Bpifrance Le Lab",
      url: "https://lelab.bpifrance.fr/Etudes/1-dirigeant-sur-3-est-en-mauvaise-sante-mentale-en-2025",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2027-08-30",
  accent: "organisation",
  pilier: { href: "/transformation-dirigeant/", ancre: "coaching dirigeant" },

  valide: true,
};
