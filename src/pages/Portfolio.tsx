import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, BookOpen, Star, Sparkles } from 'lucide-react';
import { ProjectButton } from '../components/ProjectButton';
import BlurText from '../components/BlurText';
import GradientText from '../components/GradientText';

const chapters = [
    {
        id: 'cap1',
        title: 'Capítulo 1: O Caminho da Conversão',
        subtitle: 'Resumo Estratégico',
        description: 'O manual definitivo (aprox. 10 páginas) com um super resumo de tudo que você precisa para começar a converter muito mais. A base de todo o ecossistema.',
        price: 'R$ 59,90'
    },
    {
        id: 'cap2',
        title: 'Capítulo 2: Design Premium',
        subtitle: 'Identidade Visual',
        description: 'Como aplicar conceitos de UI Design para que sua marca passe credibilidade instantânea, aumentando a percepção de valor do seu serviço.',
        price: 'R$ 67,99'
    },
    {
        id: 'cap3',
        title: 'Capítulo 3: Copywriting Hipnótico',
        subtitle: 'Textos que Vendem',
        description: 'Estruturas prontas de textos focadas na dor e desejo do cliente. Cerca de 10 páginas de pura persuasão aplicável hoje mesmo.',
        price: 'R$ 54,90'
    },
    {
        id: 'cap4',
        title: 'Capítulo 4: Maestria em SEO',
        subtitle: 'Tráfego Orgânico',
        description: 'Descubra os ajustes exatos que colocam páginas no topo do Google. Sem enrolação, apenas os filtros práticos e checklists.',
        price: 'R$ 78,99'
    },
    {
        id: 'cap5',
        title: 'Capítulo 5: Performance Máxima',
        subtitle: 'Velocidade Extrema',
        description: 'Aprenda a cortar o tempo de carregamento da sua página pela metade. Cada segundo ganho é dinheiro que deixa de ser perdido.',
        price: 'R$ 64,90'
    },
    {
        id: 'cap6',
        title: 'Capítulo 6: Ancoragem de Preços',
        subtitle: 'Psicologia de Vendas',
        description: 'Nunca mais venda barato. Aprenda como moldar a percepção de preço do seu cliente para que ele ache a sua oferta barata.',
        price: 'R$ 59,99'
    },
    {
        id: 'cap7',
        title: 'Capítulo 7: Estrutura UX Perfeita',
        subtitle: 'Usabilidade',
        description: 'Como guiar o clique do usuário. A ciência por trás da jornada de compra sem atritos e objeções.',
        price: 'R$ 82,90'
    },
    {
        id: 'cap8',
        title: 'Capítulo 8: Escala e Automação',
        subtitle: 'Multiplicando Lucros',
        description: 'A cereja do bolo. Após dominar todas as etapas, veja como utilizar ferramentas simples para escalar suas vendas no piloto automático.',
        price: 'R$ 97,99'
    }
];

export default function Portfolio() {
    return (
        <div className="w-full bg-neutral-900 min-h-screen relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/20 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

            <header className="py-24 px-6 max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-medium mb-8 backdrop-blur-md"
                >
                    <Sparkles className="w-4 h-4" />
                    <span>Lançamento Exclusivo</span>
                </motion.div>

                <div className="flex justify-center mb-6">
                    <GradientText
                        colors={["#34d399", "#3b82f6", "#34d399"]}
                        animationSpeed={4}
                        showBorder={false}
                        className="text-[40px] md:text-[64px] lg:text-[90px] font-bold leading-[0.9] tracking-[-0.04em]"
                    >
                        Masterclass Pack
                    </GradientText>
                </div>
                <div className="flex justify-center max-w-3xl mx-auto mt-6">
                    <BlurText 
                        text="8 Capítulos diretos ao ponto (aprox. 10 páginas cada). De estratégias de design e persuasão até performance e escala extrema. Tudo que você precisa saber, sem enrolação."
                        className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed justify-center"
                        delay={2}
                    />
                </div>
            </header>

            <section className="py-12 px-6 max-w-7xl mx-auto z-10 relative">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {chapters.map((chapter, index) => (
                        <motion.div 
                            key={chapter.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            className="bg-neutral-800/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-neutral-800/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all group flex flex-col cursor-crosshair"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/5 flex items-center justify-center text-emerald-400 mb-6">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            
                            <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                                {chapter.title.split(':')[0]}
                            </h3>
                            <p className="text-emerald-400 text-sm font-semibold mb-4">
                                {chapter.subtitle}
                            </p>
                            
                            <p className="text-neutral-400 text-sm leading-relaxed mb-8 flex-grow">
                                {chapter.description}
                            </p>
                            
                            <div className="border-t border-white/5 pt-6 mt-auto">
                                <div className="flex items-center justify-between">
                                    <span className="text-neutral-500 text-xs tracking-wider uppercase">Valor Avulso</span>
                                    <span className="text-white font-bold text-lg">{chapter.price}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-24 px-6 max-w-5xl mx-auto z-10 relative">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[2.5rem] bg-gradient-to-br from-emerald-900/40 to-blue-900/40 border border-white/10 p-10 md:p-16 text-center overflow-hidden"
                >
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-emerald-500/5 mix-blend-overlay"></div>

                    <div className="relative z-10">
                        <div className="flex justify-center gap-1 mb-8">
                            {[1,2,3,4,5].map(star => (
                                <Star key={star} className="w-6 h-6 text-emerald-400 fill-emerald-400" />
                            ))}
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Masterclass Pack Completo
                        </h2>
                        
                        <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                            Não compre os capítulos avulsos e acabe pagando <span className="line-through opacity-60">mais de R$ 560,00</span>. 
                            Leve o pacote completo com todos os 8 e-books agora com um super desconto exclusivo. 
                            Acesso imediato a todas as estratégias.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                            <div className="text-right hidden md:block">
                                <p className="text-neutral-500 text-sm font-medium line-through">R$ 567,46</p>
                            </div>
                            <div className="bg-emerald-500/10 border border-emerald-500/30 px-8 py-4 rounded-3xl">
                                <span className="text-emerald-400 font-bold text-5xl tracking-tighter">R$ 97,99</span>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <ProjectButton href="#">
                                Adquirir Pack Completo Agora
                            </ProjectButton>
                        </div>
                        <p className="text-neutral-500 text-sm mt-6 flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-4 h-4" /> Pagamento 100% Seguro e Acesso Imediato
                        </p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
