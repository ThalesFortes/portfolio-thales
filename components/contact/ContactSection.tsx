import WatermarkSection from "@/components/watermark/WatermarkSection";
import SocialLogo from "./SocialLogo";
import { identity } from "@/lib/data";

export default function ContactSection() {
  return (
    <WatermarkSection
      title="CONTATO"
      multiplier={8}
      direction={1}
      basePosition="left"
      baseOffset="-70%"
      titleTop="12%"
      minHeight="90vh"
    >
      <div className="mx-[10%] flex flex-wrap gap-12 tablet:ml-[20%] tablet:mr-[6%] tablet:gap-20 laptop:gap-28">
        <SocialLogo icon="mail" label="E-mail" href={`mailto:${identity.email}`} />
        <SocialLogo icon="github" label="GitHub" href={identity.github} />
        <SocialLogo icon="linkedin" label="LinkedIn" href={identity.linkedin} />
        <SocialLogo
          icon="resume"
          label="Currículo"
          href={identity.resumeHref}
          download="Thales de Abreu Fortes da Silva - Curriculo.pdf"
        />
      </div>
    </WatermarkSection>
  );
}
