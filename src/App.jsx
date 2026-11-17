import React, { useState, useCallback } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, ShoppingBag, Wine, Phone } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Reviews from './components/Reviews';
import MenuSection from './components/MenuSection';
import WineBarSection from './components/WineBarSection';
import Gallery from './components/Gallery';
import ReservationSection from './components/ReservationSection';
import Footer from './components/Footer';

import FullMenuModal from './components/FullMenuModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import ReservationModal from './components/ReservationModal';

export default function App() {
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);

  // Cart state
  const [cart, setCart] = useState([]);

  // Top progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleAddToCart = useCallback((item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const handleUpdateQuantity = useCallback((id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const handleClearCart = useCallback(() => {
    setCart([]);
  }, []);

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="grain min-h-screen bg-cream text-cafe overflow-x-hidden selection:bg-gold/30 selection:text-navy-950 font-sans">
      
      {/* Top Gold Scroll Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-[200] origin-left bg-gradient-to-r from-gold via-gold-light to-gold shadow-gold-subtle"
        style={{ scaleX }}
      />

      {/* Main Navbar */}
      <Navbar
        onOpenMenu={() => setMenuModalOpen(true)}
        onOpenReservation={() => setReservationOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenMenu={() => setMenuModalOpen(true)}
          onOpenReservation={() => setReservationOpen(true)}
        />
        <Highlights />
        <About onOpenReservation={() => setReservationOpen(true)} />
        <Reviews />
        <MenuSection
          onOpenFullMenu={() => setMenuModalOpen(true)}
          onOpenReservation={() => setReservationOpen(true)}
        />
        <WineBarSection onOpenReservation={() => setReservationOpen(true)} />
        <Gallery />
        <ReservationSection onOpenReservation={() => setReservationOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={() => setReservationOpen(true)} />

      {/* Floating Bottom Reservation CTA */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setReservationOpen(true)}
        className="floating-reservation-cta cursor-pointer"
        style={{ bottom: cart.length > 0 ? '5.5rem' : '1.5rem' }}
        aria-label="Reservar Mesa Agora"
      >
        <Calendar size={15} className="text-gold" />
        <span>Reservar Mesa</span>
      </motion.button>

      {/* Floating Cart Button (when items in cart) */}
      {cart.length > 0 && !cartOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-5 py-3 rounded-full shadow-2xl font-sans text-xs tracking-widest uppercase font-bold bg-navy-900 text-gold border border-gold/40 cursor-pointer"
        >
          <div className="relative">
            <ShoppingBag size={18} />
            <span className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-gold text-navy-950 font-black text-[10px] flex items-center justify-center shadow-md">
              {totalCartItems}
            </span>
          </div>
          <span>Ver Pedido</span>
        </motion.button>
      )}

      {/* Modals & Drawers */}
      <FullMenuModal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
        onAddToCart={handleAddToCart}
        onOpenCart={() => {
          setMenuModalOpen(false);
          setCartOpen(true);
        }}
        cartCount={totalCartItems}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        updateQuantity={handleUpdateQuantity}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cart={cart}
        onClearCart={handleClearCart}
      />

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

    </div>
  );
}
