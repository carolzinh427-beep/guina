import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, BookOpen, Calendar } from 'lucide-react';

export default function Hero({ onOpenMenu, onOpenReservation }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[620px] lg:min-h-[700px] h-screen max-h-[940px] flex items-center justify-center overflow-hidden bg-navy-950"
    >
      {/* Background Image with Parallax & Sombreamento na metade horizontal da esquerda */}
      <motion.div
        className="absolute inset-0 z-0 md:p-5"
        style={{ y: yBackground }}
      >
        <div className="w-full h-full md:rounded-[24px] md:overflow-hidden relative">
          <picture className="block w-full h-full">
            <source media="(min-width: 768px)" srcSet="/hero_desktop_bistrot.jpeg" />
            <img
              src="/hero_mobile_guina.jpg"
              alt="Guina Restaurante & Wine Bar São Paulo"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </picture>

          {/* Sombreamento no Mobile: da esquerda cobrindo o texto com suavidade */}
          <div
            className="absolute inset-0 pointer-events-none md:hidden"
            style={{
              background: 'linear-gradient(90deg, rgba(5, 11, 20, 0.92) 0%, rgba(5, 11, 20, 0.78) 35%, rgba(5, 11, 20, 0.35) 55%, rgba(5, 11, 20, 0) 75%)'
            }}
          />

          {/* Sombreamento no Desktop: estritamente na metade horizontal esquerda (0% a 50%, 0% na direita) */}
          <div
            className="absolute inset-0 pointer-events-none hidden md:block"
            style={{
              background: 'linear-gradient(90deg, rgba(5, 11, 20, 0.96) 0%, rgba(5, 11, 20, 0.88) 22%, rgba(5, 11, 20, 0.45) 38%, rgba(5, 11, 20, 0) 50%, rgba(5, 11, 20, 0) 100%)'
            }}
          />

          {/* Soft Ambient Border for Desktop */}
          <div className="absolute inset-0 rounded-[24px] border border-gold/20 hidden md:block pointer-events-none" />
        </div>
      </motion.div>

      {/* Hero Content: Alinhado à esquerda na metade sombreada */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="relative z-20 max-w-7xl w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-24 pb-20 sm:pt-28 md:pt-0 flex flex-col items-start text-left pointer-events-auto"
      >

        {/* Título: Guina Restaurante */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-champagne max-w-xl tracking-tight leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] font-normal">
          Guina Restaurante
        </h1>

        {/* Subtítulo: pelos chefs do premiado bistrot de ville */}
        <p className="font-sans text-xs sm:text-sm md:text-base tracking-[0.22em] uppercase text-gold font-medium mt-2 sm:mt-2.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          pelos chefs do premiado bistrot de ville
        </p>

        {/* 5 Estrelas: Embaixo, à esquerda */}
        <div className="flex items-center justify-start gap-1.5 mt-3.5 sm:mt-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={20}
              className="text-[#FBBF24] fill-[#FBBF24] drop-shadow-[0_2px_10px_rgba(212,175,55,0.85)]"
            />
          ))}
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-wrap items-center justify-start gap-3.5 pt-6 sm:pt-8">
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
      </motion.div>


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
