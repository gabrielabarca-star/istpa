"use client";

import React from 'react';
import { 
  Building2, 
  TicketCheck, 
  Stethoscope, 
  Users2, 
  GraduationCap,
  ArrowRight
} from 'lucide-react';

// --- Paleta Institucional Exacta ---
const COLORS = {
  primary: "#1B355C", // Azul Profundo
  gold: "#D8A24C",    // Dorado
  accent: "#C8663E",  // Terracota
  bgLight: "#FDFDFD"
};

export default function EnrollmentProcessSection() {
  const steps = [
    {
      title: 'Pago de Derecho de Matrícula',
      desc: 'Realiza tu abono en cualquier agencia o app del banco BBVA.',
      detail: 'Cuenta: 0011-0229-0100095691-20',
      icon: Building2,
    },
    {
      title: 'Validación en Caja',
      desc: 'Presenta tu voucher físico o digital en la ventanilla de tesorería para la validación oficial.',
      icon: TicketCheck,
    },
    {
      title: 'Atención en Tópico',
      desc: 'Evaluación básica de salud obligatoria para completar tu Ficha Médica Institucional.',
      icon: Stethoscope,
    },
    {
      title: 'Bienestar y Empleabilidad',
      desc: 'Entrevista con el área de Bienestar Social para la apertura de tu legajo socioeconómico.',
      icon: Users2,
    },
    {
      title: 'Secretaría Académica',
      desc: 'Finaliza eligiendo tu turno (Mañana/Tarde/Noche) y firma tu acta de matrícula.',
      icon: GraduationCap,
    },
  ];

  return (
    <section className="w-full py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: COLORS.bgLight }}>
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D8A24C]/5 rounded-full blur-3xl -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1B355C]/5 rounded-full blur-3xl -ml-40 -mb-40" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* --- Cabecera --- */}
        <div className="text-center mb-24">
          <span 
            className="font-black uppercase tracking-[0.4em] text-xs mb-4 block"
            style={{ color: COLORS.accent }}
          >
            Guía Paso a Paso
          </span>
          <h2 
            className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9]"
            style={{ color: COLORS.primary }}
          >
            PROCESO DE <br />
            <span className="text-slate-300 italic">MATRÍCULA</span>
          </h2>
          <div 
            className="w-24 h-2 mt-8 mx-auto rounded-full"
            style={{ backgroundColor: COLORS.gold }}
          />
        </div>

        {/* --- Timeline de Pasos --- */}
        <div className="relative">
          {/* Línea central (Desktop) / Lateral (Móvil) */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex items-center group">
                  
                  {/* Círculo con Icono (El eje central) */}
                  <div 
                    className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
                    style={{ 
                      backgroundColor: isEven ? COLORS.primary : COLORS.gold,
                      color: 'white'
                    }}
                  >
                    <Icon size={isEven ? 28 : 32} strokeWidth={1.5} />
                  </div>

                  {/* Contenido */}
                  <div className={`flex w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    
                    {/* Tarjeta Informativa */}
                    <div className={`w-full md:w-[42%] ml-16 md:ml-0 ${isEven ? 'md:text-right md:mr-auto' : 'md:text-left md:ml-auto'}`}>
                      <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50 transition-all duration-500 group-hover:-translate-y-2">
                        <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                          <span 
                            className="text-4xl font-black italic opacity-10" 
                            style={{ color: COLORS.primary }}
                          >
                            0{index + 1}
                          </span>
                          <h3 
                            className="text-lg font-black uppercase tracking-tight"
                            style={{ color: COLORS.primary }}
                          >
                            {step.title}
                          </h3>
                        </div>
                        
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">
                          {step.desc}
                        </p>

                        {step.detail && (
                          <div 
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-[10px] font-bold"
                            style={{ 
                              backgroundColor: `${COLORS.gold}10`, 
                              borderColor: `${COLORS.gold}30`,
                              color: COLORS.gold
                            }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: COLORS.gold }}></span>
                            {step.detail}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Espaciador para el lado opuesto (Oculto en móvil) */}
                    <div className="hidden md:block md:w-[42%]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        
        
      </div>
    </section>
  );
}