import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, Star, UtensilsCrossed } from 'lucide-react';

export default function Highlights() {
  const items = [
    {
      icon: <Award className="w-6 h-6 text-gold mb-2.5 stroke-[1.5]" />,
      title: "Guina Restaurante",
      subtitle: "Excelência e tradição gastronômica",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold mb-2.5 stroke-[1.5]" />,
      title: "Melhor Experiência Gastronômica",
      subtitle: "Alta culinária autoral e exclusiva",
    },
    {
      icon: (
        <div className="flex items-center justify-center gap-1 mb-2.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 sm:w-5 h-4 sm:h-5 text-gold fill-gold" />
          ))}
        </div>
      ),
      title: "Nota 4.9 no Google",
      subtitle: "Mais de 1.280 avaliações de clientes",
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6 text-gold mb-2.5 stroke-[1.5]" />,
      title: "Chefs Le Cordon Bleu",
      subtitle: "Técnica francesa e Wine Bar refinado",
    },
  ];

  return (
    <section className="bg-navy-900 py-6 md:py-9 border-y border-gold/20 relative overflow-hidden">
      {/* Subtle radial golden glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-stretch text-center">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-xl hover:bg-navy-800/40 transition-colors border border-transparent hover:border-gold/15"
            >
              {item.icon}
              <div className="font-serif text-sm sm:text-base md:text-lg text-champagne font-semibold leading-snug mb-1">
                {item.title}
              </div>
              <div className="font-sans text-[8.5px] sm:text-[9.5px] tracking-[0.14em] uppercase text-champagne/60 font-medium">
                {item.subtitle}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
