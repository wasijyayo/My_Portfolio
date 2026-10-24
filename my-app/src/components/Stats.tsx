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
      title: "プロジェクト数",
      value: projectCount !== null ? `${projectCount}` : "...",
      link: "/projects",
    },
    {
      title: "開発期間",
      value: "4",
      unit: "年",
      link: "/career",
    },
    {
      title: "技術スタック",
      value: "22+",
      link: "/tech-stack",
    },
  ];

  return (
    <section id="stats" className="mx-auto w-full max-w-[1120px] px-6 pb-24">
      <h2 className="mb-9 text-4xl sm:text-[40px]">実績</h2>
      <div className="grid gap-5 sm:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.title}
            to={stat.link}
            className="flex flex-col gap-1 rounded-[20px] border-2 border-ink bg-white p-7 shadow-hard transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            <span className="font-display text-[52px] leading-tight font-extrabold">
              {stat.value}
              {stat.unit && <span className="text-[26px]">{stat.unit}</span>}
            </span>
            <span className="text-[15px] font-bold">{stat.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Stats;
