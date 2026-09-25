import { ThemeToggle } from "@/components/ThemeToggle";
import { useLanguage } from "@/context/LanguageContext";
import { LangToggle } from "./components/LangToggle";

export default function App() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-bg-light dark:bg-bg-dark text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="absolute top-6 right-6 flex items-center gap-3">
        {/* Grade de Controles de Acessibilidade */}
        <LangToggle />
        <ThemeToggle />
      </div>
      <div className="text-center max-w-xl">
        <h1 className="text-3xl font-black tracking-tight text-brand-purple dark:text-brand-neon">
          franferrazdev-portfolio
        </h1>
        <h2 className="text-lg font-bold text-slate-600 dark:text-slate-300 mt-3">
          {t.hero.role}
        </h2>
        <p className="text-sm text-slate-400 dark:text-slate-500 mt-2">
          {t.contact.message}: Criando meu portfólio usando React e Tailwind
          CSS.
        </p>
      </div>
    </div>
  );
}
