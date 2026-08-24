import WatermarkSection from "@/components/watermark/WatermarkSection";
import ProjectsList from "./ProjectsList";
import { projects } from "@/lib/data";

// Projetos sem screenshot (Protocolo Web3, Sistema de Compra, DelvyID):
// seção separada, texto puro, mesmo padrão visual (watermark) da seção de
// Skills — sem scroll-jacking, sem painel de imagem.
const mediaProjects = projects.filter((project) => project.images && project.images.length > 0);
const otherProjects = projects.filter((project) => !project.images || project.images.length === 0);

export default function OtherProjectsSection() {
  return (
    <WatermarkSection
      title="OUTROS"
      multiplier={5}
      direction={1}
      basePosition="left"
      baseOffset="-15%"
      titleTop="8%"
      minHeight="40vh"
    >
      <div className="mx-[10%] tablet:ml-[15%] tablet:mr-[6%]">
        {/* Numeração continua a partir dos 3 projetos com imagem (01–03),
            lado a lado numa linha só. */}
        <ProjectsList projects={otherProjects} startIndex={mediaProjects.length} layout="row" />
      </div>
    </WatermarkSection>
  );
}
