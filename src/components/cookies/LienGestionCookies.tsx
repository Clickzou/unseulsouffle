"use client";

import { ouvrirGestionCookies } from "@/lib/consentement";

/** Rouvre le bandeau pour modifier son choix — obligation CNIL. */
export function LienGestionCookies({
  className,
  children = "Gérer les cookies",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button type="button" onClick={ouvrirGestionCookies} className={className}>
      {children}
    </button>
  );
}
