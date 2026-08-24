import WatermarkSection from "@/components/watermark/WatermarkSection";
import { skillPairings } from "@/lib/data";

/**
 * Duas colunas pareadas por linha: esquerda = skills/ferramentas usadas,
 * direita = a responsabilidade real (do brief) onde elas foram aplicadas.
 * Layout simplificado a pedido do Thales, inspirado na seção "SKIL" de
 * referência (duas colunas soltas) — aqui cada linha liga skill ↔ papel.
 */
export default function SkillsSection() {
  return (
    <WatermarkSection
      title="SKILLS"
      multiplier={10}
      direction={-1}
      basePosition="right"
      baseOffset="-50%"
      titleTop="18%"
      minHeight="140vh"
    >
      <div className="mx-[10%] flex flex-col gap-10 tablet:ml-[15%] tablet:mr-[6%]">
        {skillPairings.map((pair) => (
          <div
            key={pair.responsibility}
            className="grid items-baseline gap-x-12 gap-y-2 border-t border-black/10 pt-6 laptop:grid-cols-2"
          >
            <p className="font-sans text-[18px] leading-snug text-ink/50 laptop:text-[20px] laptopL:text-[24px] desktop:text-[36px]">
              {pair.skills.join(" · ")}
            </p>
            <p className="font-sans text-[24px] font-semibold leading-snug text-ink laptop:text-[28px] laptopL:text-[34px] desktop:text-[56px]">
              {pair.responsibility}
            </p>
          </div>
        ))}
      </div>
    </WatermarkSection>
  );
}
