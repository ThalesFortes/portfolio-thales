import MobileStaggerSection from "./MobileStaggerSection";
import SocialLogo from "@/components/contact/SocialLogo";
import { identity } from "@/lib/data";

export default function ContactMobile() {
  return (
    <MobileStaggerSection title="CONTATO" variant="fade-scale">
      <div className="grid grid-cols-2 gap-x-10 gap-y-10">
        <div data-reveal-item>
          <SocialLogo icon="mail" label="E-mail" href={`mailto:${identity.email}`} />
        </div>
        <div data-reveal-item>
          <SocialLogo icon="github" label="GitHub" href={identity.github} />
        </div>
        <div data-reveal-item>
          <SocialLogo icon="linkedin" label="LinkedIn" href={identity.linkedin} />
        </div>
        <div data-reveal-item>
          <SocialLogo
            icon="resume"
            label="Currículo"
            href={identity.resumeHref}
            download="Thales de Abreu Fortes da Silva - Curriculo.pdf"
          />
        </div>
      </div>
    </MobileStaggerSection>
  );
}
