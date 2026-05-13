import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "ホーム", path: "/" },
  { name: "プロジェクト", path: "/projects" },
  { name: "技術スタック", path: "/tech-stack" },
{ name: "経歴", path: "/career" },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
              わし
            </div>
            <span className="font-bold text-slate-900 text-lg hidden sm:block">
              わしじゃよ_portfolio
            </span>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={
                      isActive
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "text-slate-600 hover:text-slate-900"
                    }
                  >
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* モバイルナビゲーション */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      isActive
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
