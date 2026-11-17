import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, MapPin, ChevronDown, BookOpen, Calendar } from 'lucide-react';

export default function Hero({ onOpenMenu, onOpenReservation }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen min-h-[700px] flex items-end justify-center overflow-hidden bg-navy-950"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0 md:p-5"
        style={{ y: yBackground }}
      >
        <picture className="block w-full h-full md:rounded-[24px] md:overflow-hidden relative">
          <source media="(min-width: 768px)" srcSet="/hero_desktop_bistrot.jpeg" />
          <img
            src="/hero_mobile_bistrot.jpeg"
            alt="Guina Restaurante & Wine Bar São Paulo"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </picture>

        {/* Deep luxury royal navy / dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/75 via-navy-950/30 to-navy-950/85" />
        
        {/* Soft Ambient Border for Desktop */}
        <div className="absolute inset-5 rounded-[24px] border border-gold/20 hidden md:block pointer-events-none" />
      </motion.div>

      {/* Hero Content - Clean identical to reference without logo overlay */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="absolute top-32 sm:top-36 md:top-40 lg:top-44 xl:top-48 left-0 right-0 z-20 px-4 md:px-8 text-center pointer-events-none flex flex-col items-center"
      >
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-champagne mb-3 sm:mb-4 shadow-lg">
          <MapPin size={13} className="text-gold" />
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.35em] uppercase font-semibold text-champagne">
            São Paulo · Vila Mariana
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-champagne max-w-4xl tracking-tight leading-[1.15] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] font-normal">
          Restaurante Mais Bem Avaliado de São Paulo
        </h1>

        {/* 5 Golden Stars */}
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={22}
              className="text-[#FBBF24] fill-[#FBBF24] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            />
          ))}
          <span className="ml-2 font-sans text-xs tracking-widest text-gold-light font-semibold uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Nota 4.9 · Google Reviews
          </span>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 z-20 flex flex-wrap items-center justify-center gap-3.5 px-6 pointer-events-auto">
        <button
          onClick={onOpenReservation}
          className="btn-gold text-xs py-3.5 px-7 shadow-xl flex items-center gap-2.5 cursor-pointer"
        >
          <Calendar size={15} className="text-navy-950" />
          <span>Reservar Agora</span>
        </button>

        <button
          onClick={onOpenMenu}
          className="btn-outline-champagne text-xs py-3.5 px-7 shadow-xl bg-black/40 backdrop-blur-md inline-flex items-center gap-2 group hover:bg-black/60 transition-all cursor-pointer"
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
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-champagne/70 hover:text-gold transition-colors cursor-pointer"
        aria-label="Rolar para baixo"
      >
        <span className="font-sans text-[8.5px] tracking-[0.5em] uppercase font-semibold">
          Découvrir
        </span>
        <ChevronDown size={17} className="text-gold" />
      </motion.button>
    </section>
  );
}
