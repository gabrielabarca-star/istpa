// components/AudienceSectionLibrary.tsx
import React from 'react';

const COLORS = {
  primary: '#1B355C',   // Azul
  gold: '#D8A24C',      // Dorado
  terracotta: '#C8663E', // Terracota
  bgLight: '#F8FAFC',   
};

// --- Iconos SVG Optimizados ---
const StudentIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"/>
    <path d="M5 10L12 5L19 10L12 15L5 10Z"/>
    <path d="M12 15V21"/>
    <path d="M6 18c0-2 4-3 6-3s6 1 6 3"/>
  </svg>
);

const AdminIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const DocenteIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    <path d="M12 7v4"/><path d="M10 9h4"/>
  </svg>
);

interface AudienceItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const audienceData: AudienceItem[] = [
  { label: "Estudiantes", icon: StudentIcon },
  { label: "Personal Administrativo Autorizado", icon: AdminIcon },
  { label: "Personal Docente", icon: DocenteIcon },
];

export default function AudienceSectionLibrary() {
  return (
    <section className="w-full py-20 lg:py-24" style={{ backgroundColor: COLORS.bgLight }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase" style={{ color: COLORS.primary }}>
            ACCESO <span style={{ color: COLORS.terracotta }}>AUTORIZADO:</span>
          </h2>
          <div className="w-24 h-1.5 mt-4 mx-auto rounded-full" style={{ backgroundColor: COLORS.gold }}></div>
          <p className="mt-6 text-slate-500 font-medium max-w-xl mx-auto">
            El uso de los recursos bibliográficos  virtuales es exclusivo para nuestra comunidad institucional activa.
          </p>
        </div>

        {/* Grid Centrado para 3 elementos */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
          {audienceData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="group flex flex-col items-center text-center w-full sm:w-64"
              >
                {/* Círculo del Icono con efecto hover institucional */}
                <div 
                  className="bg-white rounded-3xl flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 shadow-xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl border-2"
                  style={{ borderColor: `${COLORS.gold}30` }}
                >
                  <Icon 
                    className="w-12 h-12 sm:w-14 sm:h-14 transition-colors duration-500" 
                    style={{ color: COLORS.primary }} 
                  />
                </div>
                
                {/* Etiqueta con acento Terracota */}
                <p 
                  className="mt-8 font-black text-sm sm:text-base uppercase tracking-widest leading-tight transition-colors duration-300 group-hover:text-[#C8663E]" 
                  style={{ color: COLORS.primary }}
                >
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