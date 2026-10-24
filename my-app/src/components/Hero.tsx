import { Github } from "lucide-react";
import wasiIcon from "../assets/wasi.jpg";
import { buttonClass } from "./ui/buttonClass";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="mx-auto flex w-full max-w-[1120px] flex-wrap items-center gap-14 px-6 pt-20 pb-20 md:pt-24">
      <div className="flex flex-[1_1_300px] justify-center">
        <img
          src={wasiIcon}
          alt="プロフィール画像"
          className="block aspect-square w-[260px] rounded-[32px] border-[3px] border-ink object-cover shadow-hard-xl sm:w-[300px]"
        />
      </div>

      <div className="flex min-w-0 flex-[999_1_460px] flex-col gap-5">
        <span className="self-start rounded-full border-2 border-ink bg-white px-3.5 py-1.5 font-display text-sm font-bold">
          Software Engineer
        </span>
        <h1 className="text-4xl leading-tight sm:text-5xl">小阪 佳輝 | わしじゃよ</h1>
        <div className="flex flex-col gap-1 text-lg leading-[1.9]">
          <p>九州産業大学情報科学科在籍（3年生）</p>
          <p>バックエンドに現在興味あり</p>
        </div>
        <div className="mt-2 flex flex-wrap gap-3.5">
          <button onClick={() => scrollToSection("projects")} className={buttonClass("default", "lg")}>
            作品を見る →
          </button>
          <a
            href="https://github.com/wasijyayo"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass("outline", "lg")}
          >
            <Github className="h-[18px] w-[18px]" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
