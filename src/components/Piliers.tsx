import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/ui/Section";
import { piliers, equipe, ACCENTS, type Membre } from "@/lib/content/home";

/**
 * Les six expertises, juste sous le hero.
 *
 * C'est le bloc qui répond à « qui fait quoi » — la promesse même du cabinet,
 * six compétences de direction portées chacune par quelqu'un. Il est donc traité
 * en vraies cartes détachées, et non en simple rail de texte.
 *
 * Chaque pilier porte un accent repris des cinq teintes du logo. La couleur est
 * une clé de lecture, pas un ornement : elle identifie le pilier partout où il
 * réapparaît. Elle est appliquée en style inline — Tailwind ne compile pas les
 * classes construites dynamiquement.
 *
 * Les référents sont résolus depuis `equipe` par leur slug : photo et nom ne sont
 * écrits qu'une fois dans le contenu.
 */
/** Nombres en toutes lettres, pour un titre qui se recompte tout seul. */
const NOMBRES = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit"];

export function Piliers() {
  // Le compte est calculé, jamais écrit en dur : même logique que le titre des
  // blocages — un compte codé en dur finit par mentir.
  const nbExpertises = NOMBRES[piliers.length];

  return (
    // Le fond court bord à bord ; la gouttière de 100 px est portée par le Shell,
    // à l'intérieur. La séparation d'avec le hero se fait désormais par la
    // couleur, le filet inférieur n'a plus lieu d'être.
    <div className="bg-mist">
      <Shell large>
        <div id="expertises" className="scroll-mt-24 py-14 sm:py-16">
          <div className="mb-8 flex flex-wrap items-baseline gap-x-5 gap-y-1">
            <h2 className="font-serif text-[26px] font-light leading-tight text-ink first-letter:uppercase">
              {nbExpertises} expertises de direction, un seul référent pour vous
            </h2>
            {/* Texte de la cliente (retour du 04/10/2026). */}
            <p className="max-w-[80ch] text-[14.5px] text-muted">
              Un interlocuteur unique, {nbExpertises} regards qui se croisent. Votre référent porte votre
              dossier. Les experts échangent en continu pour confronter leurs regards, ouvrir
              l&apos;espace et mobiliser la bonne compétence au bon moment.
            </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
          {piliers.map((pilier) => {
            const referents = pilier.referents
              .map((slug) => equipe.find((m) => m.slug === slug))
              .filter((m): m is Membre => Boolean(m));

            const accent = ACCENTS[pilier.accent];

            return (
              <li
                key={pilier.n}
                className="flex flex-col rounded-carte border border-rule-2 border-t-[3px] bg-surface px-6 pb-6 pt-5 shadow-lift"
                style={{ borderTopColor: accent.vif }}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span
                    className="font-mono text-[11px] tracking-[0.12em]"
                    style={{ color: accent.texte }}
                  >
                    {pilier.n}
                  </span>

                  {/* Vignettes en léger chevauchement s'il y a plusieurs référents,
                      avec un liseré pour rester lisibles l'une sur l'autre. */}
                  <div className="flex shrink-0 -space-x-3">
                    {referents.map((membre) => (
                      <Image
                        key={membre.slug}
                        src={membre.photo ?? ""}
                        alt={`${membre.nom}, ${membre.expertise.toLowerCase()} chez Un Seul Souffle`}
                        width={72}
                        height={72}
                        className="h-[72px] w-[72px] rounded-full object-cover ring-2 ring-surface"
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-serif text-[19px] font-light leading-tight text-ink">
                  {pilier.page ? (
                    <Link href={pilier.page.href} className="transition-colors hover:text-teal">
                      {pilier.nom}
                    </Link>
                  ) : (
                    pilier.nom
                  )}
                </h3>

                <p className="mt-2.5 text-[13.5px] leading-relaxed text-body">{pilier.resume}</p>

                <p className="mt-5 border-t border-rule-2 pt-3.5 text-[13px] leading-snug">
                  {referents.map((membre, index) => (
                    <span key={membre.slug}>
                      {index > 0 && <span className="text-muted"> · </span>}
                      <Link
                        href={membre.href}
                        className="font-medium text-ink transition-colors hover:text-teal"
                      >
                        {membre.nom}
                      </Link>
                    </span>
                  ))}
                </p>
              </li>
            );
          })}
        </ul>
        </div>
      </Shell>
    </div>
  );
}
