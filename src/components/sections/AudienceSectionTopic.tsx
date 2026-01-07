// components/AudienceSectionTopic.tsx

import React from 'react';

// --- Iconos SVG Personalizados ---

// --- INICIO DE LA CORRECCIÓN ---
// Corregido el StudentIcon
const StudentIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15C10 15 6 16 6 18V19H18V18C18 16 14 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* La línea rota <path d.org...> ha sido eliminada */}
    <path d="M5 10L12 5L19 10L12 15L5 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
// --- FIN DE LA CORRECCIÓN ---

const AdminIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15C10 15 6 16 6 18V19H18V18C18 16 14 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 21C14.7614 21 17 18.7614 17 16C17 13.2386 14.7614 11 12 11C9.23858 11 7 13.2386 7 16C7 18.7614 9.23858 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 14V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 16H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DocenteIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 10H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 10H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 10H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 14H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 14H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 14H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SecurityIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15C10 15 6 16 6 18V19H18V18C18 16 14 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 4H16V2H8V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MaintenanceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15C10 15 6 16 6 18V19H18V18C18 16 14 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 10C19.1046 10 20 9.10457 20 8C20 6.89543 19.1046 6 18 6C16.8954 6 16 6.89543 16 8C16 9.10457 16.8954 10 18 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PublicIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15C10 15 6 16 6 18V19H18V18C18 16 14 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


// --- Datos para los ítems ---
interface AudienceItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const audienceData: AudienceItem[] = [
  { label: "Estudiantes", icon: StudentIcon },
  { label: "Personal administrativo", icon: AdminIcon },
  { label: "Personal docente", icon: DocenteIcon },
  { label: "Personal de seguridad", icon: SecurityIcon },
  { label: "Personal de mantenimiento", icon: MaintenanceIcon },
  { label: "Público en general que visita el campus", icon: PublicIcon },
];

// --- Componente Principal ---
export default function AudienceSectionTopic() {
  const colors = {
    background: '#F0F7FF', // Color de fondo celeste muy claro
    text: '#002A5D',       // Color de texto azul oscuro
    accent: '#08D3C4',     // Color de línea turquesa
  };

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.background }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* --- Cabecera --- */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.text }}>
            Dirigido a:
          </h2>
          <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
        </div>

        {/* --- Grid de Iconos --- */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12 justify-items-center">
          {audienceData.map((item, index) => {
            const Icon = item.icon; // Renombramos a Mayúscula para que JSX lo reconozca
            return (
              <div key={index} className="flex flex-col items-center text-center max-w-[150px]">
                {/* Círculo del Icono */}
                <div className="bg-white rounded-full p-5 shadow-md border-2 border-sky-100 flex items-center justify-center w-24 h-24">
                  <Icon className="w-10 h-10" style={{ color: colors.text }} />
                </div>
                {/* Etiqueta */}
                <p className="mt-4 font-semibold text-sm" style={{ color: colors.text }}>
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}