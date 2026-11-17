import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, ArrowRight, Trash2 } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  updateQuantity,
  onCheckout,
}) {
  const total = cart.reduce((sum, item) => {
    const price = typeof item.price === 'number' ? item.price : 0;
    return sum + price * item.quantity;
  }, 0);

  const formatPrice = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[130] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm"
          />

          {/* Drawer Body */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="relative w-full max-w-md bg-navy-900 border-l border-gold/30 flex flex-col justify-between shadow-2xl z-10 text-champagne"
          >
            {/* Header */}
            <div className="p-6 border-b border-gold/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-gold/15 text-gold border border-gold/30">
                  <ShoppingBag size={18} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-champagne">
                    Seu Pedido
                  </h3>
                  <p className="font-sans text-[9px] tracking-widest uppercase text-gold">
                    Guina Restaurante
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 text-champagne/60 hover:text-gold transition-colors"
                aria-label="Fechar carrinho"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center gap-3 text-champagne/40 py-20">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="font-sans text-xs tracking-[0.3em] uppercase">
                    Seu carrinho está vazio
                  </p>
                  <p className="text-xs text-champagne/30 text-center max-w-[200px]">
                    Navegue pelo cardápio e adicione seus pratos favoritos.
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 p-4 rounded-xl bg-navy-950/60 border border-gold/15"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-base text-champagne truncate">
                        {item.name}
                      </h4>
                      <p className="font-serif text-gold text-sm font-bold mt-0.5">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                      <span className="font-sans text-[8.5px] text-champagne/50">
                        {formatPrice(item.price)} cada
                      </span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2.5 border border-gold/30 rounded-full px-3 py-1.5 bg-navy-900">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-champagne/60 hover:text-gold transition-colors"
                        aria-label="Diminuir"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="font-sans text-xs font-bold text-champagne min-w-[16px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-champagne/60 hover:text-gold transition-colors"
                        aria-label="Aumentar"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Total & Checkout */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-gold/20 bg-navy-950/80 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[10px] tracking-widest uppercase text-champagne/60 font-semibold">
                    Total do Pedido
                  </span>
                  <span className="font-serif text-3xl text-gold font-bold">
                    {formatPrice(total)}
                  </span>
                </div>

                <button
                  onClick={onCheckout}
                  className="btn-gold w-full py-4 text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                >
                  <span>Avançar para Finalizar</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
