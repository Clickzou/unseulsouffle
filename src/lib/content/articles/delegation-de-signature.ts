import type { Article } from "@/lib/content/article";

/**
 * Article de fond — silo 3, pilotage financier. Signé Marjorie Anglade.
 * Requête : « délégation de signature » (660/mois, KD 9, SE Ranking 24/09/2026).
 * Secondaire : « modèle de délégation de signature » (320).
 *
 * Anti-doublon : « délégation de pouvoir » (12/2026, Muriel Saffroy) traite le
 * transfert de pouvoir et de responsabilité pénale. Celui-ci traite la SIGNATURE :
 * qui engage l'entreprise sur quels actes, et le contrôle interne des paiements.
 * Il y renvoie pour la délégation de pouvoir.
 *
 * VIGILANCE — SUJET JURIDIQUE. Chaque règle citée renvoie à un texte ou à un arrêt
 * lu sur Légifrance le 24/09/2026 (code civil art. 1367, 1984, 1998, 2004 ; code
 * de commerce L227-6 et L223-18 ; Cass. ch. mixte 19/11/2010 ; Cass. soc.
 * 26/04/2017 ; décret 2005-850 pour le secteur public). Le texte ne fournit PAS de
 * modèle rédigé : il liste les mentions à prévoir et renvoie vers un avocat ou
 * l'expert-comptable de l'entreprise pour l'acte. Le cabinet ne rédige pas d'actes
 * juridiques et ne tient pas de comptabilité ; Marjorie Anglade, expert-comptable
 * diplômée inscrite à l'Ordre, intervient au cabinet comme directrice financière
 * externalisée.
 *
 * Liens vers d'autres articles : uniquement des articles publiés avant le
 * 09/08/2027 (delegation-de-pouvoir, gestion-de-tresorerie,
 * daf-externe-ou-expert-comptable).
 */
