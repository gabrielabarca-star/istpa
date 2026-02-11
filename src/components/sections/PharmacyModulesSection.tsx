// components/PharmacyModulesSection.tsx

import React from 'react';

// --- Iconos SVG Personalizados ---

// Módulo 1: Urgencias (Cruz médica)
const UrgencyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Módulo 2: Dispensación (Píldora/Medicamento)
const PillIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 20.5L19 12L12 5L3.5 13.5L10.5 20.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 8.5L15.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Módulo 3: Elaboración (Matraz/Química)
const FlaskIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2V8L4.76 17.6C4.33 18.36 4.96 19.31 5.83 19.31H18.17C19.04 19.31 19.67 18.36 19.24 17.6L14 8V2H10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 5H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 14H15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Datos de los Módulos ---
const modules = [
  {
    number: 1,
    title: 'Atención de Urgencias y Administración',
    subtitle: 'de una Oficina Farmacéutica',
    hours: 250,
    icon: UrgencyIcon,
    description: 'Desarrolla capacidades para brindar primeros auxilios, atención inmediata en situaciones de emergencia y gestiona eficientemente los procesos administrativos de un establecimiento farmacéutico.'
  },
  {
    number: 2,
    title: 'Dispensación de Medicamentos',
    subtitle: 'y Atención en Farmacia',
    hours: 280,
    icon: PillIcon,
    description: 'Aprende las técnicas correctas de dispensación, interpretación de recetas médicas, buenas prácticas de almacenamiento y atención al cliente con calidad y calidez.'
  },
  {
    number: 3,
    title: 'Elaboración y Comercialización',
    subtitle: 'de Productos Farmacéuticos y Afines',
    hours: 330,
    icon: FlaskIcon,
    description: 'Domina los procesos de farmacotecnia para la elaboración de preparados magistrales y oficinales, así como estrategias de marketing farmacéutico.'
  }
];

export default function PharmacyModulesSection() {
  const colors = {
    primaryText: '#002A5D',
    accent: '#08D3C4',
    bgSection: '#F0F7FF',
  };

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.bgSection }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Cabecera */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            Módulos Profesionales
          </h2>
          <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Nuestra malla curricular está organizada en módulos que certifican tus competencias progresivamente.
          </p>
        </div>

        {/* Grid de Módulos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((mod) => (
            <div 
              key={mod.number} 
              className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
            >
              {/* Encabezado de la Tarjeta */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center text-[#002A5D] group-hover:bg-[#002A5D] group-hover:text-white transition-colors duration-300">
                  <mod.icon className="w-8 h-8" />
                </div>
                <div className="text-right">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Módulo</span>
                  <span className="text-3xl font-black text-[#08D3C4]">0{mod.number}</span>
                </div>
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-[#002A5D] mb-1 leading-tight">
                {mod.title}
              </h3>
              <p className="text-sm font-semibold text-[#08D3C4] mb-4 uppercase tracking-wide">
                {mod.subtitle}
              </p>

              {/* Descripción */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {mod.description}
              </p>

              {/* Footer de la Tarjeta (Horas) */}
              <div className="pt-6 border-t border-slate-100 mt-auto">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase">Duración</span>
                  <span className="text-lg font-bold text-[#002A5D]">{mod.hours} Horas</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}