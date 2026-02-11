// components/NursingModulesSection.tsx

import React from 'react';

// --- Iconos SVG Personalizados para Enfermería ---

// Módulo 1: Atención Primaria (Manos cuidando/Salud)
const PrimaryCareIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 8h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Módulo 2: Asistencial (Cama de hospital/Atención)
const AssistanceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 19h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 15V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 15v-4a2 2 0 0 0-2-2h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 15h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Módulo 3: Especializada (Maletín Médico/Cruz)
const SpecializedIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 11v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 13h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Datos de los Módulos ---
const modules = [
  {
    number: 1,
    title: 'Atención Primaria en Salud',
    subtitle: 'Promoción y Prevención',
    hours: 265, // Horas referenciales
    icon: PrimaryCareIcon,
    description: 'Desarrolla competencias para realizar actividades de promoción de la salud y prevención de enfermedades, brindando atención básica y primeros auxilios a la persona, familia y comunidad.'
  },
  {
    number: 2,
    title: 'Servicios Técnicos de Enfermería Asistencial',
    subtitle: 'Atención Hospitalaria',
    hours: 290, // Horas referenciales
    icon: AssistanceIcon,
    description: 'Capacita en la asistencia integral del paciente hospitalizado, aplicando procedimientos técnicos de enfermería, higiene, confort y administración de medicamentos bajo supervisión.'
  },
  {
    number: 3,
    title: 'Servicios Técnicos de Enfermería Especializada',
    subtitle: 'Áreas Críticas y Especiales',
    hours: 300, // Horas referenciales
    icon: SpecializedIcon,
    description: 'Prepara para brindar cuidados específicos en servicios especializados como centro quirúrgico, urgencias, pediatría, salud mental y atención al adulto mayor.'
  }
];

export default function NursingModulesSection() {
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
            Formación técnica organizada en módulos progresivos para certificar tus competencias en salud.
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
                  <span className="text-xs font-bold text-slate-400 uppercase">Duración Aprox.</span>
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