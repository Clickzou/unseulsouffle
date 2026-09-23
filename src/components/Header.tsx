import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

/**
 * Menu UNIQUE du site.
 * Le site legacy en servait quatre versions différentes selon la page (audit
 * 2026-08-31) — dont une avec « MStructurer ». Toute évolution du menu se fait ici,
 * et nulle part ailleurs.
 *
 * `overPhoto` : la nav se superpose au hero photo, sans fond ni filet. Sur les
 * pages sans hero photo, la version claire par défaut s'applique.
 *
 * MOBILE — les liens étaient simplement masqués sous `lg`, sans rien pour les
 * remplacer : sur téléphone, le site n'avait donc aucun menu. Pire, le logo et
 * le CTA côte à côte dépassaient 390 px et élargissaient la page entière, ce qui
 * coupait le texte de toutes les sections à droite.
 *
 * Le panneau mobile est un `<details>` natif : il s'ouvre et se ferme sans
 * JavaScript, reste accessible au clavier et fonctionne même si le bundle n'a
 * pas chargé — même choix que l'accordéon de la FAQ.
 */
const LIENS = [
  { href: "/un-seul-souffle/", label: "Le cabinet" },
  { href: "/transformation-dirigeant/", label: "Dirigeant" },
  { href: "/transformation-entreprise/", label: "Entreprise" },
  { href: "/notre-equipe/", label: "Équipe" },
  { href: "/tarifs/", label: "Tarifs" },
  { href: "/infos-utiles/", label: "Infos utiles" },
  { href: "/contact/", label: "Contact" },
];

export function Header({ overPhoto = false }: { overPhoto?: boolean }) {
  const surPhoto = overPhoto;

  return (
    <div className={surPhoto ? "absolute inset-x-0 top-0 z-20" : undefined}>
      <Shell>
        {/* `details` enveloppe UNIQUEMENT le bouton et son panneau : `summary`
            doit être le premier enfant direct de `details`, sinon le navigateur
            en fabrique un (« Détails ») et replie tout le reste de la barre. */}
        <nav
          className={`flex items-center gap-3 py-5 sm:gap-8 ${
            surPhoto ? "border-b border-white/15" : "border-b border-rule-2"
          }`}
        >
            {/* Le symbole seul, pas le logo complet : le nom du logo est dessiné en
                teal foncé, illisible sur le hero sombre. Le signe est polychrome et
                tient sur les deux fonds ; le nom est repris dans la typo du site.
                `min-w-0` autorise le bloc à se réduire au lieu de pousser la nav
                au-delà de la largeur de l'écran. */}
            <Link href="/" className="flex min-w-0 shrink items-center gap-2.5">
              <Image
                src="/logo/symbole.webp"
                alt=""
                width={34}
                height={40}
                priority
                className="h-8 w-auto shrink-0 sm:h-9"
              />
              <span
                className={`truncate font-serif text-[17px] tracking-tight sm:text-[19px] ${
                  surPhoto ? "text-[#f6f4ee]" : "text-ink"
                }`}
              >
                Un <span className="font-normal">Seul</span> Souffle
              </span>
            </Link>

            <ul className="ml-auto hidden gap-6 text-sm lg:flex">
              {LIENS.map((lien) => (
                <li key={lien.href}>
                  <Link
                    href={lien.href}
                    className={`transition-colors hover:text-teal ${
                      surPhoto ? "text-[#d3d8e0] hover:!text-[#7fd3ca]" : "text-body"
                    }`}
                  >
                    {lien.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Le CTA du menu renvoyait une 404 sur toutes les pages du site legacy.
                Libellé raccourci sous `sm` : « Diagnostic gratuit » en entier ne
                tient pas à côté du logo sur un téléphone. */}
            <Button
              href="/diagnostic/"
              className="ml-auto shrink-0 !px-3 !py-2 !text-[13px] sm:!px-4 sm:!py-2.5 sm:!text-[13.5px] lg:ml-0"
            >
              <span className="sm:hidden">Diagnostic</span>
              <span className="hidden sm:inline">Diagnostic gratuit</span>
            </Button>

            <details className="group relative shrink-0 lg:hidden">
              {/* `summary` porte le rôle de bouton : focusable et actionnable au
                  clavier sans code supplémentaire. Le marqueur natif est retiré
                  par `list-none` (Firefox) et par la règle `::-webkit-details-marker`
                  de globals.css (Chrome, Safari). */}
              <summary
                aria-label="Ouvrir le menu"
                className={`flex cursor-pointer list-none items-center justify-center rounded-bouton border p-2 transition-colors ${
                  surPhoto
                    ? "border-white/25 text-[#e8e6e0] hover:border-white/50"
                    : "border-rule text-ink hover:border-teal"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="grid h-[15px] w-[18px] grid-rows-3 items-center"
                >
                  <span className="h-[1.5px] w-full bg-current transition-transform group-open:translate-y-[6px] group-open:rotate-45" />
                  <span className="h-[1.5px] w-full bg-current transition-opacity group-open:opacity-0" />
                  <span className="h-[1.5px] w-full bg-current transition-transform group-open:-translate-y-[6px] group-open:-rotate-45" />
                </span>
              </summary>

              {/* Panneau en surimpression, aligné à droite sous le bouton. Sa
                  largeur est bornée par celle de l'écran moins les gouttières,
                  pour qu'il ne puisse jamais provoquer de défilement latéral. */}
              <ul className="absolute right-0 top-[calc(100%+12px)] z-30 grid w-[min(15rem,calc(100vw-2.5rem))] gap-px overflow-hidden rounded-carte border border-rule bg-rule-2 shadow-lift">
                {LIENS.map((lien) => (
                  <li key={lien.href}>
                    <Link
                      href={lien.href}
                      className="block bg-surface px-4 py-3.5 text-[15.5px] text-body transition-colors hover:text-teal"
                    >
                      {lien.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </nav>
      </Shell>
    </div>
  );
}
