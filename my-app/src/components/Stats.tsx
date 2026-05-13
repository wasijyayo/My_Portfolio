import { FolderGit2, Calendar, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Stats() {
  const [projectCount, setProjectCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      const res = await fetch("/api/events");
      const data = await res.json();
      setProjectCount(data.length);
    };
    fetchCount();
  }, []);

  const stats = [
    {
      icon: FolderGit2,
      title: "プロジェクト数",
      value: projectCount !== null ? `${projectCount}` : "...",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      link: "/projects",
    },
    {
      icon: Calendar,
      title: "開発期間",
      value: "4年",
      color: "text-green-600",
      bgColor: "bg-green-100",
      link: "/career",
    },
    {
      icon: Code2,
      title: "技術スタック",
      value: "22+",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      link: "/tech-stack",
    },
  ];

  return (
    <section id="stats" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center mb-12 text-slate-900">実績</h2>
        <div className="grid md:grid-cols-3 gap-8">
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
