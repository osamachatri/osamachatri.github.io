import { FiGithub } from "react-icons/fi";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 px-4 border-t border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <p className="text-sm font-mono-ui text-slate-500 dark:text-slate-400">
            Â© {new Date().getFullYear()} Oussama Chatri
          </p>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Built with React, Tailwind & Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/osamachatri"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}



