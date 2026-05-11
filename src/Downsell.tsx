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
      <div className="bg-red-600 text-white text-center py-3 px-4 font-bold uppercase tracking-wide text-[13px] sm:text-sm relative z-20 shadow-md animate-pulse flex justify-center items-center gap-2">
        <AlertTriangle className="w-5 h-5"/> ESSA É A SUA ÚLTIMA CHANCE!
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-12">
        {/* 2. HEADLINE PRINCIPAL */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-6 leading-tight tracking-tight drop-shadow-sm"
        >
          Poxa, você vai mesmo ficar de fora? <br/><span className="text-[#ec008c]">Para você não sair sem...</span>
        </motion.h1>

        {/* 3. SUBHEADLINE */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-center text-slate-600 font-medium mb-10 px-2"
        >
          Eu sei que as vezes as coisas podem estar apertadas. Mas eu quero MESMO que o seu filho aprenda não só a ler, mas a <strong>ESCREVER com perfeição.</strong>
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
          <p className="text-slate-700 font-medium mb-4 text-lg">
            Então resolvi fazer uma loucura: vou liberar o mesmíssimo <span className="font-bold text-[#ec008c]">Kit Grafomotricidade</span> com um desconto ainda maior nessa página!
          </p>
          <div className="inline-block bg-green-50 border-2 border-green-200 text-green-700 font-black text-lg md:text-xl uppercase tracking-tight py-3 px-6 rounded-2xl shadow-sm">
            Somente R$ 9,90. É o preço de um lanche!
          </div>
        </div>

        {/* 8. OFERTA / CHECKOUT */}
        <div className="bg-white rounded-3xl p-8 mb-6 border-[4px] border-green-500 shadow-xl text-center relative mt-8">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm shadow-md flex items-center gap-2 whitespace-nowrap">
            <ShieldCheck className="w-5 h-5" /> Condição Irrecusável
           </div>

          <p className="text-slate-500 font-medium line-through mb-1 mt-4 text-lg">De R$ 16,90</p>
          <p className="text-slate-700 font-extrabold mb-1">Por apenas:</p>
          <div className="text-6xl md:text-7xl font-black text-green-600 mb-6 drop-shadow-sm">R$9,90</div>
          
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://lastlink.com/p/C3FEF66B8/checkout-payment" // SUBSTITUA AQUI PELO LINK DE R$ 9,90
            onClick={() => trackInitiateCheckout(9.90, 'BRL')}
            className="flex flex-col items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white px-4 py-5 rounded-2xl font-black text-xl md:text-xl text-center shadow-[0_6px_0_#166534] active:shadow-[0_0px_0_#166534] active:translate-y-[6px] transition-all uppercase tracking-tight leading-tight mb-2"
          >
            EU QUERO APROVEITAR POR R$ 9,90
          </motion.a>
          <p className="text-xs text-slate-500 font-medium">Acesso Imediato + Vitalício</p>
        </div>

      </div>
    </div>
  );
}
