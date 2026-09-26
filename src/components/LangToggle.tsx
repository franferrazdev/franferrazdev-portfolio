import { useLanguage } from "@/context/LanguageContext";

export function LangToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-bg-light/50 dark:bg-slate-900/50 backdrop-blur-md text-xs font-black tracking-wider text-slate-700 dark:text-slate-300 hover:scale-110 hover:border-brand-purple dark:hover:border-brand-neon transition-all duration-300 shadow-md cursor-pointer uppercase"
      title={language === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      {language === "pt" ? "EN" : "PT"}
    </button>
  );
}
