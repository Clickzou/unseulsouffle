import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 2, organisation. Signé Muriel Saffroy.
 * Requête : « réorganisation entreprise » (320/mois, KD 9). Secondaires :
 * « réorganisation » (590), « restructurer une entreprise » (320).
 *
 * L'intention « conseil en organisation » appartient au pilier
 * /transformation-entreprise/ : cet article traite la conduite d'une
 * réorganisation et renvoie vers lui.
 *
 * POINTS SENSIBLES :
 * - Droit du travail (consultation du CSE, modification du contrat pour motif
 *   économique, définition du motif économique) : textes vérifiés sur Légifrance
 *   le 24/09/2026. Formulation prudente, renvoi vers un avocat pour les actes.
 * - Risques psychosociaux : cadre INRS et DUERP (service-public), aucun conseil
 *   médical ; renvoi vers le médecin du travail.
 * - Liens internes : uniquement vers des articles publiés avant le 2027-04-26.
 */
export const article: Article = {
  slug: "reorganisation-entreprise",

  motCle: "réorganisation entreprise (320/mois, KD 9) — SE Ranking, 24/09/2026",
  motsClesSecondaires: [
    "réorganisation (590/mois)",
    "restructurer une entreprise (320/mois)",
    "réorganiser une PME",
  ],

  // 40 / 42
  metaTitle: "Réorganisation d'entreprise : la méthode",
  // 146 / 150
  metaDescription:
    "Réorganisation d'entreprise : les signaux qui la justifient, le cadre légal, le coût humain et une méthode en six étapes pour réorganiser une PME.",

  h1: "Réorganisation d'entreprise : réorganiser une PME sans casser ce qui fonctionne",

  chapo:
    "Une réorganisation d'entreprise consiste à modifier la façon dont le travail est réparti : qui fait quoi, qui décide, qui rend compte à qui, et par où passent les informations. Elle se justifie quand l'organisation actuelle coûte plus d'énergie qu'elle n'en produit, pas parce qu'un nouvel organigramme serait plus élégant. Réussie, elle part du fonctionnement réel, touche le moins de choses possible, associe les équipes et respecte le droit du travail. Ratée, elle désorganise pendant des mois et use les meilleurs. Voici comment reconnaître le besoin, ce que la loi encadre, ce que coûte le changement et comment le conduire.",

  essentiel: {
    reponse:
      "La réorganisation d'une entreprise est la modification de sa structure, de ses rôles, de ses circuits de décision ou de ses processus pour les adapter à sa stratégie ou à sa taille. Elle se distingue de la restructuration, qui touche en plus aux effectifs, aux sites ou au périmètre juridique. Une réorganisation se prépare par un diagnostic du fonctionnement réel, se conduit avec les équipes et, dans les entreprises d'au moins 50 salariés, passe par l'information et la consultation du comité social et économique. Le changement non maîtrisé est un facteur de risque psychosocial reconnu.",
    points: [
      "Partir des blocages observés, pas de l'organigramme idéal",
      "Distinguer réorganisation (rôles, processus) et restructuration (effectifs, sites)",
      "Respecter le cadre légal : CSE, contrats de travail, motif économique",
      "Traiter le coût humain dès la conception, pas après les premiers départs",
      "Conduire par étapes, tester, puis stabiliser avant de changer autre chose",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Réorganisation d'entreprise : de quoi parle-t-on ?",
      blocs: [
        {
          type: "p",
          texte:
            "Le mot recouvre des réalités très différentes. Redécouper deux services, créer un échelon de management intermédiaire, confier la planification à une seule personne, regrouper deux ateliers ou changer la façon dont les commandes circulent entre le commerce et la production : tout cela est une réorganisation. **Ce qui les réunit, c'est qu'on change la manière de travailler ensemble, pas seulement les noms dans les cases.** C'est le terrain du [conseil en organisation](/transformation-entreprise/) : rendre l'organisation plus simple à faire vivre, pas plus belle sur le papier.",
        },
        { type: "h3", texte: "Quatre objets possibles" },
        {
          type: "liste",
          items: [
            "**La structure** : les services, leurs périmètres et les liens hiérarchiques, ce que montre un [organigramme d'entreprise](/infos-utiles/organigramme-entreprise/)",
            "**Les rôles** : ce que chacun décide, jusqu'où, et ce qui remonte",
            "**Les processus** : le chemin d'une commande, d'un devis ou d'une réclamation à travers l'entreprise",
            "**Les instances** : les réunions où l'on arbitre, leur rythme et ce qu'on y tranche",
          ],
        },
        { type: "h3", texte: "Réorganisation ou restructuration" },
        {
          type: "p",
          texte:
            "Les deux mots sont souvent confondus. Restructurer une entreprise va plus loin que la réorganiser : on touche au volume des effectifs, aux sites, au périmètre d'activité ou à la forme juridique. Les enjeux sociaux et juridiques ne sont pas du même ordre.",
        },
        {
          type: "tableau",
          entetes: ["Réorganisation", "Restructuration"],
          lignes: [
            ["Change les rôles, les rattachements, les processus", "Change aussi les effectifs, les sites ou le périmètre de l'entreprise"],
            ["Motivée par la croissance, la stratégie ou des dysfonctionnements", "Souvent motivée par des difficultés économiques ou une opération (cession, fusion)"],
            ["Peut se faire à effectif constant", "S'accompagne souvent de suppressions ou de transferts de postes"],
            ["Consultation du CSE dès 50 salariés si l'organisation est modifiée", "Consultation du CSE et, en cas de licenciements, procédure de licenciement économique"],
            ["Se conduit sur quelques mois, par étapes", "Calendrier contraint par les procédures légales"],
          ],
        },
      ],
    },

    {
      label: "Les signaux",
      titre: "Quand faut-il réorganiser une entreprise ?",
      blocs: [
        {
          type: "p",
          texte:
            "Une réorganisation se justifie par un problème observé, pas par une intuition ni par l'envie de marquer une arrivée. Les signaux les plus fréquents dans une PME qui grandit sont connus.",
        },
        {
          type: "liste",
          items: [
            "**Tout remonte au dirigeant** : les décisions attendent son feu vert, même celles qui relèvent d'un responsable",
            "**Les mêmes problèmes reviennent** entre les mêmes services : retards, erreurs de transmission, reproches croisés",
            "**La croissance va plus vite que la structure** : l'organisation pensée pour vingt personnes en compte soixante",
            "**Les processus tiennent par les personnes** : quand une personne clé est absente, un pan de l'activité s'arrête",
            "**Personne ne sait qui décide** d'un sujet qui touche plusieurs services",
          ],
        },
        { type: "h3", texte: "Les mauvaises raisons de réorganiser" },
        {
          type: "p",
          texte:
            "Contourner un conflit entre deux personnes en déplaçant les cases. Copier l'organisation d'un concurrent ou d'un grand groupe. Réorganiser parce que la précédente réorganisation n'a pas eu le temps de produire ses effets. Dans ces cas, le nouvel organigramme déplace le problème sans le résoudre, et ajoute la fatigue du changement.",
        },
        { type: "h3", texte: "Commencer par comprendre" },
        {
          type: "p",
          texte:
            "Avant de dessiner la cible, il faut savoir où l'organisation actuelle bloque. **L'organigramme décrit ce qui est prévu ; le fonctionnement réel dit ce qui se passe.** Suivre le parcours d'une commande ou d'une décision, service par service, révèle en général plus de choses qu'une série de réunions. C'est l'objet d'une [cartographie des processus](/infos-utiles/cartographie-des-processus/), et c'est le point de départ de toute réorganisation sérieuse.",
        },
      ],
    },

    {
      label: "Le cadre légal",
      titre: "Réorganisation et droit du travail : ce qu'il faut respecter",
      blocs: [
        {
          type: "p",
          texte:
            "Réorganiser relève du pouvoir de direction de l'employeur, mais ce pouvoir s'exerce dans un cadre. Trois textes du Code du travail reviennent dans la plupart des projets. Leur application dépend de votre effectif et de la nature des changements : faites valider le calendrier et les courriers par un avocat en droit social ou par votre conseil habituel.",
        },
        { type: "h3", texte: "La consultation du comité social et économique" },
        {
          type: "p",
          texte:
            "Dans les entreprises d'au moins 50 salariés, l'[article L2312-8 du Code du travail](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975196) prévoit que le CSE est informé et consulté sur les questions intéressant l'organisation, la gestion et la marche générale de l'entreprise, notamment sur les mesures de nature à affecter le volume ou la structure des effectifs et sur la modification de son organisation économique ou juridique. La consultation intervient avant la décision, pas après. Présenter au CSE un projet déjà annoncé aux équipes expose à une contestation et abîme la confiance.",
        },
        { type: "h3", texte: "La modification des contrats de travail" },
        {
          type: "p",
          texte:
            "Changer une tâche ou un rattachement ne modifie pas forcément le contrat de travail. Toucher à un élément essentiel, comme la rémunération ou la qualification, en est une. Quand cette modification est proposée pour un motif économique, l'[article L1222-6](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000028724382) impose une lettre recommandée avec avis de réception et laisse au salarié un mois pour refuser ; faute de réponse dans ce délai, il est réputé avoir accepté. La frontière entre simple changement des conditions de travail et modification du contrat s'apprécie au cas par cas.",
        },
        { type: "h3", texte: "Quand la réorganisation devient un motif économique" },
        {
          type: "p",
          texte:
            "L'[article L1233-3](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000006195607/) range parmi les motifs économiques de licenciement la réorganisation de l'entreprise nécessaire à la sauvegarde de sa compétitivité, à côté des difficultés économiques, des mutations technologiques et de la cessation d'activité. Si votre projet supprime des postes, vous entrez dans une procédure encadrée, avec ses délais et ses obligations de reclassement. C'est le moment de vous faire accompagner juridiquement, avant toute annonce.",
        },
      ],
    },

    {
      label: "Le coût humain",
      titre: "Le coût humain d'une réorganisation, et comment le limiter",
      blocs: [
        {
          type: "p",
          texte:
            "Une réorganisation fait des gagnants, des perdants et beaucoup d'inquiets. Même ceux dont le poste ne change pas se demandent ce que cela dit de l'avenir. Ignorer cette dimension ne la fait pas disparaître : elle ressort en arrêts, en départs ou en résistance passive.",
        },
        { type: "h3", texte: "Un facteur de risque reconnu" },
        {
          type: "p",
          texte:
            "L'[INRS](https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html) classe l'insécurité de la situation de travail parmi les six familles de facteurs de risques psychosociaux. Elle comprend, selon l'institut, « le risque de changement non maîtrisé de la tâche et des conditions de travail (restructurations, incertitude sur l'avenir de son métier…) ». **Ce n'est pas le changement en soi qui pèse, c'est le changement subi, mal expliqué et sans fin visible.** Nous traitons le sujet en détail dans notre article sur la [prévention des risques psychosociaux](/infos-utiles/prevention-risques-psychosociaux/).",
        },
        { type: "h3", texte: "Une obligation concrète : le document unique" },
        {
          type: "p",
          texte:
            "Le [document unique d'évaluation des risques professionnels](https://entreprendre.service-public.gouv.fr/vosdroits/F35360) doit être mis à jour lors de toute décision d'aménagement modifiant les conditions de travail. Une réorganisation qui change les charges, les horaires ou les rattachements en fait partie. C'est aussi l'occasion d'associer le médecin du travail et, s'il existe, le CSE à l'évaluation des effets du projet.",
        },
        { type: "h3", texte: "Ce qui réduit le coût humain" },
        {
          type: "liste",
          items: [
            "Dire tôt ce qui change et ce qui ne change pas, y compris quand tout n'est pas encore décidé",
            "Associer les personnes concernées au diagnostic et au test des scénarios",
            "Donner à chaque manager les éléments pour répondre aux questions de son équipe",
            "Suivre la charge de travail pendant la transition, où l'ancien et le nouveau fonctionnement coexistent",
            "Orienter vers le médecin du travail toute personne qui exprime une souffrance, sans chercher à l'évaluer soi-même",
          ],
        },
      ],
    },

    {
      label: "La méthode",
      titre: "Restructurer une entreprise en six étapes",
      blocs: [
        {
          type: "p",
          texte:
            "Qu'il s'agisse d'une réorganisation légère ou d'un projet plus lourd, la séquence reste la même. Sauter une étape fait presque toujours perdre plus de temps qu'elle n'en fait gagner.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Diagnostiquer** le fonctionnement réel : flux, rôles, décisions, tensions. Écrire aussi ce qui marche",
            "**Formuler le problème** à résoudre en une ou deux phrases, et les critères d'une organisation réussie",
            "**Construire deux ou trois scénarios**, les comparer sur ces critères avec les personnes qui en connaissent le terrain",
            "**Consulter et décider** : CSE s'il y a lieu, arbitrage du dirigeant, calendrier écrit",
            "**Déployer par étapes**, en testant d'abord sur un périmètre limité quand c'est possible",
            "**Stabiliser et mesurer** : laisser l'organisation se roder avant d'y retoucher, vérifier que le problème de départ a disparu",
          ],
        },
        { type: "h3", texte: "Le diagnostic, étape qu'on raccourcit à tort" },
        {
          type: "p",
          texte:
            "Beaucoup de projets commencent par la cible, parce qu'elle est plus motivante à dessiner. Le diagnostic protège pourtant de deux erreurs : casser ce qui fonctionne, et traiter un symptôme. Un retard de livraison peut venir de la production, mais aussi d'un devis mal transmis ou d'une décision d'achat qui attend le dirigeant.",
        },
        { type: "h3", texte: "Le test avant la généralisation" },
        {
          type: "p",
          texte:
            "Faire fonctionner la nouvelle organisation sur une équipe ou un flux pendant quelques semaines révèle les angles morts : un circuit de validation oublié, une charge sous-estimée, un outil qui ne suit pas. Il est plus facile de corriger à petite échelle que d'annoncer une seconde réorganisation.",
        },
        { type: "h3", texte: "La stabilisation, étape qu'on oublie" },
        {
          type: "p",
          texte:
            "Une organisation nouvelle met du temps à produire ses effets. Les réflexes anciens reviennent, les premières semaines sont moins efficaces qu'avant. C'est normal. Nous revenons sur cette phase et sur l'accompagnement des équipes dans notre article consacré à [accompagner le changement](/infos-utiles/accompagnement-au-changement/).",
        },
      ],
    },

    {
      label: "Les erreurs",
      titre: "Pourquoi une réorganisation échoue",
      blocs: [
        {
          type: "p",
          texte:
            "Les réorganisations qui échouent se ressemblent. Elles changent la structure sans changer la façon de décider, ou elles changent tout en même temps.",
        },
        {
          type: "tableau",
          style: "contraste",
          entetes: ["Erreur fréquente", "Ce qui fonctionne mieux"],
          lignes: [
            ["Dessiner le nouvel organigramme avant d'avoir compris l'ancien", "Partir du fonctionnement réel et des blocages observés"],
            ["Tout changer d'un coup pour « en finir »", "Changer ce qui bloque, garder ce qui fonctionne, avancer par étapes"],
            ["Changer les cases sans changer les règles de décision", "Écrire qui décide quoi, jusqu'où, et ce qui remonte"],
            ["Annoncer le projet une fois tout décidé", "Associer les équipes au diagnostic et au choix des scénarios"],
            ["Laisser les managers découvrir le projet avec leurs équipes", "Les préparer en premier : ce sont eux qui répondront aux questions"],
            ["Réorganiser de nouveau au bout de six mois", "Stabiliser, mesurer, puis ajuster à la marge"],
          ],
        },
        { type: "h3", texte: "Le piège des décisions qui remontent" },
        {
          type: "p",
          texte:
            "Le cas le plus courant en PME : on crée un poste de responsable, mais toutes les décisions continuent de passer par le dirigeant. Le nouveau responsable a le titre sans le pouvoir, ses équipes le contournent, et l'organisation est plus lourde qu'avant. **Une réorganisation qui ne redistribue pas les décisions n'a changé que le dessin.**",
        },
        { type: "h3", texte: "Le piège du calendrier" },
        {
          type: "p",
          texte:
            "Une réorganisation annoncée pour la rentrée et reportée trois fois entretient l'incertitude plus longtemps qu'un projet assumé. Fixez un calendrier réaliste, tenez-le, et dites-le quand il change.",
        },
      ],
    },

    {
      label: "Se faire accompagner",
      titre: "Réorganiser son entreprise avec un regard extérieur",
      blocs: [
        {
          type: "p",
          texte:
            "Un dirigeant peut conduire seul une réorganisation, surtout quand elle est limitée. Un regard extérieur apporte trois choses difficiles à obtenir de l'intérieur : un diagnostic que personne ne soupçonne de régler des comptes, une méthode qui a déjà servi, et du temps que le dirigeant n'a pas.",
        },
        { type: "h3", texte: "Ce que nous faisons, et ce que nous ne faisons pas" },
        {
          type: "p",
          texte:
            "Nous commençons par une lecture systémique des flux, des rôles et des tensions : diagnostic 360°, immersion terrain, entretiens, restitution. Nous conduisons ensuite, avec vous et vos équipes, les chantiers retenus, sur six à douze mois selon leur profondeur. Le périmètre est écrit dans la proposition et ne s'élargit pas sans votre accord. **On ne touche pas à ce qui fonctionne.** Nous ne rédigeons pas d'actes juridiques : le volet social se traite avec votre avocat ou votre conseil habituel.",
        },
        { type: "h3", texte: "Un référent unique" },
        {
          type: "p",
          texte:
            "Au cabinet, la réorganisation est portée par Muriel Saffroy, associée fondatrice et référente du pilier organisation et coopération. Si le projet soulève une question financière, commerciale ou industrielle, elle fait intervenir le collègue concerné sur ce point précis, pas sur l'ensemble de l'entreprise.",
        },
        {
          type: "p",
          texte:
            "Si vous sentez que votre organisation freine l'entreprise sans savoir encore par où commencer, un [diagnostic d'entreprise](/diagnostic/) vous aide à situer le blocage en quelques minutes, avant tout échange.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle est la différence entre réorganisation et restructuration ?",
      r: [
        "Une réorganisation modifie la façon dont le travail est réparti : services, rôles, rattachements, processus, instances de décision. Elle peut se faire à effectif constant. Une restructuration va plus loin : elle touche au volume des effectifs, aux sites, au périmètre d'activité ou à la forme juridique, souvent pour des raisons économiques. Les conséquences sociales et les procédures légales ne sont pas du même ordre.",
      ],
    },
    {
      q: "Faut-il consulter le CSE avant une réorganisation ?",
      r: [
        "Dans les entreprises d'au moins 50 salariés, oui dès lors que le projet touche à l'organisation, à la gestion ou à la marche générale de l'entreprise, notamment à la structure des effectifs : l'article L2312-8 du Code du travail le prévoit. La consultation doit intervenir avant la décision. En dessous de 50 salariés, les attributions du CSE sont différentes ; faites vérifier vos obligations par votre conseil habituel.",
      ],
    },
    {
      q: "Un salarié peut-il refuser une réorganisation ?",
      r: [
        "Il ne peut pas refuser un simple changement de ses conditions de travail, qui relève du pouvoir de direction. Il peut en revanche refuser la modification d'un élément essentiel de son contrat, comme sa rémunération ou sa qualification. Quand cette modification a un motif économique, il dispose d'un mois pour répondre à la lettre recommandée de l'employeur. La qualification exacte dépend des faits : faites-la valider par un avocat.",
      ],
    },
    {
      q: "Combien de temps dure une réorganisation d'entreprise ?",
      r: [
        "Cela dépend de son ampleur. Un changement de rattachement ou de processus limité peut se conduire en quelques semaines. Une réorganisation qui touche plusieurs services, avec diagnostic, scénarios, consultation, déploiement par étapes et stabilisation, demande plusieurs mois. La phase de stabilisation est souvent sous-estimée : l'organisation nouvelle a besoin de temps pour se roder avant d'être jugée.",
      ],
    },
    {
      q: "Comment annoncer une réorganisation aux salariés ?",
      r: [
        "Après la consultation du CSE quand elle est obligatoire, et après avoir préparé les managers, qui recevront les questions. Expliquez le problème à résoudre avant la solution, dites ce qui change et ce qui ne change pas, donnez le calendrier et le nom de l'interlocuteur. Les personnes directement concernées doivent l'apprendre en entretien individuel, pas en réunion collective ni par courriel.",
      ],
    },
  ],

  sources: [
    {
      titre: "Article L2312-8 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043975196",
    },
    {
      titre: "Article L1222-6 - Code du travail",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000028724382",
    },
    {
      titre: "Sous-section 2 : Définition du motif économique. (Article L1233-3)",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000006195607/",
    },
    {
      titre: "Prévenir les risques psychosociaux (RPS). Facteurs de risque",
      editeur: "INRS",
      url: "https://www.inrs.fr/risques/psychosociaux/facteurs-risques.html",
    },
    {
      titre: "Qu'est-ce que le document unique d'évaluation des risques professionnels (DUERP) ?",
      editeur: "Service-public.fr (Entreprendre)",
      url: "https://entreprendre.service-public.gouv.fr/vosdroits/F35360",
    },
  ],

  auteur: "muriel-saffroy",
  datePublication: "2027-04-26",
  accent: "organisation",
  pilier: { href: "/transformation-entreprise/", ancre: "conseil en organisation" },

  valide: false,
};
