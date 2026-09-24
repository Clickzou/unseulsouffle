import type { Metadata } from "next";
import Link from "next/link";

import { EnTetePage } from "@/components/ui/EnTetePage";
import { Section } from "@/components/ui/Section";
import { Footer } from "@/components/Footer";
import { LienGestionCookies } from "@/components/cookies/LienGestionCookies";
import { NON_INDEXABLE } from "@/lib/seo/indexation";

/**
 * Politique cookies — la liste de ce que le site dépose réellement.
 *
 * Elle doit rester alignée sur le code : lib/consentement.ts (cookie de choix),
 * components/cookies/MesureAudience.tsx (Google Analytics) et AideContact.tsx
 * (stockage local). Tout nouvel outil qui dépose un traceur s'ajoute ici.
 */
export const metadata: Metadata = {
  title: "Politique cookies",
  description: "Cookies déposés sur le site unseulsouffle.fr et gestion de votre consentement.",
  alternates: { canonical: "/cookies/" },
  robots: NON_INDEXABLE,
};

function Bloc({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-rule-2 py-7 last:border-b-0">
      <h2 className="font-mono text-[10px] uppercase tracking-[0.13em] text-teal">{titre}</h2>
      <div className="mt-3.5 max-w-prose text-[16px] leading-[1.75] [&_a]:text-teal [&_a:hover]:underline">
        {children}
      </div>
    </section>
  );
}

const TRACEURS: { nom: string; type: string; finalite: string; duree: string; accord: boolean }[] = [
  {
    nom: "uss_consentement",
    type: "Cookie — Un Seul Souffle",
    finalite: "Mémoriser votre choix sur les cookies",
    duree: "6 mois",
    accord: false,
  },
  {
    nom: "uss-aide-fermee",
    type: "Stockage local — Un Seul Souffle",
    finalite: "Ne plus afficher le panneau d'aide au contact une fois fermé",
    duree: "Jusqu'à effacement par vous",
    accord: false,
  },
  {
    nom: "_ga",
    type: "Cookie — Google Analytics",
    finalite: "Distinguer les visiteurs pour les statistiques de fréquentation",
    duree: "13 mois",
    accord: true,
  },
  {
    nom: "_ga_<identifiant>",
    type: "Cookie — Google Analytics",
    finalite: "Conserver l'état de la session de visite",
    duree: "13 mois",
    accord: true,
  },
];

export default function CookiesPage() {
  return (
    <>
      <main>
        <EnTetePage
          fil="Cookies"
          label="Données personnelles"
          accent="organisation"
          h1="Politique cookies"
          lede="Ce que le site dépose dans votre navigateur, pourquoi, pour combien de temps — et comment changer d'avis à tout moment."
        />

        <Section ton="surface">
          <div className="max-w-[70ch]">
            <Bloc titre="Votre choix">
              <p>
                À votre première visite, un bandeau vous propose d&apos;accepter ou de refuser
                les cookies de mesure d&apos;audience. Refuser est aussi simple qu&apos;accepter,
                et ne change rien à votre accès au site. Votre choix est conservé 6 mois, puis
                vous est redemandé.
              </p>
              <LienGestionCookies className="mt-5 inline-flex items-center rounded-bouton bg-teal px-4 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-teal-dark">
                Modifier mes choix
              </LienGestionCookies>
            </Bloc>

            <Bloc titre="Ce que le site dépose">
              <ul className="mt-2 grid gap-3">
                {TRACEURS.map((t) => (
                  <li key={t.nom} className="rounded-[12px] border border-rule-2 bg-ground px-4 py-3.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <code className="font-mono text-[13px] text-ink">{t.nom}</code>
                      <span
                        className={`font-mono text-[10.5px] uppercase tracking-[0.1em] ${
                          t.accord ? "text-amber" : "text-teal"
                        }`}
                      >
                        {t.accord ? "Soumis à votre accord" : "Nécessaire"}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-body">{t.finalite}</p>
                    <p className="mt-1 text-[13px] text-muted">
                      {t.type} · {t.duree}
                    </p>
                  </li>
                ))}
              </ul>
            </Bloc>

            <Bloc titre="Mesure d'audience">
              <p>
                Le site utilise Google Analytics 4 (Google Ireland Ltd) pour mesurer sa
                fréquentation : pages consultées, durée de visite, provenance. Les adresses IP
                sont anonymisées. Le script n&apos;est chargé qu&apos;après votre accord ; sans
                accord, aucune donnée n&apos;est envoyée à Google.
              </p>
              <p className="mt-3">
                Google peut traiter ces données aux États-Unis. Ce transfert est encadré par le
                cadre de protection des données UE–États-Unis (Data Privacy Framework), auquel
                Google adhère.
              </p>
            </Bloc>

            <Bloc titre="Search Console">
              <p>
                Le site est déclaré dans Google Search Console, qui permet de suivre sa présence
                dans les résultats de recherche. Cet outil ne dépose aucun cookie chez vous : il
                travaille à partir des données de recherche de Google, pas de votre navigation
                sur ce site.
              </p>
            </Bloc>

            <Bloc titre="Depuis votre navigateur">
              <p>
                Vous pouvez aussi supprimer les cookies ou les bloquer depuis les réglages de
                votre navigateur. La CNIL explique comment faire :{" "}
                <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/comment-se-proteger/maitriser-votre-navigateur" rel="noopener">
                  maîtriser votre navigateur
                </a>
                .
              </p>
            </Bloc>

            <Bloc titre="Pour aller plus loin">
              <p>
                Le traitement de vos données personnelles est décrit dans la{" "}
                <Link href="/confidentialite/">politique de confidentialité</Link>. Voir aussi
                les <Link href="/mentions-legales/">mentions légales</Link>. Dernière mise à
                jour : septembre 2026.
              </p>
            </Bloc>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
