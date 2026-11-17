import React from 'react';
import { motion } from 'framer-motion';
import { Wine, Sparkles, ChevronRight, GlassWater } from 'lucide-react';

export default function WineBarSection({ onOpenReservation }) {
  const stats = [
    { number: "120+", label: "Rótulos Selecionados" },
    { number: "12", label: "Sobremesas Autorais" },
    { number: "6", label: "Grandes Regiões Francesas" },
    { number: "Sommelier", label: "Harmonização Exclusiva" },
  ];

  return (
    <section id="vinhos" className="dark-section-bg py-16 md:py-24 overflow-hidden relative border-t border-gold/20 text-champagne">
      {/* Decorative Gold Glow & Hydrangea Glow */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-gold/10 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-hydrangea/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Wine Bar Concept */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div>
              <p className="font-sans text-[10.5px] tracking-[0.4em] uppercase text-gold font-bold mb-4 flex items-center gap-2">
                <Wine size={15} className="text-gold" />
                La Cave &amp; Wine Bar
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-champagne leading-tight">
                Vinhos Nobres &amp; <br />
                <em className="italic font-light text-gold-light">Harmonização Autoral</em>
              </h2>
            </div>

            <div className="w-12 h-[2px] bg-gold" />

            <p className="font-body text-champagne/75 leading-relaxed text-base md:text-[17px]">
              O Wine Bar do Guina é um refúgio para apreciadores de grandes safras e experiências memoráveis. Nossa adega climatizada reúne mais de 120 rótulos das regiões mais prestigiadas do mundo, como Bordeaux, Borgonha, Vale do Loire, Champagne e além.
            </p>

            <p className="font-body text-champagne/70 leading-relaxed text-sm md:text-base">
              Nosso sommelier dedicado está à disposição para guiar sua escolha, harmonizando cada taça perfeitamente com nossas entradas, pratos principais e sobremesas artesanais.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-2">
              {stats.map((item, idx) => (
                <div key={idx} className="border-l-2 border-gold/40 pl-4 py-1 hover:border-gold transition-colors">
                  <div className="font-serif text-2xl sm:text-3xl text-gold font-bold leading-tight mb-1">
                    {item.number}
                  </div>
                  <div className="font-sans text-[9px] tracking-[0.25em] uppercase text-champagne/60 font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onOpenReservation}
                className="btn-gold flex items-center gap-2 cursor-pointer shadow-gold-subtle"
              >
                <span>Reservar Experiência no Wine Bar</span>
                <ChevronRight size={15} />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Wine & Dessert Photos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-2xl card-shadow border border-gold/30 mt-8 group relative">
              <img
                src="/wine-glasses-bistrot.jpeg"
                alt="Taças de vinho no Guina Wine Bar"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="font-serif text-sm font-semibold text-champagne block">
                  La Cave Sélection
                </span>
                <span className="font-sans text-[8px] tracking-widest uppercase text-gold">
                  Grandes Terroirs
                </span>
              </div>
            </div>

            <div className="aspect-[3/4] overflow-hidden rounded-2xl card-shadow border border-gold/30 group relative">
              <img
                src="/dessert-chocolate-bistrot.jpeg"
                alt="Sobremesa com chocolate e vinho do Porto"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="font-serif text-sm font-semibold text-champagne block">
                  Sobremesas Finas
                </span>
                <span className="font-sans text-[8px] tracking-widest uppercase text-gold">
                  Chocolat &amp; Pâtisserie
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
