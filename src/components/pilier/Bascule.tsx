import { Section, Label } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import type { PagePilier } from "@/lib/content/pilier";

/**
 * Renvoi vers l'autre parcours.
 *
 * Le site legacy posait ses deux offres côte à côte sans jamais dire laquelle
 * choisir. Une page pilier affirme au contraire d'emblée à qui elle s'adresse —
 * il faut donc offrir la sortie à celui qui s'est trompé de porte, plutôt que de
 * le laisser repartir. C'est aussi le lien à ancre exacte entre les deux silos
 * (master § 5).
 */
export function Bascule({ page }: { page: PagePilier }) {
  return (
    <Section ton="band">
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Label>Autre parcours</Label>
          <h2 className="my-4 max-w-[24ch] text-[clamp(25px,3.2vw,35px)] leading-[1.16]">
            {page.bascule.titre}
          </h2>
          <p className="max-w-prose text-[17px] leading-[1.72]">{page.bascule.texte}</p>
        </div>

        <Button href={page.bascule.href} variant="line" arrow className="shrink-0">
          {page.bascule.ancre}
        </Button>
      </div>
    </Section>
  );
}
