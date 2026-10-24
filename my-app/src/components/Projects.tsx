import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "./ProjectCard";
import { buttonClass } from "./ui/buttonClass";

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/events");
      const data = await res.json();
      const formatted = data.slice(0, 3).map((item: any) => ({
        id: item.id,
        title: item.properties.タイトル.title[0]?.plain_text,
        description: item.properties.プロジェクトについて.rich_text[0]?.plain_text,
        tags: item.properties.タグ.multi_select.map((tag: any) => tag.name),
        image: item.properties["ファイル&メディア"].url,
        github: item.properties.github.url,
        report: item.properties.記事.url,
      }));
      setProjects(formatted);
    };
    fetchData();
  }, []);

  return (
    <section id="projects" className="mx-auto w-full max-w-[1120px] px-6 pt-24 pb-28">
      <h2 className="mb-3 text-4xl sm:text-[40px]">最近のプロジェクト</h2>
      <p className="mb-9">特に注目していただきたい代表的なプロジェクトをご紹介します</p>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/projects" className={buttonClass("outline", "lg")}>
          すべてのプロジェクトを見る →
        </Link>
      </div>
    </section>
  );
}
