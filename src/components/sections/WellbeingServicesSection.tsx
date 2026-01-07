// components/WellbeingServicesSection.tsx

import React from 'react';
import Link from 'next/link';

// --- Iconos SVG (Añadido LibraryIcon) ---
const ServiceSocialIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15C10 15 6 16 6 18V19H18V18C18 16 14 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.071 16C19.6457 15.084 19.9999 14.054 20 13C20 9.13401 16.866 6 13 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4.92896 16C4.35427 15.084 4.0001 14.054 4 13C4 9.13401 7.13401 6 11 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const BecasIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 10L12 5L19 10L12 15L5 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 21C14.2091 21 16 19.2091 16 17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17C8 19.2091 9.79086 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const TutoriaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 19.2188V10C17 7.79086 15.2091 6 13 6H11C8.79086 6 7 7.79086 7 10V19.2188" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 18H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const TopicoIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const CulturaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 5H9C6.79086 5 5 6.79086 5 9V15C5 17.2091 6.79086 19 9 19H15C17.2091 19 19 17.2091 19 15V9C19 6.79086 17.2091 5 15 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12C8 10.8954 8.89543 10 10 10C11.1046 10 12 10.8954 12 12C12 13.1046 11.1046 14 10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 12C16 10.8954 15.1046 10 14 10C12.8954 10 12 10.8954 12 12C12 13.1046 12.8954 14 14 14C15.1046 14 16 13.1046 16 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 16C10.5 15 11.5 15 12 16C12.5 15 13.5 15 14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const DeportesIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.17 8L2.83 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.17 16L2.83 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 21.168L8 2.83197" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 21.168L16 2.83197" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const BolsaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 22V18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 6H4C2.89543 6 2 6.89543 2 8V18C2 19.1046 2.89543 20 4 20H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 20H20C21.1046 20 22 19.1046 22 18V8C22 6.89543 21.1046 6 20 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 6V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ConveniosIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 16.04L16 12.04" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 16.04L12 12.04" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 16.04L8 12.04" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 1H6C3.79086 1 2 2.79086 2 5V19C2 21.2091 3.79086 23 6 23H18C20.2091 23 22 21.2091 22 19V5C22 2.79086 20.2091 1 18 1Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 9H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
  </svg>
);

// --- INICIO DE LA CORRECCIÓN: Icono de Biblioteca añadido ---
const LibraryIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19.5C4 18.1193 5.11929 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6.5 17C7.88071 17 9 18.1193 9 19.5V21H6.5C5.11929 21 4 19.8807 4 18.5V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 19.5C10.3807 19.5 11.5 18.3807 11.5 17V3C11.5 2.44772 11.0523 2 10.5 2H6.5C5.11929 2 4 3.11929 4 4.5V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M11.5 17H19.5C20.8807 17 22 15.8807 22 14.5V3C22 2.44772 21.5523 2 21 2H11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
// --- FIN DE LA CORRECCIÓN ---


// --- Datos para las tarjetas (9 servicios) ---
interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const servicesData: Service[] = [
  {
    title: 'Servicio social',
    description: 'Promovemos el acceso a programas sociales y de voluntariado.',
    icon: ServiceSocialIcon,
    href: '/bienestar/servicio-social',
  },
  {
    title: 'Becas',
    description: 'Participa en los procesos de becas, en sus diversas modalidades.',
    icon: BecasIcon,
    href: '/beca',
  },
  {
    title: 'Servicio de tutoría',
    description: 'Acompañamiento académico y personal para potenciar tu éxito.',
    icon: TutoriaIcon,
    href: '/bienestar/tutoria',
  },
  {
    title: 'Tópico de Salud',
    description: 'Ofrecemos atención primaria y ambulatoria a todos nuestros estudiantes.',
    icon: TopicoIcon,
    href: '/topico',
  },
  {
    title: 'Actividades Extracurriculares',
    description: 'Fortalece tus capacidades, habilidades artísticas y creativas.',
    icon: CulturaIcon,
    href: '/bienestar/cultura-arte',
  },
  
  {
    title: 'Bolsa de trabajo',
    description: 'Te conectamos con las mejores oportunidades laborales del sector.',
    icon: BolsaIcon,
    href: '/empleabilidad/bolsa-de-trabajo',
  },
 
  // --- INICIO DE LA CORRECCIÓN: 9na tarjeta añadida ---
  {
    title: 'Biblioteca',
    description: 'Accede a nuestra biblioteca física, virtual y bases de datos especializadas.',
    icon: LibraryIcon,
    href: '/biblioteca',
  },
  // --- FIN DE LA CORRECCIÓN ---
];

// --- Sub-componente de Tarjeta ---
const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;
  return (
    <div className="bg-[#F0F7FF] rounded-2xl p-6 flex flex-col items-center text-center h-full shadow-sm">
      <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-sm border border-sky-100">
        <Icon className="w-10 h-10 text-[#002A5D]" />
      </div>
      
      <h3 className="text-xl font-bold text-[#002A5D] mb-3">{service.title}</h3>
      <p className="text-slate-600 text-sm flex-grow">{service.description}</p>
      
      <Link href={service.href}>
        <button className="mt-6 rounded-full bg-white border-2 border-[#002A5D] text-[#002A5D] py-2 px-6 font-semibold text-sm inline-flex items-center gap-2 hover:bg-sky-50 transition-colors duration-300">
          Más información
          <span className="bg-[#002A5D] text-white rounded-full w-5 h-5 flex items-center justify-center">
            <ArrowRightIcon className="w-3 h-3" />
          </span>
        </button>
      </Link>
    </div>
  );
};

// --- Componente Principal ---
export default function WellbeingServicesSection() {
  const colors = {
    primaryText: '#002A5D',
    accent: '#08D3C4',
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            Servicios de Bienestar y Empleabilidad
          </h2>
          <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
        </div>

        {/* --- INICIO DE LA CORRECCIÓN: Grid cambiado a 3 columnas --- */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        {/* --- FIN DE LA CORRECCIÓN --- */}
        
      </div>
    </section>
  );
}