"use client";

import { useRef } from "react";
import { identity } from "@/lib/data";
import { useSectionParallaxX } from "@/lib/useSectionParallaxX";

/**
 * Port of `AboutMe.js`: uma frase só, no mesmo tom do original ("Crafting
 * user friendly... it's my passion."). A versão anterior tratava "prova,
 * não promessa" como um slogan solto seguido de um parágrafo de bio embaixo
 * — não é assim que a referência faz; aqui vira uma frase natural única.
 */
export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  useSectionParallaxX(sectionRef, titleRef, 5.5, 1);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white py-24"
      style={{ minHeight: "60vh" }}
    >
      <h2
        ref={titleRef}
        className="pointer-events-none absolute top-[10%] left-[-15%] select-none whitespace-nowrap font-sans text-[150px] font-black leading-none text-watermark laptop:text-[180px] laptopL:text-[200px] desktop:text-[350px]"
      >
        SOBRE
      </h2>
      <div className="relative z-[1] mx-[8%] max-w-3xl tablet:ml-[30%] tablet:mr-[5%]">
        <p className="font-sans text-[24px] font-light leading-snug text-ink laptop:text-[30px] laptopL:text-[38px] desktop:text-[70px]">
          {identity.aboutSentence}
        </p>
      </div>
    </section>
  );
}
