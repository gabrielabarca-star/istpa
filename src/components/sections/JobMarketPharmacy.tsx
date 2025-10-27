// components/JobMarketPharmacy.tsx

import React from 'react';
import Image from 'next/image';

// --- Iconos SVG ---
const HospitalIcon = ({ className }: { className?: string }) => ( <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const PillIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.12 2.49C16.89 3.32 18.91 5.34 19.74 8.11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.88 21.51C7.11 20.68 5.09 18.66 4.26 15.89" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.54 15.54L8.46 8.46C7.63 9.93 7.43 11.66 8.02 13.26L10.74 2.94C9.14 2.35 7.41 2.55 5.94 3.38L3.38 5.94C1.81 7.51 1.81 10.05 3.38 11.62L11.62 19.86C13.19 21.43 15.73 21.43 17.3 19.86L19.86 17.3C20.69 15.83 20.89 14.1 20.3 12.5L13.26 8.02C14.86 7.43 16.59 7.63 18.06 8.46L15.54 11.02" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const FactoryIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 22V12.33C20 11.23 19.45 10.22 18.57 9.59L13.43 5.41C12.55 4.78 11.45 4.78 10.57 5.41L5.43 9.59C4.55 10.22 4 11.23 4 12.33V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 9V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.5 12.5L12 14.5L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const OverlayIcon = ({ className }: { className?: string }) => ( <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#0A2540"/><path d="M24 34C30.0751 34 35 29.0751 35 23C35 16.9249 30.0751 12 24 12C17.9249 12 13 16.9249 13 23C13 26.6579 14.8037 29.8753 17.5 32" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg> );

interface JobOpportunity { text: string; icon: React.ComponentType<{ className?: string }>; }
const jobOpportunities: JobOpportunity[] = [
  { text: 'Farmacias y boticas', icon: PillIcon },
  { text: 'Laboratorios farmacéuticos', icon: FactoryIcon },
  { text: 'Cadenas de farmacias', icon: PillIcon },
  { text: 'Distribuidoras de medicamentos', icon: FactoryIcon },
  { text: 'Hospitales y clínicas (área de farmacia)', icon: HospitalIcon },
  { text: 'Industria cosmética y de perfumería', icon: FactoryIcon },
];

export default function JobMarketPharmacy() {
  const colors = { primaryText: '#0A2540', accent: '#EF4444', };

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative w-full max-w-md mx-auto aspect-[4/5]"><Image src="/img/campo-laboral-farmacia.jpg" alt="Profesional de farmacia en un laboratorio" layout="fill" objectFit="cover" className="rounded-3xl"/><OverlayIcon className="absolute bottom-6 right-6 w-12 h-12" /></div>
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>Campo Laboral</h2>
            <div className="w-20 h-1.5 mt-4" style={{ backgroundColor: colors.accent }}></div>
            <p className="mt-6 text-slate-600">Nuestros egresados se insertan rápidamente en el mercado laboral gracias a nuestra sólida formación.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* --- INICIO DE LA CORRECCIÓN --- */}
              {jobOpportunities.map((job, index) => {
                // Asignamos el componente a una variable con Mayúscula
                const IconComponent = job.icon; 
                
                return (
                  <div key={index} className="p-4 rounded-xl border-2 flex items-center gap-4" style={{ borderColor: colors.accent }}>
                    {/* Usamos la nueva variable con Mayúscula */}
                    <IconComponent className="w-6 h-6 flex-shrink-0" style={{ color: colors.accent }} />
                    <span className="font-semibold" style={{ color: colors.primaryText }}>{job.text}</span>
                  </div>
                );
              })}
              {/* --- FIN DE LA CORRECCIÓN --- */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}