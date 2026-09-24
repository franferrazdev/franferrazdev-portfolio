import { ThemeToggle } from "@/components/ThemeToggle";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-black tracking-tight text-brand-purple dark:text-brand-neon">
          franferrazdev-portfolio
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
          Criando meu portfólio usando React e Tailwind CSS.
        </p>
      </div>
    </div>
  );
}
