import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 2, transformation de l'entreprise. Signé Muriel Saffroy.
 * Requête : « accompagner le changement » (590/mois, KD 8). Secondaires :
 * « change management » (440), « accompagnement au changement » (390).
 *
 * Périmètre : la méthode pour accompagner un changement dans une PME. La courbe
 * du changement (article du 31/05/2027) et le droit de la réorganisation (article
 * du 26/04/2027) ont leurs propres articles : ils ne sont qu'effleurés ici, et
 * NON liés (publication postérieure).
 *
 * POINTS SENSIBLES :
 * - Chiffres DARES (enquête Conditions de travail 2013) : les pages de la DARES
 *   sont protégées par un contrôle anti-robot et n'ont pas pu être ouvertes le
 *   24/09/2026. Les chiffres sont repris de l'article de franceinfo qui rend
 *   compte de l'étude, lien posé vers franceinfo. À remplacer par le lien DARES
 *   si l'auteur peut l'ouvrir.
 * - Droit du travail (CSE) : articles L2312-8 et L2312-14 vérifiés sur Légifrance
 *   et le Code du travail numérique le 24/09/2026. Rester général, renvoyer vers
 *   un avocat en droit social pour les cas concrets.
 */
export const article: Article = {
  slug: "accompagnement-au-changement",

  motCle: "accompagner le changement (590/mois, KD 8) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "change management (440/mois)",
    "accompagnement au changement (390/mois)",
    "conduite du changement en PME",
    "résistance au changement",
  ],

  // 39 / 42
  metaTitle: "Accompagner le changement : méthode PME",
  // 148 / 150
  metaDescription:
    "Accompagner le changement en PME : pourquoi les équipes résistent, ce que dit le droit, six étapes pour qu'une transformation tienne sur le terrain.",

  h1: "Accompagner le changement en PME : embarquer les équipes sans passer en force",

  chapo:
    "Accompagner le changement, ce n'est pas mieux annoncer une décision déjà prise. C'est donner aux personnes qui vont vivre la transformation les moyens de la comprendre, d'y peser et de s'y retrouver. Dans une PME, la différence se mesure vite : un changement imposé se contourne en silence, un changement accompagné s'installe. Les données publiques vont dans le même sens : des salariés informés et consultés vivent beaucoup mieux les réorganisations. La méthode tient en quelques principes simples, dont le plus exigeant concerne le dirigeant lui-même : décider ce qui change, et laisser l'équipe construire comment.",

  essentiel: {
    reponse:
      "Accompagner le changement consiste à préparer, associer et soutenir les personnes concernées par une transformation de l'entreprise, pour qu'elles se l'approprient au lieu de la subir. L'enquête Conditions de travail de la DARES montre qu'en 2013, 39 % des salariés avaient connu au moins un changement important dans leur environnement de travail, et que ceux qui avaient été informés et écoutés présentaient nettement moins de symptômes dépressifs. Dans les entreprises d'au moins 50 salariés, le CSE doit en outre être consulté avant les décisions touchant l'organisation.",
    points: [
      "Un changement accompagné se prépare avec les équipes, pas seulement pour elles",
      "La résistance au changement est une information sur le projet, pas un défaut des personnes",
      "Six étapes : le pourquoi, la cartographie des impacts, la participation, les managers, l'essai, l'ancrage",
      "Au-delà de 50 salariés, la consultation du CSE précède la décision de l'employeur",
      "Le dirigeant fixe le cap ; les équipes construisent la façon d'y aller",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Accompagnement au changement : de quoi parle-t-on ?",
      blocs: [
        {
          type: "p",
          texte:
            "Un nouveau logiciel de gestion, un atelier réorganisé, un service qui fusionne avec un autre, un déménagement, l'arrivée d'un directeur général, la préparation d'une transmission : toutes ces décisions ont un point commun. **Elles changent la façon dont des personnes font leur travail tous les jours, et c'est là que se joue leur réussite, pas dans la salle de réunion où elles ont été prises.**",
        },
        {
          type: "h3",
          texte: "Change management, conduite du changement, accompagnement : trois mots, une nuance",
        },
        {
          type: "p",
          texte:
            "Le change management, terme venu des grands groupes anglo-saxons, désigne la discipline dans son ensemble : méthodes, outils, rôles. La conduite du changement en est la version française, souvent tournée vers le pilotage du projet : planning, communication, formation. L'accompagnement au changement met l'accent sur les personnes : ce qu'elles perdent, ce qu'elles gagnent, ce dont elles ont besoin pour passer d'une façon de travailler à une autre. Dans une PME, les trois se confondent en pratique, parce que ce sont les mêmes personnes qui pilotent le projet et vivent ses conséquences.",
        },
        {
          type: "h3",
          texte: "Ce qui change vraiment dans une PME",
        },
        {
          type: "p",
          texte:
            "Dans une entreprise de 10 à 250 salariés, il n'y a pas de direction de la transformation, rarement de responsable des ressources humaines à plein temps, et chacun connaît le dirigeant. Un changement y est donc toujours personnel. Les équipes ne se demandent pas seulement si le projet est bon ; elles se demandent ce que le dirigeant pense d'elles en le lançant. C'est pourquoi un [conseil en organisation](/transformation-entreprise/) sérieux commence par regarder le fonctionnement réel de l'entreprise avant de proposer quoi que ce soit : on n'accompagne bien que ce que l'on a compris.",
        },
      ],
    },

    {
      label: "Les enjeux",
      titre: "Pourquoi accompagner le changement plutôt que l'annoncer",
      blocs: [
        {
          type: "p",
          texte:
            "Beaucoup de dirigeants de PME considèrent l'accompagnement comme un luxe de grand groupe. Le projet est bon, l'équipe est raisonnable, elle suivra. C'est souvent vrai sur le papier, et presque toujours faux dans le détail : le changement annoncé se heurte à cent petites habitudes que personne n'avait décrites.",
        },
        {
          type: "h3",
          texte: "Un effet mesurable sur la santé des salariés",
        },
        {
          type: "p",
          texte:
            "L'enquête Conditions de travail de la DARES, dont les résultats sur les changements organisationnels sont résumés par [franceinfo](https://www.franceinfo.fr/sante/patient/droits-et-demarches/sante-au-travail-impliquer-les-salaries-dans-les-decisions-serait-benefique_2389048.html), apporte des repères précis. En 2013, 39 % des salariés avaient connu au moins un changement important. Parmi eux, 14 % présentaient un symptôme dépressif, contre 9 % chez les autres. Seuls 56 % estimaient avoir reçu une information suffisante, et 17 % avoir eu une influence sur la mise en œuvre.",
        },
        {
          type: "p",
          texte:
            "**Le chiffre qui compte le plus est celui-ci : 6 % des salariés informés, consultés et écoutés présentaient des symptômes dépressifs, contre 21 % de ceux qui n'avaient été ni informés ni consultés.** Ce n'est donc pas seulement le changement qui pèse : c'est aussi la façon de le conduire. Ces données datent de 2013 : retenez-en l'ordre de grandeur plus que la décimale.",
        },
        {
          type: "h3",
          texte: "L'insécurité, un facteur de risque reconnu",
        },
        {
          type: "p",
          texte:
            "L'INRS classe l'insécurité de la situation de travail parmi les [six familles de facteurs de risques psychosociaux](https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html), et y range explicitement les restructurations et l'incertitude sur l'avenir. Un changement mal expliqué n'est donc pas seulement un projet qui avance moins vite : c'est une source de risque que l'employeur doit évaluer comme les autres. L'institut recommande de le faire précisément au moment d'un projet de modification importante de l'organisation du travail.",
        },
        {
          type: "h3",
          texte: "Un coût économique rarement compté",
        },
        {
          type: "p",
          texte:
            "Un projet que l'équipe n'a pas fait sien coûte deux fois : une première fois pour le déployer, une seconde pour le faire fonctionner malgré les contournements. Les tableurs parallèles qui survivent au nouveau logiciel, les anciennes procédures appliquées « en attendant », les départs de personnes clés qui ne se sont pas reconnues dans la nouvelle organisation : aucun de ces coûts n'apparaît dans le budget initial du projet.",
        },
      ],
    },

    {
      label: "Les résistances",
      titre: "Ce que la résistance au changement dit vraiment",
      blocs: [
        {
          type: "p",
          texte:
            "La résistance au changement a mauvaise presse. On la décrit comme de l'inertie, de la peur, parfois de la mauvaise volonté. **En pratique, elle est d'abord une information : elle vous dit ce que le projet a oublié.** Un opérateur qui refuse le nouveau poste de travail a peut-être vu un problème de sécurité que le plan ne montrait pas. Un responsable qui traîne des pieds a peut-être compris qu'il perd, sans que personne le lui dise, la moitié de son périmètre.",
        },
        {
          type: "tableau",
          entetes: ["Ce que vous entendez", "Ce que cela signifie souvent, et comment y répondre"],
          lignes: [
            [
              "« On a toujours fait comme ça, et ça marche »",
              "La crainte de perdre une compétence reconnue. Montrer ce qui est conservé, et ce que la personne saura faire demain",
            ],
            [
              "« Personne ne nous a demandé notre avis »",
              "Un besoin de participation. Associer au « comment », même si le « quoi » est décidé",
            ],
            [
              "« Encore un projet qui ne durera pas »",
              "Une fatigue des changements précédents. Dire ce qui a échoué la dernière fois, et ce qui sera différent",
            ],
            [
              "« Ça ne marchera pas chez nous »",
              "Parfois une objection fondée. L'examiner sérieusement, et la tester sur un périmètre réduit",
            ],
            [
              "Le silence, puis le contournement",
              "Une perte de confiance. Revenir sur le terrain, écouter en tête-à-tête, avant toute nouvelle annonce",
            ],
          ],
        },
        {
          type: "h3",
          texte: "Distinguer le désaccord de l'inquiétude",
        },
        {
          type: "p",
          texte:
            "Le désaccord porte sur le projet ; il se traite avec des arguments, des données, parfois une modification du plan. L'inquiétude porte sur la place de chacun ; elle se traite avec des réponses personnelles, pas avec une présentation de plus. Confondre les deux conduit à répondre à une peur par un argumentaire, ce qui l'aggrave presque toujours.",
        },
        {
          type: "h3",
          texte: "Les passages attendus",
        },
        {
          type: "p",
          texte:
            "Les modèles classiques décrivent un enchaînement assez régulier : surprise, refus, découragement, puis exploration et appropriation. Ils ont leurs limites, et chacun ne passe pas par toutes les phases au même rythme. Retenez-en l'essentiel : un creux après l'annonce est normal, il ne signe pas l'échec du projet, et c'est pendant ce creux que l'accompagnement compte le plus.",
        },
      ],
    },

    {
      label: "La méthode",
      titre: "Accompagner le changement en six étapes",
      blocs: [
        {
          type: "p",
          texte:
            "Il n'existe pas de méthode universelle, mais les démarches qui tiennent partagent la même ossature. La voici, ramenée à la taille d'une PME.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Dire pourquoi, et ce qui ne change pas.** La raison du changement, en une phrase compréhensible par tous, et la liste de ce qui reste en place.",
            "**Cartographier qui est touché, et comment.** Poste par poste, ce qui change dans le travail réel : outils, horaires, interlocuteurs, marges de décision.",
            "**Associer avant de décider le détail.** Faire construire le « comment » par ceux qui feront le travail, et consulter les représentants du personnel quand la loi l'exige.",
            "**Équiper les managers.** Ils répondent aux questions avant vous ; ils doivent avoir compris le projet, et avoir pu le discuter.",
            "**Essayer à petite échelle.** Une équipe, un atelier, un mois : corriger avant de généraliser.",
            "**Ancrer et mesurer.** Retirer l'ancienne façon de faire, suivre quelques indicateurs, et reconnaître ceux qui ont porté la transition.",
          ],
        },
        {
          type: "h3",
          texte: "Dire ce qui ne change pas",
        },
        {
          type: "p",
          texte:
            "C'est l'étape la plus souvent oubliée, et la plus rassurante. Une équipe à qui l'on annonce une réorganisation imagine que tout va bouger. Lui dire clairement que les horaires, le site, les équipes ou le mode de rémunération restent identiques libère l'attention pour ce qui change vraiment. **Un changement bien borné se discute ; un changement sans limites se redoute.**",
        },
        {
          type: "h3",
          texte: "Cartographier le travail réel",
        },
        {
          type: "p",
          texte:
            "L'organigramme dit qui rend compte à qui ; il ne dit pas qui dépanne qui, ni par où passe réellement l'information. Si vous devez redessiner les rattachements, prenez le temps de [faire un organigramme](/infos-utiles/organigramme-entreprise/) qui corresponde au fonctionnement réel avant de dessiner le futur. Sans cette cartographie, le projet casse des liens informels que personne n'avait vus, et c'est souvent là que la production souffre les premières semaines.",
        },
        {
          type: "h3",
          texte: "Associer les équipes, et respecter le droit",
        },
        {
          type: "p",
          texte:
            "L'INRS, dans ses [recommandations de prévention des risques psychosociaux](https://www.inrs.fr/risques/psychosociaux/prevention.html), invite à donner aux salariés la possibilité de participer aux actions de changement qui affecteront leur travail. C'est aussi une question de droit. Dans les entreprises d'au moins 50 salariés, le comité social et économique est informé et consulté sur les questions intéressant l'organisation, la gestion et la marche générale de l'entreprise, notamment sur la modification de son organisation économique ou juridique et sur les conditions de travail ([article L2312-8 du Code du travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975196)). L'[article L2312-14](https://code.travail.gouv.fr/code-du-travail/l2312-14) précise que les décisions de l'employeur sont précédées de cette consultation.",
        },
        {
          type: "encadre",
          titre: "Un point de vigilance juridique",
          texte:
            "Le périmètre exact des consultations obligatoires, leurs délais et les documents à fournir dépendent de l'effectif et du projet. Avant d'annoncer une réorganisation, faites valider le calendrier par un avocat en droit social ou par votre conseil habituel. Consulter après avoir décidé expose l'entreprise à un contentieux et, surtout, vide la consultation de son sens.",
        },
      ],
    },

    {
      label: "Les rôles",
      titre: "Dirigeant et managers : qui porte la conduite du changement ?",
      blocs: [
        {
          type: "h3",
          texte: "Le dirigeant fixe le cap, et s'y tient",
        },
        {
          type: "p",
          texte:
            "Dans une PME, le dirigeant est le premier signal. Si le projet est présenté avec conviction puis abandonné au premier incident, l'équipe apprend qu'il suffit d'attendre. Si le dirigeant contourne lui-même la nouvelle règle « juste pour cette fois », tout le monde le fera. Son rôle n'est pas de tout expliquer lui-même, mais de rester constant sur le pourquoi, de trancher les arbitrages et de protéger le temps nécessaire à la transition.",
        },
        {
          type: "h3",
          texte: "Les managers, premiers concernés et derniers accompagnés",
        },
        {
          type: "p",
          texte:
            "Les managers de proximité portent le changement devant les équipes tout en le vivant eux-mêmes. On leur demande de rassurer avant qu'ils aient été rassurés. C'est pourquoi ils doivent découvrir le projet avant les autres, avoir pu poser leurs questions et exprimer leurs doutes, et disposer d'une vraie marge pour adapter la mise en œuvre à leur équipe. Un manager qui répète un message auquel il ne croit pas se repère en quelques minutes.",
        },
        {
          type: "h3",
          texte: "Des décisions redistribuées",
        },
        {
          type: "p",
          texte:
            "Un changement réussi fait souvent évoluer qui décide quoi. Si, après la réorganisation, toutes les décisions continuent de remonter au dirigeant, le nouveau schéma ne tiendra pas. Les méthodes d'[intelligence collective en entreprise](/infos-utiles/intelligence-collective-en-entreprise/) sont précieuses à ce stade : elles permettent à une équipe de construire ses propres règles de fonctionnement, qu'elle respectera bien mieux que des règles reçues.",
        },
      ],
    },

    {
      label: "PME et grands groupes",
      titre: "Change management en PME : ce qui diffère des grands groupes",
      blocs: [
        {
          type: "p",
          texte:
            "Les méthodes de change management ont été écrites pour des organisations de plusieurs milliers de personnes. Les appliquer telles quelles à une entreprise de 60 salariés produit des plans de communication surdimensionnés et des comités de pilotage qui réunissent les mêmes cinq personnes que le comité de direction. La logique reste bonne ; l'échelle doit changer.",
        },
        {
          type: "tableau",
          entetes: ["Dans un grand groupe", "Dans une PME"],
          lignes: [
            [
              "Une équipe dédiée pilote la transformation",
              "Le dirigeant et deux ou trois cadres portent le projet en plus de leur travail",
            ],
            [
              "La communication passe par des canaux formels",
              "Elle passe par le terrain : réunions d'équipe, échanges à l'atelier, conversations individuelles",
            ],
            [
              "La distance avec la direction protège les personnes",
              "Chacun connaît le dirigeant : le changement est vécu comme personnel",
            ],
            [
              "Le projet peut absorber une période de flottement",
              "Une équipe désorganisée pendant trois mois se voit immédiatement dans le chiffre d'affaires",
            ],
            [
              "Les ressources de formation sont internes",
              "Elles sont à construire, souvent avec des partenaires extérieurs",
            ],
          ],
        },
        {
          type: "h3",
          texte: "L'atout des PME : la proximité",
        },
        {
          type: "p",
          texte:
            "La taille est aussi un avantage. Dans une PME, on peut réunir toute une équipe dans une pièce, écouter chacun, corriger le projet en une semaine. Ce que les grands groupes cherchent à reproduire à coups de dispositifs, la PME l'a naturellement, à condition de s'en servir : aller voir le travail là où il se fait, et prendre le temps d'écouter.",
        },
      ],
    },

    {
      label: "Les erreurs",
      titre: "Les erreurs qui font échouer un accompagnement au changement",
      blocs: [
        {
          type: "p",
          texte:
            "Les projets qui échouent se ressemblent davantage que ceux qui réussissent. Cinq erreurs reviennent dans la plupart d'entre eux.",
        },
        {
          type: "liste",
          items: [
            "**Tout changer en même temps.** Nouvel outil, nouveaux rattachements et nouveaux objectifs le même trimestre : l'équipe ne sait plus sur quoi s'appuyer.",
            "**Annoncer sans dire ce qui reste.** L'imagination de chacun comble le vide, rarement dans le bon sens.",
            "**Consulter pour la forme.** Une concertation dont les conclusions étaient écrites d'avance détruit la confiance plus sûrement qu'une absence de concertation.",
            "**Oublier les managers.** Ils découvrent le projet en même temps que leurs équipes et ne peuvent répondre à aucune question.",
            "**Crier victoire trop tôt.** Le nouvel outil est installé, le projet est clos, et l'ancienne façon de faire revient discrètement six mois plus tard.",
          ],
        },
        {
          type: "p",
          texte:
            "À ces erreurs s'ajoute une confusion fréquente : croire qu'un bon projet se défend tout seul. **Un projet juste mais mal conduit échoue plus souvent qu'un projet moyen bien accompagné**, parce que ce sont les personnes, pas le projet, qui font le travail le lundi matin.",
        },
      ],
    },

    {
      label: "Accompagnement",
      titre: "Se faire accompagner dans le changement : ce qu'un regard extérieur apporte",
      blocs: [
        {
          type: "p",
          texte:
            "Un regard extérieur n'est pas indispensable pour conduire un changement. Il devient utile quand le dirigeant est lui-même trop engagé dans le projet pour entendre les objections, quand les tensions internes empêchent une discussion franche, ou quand l'entreprise traverse plusieurs transformations à la fois.",
        },
        {
          type: "p",
          texte:
            "Chez Un Seul Souffle, un conseiller référent prend en charge votre sujet du début à la fin. Le travail commence par l'étape Cartographier : une lecture du fonctionnement réel de l'entreprise, par l'immersion terrain et les entretiens, pour comprendre où le changement va frotter avant de le lancer. Viennent ensuite Structurer, sur les chantiers retenus avec vous, puis Renforcer, pour que les équipes portent elles-mêmes la nouvelle organisation. Si un chantier touche la finance, le commercial ou la production, votre référent appelle l'expertise concernée, sur ce point et le temps de ce point.",
        },
        {
          type: "p",
          texte:
            "Le périmètre est écrit dans la proposition et ne s'élargit pas sans votre accord. **On ne touche pas à ce qui fonctionne : accompagner un changement, c'est aussi protéger ce qui marche déjà.** Pour savoir par où commencer, vous pouvez échanger avec [Muriel Saffroy](/muriel-saffroy/), référente organisation et coopération, ou faire d'abord un [diagnostic d'entreprise](/diagnostic/) pour situer les points de tension de votre organisation.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce que l'accompagnement au changement ?",
      r: [
        "C'est l'ensemble des actions qui aident les personnes concernées par une transformation à la comprendre, à y contribuer et à s'y adapter : explication du pourquoi, association des équipes à la mise en œuvre, soutien des managers, formation, période d'essai et suivi. Il se distingue de la simple communication, qui informe d'une décision déjà prise sans donner prise sur la façon de la réaliser.",
      ],
    },
    {
      q: "Quelle différence entre change management et conduite du changement ?",
      r: [
        "Les deux expressions désignent la même discipline. Le change management est le terme anglo-saxon, qui englobe méthodes, outils et rôles. La conduite du changement, en français, insiste souvent sur le pilotage du projet. L'accompagnement au changement met l'accent sur les personnes. Dans une PME, ces trois dimensions sont portées par les mêmes personnes et se confondent en pratique.",
      ],
    },
    {
      q: "Comment gérer la résistance au changement ?",
      r: [
        "En la traitant comme une information plutôt que comme un obstacle. Distinguez le désaccord, qui porte sur le projet et se discute avec des arguments, de l'inquiétude, qui porte sur la place de chacun et appelle des réponses personnelles. Associez les équipes au « comment », dites clairement ce qui ne change pas, et testez le projet sur un périmètre réduit avant de le généraliser.",
      ],
    },
    {
      q: "Faut-il consulter le CSE avant une réorganisation ?",
      r: [
        "Dans les entreprises d'au moins 50 salariés, oui : le CSE est informé et consulté sur les questions intéressant l'organisation et la marche générale de l'entreprise (article L2312-8 du Code du travail), et cette consultation précède la décision de l'employeur (article L2312-14). Le périmètre et les délais dépendent du projet : faites valider votre calendrier par un avocat en droit social.",
      ],
    },
    {
      q: "Combien de temps faut-il pour accompagner un changement ?",
      r: [
        "Cela dépend de l'ampleur du projet. Un nouvel outil sur une équipe peut s'installer en quelques semaines ; une réorganisation touchant plusieurs services demande souvent plusieurs mois, le temps que les nouvelles habitudes remplacent les anciennes. Un bon repère : le changement est acquis quand l'ancienne façon de faire a disparu d'elle-même, pas quand le projet est déclaré terminé.",
      ],
    },
  ],

  sources: [
    {
      titre: "Santé au travail : impliquer les salariés dans les décisions serait bénéfique",
      editeur: "franceinfo (résultats de l'enquête Conditions de travail de la DARES)",
      url: "https://www.franceinfo.fr/sante/patient/droits-et-demarches/sante-au-travail-impliquer-les-salaries-dans-les-decisions-serait-benefique_2389048.html",
    },
    {
      titre: "Prévenir les risques psychosociaux (RPS). Facteurs de risque",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html",
    },
    {
      titre: "Prévenir les risques psychosociaux (RPS). Prévention",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/prevention.html",
    },
    {
      titre: "Article L2312-8 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975196",
    },
    {
      titre: "L2312-14 - Code du travail numérique",
      editeur: "Ministère du Travail (Code du travail numérique)",
      url: "https://code.travail.gouv.fr/code-du-travail/l2312-14",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2027-01-04",
  accent: "organisation",
  pilier: { href: "/transformation-entreprise/", ancre: "conseil en organisation" },

  valide: false,
};
