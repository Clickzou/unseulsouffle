import type { PagePilier } from "@/lib/content/pilier";

/**
 * Silo 5a — Organisation industrielle & ingénierie (master § 3, scindé le 04/10/2026).
 * Expert référent : Yohan Castelar, partenaire.
 * Source : texte de la cliente « Pages services Yohan Castelar et Patrick Calvet »
 * (04/10/2026), suivi fidèlement ; commentaires de rédaction retirés.
 *
 * LIGNE DE PARTAGE AVEC LA STRATÉGIE INDUSTRIELLE (note interne de la cliente) :
 *   Yohan  = « votre outil peut mieux fonctionner » (flux, processus, méthodes…)
 *   Patrick = « votre outil doit peut-être évoluer » (capacité, investissements, sites…)
 * Les deux pages se lient par une ancre exacte et ne ciblent pas les mêmes termes.
 *
 * Tarif : décision de l'agence (aucune grille fournie), pas de bloc `tarifs`.
 * Seuls faits sur Yohan Castelar : le texte de la cliente et sa fiche `equipe` (home.ts).
 */

const TARIF =
  "Interventions sur mesure à partir de 2 jours, de 700 à 1 200 € HT par jour selon la mission. Chaque proposition précise par écrit le périmètre, les modalités et le prix avant tout démarrage.";