export const article: Article = {
  slug: "delegation-de-signature",

  motCle: "délégation de signature (660/mois, KD 9) — SE Ranking, 24/09/2026",
  motsClesSecondaires: ["modèle de délégation de signature (320/mois)"],

  // 42 / 42
  metaTitle: "Délégation de signature : modèle et règles",
  // 142 / 150
  metaDescription:
    "Délégation de signature en PME : définition, différence avec la délégation de pouvoir, mentions d'un modèle, seuils et contrôle des paiements.",

  h1: "Délégation de signature : décider qui engage votre entreprise, et jusqu'où",

  chapo:
    "Une délégation de signature autorise un salarié à signer certains actes au nom du dirigeant : bons de commande, virements, contrats courants, courriers. Elle ne transfère ni le pouvoir de décider ni la responsabilité, qui restent au délégant. Juridiquement, c'est un mandat : l'entreprise est engagée par ce que le délégataire signe dans les limites fixées. Dans une PME, elle sert à ne plus tout faire passer par le bureau du dirigeant, à condition d'être écrite, bornée par des seuils et suivie. Mal tenue, elle ouvre la porte aux erreurs et aux fraudes au virement. Voici ce qu'elle recouvre, les mentions d'un modèle et les règles de contrôle à poser.",

  essentiel: {
    reponse:
      "La délégation de signature est l'acte par lequel le représentant légal d'une entreprise autorise une personne, en général un salarié, à signer en son nom des actes déterminés, dans des limites de montant, de nature et de durée. Elle relève du mandat défini à l'article 1984 du code civil : le délégataire signe pour le compte du dirigeant, qui reste décisionnaire et responsable. Elle se distingue de la délégation de pouvoir, qui transfère le pouvoir de décider et la responsabilité qui l'accompagne. Aucun modèle unique n'est imposé ; un écrit précis reste indispensable pour la preuve.",
    points: [
      "Délégation de signature : le salarié signe, le dirigeant reste décisionnaire et responsable",
      "Délégation de pouvoir : le pouvoir de décider et la responsabilité sont transférés",
      "Un modèle utile précise le délégant, le délégataire, les actes, les seuils, la durée et la révocation",
      "Les paiements appellent des seuils et une double validation : c'est la parade de base contre la fraude au président",
      "Une personne étrangère à l'entreprise ne peut pas conduire un licenciement jusqu'à son terme au nom de l'employeur",
    ],
  },

  chapitres: [
    {
      label: "Définition",
      titre: "Délégation de signature : définition et effets",
      blocs: [
        {
          type: "p",
          texte:
            "Dans une PME de trente salariés, le dirigeant signe tout : les devis importants, les commandes fournisseurs, les virements, les contrats de travail, les courriers à l'administration. Au-delà d'une certaine taille, ce circuit ralentit l'entreprise et use le dirigeant. La délégation de signature répond à ce problème, sans déplacer la décision.",
        },
        { type: "h3", texte: "Un mandat au sens du code civil" },
        {
          type: "p",
          texte:
            "L'[article 1984 du code civil](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006445236) définit le mandat comme « un acte par lequel une personne donne à une autre le pouvoir de faire quelque chose pour le mandant et en son nom ». C'est exactement ce que fait une délégation de signature : le délégataire signe au nom du dirigeant, pour le compte de l'entreprise.",
        },
        {
          type: "p",
          texte:
            "Conséquence directe, posée par l'[article 1998 du même code](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006445293) : le mandant est tenu des engagements contractés par le mandataire « conformément au pouvoir qui lui a été donné ». Au-delà, il n'est tenu que s'il a ratifié l'acte, expressément ou tacitement. **La délégation engage donc l'entreprise dans ses limites ; ces limites sont votre protection.**",
        },
        { type: "h3", texte: "Ce qu'elle ne transfère pas" },
        {
          type: "p",
          texte:
            "Bpifrance Création, dans sa fiche sur la [délégation de pouvoir](https://bpifrance-creation.fr/encyclopedie/gerer-lentreprise/gestion-evenements-exceptionnels/delegation-pouvoir), résume la différence : la délégation de signature permet de signer « sans pouvoir décisionnel propre et sans assumer la responsabilité de la décision ». Le délégataire exécute une décision prise par le dirigeant ou dans un cadre fixé par lui.",
        },
        {
          type: "p",
          texte:
            "Dans une PME, c'est souvent la première brique d'une organisation financière qui ne dépend plus d'une seule personne. C'est aussi l'un des sujets que nous posons en début de mission de [DAF externalisé](/daf-externalise-toulouse/) : qui signe quoi aujourd'hui, et ce qu'il faudrait écrire.",
        },
      ],
    },

    {
      label: "Ne pas confondre",
      titre: "Délégation de signature ou délégation de pouvoir : la différence",
      blocs: [
        {
          type: "p",
          texte:
            "Les deux termes sont souvent employés l'un pour l'autre dans les entreprises. Leurs effets sont pourtant très différents, en particulier sur la responsabilité du dirigeant.",
        },
        {
          type: "tableau",
          entetes: ["Délégation de signature", "Délégation de pouvoir"],
          lignes: [
            ["Le délégataire signe au nom du dirigeant", "Le délégataire décide lui-même dans son périmètre"],
            ["La décision reste au délégant", "La décision est transférée au délégataire"],
            ["La responsabilité reste au délégant", "La responsabilité, y compris pénale, peut être transférée"],
            ["Exige un périmètre et des limites claires", "Exige en plus compétence, autorité et moyens chez le délégataire"],
            ["Usage type : commandes, paiements, courriers, contrats courants", "Usage type : sécurité d'un site, gestion d'un établissement"],
          ],
        },
        {
          type: "p",
          texte:
            "Si votre objectif est de confier à un directeur de site la responsabilité de la sécurité ou de l'application du droit du travail, c'est une délégation de pouvoir qu'il faut, avec ses conditions propres, détaillées dans notre article sur la [délégation de pouvoir](/infos-utiles/delegation-de-pouvoir/). Si l'objectif est que votre responsable administratif puisse signer les virements courants sans vous attendre, une délégation de signature suffit.",
        },
        { type: "h3", texte: "Et dans l'administration ?" },
        {
          type: "p",
          texte:
            "Une partie des recherches sur la délégation de signature concerne le secteur public, qui obéit à des textes propres. Pour les ministères, le [décret n° 2005-850 du 27 juillet 2005](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000261276) organise les délégations de signature des membres du Gouvernement. Cet article traite uniquement des entreprises privées.",
        },
      ],
    },

    {
      label: "Qui délègue",
      titre: "Qui peut déléguer sa signature, et à qui",
      blocs: [
        { type: "h3", texte: "Le délégant : le représentant légal" },
        {
          type: "p",
          texte:
            "Seul celui qui détient un pouvoir peut le déléguer. Dans une SAS, l'[article L227-6 du code de commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006227034) investit le président « des pouvoirs les plus étendus pour agir en toute circonstance au nom de la société », et permet aux statuts de prévoir un directeur général ou un directeur général délégué exerçant les mêmes pouvoirs. Dans une SARL, l'[article L223-18](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031013015) confère des pouvoirs comparables au gérant.",
        },
        {
          type: "p",
          texte:
            "Point à retenir : les limitations de pouvoirs prévues dans les statuts sont inopposables aux tiers. Une restriction interne ne protège donc pas l'entreprise vis-à-vis d'un fournisseur ; c'est la délégation écrite, connue des personnes concernées et de la banque, qui cadre la signature au quotidien.",
        },
        { type: "h3", texte: "Le délégataire : de préférence un salarié" },
        {
          type: "p",
          texte:
            "Pour les actes courants, le délégataire est un salarié qui connaît le sujet : responsable administratif et financier, responsable des achats, directeur de site. Pour les ruptures de contrat de travail, la jurisprudence pose des limites nettes. La Cour de cassation, [chambre mixte, 19 novembre 2010](https://www.legifrance.gouv.fr/juri/id/JURITEXT000023144605/), a jugé que les représentants légaux d'une SAS peuvent déléguer le pouvoir d'effectuer des actes déterminés, « tel que celui d'engager ou de licencier ».",
        },
        {
          type: "p",
          texte:
            "En revanche, selon la [chambre sociale, 26 avril 2017](https://www.legifrance.gouv.fr/juri/id/JURITEXT000034550517/), « la finalité même de l'entretien préalable et les règles relatives à la notification du licenciement interdisent à l'employeur de donner mandat à une personne étrangère à l'entreprise pour conduire la procédure de licenciement jusqu'à son terme ». Dans cette affaire, c'est l'expert-comptable de l'entreprise qui avait mené la procédure et signé la lettre « pour ordre » : le licenciement a été jugé sans cause réelle et sérieuse. **Votre expert-comptable, votre avocat ou votre DAF externe peuvent vous conseiller ; ils ne signent pas un licenciement à votre place.**",
        },
      ],
    },

    {
      label: "En pratique",
      titre: "Ce qu'une PME délègue en pratique",
      blocs: [
        {
          type: "p",
          texte:
            "Une délégation de signature utile ne couvre pas « la gestion courante » en général. Elle liste des catégories d'actes, chacune avec son plafond. Voici une grille type, à adapter à votre activité et à votre taille.",
        },
        {
          type: "tableau",
          entetes: ["Catégorie d'actes", "Points à fixer dans la délégation"],
          lignes: [
            ["Bons de commande fournisseurs", "Plafond par commande, fournisseurs référencés uniquement, budget de rattachement"],
            ["Virements et paiements", "Plafond par opération, double validation au-delà, interdiction de payer sur un nouveau RIB sans contre-appel"],
            ["Devis et contrats clients", "Plafond de montant, remise maximale, conditions de paiement standard uniquement"],
            ["Documents RH courants", "Attestations, plannings, congés ; embauches et ruptures traitées à part"],
            ["Courriers et déclarations administratives", "Liste des organismes concernés, accès en ligne nominatifs"],
            ["Contrats engageant sur plusieurs années", "En général non délégués, ou avec validation préalable du dirigeant"],
          ],
        },
        { type: "h3", texte: "Les espaces en ligne ont leurs propres délégations" },
        {
          type: "p",
          texte:
            "Beaucoup de signatures sont aujourd'hui des validations en ligne. Sur l'espace professionnel des impôts, par exemple, l'administrateur peut [donner accès aux services en ligne à la personne de son choix](https://www.impots.gouv.fr/professionnel/questions/si-je-cree-un-espace-professionnel-serai-je-le-seul-habilite-gerer-les), comme administrateur suppléant ou comme délégataire ; les délégataires ne peuvent pas modifier les coordonnées bancaires ni l'adresse électronique. Les banques proposent des mécanismes comparables sur leurs espaces entreprises. Ces habilitations doivent correspondre à la délégation écrite, pas la contredire.",
        },
        { type: "h3", texte: "La signature électronique" },
        {
          type: "p",
          texte:
            "Une délégation peut s'exercer par signature électronique. L'[article 1367 du code civil](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032042456) précise qu'elle « consiste en l'usage d'un procédé fiable d'identification garantissant son lien avec l'acte ». Chaque délégataire doit donc disposer de son propre accès : un identifiant partagé entre plusieurs personnes rend la délégation invérifiable.",
        },
      ],
    },

    {
      label: "Le modèle",
      titre: "Modèle de délégation de signature : les mentions à prévoir",
      blocs: [
        {
          type: "p",
          texte:
            "Aucun texte n'impose de modèle pour une entreprise privée : selon l'[article 1985 du code civil](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006445238), le mandat peut être donné par acte authentique, par acte sous seing privé, même par lettre, ou verbalement. Un écrit précis reste indispensable : c'est lui qui prouve ce que le délégataire pouvait signer, et ce qu'il ne pouvait pas. Voici les mentions qu'un modèle de délégation de signature doit contenir.",
        },
        {
          type: "liste",
          style: "cartes",
          items: [
            "**Les parties** : identité et fonction du délégant, avec la source de son pouvoir (statuts, décision de nomination), identité et fonction du délégataire",
            "**L'objet** : la liste limitative des catégories d'actes que le délégataire peut signer",
            "**Les limites** : plafonds par acte et, le cas échéant, cumulés par mois ; actes exclus",
            "**Les conditions** : règles de double validation, budget de rattachement, pièces à conserver",
            "**La durée** : date d'effet, date de fin ou révision annuelle, fin automatique en cas de changement de fonction",
            "**La mention de signature** : formule à apposer, par exemple « Pour le président, par délégation », suivie du nom et de la fonction",
            "**L'acceptation** : signature du délégataire, qui atteste avoir pris connaissance des limites",
            "**La révocation** : rappel qu'elle peut intervenir à tout moment, et à qui elle est notifiée",
          ],
        },
        {
          type: "encadre",
          titre: "Pourquoi nous ne fournissons pas de modèle rédigé",
          texte:
            "La bonne rédaction dépend de vos statuts, de votre forme sociale et des actes concernés. Faites relire l'acte par votre avocat ou votre expert-comptable. Notre rôle se situe en amont : cartographier les signatures réelles, fixer des seuils cohérents avec votre trésorerie et vérifier que le circuit est appliqué.",
        },
        { type: "h3", texte: "La révocation, un droit permanent" },
        {
          type: "p",
          texte:
            "Selon l'[article 2004 du code civil](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006445302), « le mandant peut révoquer sa procuration quand bon lui semble ». Encore faut-il que la révocation soit connue : informez la banque, retirez les accès en ligne et prévenez les fournisseurs concernés le jour même.",
        },
      ],
    },

    {
      label: "Le contrôle",
      titre: "Délégation de signature et sécurité des paiements",
      exergue:
        "Une délégation sans seuil ni double validation est une invitation adressée aux fraudeurs.",
      blocs: [
        {
          type: "p",
          texte:
            "La délégation de signature n'est pas seulement une question d'efficacité. C'est un élément central du contrôle interne, en particulier sur les paiements, cible privilégiée des escroqueries.",
        },
        { type: "h3", texte: "La fraude au président vise les personnes habilitées à payer" },
        {
          type: "p",
          texte:
            "Le scénario est connu : un faux dirigeant, un faux fournisseur ou un faux avocat demande un virement urgent et confidentiel, ou un changement de coordonnées bancaires. Il vise précisément les collaborateurs qui ont une délégation de paiement. Cybermalveillance.gouv.fr recommande, dans sa fiche sur les [faux ordres de virement](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/escroquerie-faux-ordres-virement-fovi), de diffuser « des procédures claires aux collaborateurs mandatés » et de mettre en place « une procédure de vérification et de validation hiérarchique interne non dérogeable des demandes de virement imprévues ».",
        },
        {
          type: "p",
          texte:
            "Les services de l'État dans le Morbihan, dans leur note sur [l'arnaque au président](https://www.morbihan.gouv.fr/Actions-de-l-Etat/Cybersecurite/Actualites/L-arnaque-au-president-ou-escroquerie-aux-faux-ordres-de-virement-FOVI), indiquent que 2 300 plaintes ont été déposées en cinq ans et recommandent des procédures de vérification et de signatures multiples pour les paiements internationaux. Plus largement, la Banque de France relève dans le [rapport 2024 de l'Observatoire de la sécurité des moyens de paiement](https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-de-lobservatoire-de-la-securite-des-moyens-de-paiement-2024) que la fraude par manipulation représente 32 % du montant total de la fraude, soit 382 millions d'euros.",
        },
        { type: "h3", texte: "Quatre règles simples" },
        {
          type: "liste",
          items: [
            "**Séparer** : celui qui saisit un virement n'est pas celui qui le valide",
            "**Plafonner** : au-delà d'un seuil, deux signatures, dont celle du dirigeant ou d'un second délégataire",
            "**Contre-appeler** : tout changement de RIB se vérifie par un appel à un numéro déjà connu, jamais celui du courriel reçu",
            "**Ne jamais déroger** : aucune urgence, même présentée comme venant du dirigeant, ne suspend la procédure",
          ],
        },
        {
          type: "p",
          texte:
            "Les seuils ne se fixent pas au hasard : ils dépendent du montant de vos paiements habituels et de votre trésorerie disponible. C'est un sujet que nous abordons avec la [gestion de trésorerie](/infos-utiles/gestion-de-tresorerie/), dont le circuit de paiement fait partie intégrante.",
        },
      ],
    },

    {
      label: "Passer à l'action",
      titre: "Mettre en place des délégations de signature dans une PME",
      blocs: [
        {
          type: "p",
          texte:
            "Une délégation de signature efficace se construit en partant de la réalité, pas d'un modèle. Quatre étapes suffisent dans la plupart des PME.",
        },
        { type: "h3", texte: "1. Faire l'inventaire de qui signe réellement" },
        {
          type: "p",
          texte:
            "Listez les actes signés sur trois mois, par qui, et pour quels montants. Vous découvrirez souvent des délégations de fait jamais écrites, et des accès bancaires restés ouverts à des personnes qui ont changé de poste.",
        },
        { type: "h3", texte: "2. Fixer les seuils et les exclusions" },
        {
          type: "p",
          texte:
            "Déterminez pour chaque catégorie d'actes ce qui peut être signé seul, ce qui demande une seconde signature et ce qui reste au dirigeant. Les engagements pluriannuels, les emprunts et les ruptures de contrat restent en général hors délégation.",
        },
        { type: "h3", texte: "3. Écrire, faire accepter, aligner les accès" },
        {
          type: "p",
          texte:
            "Rédigez chaque délégation avec votre conseil juridique, faites-la signer par le délégataire, puis alignez les habilitations bancaires et administratives sur ce qui est écrit. Tenez un registre à jour des délégations en cours.",
        },
        { type: "h3", texte: "4. Revoir une fois par an et à chaque départ" },
        {
          type: "p",
          texte:
            "Une délégation vit avec l'organisation. Revoyez-les à chaque changement de fonction, et au moins une fois par an avec votre expert-comptable, qui voit passer les pièces et repère les écarts. Le partage des rôles entre lui et une direction financière est détaillé dans notre article [DAF externe ou expert-comptable](/infos-utiles/daf-externe-ou-expert-comptable/).",
        },
        {
          type: "p",
          texte:
            "Au cabinet, ce travail est porté par [Marjorie Anglade](/marjorie-anglade/), expert-comptable diplômée et inscrite à l'Ordre, qui intervient chez nous comme directrice financière externalisée : elle ne tient pas vos comptes et ne rédige pas vos actes, elle organise le circuit de décision et de paiement autour d'eux. Le périmètre est arrêté avec vous et ne s'élargit pas sans votre accord. Si vous voulez savoir où votre organisation dépend encore trop de vous, notre [diagnostic d'entreprise](/diagnostic/) vous aide à le situer en quelques minutes.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Quelle est la différence entre délégation de signature et délégation de pouvoir ?",
      r: [
        "La délégation de signature autorise un salarié à signer des actes au nom du dirigeant, sans pouvoir de décision propre : la décision et la responsabilité restent au délégant. La délégation de pouvoir transfère le pouvoir de décider sur un périmètre, avec la responsabilité qui l'accompagne, y compris pénale, à condition que le délégataire dispose de la compétence, de l'autorité et des moyens nécessaires.",
      ],
    },
    {
      q: "Une délégation de signature doit-elle être écrite ?",
      r: [
        "Pour une entreprise privée, aucun texte n'impose une forme particulière, et le code civil admet qu'un mandat soit donné par écrit ou verbalement. En pratique, l'écrit est indispensable : c'est lui qui prouve les limites de la délégation, face à la banque, à un fournisseur ou en cas de litige. Il doit préciser les actes, les plafonds, la durée et être accepté par le délégataire.",
      ],
    },
    {
      q: "Existe-t-il un modèle de délégation de signature ?",
      r: [
        "Il n'existe pas de modèle officiel pour les entreprises privées. Un modèle utile précise le délégant et la source de son pouvoir, le délégataire, la liste limitative des actes, les plafonds, les règles de double validation, la durée, la formule de signature et les conditions de révocation. Faites relire l'acte par votre avocat ou votre expert-comptable, car la rédaction dépend de vos statuts.",
      ],
    },
    {
      q: "Mon expert-comptable peut-il signer une lettre de licenciement pour moi ?",
      r: [
        "Non. Dans un arrêt du 26 avril 2017, la chambre sociale de la Cour de cassation a jugé que l'employeur ne peut pas donner mandat à une personne étrangère à l'entreprise pour conduire la procédure de licenciement jusqu'à son terme. Dans cette affaire, l'expert-comptable avait mené la procédure et signé la lettre « pour ordre » : le licenciement a été jugé sans cause réelle et sérieuse.",
      ],
    },
    {
      q: "Comment révoquer une délégation de signature ?",
      r: [
        "Le mandant peut révoquer sa procuration quand bon lui semble, selon l'article 2004 du code civil. Formalisez la révocation par écrit, remettez-la au délégataire, puis retirez le jour même ses accès bancaires et administratifs et prévenez la banque et les partenaires concernés. Une révocation que personne ne connaît laisse le délégataire en mesure de signer.",
      ],
    },
  ],

  sources: [
    {
      titre: "Article 1984 - Code civil",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006445236",
    },
    {
      titre: "Article 1998 - Code civil",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006445293",
    },
    {
      titre: "Article 1985 - Code civil",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006445238",
    },
    {
      titre: "Article 2004 - Code civil",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006445302",
    },
    {
      titre: "Article 1367 - Code civil",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032042456",
    },
    {
      titre: "Article L227-6 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006227034",
    },
    {
      titre: "Article L223-18 - Code de commerce",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031013015",
    },
    {
      titre: "Cour de cassation, Chambre mixte, 19 novembre 2010, 10-30.215, Publié au bulletin",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/juri/id/JURITEXT000023144605/",
    },
    {
      titre: "Cour de cassation, civile, Chambre sociale, 26 avril 2017, 15-25.204, Publié au bulletin",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/juri/id/JURITEXT000034550517/",
    },
    {
      titre: "Décret n°2005-850 du 27 juillet 2005 relatif aux délégations de signature des membres du Gouvernement",
      editeur: "Légifrance",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000261276",
    },
    {
      titre: "La délégation de pouvoir",
      editeur: "Bpifrance Création",
      url: "https://bpifrance-creation.fr/encyclopedie/gerer-lentreprise/gestion-evenements-exceptionnels/delegation-pouvoir",
    },
    {
      titre: "Si je crée un espace professionnel, serai-je le (la) seul(e) habilité(e) à gérer les services de mon entreprise ?",
      editeur: "impots.gouv.fr",
      url: "https://www.impots.gouv.fr/professionnel/questions/si-je-cree-un-espace-professionnel-serai-je-le-seul-habilite-gerer-les",
    },
    {
      titre: "La fraude au virement bancaire (FOVI) ou au faux ordre de virement",
      editeur: "Cybermalveillance.gouv.fr",
      url: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/escroquerie-faux-ordres-virement-fovi",
    },
    {
      titre: "L'arnaque au président ou escroquerie aux faux ordres de virement (FOVI)",
      editeur: "Les services de l'État en Morbihan",
      url: "https://www.morbihan.gouv.fr/Actions-de-l-Etat/Cybersecurite/Actualites/L-arnaque-au-president-ou-escroquerie-aux-faux-ordres-de-virement-FOVI",
    },
    {
      titre: "Rapport de l'Observatoire de la sécurité des moyens de paiement 2024",
      editeur: "Banque de France",
      url: "https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-de-lobservatoire-de-la-securite-des-moyens-de-paiement-2024",
    },
  ],

  auteur: "marjorie-anglade",
  datePublication: "2027-08-09",
  accent: "finance",
  pilier: { href: "/daf-externalise-toulouse/", ancre: "DAF externalisé" },

  valide: false,
};
