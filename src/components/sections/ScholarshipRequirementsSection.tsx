// components/ScholarshipRequirementsSection.tsx

import React from 'react';
import Image from 'next/image';

// --- Iconos SVG (Se mantienen igual) ---
const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AlertIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.402C21.1468 21.5902 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.92C16.7428 21.5857 13.787 20.5342 11.19 18.85C8.77382 17.2436 6.72533 15.1951 5.11999 12.78C3.43296 10.1789 2.38151 7.21886 2.05 4.14001C2.02476 3.86305 2.05778 3.58401 2.14692 3.32063C2.23606 3.05724 2.37944 2.81521 2.56798 2.61001C2.75653 2.40481 2.98614 2.24107 3.24207 2.12929C3.49799 2.0175 3.77452 1.96013 4.053 1.96001H7.06C7.53621 1.9551 7.99777 2.12661 8.36079 2.44291C8.72381 2.75922 8.96637 3.20137 9.043 3.67001C9.18674 4.59115 9.41259 5.49543 9.717 6.38001C9.83777 6.73513 9.86366 7.11737 9.79179 7.48421C9.71993 7.85105 9.55313 8.18805 9.31 8.46001L7.55 10.22C9.52272 13.6961 12.3097 16.4762 15.79 18.45L17.55 16.69C17.8215 16.4462 18.1583 16.2788 18.525 16.2066C18.8917 16.1343 19.2738 16.16 19.629 16.2806C20.515 16.5852 21.4207 16.8113 22.343 16.955C22.8135 17.0318 23.2574 17.276 23.5742 17.6407C23.891 18.0053 24.0615 18.4685 24.056 18.946" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DocumentIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const AcademicIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M12 14L21 9L12 4L3 9L12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
     <path d="M3 14V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
     <path d="M12 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MilitaryIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HandHeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 14C12 14 14 16 17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Componente Principal ---
export default function ScholarshipRequirementsSection() {
  const colors = {
    primaryText: '#002A5D',
    accent: '#08D3C4',
    bgAlert: '#FFFBEB',
    borderAlert: '#FCD34D',
  };

  return (
    <section className="w-full bg-white py-12 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* Usamos items-start para que el sticky funcione correctamente dentro del grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* 1. COLUMNA IZQUIERDA: Imagen */}
          {/* CAMBIO: Se añade lg:sticky para que en móvil sea estática y en PC sea fija al bajar */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:sticky lg:top-24 z-10">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
              <Image
                src="/img/beca.png"
                alt="Estudiante solicitando información de becas"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#002A5D]/80 to-transparent"></div>
            </div>
          </div>

          {/* 2. COLUMNA DERECHA: Contenido */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Título y Texto */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
                Programa de Becas
              </h2>
              <div className="w-20 h-1.5 mt-4 mx-auto lg:mx-0" style={{ backgroundColor: colors.accent }}></div>
              <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                En el IES Privado del Altiplano, reconocemos el esfuerzo y brindamos oportunidades. Ofrecemos becas para aquellos estudiantes que destacan académicamente, para quienes sirven a nuestra patria y para quienes requieren apoyo socioeconómico.
              </p>

              {/* BOTÓN DE DESCARGA */}
              <div className="mt-8">
                <a 
                  href="/docs/resolucion becas por rendimiento academico_0001.pdf" 
                  download
                  className="inline-flex items-center gap-4 bg-[#002A5D] text-white px-8 py-4 rounded-xl hover:bg-[#001F45] transition-all hover:shadow-lg group w-full sm:w-auto justify-center sm:justify-start"
                >
                  <DocumentIcon className="w-7 h-7 flex-shrink-0 group-hover:rotate-6 transition-transform" />
                  <span className="text-sm font-bold text-left leading-tight">
                    Descargar Resolución Directoral<br/>N° 090-2025-I.S.T.P DEL ALTIPLANO
                  </span>
                </a>
              </div>
            </div>

            {/* --- SECCIÓN: MODALIDADES --- */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left" style={{ color: colors.primaryText }}>Modalidades Disponibles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col items-center text-center hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 rounded-full bg-blue-100 text-[#002A5D] flex items-center justify-center mb-4">
                      <AcademicIcon className="w-7 h-7"/>
                   </div>
                   <h4 className="font-bold text-base text-[#002A5D]">Rendimiento Académico</h4>
                   <p className="text-xs text-slate-500 mt-2">Primeros puestos del semestre.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col items-center text-center hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 rounded-full bg-blue-100 text-[#002A5D] flex items-center justify-center mb-4">
                      <MilitaryIcon className="w-7 h-7"/>
                   </div>
                   <h4 className="font-bold text-base text-[#002A5D]">Licenciados FF.AA.</h4>
                   <p className="text-xs text-slate-500 mt-2">Beneficio para licenciados del ejército.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col items-center text-center hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 rounded-full bg-blue-100 text-[#002A5D] flex items-center justify-center mb-4">
                      <HandHeartIcon className="w-7 h-7"/>
                   </div>
                   <h4 className="font-bold text-base text-[#002A5D]">Evaluación Social</h4>
                   <p className="text-xs text-slate-500 mt-2">Apoyo por situación socioeconómica.</p>
                </div>
              </div>
            </div>

            {/* Requisitos Generales */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-bold mb-6" style={{ color: colors.primaryText }}>Requisitos Generales</h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <CheckCircleIcon className="w-7 h-7 flex-shrink-0 text-[#08D3C4]" />
                  <p className="text-slate-700 text-base leading-relaxed">
                    Haber cursado al menos un semestre como alumnos regulares; es decir, podrán postular <strong className="text-[#002A5D]">a partir del segundo semestre</strong>.
                  </p>
                </li>
                
                <li className="flex gap-4 items-start">
                  <CheckCircleIcon className="w-7 h-7 flex-shrink-0 text-[#08D3C4]" />
                  <p className="text-slate-700 text-base leading-relaxed">
                    Estar matriculados con un <strong className="text-[#002A5D]">mínimo de 12 créditos curriculares</strong>. No aplica para cursos por jurado.
                  </p>
                </li>

                <li className="flex gap-4 items-start">
                  <CheckCircleIcon className="w-7 h-7 flex-shrink-0 text-[#08D3C4]" />
                  <p className="text-slate-700 text-base leading-relaxed">
                    Para rendimiento: Haber obtenido el <strong className="text-[#002A5D]">1er, 2do o 3er lugar</strong> en el semestre anterior.
                  </p>
                </li>
              </ul>
            </div>

            {/* Caja de Alerta */}
            <div className="bg-sky-50 border-l-4 border-[#002A5D] rounded-r-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0 text-[#002A5D] bg-white p-2 rounded-lg shadow-sm">
                <AlertIcon className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-[#002A5D] mb-2">¿Necesitas más información?</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Para iniciar tu trámite o resolver dudas, acércate a la <strong>Unidad de Bienestar y Empleabilidad</strong>.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 sm:items-center pt-6 border-t border-sky-200">
                  <a href="mailto:unid.bienestar.empleabilidad@iest.edu.pe" className="flex items-center gap-3 text-sm font-bold text-[#002A5D] hover:text-[#08D3C4] transition-colors">
                    <MailIcon className="w-5 h-5" />
                    unid.bienestar.empleabilidad@iest.edu.pe
                  </a>
                  <a href="tel:987845442" className="flex items-center gap-3 text-sm font-bold text-[#002A5D] hover:text-[#08D3C4] transition-colors">
                    <PhoneIcon className="w-5 h-5" />
                    987 845 442
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}