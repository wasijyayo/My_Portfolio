import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";
import type { Project } from "../components/ProjectCard";
import { useEffect, useMemo, useState } from "react";

const ALL = "すべて";

export function AllProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [picked, setPicked] = useState(ALL);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/events");
      const data = await res.json();
      const formatted = data.map((item: any) => ({
        id: item.id,
        title: item.properties.タイトル.title[0]?.plain_text,
        date: item.properties.日付.date?.start,
        description:
          item.properties.プロジェクトについて.rich_text[0]?.plain_text,
        tags: item.properties.タグ.multi_select.map((tag: any) => tag.name),
        image: item.properties["ファイル&メディア"].url,
        github: item.properties.github.url,
        report: item.properties.記事.url,
      }));
      setProjects(formatted);
    };
    fetchData();
  }, []);

  // 全プロジェクトのタグを重複なしで集める
  const tags = useMemo(
    () => [ALL, ...new Set(projects.flatMap((p) => p.tags ?? []))],
    [projects],
  );

  const visible =
    picked === ALL ? projects : projects.filter((p) => p.tags?.includes(picked));

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1120px] flex-1 px-6 pt-18 pb-28">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl leading-tight sm:text-[52px]">つくったもの</h1>
            <p className="text-[17px] leading-[1.8]">
              ハッカソンや個人開発でつくってきたものたち。
            </p>
          </div>
          <span className="rounded-full border-2 border-ink bg-white px-4 py-2 font-display text-[15px] font-extrabold">
            ぜんぶで {projects.length} 件
          </span>
        </div>

        {projects.length > 0 && (
          <div className="mb-10 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setPicked(tag)}
                aria-pressed={picked === tag}
                className={`min-h-11 cursor-pointer rounded-full border-2 border-ink px-4.5 font-display text-sm font-bold ${
                  picked === tag ? "bg-accent" : "bg-white hover:bg-butter"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
