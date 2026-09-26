import { useEffect, useState, startTransition } from "react";
import { Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangToggle } from "@/components/LangToggle";

export function Navbar() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("");

  // Mapeamentos dos links de ancoragem interna de acordo com as seções da página
  const navLinks = [
    { label: t.nav.about, href: "#about", id: "about" },
    { label: t.nav.skills, href: "#skills", id: "skills" },
    { label: t.nav.projects, href: "#projects", id: "projects" },
    { label: t.nav.contact, href: "#contact", id: "contact" },
  ];

  //   Algoritmo de Rastreamento de Seção para One-Pages Portfólios
  useEffect(() => {
    const handleScrool = () => {
      const scrollPosition = window.scrollY + 160; // 160px de margem para ativar antes de bater no topo

      // Verifica se o usuário está no topo da página (Hero)
      if (window.scrollY < 300) {
        setActiveSection("");
        return;
      }

      // Descobre qual seção está cruzando a linha de ativação
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(link.id);
            break; // Para o laço assim que encontra a seção atual
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrool, { passive: true });
    //    Executa uma vez no carregamento inicial para validar a posição atual
    handleScrool();

    return () => window.removeEventListener("scroll", handleScrool);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-bg-light/70 dark:bg-bg-dark/70 backdrop-blur-md border border-b border-slate-200/40 dark:border-slate-900/40 flex items-center justify-center z-50 transition-colors duration-200">
      {/* Container Centralizado de Conteúdo */}
      <div className="w-full max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Branding / Logotipo */}
        <a
          href="#"
          className="flex items-center gap-2 text-sm font-black tracking-wider bg-linear-to-r from-brand-purple to-purple-400 dark:from-brand-neon dark:to-violet-400  bg-clip-text text-transparent uppercase cursor-pointer"
        >
          <Shield
            size={16}
            className="text-brand-purple dark:text-brand-neon"
          />
          franferrazdev
        </a>

        {/* Menu de Links (Escondido em telas muito pequenas, visível em sm:) */}
        <div className="hidden sm:flex items-center gap-6 h-16 text-xs font-bold text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => {
            const isCurrent = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative h-full flex items-center transition-colors duration-300 hover:text-brand-purple dark:hover:text-brand-neon ${
                  isCurrent ? "text-brand-purple dark:text-brand-neon" : ""
                }`}
              >
                {link.label}

                {/* Traço Horizontal que expande e acende na seção ativa */}
                <span
                  className={`absolute bottom-0 left-0 h-0.75 bg-brand-purple dark:bg-brand-neon rounded-t-full w-full transition-all duration-300 origin-center ${
                    isCurrent
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Bloco de Controles de Acessibilidade Integrados */}
        <div className="flex items-center gap-2.5">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
