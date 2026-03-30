"use client";

import React from 'react';
import Link from 'next/link';
import { 
  UserRoundSearch, 
  WalletCards, 
  ClipboardCheck, 
  ExternalLink,
  ArrowRight
} from 'lucide-react';

// --- Paleta Institucional Exacta ---
const COLORS = {
  primary: "#1B355C", // Azul Profundo
  gold: "#D8A24C",    // Dorado
  accent: "#C8663E",  // Terracota
  bgLight: "#F8FAFC"
};

export default function MatriculaReservationSection() {
  const steps = [
    {
      id: '01',
      title: 'Evaluación de Caso',
      desc: 'Acércate presencialmente al área de Bienestar y Empleabilidad para revisar tu situación académica y recibir la autorización.',
      icon: UserRoundSearch,
      color: COLORS.primary
    },
    {
      id: '02',
      title: 'Pago de Derecho',
      desc: 'Realiza el abono correspondiente por concepto de reserva. Monto vigente:',
      amount: 'S/. 250.00',
      account: 'BBVA: 0011-0229-0100095691-20',
      icon: WalletCards,
      color: COLORS.gold
    },
    {
      id: '03',
      title: 'Registro Virtual',
      desc: 'Completa el formulario y selecciona la opción "Reserva de Matrícula" al adjuntar tu comprobante.',
      icon: ClipboardCheck,
      color: COLORS.accent,
      link: "https://forms.gle/GBX93q8E1WYfK8sD7"
    }
  ];

  return (
    <section className="w-full py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: COLORS.bgLight }}>
      
      {/* Decoración de fondo estilizada */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none flex justify-around items-center">
        <div className="w-[500px] h-[500px] rounded-full border-[40px]" style={{ borderColor: COLORS.gold }} />
        <div className="w-[300px] h-[300px] rounded-full border-[20px]" style={{ borderColor: COLORS.accent }} />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- Cabecera --- */}
        <div className="text-center mb-20 lg:mb-28">
          <span 
            className="font-black uppercase tracking-[0.4em] text-xs mb-4 block"
            style={{ color: COLORS.accent }}
          >
            Asegura tu Vacante
          </span>
          <h2 
            className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85]"
            style={{ color: COLORS.primary }}
          >
            RESERVA DE <br />
            <span className="text-slate-300 italic">MATRÍCULA</span>
          </h2>
          <div 
            className="w-24 h-2 mt-8 mx-auto rounded-full"
            style={{ backgroundColor: COLORS.gold }}
          />
        </div>

        {/* --- Pasos del Proceso --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div 
                key={idx} 
                className={`relative bg-white rounded-[3rem] p-10 shadow-2xl shadow-slate-200/60 border border-slate-100 transition-all duration-500 hover:-translate-y-3 group ${isLast ? 'ring-2 ring-offset-8 ring-offset-slate-50' : ''}`}
                style={{ ringColor: isLast ? COLORS.accent : 'transparent' }}
              >
                {/* Número de Paso Flotante */}
                <div 
                  className="absolute -top-6 -right-4 text-8xl font-black italic opacity-[0.07] select-none transition-opacity group-hover:opacity-10"
                  style={{ color: COLORS.primary }}
                >
                  {step.id}
                </div>

                {/* Icono */}
                <div 
                  className="w-20 h-20 rounded-3xl flex items-center justify-center mb-10 shadow-lg transition-transform duration-500 group-hover:rotate-6"
                  style={{ backgroundColor: step.color, color: 'white' }}
                >
                  <Icon size={38} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-black mb-4 leading-tight" style={{ color: COLORS.primary }}>
                  {step.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {step.desc}
                </p>

                {/* Detalles Específicos (Paso 2) */}
                {step.amount && (
                  <div className="space-y-4 mb-4">
                    <div className="inline-block py-3 px-8 rounded-2xl text-2xl font-black shadow-inner" style={{ backgroundColor: `${COLORS.primary}08`, color: COLORS.primary }}>
                      {step.amount}
                    </div>
                    <div className="p-4 rounded-2xl border border-dashed text-[11px] font-mono font-bold" style={{ borderColor: `${COLORS.gold}40`, color: COLORS.gold, backgroundColor: `${COLORS.gold}05` }}>
                      {step.account}
                    </div>
                  </div>
                )}

                {/* Botón de Acción (Paso 3) */}
                {step.link && (
                  <Link 
                    href={step.link}
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl text-white font-black uppercase tracking-widest text-[10px] transition-all duration-300 shadow-xl hover:shadow-orange-900/20"
                    style={{ backgroundColor: COLORS.accent }}
                  >
                    Ir al Formulario <ExternalLink size={14} />
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* --- Footer Informativo --- */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-4 text-slate-400">
           <div className="h-px w-12 bg-slate-200 hidden md:block" />
           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-center">
             Proceso válido solo para estudiantes regulares con autorización previa
           </p>
           <div className="h-px w-12 bg-slate-200 hidden md:block" />
        </div>

      </div>
    </section>
  );
}