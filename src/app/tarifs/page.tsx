import type { Metadata } from "next";
import Link from "next/link";

import { EnTetePage } from "@/components/ui/EnTetePage";
import { Section, SectionHead } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/Footer";
import { AideContact } from "@/components/AideContact";
import { CTAFinal } from "@/components/CTAFinal";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/ui/Reveal";
import { ACCENTS, SITE_URL } from "@/lib/content/home";
import { offres, tarifsProvisoires } from "@/lib/content/tarifs";
import { NON_INDEXABLE, ROBOTS } from "@/lib/seo/indexation";

/**
 * Tarifs — récapitulatif des trois offres, lu dans tarifs.ts.
 *
 * Rôle : pas une page de trafic (les requêtes « tarif … » sont quasi nulles,
 * ETUDE_MOTS_CLES.md), mais la page unique que les IA et les visiteurs trouvent
 * pour comparer les offres. Chaque offre renvoie vers sa page, qui porte le prix
 * en détail et la question « Combien coûte… ? ».
 *
 * Garde-fou : noindex tant qu'un prix est provisoire, quel que soit l'interrupteur
 * général ; les lignes provisoires sont exclues du JSON-LD.
 */
export const metadata: Metadata = {
  title: "Tarifs — coaching, conseil, DAF",
  description:
    "Tarifs d'Un Seul Souffle à Toulouse : coaching dirigeant, conseil en organisation et DAF externalisé. Prix de départ, formats et engagement.",
  alternates: { canonical: "/tarifs/" },
  robots: tarifsProvisoires ? NON_INDEXABLE : ROBOTS,
};

const QUESTIONS = [
  {
    q: "Les prix sont-ils HT ?",
    r: [
      "Les montants suivis de la mention HT s'entendent hors taxes. Le prix exact de votre accompagnement, taxes comprises, figure dans la proposition écrite, avant tout démarrage.",
    ],
  },
  {
    q: "Y a-t-il un engagement de durée ?",
    r: [
      "Vous vous engagez étape par étape, jamais sur un bloc. L'audit organisationnel est un point d'arrêt volontaire : vous pouvez vous arrêter après lui et garder le diagnostic. Le périmètre ne s'élargit pas sans votre accord.",
    ],
  },
  {
    q: "Le premier échange est-il payant ?",
    r: [
      "Non. Le premier échange de 30 minutes est gratuit et confidentiel, en visio ou dans vos locaux. Il sert à qualifier votre situation et à vérifier que nous sommes les bonnes personnes pour la traiter.",
    ],
  },
];

function schema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/tarifs/#page`,
        url: `${SITE_URL}/tarifs/`,
        name: "Tarifs Un Seul Souffle",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/tarifs/#catalogue`,
        name: "Offres Un Seul Souffle",
        itemListElement: offres.map((o) => ({
          "@type": "OfferCatalog",
          name: o.nom,
          url: `${SITE_URL}${o.href}`,
          // Seules les lignes au prix réel sont balisées (garde-fou tarifs.ts).
          itemListElement: o.lignes
            .filter((l) => !l.provisoire && l.montant)
            .map((l) => ({
              "@type": "Offer",
              name: l.prestation,
              description: l.detail,
              priceCurrency: "EUR",
              price: l.montant,
              seller: { "@id": `${SITE_URL}/#organization` },
            })),
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/tarifs/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Tarifs", item: `${SITE_URL}/tarifs/` },
        ],
      },
    ],
  };
}

