// components/Managementdocuments.jsx

import React from 'react';

// --- Iconos SVG Personalizados ---

// Icono para Reglamento Interno
const RegulationIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono para Manual de Perfil de Puestos
const ProfileManualIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 19C8 17.5 10 16 12 16C14 16 16 17.5 16 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono para Plan Anual de Trabajo
const WorkPlanIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 16L11 18L15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono para Proyecto Educativo Institucional
const InstitutionProjectIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 10L12 5L22 10L12 15L2 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 12V17C6 17 8.5 20 12 20C15.5 20 18 17 18 17V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono para Manual de Procesos Académicos (Capas / Procesos)
const AcademicProcessIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono de flecha para los enlaces
const ArrowLinkIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Datos de los Documentos ---
const documents = [
  {
    title: 'Manual de Perfil de Puestos',
    description: 'Documento normativo que describe las funciones, responsabilidades y requisitos de los diferentes puestos.',
    href: '/docs/MANUAL DE PERFIL DE PUESTOS.pdf',
    icon: ProfileManualIcon,
  },
  {
    title: 'Reglamento Interno',
    description: 'Normas y disposiciones que regulan las relaciones laborales y la sana convivencia en nuestra institución.',
    href: '/docs/REGLAMENTO INTERNO.pdf',
    icon: RegulationIcon,
  },
  {
    title: 'Plan Anual de Trabajo',
    description: 'Instrumento de gestión a corto plazo que facilita la ejecución del Proyecto Educativo Institucional.',
    href: '/docs/PLAN ANUAL DE TRABAJO.pdf',
    icon: WorkPlanIcon,
  },
  {
    title: 'Proyecto Educativo Institucional',
    description: 'Instrumento que orienta la gestión escolar y el proceso educativo a mediano y largo plazo.',
    href: '/docs/PROYECTO EDUCATIVO INSTITUCIONAL.pdf',
    icon: InstitutionProjectIcon,
  },
  {
    title: 'Manual de Procesos Académicos',
    description: 'Guía detallada que establece los procedimientos y lineamientos para el desarrollo de las actividades académicas.',
    href: '/docs/MANUAL DE PROCESOS ACADEMICOS.pdf',
    icon: AcademicProcessIcon,
  },
];

export default function ManagementDocuments() {
  const colors = {
    primaryText: '#002A5D', // Azul Institucional
    accent: '#08D3C4',      // Turquesa Institucional
    bgCard: '#FFFFFF',
    bgSection: '#F0F7FF',   // Fondo celeste muy suave
  };

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.bgSection }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
          Documentos de Gestión
          </h2>
          <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Accede a nuestros documentos de gestión y normatividad institucional para garantizar la transparencia en todos nuestros procesos.
          </p>
        </div>

        {/* Cuadrícula de Documentos */}
        {/* Cambiado a md:grid-cols-2 y lg:grid-cols-3 para acomodar mejor los 5 elementos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <a 
                key={index} 
                href={doc.href}
                target="_blank" // Abre el PDF en una nueva pestaña
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
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}