// components/WellbeingServicesSection.tsx

import React from 'react';
import Link from 'next/link';

// --- Iconos SVG ---

const BecasIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 10L12 5L19 10L12 15L5 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 21C14.2091 21 16 19.2091 16 17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17C8 19.2091 9.79086 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TopicoIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
  </svg>
);

const LibraryIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19.5C4 18.1193 5.11929 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6.5 17C7.88071 17 9 18.1193 9 19.5V21H6.5C5.11929 21 4 19.8807 4 18.5V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 19.5C10.3807 19.5 11.5 18.3807 11.5 17V3C11.5 2.44772 11.0523 2 10.5 2H6.5C5.11929 2 4 3.11929 4 4.5V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M11.5 17H19.5C20.8807 17 22 15.8807 22 14.5V3C22 2.44772 21.5523 2 21 2H11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// --- Datos para las tarjetas ---
interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const servicesData: Service[] = [
  {
    title: 'Becas',
    description: 'Participa en los procesos de becas, en sus diversas modalidades.',
    icon: BecasIcon,
    href: '/beca',
  },
  {
    title: 'Tópico de Salud',
    description: 'Ofrecemos atención primaria y ambulatoria a todos nuestros estudiantes.',
    icon: TopicoIcon,
    href: '/topico',
  },
  {
    title: 'Bolsa de trabajo',
    description: 'Te conectamos con las mejores oportunidades laborales del sector.',
    icon: BolsaIcon,
    href: 'https://iestpa.jedu.pe/alumno/entrar',
  },
  {
    title: 'Biblioteca',
    description: 'Accede a nuestra biblioteca física, virtual y bases de datos especializadas.',
    icon: LibraryIcon,
    href: '/biblioteca',
  },
];

// --- Sub-componente de Tarjeta (ACTUALIZADO CON EFECTO HOVER) ---
const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;
  return (
    // Agregamos 'group' al contenedor principal y una transición de elevación (-translate-y-2)
    <div className="bg-[#F0F7FF] rounded-2xl p-6 flex flex-col items-center text-center h-full shadow-sm group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      
      {/* Contenedor del icono: 
         - bg-white (normal) -> group-hover:bg-[#002A5D] (azul al pasar cursor)
         - border-sky-100 (normal) -> group-hover:border-[#002A5D] (borde azul al pasar cursor)
      */}
      <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-sm border border-sky-100 group-hover:bg-[#002A5D] group-hover:border-[#002A5D] transition-colors duration-300">
        
        {/* Icono SVG: 
           - text-[#002A5D] (azul normal) -> group-hover:text-white (blanco al pasar cursor)
        */}
        <Icon className="w-10 h-10 text-[#002A5D] group-hover:text-white transition-colors duration-300" />
      
      </div>
      
      <h3 className="text-xl font-bold text-[#002A5D] mb-3">{service.title}</h3>
      <p className="text-slate-600 text-sm flex-grow">{service.description}</p>
      
      <Link href={service.href}>
        {/* El botón también reacciona al grupo si lo deseas, o mantiene su propio hover */}
        <button className="mt-6 rounded-full bg-white border-2 border-[#002A5D] text-[#002A5D] py-2 px-6 font-semibold text-sm inline-flex items-center gap-2 group-hover:bg-[#002A5D] group-hover:text-white transition-colors duration-300">
          Más información
          <span className="bg-[#002A5D] text-white group-hover:bg-white group-hover:text-[#002A5D] rounded-full w-5 h-5 flex items-center justify-center transition-colors duration-300">
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

        {/* Grid de servicios */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
      </div>
    </section>
  );
}