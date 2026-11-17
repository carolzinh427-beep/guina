import React from 'react';
import { MapPin, Clock, Phone, Instagram, MessageCircle, Heart } from 'lucide-react';

export default function Footer({ onOpenReservation }) {
  return (
    <footer id="contato" className="bg-navy-950 text-champagne pt-20 pb-12 border-t border-gold/25 relative overflow-hidden">
      {/* Decorative ambient subtle glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Presentation */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/logo-guina.png"
                alt="Logo Guina"
                className="w-12 h-12 object-contain filter drop-shadow-md"
              />
              <div>
                <span className="font-serif text-2xl text-gold font-bold tracking-[0.1em] block leading-none">
                  GUINA
                </span>
                <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-champagne/70 font-semibold">
                  Restaurante &amp; Wine Bar
                </span>
              </div>
            </div>

            <p className="font-body text-champagne/70 text-sm leading-relaxed">
              Gastronomia refinada, adega exclusiva com mais de 120 rótulos e ambiente acolhedor e romântico na Vila Mariana, São Paulo.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Guina Restaurante"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-champagne/80 hover:text-gold hover:border-gold hover:bg-gold/10 transition-colors"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://wa.me/5511983483472?text=Olá!%20Gostaria%20de%20informações%20sobre%20o%20Guina%20Restaurante%20&%20Wine%20Bar."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Guina Restaurante"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-champagne/80 hover:text-gold hover:border-gold hover:bg-gold/10 transition-colors"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* Localização */}
          <div className="space-y-4">
            <h4 className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold font-bold">
              Localização
            </h4>
            <div className="flex items-start gap-3 text-champagne/80 text-sm font-body leading-relaxed">
              <MapPin size={16} className="text-gold shrink-0 mt-1" />
              <div>
                <p className="font-medium text-champagne">Vila Mariana, São Paulo</p>
                <p className="text-champagne/70">R. Rio Grande, 218</p>
                <p className="text-champagne/60 text-xs mt-1">CEP: 04018-000</p>
                <a
                  href="https://maps.google.com/?q=R.+Rio+Grande,+218,+Vila+Mariana,+São+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs text-gold hover:underline mt-2 font-medium"
                >
                  Abrir no Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div className="space-y-4">
            <h4 className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold font-bold">
              Horários
            </h4>
            <div className="flex items-start gap-3 text-champagne/80 text-sm font-body leading-relaxed">
              <Clock size={16} className="text-gold shrink-0 mt-1" />
              <div className="space-y-2">
                <div>
                  <p className="font-medium text-champagne">Terça a Sexta-feira</p>
                  <p className="text-xs text-champagne/70">12h às 22h</p>
                </div>
                <div>
                  <p className="font-medium text-champagne">Sábado e Domingo</p>
                  <p className="text-xs text-champagne/70">10h às 22h (Brunch &amp; Jantar)</p>
                </div>
                <div>
                  <p className="text-xs text-champagne/50 italic">Segunda-feira: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reservas & Links */}
          <div className="space-y-4">
            <h4 className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold font-bold">
              Reservas
            </h4>
            <p className="font-body text-xs text-champagne/75 leading-relaxed">
              Recomendamos reservar sua mesa com antecedência para garantir a melhor experiência.
            </p>
            <button
              onClick={onOpenReservation}
              className="btn-gold text-[10px] py-2.5 px-5 w-full flex items-center justify-center gap-2 cursor-pointer shadow-gold-subtle"
            >
              <span>Reservar Agora</span>
            </button>
            <div className="text-center pt-2">
              <span className="font-sans text-xs text-champagne/60 block">WhatsApp:</span>
              <a
                href="https://wa.me/5511983483472"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-base text-gold hover:underline font-bold"
              >
                (11) 98348-3472
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-champagne/50">
          <p>© {new Date().getFullYear()} Guina Restaurante &amp; Wine Bar. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Alta Gastronomia &amp; Vinhos Nobres em São Paulo
          </p>
        </div>
      </div>
    </footer>
  );
}
