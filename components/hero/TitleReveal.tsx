"use client";

import { useFadeReveal } from "@/lib/useFadeReveal";
import { NAME_FADE_DURATION_MS } from "./NameReveal";

/** Mesma animação de fade do nome (ver `NameReveal`), só que atrasada até
 * o fade dele terminar por completo, `timeDelay` já vem pronto do Hero. */
export default function TitleReveal({
  text,
  timeDelay,
}: {
  text: string;
  timeDelay: number;
}) {
  const { ref, reducedMotion } = useFadeReveal<HTMLParagraphElement>(timeDelay, NAME_FADE_DURATION_MS);

  return (
    <p
      ref={ref}
      className={`m-0 text-center font-sans text-[28px] font-normal leading-normal text-ink laptop:text-[30px] laptopL:text-[40px] desktop:text-[50px] ${
        reducedMotion ? "opacity-100" : "opacity-[0.08]"
      }`}
    >
      {text}
    </p>
  );
}
