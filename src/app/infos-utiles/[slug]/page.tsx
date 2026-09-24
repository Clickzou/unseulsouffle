import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AideContact } from "@/components/AideContact";
import { FAQ } from "@/components/FAQ";
import { CTAFinal } from "@/components/CTAFinal";
import { RendreBloc } from "@/components/pilier/Corps";
import { RichText } from "@/components/ui/RichText";
import { Shell, Label } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ACCENTS, SITE_URL, equipe } from "@/lib/content/home";
import type { Article } from "@/lib/content/article";
import { articlesPublies, trouverArticle } from "@/lib/content/articles";
import { couverture, minutesLecture, rubrique } from "@/lib/content/lecture";
import { NON_INDEXABLE, ROBOTS } from "@/lib/seo/indexation";

/** Publication programmée des articles : régénération toutes les heures. */
export const revalidate = 3600;

/**
 * Article de fond — gabarit unique (master § 6 et § 9).
 *
 *   fil d'Ariane → H1 + chapô + auteur → L'essentiel → sommaire + corps → sources
 *   → auteur et pilier → FAQ → CTA
 *
 * Un article non validé par son auteur (`valide: false`) est servi en noindex,
 * sans signalement visible.
 */

export function generateStaticParams() {
  return articlesPublies().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = trouverArticle(params.slug);
  if (!article) return {};
  const href = `/infos-utiles/${article.slug}/`;
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: href },
    robots: article.valide ? ROBOTS : NON_INDEXABLE,
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url: href,
      siteName: "Un Seul Souffle",
      title: article.h1,
      description: article.metaDescription,
      publishedTime: article.datePublication,
      modifiedTime: article.dateMaj ?? article.datePublication,
    },
  };
}

/* ─────────── Utilitaires ─────────── */

/** Ancre d'un H2 pour le sommaire : minuscules, sans accents ni ponctuation. */
function ancre(titre: string): string {
  return titre
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function dateLongue(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function schema(article: Article, auteur: (typeof equipe)[number] | undefined) {
  const url = `${SITE_URL}/infos-utiles/${article.slug}/`;
  const auteurUrl = auteur ? `${SITE_URL}${auteur.href.split("#")[0]}` : undefined;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: article.h1,
        description: article.metaDescription,
        url,
        mainEntityOfPage: url,
        inLanguage: "fr-FR",
        datePublished: article.datePublication,
        dateModified: article.dateMaj ?? article.datePublication,
        keywords: [article.motCle, ...article.motsClesSecondaires].join(", "),
        // Auteur : une personne réelle, jamais la marque (master § 2).
        author: auteur
          ? { "@type": "Person", name: auteur.nom, jobTitle: auteur.expertise, url: auteurUrl }
          : undefined,
        publisher: { "@id": `${SITE_URL}/#organization` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        citation: article.sources.map((source) => source.url),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Infos utiles", item: `${SITE_URL}/infos-utiles/` },
          { "@type": "ListItem", position: 3, name: article.h1, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: article.faq
          .filter((question) => !question.aFournir)
          .map((question) => ({
            "@type": "Question",
            name: question.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: question.r.join(" ").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, ""),
            },
          })),
      },
    ],
  };
}

/* ─────────── Chapitre en cartes ─────────── */

type BlocArticle = Article["chapitres"][number]["blocs"][number];

/**
 * Découpe un chapitre : ce qui précède le premier H3 est l'introduction, puis
 * chaque H3 ouvre une sous-carte avec les blocs qui le suivent.
 */
function decouper(blocs: BlocArticle[]) {
  const intro: BlocArticle[] = [];
  const parties: { titre: string; blocs: BlocArticle[] }[] = [];
  for (const bloc of blocs) {
    if (bloc.type === "h3") parties.push({ titre: bloc.texte, blocs: [] });
    else if (parties.length) parties[parties.length - 1].blocs.push(bloc);
    else intro.push(bloc);
  }
  return { intro, parties };
}

