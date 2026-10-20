# 🌌 franferrazdev-portfolio 🚀

<div align="center">
<!-- Badges de Tecnologias -->
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"  align="center" alt="React Icon" title="React" height="20" width="30" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" title="TypeScript" align="center" alt="TypeScript Icon" height="20" width="30" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" title="Tailwind CSS"  align="center" alt="TailwindCSS Icon" height="20" width="30" />
![Tests](https://img.shields.io/badge/tests-Jest%20%7C%20Playwright-green?style=flat-square)
![CI](https://img.shields.io/github/actions/workflow/status/franferrazdev/franferrazdev-portfolio/playwright.yml?style=flat-square&label=CI%2FCD)
</div>

---

## 🗺️ Language Choice · Escolha de Idioma

- [Clique aqui para ler em Português (Abaixo)](#-português)
- [Clique here to read in English (Below)](#-english)

---

## 🇧🇷 Português

### 📝 Descrição

Hub centralizado e portfólio de engenharia de software focado em **Desenvolvimento Front-End**. A aplicação expõe componentes altamente otimizados e síncronos, com suporte completo e acessibilidade (Light/Dark Mode), internacionalização em tempo real (Bilingue) e foco em **resistência de código** através de uma esteira robusta de testes automatizados unitários e end-to-end (E2E).

Como profissional neurodivergente **(TEA)**, este projeto traduz hiperfoco, lógica apurada e atenção extrema aos detalhes em uma arquitetura limpa, modular e componentizada de alta fidelidade.

### 🔗 Link de Produção

🚀 Acesse a aplicação completa ao vivo: **[Visualizar Portfólio na Vercel](https://franferrazdev-portfolio.vercel.app/)**

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para clonar e rodar o simulador em sua máquina de desenvolvimento:

1. **Clone o repositório:**

```bash
git clone https://github.com/franferrazdev/franferrazdev-portfolio.git
cd franferrazdev-portfolio
```

2. **Instale as dependências:**

```bash
pnpm install
```

3. **Inicie o servidor de desenvolvimento:**

```bash
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

4. **Execução de Testes:**

- **Testes Unitários (Jest):** `pnpm test` ou `pnpm test:watch`
- **Testes End-to-End (Playwright):** `npx playwright test`

---

### 🎥 Demonstração Visual e Âncoras do Sistema

As capturas abaixo ilustram a experiência inicial do usuário, a componentização responsiva e os fluxos de captação de leads projetados para o ecossistema do portfólio:

#### 1. Hero Section (Apresentação Inicial e Terminal Fluid)

Visão principal do portfólio destacando a digitação fluida e dinâmica, controles de internacionalização instantânea e os seletores de acessibilidade (Light/Dark Mode).

<div align="center">
  <img src="public/showcase/portfolio-hero.png?v=4" alt="Portfolio Preview" width="100%" style="border-radius: 12px; border: 1px solid #1e293b;" />
</div>

#### 2. Vitrine de Engenharia (Grid de Projetos em Destaque)

Exibição modular dos repositórios encapsulados em cards tridimensionais reativos, destacando as badges técnicas de testes e links de produção.

<div align="center">
  <img src="/public/showcase/portfolio-projects-grid.png" alt="Grid de Projetos do Portfólio" width="100%" />
</div>

#### 3. Terminal de Captura Asincrônica (Formulário de Contato)

Formulário dinâmico integrado à API externa do Formspree, contendo validações de estados, feedbacks de sucesso instantâneos e proteção de campos.

<div align="center">
  <img src="/public/showcase/portfolio-contact-form.png" alt="Formulário de Contato do Portfólio" width="100%" />
</div>

### 🛠️ Diferenciais Técnicos e Arquitetura

- **IntersectionObserver Fluido:** Gerenciamento centralizado em `src/App.tsx` para sincronizar rotas hash, animações de scroll da esquerda para a direita e marcadores da Navbar em tempo real no eixo Y.
- **Navegação Inteligente Síncrona:** Componente `ScrollArrow` calibrado com travas de concorrência (`useRef`) para garantir navegação cronológica precisa e suave sem pular blocos.
- **Formulário de Contato Assíncrono:** Integração real de captação de mensagens com o Formspree via requisição nativa `fetch`, encapsulada sob camadas seguras de variáveis de ambiente do Vite (`.env`).

### 🧪 Pirâmide de Testes Automatizados e CI/CD

Este ambiente possui uma suíte de testes rigorosa para blindar o código contra erros regressivos:

1.  **Testes Unitários e de Integração (Jest & React Testing Library):** Mapeamento do ciclo de vida dos cliques da `Navbar`, tradução de strings no `LanguageContext` e mutação de classes do Tailwind no `ThemeContext`.
2.  **Testes End-to-End (Playwright):** Simulação automatizada da jornada do recrutador de ponta a ponta (aguarda o boot da `LoadingScreen`, executa cliques forçados em elementos flutuantes quicantes, chaveia idiomas e dispara o formulário de contato).
3.  **Integração Contínua (GitHub Actions):** Automação em nuvem (`playwright.yml`) que roda a suíte de testes em cada Pull Request antes de liberar o merge na branch principal (`main`).

---

## 🧠 Desafios e Aprendizados

O desenvolvimento deste hub centralizado de engenharia consolidou competências avançadas em otimização de interfaces reativas e resiliência de código:

- **Sincronização de Viewport com IntersectionObserver:** Arquitetar um gerenciamento de estados centralizado no `src/App.tsx` para monitorar o scroll reativo exigiu o domínio de APIs nativas do navegador. Essa abordagem garante a mutação fluida de hashes na URL, disparos de animações direcionais e atualização dos marcadores da Navbar em tempo real no eixo Y, sem causar gargalos de renderização ou travamentos de layout.
- **Navegação Síncrona Imune a Concorrência:** Implementar o componente `ScrollArrow` demandou soluções sólidas de controle de concorrência. Utilizando blocos de reatividade isolados com `useRef`, foi possível blindar as travas de cliques rápidos, garantindo que a rolagem cronológica salte de seção em seção de forma linear e elástica, impedindo o pulo acidental de blocos curtos de conteúdo.
- **Cultura de Testes Multicamadas e Automação de CI:** Estruturar uma pirâmide de testes completa unificando Jest, React Testing Library e Playwright E2E expandiu significativamente minha visão de governança de código. Isolar o ciclo de vida de contextos globais (`LanguageContext` e `ThemeContext`) e criar robôs que simulam a jornada real do recrutador desde o boot da tela de carregamento até o disparo do formulário de contato via Formspree — tudo isso orquestrado por um pipeline automatizado de CI no GitHub Actions — garante uma interface blindada contra regressões visuais em ambiente de produção.

---

## 🤝 Quer conversar sobre uma oportunidade ou agendar uma entrevista técnica?

Se você gostou da arquitetura dos meus projetos, da cobertura de testes automatizados com Jest e Playwright ou quer trocar uma ideia sobre desenvolvimento front-end, meu terminal está sempre aberto! Você pode me encontrar diretamente pelos canais oficiais:

- **E-mail Profissional:** [franferraz.dev@gmail.com](mailto:franferraz.dev@gmail.com)
- **LinkedIn Oficial:** [Francielle Ferraz de Sousa](https://www.linkedin.com/in/francielle-ferraz-de-sousa-franferrazdev)

Vamos construir soluções eficientes e robustas juntos! 🚀

---

## 🇺🇸 English

### 📝 Description

A centralized software engineering hub and portfolio tailored for **Front-End Development**. The application exhibits highly optimized, synchronous components featuring comprehensive accessibility support (Light/Dark Mode), real-time internationalization (Bilingual), and an absolute focus on **code resilience** driven by a robust pipeline of automated unit and end-to-end (E2E) tests.

As a neurodivergent professional **(ASD)**, this project converts hyperfocus, sharp logic, and extreme attention to detail into a clean, modular, and componentized architecture of high fidelity.

### 🔗 Production Link

🚀 Access the live running application: **[View Portfolio on Vercel](https://franferrazdev-portfolio.vercel.app/)**

## 🚀 How to Run Locally

Follow these steps to clone and run the technical simulator on your local workspace:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/franferrazdev/franferrazdev-portfolio.git
   cd franferrazdev-portfolio
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Run the development environment:**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) inside your browser.

4. **Executing Tests:**
   - **Unit Tests (Jest):** `pnpm test`
   - **End-to-End Tests (Playwright):** `npx playwright test`

---

### 🎥 Visual Presentation & System Anchors

The captures below illustrate the initial user experience, responsive component layouts, and async lead capturing workflows engineered for the portfolio ecosystem:

#### 1. Hero Section (Dynamic Splash and Fluid Terminal)

Primary viewport view showcasing real-time fluid typography typing arrays, immediate internationalization dictionaries, and accessible dynamic theme triggers (Light/Dark Mode).

<div align="center">
  <img src="public/showcase/portfolio-hero.png?v=4" alt="Preview Portfolio" width="100%" style="border-radius: 12px; border: 1px solid #1e293b;" />
</div>

#### 2. Engineering Showcase (Featured Projects Grid)

Modular layout exhibiting repositories encapsulated inside reactive 3D cards, highlighting tech test badges and live demo targets.

<div align="center">
  <img src="/public/showcase/portfolio-projects-grid.png" alt="Portfolio Projects Grid Layout" width="100%" />
</div>

#### 3. Asynchronous Lead Terminal (Contact Form Section)

Dynamic form integrated with the external Formspree API, featuring real-time input validation, structural toast feedbacks, and security masks.

<div align="center">
  <img src="/public/showcase/portfolio-contact-form.png" alt="Portfolio Contact Form Section" width="100%" />
</div>

### 🛠️ Technical Highlights & Architecture

- **Fluid IntersectionObserver:** Centralized hook management within `src/App.tsx` to handle synchronized hash routes, viewport scroll animations, and top navigation bar states seamlessly across the Y-axis.
- **Synchronous Smart Navigation:** `ScrollArrow` component reinforced with reactivity blocks (`useRef`) to assure sequential element steps without skipping short content layouts.
- **Asynchronous Lead Capturing:** Production-ready mail integration via native `fetch` targeting Formspree API engines, entirely protected by structural Vite metadata environment files (`.env`).

### 🧪 Automated Testing Suites & CI/CD

This workspace maintains a strict testing matrix to safeguard interfaces against breaking shifts:

1.  **Unit & Integration Tests (Jest & React Testing Library):** Direct checks on `Navbar` link clicking lifecycles, full bilingual translation responses in `LanguageContext`, and style assignments in `ThemeContext`.
2.  **End-to-End Tests (Playwright):** Simulates the recruiter's path (waits for `LoadingScreen` system boots, performs strict clicks on bouncing components, toggles languages, and validates form dispatches).
3.  **Continuous Integration (GitHub Actions):** Automation pipeline (`playwright.yml`) that triggers and executes tests on every remote Pull Request prior to allowing final main repository merges.

---

## 🧠 Technical Challenges and Learnings

Building this centralized engineering hub solidified core frontend system architectures, performance tuning, and multi-layered testing paradigms:

- **Viewport Synchronization via IntersectionObserver:** Engineering a centralized hook architecture within `src/App.tsx` to monitor layout scrolling patterns required a deep mastery of native browser APIs. This setup guarantees seamless URL hash shifts, smooth directional viewport transitions, and real-time navigation link state updates across the Y-axis without inducing performance lag or layout breaking.
- **Concurrency-Immune Synchronous Navigation:** Developing the reactive `ScrollArrow` component required strict operational control solutions. Utilizing isolated boundaries with `useRef` tokens effectively protected the application against rapid clicking race conditions, assuring that chronological transitions move linearly across semantic elements without skipping shorter section layouts.
- **Multi-Tier Testing Matrix and Workflow CI Automation:** Establishing a complete automated verification matrix by intertwining Jest, React Testing Library, and Playwright E2E advanced my system design practices. Validating global application contexts (`LanguageContext` and `ThemeContext`) alongside creating actions that simulate a recruiter's path—waiting for the loading screen system boot, handling strict floating component clicks, and testing form dispatches via Formspree API—all managed by an automated GitHub Actions CI pipeline, provides full regression protection across modern deployments.

---

## 🤝 Want to discuss an opportunity or schedule a technical interview?

If you liked the architecture of my systems, the automated test matrix using Jest and Playwright, or want to chat about front-end engineering, my workspace is always open! You can reach me directly through my official networks:

- **Professional Email:** [franferraz.dev@gmail.com](mailto:franferraz.dev@gmail.com)
- **Official LinkedIn:** [Francielle Ferraz de Sousa](https://www.linkedin.com/in/francielle-ferraz-de-sousa-franferrazdev)

Let's build efficient, robust software together! 🚀

---

<div align="center">
  <sub>Desenvolvido com hiperfoco por <strong>Francielle Ferraz</strong> · © 2026</sub>
</div>
