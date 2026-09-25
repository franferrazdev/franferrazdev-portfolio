import { ThemeToggle } from "@/components/ThemeToggle";
import { LangToggle } from "./components/LangToggle";
import { HeroSection } from "./sections/HeroSection";
import { AboutMe } from "./sections/AboutMe";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ContactForm } from "./sections/ContactForm";

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-transparent text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      {/* Barra Superior de Controles de Acessibilidade */}
      <header className="w-full max-w-5xl mx-auto px-6 h-20 flex items-center justify-end gap-3 shrink-0">
        <LangToggle />
        <ThemeToggle />
      </header>

      {/* Área de Conteúdo Principal */}
      <main className="flex-1 w-full flex flex-col items-center justify-start pb-20">
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />

        <ContactForm />
      </main>
    </div>
  );
}
