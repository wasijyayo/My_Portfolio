import { Briefcase, GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const timelineItems = [
  {
    year: "2016 - 2020",
    type: "education",
    title: "情報工学学士",
    company: "○○大学 情報工学部",
    location: "東京",
    description: "コンピュータサイエンスの基礎、アルゴリズム、データ構造、ソフトウェア工学を学習。",
    achievements: [
      "卒業研究: 機械学習を用いたWebアプリケーションのパフォーマンス最適化",
      "GPA: 3.8/4.0",
      "学部長賞受賞",
    ],
    technologies: [],
  },
  {
    year: "2021 - 2023",
    type: "work",
    title: "フロントエンド開発者",
    company: "Creative Web Solutions",
    location: "東京",
    description: "様々なクライアントプロジェクトでフロントエンド開発を担当。レスポンシブデザインとアクセシビリティを重視したWebアプリケーションを構築。",
    achievements: [
      "10以上のクライアントプロジェクトを成功裏に貢献",
      "社内のコーディング規約とベストプラクティスを策定",
      "新入社員向けのReact研修プログラムを作成",
    ],
    technologies: ["React", "Vue.js", "JavaScript", "CSS", "Node.js"],
  },
  {
    year: "2023 - 現在",
    type: "work",
    title: "シニアフロントエンド開発者",
    company: "Tech Innovations株式会社",
    location: "東京",
    description: "大規模なWebアプリケーションの設計と開発をリード。React、TypeScript、Next.jsを使用したプロジェクトを担当。",
    achievements: [
      "新規プロダクトの技術選定とアーキテクチャ設計を主導",
      "ページ読み込み速度を40%改善",
      "チームメンバー5名の技術メンタリング",
    ],
    technologies: ["React", "TypeScript", "Next.js", "GraphQL", "AWS"],
  },
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2024年6月",
  },
  {
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2023年9月",
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2022年11月",
  },
];

export function Career() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-1 py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-center mb-4 text-slate-900">経歴</h1>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            これまでの職歴と学歴をタイムライン形式でご紹介します
          </p>

          {/* タイムライン */}
          <div className="mb-12 relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300"></div>

            <div className="space-y-8">
              {timelineItems.map((item, index) => {
                const isWork = item.type === "work";
                const Icon = isWork ? Briefcase : GraduationCap;
                const iconColor = isWork ? "bg-blue-600" : "bg-green-600";
                const borderColor = isWork ? "border-blue-500" : "border-green-500";

                return (
                  <div key={index} className="relative pl-20">
                    <div
                      className={`absolute left-4 top-6 w-8 h-8 rounded-full ${iconColor} flex items-center justify-center z-10`}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>

                    <div className="absolute left-0 top-0 text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                      {item.year}
                    </div>

                    <Card className={`bg-white border-l-4 ${borderColor} mt-8`}>
                      <CardHeader>
                        <CardTitle className="text-slate-900">{item.title}</CardTitle>
                        <div className={`text-lg ${isWork ? "text-blue-600" : "text-green-600"} mb-2`}>
                          {item.company}
                        </div>
                        <div className="text-sm text-slate-600">{item.location}</div>
                        <CardDescription className="mt-4">{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-slate-700 mb-2">
                            {isWork ? "主な実績" : "主な成果"}
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                            {item.achievements.map((achievement, achIndex) => (
                              <li key={achIndex}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                        {item.technologies.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-slate-700 mb-2">使用技術</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 資格 */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-purple-600" />
              <h2 className="text-slate-900">資格</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-slate-900 text-lg">{cert.title}</CardTitle>
                    <CardDescription>
                      {cert.issuer} • {cert.date}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* キャリアサマリー */}
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-center text-slate-900 mb-6">キャリアサマリー</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">5+</div>
                <div className="text-sm text-slate-600">年の経験</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">3</div>
                <div className="text-sm text-slate-600">企業での実務</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">50+</div>
                <div className="text-sm text-slate-600">完成プロジェクト</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-1">3</div>
                <div className="text-sm text-slate-600">取得資格</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
