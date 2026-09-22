import { Section } from "@/components/ui/Section";
import { ACCENTS, DEGRADE_LOGO } from "@/lib/content/home";
import type { PagePilier } from "@/lib/content/pilier";

/**
 * Bloc « L'essentiel » d'une page pilier — master § 8, point 1.
 *
 * Une seule réponse, factuelle et autonome, placée avant tout argument : c'est
 * le paragraphe qu'un moteur génératif extrait pour répondre à la requête que la
 * page possède. Il se lit hors de la page sans rien perdre, sinon il ne sert pas.
 *
 * La fiche en regard reprend le traitement de la home (surface teal isolée) :
 * ce sont les faits qu'un dirigeant vérifie avant de lire — pour qui, quelles
 * étapes, combien de temps, où.
 */
export function EssentielPilier({ page }: { page: PagePilier }) {
  const accent = ACCENTS[page.accent];

  return (
    <Section ton="surface">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        <div>
          <h2 className="max-w-[22ch] text-[clamp(27px,3.6vw,40px)] leading-[1.14]">
            L&apos;essentiel en un paragraphe
          </h2>

          <div className="mt-9 grid gap-2 sm:grid-cols-[104px_1fr] sm:gap-6">
            <span
              className="flex items-baseline gap-2 pt-[9px] font-mono text-[10px] uppercase tracking-[0.14em]"
              style={{ color: accent.texte }}
            >
              <span
                aria-hidden="true"
                className="h-[7px] w-[7px] shrink-0 rounded-full"
                style={{ backgroundColor: accent.texte }}
              />
              En bref
            </span>
            <p className="max-w-[58ch] font-serif text-[20px] font-light leading-[1.55] text-body">
              {page.essentiel.reponse}
            </p>
          </div>
        </div>

        <aside
          className="self-start overflow-hidden rounded-carte shadow-lift"
          style={{ backgroundColor: "#0E6B66" }}
        >
          <div
            aria-hidden="true"
            className="h-[3px] w-full"
            style={{ background: `linear-gradient(to right, ${DEGRADE_LOGO})` }}
          />
          <p className="border-b border-white/15 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-white/60">
            Repères
          </p>

          <ul className="px-6">
            {page.essentiel.points.map((point) => (
              <li
                key={point}
                className="border-b border-white/10 py-4 text-[14.5px] leading-snug text-white last:border-b-0"
              >
                {point}
              </li>
            ))}
          </ul>

          {/* Fraîcheur visible — critère GEO (master § 8, point 4). */}
          <p className="border-t border-white/15 px-6 py-3 font-mono text-[10.5px] text-white/45">
            Mise à jour : septembre 2026
          </p>
        </aside>
      </div>
    </Section>
  );
}
