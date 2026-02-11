// components/AccountingModulesSection.tsx

import React from 'react';

// --- Iconos SVG Personalizados para Contabilidad ---

// Módulo 1: Procesos Contables (Calculadora/Documento)
const AccountingProcessIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2H8C4.5 2 2 4.5 2 8V20C2 21.1 2.9 22 4 22H16C19.5 22 22 19.5 22 16V8C22 4.5 19.5 2 16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 14V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 16H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Módulo 2: Pública y Privada (Edificio/Institución)
const PublicPrivateIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 22H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2L2 7V22H22V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 22V10H14V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 14H6.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 14H18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Módulo 3: Análisis Financiero (Gráfico de barras/Tendencia)
const FinancialAnalysisIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 17V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 17V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 7L12 3L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Datos de los Módulos ---
const modules = [
  {
    number: 1,
    title: 'Procesos Contables',
    subtitle: 'Gestión y Registro',
    hours: 265,
    icon: AccountingProcessIcon,
    description: 'Desarrolla habilidades para organizar, registrar y controlar las operaciones contables básicas de una empresa, aplicando normas vigentes y utilizando herramientas informáticas para el procesamiento de la información.'
  },
  {
    number: 2,
    title: 'Contabilidad Pública y Privada',
    subtitle: 'Normativa y Aplicación',
    hours: 290,
    icon: PublicPrivateIcon,
    description: 'Capacita en la gestión contable específica para entidades del sector público y privado, abarcando tributación, planillas, y el manejo de sistemas gubernamentales y empresariales.'
  },
  {
    number: 3,
    title: 'Análisis Financiero',
    subtitle: 'Toma de Decisiones',
    hours: 300,
    icon: FinancialAnalysisIcon,
    description: 'Prepara para interpretar estados financieros, evaluar la situación económica de la organización, realizar auditorías y proponer estrategias financieras para la optimización de recursos.'
  }
];

export default function AccountingModulesSection() {
  const colors = {
    primaryText: '#002A5D', // Azul Institucional
    accent: '#08D3C4',     // Turquesa Institucional
    bgSection: '#F0F7FF', // Celeste muy suave de fondo
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
            Formación técnica organizada en módulos progresivos para certificar tus competencias en contabilidad y finanzas.
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
