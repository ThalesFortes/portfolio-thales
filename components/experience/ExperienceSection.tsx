import WatermarkSection from "@/components/watermark/WatermarkSection";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <WatermarkSection
      title="EXPERIÊNCIA"
      multiplier={7}
      direction={1}
      basePosition="left"
      baseOffset="-20%"
      titleTop="10%"
      minHeight="120vh"
    >
      <div className="mx-[10%] flex flex-col gap-10 tablet:ml-[15%] tablet:mr-[6%]">
        {experience.map((item) => (
          <div
            key={`${item.company}-${item.period}`}
            className="grid gap-x-12 gap-y-3 border-t border-black/10 pt-6 laptop:grid-cols-[1fr_2fr]"
          >
            <div>
              <p className="font-sans text-[20px] font-semibold leading-snug text-ink laptop:text-[24px] laptopL:text-[28px] desktop:text-[38px]">
                {item.role}
              </p>
              <p className="font-sans text-[16px] text-ink/50 laptop:text-[18px] desktop:text-[24px]">
                {item.company}
              </p>
              <p className="font-sans text-[14px] text-ink/40 laptop:text-[16px] desktop:text-[20px]">
                {item.period}
              </p>
            </div>
            <ul className="list-disc space-y-1 pl-5 font-sans text-[16px] leading-snug text-ink/70 laptop:text-[18px] desktop:text-[24px]">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </WatermarkSection>
  );
}
