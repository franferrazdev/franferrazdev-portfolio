export type Language = "pt" | "en";

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: { role: string; headline: string; greeting: string; cvBtn: string };
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
  footer: {
    bio: string;
    navTitle: string;
    status: string;
    copyright: string;
    system: string;
  };
  loading: {
    booting: string;
    footer: string;
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
      role: "Desenvolvedora Front-End Junior",
      headline:
        "Construindo Aplicações Web de Alta Performance, Seguras e Testadas.",
      greeting: "Olá, eu sou a Francielle Ferraz de Sousa",
      cvBtn: "Download CV",
    },
    about: {
      title: "Sobre Mim",
      text: "Desenvolvedora autodidata Front-End Junior especializada no ecossistema React e Next.js. Crio interfaces modernas, perfomáticas, organizadas e acessíveis, dominando o gerenciamento de estado otimização de renderização e foco total na experiência do usuário. Como profissional neurodivergente (TEA), transformo hiperfoco, lógica apurada e atenção extrema aos detalhes em código limpo, estruturado e de alta qualidade, , entregando autonomia e soluções de engenharia ponta a ponta.",
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
    footer: {
      bio: "Hub centralizado de engenharia de software, expondo arquiteturas limpas, depuração em tempo real e portfólio full-stack.",
      navTitle: "Navegabilidade",
      status: "Simulador Técnico Ativo",
      copyright: "Todos os direitos reservados.",
      system: "Sistema do Portfólio",
    },
    loading: {
      booting: "Inicializando Sistema...",
      footer: "Inicialização do Núcleo \\ Ambiente Totalmente Testado",
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
      headline:
        "Building High-Performance, Secure and Tested Web Applications.",
      greeting: "Hi, I am Francielle Ferraz de Sousa",
      cvBtn: "Download CV",
    },
    about: {
      title: "About Me",
      text: "Self-taught Junior Front-End Developer specializing in the React and Next.js ecosystem. I build modern, high-performance, organized, and accessible interfaces, mastering state management and rendering optimization with a strong focus on user experience. As a neurodivergent professional (ASD), I build hyperfocus, sharp logic, and extreme attention to detail into clean, structured, high-quality code, delivering autonomy and end-to-end engineering solutions.",
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
    footer: {
      bio: "Centralized software engineering hub showcasing clean architectures, real-time debugging, and full-stack production portfolios.",
      navTitle: "Navigation",
      status: "Technical Simulator Active",
      copyright: "All rights reserved.",
      system: "Portfolio System",
    },
    loading: {
      booting: "System Booting...",
      footer: "Core Init \\ Fully Tested Environment",
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
