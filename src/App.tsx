import { HeroSection } from "./sections/HeroSection";
import { AboutMe } from "./sections/AboutMe";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ContactForm } from "./sections/ContactForm";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { useEffect } from "react";

export default function App() {
  // Algoritmo que ativa as animações ao rolar a página com micro-tolerância para garantir que o React carregou 100% dos elementos na árvore DOM
  useEffect(() => {
    let globalObserver: IntersectionObserver | null = null;

    const initObserver = () => {
      const sections = document.querySelectorAll("section");

      // Adiciona a classe de preparação em todas as seções automaticamente
      sections.forEach((section) => section.classList.add("reveal-section"));

      globalObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Dispara o surgimento da esquerda para a direita
              entry.target.classList.add("active");

              // Atualiza a URL do navegador em tempo real com a seção atual
              const id = entry.target.id;
              if (id) {
                window.history.replaceState(null, "", `#${id}`);

                // Comunica à Navbar de forma nativa qual link deve acender o traço roxo
                const navEvent = new CustomEvent("sectionChange", {
                  detail: id,
                });
                window.dispatchEvent(navEvent);
              }
            } else {
              // Remove a classe ao sair do centro da tela (eixo Y) para permitir reanimação infinita
              entry.target.classList.remove("active");
            }
          });
        },
        // Faz a classe active ser adicionada ao entrar na faixa e removida ao sair
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
      );

      sections.forEach((section) => globalObserver?.observe(section));
    };

    // Aguarda 100 milissegundos para que todas as seções terminem a montagem inicial
    const timeoutId = setTimeout(initObserver, 100);

    return () => {
      clearTimeout(timeoutId);
      globalObserver?.disconnect();
    };
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col bg-transparent text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      {/* Barra Superior de Controles de Acessibilidade */}
      <Navbar />

      {/* Área de Conteúdo Principal */}
      <main className="flex-1 w-full flex flex-col items-center justify-start pt-16">
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
