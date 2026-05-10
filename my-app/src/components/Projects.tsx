import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Eコマースプラットフォーム",
    description: "React、TypeScript、Stripeを使用した安全なEコマースソリューション",
    image: "https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    tags: ["React", "TypeScript", "Node.js", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "タスク管理アプリ",
    description: "チーム向けのリアルタイムコラボレーション機能付きタスク管理ツール",
    image: "https://images.unsplash.com/photo-1759884247173-3db27f7fafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    tags: ["Next.js", "PostgreSQL", "WebSocket"],
    github: "#",
    demo: "#",
  },
  {
    title: "ポートフォリオCMS",
    description: "クリエイター向けのカスタマイズ可能なポートフォリオ管理システム",
    image: "https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    tags: ["React", "MongoDB", "AWS"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
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
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
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
