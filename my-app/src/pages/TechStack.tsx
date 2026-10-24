import { Header } from "../components/Header";

type Level = "初級" | "中級" | "上級";

const techCategories: { category: string; technologies: { name: string; level: Level }[] }[] = [
  {
    category: "フロントエンド",
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
    technologies: [
      { name: "PostgreSQL", level: "中級" },
      { name: "Firestore", level: "中級" },
      { name: "MySQL", level: "中級" },
      { name: "Supabase", level: "中級" },
    ],
  },
  {
    category: "DevOps & クラウド",
    technologies: [
      { name: "AWS", level: "初級" },
      { name: "Vercel", level: "中級" },
      { name: "Cloudflare", level: "上級" },
      { name: "GitHub Actions", level: "上級" },
    ],
  },
  {
    category: "言語",
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
    technologies: [
      { name: "VS Code", level: "中級" },
      { name: "Figma", level: "初級" },
      { name: "Vite", level: "初級" },
      { name: "Notion", level: "初級" },
    ],
  },
];

const levelRank: Record<Level, number> = { 初級: 1, 中級: 2, 上級: 3 };

// ●の数でレベルを表す（色だけに頼らない）
function LevelDots({ level }: { level: Level }) {
  return (
    <span className="flex gap-[3px]" aria-hidden="true">
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={`h-2.5 w-2.5 rounded-full border-2 border-ink ${
            n <= levelRank[level] ? "bg-ink" : "bg-white"
          }`}
        />
      ))}
    </span>
  );
}

export function TechStack() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[1120px] flex-1 px-6 pt-18 pb-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl leading-tight sm:text-[52px]">技術スタック</h1>
            <p className="text-[17px] leading-[1.8]">
              これまでに習得した技術とスキルレベルをカテゴリー別にご紹介します
            </p>
          </div>
          <div className="flex flex-wrap gap-4 rounded-[14px] border-2 border-ink bg-white px-4.5 py-3 text-[13px] font-bold">
            {(["初級", "中級", "上級"] as Level[]).map((level) => (
              <span key={level} className="flex items-center gap-1.5">
                <LevelDots level={level} />
                {level}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category, index) => (
            <div
              key={category.category}
              className="overflow-hidden rounded-[20px] border-2 border-ink bg-white shadow-hard-lg"
            >
              <h2
                className={`border-b-2 border-ink px-5.5 py-4.5 text-xl ${
                  index % 2 === 0 ? "bg-accent" : "bg-butter"
                }`}
              >
                {category.category}
              </h2>
              <ul className="flex flex-col px-5.5 pt-2 pb-3.5">
                {category.technologies.map((tech) => (
                  <li
                    key={tech.name}
                    className="flex items-center justify-between gap-3 border-b border-dashed border-dash py-3 last:border-b-0"
                  >
                    <span className="font-bold">{tech.name}</span>
                    <span className="flex items-center gap-2 text-[13px] font-bold">
                      <LevelDots level={tech.level} />
                      <span className="w-7">{tech.level}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
