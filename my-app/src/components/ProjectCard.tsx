import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { buttonClass } from "./ui/buttonClass";

export interface Project {
  id: string;
  title: string;
  date?: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  report?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[20px] border-2 border-ink bg-white shadow-hard-lg">
      <div className="relative border-b-2 border-ink">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="h-[180px] w-full object-cover"
        />
        {project.date && (
          <span className="absolute top-3 left-3 rounded-full border-2 border-ink bg-white px-2.5 py-0.5 text-xs font-bold">
            {project.date}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5.5">
        <h3 className="text-xl">{project.title}</h3>
        <p className="text-sm leading-[1.8]">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full border-2 border-ink px-2.5 py-0.5 text-xs font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-2.5 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonClass("outline", "sm")} shadow-none`}
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              Code
            </a>
          )}
          {project.report && (
            <a
              href={project.report}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonClass("default", "sm")} shadow-none`}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              記事を読む
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
