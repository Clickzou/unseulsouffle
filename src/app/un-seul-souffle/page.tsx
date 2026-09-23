import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { EnTetePage } from "@/components/ui/EnTetePage";
import { Section, SectionHead, Label } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/Footer";
import { AideContact } from "@/components/AideContact";
import { Reveal } from "@/components/ui/Reveal";
import { CTAFinal } from "@/components/CTAFinal";
import { ACCENTS, etapes, valeurs, cordee, SITE_URL, type CleAccent } from "@/lib/content/cabinet";
import { ROBOTS } from "@/lib/seo/indexation";

/**
 * Page « Le cabinet » — l'identité et la méthode.
 *
 * Elle reprend deux acquis du site legacy, les meilleurs qu'il contienne :
 * la métaphore de la cordée et les quatre valeurs. La cordée sert ici la règle
 * de dosage (master § 1) mieux qu'aucune autre formulation : une cordée a un
 * premier de cordée — un référent — et le reste de l'équipe n'intervient que
 * lorsque le passage l'exige.
 *
 * Cette page ne dispute pas à la home « cabinet de conseil Toulouse » : elle
 * cible « cabinet de conseil en management », la méthode, les valeurs et la cordée.
 */
export const metadata: Metadata = {
  // 42 / 42 (le gabarit ajoute « | Un Seul Souffle »)
  title: "Cabinet de conseil en management, Toulouse",
  // ≤ 150
  description:
    "Cabinet de conseil en management pour dirigeants de PME et ETI à Toulouse et en Occitanie : notre méthode d'accompagnement, nos valeurs, la cordée.",
  alternates: { canonical: "/un-seul-souffle/" },
  robots: ROBOTS,
};

/** Les cinq expertises, à droite de l'en-tête, chacune dans la teinte de son ruban. */
const expertises: { nom: string; accent: CleAccent }[] = [
  { nom: "Finances", accent: "finance" },
  { nom: "Coopération", accent: "organisation" },
  { nom: "QVT", accent: "qvt" },
  { nom: "Stratégie", accent: "commercial" },
  { nom: "Production", accent: "production" },
];

/** Dégradé de la corde : les teintes des cinq étapes, dans l'ordre de la montée. */
const corde = cordee.map((point) => ACCENTS[point.accent as CleAccent].vif).join(", ");

