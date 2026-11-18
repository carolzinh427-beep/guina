import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  Users,
  MapPin,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Send,
  Sparkles,
} from 'lucide-react';

export default function ReservationModal({ isOpen, onClose }) {
  const [step, setStep] = useState('date'); // 'date' | 'details'
  
  // Date states
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDay, setSelectedDay] = useState(today.getDate() + 1);

  // Time & Guests
  const [selectedTime, setSelectedTime] = useState('20:00');
  const [guests, setGuests] = useState(2);
  const [seatingArea, setSeatingArea] = useState('interna'); // 'interna' | 'externa'

  // Personal details
  const [details, setDetails] = useState({
    name: '',
    coHolder: '',
    phone: '',
    email: '',
    specialRequest: '',
  });

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  // Next / Prev Month
  const changeMonth = (offset) => {
    setCurrentDate(new Date(currentYear, currentMonth + offset, 1));
  };

  // Check if Monday (closed)
  const isMonday = (day) => {
    const d = new Date(currentYear, currentMonth, day);
    return d.getDay() === 1; // 1 is Monday
  };

  // Weekend check
  const isWeekend = (day) => {
    const d = new Date(currentYear, currentMonth, day);
    return d.getDay() === 0 || d.getDay() === 6;
  };

  const timeSlots = isWeekend(selectedDay)
    ? [
        '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
        '14:30', '15:00', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
      ]
    : [
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
      ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const reservationCode = `#G${Math.floor(1000 + Math.random() * 9000)}`;
    const formattedDate = `${selectedDay.toString().padStart(2, '0')}/${(currentMonth + 1).toString().padStart(2, '0')}/${currentYear}`;
    const areaName = seatingArea === 'externa' ? 'Área Externa & Jardim Florido' : 'Salão Nobre Interno';

    const msgLines = [
      '🍽️ *Solicitação de Reserva - Guina Restaurante & Wine Bar*',
      '',
      `• *Código:* ${reservationCode}`,
      `• *Unidade:* São Paulo · Vila Mariana (Rua Rio Grande, 304 – CEP 04018)`,
      `• *Titular:* ${details.name}`,
      details.coHolder ? `• *Acompanhante:* ${details.coHolder}` : null,
      `• *Data:* ${formattedDate}`,
      `• *Horário:* ${selectedTime}`,
      `• *Pessoas:* ${guests}`,
      `• *Ambiente:* ${areaName}`,
      `• *Telefone:* ${details.phone}`,
      `• *Email:* ${details.email}`,
      details.specialRequest ? `• *Observação:* ${details.specialRequest}` : null,
      '',
      'Aguardando confirmação da equipe de reservas do Guina.',
    ].filter(Boolean);

    const fullMessage = msgLines.join('\n');
    const encoded = encodeURIComponent(fullMessage);
    window.open(`https://wa.me/5511983483472?text=${encoded}`, '_blank');

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-950/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl rounded-3xl p-6 sm:p-10 bg-navy-900 border border-gold/40 shadow-2xl z-10 text-champagne my-auto"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-gold/20 pb-5 mb-6">
              <div className="flex items-center gap-3">
                <img src="/logo-guina.png" alt="Logo" className="h-12 w-auto object-contain filter drop-shadow-md shrink-0" />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gold">
                    Reserva de Mesa
                  </h3>
                  <p className="font-sans text-[9px] tracking-widest uppercase text-champagne/70 font-semibold mt-0.5">
                    Guina Restaurante &amp; Wine Bar · Vila Mariana
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 text-champagne/60 hover:text-gold transition-colors"
                aria-label="Fechar"
              >
                <X size={22} />
              </button>
            </div>

            {/* Stepper Tabs */}
            <div className="flex items-center gap-2 mb-6 p-1 rounded-full bg-navy-950 border border-gold/20">
              <button
                type="button"
                onClick={() => setStep('date')}
                className={`flex-1 py-2 text-xs font-sans font-bold uppercase tracking-wider rounded-full transition-all ${
                  step === 'date'
                    ? 'bg-gold text-navy-950 shadow-md'
                    : 'text-champagne/60 hover:text-champagne'
                }`}
              >
                1. Data &amp; Horário
              </button>
              <button
                type="button"
                onClick={() => setStep('details')}
                className={`flex-1 py-2 text-xs font-sans font-bold uppercase tracking-wider rounded-full transition-all ${
                  step === 'details'
                    ? 'bg-gold text-navy-950 shadow-md'
                    : 'text-champagne/60 hover:text-champagne'
                }`}
              >
                2. Seus Dados
              </button>
            </div>

            {/* Step 1: Date, Time, Guests, Area */}
            {step === 'date' && (
              <div className="space-y-6">
                
                {/* Month Navigator */}
                <div className="flex items-center justify-between bg-navy-950/60 p-3 rounded-2xl border border-gold/20">
                  <button
                    onClick={() => changeMonth(-1)}
                    className="p-1.5 text-champagne hover:text-gold"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <span className="font-serif text-base font-bold text-champagne">
                    {monthNames[currentMonth]} {currentYear}
                  </span>
                  <button
                    onClick={() => changeMonth(1)}
                    className="p-1.5 text-champagne hover:text-gold"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                {/* Calendar Days Grid */}
                <div>
                  <div className="grid grid-cols-7 gap-1 text-center font-sans text-[10px] tracking-wider uppercase text-gold/70 font-semibold mb-2">
                    <span>Dom</span>
                    <span>Seg</span>
                    <span>Ter</span>
                    <span>Qua</span>
                    <span>Qui</span>
                    <span>Sex</span>
                    <span>Sáb</span>
                  </div>

                  <div className="grid grid-cols-7 gap-1.5">
                    {Array.from({ length: startDayOfWeek }).map((_, i) => (
                      <div key={`empty-${i}`} className="h-9" />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const closed = isMonday(day);
                      const isSelected = selectedDay === day;

                      return (
                        <button
                          key={day}
                          disabled={closed}
                          onClick={() => setSelectedDay(day)}
                          className={`h-9 rounded-xl font-sans text-xs font-semibold flex items-center justify-center transition-all ${
                            closed
                              ? 'text-champagne/20 bg-navy-950/20 cursor-not-allowed line-through'
                              : isSelected
                              ? 'bg-gold text-navy-950 font-bold shadow-gold-subtle scale-105'
                              : 'bg-navy-950/70 text-champagne/90 hover:bg-gold/20 hover:text-gold border border-gold/10'
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-[10px] font-sans text-champagne/50 text-center mt-2 italic">
                    * Às segundas-feiras o restaurante permanece fechado para descanso da equipe.
                  </p>
                </div>

                {/* Time Slot Selector */}
                <div>
                  <label className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold block mb-2">
                    Horários Disponíveis ({selectedDay}/{currentMonth + 1})
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 max-h-36 overflow-y-auto p-1">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 rounded-xl text-xs font-sans font-semibold transition-all ${
                          selectedTime === time
                            ? 'bg-gold text-navy-950 font-bold shadow-md'
                            : 'bg-navy-950/80 text-champagne hover:bg-gold/15 border border-gold/15'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guests Counter & Area Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Guests */}
                  <div>
                    <label className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold block mb-2">
                      Número de Pessoas
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5, 6, '8+'].map((num) => (
                        <button
                          key={num}
                          onClick={() => setGuests(num)}
                          className={`flex-1 py-2 rounded-xl text-xs font-sans font-bold transition-all ${
                            guests === num
                              ? 'bg-gold text-navy-950'
                              : 'bg-navy-950/80 text-champagne hover:bg-gold/15 border border-gold/15'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Seating Area */}
                  <div>
                    <label className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold block mb-2">
                      Ambiente Preferido
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSeatingArea('interna')}
                        className={`flex-1 py-2 px-3 rounded-xl text-xs font-sans font-semibold transition-all text-center ${
                          seatingArea === 'interna'
                            ? 'bg-gold text-navy-950 font-bold'
                            : 'bg-navy-950/80 text-champagne hover:bg-gold/15 border border-gold/15'
                        }`}
                      >
                        Salão Nobre
                      </button>
                      <button
                        onClick={() => setSeatingArea('externa')}
                        className={`flex-1 py-2 px-3 rounded-xl text-xs font-sans font-semibold transition-all text-center ${
                          seatingArea === 'externa'
                            ? 'bg-gold text-navy-950 font-bold'
                            : 'bg-navy-950/80 text-champagne hover:bg-gold/15 border border-gold/15'
                        }`}
                      >
                        Área Externa &amp; Flores
                      </button>
                    </div>
                  </div>
                </div>

                {/* Next Step Button */}
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="btn-gold w-full py-3.5 text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Continuar para Dados do Titular</span>
                  <ChevronRight size={16} />
                </button>

              </div>
            )}

            {/* Step 2: Customer Personal Details & WhatsApp Submit */}
            {step === 'details' && (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                
                <div className="p-3.5 rounded-2xl bg-navy-950/80 border border-gold/25 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-gold font-bold block">Resumo da Reserva:</span>
                    <span className="text-champagne/80">
                      {selectedDay} de {monthNames[currentMonth]} às {selectedTime} · {guests} pessoa(s)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep('date')}
                    className="text-xs text-gold underline hover:text-gold-light"
                  >
                    Alterar
                  </button>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <label className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold">
                    Nome Completo do Titular *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Roberto Albuquerque"
                    value={details.name}
                    onChange={(e) => setDetails({ ...details, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-gold/30 text-champagne text-sm focus:outline-none focus:border-gold"
                  />
                </div>

                {/* CoHolder */}
                <div className="space-y-1">
                  <label className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold">
                    Segundo Titular / Acompanhante (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Beatriz Lima"
                    value={details.coHolder}
                    onChange={(e) => setDetails({ ...details, coHolder: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-gold/30 text-champagne text-sm focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 98888-8888"
                      value={details.phone}
                      onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-gold/30 text-champagne text-sm focus:outline-none focus:border-gold"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="roberto@email.com"
                      value={details.email}
                      onChange={(e) => setDetails({ ...details, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-gold/30 text-champagne text-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                {/* Special Request */}
                <div className="space-y-1">
                  <label className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold">
                    Ocasião Especial ou Observação
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Ex: Aniversário de namoro, preferência por mesa de canto, restrição alimentar..."
                    value={details.specialRequest}
                    onChange={(e) => setDetails({ ...details, specialRequest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-gold/30 text-champagne text-sm focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                {/* Action Submit */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep('date')}
                    className="btn-outline-champagne flex-1 py-3 text-xs"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    className="btn-gold flex-[2] py-3 text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                  >
                    <Send size={14} />
                    <span>Confirmar Solicitação de Reserva</span>
                  </button>
                </div>

              </form>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
