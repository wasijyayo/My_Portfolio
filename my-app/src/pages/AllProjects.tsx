import { Github, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useEffect, useState } from "react";

export function AllProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3002/api/events");
      const data = await res.json();
      const formatted = data.map((item: any) => ({
        title: item.properties.タイトル.title[0]?.plain_text,
        date: item.properties.日付.date?.start,
        description:
          item.properties.プロジェクトについて.rich_text[0]?.plain_text,
        tags: item.properties.タグ.multi_select.map((tag: any) => tag.name),
        image: item.properties["ファイル&メディア"].url,
        github: item.properties.github.url,
        Report: item.properties.記事.url,
      }));
      setProjects(formatted);
    };
    fetchData();
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-1 py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-center mb-4 text-slate-900">
            すべてのプロジェクト
          </h1>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            これまでに手がけたすべてのプロジェクトをご覧いただけます
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow bg-white"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="mb-2">
                    <Badge variant="outline">{project.date}</Badge>
                  </div>
                  <CardTitle className="text-slate-900">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map((tag: string, tagIndex: number) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="w-full">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.Report && (
                      <a
                        href={project.Report}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          className="flex-1 bg-blue-600 hover:bg-blue-700"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          記事
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
