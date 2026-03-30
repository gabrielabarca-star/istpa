// components/WellbeingServicesSection.tsx
import React from 'react';
import Link from 'next/link';

// --- Iconos SVG Actualizados ---

const AtencionEstudianteIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M12 7v4" /><path d="M12 11h.01" />
  </svg>
);

const BecasIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10L12 5L2 10L12 15L22 10Z" />
    <path d="M6 12V17C6 17 9 20 12 20C15 20 18 17 18 17V12" />
  </svg>
);

const TopicoIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 9v4" /><path d="M10 11h4" />
  </svg>
);

const BolsaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const PsicopedagogicoIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 14c3.314 0 6-2.686 6-6S15.314 2 12 2 6 4.686 6 8s2.686 6 6 6z" />
    <path d="M20 21c0-4.418-3.582-8-8-8s-8 3.582-8 8" />
  </svg>
);

const AsistenciaSocialIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
  </svg>
);

const EgresadoIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </svg>
);

const LibraryIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
  </svg>
);

// --- Datos ---
interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const servicesData: Service[] = [
  {
    title: 'Atención al Estudiante',
    description: 'Canal directo para consultas, trámites y orientación general sobre tu vida académica.',
    icon: AtencionEstudianteIcon,
    href: '/atencion_estudiante',
  },
  {
    title: 'Becas',
    description: 'Gestión y acompañamiento en procesos de becas y subvenciones institucionales.',
    icon: BecasIcon,
    href: '/beca',
  },
  {
    title: 'Psicopedagogía',
    description: 'Orientación académica y emocional para potenciar tu aprendizaje y bienestar.',
    icon: PsicopedagogicoIcon,
    href: '/psicopedagogia',
  },
  {
    title: 'Asistencia Social',
    description: 'Soporte y evaluación para el bienestar familiar y socioeconómico del estudiante.',
    icon: AsistenciaSocialIcon,
    href: '/asistencia-social',
  },
  {
    title: 'Tópico de Salud',
    description: 'Atención primaria y urgencias ambulatorias para toda nuestra comunidad educativa.',
    icon: TopicoIcon,
    href: '/topico',
  },
  {
    title: 'Bolsa de Trabajo',
    description: 'Conectamos tu talento con las mejores ofertas laborales del sector productivo.',
    icon: BolsaIcon,
    href: 'https://iestpa.jedu.pe/alumno/entrar',
  },
  {
    title: 'Empleabilidad y Egresados',
    description: 'Seguimiento, redes de contacto y fortalecimiento profesional para graduados.',
    icon: EgresadoIcon,
    href: '/egresados',
  },
  {
    title: 'Biblioteca',
    description: 'Acceso a recursos físicos y digitales para tu investigación y formación continua.',
    icon: LibraryIcon,
    href: '/biblioteca',
  },
];

const COLORS = {
  primary: '#1B355C',   // Azul
  gold: '#D8A24C',      // Dorado
  terracotta: '#C8663E', // Terracota
};

const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;
  return (
    <div className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center h-full shadow-md group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
      
      <div 
        className="rounded-2xl w-16 h-16 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#1B355C] group-hover:text-white"
        style={{ backgroundColor: `${COLORS.primary}10`, color: COLORS.primary }}
      >
        <Icon className="w-8 h-8" />
      </div>
      
      <h3 className="text-lg font-black mb-3 leading-tight min-h-[3rem] flex items-center" style={{ color: COLORS.primary }}>
        {service.title}
      </h3>
      
      <p className="text-slate-500 text-sm flex-grow leading-relaxed mb-6">
        {service.description}
      </p>
      
      <Link href={service.href} className="w-full">
        <button 
          className="w-full rounded-xl py-3 px-4 font-bold text-[10px] uppercase tracking-[0.15em] inline-flex items-center justify-center gap-2 transition-all duration-300 text-white hover:brightness-110 shadow-lg shadow-orange-900/20"
          style={{ backgroundColor: COLORS.terracotta }}
        >
          Más información
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </Link>
    </div>
  );
};

export default function WellbeingServicesSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Cabecera */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-8 rounded-full" style={{ backgroundColor: COLORS.gold }}></div>
            <span className="text-xs font-black uppercase tracking-[0.3em]" style={{ color: COLORS.gold }}>
              Apoyo Integral
            </span>
            <div className="h-1 w-8 rounded-full" style={{ backgroundColor: COLORS.gold }}></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black" style={{ color: COLORS.primary }}>
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Acompañamos tu formación profesional con servicios diseñados para tu bienestar y éxito laboral.
          </p>
        </div>

        {/* Grid de servicios (4 columnas en Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
      </div>
    </section>
  );
}