import MobileStaggerSection from "./MobileStaggerSection";
import { experience } from "@/lib/data";

export default function ExperienceMobile() {
  return (
    <MobileStaggerSection title="EXPERIÊNCIA">
      <div className="space-y-8">
        {experience.map((item) => (
          <div
            key={`${item.company}-${item.period}`}
            data-reveal-item
            className="border-t border-black/10 pt-4 font-sans text-ink"
          >
            <p className="text-[18px] font-semibold tablet:text-[22px]">{item.role}</p>
            <p className="text-[13px] text-ink/50">
              {item.company} · {item.period}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[14px] text-ink/70 tablet:text-[16px]">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </MobileStaggerSection>
  );
}
