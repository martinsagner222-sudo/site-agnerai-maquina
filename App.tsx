import React from 'react';
import { 
  Bot, 
  Cpu, 
  Zap, 
  Users, 
  BarChart3, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  BrainCircuit,
  ShieldCheck,
  Globe,
  Sparkles,
  XCircle,
  Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-800/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center gap-2">
          <div className="bg-cyan-500/20 p-2 rounded-lg border border-cyan-500/30">
            <Bot className="w-8 h-8 text-cyan-400" />
          </div>
          <span className="text-2xl font-mono font-bold tracking-tighter text-white">
            AGNER<span className="text-cyan-400">AI</span>
          </span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            <a href="#features" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Funcionalidades</a>
            <a href="#comparison" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Vantagens</a>
            <a href="#plans" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Planos</a>
            <a href="#contact" className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(8,145,178,0.5)] hover:shadow-[0_0_25px_rgba(8,145,178,0.7)]">
              Falar com Agente
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-slate-950 to-slate-950 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-sm font-mono mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            Sistema Operacional 24/7 Ativo
          </div>

          <h1 className="text-4xl md:text-6xl font-mono font-black tracking-tight text-white mb-8 leading-tight max-w-5xl mx-auto">
            Transforme seu atendimento em uma <span className="gradient-text">máquina que converte clientes</span> 24 horas por dia
            <span className="block text-2xl md:text-4xl mt-4 text-slate-300 font-sans font-bold">— sem depender de equipe humana.</span>
          </h1>
          
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
            Ative um Agente de IA que responde, agenda, vende e organiza tudo enquanto você foca no que realmente importa: <strong className="text-white">faturar mais.</strong>
          </p>

          <div className="mt-8 max-w-3xl mx-auto bg-cyan-950/40 border border-cyan-500/20 rounded-xl p-4 md:p-6 backdrop-blur-sm">
            <p className="text-base md:text-lg text-cyan-300 font-medium italic">
              "Você lucra mais, perde menos oportunidades e libera sua operação do caos — ativação em minutos e resultado nos primeiros 7 dias."
            </p>
          </div>

          <div className="mt-10 flex justify-center gap-4 flex-col sm:flex-row">
            <a href="#plans" className="group relative px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white text-lg font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative flex items-center gap-2">
                Contratar Agente Digital <ArrowRight className="w-5 h-5" />
              </span>
            </a>
            <a href="#demo" className="px-8 py-4 bg-transparent border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-white text-lg font-medium rounded-lg transition-all backdrop-blur-sm">
              Ver Demonstração
            </a>
          </div>
        </motion.div>

        {/* Stats Strip */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-800 pt-10">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-mono font-bold text-white">24/7</span>
            <span className="text-sm text-slate-500 uppercase tracking-wider">Disponibilidade</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-mono font-bold text-cyan-400">0%</span>
            <span className="text-sm text-slate-500 uppercase tracking-wider">Taxa de Erro Humano</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-mono font-bold text-white">100x</span>
            <span className="text-sm text-slate-500 uppercase tracking-wider">Mais Rápido</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="p-8 rounded-2xl glass-panel hover:border-cyan-500/30 transition-all group hover:-translate-y-2">
    <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
      <Icon className="w-7 h-7 text-cyan-400" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 font-mono">{title}</h3>
    <p className="text-slate-400 leading-relaxed">
      {description}
    </p>
  </div>
);

const Features = () => (
  <section id="features" className="py-24 bg-slate-950 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">O Novo Padrão de <span className="text-cyan-400">Eficiência</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Nossa IA não apenas responde chats. Ela executa processos, fecha vendas e gerencia sua empresa enquanto você dorme.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          icon={BrainCircuit} 
          title="Aprendizado Contínuo" 
          description="Seu agente fica mais inteligente a cada interação. Ele aprende sobre seu negócio e seus clientes automaticamente."
        />
        <FeatureCard 
          icon={Zap} 
          title="Resposta Instantânea" 
          description="Elimine o tempo de espera. Atenda milhares de clientes simultaneamente sem perder a qualidade ou o tom de voz da marca."
        />
        <FeatureCard 
          icon={BarChart3} 
          title="Dados Estratégicos" 
          description="Dashboards em tempo real. Saiba exatamente o que seus clientes querem e como otimizar sua conversão."
        />
        <FeatureCard 
          icon={ShieldCheck} 
          title="Segurança Total" 
          description="Criptografia de ponta a ponta. Os dados da sua empresa e dos seus clientes estão protegidos."
        />
        <FeatureCard 
          icon={Users} 
          title="Substituição Escalável" 
          description="Um único sistema substitui setores inteiros de atendimento e suporte nível 1 e 2."
        />
        <FeatureCard 
          icon={Globe} 
          title="Omnichannel" 
          description="WhatsApp, Instagram, Site e E-mail. Tudo centralizado em uma única inteligência soberana."
        />
      </div>
    </div>
  </section>
);

