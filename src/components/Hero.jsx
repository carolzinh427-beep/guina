import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, MapPin, ChevronDown, BookOpen, Calendar } from 'lucide-react';

export default function Hero({ onOpenMenu, onOpenReservation }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen min-h-[620px] max-h-[920px] flex items-end justify-center overflow-hidden bg-navy-950"
    >
      {/* Background Image with Parallax & Sombreamento */}
      <motion.div
        className="absolute inset-0 z-0 md:p-5"
        style={{ y: yBackground }}
      >
        <picture className="block w-full h-full md:rounded-[24px] md:overflow-hidden relative">
          <source media="(min-width: 768px)" srcSet="/hero_desktop_bistrot.jpeg" />
          <img
            src="/hero_mobile_bistrot.jpeg"
            alt="Guina Restaurante & Wine Bar São Paulo"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </picture>

        {/* Sombreamento lateral da esquerda para a direita (não tão forte) */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/45 to-transparent pointer-events-none" />

        {/* Sombreamento vertical suave com vinheta cinematográfica */}
        <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-navy-950/75 via-transparent to-navy-950/90 shadow-[inset_0_0_120px_rgba(5,11,20,0.85)] pointer-events-none" />
        
        {/* Soft Ambient Border for Desktop */}
        <div className="absolute inset-5 rounded-[24px] border border-gold/25 hidden md:block pointer-events-none" />
      </motion.div>

      {/* Hero Content with High-Contrast Shading */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="absolute top-28 sm:top-32 md:top-36 lg:top-40 left-0 right-0 z-20 px-4 md:px-8 text-center pointer-events-none flex flex-col items-center"
      >
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-gold/30 text-champagne mb-3 sm:mb-4 shadow-2xl">
          <MapPin size={13} className="text-gold" />
          <span className="font-sans text-[9px] sm:text-[10.5px] tracking-[0.35em] uppercase font-semibold text-champagne">
            São Paulo · Vila Mariana
          </span>
        </div>

        {/* Headline alterada para Guina Restaurante */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-champagne max-w-4xl tracking-tight leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] font-normal">
          Guina Restaurante
        </h1>

        {/* 5 Golden Stars - Centralizadas e sem o texto */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={22}
              className="text-[#FBBF24] fill-[#FBBF24] drop-shadow-[0_2px_12px_rgba(212,175,55,0.85)]"
            />
          ))}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="absolute bottom-14 sm:bottom-18 left-0 right-0 z-20 flex flex-wrap items-center justify-center gap-3.5 px-6 pointer-events-auto">
        <button
          onClick={onOpenReservation}
          className="btn-gold text-xs py-3.5 px-7 shadow-2xl flex items-center gap-2.5 cursor-pointer"
        >
          <Calendar size={15} className="text-navy-950" />
          <span>Reservar Agora</span>
        </button>

        <button
          onClick={onOpenMenu}
          className="btn-outline-champagne text-xs py-3.5 px-7 shadow-2xl bg-black/55 backdrop-blur-md inline-flex items-center gap-2 group hover:bg-black/75 transition-all cursor-pointer border-gold/40 hover:border-gold"
        >
          <BookOpen size={14} className="text-gold group-hover:scale-110 transition-transform" />
          <span>Ver Cardápio Digital</span>
        </button>
      </div>

      {/* Downward Scroll Indicator */}
      <motion.button
        type="button"
        onClick={() => {
          const histoire = document.getElementById('histoire');
          if (histoire) histoire.scrollIntoView({ behavior: 'smooth' });
        }}
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-champagne/80 hover:text-gold transition-colors cursor-pointer drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        aria-label="Rolar para baixo"
      >
        <span className="font-sans text-[8px] tracking-[0.45em] uppercase font-semibold">
          Découvrir
        </span>
        <ChevronDown size={15} className="text-gold" />
      </motion.button>

      {/* Divisória de Seção Animada e Chique */}
      <div className="absolute bottom-0 inset-x-0 z-30 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-5xl mx-auto px-4 flex items-center justify-center">
          {/* Linha esquerda com reflexo dourado em movimento */}
          <div className="relative flex-1 h-[1.5px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/50 to-gold" />
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-light to-transparent"
            />
          </div>

          {/* Emblema Central Nobre com Flor-de-Lis e Pulso de Luz */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              filter: [
                'drop-shadow(0 0 6px rgba(212,175,55,0.4))',
                'drop-shadow(0 0 16px rgba(212,175,55,0.85))',
                'drop-shadow(0 0 6px rgba(212,175,55,0.4))',
              ],
            }}
            transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
            className="mx-3.5 flex items-center gap-2 text-gold px-3 py-1 rounded-full bg-navy-950/90 border border-gold/45 shadow-2xl backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rotate-45 border border-gold/70 bg-gold/30" />
            <svg className="w-4 h-4 fill-gold text-gold" viewBox="0 0 24 24">
              <path d="M12 2c-.6 2.5-2 4.5-3.5 5.5 1.5.5 3 1.5 3.5 3.5.5-2 2-3 3.5-3.5-1.5-1-2.9-3-3.5-5.5zm0 11c-1 0-2 .5-2.5 1.5-.5 1-1.5 2.5-3.5 2.5 0 2 1.5 3.5 3.5 3.5.8 0 1.5-.3 2-.8v2.3h1v-2.3c.5.5 1.2.8 2 .8 2 0 3.5-1.5 3.5-3.5-2 0-3-1.5-3.5-2.5-.5-1-1.5-1.5-2.5-1.5z"/>
            </svg>
            <span className="w-1.5 h-1.5 rotate-45 border border-gold/70 bg-gold/30" />
          </motion.div>

          {/* Linha direita com reflexo dourado em movimento */}
          <div className="relative flex-1 h-[1.5px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold/50 to-transparent" />
            <motion.div
              animate={{ x: ['100%', '-100%'] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-light to-transparent"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
