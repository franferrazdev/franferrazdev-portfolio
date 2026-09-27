import { useEffect, useState } from "react";
import { Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const { t } = useLanguage();

  const [progress, setProgress] = useState(0);
  const [isFadeOut, setIsFadeOut] = useState(false);

  useEffect(() => {
    // Cronômetro de simulação de carregamento do sistema
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Incrementos aleatórios para simular leitura real de pacotes do sistema
        const increment = Math.floor(Math.random() * 12) + 4;
        const nextProgress = prev + increment;

        if (nextProgress >= 100) {
          clearInterval(interval);

          // Aguarda 400ms no 100% para o usuário ler o sucesso antes do fade-out
          setTimeout(() => {
            setIsFadeOut(true);
            // Aguarda os 500ms da animação de opacidade do Tailwind para desmontar o componente
            setTimeout(onLoadingComplete, 500);
          }, 400);

          return 100;
        }
        return nextProgress;
      });
    }, 80); // Velocidade do ciclo de carregamento

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-dark text-white transition-opacity duration-500 ease-in-out ${
        isFadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Container Central */}
      <div className="flex flex-col items-center gap-6 w-full max-w-xs px-4">
        {/* Branding Técnico com Animação de Pulso */}
        <div className="flex flex-col items-center gap-2 animate-pulse">
          <Shield size={36} className="text-brand-neon" />
          <span className="text-sm font-black tracking-widest bg-linear-to-r from-brand-neon to-violet-400 bg-clip-text text-transparent uppercase">
            franferrazdev
          </span>
        </div>

        {/* Barra de Progresso Digital e Contador */}
        <div className="w-full flex flex-col gap-2 mt-4">
          <div className="flex items-center justify-between text-[10px] font-mono tracking-wider text-slate-400 uppercase select-none">
            <span>{t.loading.booting}</span>
            <span className="font-bold text-brand-neon">{progress}%</span>
          </div>

          <div className="w-full h-1.5 bg-slate-900 rounded-full border border-slate-800/40 p-0.5 overflow-hidden">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-linear-to-r from-brand-purple to-brand-neon rounded-full transition-all duration-150 ease-out shadow-md shadow-purple-500/20"
            />
          </div>
        </div>

        {/* Rodapé do Terminal Dinâmico */}
        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-2 text-center select-none">
          {t.loading.footer}
        </span>
      </div>
    </div>
  );
}
