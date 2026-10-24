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

const summary = [
  { value: "4年+", label: "プログラミング歴" },
  { value: "5+", label: "ハッカソン参加回数" },
  { value: "11+", label: "成果物数" },
];

export function Career() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-[880px] flex-1 px-6 pt-18 pb-28">
        <div className="mb-10 flex flex-col gap-3">
          <h1 className="text-4xl leading-tight sm:text-[52px]">経歴</h1>
          <p className="text-[17px] leading-[1.8]">
            これまでの職歴と学歴をタイムライン形式でご紹介します
          </p>
        </div>

        {/* キャリアサマリー */}
        <div className="mb-18 grid gap-4 sm:grid-cols-3">
          {summary.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-1 rounded-[20px] border-2 border-ink bg-white p-5.5 shadow-hard"
            >
              <span className="font-display text-[40px] leading-tight font-extrabold">
                {item.value}
              </span>
              <span className="text-sm font-bold">{item.label}</span>
            </div>
          ))}
        </div>

        {/* タイムライン */}
        <ol className="flex flex-col gap-10">
          {timelineItems.map((item, index) => {
            const isLatest = index === timelineItems.length - 1;
            return (
              <li key={item.year} className="flex flex-wrap items-start gap-5">
                <div
                  className={`flex h-24 w-24 flex-none items-center justify-center rounded-full border-[3px] border-ink font-display text-[22px] font-extrabold shadow-hard ${
                    isLatest ? "bg-accent" : "bg-white"
                  }`}
                >
                  {item.year}
                </div>
                <div className="flex min-w-0 flex-[999_1_320px] flex-col gap-3 rounded-[20px] border-2 border-ink bg-white p-6 shadow-hard-lg">
                  <span className="self-start rounded-full border-2 border-ink px-3 py-1 text-[13px] font-bold">
                    {item.organization}
                  </span>
                  <h2 className="text-2xl">{item.title}</h2>
                  <p className="text-[15px] leading-[1.9]">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border-2 border-ink bg-cream px-2.5 py-0.5 text-xs font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
