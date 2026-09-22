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
import { ACCENTS, equipe, piliers, SITE_URL } from "@/lib/content/home";
import { ROBOTS } from "@/lib/seo/indexation";

/**
 * Page équipe — pilier E-E-A-T du site (master § 2 et § 8, point 5).
 *
 * Sur ce marché, l'autorité est portée par des personnes, pas par la marque :
 * un dirigeant confie son entreprise à quelqu'un dont il a vu le visage et
 * compris le métier. Chaque membre est balisé en `Person` avec `worksFor` et
 * `knowsAbout` — c'est aussi ce qui permet aux moteurs génératifs de rattacher
 * une compétence à une entité nommée.
 *
 * Les quatre partenaires ont ici leur ancre (`#slug`), cible des liens de la home.
 */
export const metadata: Metadata = {
  // 45 / 60
  title: "Notre équipe — cinq expertises",
  // 148 / 150
  description:
    "Marjorie Anglade, Muriel Saffroy et leurs partenaires : finance, organisation, commercial, production et QVT au service des dirigeants de PME.",
  alternates: { canonical: "/notre-equipe/" },
  robots: ROBOTS,
};

/** Le pilier porté par un membre, retrouvé depuis `piliers.referents`. */
function pilierDe(slug: string) {
  return piliers.find((p) => p.referents.includes(slug));
}

function schema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...equipe.map((membre) => {
        const pilier = pilierDe(membre.slug);
        return {
          "@type": "Person",
          "@id": `${SITE_URL}/notre-equipe/#${membre.slug}`,
          name: membre.nom,
          jobTitle: membre.expertise,
          description: membre.bio,
          worksFor: { "@id": `${SITE_URL}/#organization` },
          ...(pilier ? { knowsAbout: pilier.nom } : {}),
          ...(membre.linkedin ? { sameAs: [membre.linkedin] } : {}),
          ...(membre.photo ? { image: `${SITE_URL}${membre.photo}` } : {}),
          ...(membre.href.startsWith("/notre-equipe/")
            ? {}
            : { url: `${SITE_URL}${membre.href}` }),
        };
      }),
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/notre-equipe/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Notre équipe",
            item: `${SITE_URL}/notre-equipe/`,
          },
        ],
      },
    ],
  };
}

function Portrait({ membre }: { membre: (typeof equipe)[number] }) {
  const pilier = pilierDe(membre.slug);
  const accent = pilier ? ACCENTS[pilier.accent] : ACCENTS.finance;
  const aSaPage = !membre.href.startsWith("/notre-equipe/");

  return (
    // `scroll-mt` : sans cela, l'ancre place le titre sous le bord haut de l'écran.
    <li id={membre.slug} className="scroll-mt-8 border-b border-rule-2 py-10 first:pt-0 last:border-b-0">
      <div className="grid gap-7 sm:grid-cols-[168px_1fr] sm:gap-9">
        <div>
          {membre.photo ? (
            <Image
              src={membre.photo}
              alt={`${membre.nom}, ${membre.expertise} chez Un Seul Souffle`}
              width={168}
              height={210}
              className="w-full rounded-carte object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex aspect-[4/5] w-full items-center justify-center rounded-carte bg-surface-2 font-serif text-[34px] text-muted"
            >
              {membre.initiales}
            </div>
          )}
        </div>

        <div>
          <span
            className="flex items-baseline gap-2 font-mono text-[10px] uppercase tracking-[0.13em]"
            style={{ color: accent.texte }}
          >
            <span
              aria-hidden="true"
              className="h-[7px] w-[7px] shrink-0 rounded-full"
              style={{ backgroundColor: accent.vif }}
            />
            {membre.expertise}
          </span>

          <h3 className="mt-3 font-serif text-[26px] font-normal text-ink">{membre.nom}</h3>
          <p className="mt-1 text-[14px] text-muted">{membre.statut}</p>

          <p className="mt-4 max-w-prose text-[16.5px] leading-[1.68]">{membre.bio}</p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14.5px]">
            {aSaPage && (
              <Link
                href={membre.href}
                className="border-b border-teal/35 text-teal transition-colors hover:border-teal"
              >
                Sa page détaillée
              </Link>
            )}
            {pilier && (
              <span className="text-muted">
                Porte le pilier <span className="text-body">{pilier.nom}</span>
              </span>
            )}
            {membre.linkedin ? (
              <a
                href={membre.linkedin}
                rel="noopener"
                className="border-b border-rule text-body transition-colors hover:border-teal hover:text-teal"
              >
                LinkedIn
              </a>
            ) : (
              <span className="font-mono text-[11px] text-amber">[LinkedIn à fournir]</span>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default function NotreEquipePage() {
  const associees = equipe.filter((m) => m.statut === "Associée fondatrice");
  const partenaires = equipe.filter((m) => m.statut === "Partenaire");

  return (
    <>
      <main>
        <EnTetePage
          fil="Notre équipe"
          label="Les personnes"
          accent="qvt"
          h1="Les personnes qui interviennent chez vous"
          lede="Deux associées fondatrices et quatre partenaires, chacun référent d'un domaine. Celui dont le métier correspond à votre blocage principal devient votre interlocuteur — et le reste de l'équipe n'intervient que si votre situation l'exige."
        >
          <Button href="/contact/" arrow>
            Parler à Marjorie et Muriel
          </Button>
        </EnTetePage>

        <Reveal>
          <Section ton="surface">
            <SectionHead
              label="Les associées"
              titre="Les fondatrices du cabinet"
              lede="Elles portent le cabinet et sont vos interlocutrices au premier échange."
            />
            <ul>
              {associees.map((membre) => (
                <Portrait key={membre.slug} membre={membre} />
              ))}
            </ul>
          </Section>
        </Reveal>

        <Reveal>
          <Section>
            <SectionHead
              label="Les partenaires"
              titre="Les référents mobilisés selon le sujet"
              lede="Ils interviennent sur leur domaine, quand le chantier le demande. Vous savez toujours qui intervient chez vous, et pourquoi."
            />
            <ul>
              {partenaires.map((membre) => (
                <Portrait key={membre.slug} membre={membre} />
              ))}
            </ul>
          </Section>
        </Reveal>

        <Reveal>
          <Section ton="band">
            <Label>Preuve à produire</Label>
            <p className="mt-4 max-w-prose rounded-carte border-l-2 border-amber bg-amber-wash px-5 py-4 font-mono text-[13px] leading-relaxed text-amber">
              [À fournir par le client] Parcours détaillé de chaque partenaire (expérience,
              secteurs, années), profils LinkedIn, et accord de publication. Sans ces éléments, les
              pages membres ne peuvent pas porter l&apos;autorité que le référencement et les
              moteurs génératifs attendent.
            </p>
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
