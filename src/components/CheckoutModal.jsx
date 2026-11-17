import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CreditCard, User, Phone, FileText } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose, cart, onClearCart }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    notes: '',
    payment: 'Pix',
  });

  const total = cart.reduce((sum, item) => {
    const price = typeof item.price === 'number' ? item.price : 0;
    return sum + price * item.quantity;
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderId = Math.random().toString(36).substring(2, 8).toUpperCase();
    const phoneRestaurant = '5511983483472';

    let msg = `*PEDIDO #${orderId} - GUINA RESTAURANTE & WINE BAR*\n\n`;
    msg += `*Cliente:* ${formData.name}\n`;
    msg += `*WhatsApp:* ${formData.phone}\n`;
    if (formData.notes) {
      msg += `*Observações:* ${formData.notes}\n`;
    }
    msg += `*Pagamento:* ${formData.payment}\n\n`;
    msg += `*ITENS DO PEDIDO:*\n`;

    cart.forEach((item) => {
      const itemTotal = (item.price * item.quantity).toFixed(2);
      msg += `• ${item.quantity}x ${item.name} — R$ ${itemTotal}\n`;
    });

    msg += `\n*TOTAL: R$ ${total.toFixed(2)}*\n\n`;
    msg += `Aguardando confirmação do Guina Restaurante.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${phoneRestaurant}?text=${encoded}`, '_blank');

    if (onClearCart) onClearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[140] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-navy-950/85 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg rounded-3xl p-7 sm:p-10 max-h-[90vh] overflow-y-auto bg-navy-900 border border-gold/40 shadow-2xl text-champagne z-10"
          >
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-full bg-navy-950 border border-gold/40 mx-auto flex items-center justify-center p-1.5 mb-3">
                <img src="/logo-guina.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-serif text-3xl text-gold font-bold mb-1">
                Finalizar Pedido
              </h3>
              <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-champagne/60 font-semibold">
                Guina Restaurante &amp; Wine Bar
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Nome */}
              <div className="space-y-1.5">
                <label className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold flex items-center gap-1.5">
                  <User size={12} />
                  <span>Nome Completo *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-gold/30 text-champagne placeholder-champagne/40 text-sm focus:outline-none focus:border-gold"
                />
              </div>

              {/* WhatsApp */}
              <div className="space-y-1.5">
                <label className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold flex items-center gap-1.5">
                  <Phone size={12} />
                  <span>WhatsApp com DDD *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-gold/30 text-champagne placeholder-champagne/40 text-sm focus:outline-none focus:border-gold"
                />
              </div>

              {/* Observações */}
              <div className="space-y-1.5">
                <label className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold flex items-center gap-1.5">
                  <FileText size={12} />
                  <span>Observações (Horário desejado, preferências...)</span>
                </label>
                <textarea
                  rows="3"
                  placeholder="Ex: Ponto da carne bem passado, mesa no jardim, sem glúten..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-gold/30 text-champagne placeholder-champagne/40 text-sm focus:outline-none focus:border-gold resize-none"
                />
              </div>

              {/* Pagamento */}
              <div className="space-y-1.5">
                <label className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold flex items-center gap-1.5">
                  <CreditCard size={12} />
                  <span>Forma de Pagamento</span>
                </label>
                <select
                  value={formData.payment}
                  onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-gold/30 text-champagne text-sm focus:outline-none focus:border-gold"
                >
                  <option value="Pix">Pix (Chave enviada no WhatsApp)</option>
                  <option value="Cartão de Crédito">Cartão de Crédito</option>
                  <option value="Cartão de Débito">Cartão de Débito</option>
                  <option value="Dinheiro">Dinheiro</option>
                </select>
              </div>

              {/* Total preview */}
              <div className="p-4 rounded-xl bg-navy-950/80 border border-gold/25 flex items-center justify-between">
                <span className="font-sans text-xs uppercase tracking-widest text-champagne/70 font-semibold">
                  Valor Total:
                </span>
                <span className="font-serif text-2xl text-gold font-bold">
                  {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-outline-champagne flex-1 py-3 text-xs"
                >
                  Voltar
                </button>
                <button
                  type="submit"
                  className="btn-gold flex-[2] py-3 text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Send size={14} />
                  <span>Enviar via WhatsApp</span>
                </button>
              </div>

            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
