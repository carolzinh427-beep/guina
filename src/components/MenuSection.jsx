import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, BookOpen, ArrowRight, Award, ChevronRight } from 'lucide-react';

export default function MenuSection({ onOpenFullMenu, onOpenReservation }) {
  const highlights = [
    "Chefs formados pela prestigiada Le Cordon Bleu",
    "Pratos clássicos e autorais com ingredientes nobres",
    "Gastronomia francesa refinada e contemporânea",
    "A melhor experiência gastronômica de São Paulo",
  ];

  return (
    <section id="cardapio" className="section-warm-bg py-24 md:py-36 overflow-hidden relative border-t border-gold/15">
      {/* Soft Ambient Light */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-gold/10 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Descriptions and Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div>
              <p className="font-sans text-[10.5px] tracking-[0.4em] uppercase text-navy-700 font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-[1.5px] bg-gold" />
                Notre Carte &amp; Spécialités
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy-950 leading-tight">
                Nosso Cardápio
              </h2>
            </div>

            <div className="w-12 h-[2px] bg-gold" />

            {/* Features List */}
            <div className="space-y-4 pt-1">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 border-l-2 border-gold/50 pl-4 py-2 hover:border-gold transition-colors"
                >
                  <Award size={18} className="text-gold shrink-0" />
                  <span className="font-serif text-lg sm:text-xl text-navy-950 leading-snug font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="font-body text-navy-900/75 leading-relaxed text-base pt-2">
              De irresistíveis pratos clássicos como Confit de Canard e Boeuf Bourguignon a massas artesanais, frutos do mar nobres e sobremesas que são verdadeiras obras de arte.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onOpenFullMenu}
                className="btn-gold inline-flex items-center gap-2.5 cursor-pointer"
              >
                <BookOpen size={15} />
                <span>Explorar Cardápio Completo</span>
              </button>

              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-1.5 font-sans text-xs tracking-wider uppercase text-navy-900 hover:text-gold transition-colors font-bold py-3 px-3 cursor-pointer"
              >
                <span>Reservar Agora</span>
                <ChevronRight size={15} />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Imagery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-2xl card-shadow border border-gold/30 mt-8 group relative">
              <img
                src="/galeria-3.jpg"
                alt="Ravioli Verde com Camarões"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-navy-950/80 to-transparent">
                <span className="font-serif text-sm font-bold text-champagne block">
                  Ravioli Verde
                </span>
                <span className="font-sans text-[9px] tracking-widest uppercase text-gold">
                  Com Camarões &amp; Chablis
                </span>
              </div>
            </div>

            <div className="aspect-[3/4] overflow-hidden rounded-2xl card-shadow border border-gold/30 group relative">
              <img
                src="/galeria-9.jpg"
                alt="Sobremesas e doces finos"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-navy-950/80 to-transparent">
                <span className="font-serif text-sm font-bold text-champagne block">
                  Mousse &amp; Café
                </span>
                <span className="font-sans text-[9px] tracking-widest uppercase text-gold">
                  Pâtisserie Clássica
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
