import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:scale-110 hover:border-brand-purple dark:hover:border-brand-neon transition-all duration-300 shadow-md cursor-pointer"
      title={theme === "light" ? "Ativar Modo Escuro" : "Ativar Modo Claro"}
    >
      {theme === "light" ? (
        <Moon size={18} className="animate-pulse" />
      ) : (
        <Sun size={18} className="animate-pulse" />
      )}
    </button>
  );
}
