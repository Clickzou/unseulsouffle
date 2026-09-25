import Image from "next/image";

/**
 * Le symbole du logo en décor d'en-tête, qui « respire » lentement.
 *
 * Volontairement estompé (opacité 45 %) : il habille la colonne de droite sans
 * concurrencer le H1 ni les boutons. Décoratif, donc `alt=""` et `aria-hidden`.
 * Masqué sous `lg` : sur téléphone, il repousserait les articles sans rien apporter.
 */
export function SymboleAnime() {
  return (
    <div aria-hidden="true" className="anim-montee hidden lg:flex lg:justify-center lg:self-center" style={{ animationDelay: "360ms" }}>
      <Image
        src="/logo/symbole.webp"
        alt=""
        width={220}
        height={261}
        priority
        className="anim-souffle h-auto w-[240px] opacity-45"
      />
    </div>
  );
}
