import { useEffect, useState } from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const events = [
  {
    title: "React Conf 2025",
    date: "2025年10月15日",
    location: "東京",
    type: "カンファレンス",
    role: "参加者",
    description: "最新のReact技術とベストプラクティスについて学びました。",
  },
  {
    title: "Tech Meetup Tokyo #42",
    date: "2025年9月20日",
    location: "オンライン",
    type: "ミートアップ",
    role: "スピーカー",
    description:
      "「TypeScriptで安全なアプリケーション開発」というテーマで登壇しました。",
  },
  {
    title: "Web Developer Summit 2025",
    date: "2025年7月8日",
    location: "大阪",
    type: "カンファレンス",
    role: "参加者",
    description:
      "モダンなWeb開発のトレンドとフレームワークについて学びました。",
  },
  {
    title: "Frontend Developers Meetup",
    date: "2025年5月12日",
    location: "東京",
    type: "ミートアップ",
    role: "参加者",
    description: "フロントエンド開発者コミュニティとのネットワーキング。",
  },
  {
    title: "Hackathon 2024",
    date: "2024年12月15-16日",
    location: "東京",
    type: "ハッカソン",
    role: "参加者",
    description: "24時間でプロトタイプを開発し、優秀賞を受賞しました。",
  },
  {
    title: "JavaScript Kaigi 2024",
    date: "2024年11月20日",
    location: "東京",
    type: "カンファレンス",
    role: "参加者",
    description: "JavaScriptエコシステムの最新動向について学習。",
  },
];

const getRoleColor = (role: string) => {
  switch (role) {
    case "スピーカー":
      return "bg-purple-100 text-purple-800 border-purple-300";
    case "参加者":
      return "bg-blue-100 text-blue-800 border-blue-300";
    case "オーガナイザー":
      return "bg-green-100 text-green-800 border-green-300";
    default:
      return "bg-slate-100 text-slate-800 border-slate-300";
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "カンファレンス":
      return "bg-orange-100 text-orange-800";
    case "ミートアップ":
      return "bg-green-100 text-green-800";
    case "ワークショップ":
      return "bg-blue-100 text-blue-800";
    case "ハッカソン":
      return "bg-red-100 text-red-800";
    default:
      return "bg-slate-100 text-slate-800";
  }
};

export function Events() {
  const [notionData, setNotionData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https//localhost:3000/api/events");
      const data = await res.json();
      console.log(data);
      setNotionData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-1 py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-center mb-4 text-slate-900">イベント参加履歴</h1>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            これまでに参加した技術イベント、カンファレンス、ミートアップの記録です
          </p>

          <div className="space-y-6">
            {events.map((event, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-slate-900 mb-2">
                        {event.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge
                        variant="secondary"
                        className={getTypeColor(event.type)}
                      >
                        {event.type}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={getRoleColor(event.role)}
                      >
                        {event.role}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-5 h-5 text-purple-600" />
              <h3 className="text-slate-900">参加統計</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  30+
                </div>
                <div className="text-sm text-slate-600">総イベント数</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-1">
                  15+
                </div>
                <div className="text-sm text-slate-600">カンファレンス</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">3</div>
                <div className="text-sm text-slate-600">登壇経験</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
