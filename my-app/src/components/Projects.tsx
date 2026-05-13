import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Projects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3002/api/events");
      const data = await res.json();
      const formatted = data.slice(0, 3).map((item: any) => ({
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
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center mb-4 text-slate-900">最近のプロジェクト</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          特に注目していただきたい代表的なプロジェクトをご紹介します
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-slate-900">{project.title}</CardTitle>
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
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  )}
                  {project.report && (
                    <a href={project.report} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
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

        <div className="text-center">
          <Link to="/projects">
            <Button size="lg" variant="outline" className="group">
              すべてのプロジェクトを見る
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
