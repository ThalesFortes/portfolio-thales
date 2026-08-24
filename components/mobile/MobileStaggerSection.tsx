"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/lib/reducedMotion";
import { useIsDesktop } from "@/lib/useIsDesktop";

type Props = {
  title: string;
  children: ReactNode;
  itemSelector?: string;
  variant?: "fade-up" | "fade-scale";
};

/**
 * Port of the mobile `Skills.js`/`Contact.js` pattern: solid black title
 * (no watermark/parallax on mobile, per the brief) + stagger fade-in for
 * the items below. Deviation from the original: the reveal is triggered
 * by `IntersectionObserver` instead of firing on mount, since this is a
 * long single page where every section mounts immediately, animating on
 * mount would fire the whole stagger before the user has scrolled anywhere
 * near it.
 */
export default function MobileStaggerSection({
  title,
  children,
  itemSelector = "[data-reveal-item]",
  variant = "fade-up",
}: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (reducedMotion || isDesktop) return;
    const section = sectionRef.current;
    const titleEl = titleRef.current;
    if (!section || !titleEl) return;

    const items = section.querySelectorAll<HTMLElement>(itemSelector);
    const itemFrom = variant === "fade-scale" ? { opacity: 0, scale: 0.8 } : { opacity: 0, y: 20 };
    const itemTo =
      variant === "fade-scale"
        ? { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 }
        : { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 };

    gsap.set(titleEl, { opacity: 0, x: -50 });
    if (items.length) gsap.set(items, itemFrom);

    let played = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || played) return;
        played = true;
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.to(titleEl, { opacity: 1, x: 0, duration: 0.8 });
        if (items.length) tl.to(items, { ...itemTo }, "-=0.4");
        observer.disconnect();
      },
      { threshold: 0.2 },
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, [itemSelector, variant, reducedMotion, isDesktop]);

  return (
    <section
      ref={sectionRef}
      className="w-full px-[60px] py-16 tablet:px-[90px] laptop:px-[120px]"
    >
      <h2
        ref={titleRef}
        className="font-sans text-[40px] font-black text-black mobileM:text-[50px] mobileL:text-[60px] tablet:text-[90px] laptop:text-[95px]"
      >
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
