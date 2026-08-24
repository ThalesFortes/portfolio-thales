import Image from "next/image";
import { projects as allProjects, statusColor, statusLabel, type Project } from "@/lib/data";

/**
 * Stacked, non-scroll-jacking list of projects. Used for the mobile tree
 * (per the brief: mobile/tablet avoids heavy scroll-jacking), as the
 * `prefers-reduced-motion` fallback for `WorkSection`, and for the desktop
 * "Outros projetos" section (projects without screenshots).
 *
 * `startIndex` desloca a numeração (ex.: 4 pra continuar depois dos 3
 * projetos com imagem, que já usaram 01–03). `layout="row"` coloca os
 * cards lado a lado numa linha só, em vez de empilhados.
 */
export default function ProjectsList({
  projects = allProjects,
  startIndex = 0,
  layout = "stacked",
}: {
  projects?: Project[];
  startIndex?: number;
  layout?: "stacked" | "row";
}) {
  const isRow = layout === "row";

  return (
    <div className={isRow ? "grid gap-x-10 gap-y-6 laptop:grid-cols-3" : "space-y-10"}>
      {projects.map((project, index) => (
        <article
          key={project.name}
          data-reveal-item
          className={isRow ? "" : "border-t border-black/10 pt-6"}
        >
          <div className="flex items-baseline gap-3">
            <span className="font-sans text-2xl font-black text-ink/30">
              {String(startIndex + index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-sans text-xl font-black text-ink tablet:text-2xl laptop:text-3xl">
              {project.name}
            </h3>
          </div>
          <p className="mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink/60">
            <span className={`h-2 w-2 rounded-full ${statusColor[project.status]}`} aria-hidden="true" />
            {statusLabel[project.status]}
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/80">{project.description}</p>
          {project.images && project.images.length > 0 && (
            <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
              {project.images.slice(0, 4).map((src) => (
                <div
                  key={src}
                  className="relative h-32 w-16 flex-shrink-0 overflow-hidden rounded-xl ring-1 ring-black/10"
                >
                  <Image src={src} alt="" fill sizes="64px" className="object-cover object-top" />
                </div>
              ))}
            </div>
          )}
          {project.links.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline underline-offset-4 hover:text-black"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
