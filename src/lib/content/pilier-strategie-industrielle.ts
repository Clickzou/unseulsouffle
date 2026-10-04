import type { PagePilier } from "@/lib/content/pilier";

/**
 * Silo 5b — Stratégie industrielle (master § 3, scindé le 04/10/2026).
 * Expert référent : Patrick Calvet, partenaire.
 * Source : texte de la cliente « Pages services Yohan Castelar et Patrick Calvet »
 * (04/10/2026), suivi fidèlement ; commentaires de rédaction retirés.
 *
 * LIGNE DE PARTAGE AVEC L'ORGANISATION INDUSTRIELLE (note interne de la cliente) :
 *   Patrick = « votre outil doit peut-être évoluer » (cap, capacité, investissements, sites…)
 *   Yohan   = « votre outil peut mieux fonctionner » (flux, processus, méthodes…)
 * Les cinq signes restent dans la décision et la trajectoire : ils ne redisent pas
 * ceux de la page organisation industrielle.
 *
 * Tarif : décision de l'agence (aucune grille fournie), pas de bloc `tarifs`.
 * Seuls faits sur Patrick Calvet : le texte de la cliente et sa fiche `equipe` (home.ts).
 */

const TARIF =
  "Interventions sur mesure à partir de 2 jours, de 700 à 1 200 € HT par jour selon la mission. Chaque proposition précise par écrit le périmètre, les modalités et le prix avant tout démarrage.";

