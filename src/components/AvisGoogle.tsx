import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Avis de la fiche Google Business Profile du cabinet, lus sur l'API Google
 * Places (New) et mis en cache 24 h.
 *
 * Tant que la fiche n'a aucun avis (ou si l'API ne répond pas), la section
 * n'est PAS rendue : pas de titre vide, pas d'emplacement factice. Elle remplace
 * depuis le 28/09/2026 les emplacements « témoignage / cas concret » qui étaient
 * visibles en production.
 *
 * Pas de balisage AggregateRating : Google ne l'accepte pas pour les avis qu'une
 * entreprise affiche sur son propre site (avis « auto-promotionnels »).
 *
 * Variable : GOOGLE_PLACES_API_KEY (Vercel). L'identifiant de la fiche est
 * public, il est écrit ici.
 */

const PLACE_ID = "ChIJwQ1UQkXrrhIRKYUPL5ZMx7M"; // UN SEUL SOUFFLE, 2 rue du Fort, Ayguesvives

type AvisPlaces = {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string };
};

type Fiche = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: AvisPlaces[];
};

async function lireFiche(): Promise<Fiche | null> {
  const cle = process.env.GOOGLE_PLACES_API_KEY;
  if (!cle) return null;
  try {
    const reponse = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=fr&regionCode=FR`, {
      headers: {
        "X-Goog-Api-Key": cle,
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
      },
      next: { revalidate: 86400 },
      signal: AbortSignal.timeout(8000),
    });
    if (!reponse.ok) {
      console.error("[avis-google] Places API :", reponse.status);
      return null;
    }
    return (await reponse.json()) as Fiche;
  } catch (e) {
    console.error("[avis-google] Places API injoignable :", (e as Error).message);
    return null;
  }
}

function Etoiles({ note }: { note: number }) {
  const pleines = Math.round(note);
  return (
    <span className="text-amber" aria-label={`${note} sur 5`}>
      {"★".repeat(pleines)}
      <span className="text-rule">{"★".repeat(5 - pleines)}</span>
    </span>
  );
}

export async function AvisGoogle() {
  const fiche = await lireFiche();
  const avis = (fiche?.reviews ?? []).filter((a) => (a.text?.text ?? a.originalText?.text ?? "").trim());
  if (!fiche?.userRatingCount || avis.length === 0) return null;

  const note = fiche.rating ?? 0;
  const total = fiche.userRatingCount;

  return (
    <Reveal>
      <Section ton="mist">
        <SectionHead label="Avis Google" titre="Ce qu'en disent les dirigeants accompagnés" centre />

        <p className="-mt-6 mb-10 text-center text-sm text-muted">
          <Etoiles note={note} /> <strong className="font-medium text-ink">{note.toFixed(1).replace(".", ",")}</strong> sur 5 ·{" "}
          {total} avis Google
        </p>

        <ul className="grid gap-4 sm:grid-cols-2">
          {avis.map((a, i) => (
            <li key={i} className="flex flex-col gap-3 rounded-carte border border-rule bg-ground px-6 py-6">
              <Etoiles note={a.rating ?? 5} />
              <p className="font-serif text-[17px] font-light italic leading-snug">
                « {(a.text?.text ?? a.originalText?.text ?? "").trim()} »
              </p>
              <p className="mt-auto text-sm text-muted">
                {a.authorAttribution?.displayName ?? "Avis Google"}
                {a.relativePublishTimeDescription ? ` · ${a.relativePublishTimeDescription}` : ""}
              </p>
            </li>
          ))}
        </ul>

        {fiche.googleMapsUri && (
          <p className="mt-8 text-center text-sm">
            <a href={fiche.googleMapsUri} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              Voir tous les avis sur Google
            </a>
          </p>
        )}
      </Section>
    </Reveal>
  );
}
