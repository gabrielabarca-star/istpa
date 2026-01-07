// components/TopicServicesSection.tsx

import React from 'react';
import Image from 'next/image';

// --- Icono de Check ---
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Círculo de fondo con opacidad */}
    <circle cx="12" cy="12" r="10" fill="#08D3C4" fillOpacity="0.1"/>
    {/* Checkmark */}
    <path 
      d="M8 12.5L10.5 15L16 9" 
      stroke="#08D3C4" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// --- Datos para las tarjetas ---
interface Service { text: string; }

const leftServices: Service[] = [
  { text: 'Atención de emergencias y urgencias de salud' },
  { text: 'Atención y consulta gratuita' },
  { text: 'Consejería de tópico' },
];

const rightServices: Service[] = [
  { text: 'Administración de medicamentos gratuitos (solo en caso de emergencia)' },
  { text: 'Curaciones (en caso de accidentes)' },
  { text: 'Toma de funciones vitales (presión arterial, temperatura, respiración, pulso)' },
];

// --- Sub-componente de Tarjeta de Servicio ---
const ServiceCard = ({ text }: { text: string }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 flex items-center gap-4">
    <CheckIcon className="w-8 h-8 flex-shrink-0" />
    <span className="text-slate-700 font-medium">{text}</span>
  </div>
);

// --- Componente Principal ---
export default function TopicServicesSection() {
  const colors = {
    primaryText: '#002A5D',
    accent: '#08D3C4',
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* --- Cabecera de la Sección --- */}
        <div className="text-center">
          <h2 
            className="text-4xl sm:text-5xl font-extrabold" 
            style={{ color: colors.primaryText }}
          >
            Servicios
          </h2>
          <div 
            className="w-16 h-1 mt-4 mx-auto" 
            style={{ backgroundColor: colors.accent }}
          ></div>
        </div>

        {/* --- Grid de 3 Columnas --- */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Columna Izquierda: Tarjetas */}
          <div className="space-y-6 lg:order-1">
            {leftServices.map((service, i) => (
              <ServiceCard key={i} text={service.text} />
            ))}
          </div>

          {/* Columna Central: Imagen 
              (order-first la pone arriba en móvil) */}
          <div className="lg:order-2 order-first">
            <div className="relative w-full max-w-xs mx-auto">
              <Image
                // ¡Recuerda cambiar esta ruta por la de tu imagen!
                src="/img/topico_servicio.png" 
                alt="Servicios de Tópico"
                width={400} // Ancho original de tu imagen
                height={600} // Alto original de tu imagen
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>

          {/* Columna Derecha: Tarjetas */}
          <div className="space-y-6 lg:order-3">
            {rightServices.map((service, i) => (
              <ServiceCard key={i} text={service.text} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}