import type { Metadata } from "next";
import Image from "next/image";

import { EnTetePage } from "@/components/ui/EnTetePage";
import { Section, SectionHead, Label } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { AideContact } from "@/components/AideContact";
import { Reveal } from "@/components/ui/Reveal";
import { CTAFinal } from "@/components/CTAFinal";
import { ACCENTS, SITE_URL } from "@/lib/content/home";
import type { PageMembre } from "@/lib/content/membres";
import { ROBOTS } from "@/lib/seo/indexation";

/**
 * Gabarit des pages d'associées.
 *
 * Le JSON-LD est un `Person` complet — `worksFor`, `knowsAbout`, `sameAs` — et
 * non un `ProfilePage` générique : sur ce marché, c'est la personne qui porte
 * l'autorité, et c'est elle que les moteurs doivent reconnaître comme entité.
 */

export function metadataMembre(membre: PageMembre): Metadata {
  return {
    title: membre.metaTitle,
    description: membre.metaDescription,
    alternates: { canonical: `/${membre.slug}/` },
    robots: ROBOTS,
    openGraph: {
      type: "profile",
      locale: "fr_FR",
      url: `/${membre.slug}/`,
      siteName: "Un Seul Souffle",
      title: membre.h1,
      description: membre.metaDescription,
      images: [{ url: membre.photo, alt: membre.nom }],
    },
  };
}

function schema(membre: PageMembre) {
  const url = `${SITE_URL}/${membre.slug}/`;
  const questions = membre.faq.filter((q) => !q.aFournir);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${url}#person`,
        name: membre.nom,
        jobTitle: membre.expertise,
        description: membre.essentiel,
        url,
        image: `${SITE_URL}${membre.photo}`,
        worksFor: { "@id": `${SITE_URL}/#organization` },
        knowsAbout: membre.prendEnCharge.map((item) => item.titre),
        ...(membre.linkedin ? { sameAs: [membre.linkedin] } : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Notre équipe", item: `${SITE_URL}/notre-equipe/` },
          { "@type": "ListItem", position: 3, name: membre.nom, item: url },
        ],
      },
      ...(questions.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              mainEntity: questions.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.r.join(" ") },
              })),
            },
          ]
        : []),
    ],
  };
}

export function GabaritMembre({ membre }: { membre: PageMembre }) {
  const accent = ACCENTS[membre.accent];

  return (
    <>
      <main>
        <EnTetePage
          fil={membre.nom}
          label={membre.statut}
          accent={membre.accent}
          h1={membre.h1}
          lede={membre.lede}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button href="/contact/" arrow>
              Prendre contact
            </Button>
            {membre.linkedin ? (
              <a
                href={membre.linkedin}
                rel="noopener"
                className="border-b border-rule text-[14.5px] text-body transition-colors hover:border-teal hover:text-teal"
              >
                Profil LinkedIn
              </a>
            ) : (
              <span className="font-mono text-[11px] text-amber">[LinkedIn à fournir]</span>
            )}
          </div>
        </EnTetePage>

        {/* Portrait + réponse directe extractible. */}
        <Reveal>
          <Section ton="surface">
            <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
              <Image
                src={membre.photo}
                alt={`${membre.nom}, ${membre.expertise} chez Un Seul Souffle`}
                width={260}
                height={325}
                className="w-full max-w-[260px] self-start rounded-carte object-cover shadow-lift"
                priority
              />

              <div>
                <h2 className="max-w-[22ch] text-[clamp(25px,3.2vw,35px)] leading-[1.16]">
                  L&apos;essentiel en un paragraphe
                </h2>
                <div className="mt-7 grid gap-2 sm:grid-cols-[104px_1fr] sm:gap-6">
                  <span
                    className="flex items-baseline gap-2 pt-[9px] font-mono text-[10px] uppercase tracking-[0.14em]"
                    style={{ color: accent.texte }}
                  >
                    <span
                      aria-hidden="true"
                      className="h-[7px] w-[7px] shrink-0 rounded-full"
                      style={{ backgroundColor: accent.texte }}
                    />
                    En bref
                  </span>
                  <p className="max-w-[58ch] font-serif text-[20px] font-light leading-[1.55] text-body">
                    {membre.essentiel}
                  </p>
                </div>
              </div>
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <Section>
            <SectionHead label="Son périmètre" titre="Ce qu'elle prend en charge" />
            <ul className="grid gap-px overflow-hidden rounded-carte border border-rule bg-rule sm:grid-cols-2">
              {membre.prendEnCharge.map((item) => (
                <li key={item.titre} className="bg-surface p-6">
                  <div
                    aria-hidden="true"
                    className="h-[2px] w-9"
                    style={{ backgroundColor: accent.vif }}
                  />
                  <h3 className="mt-4 font-serif text-[19px] font-normal text-ink">
                    {item.titre}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed">{item.texte}</p>
                </li>
              ))}
            </ul>
          </Section>
        </Reveal>

        <Reveal>
          <Section ton="surface">
            <SectionHead
              label="Quand faire appel à elle"
              titre="Les situations qu'elle traite"
            />
            <ul className="grid max-w-prose gap-3">
              {membre.situations.map((situation) => (
                <li key={situation} className="relative pl-6 text-[16.5px] leading-[1.65]">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[11px] h-[5px] w-[5px] rounded-full"
                    style={{ backgroundColor: accent.texte }}
                  />
                  {situation}
                </li>
              ))}
            </ul>
          </Section>
        </Reveal>

        {membre.chapitres.map((chapitre, index) => (
          <Section key={chapitre.titre} ton={index % 2 === 0 ? "ground" : "surface"}>
            <h2 className="mb-7 max-w-[26ch] text-[clamp(25px,3.2vw,35px)] leading-[1.16]">
              {chapitre.titre}
            </h2>
            {chapitre.paragraphes.map((p, i) => (
              <p key={i} className="mt-5 max-w-prose text-[17px] leading-[1.72] first:mt-0">
                {p}
              </p>
            ))}
          </Section>
        ))}

        <Reveal>
          <Section ton="band">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <Label>Aller plus loin</Label>
                <h2 className="my-4 max-w-[24ch] text-[clamp(25px,3.2vw,35px)] leading-[1.16]">
                  L&apos;accompagnement qu&apos;elle porte
                </h2>
                <p className="max-w-prose text-[17px] leading-[1.72]">
                  Le détail du parcours, des étapes et des formats se trouve sur la page dédiée.
                </p>
              </div>
              <Button href={membre.silo.href} variant="line" arrow className="shrink-0">
                {membre.silo.ancre}
              </Button>
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <FAQ
            items={membre.faq}
            titre={`Questions fréquentes — ${membre.nom}`}
            ton="surface"
          />
        </Reveal>

        <Reveal>
          <CTAFinal />
        </Reveal>
      </main>

      <Footer />
      <AideContact />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(membre)) }}
      />
    </>
  );
}
