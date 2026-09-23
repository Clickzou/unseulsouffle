import Image from "next/image";
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
 * La fiche « Repères » (pour qui, quelles étapes, combien, où) est affichée dans
 * l'en-tête, à droite du H1 : ce sont les faits qu'un dirigeant vérifie avant de
 * lire. Voir `CarteReperes` ci-dessous.
 *
 * À droite, une photo propre à l'offre (scripts/gen-pilier-images.mjs), étirée à
 * la hauteur du titre et du texte sur grand écran.
 */
const PHOTOS: Record<string, { src: string; alt: string }> = {
  qvt: {
    src: "/images/piliers/dirigeant.webp",
    alt: "Mains de deux personnes en conversation autour d'une table ronde, une tasse et un carnet",
  },
  organisation: {
    src: "/images/piliers/entreprise.webp",
    alt: "Deux personnes de dos traversant un atelier de production organisé",
  },
  finance: {
    src: "/images/piliers/finance.webp",
    alt: "Personne de dos à son bureau devant un ordinateur, toits de Toulouse par la fenêtre",
  },
};

export function EssentielPilier({ page }: { page: PagePilier }) {
  const accent = ACCENTS[page.accent];
  const photo = PHOTOS[page.accent];

  return (
    <Section ton="surface">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
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

        {photo && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] shadow-[0_30px_70px_-40px_rgba(20,32,54,0.55)] lg:aspect-auto lg:min-h-[320px]">
            <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 500px, 100vw" className="object-cover" />
          </div>
        )}
      </div>
    </Section>
  );
}

/** Fiche « Repères » d'une page pilier : les faits clés, en surface teal isolée. */
export function CarteReperes({ page }: { page: PagePilier }) {
  return (
    <aside
      className="overflow-hidden rounded-carte shadow-lift"
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

      {/* -mb-px masque le filet de la dernière rangée, sur une ou deux colonnes. */}
      <ul className="-mb-px grid px-6 sm:grid-cols-2 sm:gap-x-8">
        {page.essentiel.points.map((point) => (
          <li
            key={point}
            className="border-b border-white/10 py-4 text-[14.5px] leading-snug text-white"
          >
            {point}
          </li>
        ))}
      </ul>

    </aside>
  );
}