export const pilierOrganisationIndustrielle: PagePilier = {
  href: "/conseil-organisation-industrielle-toulouse/",
  fil: "Organisation industrielle",
  accent: "production",

  // « Conseil en organisation industrielle » = 36 + 18 = 54 / 60
  metaTitle: "Conseil en organisation industrielle",
  // 145 / 150
  metaDescription:
    "Conseil en organisation industrielle pour TPE et PME à Toulouse : flux, processus, méthodes, ordonnancement. Une production fluide et maîtrisée.",
  nomService: "Conseil en organisation industrielle pour TPE et PME",

  h1: "Conseil en organisation industrielle à Toulouse : concevoir et améliorer un système industriel performant",
  lede:
    "Votre production fonctionne, mais elle pourrait fonctionner beaucoup mieux. Les équipes sont compétentes, les équipements sont là, et pourtant les résultats restent irréguliers. Notre conseil en organisation industrielle intervient directement sur le fonctionnement de votre production : Yohan Castelar analyse, structure et améliore les flux, les processus, les méthodes, l'ordonnancement et les interfaces entre les métiers. Son objectif : rendre votre système industriel plus fluide, plus maîtrisé et plus autonome.",

  essentiel: {
    reponse:
      "Le conseil en organisation industrielle d'Un Seul Souffle aide les dirigeants de TPE et PME de 10 à 250 salariés à rendre leur production plus fluide, plus maîtrisée et plus autonome. L'expert référent, Yohan Castelar, ingénieur mécanique de formation, part du fonctionnement réel de l'outil industriel plutôt que d'un modèle théorique : il analyse les flux, les processus, les méthodes, l'ordonnancement, l'implantation et les interfaces entre les métiers, identifie où se créent les pertes, les ruptures et les dépendances, puis met en œuvre les améliorations avec les équipes jusqu'à ce qu'elles restent dans l'entreprise. Cette intervention répond à une question : votre outil industriel peut-il mieux fonctionner ? Elle se distingue de la stratégie industrielle, qui se demande s'il doit évoluer. Interventions sur mesure à partir de 2 jours, de 700 à 1 200 € HT par jour, à Toulouse et en Occitanie.",
    points: [
      "Pour qui : TPE et PME de 10 à 250 salariés dont la production fonctionne, mais de façon irrégulière",
      "Expert référent : Yohan Castelar, ingénieur mécanique de formation",
      "Ce que ça couvre : organisation des productions, flux et processus, méthodes, ordonnancement, implantation, industrialisation",
      "Ce que ça n'est pas : une simple recherche de productivité, ni une méthode standard appliquée telle quelle",
      "Tarif : sur mesure, à partir de 2 jours, de 700 à 1 200 € HT par jour",
      "Zone : Toulouse, Haute-Garonne, Occitanie",
    ],
  },

  chapitres: [
    {
      label: "Pour qui",
      titre: "Quand faire appel à Yohan Castelar ?",
      large: true,
      cartesADroite: true,
      blocs: [
        {
          type: "p",
          texte:
            "Les flux se croisent. L'ordonnancement devient difficile. Les mêmes problèmes reviennent. Certaines décisions reposent sur une seule personne. Les informations circulent mal. Les méthodes se sont construites au fil du temps sans réellement évoluer avec l'entreprise. **Votre outil industriel a du potentiel, mais son organisation ne vous permet plus de l'exploiter pleinement.**",
        },
        {
          type: "p",
          texte:
            "C'est la situation des TPE et PME de 10 à 250 salariés que Yohan Castelar accompagne. Si vous hésitez sur la nature du blocage, le [diagnostic d'entreprise](/diagnostic/) en ligne vous aide à le situer.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Votre production fonctionne, mais ses performances restent irrégulières.** Vous identifiez des pertes sans parvenir à comprendre précisément d'où elles viennent.",
            "**Vos flux ou votre implantation ne sont plus adaptés.** La croissance ou l'évolution de l'activité a rendu votre organisation moins efficace.",
            "**L'ordonnancement devient difficile.** Les priorités changent, les capacités sont mal synchronisées et la production subit davantage qu'elle ne pilote.",
            "**Vous avez grandi sans faire évoluer vos processus.** Le nombre de collaborateurs augmente, mais l'organisation reste construite comme lorsqu'elle était plus petite.",
            "**Votre compétence repose sur une seule personne.** Vous souhaitez capitaliser les savoirs et rendre l'organisation moins dépendante d'un individu.",
            "**Vous avez un projet d'industrialisation.** Vous avez besoin de transformer un besoin industriel en solution concrète et opérationnelle.",
          ],
        },
      ],
    },

    {
      label: "La confusion à lever",
      titre: "Organisation industrielle et simple gain de productivité : deux choses différentes",
      large: true,
      cartesADroite: true,
      blocs: [
        {
          type: "p",
          texte:
            "Une production moins performante n'a pas nécessairement besoin de produire davantage. Le problème peut se trouver ailleurs que dans la cadence : dans la manière dont le système est organisé et dont les collaborateurs l'utilisent réellement.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Le flux.** Les flux physiques, l'ordonnancement, l'implantation.",
            "**Les façons de faire.** Les processus et les méthodes.",
            "**Les échanges.** Les interfaces entre services et la circulation des informations.",
            "**Les rôles.** La répartition des responsabilités, et la manière dont les collaborateurs utilisent réellement le système.",
          ],
        },
        {
          type: "p",
          texte:
            "Améliorer quelques indicateurs de productivité sans regarder l'ensemble peut déplacer le problème plutôt que le résoudre. **Yohan regarde le système industriel dans son ensemble pour identifier où se créent les pertes, les ruptures et les dépendances.** C'est le cœur de son positionnement : partir du fonctionnement réel de l'outil industriel plutôt que d'un modèle théorique.",
        },
        {
          type: "p",
          texte:
            "La question de départ est donc : votre outil peut-il mieux fonctionner ? S'il doit plutôt évoluer — capacité, investissements, sites —, le sujet relève du [conseil en stratégie industrielle](/conseil-strategie-industrielle-toulouse/).",
        },
      ],
    },

    {
      label: "Le travail",
      titre: "Ce que prend en charge le conseil en organisation industrielle",
      large: false,
      blocs: [
        {
          type: "p",
          texte:
            "Structurer le fonctionnement réel de votre production : l'intervention couvre six domaines, traités selon ce que votre situation demande.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Organisation des productions.** Structurer les activités, les flux et les responsabilités pour rendre la production plus fluide et plus maîtrisée.",
            "**Flux et processus.** Analyser les flux physiques et les processus pour identifier les ruptures, les pertes et les possibilités d'amélioration.",
            "**Méthodes et amélioration continue.** Structurer les méthodes de travail et installer une démarche d'amélioration adaptée à la réalité du site.",
            "**Ordonnancement et planification.** Améliorer la cohérence entre la charge, les capacités et les priorités.",
            "**Implantation et organisation des moyens.** Faire évoluer l'organisation des espaces et des moyens en fonction des flux et des besoins de production.",
            "**Ingénierie et industrialisation.** Transformer un besoin industriel en solution concrète : évolution des procédés, des moyens, de l'organisation, ou projet d'industrialisation.",
          ],
        },
      ],
    },

    {
      label: "Production sous tension",
      titre: "Production sous tension : identifier ce qui bloque réellement",
      large: false,
      exergue:
        "Parfois, une modification mineure dans l'organisation produit un changement majeur dans le fonctionnement quotidien.",
      blocs: [
        {
          type: "p",
          texte:
            "Une production sous tension donne souvent l'impression que tout est urgent. Mais derrière l'urgence se cachent parfois quelques points de blocage.",
        },
        {
          type: "liste",
          items: [
            "Une validation qui ralentit tout un flux",
            "Une information qui arrive trop tard",
            "Une personne devenue indispensable",
            "Un processus qui oblige à refaire plusieurs fois le même travail",
            "Un manque de visibilité sur les échéances",
            "Une mauvaise synchronisation entre les capacités et la charge",
          ],
        },
        {
          type: "p",
          texte:
            "Le travail de Yohan consiste à rendre ces mécanismes visibles, puis à agir là où quelques changements peuvent produire un effet important. **Il ne s'agit pas de tout réinventer** : l'objectif est de passer d'une production sous tension à une production maîtrisée.",
        },
      ],
    },

    {
      label: "Notre approche",
      titre: "Partir du réel pour construire une organisation industrielle qui fonctionne",
      large: true,
      cartesADroite: true,
      blocs: [
        {
          type: "p",
          texte:
            "Yohan ne commence pas par appliquer une méthode standard. Chaque mission suit le même enchaînement : observer → comprendre → diagnostiquer → prioriser → agir → transmettre. Les actions sont mises en œuvre progressivement, avec un suivi régulier du dirigeant.",
        },
        {
          type: "p",
          texte:
            "**L'objectif n'est pas de remettre un diagnostic dans un dossier.** Il est que les améliorations deviennent réellement opérationnelles et restent dans l'entreprise.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Observer.** Le terrain, les flux, les processus, les interfaces, les contraintes, les pratiques des équipes et le niveau de maturité de l'organisation.",
            "**Comprendre.** Relier ce qui est observé au fonctionnement réel de la production, plutôt qu'à un modèle théorique.",
            "**Diagnostiquer.** Rendre visibles les mécanismes qui créent les pertes, les ruptures et les dépendances.",
            "**Prioriser.** Retenir les points où quelques changements peuvent produire un effet important.",
            "**Agir.** Mettre en œuvre les actions progressivement, avec un suivi régulier du dirigeant.",
            "**Transmettre.** Faire en sorte que les améliorations restent dans l'entreprise, sans dépendre de l'intervenant.",
          ],
        },
        {
          type: "encadre",
          titre: "Ce que vous obtenez",
          texte:
            "Des flux mieux maîtrisés, des processus clarifiés, une organisation de production structurée, des méthodes de travail renforcées, des interfaces mieux définies, des priorités d'amélioration identifiées, des projets d'industrialisation mieux structurés et des solutions concrètes adaptées à votre outil industriel. Et surtout : une organisation industrielle conçue pour fonctionner dans la réalité de votre entreprise.",
        },
      ],
    },

    {
      label: "Les signes",
      titre: "Cinq signes que votre production souffre d'un problème d'organisation industrielle",
      large: true,
      cartesADroite: true,
      blocs: [
        {
          type: "p",
          texte:
            "Pris un par un, ces signes passent pour des aléas du quotidien. Quand plusieurs se cumulent, ils désignent l'organisation plutôt que les personnes ou les équipements.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Vos projets dérivent sans que vous sachiez vraiment pourquoi.** Les délais bougent, les priorités changent et les équipes travaillent beaucoup, mais il reste difficile d'identifier précisément où se crée le blocage.",
            "**Vous avez l'impression de réinventer la roue en permanence.** Les mêmes problèmes reviennent, les solutions restent dans les têtes et les savoir-faire disparaissent lorsqu'une personne quitte l'entreprise.",
            "**Une seule personne détient une compétence devenue indispensable.** Lorsqu'elle est absente, le fonctionnement se ralentit ou s'arrête. Votre organisation dépend davantage des individus que des processus.",
            "**Votre entreprise a grandi, mais vos processus n'ont pas suivi.** Vous avez davantage de collaborateurs, de clients, de produits ou de contraintes, mais vous fonctionnez encore avec des méthodes conçues pour une organisation beaucoup plus petite.",
            "**Un flux, une validation ou une information bloque toute une partie de la production.** Une personne attend une information, une validation arrive trop tard ou une étape absorbe plus de charge qu'elle ne peut en traiter.",
          ],
        },
        {
          type: "encadre",
          titre: "Le résultat recherché",
          texte:
            "Passer d'une production qui subit ses contraintes à une organisation industrielle qui maîtrise ses flux et ses processus.",
        },
      ],
    },

    {
      label: "Une expertise dans un ensemble",
      titre: "Yohan & Patrick : deux regards complémentaires sur votre outil industriel",
      large: true,
      cartesADroite: true,
      blocs: [
        {
          type: "p",
          texte:
            "Une entreprise peut avoir besoin d'améliorer son fonctionnement actuel. Elle peut aussi devoir réfléchir à son avenir industriel. Ce ne sont pas les mêmes questions, et ce ne sont pas les mêmes experts.",
        },
        {
          type: "tableau",
          entetes: ["Yohan Castelar — organisation industrielle", "Patrick Calvet — stratégie industrielle"],
          lignes: [
            [
              "Comment faire fonctionner efficacement notre outil industriel aujourd'hui ?",
              "Comment faire évoluer notre outil industriel pour accompagner notre stratégie ?",
            ],
            [
              "Les flux → les processus → les méthodes → l'ordonnancement → les interfaces → l'organisation",
              "La capacité → les choix industriels → les investissements → les sites → la transformation → la trajectoire",
            ],
            ["Votre outil peut mieux fonctionner.", "Votre outil doit peut-être évoluer."],
          ],
        },
        {
          type: "p",
          texte:
            "**Lorsque les deux dimensions sont nécessaires, leurs regards peuvent se croiser** pour relier les choix de long terme et leur traduction opérationnelle. Le volet stratégique est présenté sur la page [conseil en stratégie industrielle](/conseil-strategie-industrielle-toulouse/).",
        },
      ],
    },

    {
      label: "Le modèle",
      titre: "Votre expert référent : Yohan Castelar, organisation industrielle & ingénierie",
      large: false,
      blocs: [
        {
          type: "referent",
          slug: "yohan-castelar",
          texte: [
            "Ingénieur mécanique de formation, Yohan intervient sur les processus opérationnels, les organisations de production, les flux et les projets industriels.",
            "Son expérience lui a notamment permis de construire des processus permettant à une entreprise de passer d'une approche artisanale à une approche industrielle, tout en restant connecté aux réalités opérationnelles.",
          ],
        },
        {
          type: "p",
          texte:
            "Votre interlocuteur reste le même du premier entretien à la fin de l'intervention. **Le périmètre est arrêté avec vous et écrit dans la proposition.** Si le travail met au jour un sujet qui dépasse l'organisation industrielle, Yohan vous le dit et peut faire appel à l'une des cinq autres expertises du cabinet, sur ce point précis. Le périmètre ne s'élargit pas sans votre accord.",
        },
        { type: "encadre", titre: "Tarif", texte: TARIF },
      ],
    },
  ],

  faq: [
    {
      q: "Qu'est-ce que le conseil en organisation industrielle ?",
      r: [
        "C'est l'intervention d'un expert qui analyse le fonctionnement réel de votre production — flux, processus, méthodes, ordonnancement, implantation, interfaces entre les métiers — pour identifier où se créent les pertes, les ruptures et les dépendances, puis qui met en œuvre les améliorations avec vos équipes.",
        "L'objectif n'est pas de remettre un diagnostic dans un dossier, mais que les améliorations deviennent opérationnelles et restent dans l'entreprise.",
      ],
    },
    {
      q: "Est-ce la même chose qu'un gain de productivité ?",
      r: [
        "Non. Une production moins performante n'a pas nécessairement besoin de produire davantage : le problème peut se trouver dans les flux, les processus, l'ordonnancement, les interfaces ou la répartition des responsabilités.",
        "Améliorer quelques indicateurs de productivité sans regarder l'ensemble peut déplacer le problème plutôt que le résoudre.",
      ],
    },
    {
      q: "Quelle différence entre Yohan Castelar et Patrick Calvet ?",
      r: [
        "Yohan Castelar répond à la question : comment faire fonctionner efficacement notre outil industriel aujourd'hui ? Patrick Calvet répond à une autre : comment faire évoluer notre outil industriel pour accompagner notre stratégie ?",
        "Le premier agit sur les flux, les processus, les méthodes et l'organisation ; le second sur la capacité, les investissements, les sites et la trajectoire. Ils peuvent intervenir ensemble lorsque les deux dimensions sont nécessaires.",
      ],
    },
    {
      q: "Faut-il tout réorganiser ?",
      r: [
        "Non. Il ne s'agit pas de tout réinventer : le travail consiste à rendre visibles les points de blocage, puis à agir là où quelques changements peuvent produire un effet important.",
        "Le périmètre est arrêté avec vous et écrit dans la proposition, et les actions sont mises en œuvre progressivement.",
      ],
    },
    {
      q: "Combien coûte un conseil en organisation industrielle ?",
      r: [TARIF],
    },
  ],

  bascule: {
    titre: "Si votre outil doit évoluer, pas seulement mieux fonctionner",
    texte:
      "Quand la question n'est plus d'améliorer le fonctionnement actuel mais de savoir quelle capacité, quels investissements ou quels sites il faudra demain, c'est la stratégie industrielle qui prend le relais, avec Patrick Calvet.",
    href: "/conseil-strategie-industrielle-toulouse/",
    ancre: "Découvrir la stratégie industrielle",
  },
};
