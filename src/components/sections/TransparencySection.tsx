// components/TransparencySection.tsx

import React from 'react';
import Link from 'next/link';

// --- Iconos SVG Personalizados ---

// Icono de Reglamento (Documento con escudo/protección)
const RegulationIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono de Manual (Libro/Manual de procesos)
const ManualIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19.5C4 18.1193 5.11929 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.5 2H20V22H6.5C5.11929 22 4 20.8807 4 19.5V4.5C4 3.11929 5.11929 2 6.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono de Flecha (Para el botón)
const ArrowLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Datos de los Documentos ---
const documents = [
  {
    title: 'Reglamento Interno de Trabajo',
    description: 'Normas y disposiciones que regulan las relaciones laborales en nuestra institución.',
    href: '/docs/REGLAMENTO INTERNO DE TRABAJO.pdf', // <--- Asegúrate que la ruta sea correcta
    icon: RegulationIcon,
  },
  {
    title: 'Manual de Procesos Administrativos 2025',
    description: 'Guía detallada de los procedimientos y flujos de trabajo para el año 2025.',
    href: '/docs/MANUAL DE PROCESOS ADMINISTRATIVOS 2025.pdf', // <--- Asegúrate que la ruta sea correcta
    icon: ManualIcon,
  },
];

export default function TransparencySection() {
  const colors = {
    primaryText: '#002A5D', // Azul Institucional
    accent: '#08D3C4',     // Turquesa Institucional
    bgCard: '#FFFFFF',
    bgSection: '#F0F7FF', // Celeste muy suave de fondo
  };

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.bgSection }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        
        {/* Cabecera */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            Transparencia
          </h2>
          <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Accede a nuestros documentos de gestión y normatividad institucional para garantizar la transparencia en nuestros procesos.
          </p>
        </div>

        {/* Grid de Documentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {documents.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <Link 
                key={index} 
                href={doc.href}
                target="_blank" // Abre el PDF en nueva pestaña
                rel="noopener noreferrer"
                className="group relative block h-full"
              >
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 flex flex-col">
                  
                  {/* Icono Principal */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 bg-sky-50 group-hover:bg-[#002A5D]">
                    <Icon className="w-8 h-8 text-[#002A5D] transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold mb-3" style={{ color: colors.primaryText }}>
                    {doc.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-slate-600 text-sm mb-8 flex-grow">
                    {doc.description}
                  </p>

                  {/* Botón / Flecha */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                    <span className="text-sm font-semibold text-slate-500 group-hover:text-[#08D3C4] transition-colors">
                      Ver documento PDF
                    </span>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center transition-all duration-300 group-hover:bg-[#08D3C4] group-hover:translate-x-2">
                      <ArrowLinkIcon className="w-5 h-5 text-slate-600 group-hover:text-white" />
                    </div>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}