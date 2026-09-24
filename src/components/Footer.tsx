import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/ui/Section";
import { ACCENTS, DEGRADE_LOGO, piliers } from "@/lib/content/home";
import { LienGestionCookies } from "@/components/cookies/LienGestionCookies";

/**
 * Le bloc NAP (nom, adresse, téléphone) conditionne le SEO local, la fiche Google
 * Business Profile, les données structurées ET les mentions légales (obligation LCEN).
 * Deux numéros, un par associée : ceux fournis par la cliente le 24/09/2026.
 *
 * `credit` : la mention « Refonte site internet par Clickzou » ne s'affiche que
 * sur la home — un seul lien sortant vers l'agence, pas un lien par page.
 */
const COLONNES = [
  {
    titre: "Le cabinet",
    liens: [
      { href: "/un-seul-souffle/", label: "Notre approche" },
      { href: "/notre-equipe/", label: "Notre équipe" },
      { href: "/tarifs/", label: "Tarifs" },
      { href: "/infos-utiles/", label: "Infos utiles" },
      { href: "/contact/", label: "Contact" },
    ],
  },
  {
    titre: "Accompagnements",
    liens: [
      { href: "/transformation-dirigeant/", label: "Coaching dirigeant" },
      { href: "/transformation-entreprise/", label: "Conseil en organisation" },
      { href: "/daf-externalise-toulouse/", label: "DAF externalisé" },
      { href: "/diagnostic/", label: "Diagnostic gratuit" },
    ],
  },
];

const TELEPHONES = [
  { nom: "Muriel", numero: "06 63 44 65 85", tel: "+33663446585" },
  { nom: "Marjorie", numero: "06 25 08 00 09", tel: "+33625080009" },
];

function Titre({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 font-mono text-[10px] font-normal uppercase tracking-[0.13em] text-muted">
      {children}
    </h2>
  );
}

export function Footer({ credit = false }: { credit?: boolean }) {
  return (
    <footer className="relative bg-surface-2/60">
      {/* Filet aux couleurs des cinq rubans du logo. */}
      <div
        aria-hidden="true"
        className="h-[3px] w-full"
        style={{ backgroundImage: `linear-gradient(90deg, ${DEGRADE_LOGO})` }}
      />
      <Shell>
        <div className="grid gap-12 pb-12 pt-14 lg:grid-cols-[1.1fr_2fr] lg:gap-16 lg:pt-16">
          {/* Identité et coordonnées */}
          {/* Tablette : identité à gauche, coordonnées à droite — pas de vide. */}
          <div className="grid gap-6 text-center sm:grid-cols-2 sm:gap-8 sm:text-left lg:block">
            <div>
              {/* Le footer est sur fond clair : le logo complet, avec son nom et sa
                baseline, y est lisible tel qu'il a été dessiné. */}
              <Image
                src="/logo/complet.webp"
                alt="Un Seul Souffle — Rassembler pour engager"
                width={132}
                height={160}
                className="mx-auto mb-5 h-auto w-[104px] sm:mx-0"
              />
              <p className="mx-auto max-w-[34ch] text-[14.5px] leading-relaxed text-body sm:mx-0">
                Équipe de direction externalisée pour les dirigeants de PME et
                d&apos;ETI, à Toulouse et en Occitanie.
              </p>
            </div>

            <div>
              <address className="grid lg:mt-6 gap-3 text-sm not-italic">
                <p className="leading-relaxed">
                  2 rue du Fort
                  <br />
                  31450 Ayguesvives
                </p>
                <ul className="grid gap-1.5">
                  {TELEPHONES.map((t) => (
                    <li key={t.tel}>
                      <span className="text-muted">{t.nom} · </span>
                      <a
                        href={`tel:${t.tel}`}
                        className="text-ink transition-colors hover:text-teal"
                      >
                        {t.numero}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:contact@unseulsouffle.fr"
                  className="text-ink transition-colors hover:text-teal"
                >
                  contact@unseulsouffle.fr
                </a>
              </address>

              <a
                href="https://www.linkedin.com/company/un-seul-souffle/"
                rel="noopener"
                target="_blank"
                className="mt-6 inline-flex items-center gap-2 rounded-bouton border border-rule bg-surface px-3.5 py-2 text-[13px] text-ink transition-colors hover:border-teal hover:text-teal"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 fill-current"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
                Suivre sur LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation : deux colonnes dès le mobile, trois à partir de la tablette. */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
            {COLONNES.map((colonne) => (
              <nav key={colonne.titre} aria-label={colonne.titre}>
                <Titre>{colonne.titre}</Titre>
                <ul className="grid gap-2.5 text-sm">
                  {colonne.liens.map((lien) => (
                    <li key={lien.href}>
                      <Link
                        href={lien.href}
                        className="text-body transition-colors hover:text-teal"
                      >
                        {lien.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="col-span-2 sm:col-span-1">
              <Titre>Domaines</Titre>
              <ul className="grid gap-2.5 text-sm sm:grid-cols-1 max-sm:grid-cols-2 max-sm:gap-x-6">
                {piliers.map((pilier) => (
                  <li
                    key={pilier.n}
                    className="flex items-baseline gap-2 text-body"
                  >
                    <span
                      aria-hidden="true"
                      className="h-[7px] w-[7px] shrink-0 translate-y-[-1px] rounded-full"
                      style={{ backgroundColor: ACCENTS[pilier.accent].vif }}
                    />
                    {pilier.nom}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 border-t border-rule py-6 text-center text-[12.5px] text-muted">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span>
              © {new Date().getFullYear()} Un Seul Souffle — Rassembler pour
              engager
            </span>
            <Link
              href="/mentions-legales/"
              className="transition-colors hover:text-teal"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite/"
              className="transition-colors hover:text-teal"
            >
              Confidentialité
            </Link>
            <Link
              href="/cookies/"
              className="transition-colors hover:text-teal"
            >
              Cookies
            </Link>
            <LienGestionCookies className="transition-colors hover:text-teal" />
          </div>
          {credit && (
            <p>
              Refonte site internet par{" "}
              <a
                href="https://clickzou.fr/agence-refonte-site-internet-toulouse/"
                className="text-body underline decoration-rule underline-offset-[3px] transition-colors hover:text-teal hover:decoration-teal"
              >
                Clickzou
              </a>
            </p>
          )}
        </div>
      </Shell>
    </footer>
  );
}
