import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Calendar, ArrowRight, Heart } from 'lucide-react';

export default function ReservationSection({ onOpenReservation }) {
  return (
    <section id="reservas" className="relative py-20 md:py-28 overflow-hidden bg-navy-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcSet="/hero_desktop_bistrot.jpeg" />
          <img
            src="/hero_restaurant.png"
            alt="Jantar romântico no Guina Restaurante"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </picture>
        <div className="absolute inset-0 bg-navy-950/85 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold-light text-xs font-sans tracking-[0.35em] uppercase font-bold mx-auto">
            <Heart size={13} className="text-gold fill-gold" />
            <span>Experiência Inesquecível</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl text-champagne leading-tight">
            Reserve seu <br />
            <em className="italic font-light text-gold-light">Momento Especial</em>
          </h2>

          <p className="font-body text-champagne/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Para jantares românticos a dois, comemorações de aniversário, aniversários de casamento ou reuniões que merecem o cenário perfeito. Nossa equipe e nossos sommeliers estão prontos para cuidar de cada detalhe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={onOpenReservation}
              className="btn-gold text-xs py-4 px-9 shadow-2xl inline-flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Calendar size={16} />
              <span>Reservar Mesa Agora</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Practical Info Grid */}
          <div className="pt-7 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-champagne/80 border-t border-gold/20 max-w-3xl mx-auto">
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-gold/15 text-gold border border-gold/30">
                <Clock size={16} />
              </div>
              <div className="text-left">
                <span className="font-sans text-[9px] tracking-widest uppercase text-gold font-bold block">
                  Horário de Funcionamento
                </span>
                <span className="font-sans text-xs sm:text-sm text-champagne font-medium">
                  Ter a Sex 12h–22h · Sáb e Dom 10h–22h
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-gold/15 text-gold border border-gold/30">
                <MapPin size={16} />
              </div>
              <div className="text-left">
                <span className="font-sans text-[9px] tracking-widest uppercase text-gold font-bold block">
                  Endereço
                </span>
                <span className="font-sans text-xs sm:text-sm text-champagne font-medium">
                  R. Rio Grande, 218 · Vila Mariana, SP
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-gold/15 text-gold border border-gold/30">
                <Phone size={16} />
              </div>
              <div className="text-left">
                <span className="font-sans text-[9px] tracking-widest uppercase text-gold font-bold block">
                  WhatsApp &amp; Contato
                </span>
                <span className="font-sans text-xs sm:text-sm text-champagne font-medium">
                  (11) 98348-3472
                </span>
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
