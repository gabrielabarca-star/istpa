// components/JobMarketNursing.tsx

import React from 'react';
import Image from 'next/image';

// --- Iconos SVG personalizados para la lista ---
const HospitalIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const BuildingIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 22H3V11L12 2L21 11V22H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 22V16H11V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const BriefcaseIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 6V4C9 2.89543 9.89543 2 11 2H13C14.1046 2 15 2.89543 15 4V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="6" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 11H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const GlobeIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22C9.5 19.5 8 16 8 12C8 8 9.5 4.5 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
// --- Icono decorativo para la imagen principal ---
const OverlayIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="#0A2540"/>
        <path d="M24 34C30.0751 34 35 29.0751 35 23C35 16.9249 30.0751 12 24 12C17.9249 12 13 16.9249 13 23C13 26.6579 14.8037 29.8753 17.5 32" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
);

// --- Definición de Tipos y Datos para la lista de oportunidades ---
interface JobOpportunity {
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}

const jobOpportunities: JobOpportunity[] = [
  { text: 'Hospitales del Minsa y EsSalud', icon: HospitalIcon },
  { text: 'Empresas Prestadoras de Salud', icon: BuildingIcon },
  { text: 'Clínicas privada', icon: HospitalIcon },
  { text: 'Policlínicos', icon: BuildingIcon },
  { text: 'Consultorios especializados', icon: BriefcaseIcon },
  { text: 'Servicios de ambulancia', icon: BriefcaseIcon },
  { text: 'Tópicos en empresas y colegios', icon: BuildingIcon },
  { text: 'Atención en forma independiente', icon: BriefcaseIcon },
  { text: 'Organizaciones no gubernamentales (ONG)', icon: GlobeIcon },
];

// --- Componente Principal ---
export default function JobMarketNursing() { // <-- NOMBRE DEL COMPONENTE CAMBIADO
  const colors = {
    primaryText: '#0A2540',
    accent: '#EF4444',
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* --- Columna Izquierda: Imagen --- */}
          <div className="relative w-full max-w-md mx-auto aspect-[4/5]">
            <Image
              src="/img/campolaboralenfermeria.JPG"
              alt="Profesional de enfermería atendiendo a un paciente"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
            <OverlayIcon className="absolute bottom-6 right-6 w-12 h-12" />
          </div>

          {/* --- Columna Derecha: Texto y Lista --- */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
              Campo Laboral
            </h2>
            <div className="w-20 h-1.5 mt-4" style={{ backgroundColor: colors.accent }}></div>
            <p className="mt-6 text-slate-600">
              Te preparamos para que empieces a trabajar desde los primeros periodos académicos.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {jobOpportunities.map((job, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl border-2 flex items-center gap-4"
                  style={{ borderColor: colors.accent }}
                >
                  <job.icon className="w-6 h-6 flex-shrink-0" style={{ color: colors.accent }} />
                  <span className="font-semibold" style={{ color: colors.primaryText }}>
                    {job.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}