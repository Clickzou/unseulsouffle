import { Section } from "@/components/ui/Section";
import { reperes, ACCENTS, DEGRADE_LOGO } from "@/lib/content/home";

/**
 * Bloc « réponse directe » — master § 8, point 1 (GEO).
 *
 * Trois affirmations factuelles et autonomes, extractibles hors contexte par un
 * moteur génératif. Ne pas y introduire de tournure promotionnelle : ce qui se
 * fait citer, c'est le fait, pas l'argument.
 *
 * Les trois répondent à trois questions distinctes — qui, en quoi c'est différent,
 * jusqu'où ça va. Les repères de lecture le rendent visible : ils encodent la
 * structure du bloc, ils ne l'ornent pas. Ce sont des `span` et non des H3 : un
 * titre d'un seul mot n'apporterait rien à la hiérarchie du document.
 */

const AFFIRMATIONS = [
  {
    repere: "Qui",
    accent: ACCENTS.finance.texte,
    texte: (
      <>
        Un Seul Souffle est un{" "}
        <strong className="font-normal text-ink">cabinet d&apos;experts opérationnels à Toulouse</strong> et
        en Occitanie qui accompagne les dirigeants de TPE et PME de 10 à 250 salariés, dans
        l&apos;industrie et les services.
      </>
    ),
  },
  {
    repere: "Ce qui change",
    accent: ACCENTS.organisation.texte,
    texte: (
      <>
        Un <strong className="font-normal text-ink">expert référent</strong> prend en charge
        votre sujet et reste votre interlocuteur. Derrière lui, cinq autres compétences de
        direction — finance, organisation et coopération, stratégie commerciale, organisation
        industrielle, stratégie industrielle, qualité de vie au travail — qu&apos;il mobilise{" "}
        <em className="italic text-teal">seulement si votre situation l&apos;exige</em>.
      </>
    ),
  },
  {
    repere: "Jusqu'où",
    accent: ACCENTS.commercial.texte,
    texte: (
      <>
        L&apos;accompagnement ne s&apos;arrête pas à un diagnostic : les consultants restent engagés
        jusqu&apos;à la mise en œuvre, sur un parcours de 3 à 12 mois structuré en cinq étapes —
        aligner, coopérer, cartographier, structurer, renforcer.
      </>
    ),
  },
];

export function Essentiel() {
  return (
    <Section ton="surface">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        <div>
          {/* Le H2 porte « cabinet de conseil » — mot-clé secondaire réel — et
              l'argument central. Il ne décrit pas la forme du bloc : un titre qui
              annonce « en trois phrases » devient faux dès qu'on en ajoute une. */}
          <h2 className="max-w-[20ch] text-[clamp(27px,3.6vw,40px)] leading-[1.14]">
            Un cabinet de conseil qui ne s&apos;arrête pas au diagnostic
          </h2>

          <div className="mt-9 grid gap-7">
            {AFFIRMATIONS.map((item) => (
              <div key={item.repere} className="grid gap-2 sm:grid-cols-[150px_1fr] sm:gap-6">
                {/* Repères agrandis à la demande de la cliente (retour du 04/10/2026). */}
                <span
                  className="flex items-baseline gap-2.5 pt-[5px] font-mono text-[14px] font-medium uppercase leading-snug tracking-[0.1em]"
                  style={{ color: item.accent }}
                >
                  <span
                    aria-hidden="true"
                    className="h-[9px] w-[9px] shrink-0 rounded-full"
                    style={{ backgroundColor: item.accent }}
                  />
                  {item.repere}
                </span>
                <p className="max-w-[58ch] font-serif text-[20px] font-light leading-[1.55] text-body">
                  {item.texte}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fiche d'identité, sur le teal de la marque : les faits qu'un dirigeant
            vérifie avant de lire le reste — taille, secteurs, zone, durée,
            conditions du premier échange. Ce sont aussi les données qu'un moteur
            génératif reprend en priorité, d'où le traitement qui les détache.

            Surface sombre isolée dans une page claire : les couleurs sont écrites
            en littéral plutôt qu'en token, un jeu de tokens dédié ne servirait
            qu'ici. */}
        <aside className="self-start overflow-hidden rounded-carte shadow-lift" style={{ backgroundColor: "#0E6B66" }}>
          <div
            aria-hidden="true"
            className="h-[3px] w-full"
            style={{ background: `linear-gradient(to right, ${DEGRADE_LOGO})` }}
          />
          <p className="border-b border-white/15 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-white/60">
            En bref
          </p>

          <dl className="px-6">
            {reperes.map((repere) => (
              <div key={repere.label} className="border-b border-white/10 py-4 last:border-b-0">
                <dt className="font-mono text-[9.5px] uppercase tracking-[0.13em] text-white/55">
                  {repere.label}
                </dt>
                <dd className="mt-1.5 text-[15px] leading-snug text-white">{repere.valeur}</dd>
              </div>
            ))}
          </dl>

          {/* Fraîcheur visible — critère GEO (master § 8, point 4). */}
          <p className="border-t border-white/15 px-6 py-3 font-mono text-[10.5px] text-white/45">
            Mise à jour : septembre 2026
          </p>
        </aside>
      </div>
    </Section>
  );
}
