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
}) {
  const teinte = ACCENTS[accent];

  return (
    <div className="bg-mist">
      <Header />

      <Shell>
        <header className="max-w-[54rem] pb-16 pt-12 sm:pb-20 sm:pt-16">
          <nav aria-label="Fil d'Ariane" className="mb-9 font-mono text-[11.5px] text-muted">
            <Link href="/" className="transition-colors hover:text-teal">
              Accueil
            </Link>
            <span aria-hidden="true" className="px-2 text-rule">
              /
            </span>
            <span className="text-body">{fil}</span>
          </nav>

          <Label style={{ color: teinte.texte }}>{label ?? fil}</Label>

          <h1 className="mt-4 max-w-[20ch] text-[clamp(33px,4.8vw,52px)] leading-[1.08] text-ink">
            {h1}
          </h1>

          <div
            aria-hidden="true"
            className="mt-7 h-px w-20"
            style={{ backgroundColor: teinte.vif }}
          />

          {lede && <p className="mt-7 max-w-prose text-lg leading-relaxed text-body">{lede}</p>}

          {children && <div className="mt-8">{children}</div>}
        </header>
      </Shell>
    </div>
  );
}
