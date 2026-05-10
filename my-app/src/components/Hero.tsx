import wasiIcon from "../assets/wasi.jpg";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 flex justify-center px-4">
      <div className="bg-white rounded-2xl shadow-md p-10 max-w-3xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={wasiIcon}
            alt="プロフィール画像"
            className="w-36 h-36 object-cover rounded-full flex-shrink-0 shadow-md"
          />
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <h1 className="text-3xl font-bold text-slate-900 m-0">
              小阪 佳輝 | わしじゃよ
            </h1>
            <p className="text-blue-500 font-medium text-lg">
              Software Engineer
            </p>
            <p className="text-slate-600 text-sm">
              九州産業大学情報科学科在籍（3年生）
            </p>
            <p className="text-slate-600 text-sm">バックエンドに現在興味あり</p>
            <div className="flex gap-3 mt-2">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-slate-900 hover:bg-slate-700 text-white"
              >
                作品を見る →
              </Button>
              <Button variant="outline">GitHub</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
