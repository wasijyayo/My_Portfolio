import { GraduationCap } from "lucide-react";
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

const timelineItems = [
  {
    year: "2022",
    title: "プログラミング開始",
    organization: "高校2年生",
    description:
      "Pythonで双六やブロック崩しを作り始める。ライブラリや外部ツールは何も知らない状態で、純粋なコードを書いていた時期。WEB系に触りだしたのは短大に入ってから。",
    technologies: ["Python"],
  },
  {
    year: "2024",
    title: "短大入学・WEB系へ転向",
    organization: "短大1年生",
    description:
      "入学当初はUnityでゲーム制作。初ハッカソンでトラウマを植え付けられ、そこからWEB系の道へ逃げる。",
    technologies: ["Unity", "C#", "HTML", "CSS", "JavaScript"],
  },
  {
    year: "2025",
    title: "ハッカソン本格参戦",
    organization: "短大2年生",
    description:
      "2年になりハッカソンへの参加頻度が大幅に増える。JavaScriptを武器に複数のハッカソンへ出場。毎回惜しいところで受賞を逃す。編入試験で大変だった一年",
    technologies: ["JavaScript", "React", "Node.js"],
  },
  {
    year: "2026",
    title: "九州産業大学 3年次編入",
    organization: "九州産業大学 情報科学科",
    description:
      "九州産業大学情報科学科に3年次編入。就職に向けて開発スキルを上げるためイベントに沢山参加したい。",
    technologies: ["React", "TypeScript", "Next.js"],
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
              {timelineItems.map((item, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-4 top-6 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center z-10">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>

                  <div className="absolute left-0 top-0 text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                    {item.year}
                  </div>

                  <Card className="bg-white border-l-4 border-green-500 mt-8">
                    <CardHeader>
                      <CardTitle className="text-slate-900">
                        {item.title}
                      </CardTitle>
                      <div className="text-lg text-green-600 mb-2">
                        {item.organization}
                      </div>
                      <CardDescription className="mt-4">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {item.technologies.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-slate-700 mb-2">
                            使用技術
                          </h4>
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
              ))}
            </div>
          </div>

          {/* キャリアサマリー */}
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-center text-slate-900 mb-6">
              キャリアサマリー
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  4年+
                </div>
                <div className="text-sm text-slate-600">プログラミング歴</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">5+</div>
                <div className="text-sm text-slate-600">ハッカソン参加回数</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  11+
                </div>
                <div className="text-sm text-slate-600">成果物数</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
