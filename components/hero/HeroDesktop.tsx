import NameReveal from "./NameReveal";
import TitleReveal from "./TitleReveal";
import AboutSection from "./AboutSection";
import { identity } from "@/lib/data";

/** Port of `HeroSlide/Hero.js` (desktop): NameAndJobTitle + AboutMe. */
export default function HeroDesktop() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white">
        <NameReveal text={identity.shortName} />
        <TitleReveal text={identity.headline} timeDelay={1250} />
      </div>
      <AboutSection />
    </>
  );
}
