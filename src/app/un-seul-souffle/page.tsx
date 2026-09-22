import type { Metadata } from "next";
import Link from "next/link";

import { EnTetePage } from "@/components/ui/EnTetePage";
import { Section, SectionHead, Label } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/Footer";
import { AideContact } from "@/components/AideContact";
import { Reveal } from "@/components/ui/Reveal";
import { CTAFinal } from "@/components/CTAFinal";
import { ACCENTS, etapes, valeurs, cordee, SITE_URL, type CleAccent } from "@/lib/content/cabinet";

/**
 * Page « Le cabinet » — l'identité et la méthode.
 *
 * Elle reprend deux acquis du site legacy, les meilleurs qu'il contienne :
 * la métaphore de la cordée et les quatre valeurs. La cordée sert ici la règle
 * de dosage (master § 1) mieux qu'aucune autre formulation : une cordée a un
 * premier de cordée — un référent — et le reste de l'équipe n'intervient que
 * lorsque le passage l'exige.
 *
 * Cette page ne dispute pas à la home son signal « équipe de direction
 * externalisée » : elle cible « cabinet de conseil PME Toulouse » et la méthode.
 */
export const metadata: Metadata = {
  // 57 / 60
  title: "Le cabinet — conseil pour PME et ETI",
  // 134 / 150
  description:
    "Cabinet de conseil pour dirigeants de PME et ETI en Occitanie : notre méthode en cinq étapes, nos valeurs et notre façon d'intervenir.",
  alternates: { canonical: "/un-seul-souffle/" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

function schema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/un-seul-souffle/#page`,
        url: `${SITE_URL}/un-seul-souffle/`,
        name: "Le cabinet Un Seul Souffle",
        description:
          "Cabinet de conseil et d'accompagnement de dirigeants de PME et d'ETI. Un conseiller référent prend en charge chaque situation, avec quatre autres expertises de direction en appui quand le sujet l'exige.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/un-seul-souffle/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Le cabinet",
            item: `${SITE_URL}/un-seul-souffle/`,
          },
        ],
      },
    ],
  };
}

