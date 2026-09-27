import Link from "next/link";

import { Section, SectionHead } from "@/components/ui/Section";
import { ACCENTS, equipe } from "@/lib/content/home";
import type { Article } from "@/lib/content/article";
import { minutesLecture, rubrique } from "@/lib/content/lecture";

/**
 * Maillage descendant (master § 5) : une page pilier, une page auteur ou la home
 * liste les articles publiés qui s'y rattachent. La liste grossit seule au fil du
 * calendrier — la page appelante passe une sélection filtrée sur `estPublie`, et
 * se régénère toutes les heures (`revalidate`).
 *
 * Chaque article reste ainsi à deux clics de l'accueil (home → pilier → article),
 * quelle que soit sa page dans la pagination de /infos-utiles/.
 *
 * Rien n'est rendu tant qu'aucun article n'est publié : pas de section vide.
 */
export function ArticlesLies({
  articles,
  label,
  titre,
  lede,
}: {
  articles: Article[];
  label: string;
  titre: string;
  lede?: string;
}) {
  if (articles.length === 0) return null;

  return (
    <Section ton="band" large={200}>
      <SectionHead label={label} titre={titre} lede={lede} />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => {
          const teinte = ACCENTS[article.accent];
          const auteur = equipe.find((membre) => membre.slug === article.auteur);
          return (
            <li key={article.slug}>
              <Link
                href={`/infos-utiles/${article.slug}/`}
                className="group flex h-full flex-col rounded-carte border border-rule bg-surface p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-24px_rgba(20,32,54,0.4)]"
              >
                <span
                  className="font-mono text-[10.5px] uppercase tracking-[0.12em]"
                  style={{ color: teinte.texte }}
                >
                  {rubrique(article)}
                </span>
                <h3 className="mt-3 font-serif text-[20px] font-normal leading-snug text-ink transition-colors group-hover:text-teal">
                  {article.h1}
                </h3>
                <span aria-hidden="true" className="flex-1" />
                <span className="mt-5 font-mono text-[11px] text-muted">
                  {auteur?.nom} · {minutesLecture(article)} min de lecture
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
