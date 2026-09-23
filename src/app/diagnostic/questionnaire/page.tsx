import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shell } from "@/components/ui/Section";
import { Questionnaire } from "@/components/diagnostic/Questionnaire";
import { NON_INDEXABLE } from "@/lib/seo/indexation";

/**
 * Le questionnaire lui-même. Noindex : c'est un outil, la page qui se positionne
 * sur « diagnostic d'entreprise » est /diagnostic/ (ETUDE_MOTS_CLES.md).
 */
export const metadata: Metadata = {
  title: "Questionnaire — diagnostic d'entreprise",
  description: "Vingt questions sur les cinq piliers de votre entreprise, résultat immédiat.",
  alternates: { canonical: "/diagnostic/questionnaire/" },
  robots: NON_INDEXABLE,
};

export default function QuestionnairePage() {
  return (
    <>
      <main className="min-h-screen bg-mist">
        <Header />
        <Shell>
          <div id="questionnaire" className="scroll-mt-4 pb-24 pt-10 sm:pt-14">
            <nav aria-label="Fil d'Ariane" className="mb-8 font-mono text-[11.5px] text-muted">
              <Link href="/" className="transition-colors hover:text-teal">
                Accueil
              </Link>
              <span aria-hidden="true" className="px-2 text-rule">
                /
              </span>
              <Link href="/diagnostic/" className="transition-colors hover:text-teal">
                Diagnostic
              </Link>
              <span aria-hidden="true" className="px-2 text-rule">
                /
              </span>
              <span className="text-body">Questionnaire</span>
            </nav>
            <Questionnaire />
          </div>
        </Shell>
      </main>
      <Footer />
    </>
  );
}
