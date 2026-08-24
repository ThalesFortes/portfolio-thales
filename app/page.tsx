import HeroDesktop from "@/components/hero/HeroDesktop";
import WorkSection from "@/components/projects/WorkSection";
import OtherProjectsSection from "@/components/projects/OtherProjectsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ContactSection from "@/components/contact/ContactSection";

import MobileHero from "@/components/mobile/MobileHero";
import ProjectsMobile from "@/components/mobile/ProjectsMobile";
import ExperienceMobile from "@/components/mobile/ExperienceMobile";
import SkillsMobile from "@/components/mobile/SkillsMobile";
import ContactMobile from "@/components/mobile/ContactMobile";

/**
 * Mirrors `App.js`'s `isDesktopOrLaptop`/`isMobile` split, but instead of
 * gating on a `useMediaQuery` result (which would render nothing until
 * mounted, or need extra hydration-safety plumbing), both trees are always
 * in the DOM and a CSS breakpoint (`dt` = 1224px, same cutoff as the
 * reference's `App.js`) decides which one is visible. That removes any
 * hydration-mismatch risk entirely and keeps full content in the initial
 * server-rendered HTML for SEO/no-JS. `useIsDesktop()` (react-responsive)
 * is still used inside the animated components themselves to skip
 * attaching scroll listeners / observers on whichever tree CSS is hiding.
 */
export default function Home() {
  return (
    <>
      <div className="hidden dt:block">
        <HeroDesktop />
        <WorkSection />
        <OtherProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </div>
      <div className="dt:hidden">
        <MobileHero />
        <ProjectsMobile />
        <ExperienceMobile />
        <SkillsMobile />
        <ContactMobile />
      </div>
    </>
  );
}
