import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, MapPin, ChevronDown, BookOpen, Calendar, Sparkles } from 'lucide-react';

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
      className="relative h-screen min-h-[720px] flex items-end justify-center overflow-hidden bg-navy-950"
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
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/45 to-navy-950/90" />
        
        {/* Soft Ambient Border for Desktop */}
        <div className="absolute inset-5 rounded-[24px] border border-gold/20 hidden md:block pointer-events-none" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="absolute top-28 sm:top-32 md:top-36 lg:top-40 left-0 right-0 z-20 px-4 md:px-8 text-center pointer-events-none flex flex-col items-center"
      >
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-navy-950/75 backdrop-blur-md border border-gold/40 text-champagne mb-4 sm:mb-5 shadow-gold-subtle">
          <MapPin size={13} className="text-gold" />
          <span className="font-sans text-[9px] sm:text-[10.5px] tracking-[0.38em] uppercase font-semibold text-gold-light">
            São Paulo · Vila Mariana
          </span>
          <span className="w-1 h-1 rounded-full bg-gold/60" />
          <span className="font-sans text-[9px] sm:text-[10.5px] tracking-[0.25em] uppercase font-medium text-champagne/80">
            Wine Bar Exclusivo
          </span>
        </div>

        {/* Main Logo Sign Emblem Display */}
        <div className="max-w-[280px] sm:max-w-[340px] md:max-w-[420px] mb-3 sm:mb-4 drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] pointer-events-auto">
          <img
            src="/logo-guina.png"
            alt="Guina Restaurante & Wine Bar"
            className="w-full h-auto object-contain filter drop-shadow-[0_8px_20px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-champagne max-w-4xl tracking-tight leading-[1.18] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] font-normal">
          Restaurante Mais Bem Avaliado de São Paulo
        </h1>

        {/* 5 Golden Stars */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={22}
              className="text-gold fill-gold drop-shadow-[0_2px_12px_rgba(212,175,55,0.7)]"
            />
          ))}
          <span className="ml-2 font-sans text-xs tracking-widest text-gold-light font-semibold uppercase">
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
          className="btn-outline-champagne text-xs py-3.5 px-7 shadow-xl bg-navy-950/60 backdrop-blur-md inline-flex items-center gap-2 group hover:bg-navy-900/80 transition-all cursor-pointer"
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
          Conheça
        </span>
        <ChevronDown size={17} className="text-gold" />
      </motion.button>
    </section>
  );
}
