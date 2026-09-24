import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 1, accompagnement du dirigeant. Signé Muriel Saffroy.
 * Requête : « management toxique » (810/mois, KD 8). Secondaires : variantes
 * naturelles (manager toxique, harcèlement managérial, signes d'un management
 * toxique).
 *
 * POINTS SENSIBLES
 * - Juridique : « management toxique » n'est pas une notion du droit. Seul le
 *   harcèlement moral l'est (C. trav. L1152-1, C. pén. 222-33-2, Cass. soc.
 *   10 nov. 2009, n° 07-45.321). Textes vérifiés sur Légifrance et le Code du
 *   travail numérique le 24/09/2026. L'article renvoie vers un avocat pour toute
 *   enquête ou sanction.
 * - Santé : aucun diagnostic, ni sur le salarié ni sur le manager (pas
 *   d'étiquette « pervers narcissique »). Renvoi vers le médecin du travail, le
 *   médecin traitant, le 3114 (vérifié sur 3114.fr) et le 116 006 (vérifié sur
 *   service-public.gouv.fr).
 */
export const article: Article = {
  slug: "management-toxique",

  motCle: "management toxique (810/mois, KD 8) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "manager toxique",
    "harcèlement managérial",
    "signes d'un management toxique",
  ],

  // 36 / 42
  metaTitle: "Management toxique : repérer et agir",
  // 141 / 150
  metaDescription:
    "Management toxique en PME : les signes, la frontière avec le harcèlement moral, son coût et ce que le dirigeant doit faire pour y mettre fin.",

  h1: "Management toxique : le repérer, y mettre fin, l'empêcher de revenir",

  chapo:
    "Un management toxique n'est pas un management exigeant. C'est une façon de diriger qui abîme durablement les personnes : humiliations, pression sans cadre, consignes contradictoires, mise à l'écart. Dans une PME, il se voit tard, parce que le manager concerné obtient souvent des résultats et que les salariés se taisent. Il coûte pourtant cher, en santé, en départs et en risque juridique, car au-delà d'un certain seuil il devient du harcèlement moral, dont l'employeur répond. La bonne nouvelle : il se traite. Il faut établir les faits, protéger les personnes, et surtout corriger l'organisation qui l'a laissé s'installer.",

  essentiel: {
    reponse:
      "Le management toxique désigne des pratiques managériales qui dégradent la santé, la dignité ou les perspectives des salariés : critiques humiliantes, pression permanente, ordres contradictoires, isolement d'une personne. Ce n'est pas une catégorie juridique, mais la Cour de cassation juge depuis 2009 que des méthodes de gestion peuvent constituer un harcèlement moral lorsqu'elles se traduisent par des agissements répétés. L'employeur doit alors agir : il a une obligation de prévention et de sécurité envers ses salariés. La réponse durable combine l'établissement des faits, la protection des personnes et la correction des causes organisationnelles.",
    points: [
      "Exigence et toxicité se distinguent par leurs effets : l'une fait progresser, l'autre abîme",
      "Des méthodes de gestion peuvent constituer un harcèlement moral (Cass. soc., 10 novembre 2009)",
      "Le harcèlement moral est puni de deux ans d'emprisonnement et de 30 000 € d'amende",
      "Un manager toxique est souvent le produit d'une organisation floue, sous pression et sans contre-pouvoir",
      "En cas de détresse : médecin du travail, médecin traitant, et le 3114, gratuit, 24 h/24",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Management toxique : de quoi parle-t-on exactement ?",
      blocs: [
        {
          type: "p",
          texte:
            "Le mot est partout, et c'est un problème : à force d'être employé pour tout, il ne veut plus rien dire. Un manager qui refuse une demande de congés n'est pas toxique. Un manager qui recadre un travail bâclé non plus. **Un management devient toxique quand ses effets sur les personnes sont durables et destructeurs, quelle que soit l'intention de celui qui l'exerce.**",
        },
        {
          type: "h3",
          texte: "Une notion de terrain, pas une notion juridique",
        },
        {
          type: "p",
          texte:
            "Le Code du travail ne connaît pas le « management toxique ». Il connaît le harcèlement moral, les risques psychosociaux et l'obligation de sécurité de l'employeur. Le terme sert donc d'abord à nommer un ressenti collectif : une équipe qui a peur, qui se tait, qui s'use. C'est un signal d'alerte utile, à condition de ne pas s'en servir comme d'un verdict sur une personne.",
        },
        {
          type: "h3",
          texte: "Exigeant ou toxique : la différence tient aux effets",
        },
        {
          type: "p",
          texte:
            "Un manager exigeant fixe un niveau élevé, explique pourquoi, donne les moyens et reconnaît le travail fait. Un manager toxique fixe un niveau flou ou mouvant, ne l'explique pas, retire les moyens et ne reconnaît rien. Les deux peuvent produire des résultats à court terme. Seul le premier les produit encore au bout de deux ans, avec la même équipe.",
        },
        {
          type: "p",
          texte:
            "Pour un dirigeant de PME, la question n'est pas seulement morale. Le management est la façon dont vos décisions deviennent du travail réel. Quand il abîme, c'est votre capacité d'exécution qui s'érode. C'est pourquoi le sujet relève pleinement d'un [coaching dirigeant](/transformation-dirigeant/) : vous êtes celui qui choisit les managers, fixe leur cadre et tolère, ou non, leurs pratiques.",
        },
      ],
    },

    {
      label: "Les signes",
      titre: "Les signes d'un management toxique dans une PME",
      blocs: [
        {
          type: "p",
          texte:
            "Dans une petite structure, le dirigeant voit rarement la scène elle-même. Il en voit les conséquences, souvent déformées. Les signaux se lisent donc à deux niveaux : les comportements du manager, et ce qui se passe dans l'équipe autour de lui.",
        },
        {
          type: "h3",
          texte: "Ce que décrit l'INRS",
        },
        {
          type: "p",
          texte:
            "Sur sa page [Harcèlement moral et violence interne : exemples d'exposition aux risques et facteurs de risque](https://www.inrs.fr/risques/harcelements-violences-internes/exemples-exposition-facteurs-risque.html), l'INRS cite des formes très concrètes : propos désobligeants, insinuations, humiliations, brimades, insultes, mises à l'écart, critiques abusives sur le travail, sabotage. Il décrit aussi un cas typique : un supérieur qui alourdit progressivement la charge d'un salarié, lui répète qu'il n'est « pas à la hauteur », puis cesse de lui parler et l'isole de ses collègues.",
        },
        {
          type: "tableau",
          entetes: ["Ce que fait le manager", "Ce que vous voyez dans l'équipe"],
          lignes: [
            [
              "Critique en public, ironise, humilie",
              "Des salariés qui ne prennent plus la parole en réunion",
            ],
            [
              "Change les consignes sans prévenir, puis reproche de ne pas les avoir suivies",
              "Des erreurs en hausse et des personnes qui demandent tout par écrit",
            ],
            [
              "Retient l'information, décide seul, court-circuite",
              "Une équipe qui attend au lieu d'agir, des doublons, des tensions entre services",
            ],
            [
              "Isole une personne : réunions sans elle, courriels sans réponse",
              "Un salarié qui se replie, des arrêts qui se répètent sur le même poste",
            ],
            [
              "Reprend à son compte le travail des autres",
              "Des départs de profils solides, sans explication claire à l'entretien de sortie",
            ],
          ],
        },
        {
          type: "h3",
          texte: "Le signal le plus fiable : la concentration",
        },
        {
          type: "p",
          texte:
            "Un départ, un arrêt, une plainte isolée ne prouvent rien. En revanche, quand les départs, les arrêts de travail ou les demandes de mutation se concentrent sous le même responsable, le signal devient sérieux. C'est une donnée que vous pouvez suivre sans accuser personne : il suffit de regarder vos indicateurs RH par équipe plutôt qu'en moyenne.",
        },
      ],
    },

    {
      label: "Le droit",
      titre: "Management toxique ou harcèlement moral : où passe la frontière",
      blocs: [
        {
          type: "p",
          texte:
            "Nous ne sommes pas avocats, et ce qui suit ne remplace pas un conseil juridique. Mais tout dirigeant doit connaître le moment où un problème de management devient une infraction, car c'est aussi le moment où sa propre responsabilité d'employeur est engagée.",
        },
        {
          type: "h3",
          texte: "La définition légale du harcèlement moral",
        },
        {
          type: "p",
          texte:
            "L'[article L1152-1 du Code du travail](https://code.travail.gouv.fr/code-du-travail/l1152-1) pose qu'aucun salarié ne doit subir les agissements répétés de harcèlement moral qui ont pour objet ou pour effet une dégradation de ses conditions de travail susceptible de porter atteinte à ses droits et à sa dignité, d'altérer sa santé physique ou mentale ou de compromettre son avenir professionnel. Deux mots comptent : « répétés » et « effet ». **L'intention du manager n'est pas nécessaire : c'est l'effet sur le salarié qui compte.** La fiche [Harcèlement moral](https://www.service-public.gouv.fr/particuliers/vosdroits/F2354) de service-public.fr le rappelle, et précise que l'interdiction vaut même sans lien hiérarchique entre les personnes.",
        },
        {
          type: "h3",
          texte: "Le harcèlement managérial reconnu par la Cour de cassation",
        },
        {
          type: "p",
          texte:
            "Dans un [arrêt du 10 novembre 2009 (n° 07-45.321)](https://www.legifrance.gouv.fr/juri/id/JURITEXT000021270312/), la chambre sociale de la Cour de cassation a jugé que des méthodes de gestion mises en œuvre par un supérieur hiérarchique peuvent caractériser un harcèlement moral, dès lors qu'elles se manifestent pour un salarié par des agissements répétés ayant ces effets. Les faits retenus ressemblent à la liste d'un management toxique ordinaire : pressions continuelles, reproches incessants, ordres contradictoires, isolement, mépris affiché, communication par voie d'affichage plutôt que de vive voix.",
        },
        {
          type: "h3",
          texte: "Les sanctions et les recours",
        },
        {
          type: "p",
          texte:
            "Sur le plan pénal, l'[article 222-33-2 du Code pénal](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000029336939) punit le harcèlement moral au travail de deux ans d'emprisonnement et de 30 000 € d'amende. Selon service-public.fr, la victime peut saisir l'inspection du travail, le conseil de prud'hommes ou porter plainte, dans un délai de six ans à compter du dernier fait. Côté employeur, l'[article L1152-4](https://code.travail.gouv.fr/code-du-travail/l1152-4) impose de prendre toutes dispositions nécessaires pour prévenir ces agissements, et l'article L4121-1 de protéger la santé physique et mentale des travailleurs.",
        },
        {
          type: "encadre",
          titre: "Qualifier n'est pas votre rôle",
          texte:
            "Dire qu'il y a harcèlement moral relève d'un juge, pas du dirigeant ni d'un consultant. Votre rôle est d'agir sans attendre cette qualification. Dès qu'une situation sérieuse vous est signalée, faites-vous conseiller par un avocat en droit social avant toute enquête interne ou sanction.",
        },
      ],
    },

    {
      label: "Les causes",
      titre: "Pourquoi une organisation fabrique des managers toxiques",
      blocs: [
        {
          type: "p",
          texte:
            "La tentation est de chercher un coupable. Parfois il y en a un. Mais dans la majorité des situations que décrivent les organismes de prévention, le comportement toxique pousse sur un terrain favorable. Si vous remplacez la personne sans changer le terrain, le problème revient avec le successeur.",
        },
        {
          type: "h3",
          texte: "Un cadre flou et des consignes contradictoires",
        },
        {
          type: "p",
          texte:
            "Parmi les facteurs de risque organisationnels, l'INRS cite le flou sur les rôles et la répartition des tâches, les consignes formelles et informelles contradictoires, les critères d'évaluation qui se contredisent d'une fonction à l'autre et l'iniquité de traitement. Un manager qui ne sait pas lui-même ce qu'on attend de lui transmet cette incertitude, souvent sous forme de pression. Un [organigramme d'entreprise](/infos-utiles/organigramme-entreprise/) qui dessine des cases sans dire qui décide quoi laisse précisément ce flou s'installer.",
        },
        {
          type: "h3",
          texte: "Des managers promus sans y avoir été préparés",
        },
        {
          type: "p",
          texte:
            "Dans beaucoup de PME, on devient chef d'équipe parce qu'on était le meilleur technicien. Personne n'a expliqué comment recadrer sans humilier, ni comment dire non à la direction. Le manager reproduit alors ce qu'il a connu, ou ce qu'il croit que l'on attend de lui : de la fermeté, parfois jusqu'à la dureté.",
        },
        {
          type: "h3",
          texte: "Une pression qui descend sans soutien",
        },
        {
          type: "p",
          texte:
            "L'étude de l'Apec [Cadres et management : une relation paradoxale, entre satisfaction et désaffection](https://corporate.apec.fr/files/live/sites/corporate/files/Nos%20etudes/PDF/Cadres%20et%20management.pdf), publiée en janvier 2026, relève que 51 % des cadres managers déclarent travailler régulièrement sous pression, contre 36 % des cadres non-managers. Un manager sous pression sans soutien et sans contre-pouvoir, dans une organisation où personne ne regarde comment les résultats sont obtenus, a toutes les chances de faire redescendre cette pression sur son équipe.",
        },
      ],
    },

    {
      label: "Le coût",
      titre: "Ce que le management toxique coûte réellement à l'entreprise",
      blocs: [
        {
          type: "p",
          texte:
            "Beaucoup de dirigeants tolèrent un manager difficile parce qu'il « tient » son service. Le calcul est presque toujours faux, car les coûts sont diffus et arrivent en retard.",
        },
        {
          type: "h3",
          texte: "Un risque répandu, mesuré depuis longtemps",
        },
        {
          type: "p",
          texte:
            "Selon l'enquête Sumer 2017 de la Dares, citée par l'INRS, 15 % des salariés déclaraient subir des comportements hostiles au travail, contre 22 % en 2010. Le recul est réel, mais le niveau reste élevé : rapporté à une équipe de quinze personnes, cela ferait en moyenne deux salariés. Parmi les facteurs de risques psychosociaux, l'INRS classe les [rapports sociaux au travail dégradés](https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html), dont les relations avec la hiérarchie et l'attention portée au bien-être des salariés.",
        },
        {
          type: "h3",
          texte: "Santé, départs, qualité",
        },
        {
          type: "p",
          texte:
            "L'Inspection générale des affaires sociales, dans son rapport de mars 2025 [Pratiques managériales dans les entreprises et politiques sociales en France](https://www.igas.gouv.fr/pratiques-manageriales-dans-les-entreprises-et-politiques-sociales-en-france-les-enseignements-dune-comparaison-internationale-allemagne-irlande-italie-suede-et-de-la-recherche), souligne que la qualité du management agit sur la santé des salariés, la qualité de l'emploi et la qualité du travail. Concrètement, pour une PME, cela se traduit par des arrêts qui désorganisent les plannings, des départs de personnes clés qu'il faut remplacer et former, des erreurs qui touchent les clients, et un climat qui rend le recrutement plus difficile.",
        },
        {
          type: "h3",
          texte: "Le coût invisible : ce qui ne remonte plus",
        },
        {
          type: "p",
          texte:
            "Le coût le plus lourd ne figure dans aucun tableau : l'information qui ne vous parvient plus. Une équipe qui a peur ne signale ni les problèmes de qualité, ni les clients mécontents, ni les idées d'amélioration. Vous pilotez alors sur des remontées filtrées, et vous découvrez les difficultés quand elles sont devenues des crises.",
        },
      ],
    },

    {
      label: "Agir",
      titre: "Manager toxique dans votre équipe : que faire, pas à pas",
      blocs: [
        {
          type: "p",
          texte:
            "Quand un signalement arrive, ou quand les signaux s'accumulent, le pire est d'attendre que cela se tasse. Le second pire est d'agir dans la précipitation. Voici un ordre qui protège à la fois les salariés, l'entreprise et le manager mis en cause, qui a droit à une procédure loyale.",
        },
        {
          type: "tableau",
          entetes: ["Étape", "Ce que vous faites concrètement"],
          lignes: [
            [
              "1. Écouter sans juger",
              "Recevoir la personne qui signale, noter les faits datés, la remercier, ne rien promettre sur l'issue",
            ],
            [
              "2. Protéger",
              "Éviter tout contact imposé entre les personnes concernées le temps d'y voir clair, et orienter vers le médecin du travail",
            ],
            [
              "3. Vous faire conseiller",
              "Prendre l'avis d'un avocat en droit social avant toute enquête ou mesure, et associer le CSE s'il existe",
            ],
            [
              "4. Établir les faits",
              "Entendre les personnes concernées et les témoins, avec une méthode écrite, contradictoire et confidentielle",
            ],
            [
              "5. Décider",
              "Selon les faits : sanction, changement de poste, ou accompagnement du manager avec des objectifs de comportement vérifiables",
            ],
            [
              "6. Corriger les causes",
              "Rôles, charge, consignes, soutien : traiter ce qui a rendu le comportement possible",
            ],
          ],
        },
        {
          type: "h3",
          texte: "Parler au manager concerné",
        },
        {
          type: "p",
          texte:
            "Quand les faits ne relèvent pas d'une procédure disciplinaire, l'entretien avec le manager reste décisif. Décrivez des comportements précis et leurs effets, pas un jugement sur sa personnalité. Évitez les étiquettes psychologiques : vous n'êtes pas en position de poser un diagnostic, et le mot enferme au lieu de permettre le changement. Fixez des attentes observables et un rendez-vous pour en reparler.",
        },
        {
          type: "h3",
          texte: "Accompagner, et vérifier",
        },
        {
          type: "p",
          texte:
            "Un manager qui reconnaît le problème peut changer, à condition d'être accompagné et suivi. Un [coaching en management](/infos-utiles/coaching-en-management/) travaille ses pratiques sur des situations réelles. Mais l'accompagnement ne remplace pas la vérification : demandez régulièrement à l'équipe comment les choses évoluent, par des moyens qui protègent la parole.",
        },
        {
          type: "encadre",
          titre: "Si quelqu'un va mal",
          texte:
            "Un salarié peut demander à tout moment à voir le médecin du travail : selon l'INRS, tout salarié peut bénéficier d'un examen à sa demande ou à celle de l'employeur. Le médecin traitant reste l'interlocuteur pour la santé. En cas de détresse ou d'idées suicidaires, le 3114 répond gratuitement, 24 h/24 et 7 j/7 ; en cas de danger immédiat, le 15. Le 116 006 aide gratuitement les victimes d'infractions.",
        },
      ],
    },

    {
      label: "Miroir",
      titre: "Et si le management toxique venait du sommet ?",
      blocs: [
        {
          type: "p",
          texte:
            "C'est la question la plus inconfortable de cet article, et elle mérite d'être posée franchement. Dans une PME, le style du dirigeant donne le ton à toute la ligne managériale. Un dirigeant épuisé, pris dans l'urgence, peut adopter sans s'en rendre compte des comportements qu'il reprocherait à ses managers.",
        },
        {
          type: "h3",
          texte: "Quelques questions honnêtes",
        },
        {
          type: "liste",
          items: [
            "Vous arrive-t-il de reprendre un collaborateur devant les autres, sous le coup de l'agacement ?",
            "Vos priorités changent-elles d'une semaine à l'autre sans que vous l'expliquiez ?",
            "Les réunions se terminent-elles sans objection, puis les désaccords reviennent-ils en couloir ?",
            "Quelqu'un dans l'entreprise peut-il vous dire que vous vous trompez, sans risque ?",
          ],
        },
        {
          type: "h3",
          texte: "La fatigue est un facteur, pas une excuse",
        },
        {
          type: "p",
          texte:
            "La surcharge durcit n'importe qui. Si vous vous reconnaissez dans ces questions et que vous êtes à bout, commencez par votre santé : les [signes du burn-out](/infos-utiles/signes-du-burn-out/) se montrent à un médecin, pas à un consultant. Ensuite seulement vient le travail sur la fonction : ce que vous portez seul, ce que vous pourriez déléguer, la manière dont vous décidez. **Changer sa façon de diriger n'est pas un aveu de faute : c'est la seule preuve crédible, pour vos managers, que le cadre a changé.**",
        },
      ],
    },

    {
      label: "Prévenir",
      titre: "Prévenir le management toxique : un cadre plutôt qu'une chasse",
      blocs: [
        {
          type: "p",
          texte:
            "La prévention ne consiste pas à surveiller les managers. Elle consiste à leur donner un cadre qui rend la toxicité improbable et visible. L'INRS insiste sur une démarche centrée sur l'analyse du travail réel plutôt que sur les comportements individuels, et intégrée au document unique d'évaluation des risques.",
        },
        {
          type: "h3",
          texte: "Les neuf conseils de l'INRS aux managers",
        },
        {
          type: "p",
          texte:
            "Dans sa brochure [Risques psychosociaux. 9 conseils pour agir au quotidien](https://www.inrs.fr/media.html?refINRS=ED+6250), destinée aux dirigeants et à l'encadrement, l'INRS recommande notamment d'évaluer la charge de travail, d'accorder de l'autonomie, de soutenir les collaborateurs, de témoigner de la reconnaissance, de donner du sens au travail, de communiquer sur les changements et de proscrire toute forme de violence. Aucun de ces conseils n'est spectaculaire. Tous supposent un dirigeant qui en fait un critère d'évaluation de ses managers.",
        },
        {
          type: "h3",
          texte: "Ce que nous mettons en place avec un dirigeant",
        },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, un conseiller référent prend le sujet en charge, avec un périmètre arrêté avec vous et écrit dans la proposition. Le travail commence souvent par l'étape Aligner, pour clarifier vos priorités et votre propre manière de décider. Il se poursuit par l'étape Coopérer : des cercles d'avancée de 6 à 8 personnes, en sessions de trois heures, où managers et dirigeant travaillent sur des situations réelles, y compris celles qui fâchent. On ne touche pas à ce qui fonctionne ; on installe des règles de décision claires et un droit à la contradiction.",
        },
        {
          type: "p",
          texte:
            "Si vous ne savez pas encore si le problème tient à une personne, à votre organisation ou à la charge que vous portez, commencez par un [diagnostic d'entreprise](/diagnostic/) : il aide à situer le nœud avant de choisir le remède.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Comment reconnaître un management toxique ?",
      r: [
        "À ses effets durables sur les personnes plus qu'à un comportement isolé : critiques humiliantes, consignes contradictoires, pression sans moyens, rétention d'information, mise à l'écart d'un salarié. Dans l'équipe, cela se traduit par du silence en réunion, des erreurs en hausse, des arrêts et des départs qui se concentrent sous le même responsable. C'est cette concentration, plus qu'un incident, qui doit alerter le dirigeant.",
      ],
    },
    {
      q: "Le management toxique est-il du harcèlement moral ?",
      r: [
        "Pas toujours, mais il peut le devenir. Le harcèlement moral suppose des agissements répétés qui dégradent les conditions de travail et peuvent porter atteinte aux droits, à la dignité, à la santé ou à l'avenir professionnel du salarié. Depuis un arrêt du 10 novembre 2009, la Cour de cassation admet que des méthodes de gestion peuvent le caractériser. Seul un juge qualifie les faits ; un avocat en droit social vous aide à les évaluer.",
      ],
    },
    {
      q: "Que risque un employeur qui laisse faire un manager toxique ?",
      r: [
        "L'employeur doit prévenir le harcèlement moral (article L1152-4 du Code du travail) et protéger la santé physique et mentale des salariés (article L4121-1). S'il laisse une situation se dégrader, il peut voir sa responsabilité engagée devant le conseil de prud'hommes. L'auteur du harcèlement encourt, lui, deux ans d'emprisonnement et 30 000 € d'amende. Agir tôt, avec un conseil juridique, protège tout le monde.",
      ],
    },
    {
      q: "Comment réagir face à un manager toxique quand on est salarié ?",
      r: [
        "Notez les faits datés et précis, conservez les écrits, et parlez-en à la direction, aux ressources humaines ou aux représentants du personnel. Vous pouvez demander à voir le médecin du travail à tout moment. Service-public.fr cite aussi l'inspection du travail et le conseil de prud'hommes. Si vous allez mal, consultez votre médecin traitant ; en cas de détresse, le 3114 répond gratuitement 24 h/24.",
      ],
    },
    {
      q: "Un manager toxique peut-il changer ?",
      r: [
        "Oui, s'il reconnaît le problème et si l'organisation change aussi. Un coaching travaille ses pratiques sur des situations réelles, avec des objectifs de comportement observables et un suivi régulier auprès de l'équipe. Si les faits relèvent d'un harcèlement ou si rien ne change malgré l'accompagnement, la protection des salariés passe avant : sanction ou changement de poste, décidés avec un avocat.",
      ],
    },
  ],

  sources: [
    {
      titre:
        "Harcèlement moral et violence interne : exemples d'exposition aux risques et facteurs de risque",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/harcelements-violences-internes/exemples-exposition-facteurs-risque.html",
    },
    {
      titre: "Prévenir les risques psychosociaux (RPS) : facteurs de risque",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html",
    },
    {
      titre: "Prévenir les risques psychosociaux (RPS) : prévention",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/prevention.html",
    },
    {
      titre: "Risques psychosociaux. 9 conseils pour agir au quotidien (ED 6250)",
      editeur: "INRS",
      url: "https://www.inrs.fr/media.html?refINRS=ED+6250",
    },
    {
      titre: "Prévention médicale. Ce qu'il faut retenir",
      editeur: "INRS",
      url: "https://www.inrs.fr/demarche/prevention-medicale/ce-qu-il-faut-retenir.html",
    },
    {
      titre: "L1152-1 - Code du travail numérique",
      editeur: "Ministère du Travail",
      url: "https://code.travail.gouv.fr/code-du-travail/l1152-1",
    },
    {
      titre: "L1152-4 - Code du travail numérique",
      editeur: "Ministère du Travail",
      url: "https://code.travail.gouv.fr/code-du-travail/l1152-4",
    },
    {
      titre: "L4121-1 - Code du travail numérique",
      editeur: "Ministère du Travail",
      url: "https://code.travail.gouv.fr/code-du-travail/l4121-1",
    },
    {
      titre: "Article 222-33-2 - Code pénal",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000029336939",
    },
    {
      titre:
        "Cour de cassation, civile, Chambre sociale, 10 novembre 2009, 07-45.321, Publié au bulletin",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/juri/id/JURITEXT000021270312/",
    },
    {
      titre: "Harcèlement moral",
      editeur: "Service-Public.fr",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2354",
    },
    {
      titre:
        "Pratiques managériales dans les entreprises et politiques sociales en France : les enseignements d'une comparaison internationale (Allemagne, Irlande, Italie, Suède) et de la recherche",
      editeur: "Inspection générale des affaires sociales (Igas)",
      url: "https://www.igas.gouv.fr/pratiques-manageriales-dans-les-entreprises-et-politiques-sociales-en-france-les-enseignements-dune-comparaison-internationale-allemagne-irlande-italie-suede-et-de-la-recherche",
    },
    {
      titre: "Cadres et management : une relation paradoxale, entre satisfaction et désaffection",
      editeur: "Apec",
      url: "https://corporate.apec.fr/files/live/sites/corporate/files/Nos%20etudes/PDF/Cadres%20et%20management.pdf",
    },
    {
      titre: "Numéro national de prévention du suicide - 3114",
      editeur: "3114, piloté par le ministère chargé de la santé",
      url: "https://3114.fr/",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2026-11-16",
  accent: "organisation",
  pilier: { href: "/transformation-dirigeant/", ancre: "coaching dirigeant" },

  valide: true,
};
