import React, { useState, useEffect } from 'react';
import { Camera, Sparkles } from 'lucide-react';
import Masonry from './Masonry';
import { galleryItems } from '../data/galleryData';

export default function Gallery() {
  const [columnWidth, setColumnWidth] = useState(240);

  useEffect(() => {
    const updateColumnWidth = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 640) {
        // Mobile: 2 staggered waterfall columns
        setColumnWidth(160);
      } else if (window.innerWidth < 1024) {
        // Tablet: 3 columns
        setColumnWidth(220);
      } else {
        // Desktop: luxury 3-4 columns
        setColumnWidth(260);
      }
    };

    updateColumnWidth();
    window.addEventListener('resize', updateColumnWidth);
    return () => window.removeEventListener('resize', updateColumnWidth);
  }, []);

  return (
    <section id="galeria" className="section-warm-bg py-16 md:py-24 relative overflow-hidden border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="font-sans text-[10.5px] tracking-[0.4em] uppercase text-navy-700 font-bold mb-3 flex items-center justify-center gap-2">
            <Camera size={14} className="text-gold" />
            L'Atmosphère &amp; Momentos
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy-950 mb-4 leading-tight">
            Galeria do Restaurante
          </h2>
          <div className="w-12 h-[2px] bg-gold mx-auto mb-4" />
          <p className="font-body text-navy-900/70 text-sm sm:text-base leading-relaxed">
            Cada recanto do Guina Restaurante &amp; Wine Bar foi projetado para acolher encontros marcantes e momentos de pura celebração.
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-navy-800/60 font-sans">
            <Sparkles size={13} className="text-gold" />
            <span className="hidden sm:inline">Passe o mouse ou arraste para reorganizar • Clique para ver em alta definição</span>
            <span className="sm:hidden">Toque em qualquer foto para abrir em alta resolução</span>
          </div>
        </div>

        {/* React Bits Masonry Gallery */}
        <div className="w-full">
          <Masonry
            items={galleryItems}
            columnWidth={columnWidth}
            gap={14}
            radius={14}
            animateFrom="bottom"
            hoverEffect="zoom"
            captions="hover"
            lightbox={true}
            draggable={true}
          />
        </div>

      </div>
    </section>
  );
}
