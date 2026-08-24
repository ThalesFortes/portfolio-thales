import { icons, type IconName } from "./icons";

/** Port of `SocialLogo.js`. */
export default function SocialLogo({
  icon,
  label,
  href,
  download,
}: {
  icon: IconName;
  label: string;
  href: string;
  download?: string;
}) {
  const Icon = icons[icon];
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      download={download}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex flex-col items-center gap-3 text-ink motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:scale-110"
    >
      <Icon className="h-[70px] w-[70px] laptop:h-[85px] laptop:w-[85px] laptopL:h-[90px] laptopL:w-[90px] desktop:h-[180px] desktop:w-[180px]" />
      <span className="text-center text-sm font-medium tablet:text-base">{label}</span>
    </a>
  );
}
