import React, { useState } from "react";
import { Mail, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ContactForm() {
  const { t } = useLanguage();

  // Estados para gerenciar os campos de formulário e feedback de envio
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Manipulação de envio do formulário simulando comportamento assíncrono
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    // Simula uma chamada de API / Serviço de e-mail
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Limpa os campos após o envio com sucesso
      setName("");
      setEmail("");
      setMessage("");

      // Some com o alerta de sucesso após 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="w-full max-w-5xl mx-auto px-6 py-16 flex flex-col gap-8 transition-colors duration-200"
    >
      {/* Cabeçalho da Seção */}
      <div className="flex items-center gap-3 border-b border-slate-200/60 dark:border-slate-800/60 pb-4 w-full">
        <div className="p-2 rounded-xl bg-purple-500/10 text-brand-purple dark:text-brand-neon shrink-0">
          <Mail size={22} />
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-800 dark:text-white uppercase">
            {t.contact.title}
          </h2>
        </div>

        {/* Container Centralizado do Formulário */}
        <div className="w-full max-w-xl mx-auto mt-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md shadow-xs relative overflow-hidden"
          >
            {/* Campo: Nome */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {t.contact.name}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-purple dark:focus:border-brand-neon focus:ring-2 focus:ring-purple-500/10 dark:focus:ring-brand-neon/10 transition-all duration-200 disabled:opacity-50"
              />
            </div>

            {/* Campo: E-mail */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {t.contact.email}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-purple dark:focus:border-brand-neon focus:ring-2 focus:ring-purple-500/10 dark:focus:ring-brand-neon/10 transition-all duration-200 disabled:opacity-50"
              />
            </div>

            {/* Campo: Mensagem */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {t.contact.message}
              </label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-purple dark:focus:border-brand-neon focus:ring-2 focus:ring-purple-500/10 dark:focus:ring-brand-neon/10 transition-all duration-200 resize-none disabled:opacity-50"
              />
            </div>

            {/* Alerta Dinâmico de Sucesso Bilíngue */}
            {isSuccess && (
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl border border-e-mist-200 dark:border-emerald-900/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold transition-all duration-350 animate-fade-in animate-pulse">
                <CheckCircle2 size={16} className="shrink-0" />
                {t.contact.success}
              </div>
            )}

            {/* Botão de Envio */}
            <button className="mt-2 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-brand-purple text-white dark:bg-brand-neon dark:text-slate-950 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-purple-600/10 dark:shadow-none transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-full">
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                </>
              ) : (
                <>
                  <Send size={14} />
                  {t.contact.send}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
