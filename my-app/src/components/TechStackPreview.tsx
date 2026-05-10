import { Code2, Palette, Database, Cloud, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const techHighlights = [
  {
    icon: Code2,
    category: "フロントエンド",
    description: "モダンなUIフレームワークとライブラリ",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
  },
  {
    icon: Database,
    category: "バックエンド & DB",
    description: "サーバーサイドとデータストレージ",
    color: "text-green-600",
    bgColor: "bg-green-100",
    technologies: ["Node.js", "PostgreSQL", "MongoDB", "GraphQL", "Express"],
  },
  {
    icon: Cloud,
    category: "クラウド & DevOps",
    description: "インフラとデプロイメント",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    technologies: ["AWS", "Docker", "Vercel", "CI/CD", "GitHub Actions"],
  },
  {
    icon: Palette,
    category: "デザイン & ツール",
    description: "UI/UXデザインと開発ツール",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    technologies: ["Figma", "Git", "VS Code", "Adobe XD", "Postman"],
  },
];

export function TechStackPreview() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center mb-4 text-slate-900">技術スタック</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          主に使用している技術とツールをご紹介します
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {techHighlights.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-12 h-12 rounded-lg ${tech.bgColor} flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 ${tech.color}`} />
                    </div>
                    <CardTitle className="text-slate-900">{tech.category}</CardTitle>
                  </div>
                  <CardDescription>{tech.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tech.technologies.map((technology, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/tech-stack">
            <Button size="lg" variant="outline" className="group">
              すべての技術スタックを見る
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
