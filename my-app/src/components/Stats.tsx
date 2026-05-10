import { FolderGit2, Users, Calendar, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
const stats = [
  {
    icon: FolderGit2,
    title: "プロジェクト数",
    value: "50+",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    link: "/projects",
  },
  {
    icon: Users,
    title: "イベント参加数",
    value: "30+",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    link: "/events",
  },
  {
    icon: Calendar,
    title: "開発期間",
    value: "5年+",
    color: "text-green-600",
    bgColor: "bg-green-100",
    link: "/career",
  },
  {
    icon: Code2,
    title: "技術スタック",
    value: "25+",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    link: "/tech-stack",
  },
];

export function Stats() {
  return (
    <section id="stats" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center mb-12 text-slate-900">実績</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const content = (
              <>
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full ${stat.bgColor} flex items-center justify-center`}
                >
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600">{stat.title}</div>
              </>
            );

            if (stat.link) {
              return (
                <Link
                  key={index}
                  to={stat.link}
                  className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer"
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-lg shadow-sm"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Stats;
