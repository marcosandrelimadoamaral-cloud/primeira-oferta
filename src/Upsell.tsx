import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, PlayCircle, Star, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { trackInitiateCheckout } from './lib/fbpixel';

const Highlight = ({ children, className = "" }: any) => (
  <span className={`bg-[#fde047] px-2 py-0.5 rounded-sm font-semibold box-decoration-clone ${className}`}>{children}</span>
);

export default function Upsell() {
  const navigate = useNavigate();

  useEffect(() => {
    // Hack the browser history so that the back button triggers the downsell
    window.history.pushState(null, '', window.location.href);
    const handlePopState = () => {
      window.history.pushState(null, '', window.location.href);
      navigate('/downsell');
    };
    window.addEventListener('popstate', handlePopState);

    // Desktop exit intent (mouse leaves the top of the browser window)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        navigate('/downsell');
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fcfaf0] to-white font-sans selection:bg-yellow-200 pb-12">
      {/* 1. URGÊNCIA */}
      <div className="bg-red-600 text-white text-center py-3 px-4 font-bold uppercase tracking-wide text-[13px] sm:text-sm relative z-20 shadow-md animate-pulse">
        Não feche esta página, seu kit ainda não está completo
      </div>

      <div className="max-w-3xl mx-auto px-4 pt-12">
        {/* 2. HEADLINE PRINCIPAL */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-6 leading-tight tracking-tight drop-shadow-sm"
        >
          Espera! Ele vai aprender a ler... mas você <span className="text-[#ec008c]">também quer que ele escreva bem, né?</span>
        </motion.h1>

        {/* 3. SUBHEADLINE */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-center text-slate-600 font-medium mb-10 px-2"
        >
          Com o <Highlight>Grafismo Fonético</Highlight>, seu filho vai aprender a reconhecer os sons e ler as primeiras palavras.<br/><br/>Mas tem uma coisa que a maioria das mães descobre só depois: de nada adianta ler se a mão não consegue reproduzir. A letra sai tremida, torta, e a criança começa a frustrar.
        </motion.p>
        
        {/* 4. MOCKUP VISUAL (Corrigido da LP Oficial) */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.15 }}
           className="mb-12 relative"
        >
           <img 
             src="https://educacaokids.com.br/wp-content/uploads/2025/05/MOCKUP-PRINCIPAL-GRAFOMOTRICIDADE.webp" 
             alt="Mockup do Kit Grafomotricidade" 
             className="w-full max-w-2xl mx-auto drop-shadow-xl hover:scale-105 transition-transform duration-500" 
           />
        </motion.div>

        {/* 5. BENEFÍCIOS */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border-[3px] border-[#ede9f6] mb-10 text-left max-w-2xl mx-auto">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#ec008c] mt-0.5 shrink-0" />
              <span className="text-slate-700 text-lg font-medium"><strong>A letra sai tremida e ilegível?</strong> Em poucas semanas a mão fica firme</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#ec008c] mt-0.5 shrink-0" />
              <span className="text-slate-700 text-lg font-medium"><strong>Ele faz força e cansa rápido ao escrever?</strong> O treino progressivo resolve isso</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#ec008c] mt-0.5 shrink-0" />
              <span className="text-slate-700 text-lg font-medium"><strong>Tudo em 10 minutos por dia</strong>, pode fazer junto com o Grafismo Fonético</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#ec008c] mt-0.5 shrink-0" />
              <span className="text-slate-700 text-lg font-medium"><strong>Atividades lúdicas</strong> que ele vai pedir para fazer de novo</span>
            </li>
          </ul>
        </div>

        {/* 7. IMAGENS REAIS DE BENEFÍCIOS/TRAÇOS DA LP */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <img src="https://educacaokids.com.br/wp-content/uploads/2025/05/Cordenacao-Motora-Fina.webp" alt="Coordenação" className="w-full h-auto rounded-2xl shadow-md border-[3px] border-white hover:scale-105 transition-transform" />
          <img src="https://educacaokids.com.br/wp-content/uploads/2025/05/Menino-Escrevendo.webp" alt="Criança Escrevendo" className="w-full h-auto rounded-2xl shadow-md border-[3px] border-white hover:scale-105 transition-transform" />
          <img src="https://educacaokids.com.br/wp-content/uploads/2025/05/Lapiz-ideia-e-Folhas.webp" alt="Atividades" className="w-full h-auto rounded-2xl shadow-md border-[3px] border-white hover:scale-105 transition-transform hidden md:block" />
        </div>

        {/* BLOCO DE LÓGICA (Mantendo o estilo colorido e infantil/amigável) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#6b52a1] text-white rounded-3xl p-8 text-center mb-10 shadow-2xl relative overflow-hidden ring-4 ring-[#ede9f6]"
        >
          <div className="relative z-10">
            <p className="text-xl md:text-2xl font-bold mb-4 drop-shadow-md">Grafismo Fonético ensina a <span className="text-yellow-300">ler ✓</span></p>
            <p className="text-xl md:text-2xl font-bold mb-8 drop-shadow-md">Grafomotricidade treina a mão para <span className="text-yellow-300">escrever ✓</span></p>
            <div className="max-w-xs mx-auto h-1 bg-white/20 rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl font-black text-yellow-300 drop-shadow-lg mb-2">Juntos, seu filho aprende a ler E a colocar no papel, alfabetização de verdade.</p>
            <p className="text-lg md:text-xl font-bold text-white drop-shadow-md">Mães que levam os dois juntos chegam ao resultado 2x mais rápido.</p>
          </div>
        </motion.div>

        {/* 8. OFERTA / CHECKOUT */}
        <div className="bg-white rounded-3xl p-8 mb-6 border-[4px] border-[#3b82f6] shadow-xl text-center relative mt-12">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3b82f6] text-white px-6 py-2 rounded-full font-bold tracking-wider text-sm shadow-md flex items-center gap-2 whitespace-nowrap">
            <ShieldCheck className="w-5 h-5" /> Adicionado ao seu pedido, sem novo pagamento
           </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mt-4 mb-2">Complete a alfabetização do seu filho hoje</h2>
          <p className="text-slate-500 font-medium text-lg">De <span className="line-through">R$57,00</span></p>
          <p className="text-slate-700 font-extrabold mb-1 mt-2">Por apenas</p>
          <div className="text-6xl md:text-7xl font-black text-[#ec008c] mb-6 drop-shadow-sm">R$16,90</div>
          
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://lastlink.com/p/C89979E7A/checkout-payment/"
            onClick={() => trackInitiateCheckout(16.90, 'BRL')}
            className="flex flex-col items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white px-4 py-5 rounded-2xl font-black text-lg md:text-2xl text-center shadow-[0_6px_0_#166534] active:shadow-[0_0px_0_#166534] active:translate-y-[6px] transition-all tracking-tight leading-tight"
          >
            SIM! Quero a alfabetização completa por R$16,90
          </motion.a>
        </div>

        {/* 9. RECUSA (MANTIDA RIGOROSAMENTE) */}
        <div className="text-center mt-6">
          <Link to="/downsell" className="text-slate-400 hover:text-slate-500 underline font-medium text-sm transition-colors cursor-pointer">
            Não, prefiro focar só na leitura por enquanto
          </Link>
        </div>

      </div>
    </div>
  );
}
