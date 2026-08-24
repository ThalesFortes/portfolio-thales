"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/lib/reducedMotion";
import { statusColor, statusLabel, type ProjectLink, type ProjectStatus } from "@/lib/data";

/** Port of `TextContent.js`'s `TextReveal`: white text, `#222` bar wipes
 * across it left→right then right-out, text lands on `#333`. */
function TextReveal({
  children,
  inline = false,
  revealKey,
}: {
  children: React.ReactNode;
  inline?: boolean;
  revealKey: number;
}) {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const overlayRef = useRef<HTMLSpanElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const textEl = textRef.current;
    const overlayEl = overlayRef.current;
    if (!textEl || !overlayEl) return;

    gsap.set(textEl, { color: "#FFF" });
    gsap.set(overlayEl, { left: 0, width: "0%", opacity: 1 });

    const tl = gsap.timeline();
    tl.to(overlayEl, { width: "100%", duration: 0.5, ease: "power2.inOut" })
      .to(overlayEl, { left: "100%", width: "0%", duration: 0.5, ease: "power2.inOut" })
      .to(textEl, { color: "#333", duration: 0.01 }, "-=0.5");

    return () => {
      tl.kill();
    };
  }, [revealKey, reducedMotion]);

  return (
    <span
      ref={textRef}
      className={`relative ${inline ? "inline" : "block"} ${reducedMotion ? "text-ink" : "text-white"}`}
    >
      {children}
      {!reducedMotion && (
        <span ref={overlayRef} className="absolute left-0 top-0 h-full w-0 bg-overlay" aria-hidden="true" />
      )}
    </span>
  );
}

export type WorkSlide = {
  number: string;
  name: string;
  description: string;
  status: ProjectStatus | null;
  links: ProjectLink[];
};

export default function TextContent({ number, name, description, status, links, revealKey }: WorkSlide & { revealKey: number }) {
  return (
    <section className="sticky top-0 hidden h-screen w-1/2 flex-col self-start overflow-hidden dt:flex">
      <div className="p-[5%] font-sans text-[25px] font-black laptopL:text-[30px] desktop:text-[58px]">
        <TextReveal inline revealKey={revealKey}>
          {number}
        </TextReveal>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-[10%]">
        <div className="w-full">
          <div className="font-sans text-[60px] font-black leading-none laptopL:text-[70px] desktop:text-[110px]">
            <TextReveal inline revealKey={revealKey}>
              {name}
            </TextReveal>
          </div>

          {status && (
            <div className="mt-[4%] font-sans text-[18px] font-semibold uppercase tracking-wide laptopL:text-[20px] desktop:text-[28px]">
              <TextReveal inline revealKey={revealKey}>
                <span
                  className={`mr-3 inline-block h-3 w-3 rounded-full align-middle ${statusColor[status]}`}
                  aria-hidden="true"
                />
                {statusLabel[status]}
              </TextReveal>
            </div>
          )}

          <div className="mt-[2%] font-sans text-[25px] font-light laptopL:text-[30px] desktop:text-[50px]">
            <TextReveal revealKey={revealKey}>{description}</TextReveal>
          </div>

          {links.length > 0 && (
            <div className="mt-[5%] font-sans text-[18px] font-medium laptopL:text-[20px] desktop:text-[32px]">
              <TextReveal inline revealKey={revealKey}>
                {links.map((link, index) => (
                  <span key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:no-underline"
                    >
                      {link.label}
                    </a>
                    {index < links.length - 1 && <>&nbsp;•&nbsp;</>}
                  </span>
                ))}
              </TextReveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
