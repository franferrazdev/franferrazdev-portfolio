import { useLanguage } from "@/context/LanguageContext";
import { FolderGit2, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function ProjectsSection() {
  const { language } = useLanguage();

  // Dados dos Meus 3 Projetos
  const projectsData = [
    {
      title: "Live Coding Bug Quiz",
      image: "/projects/welcome-screen.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      github: "https://github.com/franferrazdev/live-coding-bug-quiz",
      live: "https://live-coding-bug-quiz-one.vercel.app/",
      pt: "Simulador técnico interativo homologado para testes de Code Review, depuração de erros em tempo real e avaliação de serioridade front-end.",
      en: "Interactive technical simulator certified for Code Review testing, real-time debugging, and fron-end seniority assesment.",
    },
    {
      title: "School Management Dashboard",
      image: "/projects/login-screen.png",
      tags: [
        "Next.js 14",
        "Prisma 7",
        "Supabase",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      github: "https://github.com/franferrazdev/school-management-dashboard",
      live: "https://school-management-dashboard-woad.vercel.app/",
      pt: "Plataforma corporativa full-stack de gestão escolar, Business Intelligence, controle analítico de notas e gerenciamento de chamadas.",
      en: "Full-stack corporate school management platform featuring Business Intelligence, analytical grades control, and attendance tracking.",
    },
    {
      title: "Night Owl E-commerce",
      image: "/projects/night-owl-screen.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Context API", "Stripe"],
      github: "https://github.com/franferrazdev/night-owl-ecommerce",
      live: "https://night-owl-ecommerce.vercel.app/",
      pt: "Plataforma de vendas online completa contendo catálogo reativo, gerenciamento avançado de carrinho e checkout fluido.",
      en: "Complete online sales platform featuring a reactive catalog, advanced cart management, and a seamless checkout experience.",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full max-w-5xl mx-auto px-6 py-16 flex flex-col gap-8 transition-colors duration-200"
    >
      {/* Cabeçalho da Seção */}
      <div className="flex items-center gap-3 border-b border-slate-200/60 dark:border-slate-800/60 pb-4 w-full">
        <div className="p-2 rounded-xl bg-purple-500/10 text-brand-purple dark:text-brand-neon shrink-0">
          <FolderGit2 size={22} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-800 dark:text-white uppercase">
          {language === "pt" ? "Projetos em Destaque" : "Featured Projects"}
        </h2>
      </div>

      {/* Grid Responsiva de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch w-full mt-2">
        {projectsData.map((project) => (
          <div
            key={project.title}
            className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md hover:scale-105 hover:border-brand-purple dark:hover:border-brand-neon hover:shadow-xl hover:shadow-purple-600/5 dark:hover:shadow-none transition-all duration-300 group"
          >
            {/* Bloco Superior (Imagem, Título, Descrição e Badges) */}
            <div className="flex flex-col gap-4">
              {/* Banner Visual do Projeto */}
              <div className="relative w-full h-44 bg-linear-to-br from-brand-purple/10 to-purple-900/5 dark:from-purple-950/40 dark:to-slate-900/20 border-b border-slate-100 dark:border-slate-800/50 overflow-hidden flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    // Oculta a tag de imagem se o arquivo não for encontrado
                    e.currentTarget.style.display = "none";
                  }}
                  className="w-full h-full object-cover opacity-75 dark:opacity-60 contrast-95 group-hover:opacity-100 group-hover:contrast-100  group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 will-change-transform"
                />
              </div>

              <div className="flex flex-col gap-3 px-5">
                <h3 className="text-lg font-extrabold text-slate-800 dark:text-white group-hover:text-brand-purple dark:group-hover:text-brand-neon transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {language === "pt" ? project.pt : project.en}
                </p>

                {/* Tags de Tecnologias */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 border border-slate-200/40 dark:border-slate-800/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bloco Inferior (Links de Ação) */}
            <div className="flex items-center gap-3 mt-6 mx-5 pb-5 pt-4 border-t border-slate-200 dark:border-slate-800/40">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-brand-purple dark:hover:text-brand-neon transition-colors cursor-pointer"
              >
                <FaGithub size={14} />
                Code
              </a>
              {/* Link de Live Demo */}
              <span className="text-[10px] text-slate-300 dark:text-slate-700 select-none">
                |
              </span>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-brand-purple dark:hover:text-brand-neon transition-colors cursor-pointer"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
