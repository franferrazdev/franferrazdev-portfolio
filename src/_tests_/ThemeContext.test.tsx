import { jest } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import { useTheme, ThemeProvider } from "@/context/ThemeContext";

// Componente fictício para interagir com o Hook de Tema nos testes
function TestThemeComponent() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <button data-testid="btn-theme-toggle" onClick={toggleTheme}>
        Alternar Tema
      </button>
    </div>
  );
}

describe("ThemeContext - Pente Fino de Aparência (Light/Dark)", () => {
  beforeEach(() => {
    // Garante que o elemento HTML comece limpo a cada ciclo de teste
    document.documentElement.classList = "";
    localStorage.clear();
  });

  it("deve inicializar com o tema padrão definido na aplicação", () => {
    render(
      <ThemeProvider>
        <TestThemeComponent />
      </ThemeProvider>,
    );

    const currentTheme = screen.getByTestId("current-theme").textContent;

    // Valida se o estado inicial coincide com a classe injetada na árvore DOM
    if (currentTheme === "dark") {
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    } else {
      expect(document.documentElement.classList.contains("dark")).toBe(false);
    }
  });

  it("deve alternar dinamicamente as classes utilitárias do Tailwind ao clicar no botão", () => {
    render(
      <ThemeProvider>
        <TestThemeComponent />
      </ThemeProvider>,
    );

    const themeSpan = screen.getByTestId("current-theme");
    const initialTheme = themeSpan.textContent;
    const toggleButton = screen.getByTestId("btn-theme-toggle");

    // Simula o clique do recrutador para chavear a aparência do site
    fireEvent.click(toggleButton);

    if (initialTheme === "light") {
      expect(themeSpan.textContent).toBe("dark");
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    } else {
      expect(themeSpan.textContent).toBe("light");
      expect(document.documentElement.classList.contains("dark")).toBe(false);
    }
  });
});
