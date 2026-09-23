"use client";

import { useState } from "react";

/**
 * Formulaire de contact, envoyé par /api/contact/ (Resend).
 * Le message peut être prérempli par le questionnaire de diagnostic.
 */
export function FormulaireContact({ messageInitial }: { messageInitial?: string }) {
  const [etat, setEtat] = useState<"attente" | "envoi" | "envoye" | "erreur">("attente");
  const [erreur, setErreur] = useState("");

  async function envoyer(evenement: React.FormEvent<HTMLFormElement>) {
    evenement.preventDefault();
    setEtat("envoi");
    setErreur("");
    const donnees = Object.fromEntries(new FormData(evenement.currentTarget).entries());
    try {
      const reponse = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donnees),
      });
      const resultat = await reponse.json().catch(() => ({ ok: false }));
      if (reponse.ok && resultat.ok) {
        setEtat("envoye");
      } else {
        setErreur(resultat.erreur ?? "L'envoi a échoué. Écrivez-nous à contact@unseulsouffle.fr.");
        setEtat("erreur");
      }
    } catch {
      setErreur("Connexion impossible. Écrivez-nous à contact@unseulsouffle.fr.");
      setEtat("erreur");
    }
  }

  if (etat === "envoye") {
    return (
      <div className="rounded-[18px] border border-teal/30 bg-teal/5 p-8">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-teal">Demande envoyée</p>
        <p className="mt-3 font-serif text-[26px] leading-tight text-ink">Merci, votre message est bien parti.</p>
        <p className="mt-3 max-w-prose text-[16px] leading-relaxed">
          Marjorie ou Muriel vous répond pour convenir du premier échange de 30 minutes.
        </p>
      </div>
    );
  }

  const classes =
    "mt-2 w-full rounded-bouton border border-rule bg-surface px-4 py-3 text-[15.5px] text-ink " +
    "outline-none transition-colors placeholder:text-muted focus:border-teal";

  const Champ = ({
    id,
    label,
    type = "text",
    requis = false,
    autoComplete,
  }: {
    id: string;
    label: string;
    type?: string;
    requis?: boolean;
    autoComplete?: string;
  }) => (
    <p>
      <label htmlFor={id} className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted">
        {label}
        {requis && <span className="text-amber"> *</span>}
      </label>
      <input id={id} name={id} type={type} required={requis} autoComplete={autoComplete} className={classes} />
    </p>
  );

  return (
    <form onSubmit={envoyer} className="grid gap-5 sm:grid-cols-2">
      <Champ id="nom" label="Nom et prénom" requis autoComplete="name" />
      <Champ id="entreprise" label="Entreprise" autoComplete="organization" />
      <Champ id="email" label="Email" type="email" requis autoComplete="email" />
      <Champ id="telephone" label="Téléphone" type="tel" autoComplete="tel" />
      <p className="sm:col-span-2">
        <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted">
          Votre situation en quelques lignes<span className="text-amber"> *</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={messageInitial ? 8 : 5}
          required
          defaultValue={messageInitial}
          className={classes}
        />
      </p>

      {/* Champ piège anti-robots : invisible pour les visiteurs. */}
      <p aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="site">Site web</label>
        <input id="site" name="site" type="text" tabIndex={-1} autoComplete="off" />
      </p>

      <div className="sm:col-span-2">
        {etat === "erreur" && (
          <p role="alert" className="mb-4 rounded-carte border-l-2 border-[#b3341c] bg-[#fde8e4] px-4 py-3 text-[14.5px] text-[#8a2615]">
            {erreur}
          </p>
        )}
        <button
          type="submit"
          disabled={etat === "envoi"}
          className="group inline-flex items-center gap-2 rounded-bouton border border-teal bg-teal px-5 py-3 text-[14.5px] font-medium text-ground transition-colors hover:border-teal-dark hover:bg-teal-dark disabled:opacity-60"
        >
          {etat === "envoi" ? "Envoi en cours…" : "Demander un entretien"}
          {etat !== "envoi" && <span className="transition-transform group-hover:translate-x-[3px]">→</span>}
        </button>
      </div>
    </form>
  );
}
