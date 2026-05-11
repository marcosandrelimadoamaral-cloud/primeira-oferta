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
        Não feche essa página ou sua compra pode não ser completa
      </div>

      <div className="max-w-3xl mx-auto px-4 pt-12">
        {/* 2. HEADLINE PRINCIPAL */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-6 leading-tight tracking-tight drop-shadow-sm"
        >
          Espere! Falta Apenas <span className="text-[#ec008c]">Um Passo</span> Para Completar Seu Kit
        </motion.h1>

        {/* 3. SUBHEADLINE */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-center text-slate-600 font-medium mb-10 px-2"
        >
          Com o <Highlight>Grafismo Fonético</Highlight> que você acabou de comprar, seu filho vai aprender a <strong>LER</strong> e entender a formação das palavras.<br/><br/>Mas para ele conseguir <strong>ESCREVER</strong> com facilidade, ele precisa ter o controle da mão.
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

        {/* 5. PROBLEMA E CONEXÃO COM O VISUAL DA LP */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border-[3px] border-[#ede9f6] mb-10 text-center">
          <p className="text-slate-700 font-bold mb-4 text-xl md:text-2xl">Não adianta a criança entender as palavras se não consegue passá-las para o papel.</p>
          <p className="text-slate-600 font-medium mb-6 text-lg">Com a <span className="font-bold text-[#ec008c]">Grafomotricidade</span>, seu filho treina exatamente a coordenação motora fina para ter firmeza no lápis e letra legível.</p>
          <div className="inline-block bg-rose-50 border-2 border-rose-200 text-rose-600 font-black text-xl md:text-2xl uppercase tracking-tight py-3 px-6 rounded-2xl shadow-sm">
            E TUDO ISSO COM APENAS 10 MINUTOS POR DIA
          </div>
        </div>

        {/* 6. APRESENTAÇÃO DO PRODUTO SEM ENROLAÇÃO */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-6 drop-shadow-sm leading-tight">
            O complemento perfeito:<br />
            <span className="text-[#ec008c]">Kit Grafomotricidade</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium mb-8">
            Esse material complementar entrega o controle exato da mão na prática. Sem esse controle, a letra sai tremida, torta e a criança perde o interesse em escrever.
          </p>
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
            <p className="text-xl md:text-2xl font-bold mb-4 drop-shadow-md">Grafismo fonético ensina a <span className="text-yellow-300">ler.</span></p>
            <p className="text-xl md:text-2xl font-bold mb-8 drop-shadow-md">Grafomotricidade treina a mão a <span className="text-yellow-300">escrever.</span></p>
            <div className="max-w-xs mx-auto h-1 bg-white/20 rounded-full mb-6"></div>
            <p className="text-2xl md:text-3xl font-black uppercase text-yellow-300 tracking-wider drop-shadow-lg">Um sem o outro não funciona direito.</p>
          </div>
        </motion.div>

        {/* 8. OFERTA / CHECKOUT */}
        <div className="bg-white rounded-3xl p-8 mb-6 border-[4px] border-[#3b82f6] shadow-xl text-center relative mt-12">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3b82f6] text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm shadow-md flex items-center gap-2 whitespace-nowrap">
            <ShieldCheck className="w-5 h-5" /> Adicione ao seu pedido
           </div>

          <p className="text-slate-500 font-medium line-through mb-1 mt-4 text-lg">De R$57,00</p>
          <p className="text-slate-700 font-extrabold mb-1">Por apenas:</p>
          <div className="text-6xl md:text-7xl font-black text-[#ec008c] mb-6 drop-shadow-sm">R$16,90</div>
          
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://lastlink.com/p/C89979E7A/checkout-payment/"
            onClick={() => trackInitiateCheckout(16.90, 'BRL')}
            className="flex flex-col items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white px-4 py-5 rounded-2xl font-black text-xl md:text-2xl text-center shadow-[0_6px_0_#166534] active:shadow-[0_0px_0_#166534] active:translate-y-[6px] transition-all uppercase tracking-tight leading-tight"
          >
            SIM! QUERO ADICIONAR AO MEU ACESSO
          </motion.a>
        </div>

        {/* 9. RECUSA (MANTIDA RIGOROSAMENTE) */}
        <div className="text-center mt-6">
          <Link to="/downsell" className="text-slate-400 hover:text-slate-500 underline font-medium text-sm transition-colors cursor-pointer">
            Não, prefiro não incluir isso agora e lidar com as dificuldades depois.
          </Link>
        </div>

      </div>
    </div>
  );
}
