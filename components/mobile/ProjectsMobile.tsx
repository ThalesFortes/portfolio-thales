import MobileStaggerSection from "./MobileStaggerSection";
import ProjectsList from "@/components/projects/ProjectsList";
import { projects } from "@/lib/data";

/**
 * Deviation from the reference: mobile `Work.js` there also does full
 * scroll-jacking. The brief asks for mobile/tablet to avoid heavy
 * scroll-jacking, so this is a stacked list with the same stagger
 * fade-in as the other mobile sections instead.
 *
 * "Protocolo Web3" vai pro fim da lista aqui (só no mobile) — no desktop
 * ele já cai em "Outros projetos", numa seção separada, então não precisa
 * do mesmo ajuste lá.
 */
const mobileProjects = [
  ...projects.filter((project) => project.name !== "Protocolo Web3"),
  ...projects.filter((project) => project.name === "Protocolo Web3"),
];

export default function ProjectsMobile() {
  return (
    <MobileStaggerSection title="PROJETOS">
      <ProjectsList projects={mobileProjects} />
    </MobileStaggerSection>
  );
}
