import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by 小阪佳輝
          </p>
          <p className="text-sm">© 2026 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
