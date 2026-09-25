import { User, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function AboutMe() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto px-6 py-16 flex flex-col gap-8 transition-colors duration-200"
    >
      {/* Cabeçalho da Seção */}
      <div className="flex items-center gap-3 border-b border-slate-200/60 dark:border-slate-800/60 pb-4 w-full">
        <div className="p-2 rounded-xl bg-purple-500/10 text-brand-purple dark:text-brand-neon shrink-0">
          <User size={22} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-800 dark:text-white uppercase">
          {t.about.title}
        </h2>
      </div>

      {/* Conteúdo Institucional */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Bloco de Texto Principal */}
        <div className="md:col-span-8 flex flex-col gap-4">
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium whitespace-pre-line">
            {t.about.text}
          </p>
        </div>

        {/* Card de Destaque Técnico Lateral */}
        <div className="md:col-span-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md flex flex-col gap-3 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-brand-purple dark:text-brand-neon uppercase tracking-wider">
            <Sparkles size={14} />
            {t.about.cardTitle}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
            {t.about.cardText}
          </div>
        </div>
      </div>
    </section>
  );
}
