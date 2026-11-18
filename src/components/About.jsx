import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Wine, Check } from 'lucide-react';

export default function About({ onOpenReservation }) {
  const highlights = [
    "Homenagem emocionante e acolhimento familiar",
    "Chefs com formação e especializações Le Cordon Bleu",
    "Adega exclusiva com mais de 120 rótulos selecionados",
    "Alta gastronomia com o selo de excelência Grupo de Ville",
  ];

  return (
    <section id="histoire" className="section-warm-bg py-16 md:py-24 relative overflow-hidden">
      {/* Decorative floral hydrangea / gold background blur */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-hydrangea/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-gold/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image with floating badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl card-shadow border border-gold/25 relative group">
              <img
                src="/guina_facade_toast.jpg"
                alt="Chefs e Sommelier brindando no Guina Restaurante & Wine Bar"
                className="w-full h-full object-cover object-[center_20%] transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-4 md:-right-8 w-52 md:w-64 bg-navy-900 border border-gold/40 rounded-2xl p-4 sm:p-5 shadow-2xl"
            >
              <div className="font-serif text-lg sm:text-xl text-gold font-bold leading-tight mb-1">
                Grupo de Ville
              </div>
              <div className="font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-champagne/80 font-semibold leading-relaxed">
                Chefs Roma Lopes &amp; Carol Barbosa
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Narrative Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="lg:pl-8 space-y-5"
          >
            <div>
              <p className="font-sans text-[10.5px] tracking-[0.4em] uppercase text-navy-700 font-bold mb-3 flex items-center gap-2">
                <span className="w-8 h-[1.5px] bg-gold" />
                Origem &amp; Afeto &bull; Vila Mariana
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy-950 leading-[1.2]">
                Nossa História <br />
                <span className="italic font-light text-navy-800 text-xl sm:text-2xl md:text-3xl block mt-2 font-serif">
                  Guina Restaurante: Afeto, Técnica e Memória no Coração da Vila Mariana
                </span>
              </h2>
            </div>

            <div className="w-12 h-[2px] bg-gold" />

            <div className="space-y-4 text-navy-900/80 font-body text-base md:text-[17px] leading-relaxed">
              <p>
                No pulsar gastronômico da Vila Mariana, um dos bairros mais desejados de São Paulo, nasce o <strong>Guina Restaurante</strong>. O mais novo endereço de destaque da cidade chega com o selo de excelência do <strong>Grupo de Ville</strong>, comandado pelos chefs proprietários <strong>Roma Lopes e Carol Barbosa</strong> — dupla com sólida formação e diversas especializações pela <em>Le Cordon Bleu</em>, a mais renomada escola de gastronomia do mundo.
              </p>
              <p>
                Mas, por trás do rigor técnico e da alta gastronomia, existe uma história de profundo afeto que dá nome e alma à casa.
              </p>
              <p>
                O restaurante é uma homenagem emocionante a <strong>Roger</strong>, pai da chef Carol e sogro do chef Roma, cuja partida entristeceu a família, mas deixou um legado eterno de inspiração. Grande apreciador de bons vinhos e da boa mesa, Roger era conhecido por sua alma simples e pela gentileza genuína com que tratava a todos, sem jamais fazer qualquer distinção.
              </p>
              <p>
                Durante a busca por um nome que traduzisse a essência desse novo projeto, a lembrança mais doce falou mais alto: <strong>&ldquo;Guina&rdquo;</strong> era o apelido carinhoso pelo qual Roger chamava Carol. Na família, sempre que essa palavra era ouvida, anunciava algo bom — um sorriso, uma surpresa, uma notícia feliz ou um abraço apertado.
              </p>
              <p>
                Assim nasceu o <strong>Guina Restaurante</strong>: em memória de Roger e inspirado na sua forma generosa de acolher as pessoas.
              </p>
              <p>
                Cada detalhe da casa reflete esse espírito. No Guina, a técnica refinada de Roma Lopes e Carol Barbosa encontra o calor de um lar. É um lugar onde vinhos cuidadosamente selecionados acompanham pratos elaborados com carinho pelos próprios chefs, transformando cada refeição em uma celebração à vida, à boa companhia e às memórias que aquecem o coração.
              </p>
              <div className="pt-3 pb-1 border-l-2 border-gold pl-4 italic text-navy-950 font-serif text-lg md:text-xl font-medium">
                &ldquo;Seja bem-vindo ao Guina. Sinta-se abraçado.&rdquo;
              </div>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((text, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center shrink-0 mt-0.5 text-navy-900">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span className="font-sans text-xs text-navy-900/85 font-medium leading-snug">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenReservation}
                className="btn-gold text-xs py-3.5 px-7 shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Conhecer e Reservar</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
