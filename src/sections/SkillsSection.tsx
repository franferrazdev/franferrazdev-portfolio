import {
  Code2,
  Brain,
  Atom,
  Terminal,
  Database,
  FileCode,
  Layers,
  ShieldCheck,
  MessageSquareCode,
  Clock,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function SkillsSection() {
  const { t, language } = useLanguage();

  // Mapeamento das Hard Skills Principais
  const hardSkills = [
    { name: "React", icon: <Atom size={14} /> },
    { name: "TypeScript", icon: <FileCode size={14} /> },
    { name: "Next.js", icon: <Layers size={14} /> },
    { name: "Tailwind CSS", icon: <Terminal size={14} /> },
    { name: "Prisma ORM", icon: <Database size={14} /> },
    { name: "PostgreSQL", icon: <Database size={14} /> },
  ];

  // Mapeamento das Soft Skills com Suporte a Tradução Inline
  const softSkills = [
    {
      pt: "Hiperfoco Analítico",
      en: "Analytical Hyperfocus",
      icon: <Brain size={14} />,
    },
    {
      pt: "Atenção Meticulosa",
      en: "Meticulous Attention",
      icon: <ShieldCheck size={14} />,
    },
    {
      pt: "Comunicação Assíncrona",
      en: "Asynchronous Communication",
      icon: <MessageSquareCode size={14} />,
    },
    {
      pt: "Autonomia & Execução",
      en: "Autonomy & Execution",
      icon: <Clock size={14} />,
    },
    { pt: "Criatividade", en: "Creativity", icon: <Sparkles size={14} /> },
    {
      pt: "Curiosidade & Vontade de Aprender",
      en: "Curiosity & Eagerness to Learn",
      icon: <Lightbulb size={14} />,
    },
  ];

  return (
    <section
      id="skills"
      className="w-full max-w-5xl mx-auto px-6 py-16 flex flex-col gap-12 transition-colors duration-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Hard Skills */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800/60 pb-3 w-full">
            <div className="text-brand-purple dark:text-brand-neon shrink-0">
              <Code2 size={20} />
            </div>
            <h3 className="text-lg font-black tracking-tight text-slate-800 dark:text-white uppercase">
              {t.skills.hard}
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {hardSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-bg-light/40 dark:bg-slate-900/40 backdrop-blur-md text-xs font-bold text-slate-700 dark:text-slate-300 hover:scale-105 hover:border-brand-purple dark:hover:border-brand-neon hover:text-brand-purple dark:hover:text-brand-neon transition-all duration-300 cursor-default shadow-xs"
              >
                <span className="text-slate-400 dark:text-slate-500">
                  {skill.icon}
                </span>
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800/60 pb-3 w-full">
            <div className="text-brand-purple dark:text-brand-neon shrink-0">
              <Brain size={20} />
            </div>
            <h3 className="text-lg font-black tracking-tight text-slate-800 dark:text-white uppercase">
              {t.skills.soft}
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <div
                key={skill.en}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-bg-light/40 dark:bg-slate-900/40 backdrop-blur-md text-xs font-bold text-slate-700 dark:text-slate-300 hover:scale-105 hover:border-brand-purple dark:hover:border-brand-neon hover:text-brand-purple dark:hover:text-brand-neon transition-all duration-300 cursor-default shadow-xs"
              >
                <span className="text-slate-400 dark:text-slate-500">
                  {skill.icon}
                </span>
                {language === "pt" ? skill.pt : skill.en}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