function ChapitreCartes({
  chapitre,
  numero,
  teinte,
}: {
  chapitre: Article["chapitres"][number];
  numero: number;
  teinte: { texte: string; vif: string };
}) {
  const { intro, parties } = decouper(chapitre.blocs);
  const [lead, ...suiteIntro] = intro;

  return (
    <section
      id={ancre(chapitre.titre)}
      className="scroll-mt-24 overflow-hidden rounded-[22px] border border-rule bg-surface"
    >
      {/* En-tête du chapitre */}
      <header
        className="relative flex flex-col gap-5 border-b border-rule-2 px-7 py-8 sm:flex-row sm:items-center sm:gap-8 sm:px-12 sm:py-10"
        style={{ backgroundImage: `linear-gradient(120deg, ${teinte.vif}17 0%, transparent 60%)` }}
      >
        <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[4px]" style={{ backgroundColor: teinte.vif }} />
        <span
          aria-hidden="true"
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full font-serif text-[28px] text-white"
          style={{ backgroundColor: teinte.texte }}
        >
          {numero}
        </span>
        <div>
          {chapitre.label && <Label style={{ color: teinte.texte }}>{chapitre.label}</Label>}
          <h2 className="mt-2 text-[clamp(25px,3vw,36px)] leading-[1.15]">{chapitre.titre}</h2>
        </div>
      </header>

      <div className="px-7 py-9 sm:px-12 sm:py-11">
        {/* Introduction : le premier paragraphe en chapô. */}
        {lead && lead.type === "p" ? (
          <p className="max-w-[48rem] font-serif text-[clamp(19px,1.6vw,22px)] font-light leading-[1.6] text-ink">
            <RichText>{lead.texte}</RichText>
          </p>
        ) : (
          lead && <RendreBloc bloc={lead} accentPage={teinte.texte} />
        )}
        {suiteIntro.length > 0 && (
          <div className="max-w-[48rem]">
            {suiteIntro.map((bloc, i) => (
              <RendreBloc key={i} bloc={bloc} accentPage={teinte.texte} />
            ))}
          </div>
        )}

        {/* Sous-parties en cartes ; pleine largeur si elles portent un tableau. */}
        {parties.length > 0 && (
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {parties.map((partie, i) => {
              const large =
                parties.length === 1 ||
                partie.blocs.some((b) => b.type === "tableau") ||
                (i === parties.length - 1 && parties.length % 2 === 1);
              return (
                <div
                  key={partie.titre}
                  className={`relative rounded-[16px] border border-rule bg-ground p-6 sm:p-7 ${
                    large ? "lg:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[3px] shrink-0 font-mono text-[11px] tracking-[0.12em]"
                      style={{ color: teinte.texte }}
                    >
                      {numero}.{i + 1}
                    </span>
                    <h3 className="font-serif text-[21px] font-normal leading-snug text-ink">{partie.titre}</h3>
                  </div>
                  {/* Carte large sans tableau : le texte coule sur deux colonnes
                      pour ne pas laisser de vide à droite. */}
                  <div
                    className={`mt-4 [&>*:first-child]:mt-0 ${
                      large && !partie.blocs.some((b) => b.type === "tableau")
                        ? "lg:columns-2 lg:gap-12 [&>*]:break-inside-avoid [&_p]:max-w-none [&_ul]:max-w-none"
                        : ""
                    }`}
                  >
                    {partie.blocs.map((bloc, j) => (
                      <RendreBloc key={j} bloc={bloc} accentPage={teinte.texte} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <a
          href="#sommaire"
          className="mt-9 inline-flex items-center gap-2 font-mono text-[11.5px] text-muted transition-colors hover:text-teal"
        >
          ↑ Retour au sommaire
        </a>
      </div>
    </section>
  );
}

/* ─────────── Page ─────────── */

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = trouverArticle(params.slug);
  if (!article) notFound();

  const auteur = equipe.find((membre) => membre.slug === article.auteur);
  const teinte = ACCENTS[article.accent];
  const minutes = minutesLecture(article);
  const image = couverture(article);

  return (
    <>
      <main>
        {/* En-tête */}
        <div className="bg-mist">
          <Header />
          <Shell>
            <div className="grid gap-10 pb-14 pt-12 sm:pb-16 sm:pt-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
              <header className="min-w-0">
                <nav aria-label="Fil d'Ariane" className="mb-9 font-mono text-[11.5px] text-muted">
                  <Link href="/" className="transition-colors hover:text-teal">
                    Accueil
                  </Link>
                  <span aria-hidden="true" className="px-2 text-rule">
                    /
                  </span>
                  <Link href="/infos-utiles/" className="transition-colors hover:text-teal">
                    Infos utiles
                  </Link>
                </nav>

                <Label className="anim-montee" style={{ color: teinte.texte }}>
                  {rubrique(article)} · {minutes} min de lecture
                </Label>

                <h1
                  style={{ animationDelay: "90ms" }}
                  className="anim-montee mt-4 text-[clamp(30px,3.8vw,44px)] leading-[1.1] text-ink"
                >
                  {article.h1}
                </h1>

                <div
                  aria-hidden="true"
                  style={{ animationDelay: "180ms", backgroundColor: teinte.vif }}
                  className="anim-montee mt-7 h-px w-20"
                />

                <p
                  style={{ animationDelay: "270ms" }}
                  className="anim-montee mt-7 max-w-prose text-lg leading-relaxed text-body"
                >
                  <RichText>{article.chapo}</RichText>
                </p>

                {auteur && (
                  <div
                    style={{ animationDelay: "360ms" }}
                    className="anim-montee mt-8 flex items-center gap-4"
                  >
                    {auteur.photo && (
                      <Image
                        src={auteur.photo}
                        alt={auteur.nom}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    )}
                    <div className="text-[14.5px] leading-snug">
                      <p className="text-ink">
                        Par{" "}
                        <Link href={auteur.href} className="font-medium hover:text-teal">
                          {auteur.nom}
                        </Link>
                        , {auteur.expertise.toLowerCase()}
                      </p>
                      <p className="mt-0.5 font-mono text-[11.5px] text-muted">
                        Publié le {dateLongue(article.datePublication)}
                        {article.dateMaj && ` · mis à jour le ${dateLongue(article.dateMaj)}`}
                      </p>
                    </div>
                  </div>
                )}
              </header>

              {/* Photo de couverture — générée par scripts/gen-article-images.mjs. */}
              <div
                style={{ animationDelay: "420ms" }}
                className="anim-montee relative aspect-[4/3] overflow-hidden rounded-[18px] shadow-[0_30px_70px_-40px_rgba(20,32,54,0.55)] lg:aspect-[4/5]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Shell>
        </div>

        {/* L'essentiel — réponse autonome, pensée pour être citée (master § 8). */}
        <section className="bg-surface py-14 sm:py-16">
          {/* Pleine largeur : réponse à gauche, points clés à droite — pas de vide. */}
          <Shell large>
            <div
              className="relative overflow-hidden rounded-[20px] border border-rule bg-ground"
              style={{ backgroundImage: `linear-gradient(135deg, ${teinte.vif}14 0%, transparent 50%)` }}
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[4px]" style={{ backgroundColor: teinte.vif }} />
              <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-16 lg:p-12">
                <div>
                  <Label style={{ color: teinte.texte }}>L&apos;essentiel</Label>
                  <p className="mt-5 font-serif text-[clamp(19px,1.6vw,22px)] font-light leading-[1.6] text-ink">
                    <RichText>{article.essentiel.reponse}</RichText>
                  </p>
                </div>
                <div className="lg:border-l lg:border-rule lg:pl-12">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">En bref</p>
                  <ul className="mt-5 grid gap-3">
                    {article.essentiel.points.map((point, i) => (
                      <li
                        key={point}
                        className="flex gap-4 rounded-[12px] border border-rule bg-surface px-4 py-3.5 text-[15px] leading-relaxed"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[11px] text-white"
                          style={{ backgroundColor: teinte.texte }}
                        >
                          {i + 1}
                        </span>
                        <span>
                          <RichText>{point}</RichText>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Shell>
        </section>

        {/* Sommaire — en haut, pleine largeur, en cartes. */}
        <section id="sommaire" className="scroll-mt-16 bg-ground pb-4 pt-16 sm:pt-20">
          <Shell large>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Label style={{ color: teinte.texte }}>Sommaire</Label>
                <h2 className="mt-3 text-[clamp(24px,2.6vw,32px)] leading-tight">
                  {article.chapitres.length} parties, {minutes} minutes de lecture
                </h2>
              </div>
            </div>
            <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {article.chapitres.map((chapitre, i) => (
                <li key={chapitre.titre}>
                  <a
                    href={`#${ancre(chapitre.titre)}`}
                    className="group flex h-full gap-4 rounded-[14px] border border-rule bg-surface p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-22px_rgba(20,32,54,0.4)]"
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-serif text-[16px] transition-colors"
                      style={{ backgroundColor: `${teinte.vif}24`, color: teinte.texte }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-[14.5px] leading-snug text-ink transition-colors group-hover:text-teal">
                      {chapitre.titre}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </Shell>
        </section>

        {/* Corps — chaque chapitre en panneau. */}
        <section className="bg-ground pb-16 pt-10 sm:pb-20">
          <Shell>
            <div className="grid gap-8">
              <article className="grid gap-8">
                {article.chapitres.map((chapitre, index) => (
                  <ChapitreCartes key={chapitre.titre} chapitre={chapitre} numero={index + 1} teinte={teinte} />
                ))}
              </article>

              <div className="mx-auto w-full max-w-[48rem]">
                {/* Sources — obligatoires, et visibles : c'est la preuve (master § 5). */}
                {article.sources.length > 0 && (
                  <aside className="mt-16 border-t border-rule pt-8">
                    <h2 className="font-mono text-[11px] font-normal uppercase tracking-label text-muted">
                      Sources
                    </h2>
                    <ol className="mt-4 grid gap-2.5">
                      {article.sources.map((source) => (
                        <li key={source.url} className="text-[14.5px] leading-relaxed">
                          <span className="text-muted">{source.editeur} — </span>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener"
                            className="border-b border-teal/35 text-teal transition-colors hover:border-teal"
                          >
                            {source.titre}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </aside>
                )}

                {/* Auteur et pilier de rattachement. */}
                <aside className="mt-12 grid gap-5 rounded-carte border border-rule bg-surface p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:p-7">
                  {auteur?.photo && (
                    <Image
                      src={auteur.photo}
                      alt={auteur.nom}
                      width={72}
                      height={72}
                      className="h-[72px] w-[72px] rounded-full object-cover"
                    />
                  )}
                  <div>
                    {auteur && (
                      <p className="text-[15px] leading-relaxed">
                        <Link href={auteur.href} className="font-medium text-ink hover:text-teal">
                          {auteur.nom}
                        </Link>
                        <span className="text-muted"> — {auteur.expertise}. </span>
                        {auteur.bio}
                      </p>
                    )}
                    <p className="mt-3 text-[15px]">
                      Pour aller plus loin :{" "}
                      <Link
                        href={article.pilier.href}
                        className="border-b border-teal/35 text-teal transition-colors hover:border-teal"
                      >
                        {article.pilier.ancre}
                      </Link>
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </Shell>
        </section>

        {article.faq.length > 0 && (
          <Reveal>
            <FAQ items={article.faq} titre="Questions fréquentes" ton="surface" />
          </Reveal>
        )}

        <Reveal>
          <CTAFinal />
        </Reveal>
      </main>

      <Footer />
      <AideContact />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(article, auteur)) }}
      />
    </>
  );
}
