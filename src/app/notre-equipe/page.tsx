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
 * Mise en page : les associées en grand (ce sont les interlocutrices du premier
 * échange), les partenaires en cartes photo, chacun dans la teinte de son pilier.
 * Les quatre partenaires ont ici leur ancre (`#slug`), cible des liens de la home.
 *
 * À FOURNIR (client) : parcours détaillé des partenaires, profils LinkedIn
 * manquants (Marjorie Anglade et les quatre partenaires), accord de publication.
 * Les liens LinkedIn s'affichent d'eux-mêmes dès que `linkedin` est renseigné
 * dans home.ts.
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

type Membre = (typeof equipe)[number];

/** Le pilier porté par un membre, retrouvé depuis `piliers.referents`. */
function pilierDe(slug: string) {
  return piliers.find((p) => p.referents.includes(slug));
}

function teinteDe(slug: string) {
  const pilier = pilierDe(slug);
  return pilier ? ACCENTS[pilier.accent] : ACCENTS.finance;
}

const portrait = (slug: string) => `/equipe/portrait/${slug}.webp`;

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

/* ─────────── Morceaux ─────────── */

function Pastille({ membre }: { membre: Membre }) {
  const teinte = teinteDe(membre.slug);
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em]"
      style={{ backgroundColor: `${teinte.vif}1f`, color: teinte.texte }}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: teinte.vif }} />
      {membre.expertise}
    </span>
  );
}

function LienLinkedIn({ membre }: { membre: Membre }) {
  if (!membre.linkedin) return null;
  return (
    <a
      href={membre.linkedin}
      target="_blank"
      rel="noopener"
      aria-label={`${membre.nom} sur LinkedIn`}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-rule px-4 text-[13.5px] text-body transition-colors hover:border-teal hover:text-teal"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.6 8.65 22 11.2 22 14.5V21h-4v-5.8c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21h-4V9Z" />
      </svg>
      LinkedIn
    </a>
  );
}

/** Mosaïque des six portraits, à droite de l'en-tête. */
function Mosaique() {
  return (
    <ul aria-label="L'équipe" className="grid grid-cols-3 gap-3">
      {equipe.map((membre, i) => {
        const teinte = teinteDe(membre.slug);
        return (
          <li
            key={membre.slug}
            className="anim-montee relative aspect-[4/5] overflow-hidden rounded-[14px]"
            style={{ animationDelay: `${250 + i * 70}ms` }}
          >
            <Image
              src={portrait(membre.slug)}
              alt={membre.nom}
              fill
              sizes="(min-width: 1024px) 260px, 30vw"
              className="object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[4px]"
              style={{ backgroundColor: teinte.vif }}
            />
          </li>
        );
      })}
    </ul>
  );
}

/** Associée fondatrice : grande carte, portrait à gauche. */
function CarteAssociee({ membre }: { membre: Membre }) {
  const teinte = teinteDe(membre.slug);
  const pilier = pilierDe(membre.slug);
  return (
    <article
      id={membre.slug}
      className="grid h-full scroll-mt-24 overflow-hidden rounded-[20px] border border-rule bg-surface sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
    >
      <div className="relative aspect-[4/5] sm:aspect-auto sm:min-h-[420px]">
        <Image
          src={portrait(membre.slug)}
          alt={`${membre.nom}, ${membre.expertise} chez Un Seul Souffle`}
          fill
          sizes="(min-width: 1024px) 380px, 100vw"
          className="object-cover"
        />
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[5px]" style={{ backgroundColor: teinte.vif }} />
      </div>
      <div className="flex flex-col p-7 sm:p-9">
        <Pastille membre={membre} />
        <h3 className="mt-5 font-serif text-[clamp(28px,2.6vw,36px)] font-normal leading-tight text-ink">
          {membre.nom}
        </h3>
        <p className="mt-1 font-mono text-[11.5px] uppercase tracking-[0.12em] text-muted">{membre.statut}</p>
        <p className="mt-5 text-[16.5px] leading-[1.7]">{membre.bio}</p>
        {pilier && (
          <p className="mt-5 text-[14.5px] text-muted">
            Référente du pilier <span className="text-ink">{pilier.nom}</span>
          </p>
        )}
        <div aria-hidden="true" className="flex-1" />
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={membre.href}
            className="inline-flex h-10 items-center gap-2 rounded-full px-5 text-[13.5px] font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: teinte.texte }}
          >
            Découvrir son parcours →
          </Link>
          <LienLinkedIn membre={membre} />
        </div>
      </div>
    </article>
  );
}

/** Partenaire : carte photo, nom sur l'image, bio en dessous. */
function CartePartenaire({ membre }: { membre: Membre }) {
  const teinte = teinteDe(membre.slug);
  const pilier = pilierDe(membre.slug);
  return (
    <article
      id={membre.slug}
      className="group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-[18px] border border-rule bg-surface transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_-26px_rgba(20,32,54,0.45)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={portrait(membre.slug)}
          alt={`${membre.nom}, ${membre.expertise} chez Un Seul Souffle`}
          fill
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.05]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(14,22,38,0.82) 0%, rgba(14,22,38,0.1) 45%, transparent 70%)" }}
        />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.13em] text-white/85">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: teinte.vif }} />
            {membre.expertise}
          </p>
          <h3 className="mt-1.5 font-serif text-[24px] font-normal leading-tight !text-white">{membre.nom}</h3>
        </div>
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[4px]" style={{ backgroundColor: teinte.vif }} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[14.5px] leading-relaxed">{membre.bio}</p>
        <div aria-hidden="true" className="flex-1" />
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-rule-2 pt-4">
          <span className="text-[13px] text-muted">{pilier?.nom}</span>
          <LienLinkedIn membre={membre} />
        </div>
      </div>
    </article>
  );
}

