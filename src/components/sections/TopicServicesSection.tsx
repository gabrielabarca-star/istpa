// components/TopicServicesSection.tsx
import React from 'react';
import Image from 'next/image';

const COLORS = {
  primary: '#1B355C',   // Azul
  gold: '#D8A24C',      // Dorado
  terracotta: '#C8663E', // Terracota
};

// --- Icono de Check Institucional ---
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill={COLORS.gold} fillOpacity="0.15"/>
    <path 
      d="M8 12.5L10.5 15L16 9" 
      stroke={COLORS.gold} 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

interface Service { text: string; }

const leftServices: Service[] = [
  { text: 'Atención de emergencias y urgencias de salud' },
  { text: 'Atención y consulta gratuita' },
  { text: 'Consejería de tópico' },
];

const rightServices: Service[] = [
  { text: 'Administración de medicamentos (Emergencias)' },
  { text: 'Curaciones en caso de accidentes' },
  { text: 'Toma de funciones vitales completas' },
];

// --- Sub-componente de Tarjeta de Servicio ---
const ServiceCard = ({ text }: { text: string }) => (
  <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-100 hover:border-[#D8A24C]/30 p-5 flex items-center gap-4 transition-all duration-300 transform hover:-translate-y-1">
    <CheckIcon className="w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
    <span className="text-slate-700 font-bold text-sm sm:text-base leading-snug group-hover:text-[#1B355C] transition-colors">
      {text}
    </span>
  </div>
);

export default function TopicServicesSection() {
  return (
    <section className="w-full bg-[#FBFBFC] py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* --- Cabecera de la Sección --- */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-8 rounded-full" style={{ backgroundColor: COLORS.terracotta }}></div>
            <span className="text-xs font-black uppercase tracking-[0.3em]" style={{ color: COLORS.terracotta }}>
              Servicios Disponibles
            </span>
            <div className="h-1 w-8 rounded-full" style={{ backgroundColor: COLORS.terracotta }}></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter" style={{ color: COLORS.primary }}>
            COBERTURA <span style={{ color: COLORS.gold }}>MÉDICA</span>
          </h2>
        </div>

        {/* --- Grid Principal --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Columna Izquierda */}
          <div className="lg:col-span-4 space-y-5 lg:order-1 order-2">
            {leftServices.map((service, i) => (
              <ServiceCard key={i} text={service.text} />
            ))}
          </div>

          {/* Columna Central: Imagen con decoración */}
          <div className="lg:col-span-4 lg:order-2 order-1 relative">
            {/* Círculo decorativo de fondo */}
            <div 
              className="absolute inset-0 m-auto w-64 h-64 blur-3xl rounded-full opacity-10"
              style={{ backgroundColor: COLORS.gold }}
            ></div>
            
            <div className="relative w-full max-w-[280px] sm:max-w-xs mx-auto transition-transform duration-700 hover:scale-105">
              <Image
                src="/img/topico_1.png" 
                alt="Servicios de Tópico"
                width={400} 
                height={600} 
                className="drop-shadow-2xl object-contain"
              />
            </div>
          </div>

          {/* Columna Derecha */}
          <div className="lg:col-span-4 space-y-5 lg:order-3 order-3">
            {rightServices.map((service, i) => (
              <ServiceCard key={i} text={service.text} />
            ))}
          </div>
        </div>

        {/* --- Nota al pie --- */}
        <div className="mt-16 text-center">
            <p className="inline-block px-6 py-2 rounded-full text-xs font-bold border" style={{ color: COLORS.primary, borderColor: `${COLORS.primary}20` }}>
                Atención exclusiva para la comunidad estudiantil y administrativa.
            </p>
        </div>

      </div>
    </section>
  );
}