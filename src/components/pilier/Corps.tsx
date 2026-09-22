import { Section, Label } from "@/components/ui/Section";
import { RichText } from "@/components/ui/RichText";
import { ACCENTS, comparatif, equipe, etapes, piliers } from "@/lib/content/home";
import type { Bloc, Chapitre, PagePilier } from "@/lib/content/pilier";

/**
 * Corps d'une page pilier : les H2 et leur contenu.
 *
 * Les sections alternent `ground` et `surface` pour donner un rythme de lecture
 * à une page longue (1 800 à 3 000 mots, master § 6). L'alternance suit l'index
 * du chapitre, pas une valeur portée par le contenu : le rédacteur n'a pas à
 * s'occuper des fonds.
 *
 * Les blocs `etape`, `comparatif` et `expertises` lisent `home.ts` plutôt que de
 * redire son contenu. C'est la règle de nommage du master § 10 rendue mécanique :
 * l'étape 05 ne peut pas s'appeler « Renforcer » sur la home et « Transmettre »
 * ici, puisqu'elle n'est écrite qu'une fois.
 */

/* ─────────── Blocs ─────────── */

function BlocEtape({ n, accentPage }: { n: string; accentPage: string }) {
  const etape = etapes.find((e) => e.n === n);
  if (!etape) return null;

  const lignes: [string, string][] = [
    ["Ce que vous constatez", etape.symptome],
    ["Ce que nous faisons", etape.action],
    ["Ce que vous obtenez", etape.resultat],
    ["Format", etape.format],
  ];

  return (
    <div className="my-9 overflow-hidden rounded-carte border border-rule bg-surface shadow-lift">
      <div aria-hidden="true" className="h-[3px] w-full" style={{ backgroundColor: accentPage }} />

      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-rule-2 px-6 py-5 sm:px-8">
        <span className="font-mono text-[11px] tracking-label" style={{ color: accentPage }}>
          Étape {etape.n}
        </span>
        <h3 className="font-serif text-[23px] font-normal text-ink">{etape.verbe}</h3>
        <span className="font-serif text-[17px] font-light italic text-muted">
          {etape.promesse}
        </span>
      </div>

      <dl className="px-6 sm:px-8">
        {lignes.map(([label, valeur]) => (
          <div
            key={label}
            className="grid gap-1.5 border-b border-rule-2 py-4 last:border-b-0 sm:grid-cols-[168px_1fr] sm:gap-6"
          >
            <dt className="pt-[3px] font-mono text-[10px] uppercase tracking-[0.13em] text-muted">
              {label}
            </dt>
            <dd className="max-w-prose text-[15.5px] leading-relaxed">{valeur}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function BlocTableau({ entetes, lignes }: { entetes: [string, string]; lignes: [string, string][] }) {
  return (
    <div className="my-9 overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <thead>
          <tr className="border-b border-rule">
            {entetes.map((entete, i) => (
              <th
                key={entete}
                scope="col"
                className={`py-3.5 pr-6 font-mono text-[10px] font-normal uppercase tracking-[0.13em] ${
                  i === 0 ? "text-muted" : "text-teal"
                }`}
              >
                {entete}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lignes.map(([gauche, droite]) => (
            <tr key={gauche} className="border-b border-rule-2 align-top">
              <td className="w-1/2 py-4 pr-6 text-[15px] leading-relaxed text-muted">{gauche}</td>
              <td className="w-1/2 py-4 pr-6 text-[15px] leading-relaxed text-ink">{droite}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Le comparatif de la marque, à trois colonnes — actif GEO prioritaire. */
function BlocComparatif() {
  return (
    <div className="my-9 overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b border-rule">
            <th scope="col" className="py-3.5 pr-6 font-mono text-[10px] font-normal uppercase tracking-[0.13em] text-muted">
              Critère
            </th>
            <th scope="col" className="py-3.5 pr-6 font-mono text-[10px] font-normal uppercase tracking-[0.13em] text-muted">
              Cabinet de conseil classique
            </th>
            <th scope="col" className="py-3.5 pr-6 font-mono text-[10px] font-normal uppercase tracking-[0.13em] text-teal">
              Un Seul Souffle
            </th>
          </tr>
        </thead>
        <tbody>
          {comparatif.map((ligne) => (
            <tr key={ligne.critere} className="border-b border-rule-2 align-top">
              <th scope="row" className="w-[22%] py-4 pr-6 text-left text-[14px] font-normal text-body">
                {ligne.critere}
              </th>
              <td className="py-4 pr-6 text-[15px] leading-relaxed text-muted">{ligne.classique}</td>
              <td className="py-4 pr-6 text-[15px] leading-relaxed text-ink">{ligne.uss}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Les cinq expertises et leurs référents, depuis `piliers` et `equipe`. */
function BlocExpertises() {
  return (
    <ul className="my-9 grid gap-px overflow-hidden rounded-carte border border-rule bg-rule sm:grid-cols-2">
      {piliers.map((pilier) => {
        const accent = ACCENTS[pilier.accent];
        const noms = pilier.referents
          .map((slug) => equipe.find((membre) => membre.slug === slug)?.nom)
          .filter(Boolean)
          .join(" · ");

        return (
          <li key={pilier.n} className="bg-surface p-6 last:sm:col-span-2">
            <span
              className="flex items-baseline gap-2 font-mono text-[10px] uppercase tracking-[0.13em]"
              style={{ color: accent.texte }}
            >
              <span
                aria-hidden="true"
                className="h-[7px] w-[7px] shrink-0 rounded-full"
                style={{ backgroundColor: accent.vif }}
              />
              {pilier.n}
            </span>
            <h3 className="mt-2.5 font-serif text-[19px] font-normal text-ink">{pilier.nom}</h3>
            <p className="mt-2 text-[15px] leading-relaxed">{pilier.resume}</p>
            {noms && <p className="mt-3 font-mono text-[11px] text-muted">{noms}</p>}
          </li>
        );
      })}
    </ul>
  );
}

function BlocEncadre({ titre, texte, aFournir }: { titre: string; texte: string; aFournir?: boolean }) {
  return (
    <aside
      className={`my-9 rounded-carte border-l-2 px-6 py-5 ${
        aFournir ? "border-amber bg-amber-wash" : "border-teal bg-teal-wash"
      }`}
    >
      <h3
        className={`font-mono text-[10px] uppercase tracking-[0.13em] ${
          aFournir ? "text-amber" : "text-teal-dark"
        }`}
      >
        {titre}
      </h3>
      <p
        className={`mt-2.5 max-w-prose leading-relaxed ${
          // Un placeholder est signalé visuellement et exclu du JSON-LD — même
          // convention que la FAQ de la home.
          aFournir ? "font-mono text-[13px] text-amber" : "text-[15.5px] text-ink"
        }`}
      >
        {texte}
      </p>
    </aside>
  );
}

function RendreBloc({ bloc, accentPage }: { bloc: Bloc; accentPage: string }) {
  switch (bloc.type) {
    case "p":
      return (
        <p className="mt-5 max-w-prose text-[17px] leading-[1.72] first:mt-0">
          <RichText>{bloc.texte}</RichText>
        </p>
      );

    case "liste":
      return (
        <ul className="mt-6 grid max-w-prose gap-3">
          {bloc.items.map((item) => (
            <li key={item} className="relative pl-6 text-[16.5px] leading-[1.65]">
              <span
                aria-hidden="true"
                className="absolute left-0 top-[11px] h-[5px] w-[5px] rounded-full"
                style={{ backgroundColor: accentPage }}
              />
              <RichText>{item}</RichText>
            </li>
          ))}
        </ul>
      );

    case "etape":
      return <BlocEtape n={bloc.n} accentPage={accentPage} />;

    case "tableau":
      return <BlocTableau entetes={bloc.entetes} lignes={bloc.lignes} />;

    case "comparatif":
      return <BlocComparatif />;

    case "expertises":
      return <BlocExpertises />;

    case "encadre":
      return <BlocEncadre titre={bloc.titre} texte={bloc.texte} aFournir={bloc.aFournir} />;
  }
}

/* ─────────── Chapitre ─────────── */

function RendreChapitre({ chapitre, accentPage }: { chapitre: Chapitre; accentPage: string }) {
  return (
    <>
      {chapitre.label && <Label style={{ color: accentPage }}>{chapitre.label}</Label>}
      <h2 className="mb-7 mt-4 max-w-[26ch] text-[clamp(25px,3.2vw,35px)] leading-[1.16]">
        {chapitre.titre}
      </h2>

      {chapitre.blocs.map((bloc, index) => (
        <RendreBloc key={index} bloc={bloc} accentPage={accentPage} />
      ))}
    </>
  );
}

export function Corps({ page }: { page: PagePilier }) {
  const accentPage = ACCENTS[page.accent].texte;

  return (
    <>
      {page.chapitres.map((chapitre, index) => (
        <Section key={chapitre.titre} ton={index % 2 === 0 ? "ground" : "surface"}>
          <RendreChapitre chapitre={chapitre} accentPage={accentPage} />
        </Section>
      ))}
    </>
  );
}
