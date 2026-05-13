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

const techCategories = [
  {
    category: "フロントエンド",
    color: "border-blue-500",
    technologies: [
      { name: "React", level: "中級" },
      { name: "TypeScript", level: "中級" },
      { name: "Tailwind CSS", level: "中級" },
      { name: "HTML5/CSS3", level: "中級" },
      { name: "Next.js", level: "初級" },
    ],
  },
  {
    category: "バックエンド",
    color: "border-green-500",
    technologies: [
      { name: "Node.js", level: "中級" },
      { name: "Express.js", level: "中級" },
      { name: "Python", level: "中級" },
      { name: "FastAPI", level: "初級" },
      { name: "Firebase Functions", level: "初級" },
    ],
  },
  {
    category: "データベース",
    color: "border-purple-500",
    technologies: [
      { name: "PostgreSQL", level: "中級" },
      { name: "Firestore", level: "中級" },
      { name: "MySQL", level: "中級" },
      { name: "Supabase", level: "中級" },
    ],
  },
  {
    category: "DevOps & クラウド",
    description: "インフラストラクチャとデプロイメント",
    color: "border-orange-500",
    technologies: [
      { name: "AWS", level: "初級" },
      { name: "Vercel", level: "中級" },
      { name: "Cloudflare", level: "上級" },
      { name: "GitHub Actions", level: "上級" },
    ],
  },
  {
    category: "言語",
    color: "border-orange-500",
    technologies: [
      { name: "C", level: "初級" },
      { name: "C#", level: "中級" },
      { name: "Python", level: "中級" },
      { name: "JavaScript", level: "中級" },
      { name: "TypeScript", level: "中級" },
    ],
  },
  {
    category: "ツール & その他",
    color: "border-slate-500",
    technologies: [
      { name: "VS Code", level: "中級" },
      { name: "Figma", level: "初級" },
      { name: "Vite", level: "初級" },
      { name: "Notion", level: "初級" },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "エキスパート":
      return "bg-green-100 text-green-800 border-green-300";
    case "上級":
      return "bg-blue-100 text-blue-800 border-blue-300";
    case "中級":
      return "bg-yellow-100 text-yellow-800 border-yellow-300";
    default:
      return "bg-slate-100 text-slate-800 border-slate-300";
  }
};

export function TechStack() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-1 py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-center mb-4 text-slate-900">技術スタック</h1>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            これまでに習得した技術とスキルレベルをカテゴリー別にご紹介します
          </p>

          <div className="space-y-8">
            {techCategories.map((category, index) => (
              <Card
                key={index}
                className={`border-l-4 ${category.color} bg-white`}
              >
                <CardHeader>
                  <CardTitle className="text-slate-900">
                    {category.category}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                      >
                        <span className="text-slate-900">{tech.name}</span>
                        <Badge
                          variant="outline"
                          className={`ml-2 ${getLevelColor(tech.level)}`}
                        >
                          {tech.level}
                        </Badge>
                      </div>
                    ))}
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
