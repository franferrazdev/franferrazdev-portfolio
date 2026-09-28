import { render, screen, fireEvent } from "@testing-library/react";
import { useLanguage, LanguageProvider } from "@/context/LanguageContext";

// Componente de teste fictício (Mock Component) para interagir com o Hook de idioma
function TestLanguageComponent() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div>
      <span data-testid="current-lang">{language}</span>
      <h1 data-testid="nav-home">{t.nav.home}</h1>
      <button data-testid="btn-toggle" onClick={toggleLanguage}>
        Mudar Idioma
      </button>
    </div>
  );
}

describe("LanguageContext - Pente Fino de Internacionalização", () => {
  it("deve carregar inicialmente no idioma padrão em português (pt)", () => {
    render(
      <LanguageProvider>
        <TestLanguageComponent />
      </LanguageProvider>,
    );

    // Verifica se o estado inicial é 'pt' e se o texto renderizado está em português
    expect(screen.getByTestId("current-lang").textContent).toBe("pt");
    expect(screen.getByTestId("nav-home").textContent).toBe("Início");
  });

  it("deve alternar dinamicamente os metadados de texto ao mudar o idioma para inglês (en)", () => {
    render(
      <LanguageProvider>
        <TestLanguageComponent />
      </LanguageProvider>,
    );

    // Localiza o botão e simula o clique do recrutador para chavear o idioma
    const toggleButton = screen.getByTestId("btn-toggle");
    fireEvent.click(toggleButton);

    // Valida se o estado foi para 'en' e se o título do menu virou 'Home' em inglês
    expect(screen.getByTestId("current-lang").textContent).toBe("en");
    expect(screen.getByTestId("nav-home").textContent).toBe("Home");
  });
});
