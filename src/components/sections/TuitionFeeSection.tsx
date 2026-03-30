"use client";

import React from 'react';
import { 
  UserPlus2, 
  Users2, 
  UserCheck2, 
  Wallet2, 
  CreditCard,
  Info
} from 'lucide-react';

// --- Paleta Institucional Exacta ---
const COLORS = {
  primary: "#1B355C", // Azul Profundo
  gold: "#D8A24C",    // Dorado
  accent: "#C8663E",  // Terracota
  bgLight: "#F8FAFC"
};

export default function TuitionFeeSection() {
  const fees = [
    {
      type: 'Ingresantes',
      semester: 'I Semestre',
      amount: '200.00',
      icon: UserPlus2,
      tag: 'Nuevos'
    },
    {
      type: 'Regulares',
      semester: 'II a V Semestre',
      amount: '200.00',
      icon: Users2,
      tag: 'Continuantes'
    },
    {
      type: 'Egresantes',
      semester: 'VI Semestre',
      amount: '180.00',
      icon: UserCheck2,
      tag: 'Final'
    }
  ];

  return (
    <section className="w-full py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: COLORS.bgLight }}>
      
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B355C]/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C8663E]/5 rounded-full blur-3xl -ml-36 -mb-36" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* --- Cabecera --- */}
        <div className="text-center mb-16 lg:mb-24">
          <span 
            className="font-black uppercase tracking-[0.4em] text-xs mb-4 block"
            style={{ color: COLORS.accent }}
          >
            Inversión Educativa
          </span>
          <h2 
            className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9]"
            style={{ color: COLORS.primary }}
          >
            TARIFARIO DE <br />
            <span className="text-slate-300 italic">MATRÍCULA</span>
          </h2>
          <div 
            className="w-24 h-2 mt-8 mx-auto rounded-full"
            style={{ backgroundColor: COLORS.gold }}
          />
        </div>

        {/* --- Grid de Tarifas --- */}
        <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden">
          
          {/* Banner Superior */}
          <div className="bg-[#1B355C] p-8 text-center relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 flex items-center justify-center overflow-hidden pointer-events-none">
                <Wallet2 size={200} className="rotate-12" />
            </div>
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-sm mb-1">Derechos de Pago Oficiales</h3>
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Semestre Académico 2024</p>
          </div>

          {/* Cuerpo de Precios */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {fees.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-10 lg:p-14 flex flex-col items-center text-center group transition-colors hover:bg-slate-50">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ backgroundColor: `${COLORS.primary}10`, color: COLORS.primary }}
                  >
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ backgroundColor: `${COLORS.gold}20`, color: COLORS.gold }}>
                    {item.tag}
                  </span>

                  <h4 className="text-xl font-black mb-1" style={{ color: COLORS.primary }}>{item.type}</h4>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">{item.semester}</p>
                  
                  <div className="relative inline-block">
                    <span className="text-sm font-black align-top mr-1" style={{ color: COLORS.accent }}>S/.</span>
                    <span className="text-5xl font-black tracking-tighter" style={{ color: COLORS.primary }}>{item.amount}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Informativo (BBVA) */}
          <div className="bg-slate-50 p-8 border-t border-slate-100">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#1B355C]">
                  <CreditCard size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Canal de Pago BBVA</p>
                  <p className="font-mono font-bold text-[#1B355C] tracking-tighter text-lg">0011-0229-0100095691-20</p>
                </div>
              </div>

              <div className="hidden md:block w-px h-10 bg-slate-200" />

              <div className="flex items-center gap-2 text-slate-500 italic text-sm">
                <Info size={16} className="text-[#D8A24C]" />
                <span>Indicar nombre completo y DNI al realizar el depósito.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Nota Final */}
        <p className="text-center mt-12 text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
          * Los costos no incluyen moras ni trámites administrativos adicionales.
        </p>

      </div>
    </section>
  );
}