import { HeroSection } from "./sections/HeroSection";
import { AboutMe } from "./sections/AboutMe";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ContactForm } from "./sections/ContactForm";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { useEffect, useRef } from "react";
import { ScrollArrow } from "./components/ScrollArrow";

export default function App() {
  // Trava lógica estável de referência para ignorar colisões no scroll
  const isLocked = useRef(false);
  /* Algoritmo que ativa as animações ao rolar a página com micro-tolerância para garantir que o React carregou 100% dos elementos na árvore DOM */
  useEffect(() => {
    let globalObserver: IntersectionObserver | null = null;

    // Escuta cliques na seta flutuante para trancar checagens de scroll por 800ms
    const handleLock = () => {
      isLocked.current = true;
      setTimeout(() => {
        isLocked.current = false;
      }, 800);
    };

    window.addEventListener("lockScroll", handleLock);

    const initObserver = () => {
      const sections = document.querySelectorAll("section");

      // Adiciona a classe de preparação em todas as seções automaticamente
      sections.forEach((section) => section.classList.add("reveal-section"));

      globalObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Dispara o surgimento da esquerda para a direita e mantém a seção visível permanentemente após o primeiro impacto
              entry.target.classList.add("active");
            } else {
              entry.target.classList.remove("active");
            }

            if (!entry.isIntersecting || isLocked.current) return;

            // Atualiza a URL do navegador em tempo real com a seção atual
            const id = entry.target.id;
            if (id) {
              window.history.replaceState(null, "", `/#${id}`);

              window.dispatchEvent(
                new CustomEvent("sectionChange", {
                  detail: id,
                }),
              );
            }
          });
        },
        // Faixa vervical que garante a captura das sessões ao frear
        { rootMargin: "-10% 0px -10% 0px", threshold: 0.01 },
      );

      sections.forEach((section) => globalObserver?.observe(section));
    };

    // Aguarda 100 milissegundos para que todas as seções terminem a montagem inicial
    const timeoutId = setTimeout(initObserver, 100);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("lockScroll", handleLock);
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

      <ScrollArrow />
    </div>
  );
}
