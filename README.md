# 🌌 franferrazdev-portfolio 🚀

<div align="center">
<!-- Badges de Tecnologias -->
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"  align="center" alt="React Icon" height="20" width="30" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" align="center" alt="TypeScript Icon" height="20" width="30" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"  align="center" alt="TailwindCSS Icon" height="20" width="30" />
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

🚀 Acesse a aplicação completa ao vivo: **[Visualizar Portfólio na Vercel](https://vercel.app)** _(Link temporário - Ajuste após o deploy)_

### 🎥 Demonstração Visual (Project Showcase)

<div align="center">
  <img src="public/portfolio-hero.png?v=3" alt="Portfolio Preview" width="100%" style="border-radius: 12px; border: 1px solid #1e293b;" />
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

## 🇺🇸 English

### 📝 Description

A centralized software engineering hub and portfolio tailored for **Front-End Development**. The application exhibits highly optimized, synchronous components featuring comprehensive accessibility support (Light/Dark Mode), real-time internationalization (Bilingual), and an absolute focus on **code resilience** driven by a robust pipeline of automated unit and end-to-end (E2E) tests.

As a neurodivergent professional **(ASD)**, this project converts hyperfocus, sharp logic, and extreme attention to detail into a clean, modular, and componentized architecture of high fidelity.

### 🔗 Production Link

🚀 Access the live running application: **[View Portfolio on Vercel](https://vercel.app)** _(Temporary link - Adjust after deployment)_

### 🎥 Visual Demonstration (Project Showcase)

<div align="center">
  <img src="public/portfolio-hero.png?v=3" alt="Preview Portfolio" width="100%" style="border-radius: 12px; border: 1px solid #1e293b;" />
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

<div align="center">
  <sub>Desenvolvido com hiperfoco por <strong>Francielle Ferraz</strong> · © 2026</sub>
</div>