export default function CabinetPage() {
  return (
    <>
      <main>
        <EnTetePage
          fil="Le cabinet"
          label="Qui nous sommes"
          accent="organisation"
          h1="Un cabinet qui reste jusqu'à la mise en œuvre"
          lede="Un Seul Souffle accompagne les dirigeants de PME et d'ETI de 10 à 250 salariés. Un conseiller référent prend en charge votre situation et la suit du début à la fin. Ce qui nous distingue n'est pas le nombre d'experts mobilisés : c'est que nous ne partons pas à la remise du rapport."
        >
          <div className="flex flex-wrap gap-3">
            <Button href="/diagnostic/" arrow>
              Diagnostiquer mon entreprise en 5 min
            </Button>
            <Button href="/notre-equipe/" variant="line">
              Rencontrer l&apos;équipe
            </Button>
          </div>
        </EnTetePage>

        {/* Le constat — le meilleur acquis rédactionnel du site legacy. */}
        <Reveal>
          <Section ton="surface">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
              <div>
                <SectionHead
                  label="Le constat"
                  titre="Le problème n'est pas votre compétence"
                  lede="Vous avez construit votre entreprise grâce à votre expertise, votre engagement et votre capacité à résoudre les problèmes. Le problème, c'est que tout repose encore trop sur vous."
                />

                <p className="max-w-prose text-[17px] leading-[1.72]">
                  Un dirigeant qui porte seul finit par devenir le facteur limitant de sa propre
                  entreprise. Ce n&apos;est pas un défaut de caractère ni un manque de méthode :
                  c&apos;est une conséquence mécanique de la croissance. Tant que personne ne
                  reprend une part des décisions, la file d&apos;attente se reconstitue quoi que
                  vous fassiez.
                </p>

                <p className="mt-5 max-w-prose text-[17px] leading-[1.72]">
                  Notre travail consiste à défaire cette dépendance — chez vous d&apos;abord avec
                  la{" "}
                  <Link
                    href="/transformation-dirigeant/"
                    className="border-b border-teal/35 text-teal transition-colors hover:border-teal"
                  >
                    transformation du dirigeant
                  </Link>
                  , dans la structure ensuite avec la{" "}
                  <Link
                    href="/transformation-entreprise/"
                    className="border-b border-teal/35 text-teal transition-colors hover:border-teal"
                  >
                    transformation de l&apos;entreprise
                  </Link>
                  .
                </p>
              </div>

              <aside className="self-start rounded-carte border-l-2 border-teal bg-teal-wash px-6 py-6">
                <p className="font-serif text-[19px] font-light italic leading-[1.55] text-ink">
                  « Une entreprise prend réellement de la valeur lorsqu&apos;elle est capable
                  d&apos;avancer même quand son dirigeant n&apos;est pas là. »
                </p>
              </aside>
            </div>
          </Section>
        </Reveal>

        {/* La cordée — image de marque du cabinet, et support de la règle de dosage. */}
        <Reveal>
          <Section>
            <SectionHead
              label="Le concept"
              titre="Diriger une entreprise, c'est mener une cordée"
              lede="Les grandes ascensions ne reposent jamais sur un seul alpiniste. Les entreprises robustes non plus. Un Seul Souffle est votre cordée de direction : à vos côtés avant l'ascension, pendant l'effort, et jusqu'au sommet."
            />

            <ol className="border-t border-rule">
              {cordee.map((point) => {
                const accent = ACCENTS[point.accent as CleAccent];
                return (
                  <li
                    key={point.n}
                    className="grid gap-2 border-b border-rule-2 py-6 sm:grid-cols-[48px_1fr_150px] sm:gap-6"
                  >
                    <span className="font-mono text-[13px] text-muted">{point.n}</span>
                    <div>
                      <h3 className="font-mono text-[11px] uppercase tracking-label text-ink">
                        {point.titre}
                      </h3>
                      <p className="mt-2 max-w-prose text-[15.5px] leading-relaxed">
                        {point.texte}
                      </p>
                    </div>
                    <span
                      className="flex items-baseline gap-2 font-mono text-[10px] uppercase tracking-[0.13em] sm:justify-end"
                      style={{ color: accent.texte }}
                    >
                      <span
                        aria-hidden="true"
                        className="h-[7px] w-[7px] shrink-0 rounded-full"
                        style={{ backgroundColor: accent.vif }}
                      />
                      {point.pilier}
                    </span>
                  </li>
                );
              })}
            </ol>

            <p className="mt-9 max-w-prose font-serif text-[20px] font-light italic leading-[1.55] text-body">
              « Nous ne grimpons pas à votre place. Nous vous permettons d&apos;atteindre des
              sommets que l&apos;on ne conquiert jamais seul. »
            </p>

            <p className="mt-7 max-w-prose text-[17px] leading-[1.72]">
              Une cordée a un premier de cordée. C&apos;est votre conseiller référent : celui qui
              connaît votre entreprise et qui reste votre interlocuteur. Les autres membres
              n&apos;interviennent que lorsque le passage l&apos;exige — et vous savez toujours qui
              est encordé avec vous.
            </p>
          </Section>
        </Reveal>

        {/* Les valeurs. */}
        <Reveal>
          <Section ton="ink">
            <SectionHead
              label="Ce qui nous anime"
              titre="Nos valeurs"
              onInk
              centre
            />

            <ul className="grid gap-px overflow-hidden rounded-carte bg-[#27324a] sm:grid-cols-2 lg:grid-cols-4">
              {valeurs.map((valeur) => (
                <li key={valeur.titre} className="bg-ink p-7">
                  <div
                    aria-hidden="true"
                    className="h-[2px] w-9"
                    style={{ backgroundColor: ACCENTS[valeur.accent as CleAccent].vif }}
                  />
                  <h3 className="mt-5 font-serif text-[20px] font-normal !text-[#f4f2ec]">
                    {valeur.titre}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#aeb6c3]">{valeur.texte}</p>
                </li>
              ))}
            </ul>
          </Section>
        </Reveal>

        {/* La méthode en cinq étapes, lue depuis la source unique. */}
        <Reveal>
          <Section ton="surface">
            <SectionHead
              label="L'accompagnement"
              titre="Les cinq étapes d'une mission"
              lede="Un parcours progressif — du dirigeant qui retrouve de la clarté jusqu'à l'entreprise qui tourne de manière autonome. Vous n'en faites que les étapes dont vous avez besoin."
            />

            <ol className="grid gap-px overflow-hidden rounded-carte border border-rule bg-rule md:grid-cols-5">
              {etapes.map((etape) => (
                <li key={etape.n} className="bg-surface p-6">
                  <Label
                    style={{
                      color:
                        etape.parcours === "dirigeant"
                          ? ACCENTS.qvt.texte
                          : ACCENTS.organisation.texte,
                    }}
                  >
                    {etape.n}
                  </Label>
                  <h3 className="mt-3 font-serif text-[19px] font-normal text-ink">
                    {etape.verbe}
                  </h3>
                  <p className="mt-1.5 font-serif text-[15px] font-light italic text-muted">
                    {etape.promesse}
                  </p>
                  <p className="mt-3 text-[14.5px] leading-relaxed">{etape.resultat}</p>
                </li>
              ))}
            </ol>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/transformation-dirigeant/" variant="line" arrow>
                Étapes 1 &amp; 2 — le dirigeant
              </Button>
              <Button href="/transformation-entreprise/" variant="line" arrow>
                Étapes 3, 4 &amp; 5 — l&apos;entreprise
              </Button>
            </div>
          </Section>
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