function schema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/un-seul-souffle/#page`,
        url: `${SITE_URL}/un-seul-souffle/`,
        name: "Un Seul Souffle, cabinet de conseil en management à Toulouse",
        description:
          "Cabinet de conseil en management pour les dirigeants de PME et d'ETI, à Toulouse et en Occitanie. Un conseiller référent prend en charge chaque situation, avec quatre autres expertises de direction en appui quand le sujet l'exige.",
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
          anime
          h1="Cabinet de conseil en management à Toulouse, jusqu'à la mise en œuvre"
          lede="Un Seul Souffle est un cabinet de conseil en management pour les dirigeants de PME et d'ETI de 10 à 250 salariés, à Toulouse et en Occitanie. Un conseiller référent prend en charge votre situation et la suit du début à la fin. Ce qui nous distingue n'est pas le nombre d'experts mobilisés : c'est que nous ne partons pas à la remise du rapport."
          aside={
            <div>
              <p
                id="expertises-titre"
                style={{ animationDelay: "300ms" }}
                className="anim-montee mb-4 font-mono text-[11px] uppercase tracking-label text-muted"
              >
                Votre référent s&apos;appuie, si besoin, sur
              </p>
              <ul aria-labelledby="expertises-titre" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {expertises.map((expertise, i) => (
                  <li
                    key={expertise.nom}
                    className="anim-montee flex items-center gap-4 rounded-carte border border-rule bg-surface px-5 py-4"
                    style={{
                      animationDelay: `${380 + i * 80}ms`,
                      borderLeftColor: ACCENTS[expertise.accent].vif,
                      borderLeftWidth: 3,
                    }}
                  >
                    <span className="font-serif text-[19px] font-normal text-ink">
                      {expertise.nom}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          }
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
        <Section ton="surface" large>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
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
                Notre travail de conseil en management consiste à défaire cette dépendance —
                chez vous d&apos;abord, par un{" "}
                <Link
                  href="/transformation-dirigeant/"
                  className="border-b border-teal/35 text-teal transition-colors hover:border-teal"
                >
                  accompagnement dirigeant
                </Link>
                , dans la structure ensuite, par le{" "}
                <Link
                  href="/transformation-entreprise/"
                  className="border-b border-teal/35 text-teal transition-colors hover:border-teal"
                >
                  conseil en organisation
                </Link>
                .
              </p>
            </Reveal>

            {/* Sur grand écran, la colonne prend la hauteur du texte : l'image
                remplit ce qui reste sous la citation. */}
            <div className="flex flex-col">
              <Reveal delay={120}>
                <aside className="rounded-carte border-l-2 border-teal bg-teal-wash px-6 py-6">
                  <p className="font-serif text-[19px] font-light italic leading-[1.55] text-ink">
                    « Une entreprise prend réellement de la valeur lorsqu&apos;elle est capable
                    d&apos;avancer même quand son dirigeant n&apos;est pas là. »
                  </p>
                </aside>
              </Reveal>

              {/* Généré par scripts/gen-cabinet-image.mjs. */}
              <Reveal
                delay={240}
                className="relative mt-6 aspect-[3/4] overflow-hidden rounded-carte lg:aspect-auto lg:min-h-[260px] lg:flex-1"
              >
                <Image
                  src="/cabinet/autonomie.webp"
                  alt="Bureau du dirigeant vide, veste sur la chaise, pendant que l'équipe travaille dans l'open space"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[center_42%]"
                />
              </Reveal>
            </div>
          </div>
        </Section>

        {/* La cordée — image de marque du cabinet, et support de la règle de dosage.
            Les cinq étapes sont accrochées à une corde aux couleurs du logo : on lit la
            montée de haut en bas, chaque relais dans la teinte de son expertise. */}
        <Section>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
            <Reveal className="lg:sticky lg:top-24 lg:self-start">
              <SectionHead
                label="Le concept"
                titre="Notre méthode d'accompagnement : diriger, c'est mener une cordée"
                lede="Les grandes ascensions ne reposent jamais sur un seul alpiniste. Les entreprises robustes non plus. Un Seul Souffle est votre cordée de direction : à vos côtés avant l'ascension, pendant l'effort, et jusqu'au sommet."
              />

              <blockquote className="border-l-2 border-teal pl-5 font-serif text-[21px] font-light italic leading-[1.5] text-ink">
                « Nous ne grimpons pas à votre place. Nous vous permettons d&apos;atteindre des
                sommets que l&apos;on ne conquiert jamais seul. »
              </blockquote>

              <p className="mt-7 max-w-prose text-[16px] leading-[1.72]">
                Au cœur de notre méthode, une règle simple : une cordée a un premier de cordée.
                C&apos;est votre conseiller référent : celui qui
                connaît votre entreprise et qui reste votre interlocuteur. Les autres membres
                n&apos;interviennent que lorsque le passage l&apos;exige — et vous savez toujours
                qui est encordé avec vous.
              </p>
            </Reveal>

            <ol className="relative">
              {/* La corde. */}
              <span
                aria-hidden="true"
                className="absolute bottom-8 left-[21px] top-8 w-[2px] rounded-full opacity-70"
                style={{ backgroundImage: `linear-gradient(to bottom, ${corde})` }}
              />

              {cordee.map((point, i) => {
                const accent = ACCENTS[point.accent as CleAccent];
                return (
                  <Reveal
                    as="li"
                    delay={i * 90}
                    key={point.n}
                    className="relative pb-5 pl-16 last:pb-0"
                  >
                    {/* Le relais sur la corde. */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-6 flex h-11 w-11 items-center justify-center rounded-full border-2 bg-ground font-serif text-[19px]"
                      style={{ borderColor: accent.vif, color: accent.texte }}
                    >
                      {point.n}
                    </span>

                    <div className="group rounded-carte border border-rule bg-surface p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-18px_rgba(20,32,54,0.35)] sm:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="font-serif text-[22px] font-normal leading-tight text-ink">
                          {point.titre}
                        </h3>
                        <span
                          className="rounded-full px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em]"
                          style={{ backgroundColor: `${accent.vif}1f`, color: accent.texte }}
                        >
                          {point.pilier}
                        </span>
                      </div>
                      <p className="mt-3 text-[15.5px] leading-relaxed">{point.texte}</p>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </Section>

        {/* Les valeurs. */}
        <Section ton="ink">
          <Reveal>
            <SectionHead label="Ce qui nous anime" titre="Nos valeurs de cabinet de conseil en management" onInk centre />
          </Reveal>

          <ul className="grid gap-px overflow-hidden rounded-carte bg-[#27324a] sm:grid-cols-2 lg:grid-cols-4">
            {valeurs.map((valeur, i) => (
              <Reveal as="li" delay={i * 100} key={valeur.titre} className="bg-ink p-7">
                <div
                  aria-hidden="true"
                  className="h-[2px] w-9"
                  style={{ backgroundColor: ACCENTS[valeur.accent as CleAccent].vif }}
                />
                <h3 className="mt-5 font-serif text-[20px] font-normal !text-[#f4f2ec]">
                  {valeur.titre}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#aeb6c3]">{valeur.texte}</p>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* La méthode en cinq étapes, lue depuis la source unique. */}
        <Section ton="surface">
          <Reveal>
            <SectionHead
              label="L'accompagnement"
              titre="Une mission de conseil en management en cinq étapes"
              lede="Notre méthode d'accompagnement suit un parcours progressif — du dirigeant qui retrouve de la clarté jusqu'à l'entreprise qui tourne de manière autonome. C'est ainsi que nous conduisons le conseil aux PME, à Toulouse comme dans le reste de l'Occitanie. Vous n'en faites que les étapes dont vous avez besoin."
            />
          </Reveal>

          <ol className="grid gap-px overflow-hidden rounded-carte border border-rule bg-rule md:grid-cols-5">
            {etapes.map((etape, i) => (
              <Reveal as="li" delay={i * 90} key={etape.n} className="bg-surface p-6">
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
              </Reveal>
            ))}
          </ol>

          <Reveal delay={200} className="mt-9 flex flex-wrap gap-3">
            <Button href="/transformation-dirigeant/" variant="line" arrow>
              Étapes 1 &amp; 2 — le dirigeant
            </Button>
            <Button href="/transformation-entreprise/" variant="line" arrow>
              Étapes 3, 4 &amp; 5 — l&apos;entreprise
            </Button>
          </Reveal>
        </Section>

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
