import Link from "next/link";
import { Shell, Label } from "@/components/ui/Section";
import { Header } from "@/components/Header";
import { ACCENTS, type CleAccent } from "@/lib/content/home";

/**
 * En-tête commun à toutes les pages intérieures qui ne sont pas des piliers
 * (cabinet, équipe, membres, diagnostic, contact, actualités, pages légales).
 *
 * Même structure que `PilierHero` — nav claire, fil d'Ariane, label, H1, filet
 * de couleur, chapô — mais sans dépendre du type `PagePilier`. Les pages piliers
 * gardent leur propre en-tête parce qu'elles y ajoutent leurs deux CTA de
 * conversion ; tout le reste passe ici.
 */
export function EnTetePage({
  fil,
  label,
  h1,
  lede,
  accent = "finance",
  children,
  aside,
  anime = false,
  asideLarge = false,
}: {
  /** Libellé court de la page dans le fil d'Ariane. */
  fil: string;
  /** Sur-titre monospace. Reprend `fil` par défaut. */
  label?: string;
  h1: string;
  lede?: string;
  accent?: CleAccent;
  /** CTA ou contenu additionnel, sous le chapô. */
  children?: React.ReactNode;
  /** Colonne de droite en écran large, sous le texte sur mobile. */
  aside?: React.ReactNode;
  /** Entrée en cascade au chargement, comme le hero de la home. */
  anime?: boolean;
  /** La colonne de droite prend la moitié de la largeur (mosaïque, image). */
  asideLarge?: boolean;
}) {
  const teinte = ACCENTS[accent];

  /** Classe et délai d'entrée du n-ième élément, ou rien si l'en-tête est statique. */
  const entree = (rang: number) =>
    anime
      ? { className: "anim-montee", style: { animationDelay: `${rang * 90}ms` } }
      : { className: "", style: undefined };

  return (
    <div className="bg-mist">
      <Header />

      <Shell>
        <div
          className={
            "pb-16 pt-12 sm:pb-20 sm:pt-16" +
            (aside
              ? asideLarge
                ? " grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16"
                : " grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end lg:gap-16"
              : "")
          }
        >
          <header className="max-w-[54rem]">
            <nav aria-label="Fil d'Ariane" className="mb-9 font-mono text-[11.5px] text-muted">
              <Link href="/" className="transition-colors hover:text-teal">
                Accueil
              </Link>
              <span aria-hidden="true" className="px-2 text-rule">
                /
              </span>
              <span className="text-body">{fil}</span>
            </nav>

            <Label className={entree(0).className} style={{ ...entree(0).style, color: teinte.texte }}>
              {label ?? fil}
            </Label>

            <h1
              style={entree(1).style}
              className={`${entree(1).className} mt-4 max-w-[20ch] text-[clamp(33px,4.8vw,52px)] leading-[1.08] text-ink`}
            >
              {h1}
            </h1>

            <div
              aria-hidden="true"
              className={`${entree(2).className} mt-7 h-px w-20`}
              style={{ ...entree(2).style, backgroundColor: teinte.vif }}
            />

            {lede && (
              <p
                style={entree(3).style}
                className={`${entree(3).className} mt-7 max-w-prose text-lg leading-relaxed text-body`}
              >
                {lede}
              </p>
            )}

            {children && (
              <div style={entree(4).style} className={`${entree(4).className} mt-8`}>
                {children}
              </div>
            )}
          </header>

          {aside}
        </div>
      </Shell>
    </div>
  );
}
