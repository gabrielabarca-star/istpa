// components/WhyChooseUs.tsx

import React from 'react';

// --- Iconos SVG personalizados como componentes de React ---
const TeachersIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 40V29.3333C16 26.9333 17.6 25.3333 20 25.3333H29.3333" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.6667 40V28C26.6667 26.5333 27.8667 25.3333 29.3333 25.3333H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 20C34.9426 20 37.3333 17.6093 37.3333 14.6667C37.3333 11.724 34.9426 9.33333 32 9.33333C29.0573 9.33333 26.6667 11.724 26.6667 14.6667C26.6667 17.6093 29.0573 20 32 20Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.3333 54.6667V49.3333C21.3333 46.9333 23.2 45.3333 25.3333 45.3333H38.6667C40.8 45.3333 42.6667 46.9333 42.6667 49.3333V54.6667" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- NUEVO ÍCONO para Horarios Flexibles ---
const FlexibleHoursIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 52C43.0457 52 52 43.0457 52 32C52 20.9543 43.0457 12 32 12C20.9543 12 12 20.9543 12 32C12 43.0457 20.9543 52 32 52Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 32L29.3333 37.3333L42.6667 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ThreeYearsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 52C43.0457 52 52 43.0457 52 32C52 20.9543 43.0457 12 32 12C20.9543 12 12 20.9543 12 32C12 43.0457 20.9543 52 32 52Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 21.3333V32H42.6667" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LabsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M45.3333 18.6667H18.6667C15.6267 18.6667 13.3333 20.96 13.3333 24V48C13.3333 50.9333 15.6267 53.3333 18.6667 53.3333H45.3333C48.3733 53.3333 50.6667 50.9333 50.6667 48V24C50.6667 20.96 48.3733 18.6667 45.3333 18.6667Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 18.6667V13.3333C24 11.8667 25.2 10.6667 26.6667 10.6667H37.3333C38.8 10.6667 40 11.8667 40 13.3333V18.6667" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Definición de Tipos ---
interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

// --- Contenido de las 4 tarjetas ---
const features: Feature[] = [
  {
    title: 'Docentes Especializados',
    description: 'Nuestra plana docente está conformada por profesionales expertos y activos en su campo laboral.',
    icon: TeachersIcon,
  },
  {
    title: 'Horarios Flexibles',
    description: 'Estudia en nuestros 3 horarios mañana ,tarde y noche.',
    icon: FlexibleHoursIcon,
  },
  {
    title: 'Termina tu carrera en 3 años',
    description: 'Optimiza tu tiempo con nuestros programas de estudio intensivos y enfócate en tu futuro profesional.',
    icon: ThreeYearsIcon,
  },
  {
    title: 'Laboratorios equipados',
    description: 'Aprende en entornos prácticos con tecnología de punta que simulan el ambiente laboral real.',
    icon: LabsIcon,
  },
];

// --- Componente Principal ---
export default function WhyChooseUs() {
  const colors = {
    primaryText: '#0A2540',
    accent: '#08D3C4',
    background: '#F8FAFC',
  };

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.background }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* --- Cabecera de la Sección --- */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            <span style={{ color: colors.accent }}>¿Por qué</span> elegirnos?
          </h2>
          <div className="w-20 h-1.5 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
        </div>

        {/* --- Grid de Tarjetas --- */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 text-center flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-in-out hover:bg-[#002a5d]"
            >
              <div className="w-24 h-24 flex items-center justify-center rounded-full mb-6 bg-blue-50 transition-colors duration-500 group-hover:bg-blue-900/50">
                <feature.icon className="w-12 h-12 text-sky-400 transition-colors duration-500 group-hover:text-white" />
              </div>

              <h3 className="text-lg font-bold text-slate-800 transition-colors duration-500 group-hover:text-white">
                {feature.title}
              </h3>

              <p className="text-sm text-slate-500 transition-all duration-500 ease-in-out opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 group-hover:mt-2 group-hover:text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}