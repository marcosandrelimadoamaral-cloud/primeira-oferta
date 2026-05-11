import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, AlertTriangle, MonitorPlay, Check, PlayCircle, BookOpen, 
  Printer, Smile, ShieldCheck, Mail, Download, ArrowRight, Gift, ChevronDown, ChevronUp, MapPin
} from 'lucide-react';
import { trackViewContent, trackInitiateCheckout } from './lib/fbpixel';

const Highlight = ({ children, className = "" }: any) => (
  <span className={`bg-[#fde047] px-1 rounded-sm font-semibold box-decoration-clone ${className}`}>{children}</span>
);

const SectionHero = () => (
  <section className="relative overflow-hidden pt-12 pb-20 px-4 text-center flex flex-col items-center">
    {/* Background elements */}
    <div className="absolute inset-0 z-0 bg-[url('https://educacaokids.com.br/wp-content/uploads/2024/11/bg-kids.jpg')] bg-cover bg-center opacity-[0.03]"></div>
    <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50/80 via-white to-white"></div>
    <div className="absolute top-20 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

    <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-center mb-8"
      >
        <motion.img 
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          src="https://educacaokids.com.br/wp-content/uploads/2025/05/1_MOCKUP-PRINCIPAL-GRAFISMO-FONETICO.webp" 
          alt="Kit Grafismo Fonetico" 
          className="max-w-[700px] w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
        />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[28px] sm:text-4xl md:text-[44px] font-extrabold leading-tight text-slate-800 max-w-4xl"
      >
        Descubra a <Highlight className="text-yellow-900 shadow-sm relative"><span className="relative z-10">técnica americana que ensina a ler</span><div className="absolute inset-x-0 bottom-1 h-3 bg-yellow-400 -z-10 skew-x-12"></div></Highlight> até <strong className="text-rose-600">5 vezes mais rápido</strong>, sem pressão!
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 text-xl text-slate-600 font-medium"
      >
        Com apenas <strong>10 minutos</strong> por dia.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-3 md:gap-4 mt-10 mb-12 text-sm md:text-base font-semibold text-slate-700"
      >
        <div className="flex items-center gap-2 bg-white border border-green-100 shadow-sm px-5 py-3 rounded-full hover:-translate-y-1 transition-transform cursor-default"><CheckCircle2 className="w-5 h-5 text-green-500" /> Ideal para crianças de 2 a 12 anos, no ritmo natural de cada uma</div>
        <div className="flex items-center gap-2 bg-white border border-green-100 shadow-sm px-5 py-3 rounded-full hover:-translate-y-1 transition-transform cursor-default"><CheckCircle2 className="w-5 h-5 text-green-500" /> Mesmo que ainda não reconheça letras ou sons</div>
        <div className="flex items-center gap-2 bg-white border border-green-100 shadow-sm px-5 py-3 rounded-full hover:-translate-y-1 transition-transform cursor-default"><CheckCircle2 className="w-5 h-5 text-green-500" /> Funciona também com crianças com TDAH, Autismo</div>
      </motion.div>

      <motion.a 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
        href="https://lastlink.com/p/C21F5C6B1/checkout-payment" 
        onClick={() => trackInitiateCheckout(19.90, 'BRL')}
        className="group relative w-full sm:w-[90%] md:w-auto overflow-hidden bg-gradient-to-r from-[#22c55e] to-[#10b981] hover:from-[#16a34a] hover:to-[#059669] text-white font-bold text-lg sm:text-xl md:text-3xl py-5 md:py-6 px-4 sm:px-10 md:px-14 rounded-[2rem] shadow-[0_8px_0_#059669] active:shadow-[0_0px_0_#059669] active:translate-y-[8px] transition-all hover:scale-105"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out"></div>
        <span className="relative flex items-center justify-center gap-2 shadow-black/50 drop-shadow-md">
          QUERO MEU PEQUENO LENDO RÁPIDO!
          <ArrowRight className="w-6 h-6 md:w-8 md:h-8 animate-pulse" />
        </span>
      </motion.a>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8 text-slate-500 max-w-3xl mx-auto text-base"
      >
        Com o <strong>Kit de Grafismo Fonético</strong>, baseado no <strong>método americano</strong> de alfabetização, seu filho aprende a ler até <strong>5x mais rápido</strong>, de forma divertida, simples e eficaz, direto de casa!
      </motion.p>

      <div className="mt-12 animate-bounce opacity-60">
        <div className="w-6 h-6 border-b-3 border-r-3 border-slate-400 rotate-45 mx-auto" />
        <div className="w-6 h-6 border-b-3 border-r-3 border-slate-400 rotate-45 mx-auto -mt-2" />
      </div>
    </div>
  </section>
);