/** Comment l'équipe intervient : la règle du référent (master § 1), en trois temps. */
const REGLE = [
  {
    titre: "Un référent pour votre sujet",
    texte:
      "Celui ou celle dont le métier correspond à votre blocage principal devient votre interlocuteur, du premier échange à la fin de l'accompagnement.",
  },
  {
    titre: "Les autres en appui, si le sujet l'exige",
    texte:
      "Le reste de l'équipe n'intervient que si votre situation le demande, sur un point précis — pas de chantier ouvert par principe.",
  },
  {
    titre: "Vous savez qui intervient, et pourquoi",
    texte:
      "Chaque intervention est décidée avec vous et écrite dans la proposition. Le périmètre ne s'élargit pas sans votre accord.",
  },
];

/* ─────────── Page ─────────── */

export default function NotreEquipePage() {
  const associees = equipe.filter((m) => m.statut === "Associée fondatrice");
  // Ordre d'affichage propre à cette page (la home garde l'ordre de `equipe`).
  const ORDRE_PARTENAIRES = ["yohan-castelar", "patrick-calvet", "olivia-artur", "nicolas-vimini"];
  const partenaires = equipe
    .filter((m) => m.statut === "Partenaire")
    .sort((a, b) => ORDRE_PARTENAIRES.indexOf(a.slug) - ORDRE_PARTENAIRES.indexOf(b.slug));

  return (
    <>
      <main>
        <EnTetePage
          fil="Notre équipe"
          label="Les personnes"
          accent="qvt"
          anime
          h1="Les personnes qui interviennent chez vous"
          lede="Deux associées fondatrices et quatre partenaires, chacun référent d'un domaine. Celui dont le métier correspond à votre blocage principal devient votre interlocuteur — et le reste de l'équipe n'intervient que si votre situation l'exige."
          aside={<Mosaique />}
          asideLarge
        >
          <Button href="/contact/" arrow>
            Parler à Marjorie et Muriel
          </Button>
        </EnTetePage>

        {/* Les associées — pleine largeur, deux grandes cartes. */}
        <Section ton="surface" large>
          <Reveal>
            <SectionHead
              label="Les associées fondatrices"
              titre="Vos interlocutrices au premier échange"
              lede="Elles portent le cabinet et sont vos interlocutrices au premier échange."
            />
          </Reveal>
          <ul className="grid gap-7 xl:grid-cols-2">
            {associees.map((membre, i) => (
              <Reveal as="li" key={membre.slug} delay={i * 120}>
                <CarteAssociee membre={membre} />
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* Les partenaires — cartes photo, dans la largeur encadrée du site : en
            pleine largeur, les portraits devenaient démesurés. */}
        <Section>
          {/* Titre à gauche, introduction à droite — pas de vide. */}
          <Reveal className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-20">
            <div>
              <Label>Les partenaires</Label>
              <h2 className="mt-4 text-[clamp(28px,3.4vw,44px)] leading-[1.12]">
                Les référents mobilisés selon le sujet
              </h2>
            </div>
            <p className="max-w-prose text-lg leading-relaxed text-body">
              Ils interviennent sur leur domaine, quand le chantier le demande. Vous savez toujours
              qui intervient chez vous, et pourquoi.
            </p>
          </Reveal>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partenaires.map((membre, i) => (
              <Reveal as="li" key={membre.slug} delay={i * 90}>
                <CartePartenaire membre={membre} />
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* La règle du référent. */}
        <Section ton="surface">
          <Reveal>
            <SectionHead label="Comment nous travaillons" titre="Une équipe, un seul interlocuteur" centre />
          </Reveal>
          <ol className="grid gap-6 md:grid-cols-3">
            {REGLE.map((etape, i) => {
              // Une teinte du logo par carte : turquoise, magenta, orange.
              const teinte = [ACCENTS.finance, ACCENTS.organisation, ACCENTS.commercial][i % 3];
              return (
              <Reveal as="li" key={etape.titre} delay={i * 100}>
                <div
                  className="relative h-full overflow-hidden rounded-[16px] border border-rule bg-ground p-7 pt-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-24px_rgba(20,32,54,0.4)]"
                  style={{ backgroundImage: `linear-gradient(180deg, ${teinte.vif}14 0%, transparent 55%)` }}
                >
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[4px]" style={{ backgroundColor: teinte.vif }} />
                  <span
                    aria-hidden="true"
                    className="absolute right-6 top-5 font-serif text-[56px] leading-none"
                    style={{ color: teinte.vif, opacity: 0.3 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.14em]" style={{ color: teinte.texte }}>
                    Principe {i + 1}
                  </p>
                  <h3 className="mt-3 pr-14 font-serif text-[22px] font-normal leading-snug text-ink">{etape.titre}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed">{etape.texte}</p>
                </div>
              </Reveal>
              );
            })}
          </ol>
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
