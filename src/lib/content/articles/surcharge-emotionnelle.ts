import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 1, accompagnement du dirigeant. Signé Olivia Artur.
 * Requête : « charge émotionnelle » (390/mois, KD 9). Secondaire :
 * « surcharge émotionnelle » (390).
 *
 * Périmètre : la charge émotionnelle au travail (exigences émotionnelles, travail
 * émotionnel), distincte de la charge mentale (article du 07/12/2026) et des
 * signes du burn-out (article du 26/10/2026), vers lesquels l'article renvoie.
 *
 * SUJET SENSIBLE : aucun diagnostic, aucun conseil médical. Renvoi systématique
 * vers le médecin traitant (et le médecin du travail pour les salariés), 3114
 * cité pour la détresse. Sources de santé (HAS, Santé.fr, 3114) et chiffres
 * (INSEE, INRS, Bpifrance) ouverts et vérifiés le 24/09/2026.
 * La sophrologie est présentée comme une pratique de récupération, jamais comme
 * un soin : à garder ainsi à la relecture.
 */
export const article: Article = {
  slug: "surcharge-emotionnelle",

  motCle: "charge émotionnelle (390/mois, KD 9) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "surcharge émotionnelle (390/mois)",
    "exigences émotionnelles au travail",
    "travail émotionnel",
  ],

  // 41 / 42
  metaTitle: "Charge émotionnelle au travail : la gérer",
  // 147 / 150
  metaDescription:
    "Charge émotionnelle au travail : définition, chiffres, signaux de surcharge émotionnelle à prendre au sérieux, et ce qui la réduit vraiment en PME.",

  h1: "Charge émotionnelle au travail : la reconnaître avant la surcharge émotionnelle",

  chapo:
    "La charge émotionnelle, c'est l'effort de gérer ses émotions pour faire son travail : garder son calme face à un client agressif, annoncer une mauvaise nouvelle, rassurer une équipe quand on est soi-même inquiet. Elle n'a rien d'anormal. Elle devient un risque quand elle s'accumule sans temps pour récupérer, jusqu'à la surcharge émotionnelle. L'INRS la classe parmi les six familles de facteurs de risques psychosociaux, et la Haute Autorité de santé la place au cœur de sa définition du burn-out. Elle se réduit par des gestes personnels, mais surtout par l'organisation du travail. Et si elle déborde, le premier interlocuteur est votre médecin.",

  essentiel: {
    reponse:
      "La charge émotionnelle désigne l'effort que demande le fait de maîtriser, cacher ou simuler ses émotions dans le cadre du travail. L'INRS en fait l'une des six familles de facteurs de risques psychosociaux, sous le nom d'exigences émotionnelles. Selon l'INSEE, 12 % des salariés déclaraient en 2019 être souvent, voire tous les jours ou presque, « bouleversés, secoués ou émus » au travail. Prolongée sans récupération, elle peut conduire à l'épuisement : ses signes relèvent d'un médecin, pas d'un autodiagnostic.",
    points: [
      "Charge émotionnelle : gérer ses émotions pour le travail ; charge mentale : penser à tout. Ce n'est pas la même chose",
      "Les exigences émotionnelles figurent parmi les six familles de facteurs de risques psychosociaux de l'INRS",
      "Le dirigeant de PME y est exposé : annonces difficiles, conflits, inquiétude qu'il ne peut pas montrer",
      "Fatigue persistante, irritabilité, sommeil dégradé, détachement : à montrer à un médecin",
      "En cas de détresse : le 3114, gratuit, 24 h/24 et 7 j/7 ; en cas de danger immédiat, le 15",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "La charge émotionnelle au travail : définition",
      blocs: [
        {
          type: "p",
          texte:
            "Tout travail mobilise des émotions. Mais certaines situations demandent de les tenir en bride, de les masquer ou d'en afficher d'autres que celles que l'on ressent. **La charge émotionnelle, c'est l'énergie que coûte cet écart entre ce que l'on éprouve et ce que le travail exige de montrer.**",
        },
        {
          type: "h3",
          texte: "Ce que l'INRS appelle exigences émotionnelles",
        },
        {
          type: "p",
          texte:
            "Dans sa présentation des [facteurs de risques psychosociaux](https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html), l'INRS décrit les exigences émotionnelles comme liées à la nécessité de « maîtriser ses propres émotions, de les cacher ou de les simuler ». Il cite les tensions avec le public, le contact avec la souffrance ou la détresse humaine, l'obligation de sourire ou de paraître de bonne humeur. Il précise que d'autres secteurs sont concernés dès lors que l'on y exige l'affichage constant d'une « attitude positive ».",
        },
        {
          type: "h3",
          texte: "Le travail émotionnel, une notion ancienne",
        },
        {
          type: "p",
          texte:
            "La sociologue américaine Arlie Hochschild a décrit ce phénomène dès 1983 dans The Managed Heart, en étudiant des hôtesses de l'air tenues de sourire en toutes circonstances. Elle parlait de travail émotionnel : un effort réel, qui fait partie du travail sans jamais figurer sur la fiche de poste. Le mot a vieilli, pas l'idée. Aujourd'hui, il concerne aussi bien la conseillère clientèle que le chef d'atelier qui doit annoncer une baisse d'activité, ou le dirigeant qui porte l'inquiétude de toute l'entreprise sans pouvoir la montrer.",
        },
        {
          type: "h3",
          texte: "Charge émotionnelle et surcharge émotionnelle",
        },
        {
          type: "p",
          texte:
            "La charge émotionnelle n'est pas un problème en soi : elle accompagne la plupart des métiers au contact d'autres personnes. On parle de surcharge émotionnelle quand elle dépasse durablement les capacités de récupération : trop d'émotions à gérer, trop longtemps, sans soutien ni pause pour les déposer. Elle touche les équipes comme la direction ; chez le dirigeant, elle est souvent la plus invisible, et c'est pourquoi un [accompagnement dirigeant](/transformation-dirigeant/) commence par la rendre dicible.",
        },
      ],
    },

    {
      label: "Distinguer",
      titre: "Charge émotionnelle, charge mentale, stress : ne pas tout confondre",
      blocs: [
        {
          type: "p",
          texte:
            "Ces notions se recoupent, mais elles ne désignent pas la même chose, et elles ne se réduisent pas de la même façon. Les distinguer permet de viser juste. La [charge mentale](/infos-utiles/charge-mentale/), par exemple, se traite en partie par l'organisation des tâches, alors que la charge émotionnelle se traite d'abord par le soutien et les espaces pour en parler.",
        },
        {
          type: "tableau",
          entetes: ["Notion", "Ce qu'elle désigne"],
          lignes: [
            [
              "Charge émotionnelle",
              "L'effort de maîtriser, cacher ou simuler ses émotions pour faire son travail",
            ],
            [
              "Surcharge émotionnelle",
              "Une charge émotionnelle qui dépasse durablement la capacité à récupérer",
            ],
            [
              "Charge mentale",
              "L'effort cognitif de penser à tout, d'anticiper, de garder en tête de nombreux sujets",
            ],
            [
              "Stress",
              "Selon l'INRS, le déséquilibre perçu entre les contraintes du travail et ses propres ressources pour y faire face",
            ],
            [
              "Burn-out",
              "Selon la HAS, un épuisement physique, émotionnel et mental : un état de santé, qui se diagnostique par un médecin",
            ],
          ],
        },
        {
          type: "p",
          texte:
            "La définition du stress citée ici vient de la page de l'INRS [Ce qu'il faut retenir sur les risques psychosociaux](https://www.inrs.fr/risques/psychosociaux/ce-qu-il-faut-retenir.html). Elle éclaire un point essentiel : ce n'est pas l'émotion qui épuise, c'est l'écart entre ce qu'elle demande et les ressources dont on dispose pour y faire face.",
        },
      ],
    },

    {
      label: "Les chiffres",
      titre: "Exigences émotionnelles : ce que disent les chiffres",
      blocs: [
        {
          type: "h3",
          texte: "Un salarié sur huit souvent bouleversé au travail",
        },
        {
          type: "p",
          texte:
            "L'édition 2023 d'Emploi, chômage, revenus du travail publiée par l'INSEE, dans sa fiche [Conditions de travail](https://www.insee.fr/fr/statistiques/7456903?sommaire=7456956), s'appuie sur l'enquête Conditions de travail de 2019. **En 2019, 12 % des salariés déclaraient être souvent, voire tous les jours ou presque, « bouleversés, secoués ou émus » au travail.** La proportion atteint 15 % dans les professions intermédiaires et 14 % chez les employés, contre 5 % chez les ouvriers.",
        },
        {
          type: "p",
          texte:
            "L'écart est net entre secteurs : 18 % des agents de la fonction publique sont concernés, contre 10 % des salariés du privé, et 32 % dans la fonction publique hospitalière. Le privé n'est pas épargné pour autant. Dans une PME de services, de distribution ou d'agroalimentaire, les postes au contact des clients, les fonctions d'encadrement et la direction concentrent l'essentiel de cette charge.",
        },
        {
          type: "h3",
          texte: "Un facteur de risque reconnu, aux effets documentés",
        },
        {
          type: "p",
          texte:
            "L'INRS range les exigences émotionnelles parmi six familles de facteurs de risques psychosociaux, avec l'intensité et le temps de travail, le manque d'autonomie, les rapports sociaux dégradés, les conflits de valeurs et l'insécurité de la situation de travail. Dans un [communiqué mis à jour en janvier 2025](https://www.inrs.fr/header/presse/cp-expositions-psychosociales-effets-sante.html), l'institut rend compte d'une expertise fondée sur plus de 800 études, qui confirme les liens entre ces expositions et la santé : risque de burn-out multiplié par deux en cas de forte demande psychologique, excès de risque de plus de 40 % de lombalgies en cas de manque de soutien social.",
        },
        {
          type: "h3",
          texte: "Au cœur de la définition du burn-out",
        },
        {
          type: "p",
          texte:
            "La Haute Autorité de santé définit l'épuisement professionnel, dans sa fiche [Repérage et prise en charge cliniques du syndrome d'épuisement professionnel ou burnout](https://www.has-sante.fr/jcms/c_2769318/fr/syndrome-d-epuisement-professionnel-ou-burnout-mieux-le-reperer-et-mieux-le-prendre-en-charge), comme un « épuisement physique, émotionnel et mental qui résulte d'un investissement prolongé dans des situations de travail exigeantes sur le plan émotionnel ». La charge émotionnelle n'est donc pas un sujet de confort : c'est l'un des chemins documentés vers l'épuisement.",
        },
      ],
    },

    {
      label: "Le dirigeant",
      titre: "La charge émotionnelle du dirigeant de PME",
      blocs: [
        {
          type: "p",
          texte:
            "On associe spontanément la charge émotionnelle aux soignants ou aux métiers d'accueil. Le dirigeant de PME y est pourtant très exposé, pour une raison simple : il est celui qui encaisse les émotions des autres, et le seul qui ne peut pas montrer les siennes.",
        },
        {
          type: "h3",
          texte: "Tenir la façade",
        },
        {
          type: "p",
          texte:
            "Annoncer un licenciement à quelqu'un que vous connaissez depuis quinze ans. Rassurer l'équipe alors que la trésorerie vous inquiète. Arbitrer un conflit entre deux personnes que vous appréciez. Encaisser la colère d'un client important sans la répercuter. Chacune de ces situations demande de gérer à la fois vos émotions et celles des autres, et d'afficher une assurance que vous ne ressentez pas toujours.",
        },
        {
          type: "h3",
          texte: "Sans espace pour déposer",
        },
        {
          type: "p",
          texte:
            "Le salarié peut en parler à un collègue, à son manager, au médecin du travail. Le dirigeant, lui, n'a souvent personne à qui confier ce qu'il ressent sans créer d'inquiétude. Selon l'étude de Bpifrance Le Lab présentée dans son [communiqué de juin 2026](https://presse.bpifrance.fr/bpifrance-le-lab-devoile-les-nouveaux-visages-de-la-solitude-des-dirigeants-de-pme-eti-entre-incertitudes-et-quete-de-sens/?lang=fra), 49 % des dirigeants de PME et d'ETI se déclarent isolés, et 65 % vivent cette solitude comme un stress lié à la charge mentale. La [solitude du dirigeant](/infos-utiles/solitude-du-dirigeant/) et sa charge émotionnelle se nourrissent l'une l'autre : moins on peut en parler, plus elle pèse.",
        },
        {
          type: "p",
          texte:
            "C'est l'un des points de départ d'un accompagnement du dirigeant : non pas apprendre à encaisser davantage, mais retrouver un lieu où poser ce qui ne peut se dire ni devant l'équipe, ni toujours à la maison.",
        },
      ],
    },

    {
      label: "Signaux d'alerte",
      titre: "Surcharge émotionnelle : les signaux à prendre au sérieux",
      blocs: [
        {
          type: "p",
          texte:
            "Nous ne sommes pas médecins, et cet article ne remplace pas un avis médical. Il ne permet de poser aucun diagnostic, ni sur vous, ni sur un collaborateur. Il sert à repérer le moment où il faut en parler à un professionnel de santé.",
        },
        {
          type: "p",
          texte:
            "Le site public [Santé.fr](https://www.sante.fr/burn-out-epuisement-professionnel) décrit, parmi les manifestations de l'épuisement professionnel, un épuisement émotionnel durable, un sentiment de vide émotionnel, une fatigue permanente, des insomnies, de l'anxiété, de l'irritabilité, un isolement social et des difficultés de concentration. Il souligne que la prise en charge est bien plus efficace lorsqu'elle est précoce. Les [signes du burn-out](/infos-utiles/signes-du-burn-out/) sont détaillés dans un article dédié.",
        },
        {
          type: "tableau",
          entetes: ["Ce que vous remarquez", "Ce qu'il est raisonnable de faire"],
          lignes: [
            [
              "Des émotions qui débordent pour des raisons mineures : larmes, colère, agacement",
              "Le noter comme un signal, et en parler à votre médecin si cela s'installe",
            ],
            [
              "À l'inverse, une indifférence nouvelle, l'impression de ne plus rien ressentir",
              "En parler à votre médecin traitant : c'est un signe à évaluer, pas à minimiser",
            ],
            [
              "Une fatigue qui ne passe plus avec le repos, un sommeil durablement dégradé",
              "Prendre rendez-vous avec votre médecin, sans attendre l'arrêt forcé",
            ],
            [
              "Chez un collaborateur : repli, irritabilité, absences répétées",
              "Lui en parler avec tact, et l'orienter vers le médecin du travail ou son médecin traitant",
            ],
            [
              "Le sentiment que rien n'a plus de sens, des idées noires",
              "Appeler le 3114 sans attendre ; en cas de danger immédiat, le 15",
            ],
          ],
        },
        {
          type: "encadre",
          titre: "Qui appeler",
          texte:
            "Votre médecin traitant coordonne la prise en charge, selon la HAS ; pour un salarié, le médecin du travail analyse aussi les conditions de travail. En cas de détresse ou de pensées suicidaires, le 3114 répond 24 h/24 et 7 j/7, gratuitement, dans toute la France : selon le [site officiel du 3114](https://3114.fr/), un professionnel du soin formé à la prévention du suicide vous écoute. Vous pouvez aussi l'appeler si vous vous inquiétez pour quelqu'un.",
        },
      ],
    },

    {
      label: "Ce qui dépend de vous",
      titre: "Alléger sa charge émotionnelle : ce qui dépend de vous",
      blocs: [
        {
          type: "p",
          texte:
            "Ces gestes ne soignent pas un épuisement installé. Ils aident à éviter que la charge émotionnelle de chaque jour ne s'accumule jusqu'à la surcharge.",
        },
        {
          type: "h3",
          texte: "Nommer ce que vous ressentez",
        },
        {
          type: "p",
          texte:
            "Une émotion nommée pèse moins qu'une émotion ignorée. Après un entretien difficile, prendre deux minutes pour identifier ce qui s'est passé en vous, colère, tristesse, culpabilité, évite de l'emporter dans la réunion suivante. Certains le font par écrit, en quelques lignes en fin de journée.",
        },
        {
          type: "h3",
          texte: "Créer des sas entre les situations",
        },
        {
          type: "p",
          texte:
            "Enchaîner une annonce douloureuse, un rendez-vous client et un point d'équipe sans transition oblige à changer de registre émotionnel en quelques minutes. Laisser un temps entre deux situations chargées, marcher, respirer, changer de pièce : ces sas paraissent anodins ; ils limitent l'accumulation. Des pratiques de relaxation comme la sophrologie peuvent y aider ; elles ne remplacent en aucun cas un suivi médical quand il est nécessaire.",
        },
        {
          type: "h3",
          texte: "Avoir un lieu pour déposer",
        },
        {
          type: "p",
          texte:
            "Des pairs qui vivent la même chose, un conseiller extérieur, un groupe de dirigeants où la confidentialité est posée : peu importe la forme, pourvu qu'il existe un endroit où vous pouvez dire ce que vous ne pouvez dire nulle part ailleurs. Et protégez les bases : sommeil, activité physique, temps sans entreprise.",
        },
      ],
    },

    {
      label: "Ce qui dépend de l'organisation",
      titre: "Réduire les exigences émotionnelles : ce qui dépend de l'organisation",
      blocs: [
        {
          type: "p",
          texte:
            "L'INRS est clair sur ce point : la prévention des risques psychosociaux doit viser en priorité le travail et son organisation, par des mesures collectives, plutôt que la seule capacité de chacun à faire face. L'employeur doit évaluer ces risques comme tous les risques professionnels. Pour la charge émotionnelle, cela se traduit par des mesures concrètes.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Des règles face aux situations tendues.** Que faire face à un client agressif, qui peut mettre fin à un échange, à qui passer la main : ce qui est écrit n'a plus à être improvisé sous tension.",
            "**Du soutien après les moments difficiles.** Un échange avec le manager après une situation pénible, plutôt que le silence et le dossier suivant.",
            "**Des espaces pour parler du travail.** Des temps réguliers où l'équipe peut évoquer ce qui a été dur, sans que cela soit perçu comme une faiblesse.",
            "**Une répartition des situations lourdes.** Éviter que les mêmes personnes absorbent toujours les clients difficiles ou les annonces pénibles.",
            "**Des managers formés et soutenus.** Ils encaissent les émotions de leur équipe ; eux aussi ont besoin d'un lieu pour les déposer.",
          ],
        },
        {
          type: "p",
          texte:
            "Ces mesures relèvent de la [qualité de vie et des conditions de travail](/infos-utiles/qvt-ou-qvct/) au sens large, et elles coûtent peu. **La charge émotionnelle se réduit rarement par un grand plan ; elle se réduit par des habitudes collectives qui autorisent à dire que c'était dur.**",
        },
      ],
    },

    {
      label: "Accompagnement",
      titre: "Ce qu'un accompagnement change à la charge émotionnelle, et ce qu'il ne fait pas",
      blocs: [
        {
          type: "p",
          texte:
            "Un accompagnement ne soigne pas. Si votre situation relève d'un suivi médical ou psychologique, c'est vers un professionnel de santé qu'il faut aller, et nous vous le dirons dès le premier échange.",
        },
        {
          type: "p",
          texte:
            "Quand le nœud est la façon dont l'organisation fait remonter les tensions jusqu'à vous, un accompagnement agit à la source. Chez Un Seul Souffle, un conseiller référent suit votre parcours du début à la fin. L'étape Aligner remet de la clarté dans vos priorités, en individuel ou en collectif avec d'autres dirigeants, avec en option un autodiagnostic de qualité de vie au travail. L'étape Coopérer, en cercles de 6 à 8 personnes, installe la co-responsabilité dans votre équipe, pour que vous ne soyez plus seul à absorber chaque conflit.",
        },
        {
          type: "p",
          texte:
            "Le périmètre est arrêté avec vous et ne s'élargit pas sans votre accord. Si vous voulez d'abord situer votre entreprise, commencez par un [diagnostic d'entreprise](/diagnostic/) : il aide à voir si la charge que vous portez vient de vous, ou de la façon dont l'organisation fonctionne.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce que la charge émotionnelle au travail ?",
      r: [
        "C'est l'effort que demande le fait de maîtriser, cacher ou simuler ses émotions pour faire son travail : garder son calme face à un client, annoncer une mauvaise nouvelle, rassurer une équipe. L'INRS en fait l'une des six familles de facteurs de risques psychosociaux, sous le nom d'exigences émotionnelles. Elle devient un risque lorsqu'elle s'accumule durablement sans temps de récupération ni soutien.",
      ],
    },
    {
      q: "Quelle différence entre charge émotionnelle et charge mentale ?",
      r: [
        "La charge mentale est un effort cognitif : penser à tout, anticiper, garder de nombreux sujets en tête. La charge émotionnelle porte sur les émotions : les contenir, les masquer ou afficher celles que le travail attend. Les deux se cumulent souvent chez un dirigeant ou un manager, mais elles ne se réduisent pas de la même façon : l'une par l'organisation des tâches, l'autre surtout par le soutien.",
      ],
    },
    {
      q: "Quels sont les signes d'une surcharge émotionnelle ?",
      r: [
        "Seul un médecin peut évaluer votre situation. Parmi les signaux décrits par les sources publiques de santé : émotions qui débordent pour des raisons mineures, ou au contraire sentiment de vide, fatigue persistante, sommeil dégradé, irritabilité, repli sur soi, difficultés de concentration. Si plusieurs s'installent, prenez rendez-vous avec votre médecin traitant. En cas d'idées noires, appelez le 3114.",
      ],
    },
    {
      q: "Quels métiers sont les plus exposés aux exigences émotionnelles ?",
      r: [
        "Selon l'INRS, surtout les métiers de services : contact avec le public, avec la souffrance ou la détresse, obligation de paraître de bonne humeur. Selon l'INSEE, en 2019, 32 % des agents de la fonction publique hospitalière se disaient souvent bouleversés au travail, contre 12 % de l'ensemble des salariés. Les fonctions d'encadrement et de direction sont également exposées, notamment lors des annonces difficiles.",
      ],
    },
    {
      q: "Comment réduire la charge émotionnelle d'une équipe ?",
      r: [
        "En agissant d'abord sur l'organisation : règles claires face aux situations tendues, possibilité de passer la main, échange avec le manager après un moment difficile, temps réguliers pour parler du travail, répartition des situations lourdes. L'INRS recommande de privilégier ces mesures collectives plutôt que de compter sur la seule résistance de chacun. Les managers ont eux-mêmes besoin d'un lieu pour déposer ce qu'ils absorbent.",
      ],
    },
  ],

  sources: [
    {
      titre: "Prévenir les risques psychosociaux (RPS). Facteurs de risque",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html",
    },
    {
      titre: "Prévenir les risques psychosociaux (RPS). Ce qu'il faut retenir",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/ce-qu-il-faut-retenir.html",
    },
    {
      titre:
        "Risques psychosociaux au travail et effets sur la santé des salariés — Des liens confirmés par les connaissances actuelles",
      editeur: "INRS",
      url: "https://www.inrs.fr/header/presse/cp-expositions-psychosociales-effets-sante.html",
    },
    {
      titre: "Conditions de travail (Emploi, chômage, revenus du travail, Insee Références, édition 2023)",
      editeur: "INSEE",
      url: "https://www.insee.fr/fr/statistiques/7456903?sommaire=7456956",
    },
    {
      titre:
        "Repérage et prise en charge cliniques du syndrome d'épuisement professionnel ou burnout",
      editeur: "Haute Autorité de santé",
      url: "https://www.has-sante.fr/jcms/c_2769318/fr/syndrome-d-epuisement-professionnel-ou-burnout-mieux-le-reperer-et-mieux-le-prendre-en-charge",
    },
    {
      titre: "Burn out (épuisement professionnel)",
      editeur: "Santé.fr, service public d'information en santé",
      url: "https://www.sante.fr/burn-out-epuisement-professionnel",
    },
    {
      titre:
        "Bpifrance Le Lab dévoile les nouveaux visages de la solitude des dirigeants de PME-ETI, entre incertitudes et quête de sens",
      editeur: "Bpifrance",
      url: "https://presse.bpifrance.fr/bpifrance-le-lab-devoile-les-nouveaux-visages-de-la-solitude-des-dirigeants-de-pme-eti-entre-incertitudes-et-quete-de-sens/?lang=fra",
    },
    {
      titre: "Numéro national de prévention du suicide - 3114",
      editeur: "3114, piloté par le ministère chargé de la santé",
      url: "https://3114.fr/",
    },
  ],

  auteur: "olivia-artur",
  datePublication: "2027-06-28",
  accent: "qvt",
  pilier: { href: "/transformation-dirigeant/", ancre: "accompagnement dirigeant" },

  valide: false,
};
