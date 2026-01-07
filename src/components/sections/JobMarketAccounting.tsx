// components/JobMarketAccounting.tsx

import React from 'react';
import Image from 'next/image';

// --- Iconos SVG ---
const BriefcaseIcon = ({ className }: { className?: string }) => ( <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6V4C9 2.89543 9.89543 2 11 2H13C14.1046 2 15 2.89543 15 4V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="6" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 11H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const BuildingIcon = ({ className }: { className?: string }) => ( <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 22H3V11L12 2L21 11V22H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 22V16H11V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const BankIcon = ({ className }: { className?: string }) => ( // Ícono nuevo
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10L12 3L21 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 22H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 10V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 10V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 16H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const OverlayIcon = ({ className }: { className?: string }) => ( <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#0A2540"/><path d="M24 34C30.0751 34 35 29.0751 35 23C35 16.9249 30.0751 12 24 12C17.9249 12 13 16.9249 13 23C13 26.6579 14.8037 29.8753 17.5 32" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg> );

interface JobOpportunity { text: string; icon: React.ComponentType<{ className?: string }>; }
const jobOpportunities: JobOpportunity[] = [
  { text: 'Estudios contables', icon: BriefcaseIcon },
  { text: 'Bancos y entidades financieras', icon: BankIcon },
  { text: 'Áreas de contabilidad en empresas', icon: BuildingIcon },
  { text: 'Consultoras y auditoras', icon: BriefcaseIcon },
  { text: 'Entidades del sector público (SUNAT)', icon: BuildingIcon },
  { text: 'Como profesional independiente', icon: BriefcaseIcon },
];

export default function JobMarketAccounting() {
  const colors = { primaryText: '#0A2540', accent: '#EF4444', };

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative w-full max-w-md mx-auto aspect-[4/5]"><Image src="/img/campo_laboral_contabilidad.png" alt="Profesional de contabilidad" layout="fill" objectFit="cover" className="rounded-3xl"/><OverlayIcon className="absolute bottom-6 right-6 w-12 h-12" /></div>
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>Campo Laboral</h2>
            <div className="w-20 h-1.5 mt-4" style={{ backgroundColor: colors.accent }}></div>
            <p className="mt-6 text-slate-600">Nuestros egresados se insertan rápidamente en el mercado laboral gracias a nuestra sólida formación.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {jobOpportunities.map((job, index) => {
                const IconComponent = job.icon; // Corrección para JSX
                return (
                  <div key={index} className="p-4 rounded-xl border-2 flex items-center gap-4" style={{ borderColor: colors.accent }}>
                    <IconComponent className="w-6 h-6 flex-shrink-0" style={{ color: colors.accent }} />
                    <span className="font-semibold" style={{ color: colors.primaryText }}>{job.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}