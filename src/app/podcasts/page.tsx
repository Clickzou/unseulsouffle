import type { Metadata } from "next";
import Link from "next/link";

import { EnTetePage } from "@/components/ui/EnTetePage";
import { SymboleAnime } from "@/components/ui/SymboleAnime";
import { Section } from "@/components/ui/Section";
import { Footer } from "@/components/Footer";
import { CTAFinal } from "@/components/CTAFinal";
import { Reveal } from "@/components/ui/Reveal";
import { OngletsActualites } from "@/components/actualites/OngletsActualites";
import { ACCENTS, SITE_URL } from "@/lib/content/home";
import { dateAtteinte, trouverArticle } from "@/lib/content/articles";
import { EMISSION, EPISODES, type Episode } from "@/lib/content/podcasts";
import { ROBOTS } from "@/lib/seo/indexation";

/** L'article lié à un épisode n'apparaît qu'à sa date de publication. */
export const revalidate = 3600;

/**
 * Nos podcasts — rubrique « Actualités », avec Nos articles (demande de la
 * cliente du 07/10/2026). L'émission à gauche, les épisodes à droite, du plus
 * récent au plus ancien. Pas de lecteur intégré : liens vers Ausha et les
 * plateformes (choix de JC), donc aucun cookie tiers.
 */

export const metadata: Metadata = {
  title: "Podcast pour dirigeants de TPE et PME : Parler vrai",
  description:
    "« Parler vrai : dans la tête du dirigeant », le podcast d'Un Seul Souffle : solitude du dirigeant, charge mentale, décisions difficiles. À écouter sur Spotify, Apple Podcasts et Deezer.",
  alternates: { canonical: "/podcasts/" },
  robots: ROBOTS,
};

const TEINTE = ACCENTS.qvt;

const dateLongue = (iso: string) =>
  new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`),
  );

function schema() {
  const url = `${SITE_URL}/podcasts/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PodcastSeries",
        "@id": `${url}#podcast`,
        name: EMISSION.titre,
        description: EMISSION.description,
        url,
        inLanguage: "fr-FR",
        publisher: { "@id": `${SITE_URL}/#organization` },
        sameAs: [EMISSION.url, ...EMISSION.plateformes.map((p) => p.url)],
        hasPart: EPISODES.map((e) => ({
          "@type": "PodcastEpisode",
          name: `Épisode ${e.numero} : ${e.titre}`,
          episodeNumber: e.numero,
          datePublished: e.date,
          timeRequired: `PT${e.minutes}M`,
          description: e.resume,
          url: e.url,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Nos podcasts", item: url },
        ],
      },
    ],
  };
}

function LienExterne({ href, children, className }: { href: string; children: React.ReactNode; className: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function CarteEpisode({ episode }: { episode: Episode }) {
  const article = episode.article ? trouverArticle(episode.article) : undefined;
  const articleEnLigne = article && article.valide && dateAtteinte(article) ? article : undefined;
  return (
    <article className="relative overflow-hidden rounded-[18px] border border-rule bg-surface p-7 sm:p-9">
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[4px]" style={{ backgroundColor: TEINTE.vif }} />
      <p className="font-mono text-[11px] uppercase tracking-[0.13em]" style={{ color: TEINTE.texte }}>
        Épisode {episode.numero} · {dateLongue(episode.date)} · {episode.minutes} min
      </p>
      <h2 className="mt-3 font-serif text-[clamp(23px,2.4vw,30px)] font-normal leading-snug text-ink">{episode.titre}</h2>
      {episode.invite && <p className="mt-2 text-[14.5px] text-muted">Avec {episode.invite}</p>}
      <p className="mt-4 max-w-prose text-[16px] leading-relaxed">{episode.resume}</p>
      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
        <LienExterne
          href={episode.url}
          className="group inline-flex items-center gap-2 rounded-bouton border border-teal bg-teal px-5 py-3 text-[14.5px] font-medium text-ground transition-colors hover:border-teal-dark hover:bg-teal-dark"
        >
          <span aria-hidden="true">▶</span> Écouter l&apos;épisode
          <span className="sr-only"> (nouvel onglet)</span>
        </LienExterne>
        {articleEnLigne && (
          <Link
            href={`/infos-utiles/${articleEnLigne.slug}/`}
            className="text-[14.5px] text-body underline decoration-rule underline-offset-4 transition-colors hover:text-teal"
          >
            Lire aussi : {articleEnLigne.h1}
          </Link>
        )}
      </div>
    </article>
  );
}

export default function PodcastsPage() {
  return (
    <>
      <main>
        <EnTetePage
          fil="Nos podcasts"
          label="Actualités · Nos podcasts"
          accent="qvt"
          aside={<SymboleAnime />}
          anime
          h1="Parler vrai : dans la tête du dirigeant"
          lede="Le podcast d'Un Seul Souffle. Ce que vivent réellement les dirigeants de TPE et de PME, et dont on parle peu en public : la solitude, la charge mentale, les décisions difficiles."
        />

        <Section large={200}>
          <OngletsActualites actif="podcasts" className="mb-10" />

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start lg:gap-10">
            {/* L'émission : reste visible pendant qu'on parcourt les épisodes. */}
            <Reveal className="lg:sticky lg:top-8">
              <aside
                className="rounded-[18px] border border-rule p-7 sm:p-9"
                style={{ backgroundImage: `linear-gradient(140deg, ${TEINTE.vif}26 0%, ${TEINTE.vif}08 75%)` }}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.13em]" style={{ color: TEINTE.texte }}>
                  L&apos;émission · {EPISODES.length} épisodes
                </p>
                <p className="mt-4 font-serif text-[24px] leading-snug text-ink">{EMISSION.titre}</p>
                <p className="mt-4 text-[15.5px] leading-relaxed">{EMISSION.description}</p>
                <p className="mt-7 font-mono text-[10.5px] uppercase tracking-[0.13em] text-muted">S&apos;abonner sur</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {EMISSION.plateformes.map((p) => (
                    <li key={p.nom}>
                      <LienExterne
                        href={p.url}
                        className="inline-flex items-center rounded-full border border-rule bg-surface px-4 py-2 text-[14px] text-ink transition-colors hover:border-teal hover:text-teal"
                      >
                        {p.nom}
                        <span className="sr-only"> (nouvel onglet)</span>
                      </LienExterne>
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>

            <ul className="grid gap-6">
              {EPISODES.map((episode, i) => (
                <Reveal as="li" key={episode.numero} delay={i * 90}>
                  <CarteEpisode episode={episode} />
                </Reveal>
              ))}
            </ul>
          </div>
        </Section>

        <Reveal>
          <CTAFinal />
        </Reveal>
      </main>

      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema()) }} />
    </>
  );
}
