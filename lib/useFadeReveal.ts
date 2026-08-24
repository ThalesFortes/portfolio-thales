"use client";

import { useEffect, useRef, type MutableRefObject } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "./reducedMotion";

/**
 * Fade de opacidade puro (sem deslize/bloco branco): elemento já visível
 * desde o SSR bem translúcido (classe Tailwind `opacity-[...]` no
 * componente), e escurece até opacidade total depois de `delayMs`, ao
 * longo de `durationMs`. Usado pelo nome e pelo título do Hero, mesma
 * animação nos dois, só o `delayMs` muda pra sequenciar um depois do outro.
 */
export function useFadeReveal<T extends HTMLElement = HTMLElement>(delayMs: number, durationMs: number) {
  const ref = useRef<T | null>(null) as MutableRefObject<T | null>;
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const tween = gsap.to(el, {
      opacity: 1,
      duration: durationMs / 1000,
      delay: delayMs / 1000,
      ease: "power1.out",
    });

    return () => {
      tween.kill();
    };
  }, [delayMs, durationMs, reducedMotion]);

  return { ref, reducedMotion };
}
