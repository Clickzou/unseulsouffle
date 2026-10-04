import { Section, SectionHead } from "@/components/ui/Section";
import { moments, ACCENTS } from "@/lib/content/home";

/**
 * Le périmètre d'intervention, en deux temps.
 *
 * D'abord les trois moments où un dirigeant appelle — chacun dans une teinte du
 * logo, pour qu'il reconnaisse le sien avant d'avoir lu le détail.
 *
 * Ensuite, l'encadré gris. Il disait ce pour quoi le cabinet n'était pas fait
 * (une expertise ponctuelle sur un seul sujet) ; à la demande de la cliente
 * (retour du 04/10/2026), il dit désormais l'inverse : un expert peut aussi
 * intervenir seul.
 */
export function PourQui() {
  return (
    <Section ton="surface">
      <SectionHead
        label="Périmètre"
        titre="Les entreprises que notre cabinet de conseil accompagne en Occitanie"
        lede="Depuis Toulouse, nous accompagnons des TPE et PME de 10 à 250 salariés, principalement en Haute-Garonne et en Occitanie, dans l'industrie et les services."
        centre
      />

      <ul className="grid gap-4 md:grid-cols-3">
        {moments.map((moment) => {
          const accent = ACCENTS[moment.accent];

          return (
            <li
              key={moment.n}
              className="flex flex-col gap-3 rounded-carte border border-rule-2 border-t-[3px] bg-surface px-6 pb-6 pt-5 shadow-lift"
              style={{ borderTopColor: accent.vif }}
            >
              <span
                className="font-mono text-[11px] tracking-[0.12em]"
                style={{ color: accent.texte }}
              >
                {moment.n}
              </span>
              <h3 className="font-serif text-[21px] font-light leading-tight text-ink">
                {moment.titre}
              </h3>
              <p className="text-[14.5px] leading-relaxed">{moment.detail}</p>
            </li>
          );
        })}
      </ul>

      {/* Une seule expertise : un expert peut intervenir seul. */}
      <div className="mx-auto mt-6 grid max-w-[74ch] gap-4 rounded-carte border border-rule-2 bg-mist px-7 py-6 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-amber">
          Une seule expertise ?
        </p>
        <p className="text-[15px] leading-relaxed">
          Si vous n&apos;avez besoin que d&apos;une expertise,{" "}
          <strong className="font-medium text-ink">un de nos experts peut aussi intervenir seul</strong>, sur
          le seul sujet qui vous occupe.
        </p>
      </div>
    </Section>
  );
}
