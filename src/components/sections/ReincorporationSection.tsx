// components/ReincorporationSection.tsx

import React from 'react';
import Image from 'next/image';

// --- Iconos SVG Personalizados ---

// Icono: Reloj/Tiempo (Plazos)
const TimeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono: Documento/FUT
const FormIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono: Usuario/Jefe (Evaluación)
const UserCheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 11L19 14L17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono: Costo (Billete tachado o Gratis)
const FreeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Linea tachada opcional para énfasis, pero el círculo + cruz suele ser positivo o negativo dependiendo el color. Usaremos estrella para "Gratis" mejor */}
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" fillOpacity="0.2" stroke="none"/>
  </svg>
);

// Icono: Alerta/Importante
const AlertIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.29 3.86L1.82 18C1.64538 18.3024 1.55296 18.6453 1.55199 18.9945C1.55102 19.3437 1.64154 19.6871 1.81442 19.9905C1.98729 20.2939 2.23659 20.5467 2.53772 20.7239C2.83884 20.9011 3.18126 20.9967 3.53 21H20.47C20.8187 20.9967 21.1612 20.9011 21.4623 20.7239C21.7634 20.5467 22.0127 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.86C13.5317 3.56613 13.2807 3.32314 12.9812 3.15449C12.6817 2.98585 12.3438 2.89728 12 2.89728C11.6562 2.89728 11.3183 2.98585 11.0188 3.15449C10.7193 3.32314 10.4683 3.56613 10.29 3.86Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function ReincorporationSection() {
  const colors = {
    primaryText: '#002A5D', // Azul Institucional
    accent: '#08D3C4',     // Turquesa Institucional
    bgSection: '#F0F7FF', // Celeste muy suave de fondo
  };

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.bgSection }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* --- Cabecera --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            Reincorporación
          </h2>
          <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Información y procedimiento para estudiantes que deseen retomar sus estudios profesionales en nuestra institución.
          </p>
        </div>

        {/* --- Grid Principal --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 1. COLUMNA IZQUIERDA: Imagen (5 Columnas) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start lg:sticky lg:top-8">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                {/*  */}
                <Image 
                  src="/img/reincorporacion-imagen.jpg" // RECUERDA PONER TU IMAGEN AQUÍ
                  alt="Estudiante realizando trámite de reincorporación"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay decorativo */}
                <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#002A5D]/70 to-transparent"></div>
            </div>
          </div>

          {/* 2. COLUMNA DERECHA: Contenido (7 Columnas) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* --- BLOQUE 1: Consideraciones y Requisitos --- */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: colors.primaryText }}>
                <span className="w-2 h-8 rounded-full" style={{ backgroundColor: colors.accent }}></span>
                Requisitos y Consideraciones
              </h3>
              
              <ul className="space-y-5 text-sm text-slate-600">
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1 text-[#08D3C4]"><TimeIcon className="w-5 h-5" /></div>
                  <p>
                    La solicitud debe realizarse <strong>antes del término</strong> de la reserva o licencia, y <strong>antes de iniciado el plazo</strong> para el proceso de matrícula vigente.
                  </p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1 text-[#08D3C4]"><AlertIcon className="w-5 h-5" /></div>
                  <p>
                    La reincorporación está sujeta a la <strong>existencia del programa de estudio</strong> y a la <strong>existencia de vacante</strong>.
                  </p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1 text-[#08D3C4]"><FormIcon className="w-5 h-5" /></div>
                  <p>
                    De existir variación en los planes de estudio, se aplicarán los <strong>procesos de convalidación</strong> correspondientes según reglamento.
                  </p>
                </li>
                <li className="flex gap-4 items-start bg-red-50 p-4 rounded-xl border-l-4 border-red-400">
                  <div className="flex-shrink-0 mt-1 text-red-500"><AlertIcon className="w-5 h-5" /></div>
                  <p className="text-slate-700">
                    <strong>Importante:</strong> Si el periodo de reserva vence sin reincorporación, el estudiante deberá volver a postular por admisión (si era ingresante) o pasar por convalidación (si era de otros semestres).
                  </p>
                </li>
              </ul>
            </div>

            {/* --- BLOQUE 2: Procedimiento --- */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: colors.primaryText }}>
                <span className="w-2 h-8 rounded-full" style={{ backgroundColor: colors.accent }}></span>
                Procedimiento
              </h3>

              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                
                {/* Paso 1 */}
                <div className="relative flex items-start group">
                  <div className="absolute left-0 ml-6 -translate-x-1/2 mt-1 md:ml-0 md:relative md:translate-x-0 bg-white p-1">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-sky-50 text-[#002A5D] border border-slate-100 shadow-sm">
                        <span className="font-bold">1</span>
                    </div>
                  </div>
                  <div className="ml-12 md:ml-6">
                    <h4 className="font-bold text-[#002A5D]">Solicitud Virtual</h4>
                    <p className="text-sm text-slate-600 mt-1">El estudiante realiza el llenado del <strong>FUT virtual</strong> solicitando la reincorporación.</p>
                  </div>
                </div>

                {/* Paso 2 */}
                <div className="relative flex items-start group">
                  <div className="absolute left-0 ml-6 -translate-x-1/2 mt-1 md:ml-0 md:relative md:translate-x-0 bg-white p-1">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-sky-50 text-[#002A5D] border border-slate-100 shadow-sm">
                        <span className="font-bold">2</span>
                    </div>
                  </div>
                  <div className="ml-12 md:ml-6">
                    <h4 className="font-bold text-[#002A5D]">Revisión Secretaría</h4>
                    <p className="text-sm text-slate-600 mt-1">La secretaría académica recepciona, evalúa requisitos y deriva al Jefe de Unidad Académica.</p>
                  </div>
                </div>

                {/* Paso 3 */}
                <div className="relative flex items-start group">
                  <div className="absolute left-0 ml-6 -translate-x-1/2 mt-1 md:ml-0 md:relative md:translate-x-0 bg-white p-1">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-sky-50 text-[#002A5D] border border-slate-100 shadow-sm">
                        <span className="font-bold">3</span>
                    </div>
                  </div>
                  <div className="ml-12 md:ml-6">
                    <h4 className="font-bold text-[#002A5D]">Aprobación Académica</h4>
                    <p className="text-sm text-slate-600 mt-1">El Jefe de Unidad Académica evalúa y emite opinión favorable para la matrícula (y convalidación si aplica).</p>
                  </div>
                </div>

              </div>
            </div>

            {/* --- BLOQUE 3: Costo --- */}
            <div className="bg-[#002A5D] rounded-2xl p-6 shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#08D3C4]">
                  <FreeIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Costo del Trámite</h4>
                  <p className="text-white/70 text-sm">Derecho de reincorporación</p>
                </div>
              </div>
              <div className="bg-[#08D3C4] text-[#002A5D] px-6 py-2 rounded-full font-extrabold text-lg shadow-sm">
                GRATUITO
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}