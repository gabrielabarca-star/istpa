// components/TitulacionModalitiesSection.tsx

import React from 'react';

// --- Iconos SVG Personalizados ---

const ExamIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 15L11 17L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GroupIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const DocumentTextIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function TitulacionModalitiesSection() {
  const colors = {
    primaryText: '#002A5D',
    accent: '#08D3C4',
    bgSection: '#F0F7FF',
    cardBg: '#FFFFFF',
    textSecondary: '#4B5563', // Slate-600
  };

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.bgSection }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Cabecera */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            Modalidades de Titulación
          </h2>
          <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Elige la modalidad que mejor se adapte a tu perfil y culmina tu carrera profesional.
          </p>
        </div>

        {/* Grid de Cartas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* --- CARTA 1: EXAMEN DE SUFICIENCIA --- */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300">
            {/* Header de la carta */}
            <div className="bg-[#002A5D] p-6 text-white text-center relative">
                <div className="absolute top-4 right-4 text-[#08D3C4]">
                    <ExamIcon className="w-8 h-8 opacity-50" />
                </div>
                <h3 className="text-2xl font-bold">Examen de Suficiencia</h3>
                <p className="text-[#08D3C4] font-medium text-sm mt-1">Modalidad Individual</p>
            </div>
            
            <div className="p-8 flex-grow space-y-6">
                
                {/* Descripción */}
                <div>
                    <h4 className="font-bold text-[#002A5D] mb-2 flex items-center gap-2">
                        <DocumentTextIcon className="w-5 h-5 text-[#08D3C4]" /> DESCRIPCIÓN
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed text-justify">
                        Modalidad individual donde el egresado demuestra sus conocimientos teórico-prácticos y prácticos mediante: 
                        <strong> Evaluación escrita (30%)</strong> y <strong>Evaluación práctica demostrativa (70%)</strong>.
                    </p>
                </div>

                {/* Características */}
                <div>
                    <h4 className="font-bold text-[#002A5D] mb-2 flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-[#08D3C4]" /> CARACTERÍSTICAS
                    </h4>
                    <ul className="list-disc list-outside ml-5 text-sm text-slate-600 space-y-1">
                        <li>Evaluación a cargo de un jurado de 2 a 4 miembros.</li>
                        <li>Máximo tres oportunidades para aprobar; de no lograrlo, deberá optar por TAP.</li>
                        <li>Registro en Acta de Titulación conforme a normas del ISTP DEL ALTIPLANO.</li>
                    </ul>
                </div>

                 {/* Requisitos */}
                 <div>
                    <h4 className="font-bold text-[#002A5D] mb-2 flex items-center gap-2">
                         <CheckCircleIcon className="w-5 h-5 text-[#08D3C4]" /> REQUISITOS
                    </h4>
                    <ul className="list-disc list-outside ml-5 text-sm text-slate-600 space-y-1">
                        <li>Haber culminado todo el programa, incluidas las prácticas pre-profesionales y la presentación de toda la documentación requerida.</li>
                        <li>No tener deudas con el instituto.</li>
                        <li>Contar con certificados de Computación e Inglés.</li>
                    </ul>
                </div>

                {/* Procedimiento */}
                <div>
                    <h4 className="font-bold text-[#002A5D] mb-2 flex items-center gap-2">
                        <ClockIcon className="w-5 h-5 text-[#08D3C4]" /> PROCEDIMIENTO
                    </h4>
                     <ul className="list-decimal list-outside ml-5 text-sm text-slate-600 space-y-1">
                        <li>Solicitud en Secretaría Académica.</li>
                        <li>Confirmación de aptitud en un plazo máximo de 5 días útiles.</li>
                        <li>Programación de examen en máximo 10 días útiles.</li>
                        <li>Evaluación escrita y práctica.</li>
                        <li>Jurado registra nota y entrega Acta; resultados comunicados en máximo 3 días.</li>
                        <li>Emisión del título.</li>
                    </ul>
                </div>

                {/* Costo */}
                <div className="mt-auto pt-6 border-t border-slate-100">
                     <p className="text-center font-bold text-lg text-[#002A5D]">
                        Costo: <span className="text-[#08D3C4] text-2xl">S/ 2,800.00</span>
                    </p>
                    <p className="text-center text-xs text-slate-500">(Modalidad individual)</p>
                </div>
            </div>
          </div>

          {/* --- CARTA 2: TRABAJO DE APLICACIÓN PROFESIONAL --- */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300">
             {/* Header de la carta */}
             <div className="bg-[#002A5D] p-6 text-white text-center relative">
                <div className="absolute top-4 right-4 text-[#08D3C4]">
                    <GroupIcon className="w-8 h-8 opacity-50" />
                </div>
                <h3 className="text-2xl font-bold">Trabajo de Aplicación Profesional</h3>
                <p className="text-[#08D3C4] font-medium text-sm mt-1">Modalidad Grupal</p>
            </div>

            <div className="p-8 flex-grow space-y-6">
                
                 {/* Descripción */}
                 <div>
                    <h4 className="font-bold text-[#002A5D] mb-2 flex items-center gap-2">
                        <DocumentTextIcon className="w-5 h-5 text-[#08D3C4]" /> DESCRIPCIÓN
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed text-justify">
                        Modalidad grupal orientada a resolver una problemática del quehacer profesional, aplicando los conocimientos adquiridos y proponiendo mejoras justificadas.
                    </p>
                </div>

                {/* Características */}
                <div>
                    <h4 className="font-bold text-[#002A5D] mb-2 flex items-center gap-2">
                         <CheckCircleIcon className="w-5 h-5 text-[#08D3C4]" /> CARACTERÍSTICAS
                    </h4>
                    <ul className="list-disc list-outside ml-5 text-sm text-slate-600 space-y-1">
                        <li>Se desarrolla en los últimos periodos académicos.</li>
                        <li>Participación mínima de 2 estudiantes y máxima de 4.</li>
                        <li>Evaluación por un jurado de 2 a 3 miembros.</li>
                        <li>Registro en Acta de Titulación conforme a normas del ISTP DEL ALTIPLANO.</li>
                    </ul>
                </div>

                {/* Requisitos */}
                 <div>
                    <h4 className="font-bold text-[#002A5D] mb-2 flex items-center gap-2">
                         <CheckCircleIcon className="w-5 h-5 text-[#08D3C4]" /> REQUISITOS
                    </h4>
                    <ul className="list-disc list-outside ml-5 text-sm text-slate-600 space-y-1">
                        <li>Culminar el programa de estudios y prácticas pre-profesionales.</li>
                        <li>Presentar la documentación requerida.</li>
                        <li>No tener deudas.</li>
                        <li>Certificados de Computación e Inglés.</li>
                    </ul>
                </div>

                {/* Procedimiento */}
                <div>
                    <h4 className="font-bold text-[#002A5D] mb-2 flex items-center gap-2">
                        <ClockIcon className="w-5 h-5 text-[#08D3C4]" /> PROCEDIMIENTO
                    </h4>
                     <ul className="list-decimal list-outside ml-5 text-sm text-slate-600 space-y-1">
                        <li>Solicitud en Secretaría Académica.</li>
                        <li>Verificación de requisitos y designación de asesores.</li>
                        <li>Elaboración y sustentación del trabajo.</li>
                        <li>Jurado registra nota en Acta de Sustentación y se entrega a Secretaría Académica.</li>
                        <li>Comunicación de resultados y emisión del título.</li>
                    </ul>
                </div>

                {/* Costo */}
                <div className="mt-auto pt-6 border-t border-slate-100">
                     <p className="text-center font-bold text-lg text-[#002A5D]">
                        Costo: <span className="text-[#08D3C4] text-2xl">S/ 2,400.00</span>
                    </p>
                    <p className="text-center text-xs text-slate-500 mb-2">(Monto Individual)</p>
                     <p className="text-center text-xs font-semibold text-[#002A5D] bg-sky-50 py-1 rounded">
                        PARTICIPACIÓN GRUPAL: mínimo 2, máximo 4 estudiantes.
                    </p>
                </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}