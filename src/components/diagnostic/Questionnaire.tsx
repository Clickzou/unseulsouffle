"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { ACCENTS, equipe, piliers } from "@/lib/content/home";
import { niveau, PILIERS_DIAGNOSTIC, PROFIL, REPONSES } from "@/lib/content/questionnaire";

/**
 * Questionnaire du diagnostic : une question par écran, résultat immédiat.
 *
 * Tout se passe dans le navigateur : aucune réponse n'est envoyée ni stockée
 * côté serveur. C'est ce qui permet à la page de dire « vos réponses restent
 * chez vous » sans réserve.
 */

type Question = { pilier: number; index: number; texte: string };

const QUESTIONS: Question[] = PILIERS_DIAGNOSTIC.flatMap((p, pilier) =>
  p.affirmations.map((texte, index) => ({ pilier, index, texte })),
);

const NON_CONCERNE = -1;

/** Référents d'un pilier, depuis home.ts (même accent). */
function referents(accent: string) {
  const pilier = piliers.find((p) => p.accent === accent);
  return (pilier?.referents ?? [])
    .map((slug) => equipe.find((m) => m.slug === slug))
    .filter((m): m is (typeof equipe)[number] => Boolean(m));
}

export function Questionnaire() {
  // étape -1 : profil ; 0..19 : questions ; 20 : résultat
  const [etape, setEtape] = useState(-1);
  const [profil, setProfil] = useState<string | null>(null);
  const [reponses, setReponses] = useState<number[]>(Array(QUESTIONS.length).fill(-2));

  const total = QUESTIONS.length;
  const fini = etape >= total;
  const question = etape >= 0 && !fini ? QUESTIONS[etape] : null;
  const pilierCourant = question ? PILIERS_DIAGNOSTIC[question.pilier] : null;
  const teinte = pilierCourant ? ACCENTS[pilierCourant.accent] : ACCENTS.finance;
  const progression = Math.round(((etape + 1) / (total + 1)) * 100);

  // Remonte en haut du questionnaire à chaque écran (utile sur mobile).
  useEffect(() => {
    document.getElementById("questionnaire")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [etape]);

  function repondre(valeur: number) {
    setReponses((r) => r.map((v, i) => (i === etape ? valeur : v)));
    // Petit délai pour laisser voir la sélection.
    window.setTimeout(() => setEtape((e) => e + 1), 220);
  }

  const scores = useMemo(
    () =>
      PILIERS_DIAGNOSTIC.map((p, i) => {
        const notes = reponses
          .filter((_, q) => QUESTIONS[q].pilier === i)
          .filter((v) => v >= 0);
        if (notes.length === 0) return null; // pilier non concerné
        return Math.round((notes.reduce((a, b) => a + b, 0) / (notes.length * 3)) * 100);
      }),
    [reponses],
  );

  function recommencer() {
    setReponses(Array(QUESTIONS.length).fill(-2));
    setProfil(null);
    setEtape(-1);
  }

  /* ─────────── Résultat ─────────── */
  // Ordre de lecture : 1. le verdict, 2. les trois étapes à suivre, 3. le détail.
  if (fini) {
    const classes = scores
      .map((score, i) => ({ score, i }))
      .filter((x): x is { score: number; i: number } => x.score !== null)
      .sort((a, b) => a.score - b.score);
    const prioritaire = classes[0];
    const second = classes[1] && classes[1].score < 45 ? classes[1] : null;
    const p = PILIERS_DIAGNOSTIC[prioritaire.i];
    const tP = ACCENTS[p.accent];
    const refs = referents(p.accent);
    const blocages = QUESTIONS.map((q, i) => ({ q, v: reponses[i] }))
      .filter(({ q, v }) => q.pilier === prioritaire.i && v >= 0 && v <= 1)
      .map(({ q }) => q.texte);
    const demande = `${p.demande}\n\n(Diagnostic en ligne : ${p.nom} ${prioritaire.score}/100${
      profil ? `, entreprise de ${profil} salariés` : ""
    }.)`;
    const lienContact = `/contact/?message=${encodeURIComponent(demande)}`;
    const nPrio = niveau(prioritaire.score);

    return (
      <div className="grid gap-10">
        {/* 1. Le verdict */}
        <section
          className="relative overflow-hidden rounded-[26px] border border-rule px-7 py-10 sm:px-12 sm:py-14"
          style={{ backgroundImage: `linear-gradient(135deg, ${tP.vif}2e 0%, ${tP.vif}0a 70%)` }}
        >
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[5px]" style={{ backgroundColor: tP.vif }} />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: tP.texte }}>
                Résultat de votre diagnostic{profil ? ` · entreprise de ${profil} salariés` : ""}
              </p>
              <h2 className="mt-4 font-serif text-[clamp(32px,4vw,52px)] leading-[1.08] text-ink">
                {p.recommandation.titre}
              </h2>
              <p className="mt-5 max-w-prose text-[17px] leading-relaxed text-body">{p.recommandation.texte}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={lienContact}
                  className="inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: tP.texte }}
                >
                  En parler 30 minutes, gratuitement →
                </Link>
                <Link
                  href={p.recommandation.href}
                  className="inline-flex h-12 items-center rounded-full border border-rule bg-surface px-6 text-[15px] text-ink transition-colors hover:border-teal hover:text-teal"
                >
                  {p.recommandation.ancre}
                </Link>
              </div>
            </div>

            {/* Jauge du pilier prioritaire + référent */}
            <div className="rounded-[20px] bg-surface/80 p-7 text-center shadow-[0_24px_60px_-40px_rgba(20,32,54,0.5)]">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">{p.nom}</p>
              <div className="relative mx-auto mt-5 h-36 w-36">
                <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="#ece8df" strokeWidth="10" />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke={tP.vif}
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${(prioritaire.score / 100) * 326.7} 326.7`}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-serif text-[40px] leading-none text-ink">{prioritaire.score}</span>
                  <span className="mt-1 text-[12px] text-muted">sur 100</span>
                </div>
              </div>
              <p className="mt-4 text-[14.5px] text-ink">
                Niveau : <span style={{ color: tP.texte }}>{nPrio.libelle.toLowerCase()}</span>
              </p>
              {refs.length > 0 && (
                <p className="mt-3 border-t border-rule-2 pt-3 text-[14px] text-muted">
                  {refs.length > 1 ? "Vos référents : " : "Votre référent : "}
                  <span className="text-ink">{refs.map((r) => r.nom).join(" et ")}</span>
                </p>
              )}
            </div>
          </div>
        </section>

        {/* 2. Les trois étapes */}
        <FeuilleDeRoute
          teinte={tP}
          blocages={blocages}
          actions={p.actions}
          demande={p.demande}
          lienContact={lienContact}
        />

        {/* 3. Le détail des scores */}
        <section className="rounded-[22px] border border-rule bg-surface p-7 sm:p-9">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">Le détail</p>
              <h3 className="mt-2 font-serif text-[24px] text-ink">Vos cinq piliers</h3>
            </div>
            <button
              type="button"
              onClick={recommencer}
              className="font-mono text-[12px] text-muted underline decoration-rule underline-offset-4 hover:text-teal"
            >
              Refaire le diagnostic
            </button>
          </div>
          <ul className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PILIERS_DIAGNOSTIC.map((pilier, i) => {
              const score = scores[i];
              const t = ACCENTS[pilier.accent];
              const estPrio = i === prioritaire.i;
              return (
                <li
                  key={pilier.nom}
                  className="rounded-[14px] border p-4"
                  style={{ borderColor: estPrio ? t.vif : "#e2ded4", backgroundColor: estPrio ? `${t.vif}14` : undefined }}
                >
                  <p className="text-[14px] leading-snug text-ink">{pilier.nom}</p>
                  {score === null ? (
                    <p className="mt-3 text-[13px] text-muted">Non concerné</p>
                  ) : (
                    <>
                      <p className="mt-2 font-serif text-[26px] leading-none text-ink">
                        {score}
                        <span className="text-[13px] text-muted"> /100</span>
                      </p>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-rule-2">
                        <div className="h-full rounded-full" style={{ width: `${Math.max(score, 4)}%`, backgroundColor: t.vif }} />
                      </div>
                      <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted">
                        {niveau(score).libelle}
                      </p>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
          {second && (
            <p className="mt-6 text-[14.5px] leading-relaxed">
              À regarder aussi : <span className="text-ink">{PILIERS_DIAGNOSTIC[second.i].nom}</span> ({second.score}/100).
              Votre référent appellera cette expertise si le sujet l&apos;exige.
            </p>
          )}
          <p className="mt-6 border-t border-rule-2 pt-5 text-[13.5px] leading-relaxed text-muted">
            Ce diagnostic est une auto-évaluation : une première lecture, pas un audit. Vos réponses
            n&apos;ont pas quitté votre navigateur — elles ne sont ni enregistrées ni transmises.
          </p>
        </section>
      </div>
    );
  }

  /* ─────────── Profil ─────────── */
  if (etape === -1) {
    return (
      <Carte progression={2} teinte={ACCENTS.finance} surtitre="Avant de commencer" onRetour={null}>
        <h2 className="font-serif text-[clamp(24px,2.6vw,34px)] leading-snug text-ink">{PROFIL.question}</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {PROFIL.options.map((option) => (
            <ChoixBouton
              key={option}
              actif={profil === option}
              couleur={ACCENTS.finance.vif}
              onClick={() => {
                setProfil(option);
                window.setTimeout(() => setEtape(0), 220);
              }}
            >
              {option}
            </ChoixBouton>
          ))}
        </div>
      </Carte>
    );
  }

  /* ─────────── Question ─────────── */
  const q = question!;
  const p = pilierCourant!;
  return (
    <Carte
      progression={progression}
      teinte={teinte}
      surtitre={`${p.nom} · question ${etape + 1} sur ${total}`}
      onRetour={() => setEtape((e) => e - 1)}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.13em] text-muted">
        Dans quelle mesure êtes-vous d&apos;accord ?
      </p>
      <h2 className="mt-4 font-serif text-[clamp(24px,2.6vw,34px)] leading-snug text-ink">{q.texte}</h2>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {REPONSES.map((r) => (
          <ChoixBouton
            key={r.valeur}
            actif={reponses[etape] === r.valeur}
            couleur={teinte.vif}
            onClick={() => repondre(r.valeur)}
          >
            {r.libelle}
          </ChoixBouton>
        ))}
      </div>
      {p.nonConcerneAutorise && (
        <button
          type="button"
          onClick={() => repondre(NON_CONCERNE)}
          className="mt-4 font-mono text-[12px] text-muted underline decoration-rule underline-offset-4 hover:text-teal"
        >
          Non concerné (pas d&apos;activité de production)
        </button>
      )}
    </Carte>
  );
}

/* ─────────── Morceaux ─────────── */

function FeuilleDeRoute({
  teinte,
  blocages,
  actions,
  demande,
  lienContact,
}: {
  teinte: { texte: string; vif: string };
  blocages: string[];
  actions: string[];
  demande: string;
  lienContact: string;
}) {
  const [copie, setCopie] = useState(false);

  async function copier() {
    try {
      await navigator.clipboard.writeText(demande);
      setCopie(true);
      window.setTimeout(() => setCopie(false), 2500);
    } catch {
      /* presse-papiers indisponible : le texte reste lisible à l'écran */
    }
  }

  const Colonne = ({
    n,
    titre,
    children,
  }: {
    n: number;
    titre: string;
    children: React.ReactNode;
  }) => (
    <div className="relative flex flex-col rounded-[20px] border border-rule bg-surface p-7">
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[4px] rounded-t-[20px]" style={{ backgroundColor: teinte.vif }} />
      <div className="flex items-center gap-3">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full font-serif text-[16px] text-white"
          style={{ backgroundColor: teinte.texte }}
        >
          {n}
        </span>
        <h3 className="font-serif text-[22px] font-normal text-ink">{titre}</h3>
      </div>
      <div className="mt-5 flex flex-1 flex-col">{children}</div>
    </div>
  );

  return (
    <section aria-label="Votre feuille de route">
      <h3 className="mb-6 font-serif text-[clamp(24px,2.6vw,32px)] text-ink">Vos trois prochaines étapes</h3>
      <div className="grid gap-6 lg:grid-cols-3">
        <Colonne n={1} titre="Ce qui bloque">
          {blocages.length > 0 ? (
            <ul className="grid gap-3">
              {blocages.map((b) => (
                <li key={b} className="flex gap-3 text-[15px] leading-relaxed">
                  <span aria-hidden="true" className="mt-[3px] text-[13px]" style={{ color: teinte.texte }}>
                    ✕
                  </span>
                  <span>
                    Vous avez répondu « non » à : <span className="text-ink">{b}</span>
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[15px] leading-relaxed">
              Aucun point franchement négatif, mais c&apos;est le pilier le moins solide de votre
              entreprise : c&apos;est là que le prochain effort rapportera le plus.
            </p>
          )}
        </Colonne>

        <Colonne n={2} titre="À faire dès maintenant">
          <ol className="grid gap-3">
            {actions.map((a, i) => (
              <li key={a} className="flex gap-3 text-[15px] leading-relaxed">
                <span className="font-mono text-[12px]" style={{ color: teinte.texte }}>
                  {i + 1}.
                </span>
                <span>{a}</span>
              </li>
            ))}
          </ol>
        </Colonne>

        <Colonne n={3} titre="À nous demander">
          <blockquote
            className="rounded-[14px] px-5 py-4 font-serif text-[16.5px] italic leading-relaxed text-ink"
            style={{ backgroundColor: `${teinte.vif}17` }}
          >
            « {demande} »
          </blockquote>
          <div aria-hidden="true" className="flex-1" />
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={lienContact}
              className="inline-flex h-11 items-center rounded-full px-5 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: teinte.texte }}
            >
              Envoyer cette demande →
            </Link>
            <button
              type="button"
              onClick={copier}
              className="inline-flex h-11 items-center rounded-full border border-rule px-5 text-[14px] text-ink transition-colors hover:border-teal hover:text-teal"
            >
              {copie ? "Copié ✓" : "Copier ma demande"}
            </button>
          </div>
        </Colonne>
      </div>
    </section>
  );
}

function Carte({
  progression,
  teinte,
  surtitre,
  onRetour,
  children,
}: {
  progression: number;
  teinte: { texte: string; vif: string };
  surtitre: string;
  onRetour: (() => void) | null;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[48rem] overflow-hidden rounded-[24px] border border-rule bg-surface shadow-[0_30px_70px_-45px_rgba(20,32,54,0.55)]">
      <div className="h-1.5 bg-rule-2">
        <div
          className="h-full rounded-r-full transition-[width] duration-500 ease-out"
          style={{ width: `${progression}%`, backgroundColor: teinte.vif }}
        />
      </div>
      <div className="p-7 sm:p-11">
        <div className="mb-7 flex items-center justify-between gap-4">
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.13em]" style={{ color: teinte.texte }}>
            <span aria-hidden="true" className="h-2 w-2 rounded-full" style={{ backgroundColor: teinte.vif }} />
            {surtitre}
          </span>
          {onRetour && (
            <button
              type="button"
              onClick={onRetour}
              className="font-mono text-[12px] text-muted transition-colors hover:text-teal"
            >
              ← Retour
            </button>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

function ChoixBouton({
  actif,
  couleur,
  onClick,
  children,
}: {
  actif: boolean;
  couleur: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={actif}
      className="group flex items-center gap-4 rounded-[14px] border-2 bg-ground px-5 py-4 text-left text-[16px] text-ink transition-[border-color,transform,background-color] duration-200 hover:-translate-y-0.5"
      style={{ borderColor: actif ? couleur : "transparent", backgroundColor: actif ? `${couleur}1f` : undefined }}
    >
      <span
        aria-hidden="true"
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors"
        style={{ borderColor: couleur, backgroundColor: actif ? couleur : "transparent" }}
      />
      {children}
    </button>
  );
}
