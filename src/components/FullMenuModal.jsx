import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ShoppingBag, Plus, Check, Filter } from 'lucide-react';
import menuItems from '../data/menuData';

export default function FullMenuModal({
  isOpen,
  onClose,
  onAddToCart,
  onOpenCart,
  cartCount,
}) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItem, setAddedItem] = useState(null);

  const categories = useMemo(() => {
    return ['Todos', ...Array.from(new Set(menuItems.map((item) => item.category)))];
  }, []);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchCategory =
        selectedCategory === 'Todos' || item.category === selectedCategory;
      const matchSearch =
        searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAdd = (item) => {
    onAddToCart(item);
    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 1200);
  };

  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    return 'Consulte';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] bg-navy-950/90 backdrop-blur-xl flex flex-col"
        >
          {/* Top Bar */}
          <div className="bg-navy-900 border-b border-gold/25 p-4 sm:p-6 flex items-center justify-between gap-4 sticky top-0 z-20 shadow-md">
            <div className="flex items-center gap-3">
              <img src="/logo-guina.png" alt="Logo" className="h-10 w-auto object-contain filter drop-shadow-md" />
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-champagne leading-none">
                  Cardápio Digital
                </h3>
                <p className="font-sans text-[8.5px] sm:text-[9.5px] tracking-widest text-gold uppercase font-semibold mt-1">
                  Guina Restaurante &amp; Wine Bar
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {cartCount > 0 && (
                <button
                  onClick={onOpenCart}
                  className="btn-gold py-2 px-4 text-[10px] flex items-center gap-2 cursor-pointer"
                >
                  <ShoppingBag size={14} />
                  <span>Ver Pedido ({cartCount})</span>
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-navy-950 text-champagne hover:text-gold border border-gold/30 transition-colors"
                aria-label="Fechar cardápio"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Search & Categories Bar */}
          <div className="bg-navy-950/95 border-b border-gold/15 p-4 sm:px-8 space-y-4">
            {/* Search Input */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/70" />
              <input
                type="text"
                placeholder="Buscar pratos, sobremesas, bebidas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-navy-900 border border-gold/25 text-champagne placeholder-champagne/40 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-champagne/50 hover:text-champagne text-xs"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-6xl mx-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-sans whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-gold text-navy-950 font-bold shadow-md scale-105'
                      : 'bg-navy-900 text-champagne/80 hover:text-champagne hover:bg-navy-800 border border-gold/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8">
            <div className="max-w-6xl mx-auto">
              {filteredItems.length === 0 ? (
                <div className="text-center py-20 text-champagne/50">
                  <p className="font-serif text-xl mb-2">Nenhum item encontrado</p>
                  <p className="text-xs font-sans">Tente buscar por outro termo ou categoria.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-navy-900/90 rounded-2xl border border-gold/25 overflow-hidden flex flex-col justify-between hover:border-gold/50 transition-all duration-300 card-shadow group"
                    >
                      {item.image && (
                        <div className="h-44 overflow-hidden relative bg-navy-950">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 rounded-full text-[9px] font-sans font-bold uppercase tracking-wider bg-navy-950/80 text-gold border border-gold/30 backdrop-blur-md">
                              {item.category}
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-serif text-lg text-champagne font-bold mb-2 group-hover:text-gold transition-colors">
                            {item.name}
                          </h4>
                          <p className="font-body text-champagne/70 text-xs leading-relaxed mb-4">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-gold/15">
                          <span className="font-serif text-xl text-gold font-bold">
                            {formatPrice(item.price)}
                          </span>

                          <button
                            onClick={() => handleAdd(item)}
                            className={`p-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                              addedItem === item.id
                                ? 'bg-emerald-600 text-white scale-110'
                                : 'bg-gold text-navy-950 hover:bg-gold-light'
                            }`}
                            title="Adicionar ao pedido"
                          >
                            {addedItem === item.id ? <Check size={16} /> : <Plus size={16} />}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Floating Bar */}
          {cartCount > 0 && (
            <div className="bg-navy-900 border-t border-gold/25 p-4 flex items-center justify-center sticky bottom-0 z-20">
              <button
                onClick={onOpenCart}
                className="btn-gold py-3 px-8 text-xs flex items-center gap-2 cursor-pointer shadow-xl"
              >
                <ShoppingBag size={16} />
                <span>Finalizar Pedido ({cartCount} itens adicionados)</span>
              </button>
            </div>
          )}

        </motion.div>
      )}
    </AnimatePresence>
  );
}
