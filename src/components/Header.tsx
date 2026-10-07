import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MenuMobile } from "@/components/MenuMobile";

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
 * Le menu mobile et tablette est dans MenuMobile : panneau plein écran, seul
 * morceau client de l'en-tête.
 */
/**
 * « Actualités » ouvre un sous-menu (demande de la cliente du 07/10/2026). Sans
 * JavaScript : il s'ouvre au survol et au clavier (focus-within). Le libellé
 * mène lui-même aux articles, pour un clic direct sur écran tactile.
 */
type Lien = { href: string; label: string; sousMenu?: { href: string; label: string }[] };

const LIENS: Lien[] = [
  { href: "/un-seul-souffle/", label: "Le cabinet" },
  { href: "/transformation-dirigeant/", label: "Parcours dirigeant" },
  { href: "/transformation-entreprise/", label: "Parcours entreprise" },
  { href: "/notre-equipe/", label: "Équipe" },
  { href: "/tarifs/", label: "Tarifs" },
  {
    href: "/infos-utiles/",
    label: "Actualités",
    sousMenu: [
      { href: "/infos-utiles/", label: "Nos articles" },
      { href: "/podcasts/", label: "Nos podcasts" },
    ],
  },
  { href: "/contact/", label: "Contact" },
];

export function Header({ overPhoto = false }: { overPhoto?: boolean }) {
  const surPhoto = overPhoto;

  return (
    <div className={surPhoto ? "absolute inset-x-0 top-0 z-20" : undefined}>
      <Shell>
        <nav
          // Grand écran : grille 1fr / auto / 1fr, les liens sont au centre exact de
          // la barre quelle que soit la largeur du logo et du bouton.
          className={`flex items-center gap-3 py-5 sm:gap-8 lg:grid lg:grid-cols-[1fr_auto_1fr] ${
            surPhoto ? "border-b border-white/15" : "border-b border-rule-2"
          }`}
        >
            {/* Le symbole seul, pas le logo complet : le nom du logo est dessiné en
                teal foncé, illisible sur le hero sombre. Le signe est polychrome et
                tient sur les deux fonds ; le nom est repris dans la typo du site.
                `min-w-0` autorise le bloc à se réduire au lieu de pousser la nav
                au-delà de la largeur de l'écran. */}
            <Link href="/" className="flex min-w-0 shrink items-center gap-2.5 lg:justify-self-start">
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

            <ul className="hidden gap-7 text-sm lg:flex">
              {LIENS.map((lien) => (
                <li key={lien.label} className={lien.sousMenu ? "group relative" : undefined}>
                  <Link
                    href={lien.href}
                    aria-haspopup={lien.sousMenu ? "true" : undefined}
                    className={`inline-flex items-center gap-1 transition-colors hover:text-teal ${
                      surPhoto ? "text-[#d3d8e0] hover:!text-[#7fd3ca]" : "text-body"
                    }`}
                  >
                    {lien.label}
                    {lien.sousMenu && (
                      <svg aria-hidden="true" viewBox="0 0 10 6" className="h-[6px] w-[10px] transition-transform group-hover:rotate-180 group-focus-within:rotate-180">
                        <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    )}
                  </Link>
                  {lien.sousMenu && (
                    // `pt-3` : pont invisible entre le libellé et le panneau, pour que
                    // le survol ne se perde pas en descendant la souris.
                    <div className="invisible absolute left-1/2 top-full z-30 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <ul className="min-w-[190px] rounded-carte border border-rule bg-surface p-1.5 shadow-[0_18px_40px_-20px_rgba(20,32,54,0.45)]">
                        {lien.sousMenu.map((sous) => (
                          <li key={sous.href}>
                            <Link
                              href={sous.href}
                              className="block rounded-bouton px-4 py-2.5 text-[14px] text-ink transition-colors hover:bg-mist hover:text-teal"
                            >
                              {sous.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Le CTA du menu renvoyait une 404 sur toutes les pages du site legacy.
                Libellé raccourci sous `sm` : « Diagnostic gratuit » en entier ne
                tient pas à côté du logo sur un téléphone. */}
            <Button
              href="/diagnostic/"
              className="ml-auto shrink-0 !px-3 !py-2 !text-[13px] sm:!px-4 sm:!py-2.5 sm:!text-[13.5px] lg:ml-0 lg:justify-self-end"
            >
              <span className="sm:hidden">Diagnostic</span>
              <span className="hidden sm:inline">Diagnostic gratuit</span>
            </Button>

            <MenuMobile surPhoto={surPhoto} />
          </nav>
      </Shell>
    </div>
  );
}
