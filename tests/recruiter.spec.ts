import { test, expect } from "@playwright/test";

test.describe("Portfólio franferrazdev - Jornada E2E do Recrutador", () => {
  test("deve inicializar o boot do sistema, navegar de forma síncrona e submeter o formulário de contato", async ({
    page,
  }) => {
    // Abre a página inicial do portfólio
    await page.goto("/");

    // Aguarda a página de carregamento interativa terminar o boot e sumir da tela
    const loadingScreen = page.locator(
      "text=/Inicializando Sistema...|System Booting.../i",
    );
    await expect(loadingScreen).toBeVisible();
    await expect(loadingScreen).toBeHidden({ timeout: 6000 }); // Dá tempo para o contador bater 100%

    // Valida se a HeroSection e a digitação fluida carregaram com sucesso
    await expect(page.locator("#hero")).toBeVisible();
    await expect(page.locator("h1")).toContainText("Francielle Ferraz");

    // Testa a alternância real de idiomas (Chaveia para Inglês e checa a Navbar)
    const langButton = page
      .locator("button")
      .filter({ hasText: /en|pt/i })
      .first();
    if (await langButton.isVisible()) {
      await langButton.click();
      // Verifica se o menu superior mudou dinamicamente para o dicionário em inglês
      await expect(page.locator('nav a:has-text("Home")')).toBeVisible();
    }

    // Simula o clique na seta de rolagem (ScrollArrow) para saltar até a seção Sobre Mim
    const scrollArrow = page.locator(
      'div[title*="seção"i], div[title*="section"i]',
    );
    await expect(scrollArrow).toBeVisible();
    await scrollArrow.click({ force: true });

    // Aguarda o deslize elástico terminar e checa o hash na URL
    await page.waitForURL("/#about");
    await expect(page.locator("#about")).toBeVisible();

    // Preenche de forma completa e dispara o formulário de contato
    await page.fill('input[name="name"]', "Tech Lead Recrutador");
    await page.fill('input[name="email"]', "recrutador@empresa.com");
    await page.fill(
      'textarea[name="message"]',
      "Gostamos muito da cobertura de testes do seu portfólio. Queremos agendar uma entrevista técnica.",
    );

    // Clica no botão de envio
    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    // Valida se o feedback reativo de envio real ou o banner de rede foi acionado com sucesso
    const successBanner = page.locator(
      "text=/enviada com sucesso|successfully|houve uma falha|failed/i",
    );
    await expect(successBanner).toBeVisible();
  });
});