export default function TarifsPage() {
  return (
    <>
      <main>
        <EnTetePage
          fil="Tarifs"
          label="Tarifs"
          accent="finance"
          anime
          h1="Nos tarifs, affichés avant le premier rendez-vous"
          lede="Un dirigeant n'a pas à prendre rendez-vous pour savoir combien coûte un accompagnement. Voici les prix de départ de nos trois offres, à Toulouse et en Occitanie. Le prix exact de votre accompagnement est écrit dans la proposition, avant tout démarrage."
        >
          <div className="flex flex-wrap gap-3">
            <Button href="/contact/" arrow>
              Premier échange gratuit
            </Button>
            <Button href="/diagnostic/" variant="line">
              Diagnostiquer mon entreprise
            </Button>
          </div>
        </EnTetePage>

        <Section large>
          <ul className="grid gap-7 lg:grid-cols-3">
            {offres.map((o, i) => {
              const teinte = ACCENTS[o.accent];
              return (
                <Reveal as="li" key={o.cle} delay={i * 100}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-rule bg-surface transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-32px_rgba(20,32,54,0.5)]">
                    {/* En-tête teinté : nom de l'offre et accroche. */}
                    <header
                      className="relative overflow-hidden px-8 pb-7 pt-8"
                      style={{ backgroundImage: `linear-gradient(135deg, ${teinte.vif}26 0%, ${teinte.vif}0a 100%)` }}
                    >
                      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[4px]" style={{ backgroundColor: teinte.vif }} />
                      <span
                        aria-hidden="true"
                        className="absolute -right-6 -top-8 h-32 w-32 rounded-full"
                        style={{ backgroundColor: teinte.vif, opacity: 0.12 }}
                      />
                      <p className="font-mono text-[10.5px] uppercase tracking-[0.14em]" style={{ color: teinte.texte }}>
                        Offre {String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="relative mt-3 font-serif text-[30px] font-normal leading-tight text-ink">{o.nom}</h2>
                      <p className="relative mt-2 text-[15px] leading-relaxed text-body">{o.accroche}</p>
                    </header>

                    <div className="flex flex-1 flex-col px-8 pb-8 pt-7">
                      {/* Prix d'appel : la première ligne, en grand. */}
                      {o.lignes[0] && (
                        <div className="border-b border-rule-2 pb-6">
                          <p className="font-mono text-[10.5px] uppercase tracking-[0.13em] text-muted">
                            {o.lignes[0].prestation}
                          </p>
                          <p
                            className="mt-2 font-serif text-[clamp(30px,2.6vw,38px)] leading-[1.1]"
                            style={{ color: teinte.texte }}
                          >
                            {o.lignes[0].prix}
                          </p>
                          <p className="mt-2 text-[14px] leading-relaxed text-muted">{o.lignes[0].detail}</p>
                        </div>
                      )}

                      {/* Autres prestations : liste compacte, prix en pastille. */}
                      {o.lignes.length > 1 && (
                        <ul className="mt-2 divide-y divide-rule-2">
                          {o.lignes.slice(1).map((l) => (
                            <li key={l.prestation} className="py-4">
                              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                                <p className="text-[15px] font-medium text-ink">{l.prestation}</p>
                                <span
                                  className="rounded-full px-3 py-1 text-[13px] font-medium"
                                  style={{ backgroundColor: `${teinte.vif}1f`, color: teinte.texte }}
                                >
                                  {l.prix.replace("À partir de ", "dès ")}
                                </span>
                              </div>
                              <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{l.detail}</p>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div aria-hidden="true" className="flex-1" />
                      <Link
                        href={o.href}
                        className="mt-8 flex h-12 items-center justify-center gap-2 rounded-full text-[14px] font-medium text-white transition-opacity hover:opacity-90"
                        style={{ backgroundColor: teinte.texte }}
                      >
                        {o.ancre}
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </Section>

        <Reveal>
          <Section ton="surface">
            <SectionHead
              label="Ce qui est toujours inclus"
              titre="Un prix clair, un périmètre écrit"
              lede="Quel que soit le format, un conseiller référent suit votre dossier du début à la fin. Les autres expertises du cabinet n'interviennent que si votre sujet l'exige, et jamais sans votre accord sur le périmètre et le prix."
            />
          </Section>
        </Reveal>

        <Reveal>
          <FAQ items={QUESTIONS} titre="Questions sur les tarifs" ton="ground" />
        </Reveal>

        <Reveal>
          <CTAFinal />
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
