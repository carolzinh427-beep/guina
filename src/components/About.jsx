import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Wine, Check } from 'lucide-react';

export default function About({ onOpenReservation }) {
  const highlights = [
    "Ambiente intimista e romântico à luz de velas",
    "Chefs com formação internacional pela Le Cordon Bleu",
    "Adega exclusiva com mais de 120 rótulos selecionados",
    "Gastronomia assinada pelos chefs do premiado Bistrot de Ville",
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
              className="absolute -bottom-8 -right-4 md:-right-8 w-48 md:w-60 bg-navy-900 border border-gold/40 rounded-2xl p-4 sm:p-5 shadow-2xl"
            >
              <div className="font-serif text-xl sm:text-2xl text-gold font-bold leading-tight mb-1">
                Bistrot de Ville
              </div>
              <div className="font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-champagne/80 font-semibold leading-relaxed">
                Pelos Chefs do Restaurante Premiado
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
                Culinária Autoral &amp; Tradição
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy-950 leading-[1.15]">
                A Arte da Gastronomia <br />
                <em className="italic font-light text-navy-800">em Nosso Cardápio Autoral</em>
              </h2>
            </div>

            <div className="w-12 h-[2px] bg-gold" />

            <div className="space-y-4 text-navy-900/80 font-body text-base md:text-[17px] leading-relaxed">
              <p>
                O <strong>Guina Restaurante &amp; Wine Bar</strong> é a nova e exclusiva casa gastronômica concebida e comandada pelos chefs do premiado <em>Bistrot de Ville</em> na Vila Mariana, São Paulo.
              </p>
              <p>
                Trazendo a mesma maestria culinária, formação internacional pela renomada <em>Le Cordon Bleu</em> e o rigor técnico que consagraram seus criadores, o Guina nasce como uma experiência independente e autoral, unindo pratos refinados a uma curadoria criteriosa de vinhos finos.
              </p>
              <p>
                Nossa exclusiva atmosfera combina elementos barrocos em azul nobre e ouro com a delicadeza de hortênsias frescas, criando o cenário ideal para jantares românticos, comemorações memoráveis e encontros refinados.
              </p>
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
