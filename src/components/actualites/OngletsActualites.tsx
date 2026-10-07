import Link from "next/link";

/**
 * Bascule « Nos articles | Nos podcasts » en tête des deux pages de la rubrique
 * Actualités (demande de la cliente du 07/10/2026) : depuis l'une, un clic mène
 * à l'autre. De vrais liens, pas des onglets JavaScript : chaque page garde son
 * adresse, son titre et son référencement.
 */
const ONGLETS = [
  { cle: "articles", href: "/infos-utiles/", label: "Nos articles" },
  { cle: "podcasts", href: "/podcasts/", label: "Nos podcasts" },
] as const;

export function OngletsActualites({ actif, className = "" }: { actif: "articles" | "podcasts"; className?: string }) {
  return (
    <nav aria-label="Actualités" className={className}>
      <ul className="inline-flex rounded-full border border-rule bg-surface p-1">
        {ONGLETS.map((onglet) => {
          const courant = onglet.cle === actif;
          return (
            <li key={onglet.cle}>
              <Link
                href={onglet.href}
                aria-current={courant ? "page" : undefined}
                className={`block rounded-full px-5 py-2.5 text-[14.5px] transition-colors sm:px-6 ${
                  courant ? "bg-ink text-white" : "text-body hover:text-teal"
                }`}
              >
                {onglet.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
