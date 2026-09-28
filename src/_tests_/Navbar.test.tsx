import { jest } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "@/components/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

// Função utilitária para renderizar o componente envelopado nos contextos necessários
const renderNavbar = () => {
  return render(
    <LanguageProvider>
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    </LanguageProvider>,
  );
};

describe("Navbar Component - Pente Fino Unitário", () => {
  it("deve renderizar o logotipo franferrazdev corretamente", () => {
    renderNavbar();
    const logoElement = screen.getByText(/franferraz/i);
    expect(logoElement).toBeInTheDocument();
  });

  it("deve disparar a trava global de scroll (lockScroll) ao criar em um link do menu", () => {
    // Cria um espião para monitorar se o evento global foi despachado pelo navegador
    const dispatchEventSpy = jest.spyOn(window, "dispatchEvent");
    renderNavbar();

    // Seleciona o link de Sobre (About) e simula o clique do recrutador
    const aboutLink = screen.getByRole("link", { name: /Sobre|About/i });
    fireEvent.click(aboutLink);

    // Verifica se a lógica manual de lockScroll foi chamada com sucesso
    expect(dispatchEventSpy).toHaveBeenCalledWith(expect.any(CustomEvent));

    // Confirma se o nome do evento disparado foi exatamente o esperado pelo App.tsx
    const customEvent = dispatchEventSpy.mock.calls.find(
      (call) => call[0] instanceof CustomEvent && call[0].type === "lockScroll",
    )?.[0] as CustomEvent;

    expect(customEvent).toBeDefined();
    expect(customEvent.type).toBe("lockScroll");

    dispatchEventSpy.mockRestore();
  });
});
