import MobileStaggerSection from "./MobileStaggerSection";
import { skillPairings } from "@/lib/data";

export default function SkillsMobile() {
  return (
    <MobileStaggerSection title="SKILLS">
      <div className="space-y-6">
        {skillPairings.map((pair) => (
          <div
            key={pair.responsibility}
            data-reveal-item
            className="border-t border-black/10 pt-4 font-sans text-ink"
          >
            <p className="text-[13px] text-ink/50">{pair.skills.join(" · ")}</p>
            <p className="text-[18px] font-semibold tablet:text-[22px]">{pair.responsibility}</p>
          </div>
        ))}
      </div>
    </MobileStaggerSection>
  );
}
