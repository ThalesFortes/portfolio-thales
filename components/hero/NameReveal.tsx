"use client";

import { useFadeReveal } from "@/lib/useFadeReveal";

const FADE_DELAY_MS = 50;
export const NAME_FADE_DURATION_MS = 1200;

/**
 * Nome já visível na tela desde o primeiro paint, bem translúcido, e
 * escurece até opacidade total (sem deslize/bloco branco).
 */
export default function NameReveal({ text }: { text: string }) {
  const { ref, reducedMotion } = useFadeReveal<HTMLHeadingElement>(FADE_DELAY_MS, NAME_FADE_DURATION_MS);

  return (
    <h1
      ref={ref}
      className={`m-0 text-center font-display text-[130px] font-normal leading-none text-ink laptop:text-[170px] laptopL:text-[190px] desktop:text-[240px] ${
        reducedMotion ? "opacity-100" : "opacity-[0.08]"
      }`}
    >
      {text}
    </h1>
  );
}
