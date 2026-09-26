import { Shield, Globe, User, Mail, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { connections } from "@/locales/translations";

export function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-bg-light dark:bg-bg-dark border-t border-slate-200 dark:border-slate-900 mt-20 px-6 py-12 flex flex-col items-center justify-center transition-colors duration-200 shrink-0">
      {/* Contêiner Estrutural Simétrico e Centralizado */}
      <div className="w-full max-w-5xl flex flex-col">
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8 border-b border-slate-200 dark:border-slate-800/60">
          {/* Branding Técnico */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm font-black tracking-wider bg-linear-to-r from-brand-purple to-purple-400 dark:from-brand-neon dark:to-violet-400 bg-clip-text text-transparent uppercase">
              <Shield
                size={16}
                className="text-brand-purple dark:text-brand-neon shrink-0"
              />
              franferrazdev
            </div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-relaxed max-w-60 font-medium">
              {language === "pt"
                ? "Hub centralizado de engenharia de software, expondo arquiteturas limpas, depuração em tempo real e portfólio de produção front-end."
                : "Centralized software engineering hub showcasing clean architectures, real-time debugging, and fron-end production portfolios."}
            </p>
          </div>

          {/* Links de Navegabilidade */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-50 tracking-widest uppercase">
              {language === "pt" ? "Navegabilidade" : "Navigation"}
            </span>
            <div className="flex flex-col gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <a
                href="#about"
                className="hover:text-brand-purple dark:hover:text-brand-neon transition-colors cursor-pointer w-fit"
              >
                {t.nav.about}
              </a>
              <a
                href="#skills"
                className="hover:text-brand-purple dark:hover:text-brand-neon transition-colors cursor-pointer w-fit"
              >
                {t.nav.skills}
              </a>
              <a
                href="#projects"
                className="hover:text-brand-purple dark:hover:text-brand-neon transition-colors cursor-pointer w-fit"
              >
                {t.nav.projects}
              </a>
            </div>
          </div>

          {/* Conexão de Engenharia */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 tracking-widest uppercase">
              Engineers Connections
            </span>
            <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500 mt-1">
              <a
                href={connections.github}
                target="_blank"
                rel="noopener noreferrer"
                title="Acessar Portfólio Global no GitHub"
                className="hover:text-brand-purple dark:hover:text-brand-neon transition-colors cursor-pointer"
              >
                <Globe size={16} />
              </a>

              <a
                href={connections.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="Conectar Perfil Profissional no LinkedIn"
                className="hover:text-brand-purple dark:hover:text-brand-neon transition-colors cursor-pointer"
              >
                <User size={16} />
              </a>

              <a
                href={connections.email}
                target="_blank"
                rel="noopener noreferrer"
                title="Disparar Contato Corporativo via-Email"
                className="hover:text-brand-purple dark:hover:text-brand-neon transition-colors cursor-pointer"
              >
                <Mail size={16} />
              </a>

              <a
                href={connections.discord}
                target="_blank"
                rel="noopener noreferrer"
                title="Conectar via Discord"
                className="hover:text-brand-purple dark:hover:text-brand-neon transition-colors cursor-pointer"
              >
                <MessageSquare size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Direitos Autorais e Status do Sistema */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between pt-6 text-[10px] text-slate-400 dark:text-slate-500 font-medium gap-2">
          <span>
            &copy; {currentYear} Francielle Ferraz &bull; {t.footer.system}.{" "}
            {t.footer.copyright}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block">
            {t.footer.status}
          </span>
        </div>
      </div>
    </footer>
  );
}
