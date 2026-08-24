"use client";

import { useCallback, useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { type Project } from "@/lib/data";
import { usePrefersReducedMotion } from "@/lib/reducedMotion";
import { useIsDesktop } from "@/lib/useIsDesktop";
import { BOX_LEAD_VH } from "@/lib/workConfig";
import PhoneMockup from "./PhoneMockup";

// Réplica do padrão real do código-fonte de referência (`WhatsMyFoodImages.js`
// etc.): TODA imagem tem a mesma altura-base (80vh, sem variar por
// breakpoint), o que diferencia o tamanho de uma pra outra é um `scale()`
// por cima (lá: 1 / 0.9 / 0.7 / 0.6), não uma altura diferente.
const PHONE_CONFIG = [
  { position: "top-[2%] left-[4%]", scale: 1, rotate: -6 },
  { position: "top-[0%] left-[46%]", scale: 0.9, rotate: 4 },
  { position: "top-[46%] left-[0%]", scale: 0.7, rotate: 3 },
  { position: "top-[42%] left-[42%]", scale: 0.6, rotate: -4 },
];

function ProjectPhones({ project }: { project: Project }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const phoneRefs = useRef<Array<HTMLDivElement | null>>([]);
  const reducedMotion = usePrefersReducedMotion();
  const images = (project.images ?? []).slice(0, 4);

  useEffect(() => {
    if (reducedMotion) return;
    const wrapper = wrapperRef.current;
    const phones = phoneRefs.current.filter((el): el is HTMLDivElement => Boolean(el));
    if (!wrapper || !phones.length) return;

    let played = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || played) return;
        played = true;
        gsap.to(phones, { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out" });
        observer.disconnect();
      },
      { threshold: 0.3 },
    );
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <div ref={wrapperRef} className="relative h-full w-full">
      {images.map((src, index) => (
        <PhoneMockup
          key={src}
          src={src}
          className={PHONE_CONFIG[index].position}
          scale={PHONE_CONFIG[index].scale}
          rotate={PHONE_CONFIG[index].rotate}
          style={reducedMotion ? undefined : { opacity: 0, transform: "translateY(60px)" }}
          ref={(el) => {
            phoneRefs.current[index] = el;
          }}
        />
      ))}
    </div>
  );
}

/**
 * Replaces `ImageContent.js` + `ParallaxImages/*.js`: 4 celulares soltos
 * (divs distintas, moldura estilo iPhone) com os screenshots reais de cada
 * projeto, em vez de um bloco/grade único. Cada celular sobe por conta
 * própria, em sequência, quando entra na tela (`IntersectionObserver`).
 * O grupo inteiro ainda desliza em `translateY` conforme o slide do
 * projeto passa pela tela, mesmo mecanismo de parallax de antes.
 */
export default function ProjectMedia({
  containerRef,
  slideHeight,
  mediaProjects,
}: {
  containerRef: RefObject<HTMLDivElement | null>;
  slideHeight: number;
  mediaProjects: Project[];
}) {
  const boxRefs = useRef<Array<HTMLDivElement | null>>([]);
  const reducedMotion = usePrefersReducedMotion();
  const isDesktop = useIsDesktop();

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container || slideHeight === 0) return;
    const containerTop = container.getBoundingClientRect().top + window.scrollY;
    const relative = window.scrollY - containerTop;

    const boxLead = window.innerHeight * BOX_LEAD_VH;

    mediaProjects.forEach((_, index) => {
      const box = boxRefs.current[index];
      if (!box) return;
      const slideStart = boxLead + index * slideHeight;
      const progress = (relative - slideStart) / slideHeight;
      const y = Math.max(-50, Math.min(50, -(progress * 35)));

      gsap.to(box, {
        yPercent: y,
        duration: 0.2,
        ease: "power1.out",
        overwrite: "auto",
      });
    });
  }, [containerRef, slideHeight, mediaProjects]);

  useEffect(() => {
    if (reducedMotion || !isDesktop) return;
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, reducedMotion, isDesktop]);

  return (
    <div className="hidden w-1/2 flex-col dt:flex">
      {mediaProjects.map((project, index) => (
        <div key={project.name} className="relative mt-[40vh] h-screen">
          <div
            ref={(el) => {
              boxRefs.current[index] = el;
            }}
            className="absolute inset-4"
          >
            <ProjectPhones project={project} />
          </div>
        </div>
      ))}
    </div>
  );
}
