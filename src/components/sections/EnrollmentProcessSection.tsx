// components/EnrollmentProcessSection.tsx

import React from 'react';

// --- Iconos SVG Personalizados ---
const BankIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 21V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 21V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 7H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2L5 7H19L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 12H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ReceiptIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HealthIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PeopleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AcademicIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10V16C22 17.1046 21.1046 18 20 18H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 10L12 5L2 10L12 15L22 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 12V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function EnrollmentProcessSection() {
  const colors = {
    primaryText: '#002A5D',
    accent: '#08D3C4',
    bgSection: '#FFFFFF',
  };

  const steps = [
    {
      title: 'Pago de Derecho de Matrícula',
      desc: 'Realiza tu pago en el banco BBVA.',
      detail: 'Cuenta: 0011-0229-0100095691-20',
      icon: BankIcon,
    },
    {
      title: 'Validación en Caja',
      desc: 'Acércate a caja de la institución y valida tu voucher de pago para continuar.',
      icon: ReceiptIcon,
    },
    {
      title: 'Atención en Tópico',
      desc: 'Dirígete al área de Tópico y completa tu Ficha de Atención Básica de Salud.',
      icon: HealthIcon,
    },
    {
      title: 'Unidad de Bienestar y Empleabilidad',
      desc: 'Visita la oficina de Bienestar Social para llenar tu Ficha Socioeconómica.',
      icon: PeopleIcon,
    },
    {
      title: 'Secretaría Académica',
      desc: 'Elige tu horario disponible y finaliza tu proceso de matrícula oficial.',
      icon: AcademicIcon,
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.bgSection }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        
        {/* --- Cabecera Centrada --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            Proceso de Matrícula
          </h2>
          <div className="w-24 h-1.5 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto">
            Sigue estos 5 pasos sencillos para completar tu matrícula satisfactoriamente.
          </p>
        </div>

        {/* --- Contenido de Pasos Centrado --- */}
        <div className="relative">
          {/* Línea vertical conectora centrada en móviles, ajustada en desktop */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-4 bottom-4 w-0.5 bg-slate-200"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center gap-8 group">
                  
                  {/* Círculo del Número/Icono */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-[#08D3C4] text-[#002A5D] flex items-center justify-center shadow-md group-hover:bg-[#002A5D] group-hover:text-white group-hover:border-[#002A5D] transition-all duration-300 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Tarjeta de Contenido - Alternada o Centrada */}
                  <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'} pl-16 md:pl-0`}>
                    <div className="bg-[#F0F7FF] rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                      <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-2`}>
                        <span className="text-4xl font-black text-[#08D3C4]/20 select-none leading-none mb-1">{index + 1}</span>
                        <h3 className="text-xl font-bold text-[#002A5D]">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                      {step.detail && (
                        <div className="mt-4 bg-white px-4 py-2 rounded-lg border border-slate-200 inline-block">
                          <p className="text-xs font-mono font-bold text-[#08D3C4]">{step.detail}</p>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}