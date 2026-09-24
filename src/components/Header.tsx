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
