// Ícones autorais simples (line-icon), desenhados do zero — os SVGs de
// marca do projeto de referência (git.svg, linkedin.svg, mail.svg...) não
// são reutilizados aqui.
type IconProps = { className?: string };

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </svg>
  );
}

export function GithubIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 17c-3 1-3.5-1.5-5-1.5m10.5 3v-2.4c0-.68.24-1.13.5-1.35-1.78-.2-3.5-.9-3.5-3.85 0-.85.3-1.55.8-2.1-.08-.2-.35-1.02.08-2.12 0 0 .67-.22 2.2.8a7.5 7.5 0 0 1 4 0c1.53-1.02 2.2-.8 2.2-.8.43 1.1.16 1.92.08 2.12.5.55.8 1.25.8 2.1 0 2.96-1.73 3.65-3.52 3.84.28.24.52.7.52 1.43V19" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5V10m0 0c0-1.2.9-2 2.2-2 1.4 0 2.3.9 2.3 2.4v4.6" />
    </svg>
  );
}

export function ResumeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 2.5h7l4 4V21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1Z" />
      <path d="M14 2.5V6a1 1 0 0 0 1 1h3.5" />
      <line x1="8.5" y1="12" x2="15.5" y2="12" />
      <line x1="8.5" y1="15.5" x2="15.5" y2="15.5" />
      <line x1="8.5" y1="19" x2="12.5" y2="19" />
    </svg>
  );
}

export const icons = {
  mail: MailIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  resume: ResumeIcon,
} as const;

export type IconName = keyof typeof icons;
