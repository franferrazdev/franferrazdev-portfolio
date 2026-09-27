import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollArrow() {
  const [activeSection, setActiveSection] = useState("hero");

  // Lista ordenada das seções do portfólio para calcular os saltos estruturados
  const sectionsOrder = ["hero", "about", "skills", "projects", "contact"];

  useEffect(() => {
    const handleSectionChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setActiveSection(customEvent.detail);
    };

    window.addEventListener("sectionChange", handleSectionChange);
    return () =>
      window.removeEventListener("sectionChange", handleSectionChange);
  }, []);

  const handleArrowClick = () => {
    const currentIndex = sectionsOrder.indexOf(activeSection);

    // Dispara um sinal global avisando o App.tsx para ignorar os sensores durante o deslizamento
    window.dispatchEvent(new CustomEvent("lockScroll"));

    // Se estiver na última seção (Contato), rola de volta para o topo absoluto (Hero)
    if (currentIndex === sectionsOrder.length - 1) {
      setActiveSection("hero"); // Atualiza imediatamente para que o próximo clique saiba que está no topo
      window.history.replaceState(null, "", "#hero");
      window.dispatchEvent(
        new CustomEvent("sectionChange", { detail: "hero" }),
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Caso contrário, localiza a próxima seção da fila e salta para ela descontando a Navbar fixa
    const nextSectionId = sectionsOrder[currentIndex + 1];
    const nextElement = document.getElementById(nextSectionId);

    if (nextElement) {
      // Atualiza o estado no clique para o Intersection não "roubar" a vez de seções menores
      setActiveSection(nextSectionId);

      //   Atualiza a URL do navegador em sincronia com o clique
      window.history.replaceState(null, "", `#${nextSectionId}`);

      //   Dispara o evento de comunicação com sucesso para a Navbar acender na mesma hora
      window.dispatchEvent(
        new CustomEvent("sectionChange", { detail: nextSectionId }),
      );

      const offsetPosition = nextElement.offsetTop - 70; // Desconta a altura da Navbar
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const isLastSection = activeSection === "contact";

  return (
    <div
      onClick={handleArrowClick}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex flex-col items-center justify-center gap-1 p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-bg-light/60 dark:bg-bg-dark/60 backdrop-blur-md text-slate-400 dark:text-slate-50 hover:text-brand-purple dark:hover:text-brand-neon transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer animate-bounce select-none"
      title={isLastSection ? "Voltar ao topo" : "Próxima seção"}
    >
      {/* Corpo do indicador de rolagem */}
      <div className="w-4 h-7 rounded-full border-2 border-slate-300 dark:border-slate-700 flex justify-center p-1">
        <div
          className={`w-1 h-1.5 rounded-full bg-brand-purple dark:bg-brand-neon transition-all duration-300 ${
            isLastSection ? "translate-y-0" : "translate-y-1"
          }`}
        />
      </div>
      {isLastSection ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
    </div>
  );
}
