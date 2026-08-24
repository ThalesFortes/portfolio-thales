"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/lib/data";
import { usePrefersReducedMotion } from "@/lib/reducedMotion";
import { useIsDesktop } from "@/lib/useIsDesktop";
import { SLIDE_HEIGHT_MULTIPLIER, TEXT_SWITCH_LEAD_VH } from "@/lib/workConfig";
import TextContent, { type WorkSlide } from "./TextContent";
import ProjectMedia from "./ProjectMedia";
import ProjectsList from "./ProjectsList";

// Só os projetos com screenshot entram no painel visual com scroll-jacking
// — os demais (Protocolo Web3, Sistema de Compra, DelvyID) vivem na seção
// "Outros projetos" (texto puro), ver OtherProjectsSection.
const mediaProjects = projects.filter((project) => project.images && project.images.length > 0);

function buildSlides(): WorkSlide[] {
  // Sem slides vazios no início nem no fim: o primeiro projeto já aparece
  // assim que a seção entra na tela, e o release do scroll-jacking (ver
  // `RELEASE_BUFFER_VH` abaixo) acontece assim que o dwell do último
  // projeto termina — sem tela em branco de respiro no meio do caminho.
  return mediaProjects.map<WorkSlide>((project, index) => ({
    number: String(index + 1).padStart(2, "0"),
    name: project.name,
    description: project.description,
    status: project.status,
    links: project.links,
  }));
}

const slides = buildSlides();

// Extra além de `slides.length * slideHeight` só pra dar ao ÚLTIMO projeto o
// mesmo dwell (tempo pinado) dos outros antes do painel "descolar" — sem
// isso ele ficaria com menos tempo de tela por causa da própria altura do
// painel (100vh). Não é um slide indexado, então não mostra nada em branco.
const RELEASE_BUFFER_VH = 100;

/**
 * Port of `Work.js`: scroll-jacked project panel. Text panel switches
 * project on `Math.floor(relativeScrollTop / slideHeight)` — computed
 * relative to this section's own offset (not `document.documentElement
 * .scrollTop` like the original) because our page has Hero/About before
 * Projetos, so the global scrollTop is never near zero when this section
 * starts.
 */
export default function WorkSection() {
  const reducedMotion = usePrefersReducedMotion();
  const isDesktop = useIsDesktop();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [slideHeight, setSlideHeight] = useState(0);
  const [slideNumber, setSlideNumber] = useState(0);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container || slideHeight === 0) return;
    const containerTop = container.getBoundingClientRect().top + window.scrollY;
    const relative = Math.max(0, window.scrollY - containerTop);
    // Soma o lead (`TEXT_SWITCH_LEAD_VH`) antes de calcular o índice, pra
    // trocar o texto exatamente quando a imagem do próximo projeto começa
    // a entrar pelo rodapé da tela em `ProjectMedia` — não ~100vh depois.
    const textSwitchLead = window.innerHeight * TEXT_SWITCH_LEAD_VH;
    const adjusted = relative + textSwitchLead;
    const newIndex = Math.min(Math.floor(adjusted / slideHeight), slides.length - 1);
    setSlideNumber((prev) => (prev !== newIndex ? newIndex : prev));
  }, [slideHeight]);

  useEffect(() => {
    if (reducedMotion || !isDesktop) return;

    const calcSlideHeight = () => setSlideHeight(Math.round(window.innerHeight * SLIDE_HEIGHT_MULTIPLIER));
    calcSlideHeight();

    window.addEventListener("resize", calcSlideHeight);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("resize", calcSlideHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, reducedMotion, isDesktop]);

  if (reducedMotion) {
    return (
      <section className="w-full px-[8%] py-24 dt:px-[10%]">
        <h2 className="mb-10 font-sans text-4xl font-black text-ink laptop:text-5xl">Projetos</h2>
        <ProjectsList projects={mediaProjects} />
      </section>
    );
  }

  const current = slides[slideNumber];

  return (
    <div
      ref={containerRef}
      className="relative flex flex-row"
      style={{ height: `${slides.length * SLIDE_HEIGHT_MULTIPLIER * 100 + RELEASE_BUFFER_VH}vh` }}
    >
      <TextContent {...current} revealKey={slideNumber} />
      <ProjectMedia containerRef={containerRef} slideHeight={slideHeight} mediaProjects={mediaProjects} />
    </div>
  );
}
