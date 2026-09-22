import Link from "next/link";

/**
 * Balisage minimal pour les textes de contenu : `[texte](/url/)` et `**texte**`.
 *
 * Pourquoi pas du JSX directement dans les fichiers de contenu : le maillage
 * interne se relit et s'audite depuis le contenu seul (master § 5 — 3 à 6 liens
 * contextuels par page de fond, à ancre exacte). Du JSX mêlé au texte rendrait
 * cette relecture impraticable.
 *
 * Deux règles seulement, et pas une de plus : tout ajout de syntaxe ferait de ce
 * fichier un moteur Markdown, qui n'a pas sa place ici.
 */

const MOTIF = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

export function RichText({ children }: { children: string }) {
  const morceaux: React.ReactNode[] = [];
  let curseur = 0;

  for (const trouve of children.matchAll(MOTIF)) {
    const debut = trouve.index ?? 0;
    if (debut > curseur) morceaux.push(children.slice(curseur, debut));

    const [brut, libelle, href, emphase] = trouve;

    if (emphase) {
      morceaux.push(
        <strong key={debut} className="font-medium text-ink">
          {emphase}
        </strong>,
      );
    } else {
      morceaux.push(
        <Link
          key={debut}
          href={href}
          className="border-b border-teal/35 text-teal transition-colors hover:border-teal"
        >
          {libelle}
        </Link>,
      );
    }

    curseur = debut + brut.length;
  }

  if (curseur < children.length) morceaux.push(children.slice(curseur));

  return <>{morceaux}</>;
}
