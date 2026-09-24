import { Section, Label } from "@/components/ui/Section";
import { RichText } from "@/components/ui/RichText";
import { ACCENTS, comparatif, equipe, etapes, piliers } from "@/lib/content/home";
import type { Bloc, Chapitre, PagePilier } from "@/lib/content/pilier";
import { offre as lireOffre } from "@/lib/content/tarifs";
import Link from "next/link";

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

      {/* La fiche vit souvent dans une demi-colonne : c'est sa propre largeur, pas
          celle de l'écran, qui décide si l'intitulé passe à gauche du texte. */}
      <dl className="px-6 [container-type:inline-size] sm:px-8">
        {lignes.map(([label, valeur]) => (
          <div
            key={label}
            className="grid gap-1.5 border-b border-rule-2 py-4 last:border-b-0 [@container(min-width:520px)]:grid-cols-[168px_1fr] [@container(min-width:520px)]:gap-6"
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

/** Tableau « ce que ce n'est pas / ce que c'est » en cartes de contraste. */
function BlocContraste({
  entetes,
  lignes,
  accentPage,
}: {
  entetes: [string, string];
  lignes: [string, string][];
  accentPage: string;
}) {
  return (
    <div>
      <div className="mb-3 hidden grid-cols-[minmax(0,1fr)_28px_minmax(0,1.15fr)] gap-4 px-5 font-mono text-[10px] uppercase tracking-[0.13em] sm:grid">
        <span className="text-muted">{entetes[0]}</span>
        <span />
        <span style={{ color: accentPage }}>{entetes[1]}</span>
      </div>
      <ul className="grid gap-3">
        {lignes.map(([non, oui]) => (
          <li
            key={non}
            className="grid items-center gap-3 rounded-[14px] border border-rule bg-surface px-5 py-4 transition-shadow duration-300 hover:shadow-[0_14px_36px_-22px_rgba(20,32,54,0.35)] sm:grid-cols-[minmax(0,1fr)_28px_minmax(0,1.15fr)] sm:gap-4"
          >
            <p className="flex items-start gap-3 text-[14.5px] leading-snug text-muted">
              <span
                aria-hidden="true"
                className="mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rule-2 text-[11px] text-muted"
              >
                ✕
              </span>
              <RichText>{non}</RichText>
            </p>
            <span aria-hidden="true" className="hidden text-center text-[18px] sm:block" style={{ color: accentPage }}>
              →
            </span>
            <p className="flex items-start gap-3 text-[15px] leading-snug text-ink">
              <span
                aria-hidden="true"
                className="mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] text-white"
                style={{ backgroundColor: accentPage }}
              >
                ✓
              </span>
              <RichText>{oui}</RichText>
            </p>
          </li>
        ))}
      </ul>
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
              <td className="w-1/2 py-4 pr-6 text-[15px] leading-relaxed text-muted">
                <RichText>{gauche}</RichText>
              </td>
              <td className="w-1/2 py-4 pr-6 text-[15px] leading-relaxed text-ink">
                <RichText>{droite}</RichText>
              </td>
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

/** Grille tarifaire d'une offre — les prix ne sont écrits qu'une fois, dans tarifs.ts. */
function BlocTarifs({ cle, accentPage }: { cle: "dirigeant" | "entreprise" | "finance"; accentPage: string }) {
  const offre = lireOffre(cle);
  return (
    <div className="my-9 overflow-hidden rounded-carte border border-rule bg-surface">
      <ul className="divide-y divide-rule-2">
        {offre.lignes.map((ligne) => (
          <li key={ligne.prestation} className="grid gap-2 px-6 py-5 sm:grid-cols-[1fr_auto] sm:gap-8 sm:px-8">
            <div>
              <p className="font-serif text-[18px] text-ink">{ligne.prestation}</p>
              <p className="mt-1.5 max-w-prose text-[14.5px] leading-relaxed text-muted">{ligne.detail}</p>
            </div>
            <p className="font-serif text-[19px] sm:text-right" style={{ color: accentPage }}>
              {ligne.prix}
            </p>
          </li>
        ))}
      </ul>
      <p className="border-t border-rule-2 bg-ground px-6 py-3.5 text-[13.5px] text-muted sm:px-8">
        Premier échange de 30 minutes gratuit. Toutes les offres sur la page{" "}
        <Link href="/tarifs/" className="text-teal underline decoration-1 underline-offset-[3px]">
          tarifs
        </Link>
        .
      </p>
    </div>
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

export function RendreBloc({ bloc, accentPage }: { bloc: Bloc; accentPage: string }) {
  switch (bloc.type) {
    case "p":
      return (
        <p className="mt-5 max-w-prose text-[17px] leading-[1.72] first:mt-0">
          <RichText>{bloc.texte}</RichText>
        </p>
      );

    case "h3":
      return (
        <h3 className="mb-1 mt-10 max-w-prose font-serif text-[23px] font-normal leading-snug text-ink">
          {bloc.texte}
        </h3>
      );

    case "liste":
      if (bloc.style === "cartes") {
        return (
          <ul className={`mt-8 grid gap-4 sm:grid-cols-2 ${bloc.colonnes === 3 ? "lg:grid-cols-3" : ""}`}>
            {bloc.items.map((item, i) => {
              // « **Titre.** texte » : le titre en serif, le texte en corps courant.
              const titre = item.match(/^\*\*(.+?)\*\*\s*([\s\S]*)$/);
              return (
              <li
                key={item}
                className={`group relative overflow-hidden rounded-[14px] border border-rule bg-surface transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-24px_rgba(20,32,54,0.4)] ${
                  bloc.colonnes === 3 ? "p-7 pt-8" : "p-6 [&:last-child:nth-child(odd)]:sm:col-span-2"
                }`}
                style={
                  bloc.colonnes === 3
                    ? { backgroundImage: `linear-gradient(180deg, ${accentPage}0a 0%, transparent 45%)` }
                    : undefined
                }
              >
                {bloc.colonnes === 3 ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-[3px]"
                      style={{ backgroundColor: accentPage }}
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-6 top-5 font-serif text-[56px] leading-none transition-opacity duration-300 group-hover:opacity-30"
                      style={{ color: accentPage, opacity: 0.14 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="relative font-mono text-[10.5px] uppercase tracking-[0.14em]"
                      style={{ color: accentPage }}
                    >
                      Effet {i + 1}
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-[3px]"
                      style={{ backgroundColor: accentPage }}
                    />
                    <span
                      className="font-mono text-[11px] tracking-[0.14em]"
                      style={{ color: accentPage }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </>
                )}
                {titre ? (
                  <>
                    <p
                      className={`relative mt-2.5 font-serif leading-snug text-ink ${
                        bloc.colonnes === 3 ? "text-[22px]" : "text-[20px]"
                      }`}
                    >
                      {titre[1].replace(/\.$/, "")}
                    </p>
                    <p className="relative mt-3 text-[15px] leading-relaxed">
                      <RichText>{titre[2]}</RichText>
                    </p>
                  </>
                ) : (
                  <p className="mt-2.5 font-serif text-[18.5px] leading-snug text-ink">
                    <RichText>{item}</RichText>
                  </p>
                )}
              </li>
              );
            })}
          </ul>
        );
      }
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
      if (bloc.style === "contraste") {
        return <BlocContraste entetes={bloc.entetes} lignes={bloc.lignes} accentPage={accentPage} />;
      }
      return <BlocTableau entetes={bloc.entetes} lignes={bloc.lignes} />;

    case "comparatif":
      return <BlocComparatif />;

    case "expertises":
      return <BlocExpertises />;

    case "tarifs":
      return <BlocTarifs cle={bloc.offre} accentPage={accentPage} />;

    case "encadre":
      return <BlocEncadre titre={bloc.titre} texte={bloc.texte} aFournir={bloc.aFournir} />;
  }
}

/* ─────────── Chapitre ─────────── */

/** Frise horizontale des étapes d'un parcours : « **Titre.** texte » par item. */
function Frise({ items, accentPage }: { items: string[]; accentPage: string }) {
  return (
    // Autant de colonnes que d'étapes en grand écran : jamais d'étape orpheline.
    <ol
      className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:[grid-template-columns:var(--colonnes)]"
      style={{ "--colonnes": `repeat(${items.length}, minmax(0, 1fr))` } as React.CSSProperties}
    >
      {items.map((item, i) => {
        const morceaux = item.match(/^\*\*(.+?)\*\*\s*([\s\S]*)$/);
        const titre = morceaux ? morceaux[1].replace(/\.$/, "") : item;
        const texte = morceaux ? morceaux[2] : "";
        return (
          <li key={item} className="relative">
            {/* Ligne vers l'étape suivante, sur grand écran. */}
            {i < items.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-12 right-[-1.5rem] top-[22px] hidden h-px lg:block"
                style={{ backgroundColor: accentPage, opacity: 0.35 }}
              />
            )}
            <span
              className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 bg-surface font-serif text-[18px]"
              style={{ borderColor: accentPage, color: accentPage }}
            >
              {i + 1}
            </span>
            <p className="mt-5 font-serif text-[19px] leading-snug text-ink">{titre}</p>
            {texte && (
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                <RichText>{texte}</RichText>
              </p>
            )}
          </li>
        );
      })}
    </ol>
  );
}

function RendreChapitre({
  chapitre,
  accentPage,
  large = false,
}: {
  chapitre: Chapitre;
  accentPage: string;
  large?: boolean;
}) {
  if (chapitre.frise) {
    const liste = chapitre.blocs.find((bloc) => bloc.type === "liste");
    const tarifs = chapitre.blocs.filter((bloc) => bloc.type === "tarifs");
    const reste = chapitre.blocs.filter((bloc) => bloc !== liste && bloc.type !== "tarifs");
    return (
      <>
        {chapitre.label && <Label style={{ color: accentPage }}>{chapitre.label}</Label>}
        <h2 className="mt-4 max-w-[30ch] text-[clamp(28px,3.4vw,46px)] leading-[1.12]">
          {chapitre.titre}
        </h2>
        {liste && liste.type === "liste" && <Frise items={liste.items} accentPage={accentPage} />}
        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-rule pt-14 lg:grid-cols-2 lg:gap-20">
          <div className="[&>*:first-child]:mt-0">
            {reste.map((bloc, index) => (
              <RendreBloc key={index} bloc={bloc} accentPage={accentPage} />
            ))}
          </div>
          <div className="[&>*:first-child]:mt-0">
            {tarifs.map((bloc, index) => (
              <RendreBloc key={index} bloc={bloc} accentPage={accentPage} />
            ))}
          </div>
        </div>
      </>
    );
  }

  if (chapitre.cartesADroite) {
    const estCartes = (bloc: Bloc) =>
      (bloc.type === "liste" && bloc.style === "cartes") ||
      (bloc.type === "tableau" && bloc.style === "contraste") ||
      bloc.type === "comparatif";
    return (
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20">
        {/* Le texte d'abord, à gauche sur grand écran et au-dessus sur mobile. */}
        <div className="order-2 [&>ul]:mt-0">
          {chapitre.blocs.filter(estCartes).map((bloc, index) => (
            <RendreBloc key={index} bloc={bloc} accentPage={accentPage} />
          ))}
        </div>
        <div className="order-1">
          {chapitre.label && <Label style={{ color: accentPage }}>{chapitre.label}</Label>}
          <h2 className="mb-7 mt-4 max-w-[26ch] text-[clamp(25px,3.2vw,35px)] leading-[1.16]">
            {chapitre.titre}
          </h2>
          {chapitre.blocs
            .filter((bloc) => !estCartes(bloc))
            .map((bloc, index) => (
              <RendreBloc key={index} bloc={bloc} accentPage={accentPage} />
            ))}
        </div>
      </div>
    );
  }

  if (chapitre.exergue) {
    const [premier, ...suite] = chapitre.blocs;
    return (
      <>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20">
          <div>
            {chapitre.label && <Label style={{ color: accentPage }}>{chapitre.label}</Label>}
            <h2 className="mt-4 max-w-[18ch] text-[clamp(28px,3.6vw,42px)] leading-[1.12]">
              {chapitre.titre}
            </h2>
            {premier && (
              <div className="mt-7">
                <RendreBloc bloc={premier} accentPage={accentPage} />
              </div>
            )}
          </div>
          <div>
            <blockquote
              className="relative overflow-hidden rounded-[18px] px-8 pb-8 pt-14 sm:px-10"
              style={{ backgroundColor: `${accentPage}12` }}
            >
              <span
                aria-hidden="true"
                className="absolute left-7 top-1 font-serif text-[96px] leading-none sm:left-9"
                style={{ color: accentPage, opacity: 0.35 }}
              >
                &ldquo;
              </span>
              <p className="font-serif text-[clamp(23px,2.5vw,30px)] font-light leading-[1.32] text-ink">
                {chapitre.exergue}
              </p>
            </blockquote>
          </div>
        </div>
        {suite.map((bloc, index) => (
          <RendreBloc key={index} bloc={bloc} accentPage={accentPage} />
        ))}
      </>
    );
  }

  // En pleine largeur, un chapitre de texte seul laisserait un vide à droite :
  // le titre prend la colonne de gauche, le contenu garde sa largeur de lecture à droite.
  if (large) {
    // Un chapitre d'étape met sa fiche sous le titre, à gauche : la colonne de
    // gauche est remplie et le texte courant garde toute la droite.
    const aGauche = chapitre.blocs.filter((bloc) => bloc.type === "etape");
    const aDroite = chapitre.blocs.filter((bloc) => bloc.type !== "etape");

    if (chapitre.ficheADroite && aGauche.length) {
      return (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            {chapitre.label && <Label style={{ color: accentPage }}>{chapitre.label}</Label>}
            <h2 className="mb-7 mt-4 text-[clamp(28px,3.4vw,46px)] leading-[1.12]">{chapitre.titre}</h2>
            {aDroite.map((bloc, index) => (
              <RendreBloc key={index} bloc={bloc} accentPage={accentPage} />
            ))}
          </div>
          <div className="lg:sticky lg:top-24 lg:self-start [&>*:first-child]:mt-0">
            {aGauche.map((bloc, index) => (
              <RendreBloc key={index} bloc={bloc} accentPage={accentPage} />
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,44rem)] lg:gap-20">
        <div className={aGauche.length ? "" : "lg:sticky lg:top-24 lg:self-start"}>
          {chapitre.label && <Label style={{ color: accentPage }}>{chapitre.label}</Label>}
          <h2 className="mt-4 text-[clamp(28px,3.4vw,46px)] leading-[1.12]">{chapitre.titre}</h2>
          {aGauche.map((bloc, index) => (
            <RendreBloc key={index} bloc={bloc} accentPage={accentPage} />
          ))}
        </div>
        <div className="[&>*:first-child]:mt-0 lg:pt-2">
          {aDroite.map((bloc, index) => (
            <RendreBloc key={index} bloc={bloc} accentPage={accentPage} />
          ))}
        </div>
      </div>
    );
  }

  // Chapitre centré avec une fiche d'étape : texte à gauche, fiche à droite
  // (collante), en miroir des chapitres larges où la fiche est à gauche.
  const etapesCentre = chapitre.blocs.filter((bloc) => bloc.type === "etape");
  if (etapesCentre.length) {
    return (
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
        <div>
          {chapitre.label && <Label style={{ color: accentPage }}>{chapitre.label}</Label>}
          <h2 className="mb-7 mt-4 max-w-[26ch] text-[clamp(25px,3.2vw,35px)] leading-[1.16]">
            {chapitre.titre}
          </h2>
          {chapitre.blocs
            .filter((bloc) => bloc.type !== "etape")
            .map((bloc, index) => (
              <RendreBloc key={index} bloc={bloc} accentPage={accentPage} />
            ))}
        </div>
        <div className="lg:sticky lg:top-24 lg:self-start [&>*:first-child]:mt-0">
          {etapesCentre.map((bloc, index) => (
            <RendreBloc key={index} bloc={bloc} accentPage={accentPage} />
          ))}
        </div>
      </div>
    );
  }

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
        // Alternance de largeur, dans la suite de l'en-tête (large) et de
        // « L'essentiel » (centré) : chapitres pairs en pleine largeur, impairs centrés.
        <Section
          key={chapitre.titre}
          ton={index % 2 === 0 ? "ground" : "surface"}
          large={chapitre.large ?? index % 2 === 0}
        >
          <RendreChapitre
            chapitre={chapitre}
            accentPage={accentPage}
            large={chapitre.large ?? index % 2 === 0}
          />
        </Section>
      ))}
    </>
  );
}
