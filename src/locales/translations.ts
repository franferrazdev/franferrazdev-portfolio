export type Language = "pt" | "en";

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: { role: string; greeting: string; cvBtn: string };
  about: { title: string; text: string; cardTitle: string; cardText: string };
  skills: { hard: string; soft: string };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
  };
}

// Dicionário de strings de interface
export const translations: Record<Language, TranslationSchema> = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Skills",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      role: "Desenvolvedora Front-End Júnior",
      greeting: "Olá, eu sou a Francielle Ferraz de Sousa",
      cvBtn: "Download CV",
    },
    about: {
      title: "Sobre Mim",
      text: "Desenvolvedora especialista no ecossistema React e Next.js. Como profissional neurodivergente (TEA), transformo hiperfoco, lógica apurada e atenção extrema aos detalhes em código limpo, estruturado e de alta qualidade. Atuo com máxima eficiência no modelo 100% remoto, entregando autonomia e comunicação escrita impecável.",
      cardTitle: "Foco e Execução",
      cardText:
        "Abordagem voltada à arquitetura limpa, padronização rigorosa de commits e documentação assertiva. Alta adaptabilidade ao ecossistema serverless e rotinas assíncronas de engenharia.",
    },
    skills: {
      hard: "Hard Skills",
      soft: "Soft Skills",
    },
    contact: {
      title: "Vamos Conversar",
      name: "Seu Nome",
      email: "Seu E-mail",
      message: "Sua mensagem",
      send: "Enviar Mensagem",
      success: "Mensagem enviada com sucesso!",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      role: "Junior Front-End Developer",
      greeting: "Hi, I am Francielle Ferraz de Sousa",
      cvBtn: "Download CV",
    },
    about: {
      title: "About Me",
      text: "Developer specializing in the React and Next.js ecosystem. As a neurodivergent profesional (ASD), I transform hyperfocus, sharp logic, and extreme attention to detail into clean, structured, and high-quality code. I operate with maximum efficiency in a 100% remote model, delivering autonomy and flawless written communination.",
      cardTitle: "Focus & Execution",
      cardText:
        "Clean architecture-driven approach, strict commit standartization, and assertive documentation. High adaptability to serverless ecosystems and asynchronous workflows.",
    },
    skills: {
      hard: "Technical Skills",
      soft: "Interpersonal Skills",
    },
    contact: {
      title: "Get in Touch",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      success: "Message sent successfully!",
    },
  },
};

// Objeto global de conexões
export const connections = {
  github: "https://github.com/franferrazdev",
  linkedin:
    "https://www.linkedin.com/in/francielle-ferraz-de-sousa-franferrazdev",
  email: "mailto:franferraz.dev@gmail.com",
  discord: "https://discord.com/users/1483132319668637858",
};
