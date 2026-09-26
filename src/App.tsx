import { HeroSection } from "./sections/HeroSection";
import { AboutMe } from "./sections/AboutMe";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ContactForm } from "./sections/ContactForm";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-transparent text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      {/* Barra Superior de Controles de Acessibilidade */}
      <Navbar />

      {/* Área de Conteúdo Principal */}
      <main className="flex-1 w-full flex flex-col items-center justify-start pb-20">
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