export const pilierStrategieIndustrielle: PagePilier = {
  href: "/conseil-strategie-industrielle-toulouse/",
  fil: "Stratégie industrielle",
  accent: "industrie",

  // « Conseil en stratégie industrielle » = 33 + 18 = 51 / 60
  metaTitle: "Conseil en stratégie industrielle",
  // 147 / 150
  metaDescription:
    "Conseil en stratégie industrielle pour TPE et PME à Toulouse : capacité, investissements, sites, trajectoire. Un outil aligné avec votre ambition.",
  nomService: "Conseil en stratégie industrielle pour TPE et PME",

  h1: "Conseil en stratégie industrielle à Toulouse : aligner votre outil industriel avec votre ambition",
  lede:
    "Votre entreprise évolue. Votre outil industriel doit-il évoluer avec elle ? Un outil industriel peut être performant aujourd'hui et pourtant ne plus être adapté à ce que l'entreprise veut devenir demain. Notre conseil en stratégie industrielle aide les dirigeants à prendre de la hauteur sur leur dispositif industriel : Patrick Calvet objective les choix structurants et construit avec vous une trajectoire industrielle cohérente avec l'ambition de l'entreprise.",

  essentiel: {
    reponse:
      "Le conseil en stratégie industrielle d'Un Seul Souffle aide les dirigeants de TPE et PME de 10 à 250 salariés à vérifier que leur dispositif industriel est aligné avec la stratégie de l'entreprise, et à décider comment le faire évoluer. L'expert référent, Patrick Calvet, travaille sur la capacité industrielle, les investissements, la performance des sites, l'organisation multi-sites et la trajectoire de transformation. Il croise l'ambition de l'entreprise, ses besoins futurs et ses capacités industrielles pour comparer les scénarios possibles, objectiver les choix structurants et hiérarchiser les investissements. Cette intervention répond à une question : votre outil industriel doit-il évoluer ? Elle se distingue de l'organisation industrielle, qui cherche à faire mieux fonctionner l'outil existant. Interventions sur mesure à partir de 2 jours, de 700 à 1 200 € HT par jour, à Toulouse et en Occitanie.",
    points: [
      "Pour qui : dirigeants de TPE et PME de 10 à 250 salariés face à un choix industriel structurant",
      "Expert référent : Patrick Calvet, stratégie industrielle",
      "Ce que ça couvre : capacité, investissements, performance des sites, organisation multi-sites, transformation, trajectoire",
      "Ce que ça n'est pas : une optimisation de la production existante",
      "Tarif : sur mesure, à partir de 2 jours, de 700 à 1 200 € HT par jour",
      "Zone : Toulouse, Haute-Garonne, Occitanie",
    ],
  },

  chapitres: [
    {
      label: "Pour qui",
      titre: "Quand faire appel à Patrick Calvet ?",
      large: true,
      cartesADroite: true,
      blocs: [
        {
          type: "p",
          texte:
            "Votre marché change. Vos ambitions commerciales évoluent. Vous envisagez un investissement, une nouvelle implantation, une transformation de vos sites ou une évolution de vos capacités. Une question reste alors essentielle : **votre dispositif industriel est-il réellement aligné avec la stratégie de votre entreprise ?**",
        },
        {
          type: "p",
          texte:
            "C'est la question que Patrick Calvet travaille avec les dirigeants de TPE et PME de 10 à 250 salariés. Si vous hésitez sur la nature du blocage, le [diagnostic d'entreprise](/diagnostic/) en ligne vous aide à le situer.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Votre entreprise change d'échelle.** Votre outil industriel doit accompagner une nouvelle ambition commerciale ou une croissance importante.",
            "**Vous devez prendre une décision d'investissement.** Vous avez besoin de prendre du recul avant d'engager des ressources importantes.",
            "**Votre outil industriel arrive à ses limites.** Vous devez déterminer s'il faut optimiser, transformer, investir ou faire évoluer votre dispositif.",
            "**Vous pilotez plusieurs sites.** Vous cherchez à comprendre comment organiser leur complémentarité et leur évolution.",
            "**Vous préparez une transformation industrielle.** Vous avez besoin d'une trajectoire plutôt que d'une succession de décisions ponctuelles.",
            "**Votre stratégie commerciale évolue.** Vous devez vérifier que votre capacité industrielle est cohérente avec ce que vous voulez vendre demain.",
          ],
        },
      ],
    },

    {
      label: "La confusion à lever",
      titre: "Stratégie industrielle et optimisation de la production : deux questions différentes",
      large: true,
      cartesADroite: true,
      blocs: [
        {
          type: "p",
          texte:
            "Optimiser une production consiste à améliorer la manière dont l'outil fonctionne. La stratégie industrielle pose une autre question : **est-ce encore le bon outil pour atteindre nos objectifs futurs ?** Il s'agit alors de regarder plus loin.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "Quelle capacité industrielle demain ?",
            "Quels investissements ?",
            "Quels sites ?",
            "Quelle organisation multi-sites ?",
            "Quelle évolution des moyens ?",
            "Quelle trajectoire de transformation ?",
            "Quels choix faut-il faire maintenant pour accompagner la stratégie de l'entreprise ?",
          ],
        },
        {
          type: "p",
          texte:
            "Patrick ne vient donc pas seulement chercher des gains dans l'outil existant. Il aide le dirigeant à déterminer comment son dispositif industriel doit évoluer pour soutenir son ambition.",
        },
        {
          type: "p",
          texte:
            "Si votre outil doit d'abord mieux fonctionner — flux, processus, ordonnancement —, le sujet relève du [conseil en organisation industrielle](/conseil-organisation-industrielle-toulouse/).",
        },
      ],
    },

    {
      label: "Le travail",
      titre: "Ce que prend en charge le conseil en stratégie industrielle",
      large: false,
      blocs: [
        {
          type: "p",
          texte:
            "Donner à votre production le cap et les moyens de votre ambition : l'intervention couvre huit domaines, traités selon les décisions que vous avez à prendre.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Stratégie industrielle.** Aligner les choix industriels avec la stratégie globale de l'entreprise.",
            "**Trajectoire de transformation.** Définir les étapes nécessaires pour faire évoluer progressivement le dispositif industriel.",
            "**Performance globale des sites.** Prendre du recul sur la performance d'un site ou d'un ensemble de sites.",
            "**Capacité industrielle.** Évaluer les capacités nécessaires au regard des ambitions commerciales et du développement attendu.",
            "**Organisation multi-sites.** Réfléchir à la complémentarité, à la répartition et à l'évolution de plusieurs sites industriels.",
            "**Investissements et choix structurants.** Objectiver les décisions qui engagent l'entreprise sur plusieurs années.",
            "**Évolution de l'outil industriel.** Identifier les transformations nécessaires des moyens et des organisations.",
            "**Transformation et réorganisation.** Accompagner les évolutions importantes du dispositif industriel.",
          ],
        },
      ],
    },

    {
      label: "De l'outil à la trajectoire",
      titre: "Ne plus seulement gérer l'existant : préparer le prochain modèle",
      large: false,
      exergue:
        "Ces décisions ne peuvent pas être prises uniquement à partir des contraintes de production du moment.",
      blocs: [
        {
          type: "p",
          texte: "Le dirigeant peut être confronté à des choix structurants, qui engagent l'entreprise pour plusieurs années.",
        },
        {
          type: "liste",
          items: [
            "Faut-il investir ou optimiser l'existant ?",
            "Faut-il augmenter les capacités ?",
            "Faut-il transformer un site ?",
            "Faut-il revoir l'organisation industrielle ?",
            "Comment accompagner la croissance ?",
            "Comment faire évoluer plusieurs sites ?",
          ],
        },
        {
          type: "p",
          texte:
            "**Ces choix doivent être reliés à la stratégie de l'entreprise, à ses ambitions commerciales, à ses ressources, à ses capacités industrielles et à sa trajectoire de développement.** C'est ce qui fait passer de la gestion de l'outil industriel à une trajectoire industrielle.",
        },
      ],
    },

    {
      label: "Notre approche",
      titre: "Donner de la visibilité avant de décider",
      large: true,
      cartesADroite: true,
      blocs: [
        {
          type: "p",
          texte:
            "Patrick intervient pour permettre au dirigeant de sortir de la décision isolée et de replacer les choix industriels dans une trajectoire globale. L'analyse croise : ambition de l'entreprise → besoins futurs → capacités industrielles → scénarios possibles → choix structurants → trajectoire de transformation.",
        },
        {
          type: "p",
          texte:
            "**L'objectif n'est pas de produire une vision industrielle déconnectée du terrain.** C'est de prendre les bonnes décisions pour que l'outil industriel puisse réellement accompagner la stratégie.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Ambition de l'entreprise.** Ce que l'entreprise veut devenir : ses ambitions commerciales et le développement attendu.",
            "**Besoins futurs.** Les capacités, les moyens et les organisations que cette ambition demande.",
            "**Capacités industrielles.** Ce que le dispositif actuel, site par site, permet réellement.",
            "**Scénarios possibles.** Optimiser, transformer, investir ou faire évoluer le dispositif.",
            "**Choix structurants.** Les décisions qui engagent l'entreprise sur plusieurs années, objectivées avant d'être prises.",
            "**Trajectoire de transformation.** Les étapes nécessaires pour faire évoluer progressivement le dispositif industriel.",
          ],
        },
        {
          type: "encadre",
          titre: "Ce que vous obtenez",
          texte:
            "Une vision plus claire de votre trajectoire industrielle, une lecture globale de la performance de vos sites, une analyse de vos capacités industrielles, des choix structurants objectivés, une vision des transformations nécessaires, une hiérarchisation des investissements et un plan d'action aligné avec la stratégie de l'entreprise.",
        },
      ],
    },

    {
      label: "Les signes",
      titre: "Cinq signes que votre outil industriel n'est plus aligné avec votre stratégie",
      large: true,
      cartesADroite: true,
      blocs: [
        {
          type: "p",
          texte:
            "Ces signes ne disent pas que la production fonctionne mal. Ils disent que la question a changé : non plus comment mieux produire, mais avec quel outil avancer.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Votre entreprise veut se développer, mais vous ne savez pas si votre outil industriel peut suivre.** Votre ambition commerciale évolue, mais vous n'avez pas encore objectivé les capacités industrielles nécessaires pour l'accompagner.",
            "**Vous devez investir, mais vous hésitez sur la direction à prendre.** Nouvel équipement, extension, nouveau site, transformation de l'existant… Les décisions sont importantes et engagent l'entreprise sur plusieurs années.",
            "**Votre outil industriel fonctionne aujourd'hui, mais vous doutez de sa pertinence demain.** La question n'est plus seulement d'améliorer l'existant. Vous devez déterminer quel dispositif industriel sera adapté à votre prochaine étape de développement.",
            "**Plusieurs sites ou activités ont évolué sans véritable vision d'ensemble.** Chaque site fonctionne, mais vous manquez peut-être d'une réflexion globale sur leur complémentarité, leur capacité et leur rôle dans la stratégie de l'entreprise.",
            "**Vous prenez des décisions industrielles au coup par coup.** Un investissement ici, une réorganisation là, une nouvelle capacité ailleurs… sans trajectoire industrielle clairement définie pour relier ces décisions entre elles.",
          ],
        },
        {
          type: "encadre",
          titre: "Le résultat recherché",
          texte:
            "Passer d'une succession de décisions industrielles à une véritable trajectoire industrielle alignée avec la stratégie de l'entreprise.",
        },
      ],
    },

    {
      label: "Patrick & Yohan",
      titre: "Deux expertises, un même enjeu : faire de votre outil industriel un levier de développement",
      large: true,
      cartesADroite: true,
      blocs: [
        {
          type: "tableau",
          entetes: ["Patrick Calvet — stratégie industrielle", "Yohan Castelar — organisation industrielle"],
          lignes: [
            ["Où allons-nous ?", "Comment fonctionnons-nous ?"],
            [
              "Il regarde l'avenir de votre dispositif industriel.",
              "Il agit sur le fonctionnement concret de votre dispositif industriel.",
            ],
            [
              "Stratégie → capacité → investissements → sites → transformation → trajectoire",
              "Flux → processus → méthodes → ordonnancement → organisation → ingénierie",
            ],
            ["Votre outil doit peut-être évoluer.", "Votre outil peut mieux fonctionner."],
          ],
        },
        { type: "h3", texte: "Ensemble : de la stratégie à la réalité opérationnelle" },
        {
          type: "p",
          texte:
            "Patrick peut définir le cap industriel. Yohan peut ensuite traduire ce cap dans le fonctionnement concret de l'outil et des équipes. Et inversement, l'analyse du fonctionnement réel menée par Yohan peut faire émerger des contraintes ou des possibilités qui éclairent les choix stratégiques.",
        },
        {
          type: "p",
          texte:
            "**Ils ne font donc pas le même métier.** Ils peuvent intervenir ensemble lorsque l'entreprise a besoin de relier son avenir industriel à sa réalité opérationnelle. Le volet opérationnel est présenté sur la page [conseil en organisation industrielle](/conseil-organisation-industrielle-toulouse/).",
        },
      ],
    },

    {
      label: "Le modèle",
      titre: "Votre expert référent : Patrick Calvet, stratégie industrielle",
      large: false,
      blocs: [
        {
          type: "referent",
          slug: "patrick-calvet",
          texte: [
            "Patrick accompagne les dirigeants dans leurs réflexions industrielles structurantes : performance globale des sites, capacités, investissements, transformation et trajectoire industrielle.",
            "Son rôle : aider l'entreprise à faire évoluer son outil industriel au rythme de son ambition.",
          ],
        },
        {
          type: "p",
          texte:
            "Votre interlocuteur reste le même du premier entretien à la fin de l'intervention. **Le périmètre est arrêté avec vous et écrit dans la proposition.** Si la réflexion met au jour un sujet qui dépasse la stratégie industrielle, Patrick vous le dit et peut faire appel à l'une des cinq autres expertises du cabinet, sur ce point précis. Le périmètre ne s'élargit pas sans votre accord.",
        },
        { type: "encadre", titre: "Tarif", texte: TARIF },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce que la stratégie industrielle ?",
      r: [
        "C'est la réflexion qui aligne le dispositif industriel d'une entreprise — capacités, investissements, sites, moyens — avec sa stratégie globale et ses ambitions commerciales.",
        "Elle pose une question que l'optimisation de la production ne pose pas : est-ce encore le bon outil pour atteindre nos objectifs futurs ?",
      ],
    },
    {
      q: "Quelle différence entre Patrick Calvet et Yohan Castelar ?",
      r: [
        "Patrick Calvet répond à la question : comment faire évoluer notre outil industriel pour accompagner notre stratégie ? Yohan Castelar répond à une autre : comment faire fonctionner efficacement notre outil industriel aujourd'hui ?",
        "Le premier travaille sur la capacité, les investissements, les sites et la trajectoire ; le second sur les flux, les processus, les méthodes et l'organisation. Ils peuvent intervenir ensemble lorsque l'entreprise a besoin de relier son avenir industriel à sa réalité opérationnelle.",
      ],
    },
    {
      q: "À quel moment faire appel à un conseil en stratégie industrielle ?",
      r: [
        "Quand l'entreprise change d'échelle, avant une décision d'investissement, quand l'outil industriel arrive à ses limites, quand vous pilotez plusieurs sites, quand vous préparez une transformation ou quand votre stratégie commerciale évolue.",
      ],
    },
    {
      q: "Qu'obtient-on à l'issue de l'accompagnement ?",
      r: [
        "Une vision plus claire de votre trajectoire industrielle, une lecture globale de la performance de vos sites, une analyse de vos capacités, des choix structurants objectivés, une hiérarchisation des investissements et un plan d'action aligné avec la stratégie de l'entreprise.",
      ],
    },
    {
      q: "Combien coûte un conseil en stratégie industrielle ?",
      r: [TARIF],
    },
  ],

  bascule: {
    titre: "Si votre outil doit d'abord mieux fonctionner",
    texte:
      "Quand les flux se croisent, que l'ordonnancement devient difficile ou que les mêmes problèmes reviennent, la réponse n'est pas forcément un investissement : c'est l'organisation industrielle qui se travaille, avec Yohan Castelar.",
    href: "/conseil-organisation-industrielle-toulouse/",
    ancre: "Découvrir l'organisation industrielle",
  },
};
