import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, ExternalLink } from 'lucide-react';
import { reviews } from '../data/reviewsData';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[currentIndex];

  return (
    <section id="avaliacoes" className="py-14 md:py-22 relative overflow-hidden bg-gradient-to-b from-[#F5F1E8] via-[#FDFBF7] to-[#EBF1FA]">
      {/* Background Soft Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-gold/15 via-hydrangea/15 to-navy-700/15 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-950/5 border border-gold/40 text-navy-900 mb-3.5">
            <CheckCircle2 size={13} className="text-gold" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-navy-900">
              Avaliações Verificadas · Google Reviews
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy-950 font-normal leading-tight mb-4">
            A Opinião de Quem Já Se Encantou <em className="italic font-light">Pelo Trabalho dos Chefs</em>
          </h2>

          <div className="flex items-center justify-center gap-2 text-gold">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="font-serif text-xl font-bold text-navy-900 ml-1">4.9 / 5.0</span>
            <span className="text-navy-900/50 text-sm font-sans font-medium">(1.280+ avaliações)</span>
          </div>
        </div>

        {/* Featured Testimonial Card Slider */}
        <div className="relative max-w-3xl mx-auto">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-gold/30 shadow-xl relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-gold/20 -scale-x-100 pointer-events-none" />

              <div className="flex items-center gap-1.5 mb-5">
                {[...Array(current.stars)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
                <span className="ml-3 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-gold/10 text-navy-900 border border-gold/30">
                  {current.badge}
                </span>
              </div>

              <p className="font-serif text-lg sm:text-xl md:text-2xl text-navy-950 leading-relaxed italic mb-6">
                "{current.text}"
              </p>

              <div className="flex items-center justify-between border-t border-navy-900/10 pt-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-navy-900 text-gold font-serif font-bold text-sm flex items-center justify-center shadow-md border border-gold/40">
                    {current.initials}
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-navy-950">
                      {current.name}
                    </h4>
                    <p className="font-sans text-xs text-navy-900/60 font-medium">
                      {current.location} · {current.date}
                    </p>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevReview}
                    className="p-2.5 rounded-full border border-gold/40 text-navy-900 hover:bg-gold/15 transition-colors"
                    aria-label="Avaliação anterior"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextReview}
                    className="p-2.5 rounded-full border border-gold/40 text-navy-900 hover:bg-gold/15 transition-colors"
                    aria-label="Próxima avaliação"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-gold' : 'w-2 bg-navy-900/20 hover:bg-navy-900/40'
                }`}
                aria-label={`Ir para avaliação ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Link to Google Reviews */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=Guina+Restaurante+São+Paulo+avaliacoes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-wider uppercase text-navy-900 hover:text-gold transition-colors py-2 px-4 rounded-full border border-navy-900/20 hover:border-gold"
          >
            <span>Ver todas as avaliações no Google</span>
            <ExternalLink size={13} />
          </a>
        </div>

      </div>
    </section>
  );
}
