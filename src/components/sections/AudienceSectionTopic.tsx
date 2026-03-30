// components/AudienceSectionTopic.tsx
import React from 'react';

const COLORS = {
  primary: '#1B355C',   // Azul
  gold: '#D8A24C',      // Dorado
  terracotta: '#C8663E', // Terracota
  bgLight: '#F8FAFC',   
};

// --- Iconos SVG Optimizados (Estilo Unificado) ---

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

const SecurityIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <circle cx="12" cy="11" r="3"/>
  </svg>
);

const PublicIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
    <path d="M2 12h20"/>
  </svg>
);

interface AudienceItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const audienceData: AudienceItem[] = [
  { label: "Estudiantes", icon: StudentIcon },
  { label: "Personal Administrativo", icon: AdminIcon },
  { label: "Personal Docente", icon: DocenteIcon },
  { label: "Personal de Seguridad", icon: SecurityIcon },
  { label: "Público en General", icon: PublicIcon },
];

export default function AudienceSectionTopic() {
  return (
    <section className="w-full py-20 lg:py-28" style={{ backgroundColor: COLORS.bgLight }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* --- Cabecera --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter" style={{ color: COLORS.primary }}>
            DIRIGIDO <span style={{ color: COLORS.terracotta }}>A:</span>
          </h2>
          <div className="w-20 h-1.5 mt-4 mx-auto rounded-full" style={{ backgroundColor: COLORS.gold }}></div>
        </div>

        {/* --- Grid de Iconos: Centrado para 5 elementos --- */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {audienceData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="group flex flex-col items-center text-center w-[calc(50%-1rem)] md:w-40 lg:w-48"
              >
                {/* Círculo del Icono */}
                <div 
                  className="bg-white rounded-full flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl border-2"
                  style={{ borderColor: `${COLORS.gold}20` }}
                >
                  <Icon 
                    className="w-10 h-10 sm:w-12 sm:h-12 transition-colors duration-300" 
                    style={{ color: COLORS.primary }} 
                  />
                </div>
                
                {/* Etiqueta */}
                <p 
                  className="mt-6 font-bold text-xs sm:text-sm uppercase tracking-wider leading-snug transition-colors duration-300 group-hover:text-[#C8663E]" 
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