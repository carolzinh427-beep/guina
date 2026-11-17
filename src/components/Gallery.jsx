import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye, Camera } from 'lucide-react';
import { galleryItems } from '../data/galleryData';

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState(null);

  const prevPhoto = (e) => {
    e?.stopPropagation();
    if (activePhoto !== null) {
      setActivePhoto((activePhoto - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  const nextPhoto = (e) => {
    e?.stopPropagation();
    if (activePhoto !== null) {
      setActivePhoto((activePhoto + 1) % galleryItems.length);
    }
  };

  return (
    <section id="galeria" className="section-warm-bg py-24 md:py-36 relative overflow-hidden border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-[10.5px] tracking-[0.4em] uppercase text-navy-700 font-bold mb-3 flex items-center justify-center gap-2">
            <Camera size={14} className="text-gold" />
            L'Atmosphère &amp; Momentos
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-navy-950 mb-4 leading-tight">
            Galeria do Restaurante
          </h2>
          <div className="w-12 h-[2px] bg-gold mx-auto mb-4" />
          <p className="font-body text-navy-900/70 text-base leading-relaxed">
            Cada recanto do Guina Restaurante &amp; Wine Bar foi projetado para acolher encontros marcantes e momentos de pura celebração.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => setActivePhoto(idx)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden card-shadow border border-gold/25 cursor-pointer bg-navy-950"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Badge Info */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="self-end">
                  <span className="p-2 rounded-full bg-gold/20 text-gold backdrop-blur-md inline-flex border border-gold/30">
                    <Eye size={16} />
                  </span>
                </div>
                <div>
                  <span className="font-sans text-[9px] tracking-widest uppercase text-gold font-bold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg text-champagne font-semibold leading-snug">
                    {item.alt}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-[150] bg-navy-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-navy-900/80 text-champagne hover:text-gold border border-gold/30 z-10 transition-colors"
              aria-label="Fechar galeria"
            >
              <X size={22} />
            </button>

            <button
              onClick={prevPhoto}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-navy-900/80 text-champagne hover:text-gold border border-gold/30 z-10 transition-colors"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextPhoto}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-navy-900/80 text-champagne hover:text-gold border border-gold/30 z-10 transition-colors"
              aria-label="Próxima foto"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              key={activePhoto}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-gold/40 shadow-2xl bg-navy-900 flex flex-col"
            >
              <img
                src={galleryItems[activePhoto].src}
                alt={galleryItems[activePhoto].alt}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
              <div className="p-4 sm:p-6 bg-navy-950/95 border-t border-gold/20 flex items-center justify-between">
                <div>
                  <span className="font-sans text-[9px] tracking-widest uppercase text-gold font-bold">
                    {galleryItems[activePhoto].category}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl text-champagne">
                    {galleryItems[activePhoto].alt}
                  </h4>
                </div>
                <span className="text-champagne/50 text-xs font-sans">
                  {activePhoto + 1} / {galleryItems.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
