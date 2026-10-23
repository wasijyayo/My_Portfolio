import { Link } from "react-router-dom";

const techHighlights = [
  {
    category: "フロントエンド",
    technologies: ["React", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Next.js"],
  },
  {
    category: "バックエンド & DB",
    technologies: ["Node.js", "Express.js", "Python", "PostgreSQL", "Supabase"],
  },
  {
    category: "クラウド & DevOps",
    technologies: ["AWS", "Vercel", "Cloudflare", "GitHub Actions"],
  },
  {
    category: "言語 & ツール",
    technologies: ["C#", "Python", "JavaScript", "VS Code", "Figma"],
  },
];

export function TechStackPreview() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-[1120px] px-6 py-22">
        <h2 className="mb-9 text-4xl sm:text-[40px]">技術スタック</h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {techHighlights.map((tech) => (
            <div
              key={tech.category}
              className="flex flex-col gap-3.5 rounded-[20px] bg-cream p-6 text-ink"
            >
              <h3 className="text-lg">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border-2 border-ink bg-white px-3 py-1 text-[13px] font-bold"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/tech-stack"
          className="mt-7 inline-block py-3 font-display font-extrabold text-accent hover:underline"
        >
          ぜんぶ見る →
        </Link>
      </div>
    </section>
  );
}
