"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "./reducedMotion";
import { useIsDesktop } from "./useIsDesktop";

/**
 * Port of the watermark-title parallax from `AboutMe.js` / `Skills.js` /
 * `Contact.js`: `gsap.to(title, { x: scrollPercent * MULTIPLIER + '%' })`.
 *
 * The original computes `scrollPercent` from the *whole document*
 * (`scrollTop / (scrollHeight - clientHeight)`) with hardcoded min/max vh
 * limits tuned to that specific page's total height. Our page has a
 * different number/length of sections, so those hardcoded limits would be
 * meaningless here, instead we derive an equivalent 0..1 progress value
 * from how far the *section itself* has travelled through the viewport
 * (its own `getBoundingClientRect()`), which reproduces the same visual
 * effect (title drifts horizontally while its section is on screen)
 * without depending on total document height.
 */
export function useSectionParallaxX(
  sectionRef: RefObject<HTMLElement | null>,
  titleRef: RefObject<HTMLElement | null>,
  multiplier: number,
  direction: 1 | -1 = 1,
) {
  const reducedMotion = usePrefersReducedMotion();
  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (reducedMotion || !isDesktop) return;
    const section = sectionRef.current;
    const title = titleRef.current;
    if (!section || !title) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const traveled = vh - rect.top;
      const progress = Math.min(Math.max(traveled / total, 0), 1) * 100;

      gsap.to(title, {
        x: `${direction * progress * multiplier}%`,
        duration: 0.5,
        ease: "power1.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef, titleRef, multiplier, direction, reducedMotion, isDesktop]);
}
