import type { Metadata } from "next";

import { EnTetePage } from "@/components/ui/EnTetePage";
import { Section, SectionHead, Label } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/Footer";
import { AideContact } from "@/components/AideContact";
import { Reveal } from "@/components/ui/Reveal";
import { ACCENTS, piliers, SITE_URL } from "@/lib/content/home";
import { ROBOTS } from "@/lib/seo/indexation";

/**
 * Page de conversion nº 1 — le CTA principal de tout le site.
 *
 * C'est l'URL qui renvoyait une 404 sur toutes les pages du site legacy
 * (audit 2026-08-31) : six liens de la home et deux par page pilier y mènent.
 *
 * Page de conversion : elle n'est pas soumise au plancher de 2 000 mots
 * (master § 6). Elle doit répondre à trois questions et s'arrêter — combien de
 * temps, ce que j'obtiens, ce que ça m'engage.
 */
export const metadata: Metadata = {
  // Requête : « diagnostic d'entreprise » (90/mois) + « diagnostic entreprise » (140/mois).
  // 58 / 60
  title: "Diagnostic d'entreprise gratuit pour PME",
  // 139 / 150
  description:
    "Diagnostic d'entreprise gratuit en 5 minutes : finance, organisation, commercial, production, QVT. Résultat immédiat, sans engagement.",
  alternates: { canonical: "/diagnostic/" },
  robots: ROBOTS,
};

const ETAPES = [
  {
    n: "01",
    titre: "Vous répondez au questionnaire",
    texte:
      "Une série de questions courtes sur les cinq piliers de votre entreprise. Cinq minutes, sans préparation ni document à rassembler.",
  },
  {
    n: "02",
    titre: "Vous recevez votre résultat immédiatement",
    texte:
      "Un score par pilier, qui montre où votre entreprise est solide et où elle est exposée. Ce diagnostic entreprise vous appartient : vous le gardez, que vous nous recontactiez ou non.",
  },
  {
    n: "03",
    titre: "Vous décidez de la suite",
    texte:
      "Si le résultat appelle une conversation, nous vous proposons un entretien de 30 minutes, gratuit et confidentiel. Sinon, vous en restez là.",
  },
];

/** JSON-LD : l'action de conversion, rattachée à l'organisation de la home. */
function schema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/diagnostic/#page`,
        url: `${SITE_URL}/diagnostic/`,
        name: "Diagnostic d'entreprise gratuit pour PME",
        description:
          "Auto-évaluation en 5 minutes sur les cinq piliers de l'entreprise : finance, organisation et coopération, stratégie commerciale, production, qualité de vie au travail.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/diagnostic/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Diagnostic", item: `${SITE_URL}/diagnostic/` },
        ],
      },
    ],
  };
}

/** Aperçu illustratif du résultat : une barre par pilier, clairement marqué « Exemple ». */
const APERCU = [72, 45, 60, 38, 55];

