import React, { createContext, useContext, useState, useEffect } from "react";
import type { Language, TranslationSchema } from "@/locales/translations";
import { translations } from "@/locales/translations";

interface LanguageContextType {
  language: Language;
  t: TranslationSchema;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Inicializa o estado lendo a memória do navegador ou adota 'pt' como padrão
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("franferrazdev_lang");
      return (stored === "pt" || stored === "en" ? stored : "pt") as Language;
    }
    return "pt";
  });

  // Salva a preferência do usuário toda vez que ele alternar o idioma
  useEffect(() => {
    localStorage.setItem("franferrazdev_lang", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  // Carrega dinamicamente o bloco correspondente de textos do dicionário
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook customizado com verificação estrita de escopo
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage deve ser usado obrigatoriamente dentro de um LanguageProvider",
    );
  }
  return context;
}
