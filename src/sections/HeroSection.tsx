import { Mail, MessageSquare, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { connections } from "@/locales/translations";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12 min-h-[calc(100vh-80px)]">
      {/* Bloco de Textos e Conexões */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6 order-2 md:order-1">
        {/* Saudação com o Nome Completo */}
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-800 dark:text-slate-100 leading-tight">
          {t.hero.greeting}
        </h1>

        {/* Bloco com o Nome da Profissão */}
        <div className="w-fit overflow-hidden border-r-4 border-brand-purple dark:border-brand-neon pr-1 whitespace-nowrap animate-typing">
          <span className="text-xl sm:text-2xl font-extrabold bg-linear-to-r from-brand-purple to-purple-400 dark:from-brand-neon dark:to-violet-400 bg-clip-text text-transparent">
            {t.hero.role}
          </span>
        </div>

        {/* Links de Redes Sociais */}
        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 mt-2">
          <a
            href={connections.github}
            target="_blank"
            rel="noopener noreferrer"
            title="Github Global"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-bg-light/40 dark:bg-slate-900/40 hover:scale-110 hover:text-brand-purple dark:text-brand-neon hover:border-brand-purple dark:hover:border-brand-neon transition-all duration-300 cursor-pointer shadow-xs"
          >
            <FaGithub size={20} />
          </a>

          <a
            href={connections.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profissional"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-bg-light/40 dark:bg-slate-900/40 hover:scale-110 hover:text-brand-purple dark:text-brand-neon hover:border-brand-purple dark:hover:border-brand-neon transition-all duration-300 cursor-pointer shadow-xs"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href={connections.email}
            target="_blank"
            rel="noopener noreferrer"
            title="Contato via E-mail"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-bg-light/40 dark:bg-slate-900/40 hover:scale-110 hover:text-brand-purple dark:text-brand-neon hover:border-brand-purple dark:hover:border-brand-neon transition-all duration-300 cursor-pointer shadow-xs"
          >
            <Mail size={20} />
          </a>

          <a
            href={connections.discord}
            target="_blank"
            rel="noopener noreferrer"
            title="Comunidade Discord"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-bg-light/40 dark:bg-slate-900/40 hover:scale-110 hover:text-brand-purple dark:text-brand-neon hover:border-brand-purple dark:hover:border-brand-neon transition-all duration-300 cursor-pointer shadow-xs"
          >
            <MessageSquare size={20} />
          </a>
        </div>

        {/* Botão de Download CV */}
        <button className="mt-4 flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-brand-purple text-white dark:bg-brand-neon dark:text-slate-950 hover:scale-105 shadow-md shadow-purple-600/10 dark:shadow-none transition-all duration-300 cursor-pointer">
          <Download size={16} />
          {t.hero.cvBtn}
        </button>
      </div>

      {/* Bloco de Imagem com Animação de Flutuação */}
      <div className="flex-1 flex justify-center order-1 md:order-2 animate-float">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-purple-500/20 bg-linear-to-tr from-brand-purple/20 to-cyan-400/20 p-2 shadow-2xl overflow-hidden">
          <img
            src="/avatar.png"
            alt="Francielle Ferraz de Sousa"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            className="w-full h-full object-cover rounded-full bg-slate-200 dark:bg-slate-900"
          />
          <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-600/10 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}
