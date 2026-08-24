"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/lib/reducedMotion";
import { identity } from "@/lib/data";

const FADE_DELAY = 0.05;
const FADE_DURATION = 1.2;

/** Port of the mobile `HeroSlide` (`NameAndJobTitle.js` + `AboutMe.js`):
 * nome já visível bem translúcido desde o primeiro paint, escurece devagar
 * até opacidade total (sem deslize), e o título usa a mesma animação logo
 * depois que a dele termina — sequência estrita, não sobreposta. */
export default function MobileHero() {
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const aboutRef = useRef<HTMLParagraphElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const name = nameRef.current;
    const title = titleRef.current;
    if (!name || !title) return;

    const nameTween = gsap.to(name, { opacity: 1, duration: FADE_DURATION, delay: FADE_DELAY, ease: "power1.out" });
    const titleTween = gsap.to(title, {
      opacity: 1,
      duration: FADE_DURATION,
      delay: FADE_DELAY + FADE_DURATION,
      ease: "power1.out",
    });

    return () => {
      nameTween.kill();
      titleTween.kill();
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    const about = aboutRef.current;
    if (!about) return;

    const tween = gsap.fromTo(
      about,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "power4.out", delay: 0.5 },
    );

    return () => {
      tween.kill();
    };
  }, [reducedMotion]);

  return (
    <section className="flex min-h-[75vh] w-full flex-col items-center justify-center overflow-hidden bg-white px-6 py-16 text-center">
      <h1
        ref={nameRef}
        className={`m-0 font-display text-[80px] font-normal leading-none text-ink mobileM:text-[90px] mobileL:text-[100px] tablet:text-[160px] laptop:text-[170px] ${
          reducedMotion ? "opacity-100" : "opacity-[0.08]"
        }`}
      >
        {identity.shortName}
      </h1>
      <p
        ref={titleRef}
        className={`mt-4 font-sans text-[20px] text-ink mobileM:text-[25px] mobileL:text-[32px] tablet:text-[30px] laptop:text-[35px] ${
          reducedMotion ? "opacity-100" : "opacity-[0.08]"
        }`}
      >
        {identity.headline}
      </p>
      <p
        ref={aboutRef}
        className={`mt-10 max-w-xl font-sans text-[20px] font-light leading-snug text-ink mobileM:text-[23px] mobileL:text-[24px] tablet:text-[40px] laptop:text-[45px] ${
          reducedMotion ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        {identity.aboutSentence}
      </p>
    </section>
  );
}