const SectionPains = () => (
  <section className="py-16 px-4 max-w-3xl mx-auto text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-2xl md:text-3xl font-bold text-slate-800 mb-8"
    >
      Muitos pais acham que<br/>
      <span className="text-[#b45309]">"<Highlight className="bg-[#fef08a] px-2 text-[#92400e]">cada criança tem seu tempo pra ler</Highlight>". Até que...</span>
    </motion.h2>

    <div className="space-y-4 mb-8 max-w-lg mx-auto">
      {[ 'As tarefas de leitura viram um sofrimento', 'As notas baixas', 'Ela se sente "menos inteligente" do que os coleguinhas' ].map((text, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="bg-[#fff1f2] border border-[#fecdd3] text-[#be123c] py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition-shadow"
        >
          <AlertTriangle className="w-5 h-5 opacity-60 animate-pulse" /> {text}
        </motion.div>
      ))}
    </div>

    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="text-xl md:text-2xl font-bold text-slate-800"
    >
      <Highlight className="bg-[#fef08a]">Como consequência:</Highlight> Começa a achar que não é capaz,<br className="hidden md:block"/> sem entender o porquê..
    </motion.p>
    
    <div className="mt-10 animate-bounce">
      <div className="w-6 h-6 border-b-2 border-r-2 border-slate-400 rotate-45 mx-auto" />
      <div className="w-6 h-6 border-b-2 border-r-2 border-slate-400 rotate-45 mx-auto -mt-3" />
    </div>
  </section>
);

const SectionProblem = () => (
  <section className="bg-[#fefce8] pt-20 pb-16 px-4 relative mt-16">
    <div className="absolute inset-0 bg-[url('https://educacaokids.com.br/wp-content/uploads/2024/11/pattern-dot.png')] opacity-20" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full border-solid border-b-[#fefce8] border-l-transparent border-r-transparent border-t-transparent border-[30px] border-b-[30px]" />
    
    <motion.div 
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", bounce: 0.5 }}
      className="absolute -top-12 left-1/2 -translate-x-1/2"
    >
      <div className="p-2 rounded-lg">
        <img src="https://educacaokids.com.br/wp-content/uploads/2025/05/exclaim.png" alt="Alerta" className="w-20 h-20 drop-shadow-md animate-pulse" />
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative z-10 max-w-4xl mx-auto text-center border-2 border-yellow-200 bg-white rounded-3xl p-8 md:p-14 shadow-xl hover:shadow-2xl transition-shadow duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-6">
        Entenda o que <span className="underline decoration-yellow-400 decoration-4">realmente</span><br/>
        <Highlight className="bg-[#fde047] px-2 text-slate-900 mt-2 inline-block">atrasa a leitura do seu filho...</Highlight>
      </h2>
      <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6">
        falta de estímulo fonético na fase certa, o que pode tornar o processo de alfabetização mais lento, frustrante e confuso, tanto para a criança quanto para você.
      </p>
      <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto my-8 rounded-full" />
      <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
        Mas calma, você não tem culpa disso... É que ninguém te ensinou como ajudar seu filho a despertar a leitura de forma leve, divertida e no tempo certo.
      </p>
    </motion.div>
  </section>
);

const SectionSolution = () => (
  <section className="pt-20 pb-16 px-4 max-w-5xl mx-auto text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500 mb-12"
    >
      Por isso você precisa do Kit...
    </motion.h2>
    
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center gap-8 mb-12 cursor-pointer"
    >
      <img src="https://educacaokids.com.br/wp-content/uploads/2025/05/JcDcvm3874423-643x1024.webp" alt="Atividades mockup" className="w-full max-w-[400px] h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
    </motion.div>

    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto font-medium"
    >
      Cada atividade do Kit de Grafismo Fonético foi cuidadosamente criada para:
    </motion.p>

    <div className="max-w-2xl mx-auto text-left space-y-4 mb-10 text-lg font-medium text-slate-700 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
      {[ 'Desenvolver a coordenação motora fina', 'Estimular a criatividade e a atenção da criança', 'Fortalecer as conexões cerebrais que facilitam a leitura', 'Despertar o interesse pelas palavras e pelos sons', 'Tornar o processo de alfabetização leve, divertido e eficaz!' ].map((text, i) => (
        <motion.p 
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-3 hover:translate-x-2 transition-transform cursor-default"
        >
          <CheckCircle2 className="text-[#34d399] w-6 h-6 shrink-0" /> {text}
        </motion.p>
      ))}
    </div>

    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-slate-600 font-bold bg-slate-100 inline-block px-6 py-3 rounded-full"
    >
      Tudo isso com apenas alguns minutos por dia, direto de casa, no ritmo natural da criança.
    </motion.p>
  </section>
);

const SectionWorks = () => (
  <section className="pt-20 pb-20 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-12"
      >
        Por que as atividades de Grafismo Fonético funcionam?
      </motion.h2>
      
      <div className="flex justify-center gap-2 mb-12">
        <motion.div initial={{ width: 0 }} whileInView={{ width: 64 }} viewport={{ once: true }} className="h-2 bg-[#fde047] rounded-full" />
        <motion.div initial={{ width: 0 }} whileInView={{ width: 64 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="h-2 bg-[#60a5fa] rounded-full" />
        <motion.div initial={{ width: 0 }} whileInView={{ width: 64 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="h-2 bg-[#34d399] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-gradient-to-br from-[#eef2ff] to-[#e0e7ff] rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 mb-8 border border-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
      >
        <img src="https://educacaokids.com.br/wp-content/uploads/2025/05/Menina-com-Atividades-Ludicas-de-Grafismo-Fonetico.webp" alt="Criança sorrindo com atividade" className="w-full max-w-[300px] h-auto rounded-3xl shadow-2xl rotate-[-3deg] hover:rotate-0 border-[6px] border-white transition-all duration-500" />
        <div>
          <h3 className="text-2xl font-bold text-indigo-900 mb-4 leading-snug">
            Antes de aprender a ler, o cérebro da criança precisa reconhecer padrões, sons e movimentos.
          </h3>
          <p className="text-slate-700 mb-4 text-lg">
            As atividades de grafismo fonético desenvolvem a <strong>consciência fonológica e visual</strong>, habilidades essenciais para que a criança reconheça sílabas, sons e estruturas das palavras de forma natural.
          </p>
          <p className="text-slate-700 text-lg">
            Ao traçar linhas, curvas e padrões fonéticos, ela fortalece as conexões cerebrais responsáveis pela leitura, <strong>acelerando o processo de alfabetização de forma divertida e sem pressão.</strong>
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-gradient-to-br from-[#ecfdf5] to-[#d1fae5] rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
      >
        <img src="https://educacaokids.com.br/wp-content/uploads/2025/05/Mae-com-seu-filho-ajudando-nas-atividades-de-grafismo-fonetico.webp" alt="Mãe focada com filho" className="w-64 h-64 md:w-[300px] md:h-[300px] max-w-full object-cover rounded-3xl shadow-2xl rotate-[3deg] hover:rotate-0 border-[6px] border-white transition-all duration-500 shrink-0" />
        <div className="w-full">
          <h3 className="text-2xl font-extrabold text-emerald-900 mb-6 drop-shadow-sm">
            E em poucos dias você vai notar a diferença na leitura do seu filho:
          </h3>
          <div className="space-y-4">
            {[ 'Vai reconhecer sílabas e sons com mais facilidade', 'Vai se sentir mais confiante ao tentar ler palavras novas', 'Vai mostrar mais interesse por livros e história', 'Vai aprender no ritmo dele, sem frustração ou comparação' ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-emerald-100 font-medium text-slate-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <CheckCircle2 className="text-[#34d399] shrink-0" /> {text}
              </div>
            ))}
            <div className="flex items-center gap-3 bg-emerald-500 p-4 rounded-xl shadow-lg border border-emerald-400 font-bold text-white hover:scale-105 transition-transform">
              <CheckCircle2 className="text-white shrink-0" /> Vai passar a gostar dos momentos de leitura em casa
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  </section>
);

const SectionGrid = () => (
  <section className="bg-[url('https://educacaokids.com.br/wp-content/uploads/2024/11/bg-kids.jpg')] bg-[length:100px] bg-opacity-[0.02] py-16 px-4 border-y border-slate-200 relative">
    <div className="absolute inset-0 bg-white/95"></div>
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed font-semibold drop-shadow-sm"
      >
        Com o <strong>Kit de Grafismo Fonético, seu filho</strong> desenvolve o cérebro para aprender a ler com leveza, no tempo dele, e com resultados visíveis em poucos dias.
      </motion.p>

      <div className="relative mb-12 max-w-2xl mx-auto">
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
        <motion.div 
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 flex justify-center"
        >
          <div className="bg-[#fefce8] border-2 border-yellow-300 px-8 py-4 rounded-full text-xl font-bold inline-block shadow-lg hover:shadow-xl transition-shadow cursor-default">
            Comece a jornada de <strong>aprendizado do seu filho hoje</strong>
          </div>
        </motion.div>
      </div>

      <motion.a 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        href="https://lastlink.com/p/C21F5C6B1/checkout-payment" 
        onClick={() => trackInitiateCheckout(19.90, 'BRL')}
        className="inline-block bg-gradient-to-r from-[#22c55e] to-[#10b981] hover:from-[#16a34a] hover:to-[#059669] text-white font-extrabold text-lg md:text-2xl py-5 px-12 rounded-full shadow-[0_8px_0_#15803d] active:shadow-[0_0px_0_#15803d] active:translate-y-2 transition-all mb-20"
      >
        QUERO MEU FILHO(A) LENDO!
      </motion.a>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-16 leading-[1.6]"
      >
        <Highlight className="px-4 py-1 shadow-sm rounded-lg box-decoration-clone">O Que Seu Filho<br/>Vai Aprender 📚</Highlight>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Reconhecimento de Sons e Letras", desc: "Cada som é associado a um personagem divertido.", icon: "https://educacaokids.com.br/wp-content/uploads/2024/11/abc-block.png" },
          { title: "Formação de Palavras", desc: "Atividades dinâmicas que destravam a formação de sílabas.", icon: "https://educacaokids.com.br/wp-content/uploads/2024/11/jigsaw.png" },
          { title: "Compreensão e Leitura Fluente", desc: "Para não só ler, mas entender completamente o sentido da frase.", icon: "https://educacaokids.com.br/wp-content/uploads/2024/11/book-1.png" },
          { title: "Guia Passo a Passo com ilustrações", desc: "Visual simples que guia até mesmo os pais sem experiência.", icon: "https://educacaokids.com.br/wp-content/uploads/2024/11/read.png" }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -10 }}
            className="dashed-border-card bg-white p-8 text-center shadow-lg hover:shadow-2xl relative pt-14 rounded-2xl transition-all duration-300"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
              <img src={item.icon} alt={item.title} className="w-16 h-16 object-contain" />
            </div>
            <h3 className="font-extrabold text-lg text-slate-800 mb-4">{item.title}</h3>
            <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SectionVideo = () => (
  <section className="bg-gradient-to-b from-[#fcfaf0] to-white py-20 px-4 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6 drop-shadow-sm"
    >
      Veja como é fácil <span className="underline decoration-yellow-400 decoration-4">ensinar</span><br/> seu filho(a) a ler com o<br/>Grafismo Fonético...
    </motion.h2>
    <motion.p 
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      className="font-bold text-xl mb-12 flex items-center justify-center gap-2"
    >
      <Highlight className="flex items-center gap-2 py-2 px-6 rounded-full shadow-md text-center mx-auto hover:bg-yellow-300 cursor-default transition-colors">Aperte o play 👇</Highlight>
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-[400px] w-full mx-auto bg-[#6b52a1] rounded-3xl overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-[#ede9f6] hover:border-indigo-100 transition-colors"
    >
      <div className="relative w-full aspect-[9/16]">
        {/*
          IMPORTANTE: Note que o Panda Video exige a URL completa do seu dashboard,
          que inclui o seu "libID" ou domínio personalizado (ex: player-vz-xxxxx.tv.pandavideo.com.br).
          Cole o iframe exato fornecido pela PandaVideo abaixo.
        */}
        <iframe 
          id="panda-4ffaf71b-22b3-4df9-bd7a-0bc7a8cdc623" 
          src="https://player-vz-cab8b543-24c.tv.pandavideo.com.br/embed/?v=4ffaf71b-22b3-4df9-bd7a-0bc7a8cdc623" 
          style={{ border: 'none', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} 
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
          allowFullScreen={true}
        ></iframe>
      </div>
    </motion.div>
    
    <div className="mt-16 animate-bounce">
      <img src="https://educacaokids.com.br/wp-content/uploads/2025/05/SETA-1.png" alt="Seta" className="w-12 h-auto mx-auto drop-shadow-lg" />
    </div>
  </section>
);

const SectionBenefits = () => (
  <section className="py-20 px-4 bg-slate-50/50">
    <div className="max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-16"
      >
        Praticando apenas 10 minutos por dia,<br/> Seu filho colherá estes<br/>
        <Highlight className="px-4 py-2 mt-4 inline-block drop-shadow-sm rounded-lg">benefícios para o resto da vida:</Highlight>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 gap-y-12">
        {[
          { title: "Crianças em fase de alfabetização:", desc: "Ideal para crianças que estão dando os primeiros passos na leitura. O método oferece uma abordagem testada e estruturada, ajudando a desenvolver uma base sólida e segura." },
          { title: "Pais e educadores que buscam alternativas aos métodos tradicionais:", desc: "Se você procura uma forma de ensino mais personalizada, que respeita o ritmo individual de cada criança, este método é uma excelente escolha." },
          { title: "Crianças com dificuldade de leitura:", desc: "Para crianças que enfrentam desafios na leitura e compreensão. Estimula a concentração nas habilidades cognitivas." },
          { title: "Escolas e instituições que valorizam inovação no ensino:", desc: "Perfeito para escolas que buscam métodos comprovados, rápidos e eficientes para todas as idades." }
        ].map((info, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="dashed-border-card bg-white p-8 pt-10 relative mt-4 shadow-md hover:shadow-xl text-center rounded-2xl transition-all duration-300"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-5xl font-extrabold text-[#ca8a04] bg-[#fefce8] w-20 h-20 flex items-center justify-center rounded-full shadow-lg border-4 border-white">
              {i + 1}
            </div>
            <h3 className="font-extrabold text-xl text-slate-800 mb-4 mt-6">{info.title}</h3>
            <p className="text-slate-600 font-medium leading-relaxed">{info.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SectionInside = () => (
  <section className="pt-24 pb-16 bg-gradient-to-b from-[#a18830] to-[#8a7224] border-t-8 border-[#ca8a04] relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://educacaokids.com.br/wp-content/uploads/2024/11/pattern-dot.png')] opacity-10 mix-blend-overlay"></div>
    <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold text-white mb-12 tracking-wide drop-shadow-lg"
      >
        VEJA TUDO QUE VOCÊ VAI RECEBER<br/>NO KIT DE ATIVIDADES
      </motion.h2>

      <motion.img 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        src="https://educacaokids.com.br/wp-content/uploads/2025/05/AnyConv.com__Caderno-de-Atividades-Grafismos-Foneticos-Nivel-3-m-1.webp" 
        alt="Mockup Interno" 
        className="max-w-full h-auto mx-auto mb-16 w-[800px] drop-shadow-2xl transition-transform duration-500 cursor-pointer" 
      />

      <div className="space-y-4 px-4 flex flex-col items-center">
        {[
          { text: "+ DE 100 ATIVIDADES DE GRAFISMO FONÉTICO", color: "bg-gradient-to-r from-[#4ade80] to-[#22c55e]", textCol: "text-[#064e3b]" },
          { text: "ATIVIDADES NÍVEL 01: PALAVRAS COM 02 SÍLABAS", color: "bg-gradient-to-r from-[#fbbf24] to-[#f59e0b]", textCol: "text-[#78350f]" },
          { text: "ATIVIDADES NÍVEL 02: PALAVRAS COM 03 SÍLABAS", color: "bg-gradient-to-r from-[#3b82f6] to-[#2563eb]", textCol: "text-white" },
          { text: "ATIVIDADES NÍVEL 03: PALAVRAS COM 04 SÍLABAS", color: "bg-gradient-to-r from-[#ef4444] to-[#dc2626]", textCol: "text-white" },
          { text: "ATIVIDADES GRAFISMO NA LETRA CURSIVA E BASTÃO", color: "bg-gradient-to-r from-[#f59e0b] to-[#d97706]", textCol: "text-white" }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            className={`${item.color} ${item.textCol} font-extrabold py-3 sm:py-4 px-4 sm:px-8 rounded-[2rem] inline-block w-full max-w-3xl text-xs sm:text-sm md:text-lg shadow-xl uppercase tracking-wider border-2 border-white/20 hover:shadow-2xl cursor-default transition-shadow`}
          >
            {item.text}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SectionHowItWorks = () => (
  <section className="py-20 px-4 bg-white text-center border-t-8 border-[#8b7628]">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-16 drop-shadow-sm"
    >
      Muito simples de<br/>começar a utilizar!
    </motion.h2>

    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
      {[
        { title: "CHEGA NO E-MAIL", desc: "Após a compra você recebe no e-mail o acesso a plataforma com arquivos em formato PDF.", icon: "https://educacaokids.com.br/wp-content/uploads/2023/11/email_4.png", delay: 0 },
        { title: "VOCÊ IMPRIME", desc: "Você pode imprimir quando quiser, pois o acesso é VITALÍCIO e quantas vezes desejar.", icon: "https://educacaokids.com.br/wp-content/uploads/2023/11/printer.png", delay: 0.1 },
        { title: "OS PEQUENOS AMAM", desc: "Temos uma ótima notícia pra você: MÃOS À OBRA! Importante que sempre auxílie seu pequeno nas atividades.", icon: "https://educacaokids.com.br/wp-content/uploads/2023/11/pencil.png", delay: 0.2 }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: item.delay, type: "spring", stiffness: 100 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className={`border border-slate-200 rounded-3xl p-8 flex-1 flex flex-col items-center ${i === 1 ? 'shadow-2xl md:-translate-y-4 bg-gradient-to-b from-white to-slate-50' : 'shadow-md'} transition-all duration-300`}
        >
          <div className="mb-6 h-20 flex items-center justify-center">
             <img src={item.icon} alt={item.title} className={`w-16 h-16 object-contain drop-shadow-md ${i===1 ? 'animate-pulse' : ''}`} />
          </div>
          <h3 className="font-extrabold text-xl mb-4 text-center text-slate-800 leading-snug" dangerouslySetInnerHTML={{__html: item.title.replace('NO ', 'NO<br/>').replace('PEQUENOS ', 'PEQUENOS<br/>')}} />
          <p className="text-slate-600 font-medium text-center">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const SectionBonus = () => (
  <>
  <div className="bg-gradient-to-r from-[#a18830] via-[#c6a635] to-[#a18830] text-white py-4 text-center font-extrabold text-xl md:text-2xl drop-shadow-sm uppercase tracking-wider">
    e ainda não acabou...
  </div>
  <section className="py-20 px-4 bg-slate-50 relative">
    <div className="absolute inset-0 bg-[url('https://educacaokids.com.br/wp-content/uploads/2024/11/bg-kids.jpg')] bg-[length:100px] bg-opacity-[0.03]"></div>
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2 uppercase drop-shadow-sm"
      >
        GARANTINDO SEU ACESSO HOJE<br/>
        VOCÊ LEVA <span className="text-[#d97706] animate-pulse inline-block">6 SUPER BÔNUS 🎁</span>
      </motion.h2>
      <div className="w-24 h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto my-8 rounded-full" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
        {[
          { title: "Caderno Alfabeto com Imagem", desc: "Apresenta cada letra do alfabeto com imagens associadas, ajudando na familiarização lúdica.", img: "https://educacaokids.com.br/wp-content/uploads/2024/11/FRAFISMO-FONETICO-ALFABETO-CADERNO-COM-ALFABETO.webp" },
          { title: "Caderno Quebra Cabeça Alfabeto", desc: "Caderno com quebra-cabeça com letras do alfabeto para fixação divertida.", img: "https://educacaokids.com.br/wp-content/uploads/2024/11/GRAFISMO-FONETICO-ALFABETO-QUEBRA-CABECA-COM-ALFABETO.webp" },
          { title: "Caderno Formando Palavras", desc: "Exercícios de formação de palavras que incentivam leitura e escrita criativa.", img: "https://educacaokids.com.br/wp-content/uploads/2024/11/GRAFISMO-FONETICO-ALFABETO-CADERNO-FORMANDO-PALAVRAS.webp" },
          { title: "Caderno Alfabeto com Relógio", desc: "Caderno interativo que ensina o alfabeto junto com os ponteiros do relógio analógico.", img: "https://educacaokids.com.br/wp-content/uploads/2024/11/GRAFISMO-FONETICO-ALFABETO-CADERNO-ALFABETO-COM-RELOGIO.webp" },
          { title: "Caderno Alfabeto Traçado", desc: "Caderno focado na coordenação fina para praticar as curvas de cada letra.", img: "https://educacaokids.com.br/wp-content/uploads/2024/11/GRAFISMO-FONETICO-ALFABETO-CADERNO-ALFABETO-COM-TRACADO.webp" },
          { title: "Caderno Alfabeto com Carinhas", desc: "Dezenas de carinhas ilustrando expressões e pareando com letras iniciais.", img: "https://educacaokids.com.br/wp-content/uploads/2024/11/GRAFISMO-FONETICO-ALFABETO-CADERNO-ALFABETO-COM-CARINHAS.webp" }
        ].map((b, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white border text-center border-slate-100 p-8 rounded-[2rem] flex flex-col items-center shadow-lg hover:shadow-2xl hover:border-yellow-200 transition-all duration-300"
          >
            <div className="w-full flex justify-center mb-6 relative min-h-[220px]">
               <img src={b.img} alt={b.title} className="max-w-[200px] w-full h-[auto] object-contain drop-shadow-2xl scale-110 hover:scale-[1.2] transition-transform duration-500" />
            </div>
            <h3 className="font-extrabold text-slate-800 text-lg mb-3 leading-snug">{b.title}</h3>
            <p className="text-sm font-medium text-slate-600 mb-6">{b.desc}</p>
            <div className="mt-auto flex flex-col items-center w-full bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="text-[#d97706] font-bold text-sm line-through opacity-60 mb-1">De R$ 47</div>
              <div className="text-green-600 font-black text-lg flex items-center gap-1 animate-pulse"><Gift className="w-5 h-5" /> HOJE: GRÁTIS</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  </>
);

const SectionOffer = () => (
  <section id="oferta" className="py-24 px-4 bg-gradient-to-b from-[#fefce8] to-[#fcfaf0] relative border-t border-yellow-100">
    <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-slate-800 mb-12 drop-shadow-sm"
      >
        Recapitulando tudo o que você vai<br/>receber junto com o<br/>
        <span className="text-[#d97706] text-4xl md:text-5xl font-extrabold mt-2 inline-block drop-shadow-md">'Kit Atividades Grafismo Fonético'</span>
      </motion.h2>

      <motion.img 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.5 }}
        whileHover={{ scale: 1.05 }}
        src="https://educacaokids.com.br/wp-content/uploads/2025/05/1_MOCKUP-PRINCIPAL-GRAFISMO-FONETICO.webp" 
        alt="Tudo incluso" 
        className="w-full max-w-[500px] h-auto mx-auto mb-12 drop-shadow-2xl transition-transform duration-500" 
      />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-left max-w-lg mx-auto space-y-3 mb-10 font-bold text-slate-700 text-base md:text-lg bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-slate-100"
      >
        <p className="hover:translate-x-2 transition-transform"><CheckCircle2 className="inline text-[#22c55e] w-6 h-6 mr-2 drop-shadow-sm" /> Atividades de Grafismo Fonético <span className="line-through text-slate-400 text-sm ml-2">De R$ 97</span></p>
        <p className="hover:translate-x-2 transition-transform"><Gift className="inline text-[#22c55e] w-5 h-5 mx-0.5 mr-2 drop-shadow-sm" /> Bônus 01: Caderno Alfabeto com Imagem <span className="line-through text-slate-400 text-sm ml-2">De R$ 37</span></p>
        <p className="hover:translate-x-2 transition-transform"><Gift className="inline text-[#22c55e] w-5 h-5 mx-0.5 mr-2 drop-shadow-sm" /> Bônus 02: Caderno Quebra-Cabeça Alfabeto <span className="line-through text-slate-400 text-sm ml-2">De R$ 47</span></p>
        <p className="hover:translate-x-2 transition-transform"><Gift className="inline text-[#22c55e] w-5 h-5 mx-0.5 mr-2 drop-shadow-sm" /> Bônus 03: Caderno Formando Palavras <span className="line-through text-slate-400 text-sm ml-2">De R$ 67</span></p>
        <p className="hover:translate-x-2 transition-transform"><Gift className="inline text-[#22c55e] w-5 h-5 mx-0.5 mr-2 drop-shadow-sm" /> Bônus 04: Caderno Alfabeto com Relógio <span className="line-through text-slate-400 text-sm ml-2">De R$ 39</span></p>
        <p className="hover:translate-x-2 transition-transform"><Gift className="inline text-[#22c55e] w-5 h-5 mx-0.5 mr-2 drop-shadow-sm" /> Bônus 05: Caderno Alfabeto Traçado <span className="line-through text-slate-400 text-sm ml-2">De R$ 27</span></p>
        <p className="hover:translate-x-2 transition-transform"><Gift className="inline text-[#22c55e] w-5 h-5 mx-0.5 mr-2 drop-shadow-sm" /> Bônus 06: Caderno Alfabeto com Carinhas <span className="line-through text-slate-400 text-sm ml-2">De R$ 49</span></p>
        <div className="h-px bg-slate-200 my-4" />
        <p className="mt-4 text-[#d97706] font-extrabold flex items-center gap-2 hover:translate-x-2 transition-transform"><MapPin className="w-6 h-6" /> Suporte Profissional</p>
        <p className="text-[#d97706] font-extrabold flex items-center gap-2 hover:translate-x-2 transition-transform"><ShieldCheck className="w-6 h-6" /> Garantia Incondicional</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 md:p-12 rounded-3xl shadow-2xl border-2 border-green-100 hover:border-green-300 transition-colors"
      >
        <p className="text-slate-600 mb-2 text-base md:text-lg font-medium">No total tudo deveria custar <span className="line-through text-red-500 font-extrabold ml-1">R$ 453,00</span></p>
        <p className="text-slate-800 font-extrabold text-xl md:text-2xl mb-6">Mas hoje você vai ter acesso completo por</p>

        <div className="text-[50px] sm:text-[70px] md:text-[90px] font-black text-[#16a34a] leading-none mb-6 drop-shadow-md">R$ 19,90</div>
        <p className="font-extrabold text-slate-700 text-lg sm:text-xl md:text-2xl mb-8 uppercase tracking-wide bg-slate-100 py-3 rounded-xl inline-block px-4 sm:px-8 border border-slate-200">Pagamento Exclusivo via PIX</p>
        
        <p className="text-xs sm:text-sm md:text-base font-extrabold text-slate-500 mb-6 tracking-widest uppercase flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span className="flex items-center gap-1"><Check className="w-4 h-4 md:w-5 md:h-5 text-green-500"/> ACESSO VITALÍCIO</span> 
          <span className="flex items-center gap-1"><Check className="w-4 h-4 md:w-5 md:h-5 text-green-500"/> ACESSO IMEDIATO</span>
        </p>

        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://lastlink.com/p/C21F5C6B1/checkout-payment" 
          onClick={() => trackInitiateCheckout(19.90, 'BRL')}
          className="group relative overflow-hidden inline-block w-full max-w-[600px] mx-auto bg-gradient-to-r from-[#22c55e] to-[#10b981] hover:from-[#16a34a] hover:to-[#059669] text-white font-extrabold py-5 md:py-6 px-4 rounded-[2rem] shadow-[0_8px_0_#15803d] active:shadow-[0_0px_0_#15803d] active:translate-y-[8px] transition-all text-xl sm:text-2xl md:text-3xl mb-8"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out"></div>
          <span className="relative flex justify-center items-center gap-3 drop-shadow-md shadow-black/50">QUERO GARANTIR O MEU KIT AGORA! <ArrowRight className="w-8 h-8 animate-pulse" /></span>
        </motion.a>

        <div className="mt-8 flex flex-col items-center">
          <motion.img 
            initial={{ rotate: -10 }}
            whileInView={{ rotate: 10 }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
            src="https://educacaokids.com.br/wp-content/uploads/2025/05/selo-garantia-2.webp" 
            alt="Garantia de 7 Dias" 
            className="w-[200px] md:w-[240px] h-auto mb-8 drop-shadow-2xl" 
          />
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Garantia de<br/>Satisfação Total:</h2>
          <div className="max-w-2xl mx-auto text-slate-600 text-base md:text-lg font-medium space-y-6 text-left bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100">
            <p>Estamos tão certos de que o Kit de Grafismo Fonético vai ajudar seu filho a ler com mais facilidade, que oferecemos uma <strong>garantia de satisfação total por 7 dias.</strong></p>
            <p>Se, por qualquer motivo, você sentir que o material não foi útil ou que seu filho não se adaptou, é só nos avisar dentro desse prazo e devolveremos <strong>100% do seu investimento</strong>, sem perguntas ou burocracia.</p>
            <p className="bg-yellow-100/50 p-4 rounded-xl border border-yellow-200/50">A sua tranquilidade vem em primeiro lugar. Você compra hoje, testa com calma, e só continua se realmente perceber resultados.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const SectionComments = () => {
  const [userCity, setUserCity] = useState("aqui da região");

  useEffect(() => {
    fetch('https://get.geojs.io/v1/ip/geo.json')
      .then(res => res.json())
      .then(data => {
        if (data.city) {
          setUserCity(data.city);
        }
      })
      .catch(err => console.error("Error fetching location:", err));
  }, []);

  const comments = [
    {
      name: "André Azevedo",
      time: "28 min",
      img: "https://ik.imagekit.io/RossCDN/facebook/social-plugin/h/39.jpg",
      text: "meus pequenos estão conseguindo ter uma evolução siginificativa graças ao Grafismo Fonético. Quem comprar outro produto, é porque não gosta de dinheiro.",
      likes: "7",
      emojis: "🤩💖"
    },
    {
      name: "Ana Oliveira",
      time: "55 min",
      img: "https://ik.imagekit.io/RossCDN/facebook/social-plugin/m/94.jpg",
      text: "Minha filha começou a formar palavras com apenas duas semanas usando o kit. É incrível como ela evoluiu em tão pouco tempo!",
      likes: "3",
      emojis: "👍💖"
    },
    {
      name: "Roberta Nogueira",
      time: "1 h",
      img: "https://ik.imagekit.io/RossCDN/facebook/social-plugin/m/12.jpg",
      text: `Sou de ${userCity} e confesso que estava com receio de comprar pela internet. Mas chegou tudo certinho no meu email na mesma hora! Já imprimi a primeira apostila e meu filho amou. Não deixem de comprar.`,
      likes: "15",
      emojis: "😍👍"
    },
    {
      name: "Marisa Correia",
      time: "1 h",
      img: "https://ik.imagekit.io/RossCDN/facebook/social-plugin/m/39.jpg",
      text: "Acreditem em mim, essa é a melhor compra que vocês vão fazer este ano. Não percam a chance!",
      likes: "13",
      emojis: "🤩"
    },
    {
      name: "Camila Silva",
      time: "2 h",
      img: "https://ik.imagekit.io/RossCDN/facebook/social-plugin/m/80.jpg",
      text: "É incrível como algo tão simples pode fazer tanta diferença! Estou muito satisfeito com a minha compra ✌",
      likes: "8",
      emojis: "👍"
    },
    {
      name: "Breno Souza",
      time: "5 h",
      img: "https://ik.imagekit.io/RossCDN/facebook/social-plugin/h/42.jpg",
      text: "O método é simples de seguir, mesmo para nós que somos pais sem experiência em ensino. É muito gratificante ver nosso filho lendo suas primeiras palavras!",
      likes: "20",
      emojis: "💖🤩"
    }
  ];

  return (
    <section className="py-12 bg-[#fcfaf0] px-4 font-[Inter]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 p-6 md:p-8"
      >
        <div className="text-[13px] text-slate-800 font-bold mb-4 font-sans tracking-wide">
          5 Comentários
        </div>
        
        <div className="space-y-4">
          {comments.map((c, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-slate-300 flex text-[13px] font-sans text-slate-800 hover:shadow-md transition-shadow"
            >
               <div className="w-16 bg-slate-50 flex justify-center pt-3 border-r border-slate-300 shrink-0">
                 <img src={c.img} alt={c.name} className="w-10 h-10 object-cover rounded-sm shadow-sm" />
               </div>
               <div className="flex-1 flex flex-col">
                 <div className="p-3 border-b border-slate-300">
                    <span className="text-[#365899] font-bold cursor-pointer hover:underline">{c.name}</span>
                    <p className="mt-1 leading-snug">{c.text}</p>
                 </div>
                 <div className="p-2 px-3 text-[#365899] font-semibold bg-slate-50 flex flex-wrap gap-x-3 gap-y-1 items-center shadow-inner">
                    <span className="cursor-pointer hover:underline">Curtir</span>
                    <span className="cursor-pointer hover:underline">Responder</span>
                    <span className="flex items-center gap-1 text-slate-500 font-normal">
                      <span className="text-sm tracking-tighter">{c.emojis}</span> {c.likes}
                    </span>
                    <span className="text-slate-400 font-normal text-[12px]">{c.time}</span>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-1.5 text-[#3b5998] hover:underline cursor-pointer text-xs font-sans">
          <svg className="w-[14px] h-[14px] text-white bg-[#3b5998] rounded-[2px]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z" />
          </svg>
          Plug-in social do Facebook
        </div>
      </motion.div>
    </section>
  );
};

const FAQItem = ({q, a}: any) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-slate-200 bg-white mb-3 shadow-sm rounded-xl overflow-hidden"
    >
      <button onClick={() => setOpen(!open)} className="w-full p-5 text-left font-bold text-slate-800 text-sm md:text-base flex justify-between items-center hover:bg-slate-50 transition-colors">
        <span className="pr-4"><span className="text-[#ec008c] mr-3 text-lg">•</span> {q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-slate-600 font-medium text-sm md:text-base leading-relaxed border-t border-slate-100/50 bg-slate-50/30">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const Footer = () => (
  <>
  <section className="py-16 bg-[#f1f5f9]">
    <div className="max-w-3xl mx-auto px-4">
      <div className="flex justify-center mb-10">
        <img src="https://educacaokids.com.br/wp-content/uploads/2023/04/site-blindado-1-300x76.png" alt="Site Blindado" className="h-10 md:h-12 w-auto" />
      </div>
      <h2 className="text-2xl font-bold text-center text-slate-800 mb-10">PERGUNTAS FREQUENTES</h2>
      <FAQItem q="Quais são as Formas de Pagamento?" a="Você pode pagar via PIX." />
      <FAQItem q="Como acesso a plataforma?" a="O acesso a Área de Membros é enviado para seu e-mail imediatamente após a confirmação do pagamento. Lá você poderá baixar todo o conteúdo em PDF!" />
      <FAQItem q="Tenho que pagar todo mês?" a="Não, o pagamento é apenas uma vez e você poderá ter acesso a ele vitalício." />
      <FAQItem q="Posso tirar dúvidas?" a="Sim! Basta chamar nossa equipe de suporte pelo botão de WhatsApp dessa página, pelo nosso Instagram, pelo Facebook ou por email." />
      <FAQItem q="Para quem é indicado o material?" a="Nossas atividades de grafismo fonético são projetadas para crianças de diferentes faixas etárias, abrangendo desde a primeira infância até o ensino fundamental." />
      <FAQItem q="Quais são os benefícios Grafismos Fonéticos?" a="Os grafismos fonéticos facilitam a associação entre som e letra, desenvolvem a consciência fonológica e fortalecem a memória visual e auditiva. Eles também aprimoram a coordenação motora e tornam a leitura mais interessante, ajudando a prevenir dificuldades de leitura e incentivando o aprendizado ativo." />
    </div>
  </section>
  <footer className="bg-slate-900 text-slate-400 py-6 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <p className="font-semibold text-slate-300 tracking-wide uppercase text-[11px]">
        © {new Date().getFullYear()} KIT EDUCAR. TODOS OS DIREITOS RESERVADOS.
      </p>
    </div>
  </footer>
  </>
);

export default function App() {
  useEffect(() => {
    trackViewContent('Kit Educar', 'kit-01', 19.90, 'BRL');
  }, []);

  return (
    <div className="w-full">
      <SectionHero />
      <SectionPains />
      <SectionProblem />
      <SectionSolution />
      <SectionWorks />
      <SectionGrid />
      <SectionVideo />
      <SectionBenefits />
      <SectionComments />
      <SectionInside />
      <SectionHowItWorks />
      <SectionBonus />
      <SectionOffer />
      <Footer />
    </div>
  )
}