function ApercuResultat() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[28px] opacity-60 blur-2xl"
        style={{ background: `linear-gradient(135deg, ${ACCENTS.finance.vif}33, ${ACCENTS.organisation.vif}22, ${ACCENTS.qvt.vif}33)` }}
      />
      <figure className="relative overflow-hidden rounded-[20px] border border-rule bg-surface p-7 shadow-[0_30px_70px_-40px_rgba(20,32,54,0.55)] sm:p-8">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">Votre résultat</p>
          <span className="rounded-full bg-amber-wash px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-amber">
            Exemple
          </span>
        </div>
        <ul className="mt-6 grid gap-5">
          {piliers.map((pilier, i) => {
            const teinte = ACCENTS[pilier.accent];
            return (
              <li key={pilier.n}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[14.5px] text-ink">{pilier.nom}</span>
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-rule-2">
                  <div
                    className="anim-montee h-full rounded-full"
                    style={{ width: `${APERCU[i]}%`, backgroundColor: teinte.vif, animationDelay: `${400 + i * 90}ms` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
        <figcaption className="mt-6 border-t border-rule-2 pt-4 text-[13px] leading-relaxed text-muted">
          Un score par pilier : où votre entreprise est solide, et où elle est exposée.
        </figcaption>
      </figure>
    </div>
  );
}

const ENGAGEMENTS = [
  { titre: "Le résultat est à vous", texte: "Vous le gardez, que vous nous recontactiez ou non." },
  { titre: "Aucun rappel sans votre accord", texte: "Si vous souhaitez en parler, c'est vous qui demandez l'entretien." },
  { titre: "Vos réponses restent chez vous", texte: "Le calcul se fait dans votre navigateur : rien n'est enregistré ni transmis." },
];

export default function DiagnosticPage() {
  return (
    <>
      <main>
        <EnTetePage
          fil="Diagnostic"
          label="Diagnostic gratuit"
          accent="finance"
          anime
          h1="Diagnostic d'entreprise gratuit en 5 minutes"
          lede="Ce diagnostic d'entreprise gratuit vous dit en cinq minutes où votre entreprise est solide et où elle est exposée. Proposé par Un Seul Souffle, cabinet de conseil à Toulouse, il évalue les cinq piliers — finance, organisation, commercial, production, qualité de vie au travail — et vous donne un résultat immédiat. Il ne vous engage à rien."
          aside={<ApercuResultat />}
          asideLarge
        >
          {/* Le questionnaire est intégré au site : /diagnostic/questionnaire/. */}
          <ul className="mb-7 flex flex-wrap gap-2.5">
            {["5 minutes", "Gratuit", "Résultat immédiat", "Sans engagement"].map((repere) => (
              <li
                key={repere}
                className="rounded-full border border-rule bg-surface px-4 py-1.5 text-[13.5px] text-ink"
              >
                <span aria-hidden="true" className="mr-2 text-teal">✓</span>
                {repere}
              </li>
            ))}
          </ul>
          <Button href="/diagnostic/questionnaire/" arrow>
            Commencer le diagnostic
          </Button>
        </EnTetePage>

        {/* Comment ça marche — frise de trois étapes. */}
        <Section ton="surface">
          <Reveal>
            <SectionHead label="Comment ça marche" titre="Votre diagnostic d'entreprise en trois étapes" centre />
          </Reveal>
          <ol className="relative grid gap-6 md:grid-cols-3">
            <span
              aria-hidden="true"
              className="absolute left-[16.6%] right-[16.6%] top-7 hidden h-px md:block"
              style={{ background: `linear-gradient(to right, ${ACCENTS.finance.vif}, ${ACCENTS.organisation.vif}, ${ACCENTS.commercial.vif})` }}
            />
            {ETAPES.map((etape, i) => {
              const teinte = [ACCENTS.finance, ACCENTS.organisation, ACCENTS.commercial][i];
              return (
                <Reveal as="li" key={etape.n} delay={i * 110} className="relative text-center">
                  <span
                    className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 bg-surface font-serif text-[22px]"
                    style={{ borderColor: teinte.vif, color: teinte.texte }}
                  >
                    {i + 1}
                  </span>
                  <div className="mt-6 h-[calc(100%-5rem)] rounded-[16px] border border-rule bg-ground p-7">
                    <h3 className="font-serif text-[21px] font-normal leading-snug text-ink">{etape.titre}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed">{etape.texte}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </Section>

        {/* Les cinq piliers — pleine largeur. */}
        <Section large>
          <Reveal className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-20">
            <div>
              <Label>Ce qui est évalué</Label>
              <h2 className="mt-4 text-[clamp(28px,3.4vw,44px)] leading-[1.12]">
                Un diagnostic entreprise sur les cinq piliers
              </h2>
            </div>
            <p className="max-w-prose text-lg leading-relaxed text-body">
              Le diagnostic d&apos;entreprise ne mesure pas une seule dimension. Un problème de
              trésorerie a souvent une cause commerciale, et une organisation qui coince finit
              toujours par coûter de l&apos;argent. C&apos;est cette lecture croisée que le cabinet
              apporte aux PME de Toulouse et d&apos;Occitanie.
            </p>
          </Reveal>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {piliers.map((pilier, i) => {
              const teinte = ACCENTS[pilier.accent];
              return (
                <Reveal as="li" key={pilier.n} delay={i * 80}>
                  <div
                    className="relative h-full overflow-hidden rounded-[18px] border border-rule bg-surface p-6 pt-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-26px_rgba(20,32,54,0.45)]"
                    style={{ backgroundImage: `linear-gradient(180deg, ${teinte.vif}17 0%, transparent 55%)` }}
                  >
                    <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[4px]" style={{ backgroundColor: teinte.vif }} />
                    <span
                      aria-hidden="true"
                      className="absolute right-5 top-4 font-serif text-[48px] leading-none"
                      style={{ color: teinte.vif, opacity: 0.3 }}
                    >
                      {pilier.n}
                    </span>
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.14em]" style={{ color: teinte.texte }}>
                      Pilier {pilier.n}
                    </p>
                    <h3 className="mt-3 pr-10 font-serif text-[21px] font-normal leading-snug text-ink">{pilier.nom}</h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed">{pilier.resume}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Section>

        {/* Ce que ça n'engage pas — texte à gauche, engagements à droite. */}
        <Section ton="ink">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <Label className="!text-[#6fc9c0]">Ce que ça n&apos;engage pas</Label>
              <h2 className="my-4 max-w-[22ch] text-[clamp(27px,3.6vw,40px)] leading-[1.14] !text-[#f4f2ec]">
                Diagnostic gratuit : aucun rappel sans votre accord
              </h2>
              <p className="max-w-prose text-lg leading-relaxed text-[#aeb6c3]">
                Le résultat est à vous. Nous ne vous appelons pas parce que vous avez rempli un
                questionnaire : si vous souhaitez en parler, vous demandez l&apos;entretien.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/diagnostic/questionnaire/" arrow>
                  Commencer le diagnostic
                </Button>
                <Button href="/contact/" variant="lineOnInk">
                  Parler à Marjorie et Muriel
                </Button>
              </div>
            </Reveal>
            <ul className="grid gap-4">
              {ENGAGEMENTS.map((e, i) => (
                <Reveal as="li" key={e.titre} delay={i * 100}>
                  <div className="flex gap-5 rounded-[16px] border border-white/10 bg-white/[0.04] p-6">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[16px] text-white"
                      style={{ backgroundColor: [ACCENTS.finance, ACCENTS.organisation, ACCENTS.qvt][i].vif }}
                    >
                      ✓
                    </span>
                    <div>
                      <p className="font-serif text-[20px] !text-[#f4f2ec]">{e.titre}</p>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-[#aeb6c3]">{e.texte}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </Section>
      </main>

      <Footer />
      <AideContact />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema()) }}
      />
    </>
  );
}
