"use client";

import { useRef, type ReactNode } from "react";
import { useSectionParallaxX } from "@/lib/useSectionParallaxX";

type Props = {
  title: string;
  multiplier: number;
  direction?: 1 | -1;
  basePosition: "left" | "right";
  baseOffset: string;
  titleTop?: string;
  minHeight?: string;
  children: ReactNode;
};

/**
 * Reusable version of the "giant #EEE watermark title parallaxing behind
 * fixed content" pattern shared by `AboutMe.js`, `Skills.js` and
 * `Contact.js` in the reference project. Used for Experiência, Formação,
 * Skills and Contato so the mechanic isn't duplicated three times.
 */
export default function WatermarkSection({
  title,
  multiplier,
  direction = 1,
  basePosition,
  baseOffset,
  titleTop = "15%",
  minHeight = "70vh",
  children,
}: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  useSectionParallaxX(sectionRef, titleRef, multiplier, direction);

  const positionStyle =
    basePosition === "left" ? { left: baseOffset, top: titleTop } : { right: baseOffset, top: titleTop };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white py-24"
      style={{ minHeight }}
    >
      <h2
        ref={titleRef}
        className="pointer-events-none absolute select-none whitespace-nowrap font-sans text-[150px] font-black leading-none text-watermark laptop:text-[180px] laptopL:text-[200px] desktop:text-[350px]"
        style={positionStyle}
      >
        {title}
      </h2>
      <div className="relative z-[1]">{children}</div>
    </section>
  );
}
