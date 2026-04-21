import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, PlayCircle, Star, ShieldCheck } from 'lucide-react';

export default function Upsell() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-rose-200">
      {/* 1. BARRA SUPERIOR (URGÊNCIA) */}
      <div className="bg-red-600 text-white text-center py-3 px-4 font-bold uppercase tracking-wide text-xs sm:text-sm animate-pulse shadow-md relative z-20">
        Não feche essa página ou sua compra pode não ser completa
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-12 pb-20">
        
        {/* 2. HEADLINE PRINCIPAL */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-center text-slate-900 mb-6 leading-tight tracking-tight uppercase"
        >
          Isso aqui <span className="text-red-600">não é</span> pra qualquer um
        </motion.h1>

        {/* 3. SUBHEADLINE */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-center text-slate-600 font-medium mb-12"
        >
          Se seu filho ainda não consegue controlar bem o lápis... isso vai aparecer na hora de escrever.
        </motion.p>

        {/* 4. BLOCO DE CONEXÃO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 mb-10"
        >
          <p className="text-slate-700 font-bold mb-4 text-lg">Você acabou de garantir o material de grafismo.</p>
          <p className="text-slate-700 font-medium mb-4">Mas deixa eu te falar uma coisa simples:</p>
          <p className="text-rose-600 font-black text-2xl uppercase tracking-tight">Entender não é o mesmo que conseguir fazer.</p>
        </motion.div>

        {/* 5. PROBLEMA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 mb-12 bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-2xl"
        >
          <p className="font-bold text-slate-800">Sem coordenação motora:</p>
          <ul className="space-y-2 text-slate-700 font-medium ml-4">
            <li className="flex items-center gap-2">❌ a letra sai torta</li>
            <li className="flex items-center gap-2">❌ a criança cansa rápido</li>
            <li className="flex items-center gap-2">❌ perde o interesse</li>
          </ul>
          <p className="font-bold text-slate-800 mt-4">E aí começa a frustração.</p>
        </motion.div>

        {/* 6. APRESENTAÇÃO DO PRODUTO */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Kit de Atividades de <span className="text-[#ec008c]">Grafomotricidade</span></h2>
          <p className="text-lg text-slate-600 font-medium">Esse material treina o controle da mão da criança na prática.</p>
        </div>

        {/* 7. PROVA VISUAL */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <img src="https://educacaokids.com.br/wp-content/uploads/2024/11/tracado1.webp" alt="Atividade de seguir linhas" className="w-full h-auto rounded-xl shadow-md border hover:scale-105 transition-transform" />
          <img src="https://educacaokids.com.br/wp-content/uploads/2024/11/tracado2.webp" alt="Atividade de contornar formas" className="w-full h-auto rounded-xl shadow-md border hover:scale-105 transition-transform" />
          <img src="https://educacaokids.com.br/wp-content/uploads/2024/11/tracado3.webp" alt="Coordenação motora" className="w-full h-auto rounded-xl shadow-md border hover:scale-105 transition-transform hidden lg:block" />
        </div>

        {/* 8. BLOCO DE LÓGICA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 text-white rounded-3xl p-8 text-center mb-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-yellow-400 opacity-5 mix-blend-overlay"></div>
          <div className="relative z-10">
            <p className="text-xl md:text-2xl font-bold mb-4 opacity-90">Grafismo fonético <span className="text-yellow-400">ensina o cérebro.</span></p>
            <p className="text-xl md:text-2xl font-bold mb-8 opacity-90">Grafomotricidade <span className="text-yellow-400">treina a mão.</span></p>
            <div className="w-full h-px bg-white/20 mb-6"></div>
            <p className="text-2xl md:text-3xl font-black uppercase text-rose-500 tracking-wider text-shadow-sm">Um sem o outro não funciona direito.</p>
          </div>
        </motion.div>

        {/* 9. OFERTA */}
        <div className="bg-white rounded-3xl p-8 mb-8 border-4 border-green-500 shadow-xl text-center relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm shadow-md flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" /> Condição Exclusiva
           </div>

          <p className="text-slate-500 font-medium line-through mb-2 mt-4 text-lg">De R$57,00</p>
          <p className="text-slate-700 font-bold mb-2">Por apenas:</p>
          <div className="text-6xl md:text-7xl font-black text-green-600 mb-6 drop-shadow-sm">R$16,90</div>
          <p className="bg-green-100 text-green-800 py-2 px-4 rounded-lg inline-block font-bold">Acesso Imediato + Vitalício</p>
        </div>

        {/* 10. BOTAO PRINCIPAL */}
        <motion.a 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://lastlink.com/p/C21F5C6B1/checkout-payment" // Adicione o link do upsell aqui se já tiver
          className="flex flex-col items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white p-6 rounded-2xl font-black text-xl md:text-2xl text-center shadow-[0_8px_0_#166534] active:shadow-[0_0px_0_#166534] active:translate-y-[8px] transition-all mb-6 uppercase tracking-tight leading-snug"
        >
          SIM, QUERO AJUDAR MEU FILHO<br className="hidden md:block" />A ESCREVER MELHOR
        </motion.a>

        {/* 11. RECUSA */}
        <div className="text-center">
          <a href="#" className="text-slate-400 hover:text-slate-600 underline font-medium text-sm transition-colors">
            Não, prefiro não incluir isso agora e lidar com as dificuldades depois.
          </a>
        </div>
      </div>
    </div>
  );
}