const Comparison = () => (
  <section id="comparison" className="py-24 bg-slate-900/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-mono">
            Equipe Humana <span className="text-red-500">vs</span> AgnerAI
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            A matemática é simples. A eficiência é brutal. Veja porque as maiores empresas estão migrando para agentes digitais.
          </p>
          
          <ul className="space-y-4">
            {[
              { text: "Disponibilidade 24h sem horas extras", check: true },
              { text: "Sem encargos trabalhistas ou férias", check: true },
              { text: "Memória infinita de todos os processos", check: true },
              { text: "Execução perfeita de scripts de vendas", check: true },
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-white">
                <div className="bg-cyan-500/20 p-1 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                </div>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full"></div>
          <div className="relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
             <div className="grid grid-cols-2 divide-x divide-slate-800">
                <div className="p-8 text-center opacity-50 grayscale">
                   <Users className="w-16 h-16 mx-auto mb-4 text-slate-400" />
                   <h4 className="text-xl font-bold text-slate-300">5 Funcionários</h4>
                   <p className="text-sm text-slate-500 mt-2">R$ 15.000/mês</p>
                   <p className="text-xs text-red-400 mt-1">Falhas humanas</p>
                </div>
                <div className="p-8 text-center bg-cyan-900/10 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-2 bg-cyan-600 text-xs font-bold text-white rounded-bl-lg">VENCEDOR</div>
                   <Bot className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
                   <h4 className="text-xl font-bold text-white">1 Agente AgnerAI</h4>
                   <p className="text-sm text-cyan-200 mt-2">Investimento fixo</p>
                   <p className="text-xs text-cyan-400 mt-1">Perfeição Lógica</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Plans = () => (
  <section id="plans" className="py-24 relative overflow-hidden">
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/05 rounded-full blur-[120px]"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">Escolha Sua <span className="text-cyan-400">Arma</span></h2>
        <p className="text-slate-400">Escale sua operação com a inteligência certa.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        
        {/* Plan 1: Essencial (Basic/Weak) */}
        <div className="glass-panel rounded-2xl p-6 border-slate-800 flex flex-col h-[500px] lg:mt-8 hover:border-slate-700 transition-colors opacity-80 hover:opacity-100">
          <h3 className="text-lg font-bold text-slate-400 mb-1">Essencial</h3>
          <div className="text-xs text-slate-600 font-mono mb-6 uppercase">Apenas para testes</div>
          
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-3xl font-bold text-slate-300">R$ 147</span>
            <span className="text-xs text-slate-600">/mês</span>
          </div>
          <p className="text-slate-500 mb-6 text-xs leading-relaxed">
            Recursos limitados para quem quer apenas conhecer a ferramenta sem compromisso.
          </p>
          
          <ul className="space-y-3 mb-6 flex-1">
            <li className="flex items-center gap-2 text-xs text-slate-400">
              <div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center"><span className="w-1 h-1 bg-slate-500 rounded-full"></span></div> 
              Atendimento Lento
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-400">
              <div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center"><span className="w-1 h-1 bg-slate-500 rounded-full"></span></div> 
              Apenas 1 Canal (WhatsApp)
            </li>
             <li className="flex items-center gap-2 text-xs text-slate-400">
              <div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center"><span className="w-1 h-1 bg-slate-500 rounded-full"></span></div> 
              Respostas Simples
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-600 line-through decoration-slate-600">
              <XCircle className="w-3 h-3" /> Inteligência Avançada
            </li>
            <li className="flex items-center gap-2 text-xs text-slate-600 line-through decoration-slate-600">
              <XCircle className="w-3 h-3" /> Dashboard de Vendas
            </li>
          </ul>

          <button className="w-full py-2.5 rounded-lg border border-slate-800 text-slate-500 hover:bg-slate-800/50 transition-colors text-sm font-medium">
            Escolher Básico
          </button>
        </div>

        {/* Plan 2: Profissional (HERO - Rational Choice) */}
        <div className="relative bg-slate-900 rounded-3xl p-8 border-2 border-cyan-500 flex flex-col h-full transform lg:scale-110 shadow-[0_0_50px_rgba(6,182,212,0.25)] z-20">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-1.5 rounded-full text-xs font-bold tracking-widest shadow-lg flex items-center gap-2 whitespace-nowrap">
            <Sparkles className="w-3 h-3 animate-pulse" /> MAIS ESCOLHIDO
          </div>
          
          <div className="absolute inset-0 bg-cyan-400/5 rounded-3xl pointer-events-none"></div>

          <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            Profissional <Rocket className="w-5 h-5 text-cyan-400" />
          </h3>
          <div className="text-xs text-cyan-400 font-mono mb-6 uppercase tracking-widest">A Máquina Completa</div>
          
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-5xl font-bold text-white">R$ 297</span>
            <span className="text-sm text-cyan-200">/mês</span>
          </div>

          <p className="text-slate-300 mb-8 text-sm font-medium border-b border-slate-800 pb-6">
            A escolha inteligente. Substitui um funcionário inteiro por uma fração do custo. Otimizado para conversão máxima.
          </p>
          
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-sm text-white font-semibold">
              <div className="bg-cyan-500 p-1 rounded-full"><CheckCircle2 className="w-3 h-3 text-white" /></div>
              IA Generativa Persuasiva
            </li>
            <li className="flex items-center gap-3 text-sm text-white">
              <div className="bg-cyan-500/20 p-1 rounded-full"><CheckCircle2 className="w-3 h-3 text-cyan-400" /></div>
              Treinado com Seus Dados
            </li>
            <li className="flex items-center gap-3 text-sm text-white">
              <div className="bg-cyan-500/20 p-1 rounded-full"><CheckCircle2 className="w-3 h-3 text-cyan-400" /></div>
              WhatsApp + E-mail
            </li>
            <li className="flex items-center gap-3 text-sm text-white">
              <div className="bg-cyan-500/20 p-1 rounded-full"><CheckCircle2 className="w-3 h-3 text-cyan-400" /></div>
              Recuperação de Vendas
            </li>
             <li className="flex items-center gap-3 text-sm text-white">
              <div className="bg-cyan-500/20 p-1 rounded-full"><CheckCircle2 className="w-3 h-3 text-cyan-400" /></div>
              Suporte Prioritário
            </li>
          </ul>

          <a 
            href="https://wa.me/38997365520?text=Quero%20o%20plano%20Profissional%20de%20R%24297"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white transition-all font-bold shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 group relative overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
            Quero Automatizar Agora <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-center text-[10px] text-slate-500 mt-3 uppercase tracking-wide">Garantia de 7 dias ou seu dinheiro de volta</p>
        </div>

        {/* Plan 3: Dominante (High Anchor) */}
        <div className="glass-panel rounded-2xl p-8 border-slate-700 flex flex-col h-[500px] lg:mt-8 hover:border-purple-500/50 transition-colors">
          <h3 className="text-lg font-bold text-white mb-1">Dominante</h3>
          <div className="text-xs text-purple-400 font-mono mb-6 uppercase">Escala Agressiva</div>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-3xl font-bold text-white">R$ 597</span>
            <span className="text-xs text-slate-400">/mês</span>
          </div>
          <p className="text-slate-400 mb-6 text-xs leading-relaxed">
            Poder de fogo total. Para quem já fatura alto e quer dominar o nicho sem olhar para trás.
          </p>
          
          <ul className="space-y-3 mb-6 flex-1">
            <li className="flex items-center gap-3 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-purple-500" /> Tudo do Profissional
            </li>
            <li className="flex items-center gap-3 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-purple-500" /> Múltiplos Agentes Simultâneos
            </li>
            <li className="flex items-center gap-3 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-purple-500" /> Integração via API & Webhooks
            </li>
             <li className="flex items-center gap-3 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-purple-500" /> Gerente de Conta Exclusivo
            </li>
             <li className="flex items-center gap-3 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-purple-500" /> Relatórios de IA Preditiva
            </li>
          </ul>

          <button className="w-full py-2.5 rounded-lg border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-colors text-sm font-medium">
            Selecionar Dominante
          </button>
        </div>

      </div>
    </div>
  </section>
);

const CTA = () => (
  <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
    {/* Background elements for premium feel */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-50"></div>
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-50"></div>
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-mono tracking-tight">
          Construído para Negócios que Querem <span className="text-cyan-400">Liderar</span>
          <br className="hidden md:block" />
          <span className="text-slate-500 text-2xl md:text-4xl">— Não Apenas Acompanhar</span>
        </h2>

        <div className="prose prose-lg prose-invert mx-auto text-slate-400 leading-relaxed">
          <p className="mb-6">
            Empresas que crescem rápido não podem depender de processos manuais, equipe limitada ou atendimentos lentos.
            A <span className="text-cyan-100 font-semibold">AgnerAI</span> foi criada para empresários que entendem que cada minuto perdido representa clientes perdidos — e que tecnologia não é mais opcional: <strong>é vantagem competitiva.</strong>
          </p>
          
          <p className="mb-8">
            Nossa inteligência opera 24 horas por dia, responde com precisão milimétrica e transforma qualquer canal digital em uma máquina de conversão.
            Não trabalhamos com promessas vagas. Entregamos eficiência, escala e resultados reais, replicáveis e mensuráveis.
          </p>

          <div className="bg-cyan-950/30 border-l-4 border-cyan-500 p-6 my-10 text-left rounded-r-lg">
            <p className="text-xl text-cyan-50 font-medium italic m-0">
              "Somos a ponte entre onde sua empresa está… e onde ela deveria estar há anos."
            </p>
          </div>

          <p className="text-white font-bold text-lg">
            AgnerAI — Inteligência em Comando.
            <br />
            <span className="font-normal text-slate-400">A tecnologia que empresas sérias escolhem quando decidem parar de improvisar.</span>
          </p>
        </div>
      </div>

      {/* Action Box */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 md:p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden group">
         <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors duration-500"></div>
         
         <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Pronto para ativar sua evolução?</h3>
         <p className="text-slate-400 mb-8 relative z-10">
           Clique abaixo e fale diretamente com o agente responsável pelo seu onboarding personalizado.
           <br/>
           <span className="text-cyan-400 font-medium">Ativação imediata. Sem burocracia. Sem complicação.</span>
         </p>

         <a 
           href="https://wa.me/38997365520?text=Quero%20iniciar%20os%207%20dias%20gratuitos%20da%20AgnerAI" 
           target="_blank" 
           rel="noopener noreferrer"
           className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-full text-xl font-bold transition-all hover:scale-105 shadow-[0_0_30px_rgba(22,163,74,0.4)] relative z-10 group-hover:shadow-[0_0_50px_rgba(22,163,74,0.6)]"
         >
           <MessageSquare className="w-6 h-6" />
           ATIVAR AGORA - TESTE 7 DIAS
         </a>
         
         <p className="mt-6 text-sm text-slate-600 font-mono relative z-10">
           Whatsapp Direto: 38 99736-5520
         </p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 border-t border-slate-900 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <Cpu className="w-6 h-6 text-cyan-600" />
        <span className="text-xl font-mono font-bold text-slate-300">AGNER<span className="text-cyan-600">AI</span></span>
      </div>
      <p className="text-slate-600 text-sm">
        © 2024 AgnerAI. Todos os direitos reservados. A revolução é agora.
      </p>
      <div className="flex gap-6">
        <a href="#" className="text-slate-600 hover:text-cyan-400 transition-colors">Termos</a>
        <a href="#" className="text-slate-600 hover:text-cyan-400 transition-colors">Privacidade</a>
      </div>
    </div>
  </footer>
);

const WhatsAppFloating = () => (
  <a 
    href="https://wa.me/38997365520"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all hover:scale-110 animate-bounce"
  >
    <MessageSquare className="w-8 h-8" fill="currentColor" />
  </a>
);

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
      <Navbar />
      <Hero />
      <Features />
      <Comparison />
      <Plans />
      <CTA />
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

export default App;