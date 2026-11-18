import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Phone, Wine } from 'lucide-react';

export default function Navbar({ onOpenMenu, onOpenReservation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'histoire', label: 'Nossa História' },
    { id: 'avaliacoes', label: 'Avaliações' },
    { id: 'cardapio', label: 'Cardápio' },
    { id: 'vinhos', label: 'Wine Bar & Vinhos' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'reservas', label: 'Reservas' },
    { id: 'contato', label: 'Contato' },
  ];

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        animate={{
          top: scrolled ? 12 : 0,
          left: scrolled ? '50%' : '0%',
          translateX: scrolled ? '-50%' : '0%',
          width: scrolled ? '94%' : '100%',
          maxWidth: scrolled ? '1360px' : '100%',
          borderRadius: scrolled ? 999 : 0,
          paddingTop: scrolled ? 8 : 16,
          paddingBottom: scrolled ? 8 : 16,
          backgroundColor: scrolled ? 'rgba(10, 23, 42, 0.94)' : 'rgba(10, 23, 42, 0.72)',
          boxShadow: scrolled
            ? '0 20px 48px rgba(5, 11, 20, 0.45), 0 0 20px rgba(212, 175, 55, 0.15)'
            : '0 8px 30px rgba(5, 11, 20, 0.25)',
          borderColor: scrolled ? 'rgba(212, 175, 55, 0.35)' : 'rgba(212, 175, 55, 0.15)',
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          position: 'fixed',
          zIndex: 50,
          backdropFilter: scrolled ? 'blur(24px) saturate(1.4)' : 'blur(16px)',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(1.4)' : 'blur(16px)',
          borderWidth: 1,
          borderStyle: 'solid',
        }}
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between gap-4">
          
          {/* Logo / Brand Name - Sem círculo e com fundo transparente */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 sm:gap-4 group cursor-pointer select-none"
            title="Guina Restaurante & Wine Bar"
          >
            <img
              src="/logo-guina.png"
              alt="Guina Restaurante & Wine Bar"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]"
            />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.14em] text-gold group-hover:text-gold-light transition-colors">
                GUINA
              </span>
              <span className="font-sans text-[7.5px] sm:text-[8.5px] tracking-[0.32em] uppercase text-champagne/80 font-medium mt-1">
                Restaurante &amp; Wine Bar
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-sans text-[11px] xl:text-[11.5px] tracking-[0.22em] uppercase text-champagne/85 hover:text-gold transition-colors duration-200 font-semibold relative py-1 group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/5511983483472?text=Olá!%20Gostaria%20de%20informações%20sobre%20o%20Guina%20Restaurante%20&%20Wine%20Bar."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-gold/25 text-champagne/80 hover:text-gold hover:border-gold transition-colors"
              title="Fale no WhatsApp"
            >
              <Phone size={15} />
            </a>

            <button
              onClick={onOpenReservation}
              className="btn-gold text-[10.5px] py-2.5 px-5 shadow-gold-subtle flex items-center gap-2 cursor-pointer"
            >
              <Calendar size={13} className="text-navy-950" />
              <span>Reservar Mesa</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenReservation}
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-gold-light via-gold to-[#B89025] text-navy-950 font-sans text-[9px] font-bold tracking-wider uppercase shadow-sm border border-gold-light/60 active:scale-95 transition-transform shrink-0"
            >
              <Calendar size={11} className="text-navy-950 stroke-[2.5]" />
              <span>Reservar</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-champagne hover:text-gold border border-gold/30 hover:border-gold transition-colors bg-navy-900/60"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-navy-950/80 backdrop-blur-md lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-[82%] max-w-sm z-50 bg-navy-900 border-l border-gold/25 p-7 flex flex-col justify-between shadow-2xl lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-gold/20">
                  <div className="flex items-center gap-3">
                    <img src="/logo-guina.png" alt="Logo" className="h-11 w-auto object-contain filter drop-shadow-md" />
                    <div>
                      <div className="font-serif text-lg font-bold text-gold">GUINA</div>
                      <div className="font-sans text-[8px] tracking-widest text-champagne/70 uppercase">Restaurante &amp; Wine Bar</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-champagne/60 hover:text-gold"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left font-serif text-xl text-champagne/90 hover:text-gold py-2 transition-colors border-b border-white/5"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gold/20 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="btn-gold w-full text-center py-3.5 flex items-center justify-center gap-2"
                >
                  <Calendar size={15} />
                  <span>Reservar Mesa Agora</span>
                </button>
                <a
                  href="https://wa.me/5511983483472?text=Olá!%20Gostaria%20de%20informações%20sobre%20o%20Guina%20Restaurante%20&%20Wine%20Bar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-champagne w-full text-center py-3 flex items-center justify-center gap-2 text-xs"
                >
                  <Phone size={14} className="text-gold" />
                  <span>(11) 98348-3472</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
