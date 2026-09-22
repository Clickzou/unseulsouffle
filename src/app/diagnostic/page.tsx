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
  // 52 / 60
  title: "Diagnostic gratuit pour dirigeant de PME",
  // 143 / 150
  description:
    "Évaluez votre entreprise sur les cinq piliers en 5 minutes : finance, organisation, commercial, production, QVT. Résultat immédiat, sans engagement.",
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
      "Un score par pilier, qui montre où votre entreprise est solide et où elle est exposée. Vous le gardez, que vous nous recontactiez ou non.",
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
        name: "Diagnostic gratuit pour dirigeant de PME",
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

export default function DiagnosticPage() {
  return (
    <>
      <main>
        <EnTetePage
          fil="Diagnostic"
          label="Diagnostic gratuit"
          accent="finance"
          h1="Diagnostiquer mon entreprise en 5 minutes"
          lede="Cinq minutes pour savoir où votre entreprise est solide et où elle est exposée. Le diagnostic évalue les cinq piliers — finance, organisation, commercial, production, qualité de vie au travail — et vous donne un résultat immédiat. Il ne vous engage à rien."
        >
          {/* TODO client : remplacer par l'URL réelle du questionnaire ScoreApp.
              Tant qu'elle manque, le bouton mène au contact plutôt qu'au vide —
              le CTA cassé est précisément ce que l'audit a relevé. */}
          <div className="flex flex-wrap items-center gap-3">
            <Button href="/contact/" arrow>
              Commencer le diagnostic
            </Button>
            <span className="font-mono text-[11.5px] text-amber">
              [URL ScoreApp à fournir — le bouton pointe vers le contact en attendant]
            </span>
          </div>
        </EnTetePage>

        <Reveal>
          <Section ton="surface">
            <SectionHead
              label="Comment ça marche"
              titre="Trois étapes, et vous gardez le résultat"
              centre
            />

            <ol className="grid gap-px overflow-hidden rounded-carte border border-rule bg-rule sm:grid-cols-3">
              {ETAPES.map((etape) => (
                <li key={etape.n} className="bg-surface p-7">
                  <Label>{etape.n}</Label>
                  <h3 className="mt-3 font-serif text-[20px] font-normal text-ink">
                    {etape.titre}
                  </h3>
                  <p className="mt-2.5 text-[15.5px] leading-relaxed">{etape.texte}</p>
                </li>
              ))}
            </ol>
          </Section>
        </Reveal>

        <Reveal>
          <Section>
            <SectionHead
              label="Ce qui est évalué"
              titre="Les cinq piliers de votre entreprise"
              lede="Le diagnostic ne mesure pas une seule dimension. Un problème de trésorerie a souvent une cause commerciale, et une organisation qui coince finit toujours par coûter de l'argent."
            />

            <ul className="grid gap-px overflow-hidden rounded-carte border border-rule bg-rule sm:grid-cols-2">
              {piliers.map((pilier) => {
                const accent = ACCENTS[pilier.accent];
                return (
                  <li key={pilier.n} className="bg-surface p-6 last:sm:col-span-2">
                    <span
                      className="flex items-baseline gap-2 font-mono text-[10px] uppercase tracking-[0.13em]"
                      style={{ color: accent.texte }}
                    >
                      <span
                        aria-hidden="true"
                        className="h-[7px] w-[7px] shrink-0 rounded-full"
                        style={{ backgroundColor: accent.vif }}
                      />
                      {pilier.n}
                    </span>
                    <h3 className="mt-2.5 font-serif text-[19px] font-normal text-ink">
                      {pilier.nom}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed">{pilier.resume}</p>
                  </li>
                );
              })}
            </ul>
          </Section>
        </Reveal>

        <Reveal>
          <Section ton="ink">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <Label className="!text-[#6fc9c0]">Ce que ça n&apos;engage pas</Label>
                <h2 className="my-4 max-w-[22ch] text-[clamp(27px,3.6vw,40px)] leading-[1.14] !text-[#f4f2ec]">
                  Aucun rappel commercial sans votre accord
                </h2>
                <p className="max-w-prose text-lg leading-relaxed text-[#aeb6c3]">
                  Le résultat est à vous. Nous ne vous appelons pas parce que vous avez rempli un
                  questionnaire : si vous souhaitez en parler, vous demandez l&apos;entretien. Vos
                  réponses ne sont pas revendues ni transmises à des tiers.
                </p>
              </div>

              <Button href="/contact/" variant="lineOnInk" arrow className="shrink-0">
                Parler à Marjorie et Muriel
              </Button>
            </div>
          </Section>
        </Reveal>
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
