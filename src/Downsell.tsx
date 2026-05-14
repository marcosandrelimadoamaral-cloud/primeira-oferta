import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, AlertTriangle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { trackInitiateCheckout } from './lib/fbpixel';

const Highlight = ({ children, className = "" }: any) => (
  <span className={`bg-[#fde047] px-2 py-0.5 rounded-sm font-semibold box-decoration-clone ${className}`}>{children}</span>
);

export default function Downsell() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fcfaf0] to-white font-sans selection:bg-yellow-200 pb-12">
      {/* 1. URGÊNCIA */}
      <div className="bg-red-600 text-white text-center py-3 px-4 font-bold uppercase tracking-wide text-[13px] sm:text-sm relative z-20 shadow-md">
        Só mais um segundo antes de ir para o seu acesso
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-12">
        {/* 2. HEADLINE PRINCIPAL */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-6 leading-tight tracking-tight drop-shadow-sm"
        >
          Antes de liberar seu acesso, <span className="text-[#ec008c]">tenho uma condição especial pra você</span>
        </motion.h1>

        {/* 3. SUBHEADLINE */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-center text-slate-600 font-medium mb-10 px-2"
        >
          Você já tomou a melhor decisão para o seu filho ao garantir o Grafismo Fonético. Mas antes de liberar seu acesso, quero te fazer uma proposta que não vai aparecer em nenhuma outra página.
        </motion.p>
        
        {/* 4. MOCKUP VISUAL */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.15 }}
           className="mb-10 relative"
        >
           <img 
             src="https://educacaokids.com.br/wp-content/uploads/2025/05/MOCKUP-PRINCIPAL-GRAFOMOTRICIDADE.webp" 
             alt="Mockup do Kit Grafomotricidade" 
             className="w-full max-w-lg mx-auto drop-shadow-xl hover:scale-105 transition-transform duration-500" 
           />
        </motion.div>

        {/* 5. CARTA ABERTA / SOLUÇÃO */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border-[3px] border-[#ede9f6] mb-10 text-center">
          <p className="text-slate-700 font-medium mb-4 text-lg text-left">
            O <span className="font-bold text-[#ec008c]">Kit Grafomotricidade</span>, que treina a mão do seu filho para escrever com firmeza, estava sendo oferecido por R$16,90 na página anterior.
          </p>
          <p className="text-slate-700 font-medium text-lg text-left">
            Aqui, nesta página, você pode garantir por <strong>R$9,90</strong>. Não porque é menos valioso, mas porque quero que a alfabetização do seu filho seja completa, e vou fazer o preço não ser um obstáculo para isso.
          </p>
        </div>

        {/* 8. OFERTA / CHECKOUT */}
        <div className="bg-white rounded-3xl p-8 mb-6 border-[4px] border-green-500 shadow-xl text-center relative mt-8">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm shadow-md flex items-center gap-2 whitespace-nowrap">
            <ShieldCheck className="w-5 h-5" /> Oferta exclusiva desta página
           </div>

          <p className="text-slate-500 font-medium line-through mb-1 mt-4 text-lg">De R$ 16,90</p>
          <p className="text-slate-700 font-extrabold mb-1 mt-2">Por apenas</p>
          <div className="text-6xl md:text-7xl font-black text-green-600 mb-6 drop-shadow-sm">R$9,90</div>
          
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://lastlink.com/p/C3FEF66B8/checkout-payment" // SUBSTITUA AQUI PELO LINK DE R$ 9,90
            onClick={() => trackInitiateCheckout(9.90, 'BRL')}
            className="flex flex-col items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white px-4 py-5 rounded-2xl font-black text-xl md:text-2xl text-center shadow-[0_6px_0_#166534] active:shadow-[0_0px_0_#166534] active:translate-y-[6px] transition-all tracking-tight leading-tight mb-2"
          >
            Sim, quero por R$9,90 &rarr;
          </motion.a>
          <p className="text-sm font-semibold text-slate-500 mt-2">Adicionado ao seu pedido, sem novo pagamento</p>
        </div>

        {/* 9. RECUSA COOPY */}
        <div className="text-center mt-6">
          <Link to="/" className="text-slate-400 hover:text-slate-500 underline font-medium text-sm transition-colors cursor-pointer">
            Não, pode liberar meu acesso ao Grafismo Fonético
          </Link>
        </div>

      </div>
    </div>
  );
}
