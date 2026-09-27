"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Transitions discrètes à l'entrée dans la vue, sur toutes les pages : chaque
 * <section> du <main> apparaît en fondu, avec une légère montée.
 *
 * Posé une fois dans le layout plutôt que d'envelopper chaque bloc de `Reveal`.
 * Mêmes garde-fous que `Reveal` :
 *   - le rendu serveur est visible ; rien n'est masqué avant l'hydratation ;
 *   - une section déjà à l'écran n'est jamais masquée ;
 *   - `prefers-reduced-motion` : aucune animation.
 *
 * Une section déjà confiée à `Reveal` (`data-reveal`, autour d'elle ou en
 * dessous) est laissée à ce composant, pour ne pas animer deux fois.
 */
export function RevealVue() {
  const chemin = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cibles = Array.from(document.querySelectorAll<HTMLElement>("main section")).filter(
      (el) =>
        !el.closest("[data-reveal]") &&
        !el.querySelector("[data-reveal]") &&
        el.getBoundingClientRect().top >= window.innerHeight * 0.92,
    );

    const reveler = (el: HTMLElement) => {
      el.classList.remove("vue-cache");
      // Une fois entrée, la section retrouve un style neutre : aucun `transform`
      // résiduel ne doit gêner un élément fixe ou collant à l'intérieur.
      el.addEventListener("transitionend", () => el.classList.remove("vue-anim"), { once: true });
    };

    const observer = new IntersectionObserver(
      (entrees) => {
        for (const entree of entrees) {
          if (!entree.isIntersecting) continue;
          reveler(entree.target as HTMLElement);
          observer.unobserve(entree.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    for (const el of cibles) {
      el.classList.add("vue-anim", "vue-cache");
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
      for (const el of cibles) el.classList.remove("vue-anim", "vue-cache");
    };
  }, [chemin]);

  return null;
}
