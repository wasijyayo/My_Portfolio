import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import wasiIcon from "../assets/wasi.jpg";

const navItems = [
  { name: "ホーム", path: "/" },
  { name: "プロジェクト", path: "/projects" },
  { name: "技術スタック", path: "/tech-stack" },
  { name: "経歴", path: "/career" },
];

const pillClass = (isActive: boolean) =>
  `rounded-full border-2 px-4 py-2.5 font-display text-sm font-bold transition-colors ${
    isActive ? "border-ink bg-accent" : "border-transparent hover:border-ink"
  }`;

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-white">
      <div className="mx-auto max-w-[1120px] px-6 py-3.5">
        <div className="flex items-center justify-between gap-3">
          {/* ロゴ */}
          <Link to="/" className="flex items-center gap-2.5 font-display text-xl font-extrabold">
            <img
              src={wasiIcon}
              alt=""
              className="h-10 w-10 rounded-full border-2 border-ink object-cover"
            />
            わしじゃよ
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={pillClass(isActive)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* モバイルメニューボタン */}
          <button
            className="rounded-xl border-2 border-ink p-2 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="メニューを開閉"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* モバイルナビゲーション */}
        {mobileMenuOpen && (
          <nav className="mt-4 flex flex-col gap-2 pb-2 md:hidden">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={pillClass(isActive)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
