// components/TransfersSection.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- Iconos SVG Personalizados ---

const FormIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CertificateIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MoneyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckListIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LinkArrowIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function TransfersSection() {
  const colors = {
    primaryText: '#002A5D', // Azul Institucional
    accent: '#08D3C4',     // Turquesa Institucional
    bgSection: '#F0F7FF', // Celeste muy suave de fondo
  };

  // Datos de los pasos del procedimiento para mapearlos limpiamente
  const steps = [
    { title: "Inicio del Trámite", desc: "Llenar el formulario o FUT virtual y pagar el derecho de traslado. Entregar requisitos a Secretaría Académica." },
    { title: "Verificación", desc: "Secretaría Académica verifica conformidad de requisitos y deriva al Jefe de Unidad Académica." },
    { title: "Evaluación", desc: "El Jefe de Unidad Académica evalúa la factibilidad académica del traslado." },
    { title: "Informe", desc: "El Jefe de Unidad Académica elabora informe y lo dirige al Director General." },
    { title: "Resolución", desc: "El Director General emite la Resolución Directoral de aceptación." },
    { title: "Comunicación", desc: "Secretaría Académica informa al postulante sobre el resultado del traslado." },
  ];

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.bgSection }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* --- Cabecera --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            Traslados
          </h2>
          <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Procedimiento para estudiantes internos o externos que deseen continuar su formación profesional en nuestra institución.
          </p>
        </div>

        {/* --- Grid Principal --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 1. COLUMNA IZQUIERDA: Contenido (7 Columnas) */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            
            {/* --- BLOQUE 1: Requisitos --- */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: colors.primaryText }}>
                <span className="w-2 h-8 rounded-full" style={{ backgroundColor: colors.accent }}></span>
                Requisitos
              </h3>
              
              <ul className="space-y-6">
                {/* Requisito 1 */}
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D]">
                    <FormIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-base text-[#002A5D]">Solicitud FUT Virtual</h4>
                    <p className="text-slate-600 text-sm mt-0.5 mb-1">
                      Presentación de la solicitud mediante el formulario único de trámite.
                    </p>
                    <Link 
                      href="https://forms.gle/JEvVt4DXUa7s4wkz6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#08D3C4] hover:text-[#06b0a3] text-sm font-bold inline-flex items-center gap-1 hover:underline"
                    >
                      Ir al formulario FUT <LinkArrowIcon className="w-3 h-3" />
                    </Link>
                  </div>
                </li>

                {/* Requisito 2 */}
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D]">
                    <CertificateIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#002A5D]">Certificado de Estudios</h4>
                    <p className="text-slate-600 text-sm mt-0.5">
                      De la institución de procedencia (para traslado externo).
                    </p>
                  </div>
                </li>

                {/* Requisito 3 */}
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D]">
                    <MoneyIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#002A5D]">Derecho de Trámite</h4>
                    <p className="text-slate-600 text-sm mt-0.5">
                      Pago de los derechos correspondientes según tarifario vigente.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* --- BLOQUE 2: Procedimiento --- */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: colors.primaryText }}>
                <span className="w-2 h-8 rounded-full" style={{ backgroundColor: colors.accent }}></span>
                Procedimiento
              </h3>

              <div className="relative border-l-2 border-slate-200 ml-3 space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="ml-6 relative">
                    <span className="absolute -left-[31px] top-0 flex items-center justify-center w-6 h-6 bg-white rounded-full border-2 border-[#08D3C4]">
                      <div className="w-2 h-2 bg-[#08D3C4] rounded-full"></div>
                    </span>
                    <h4 className="font-bold text-[#002A5D]">{step.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* --- BLOQUE 3: Costos --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Costo Interno */}
              <div className="bg-[#002A5D] rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                <span className="text-[#08D3C4] text-sm font-bold uppercase tracking-wider mb-2">Traslado Interno</span>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-lg">S/.</span>
                  <span className="text-4xl font-extrabold">350.00</span>
                </div>
              </div>
              
              {/* Costo Externo */}
              <div className="bg-white border-2 border-[#002A5D] rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                <span className="text-[#002A5D] text-sm font-bold uppercase tracking-wider mb-2">Traslado Externo</span>
                <div className="flex items-baseline gap-1 text-[#002A5D]">
                  <span className="text-lg">S/.</span>
                  <span className="text-4xl font-extrabold">350.00</span>
                </div>
              </div>
            </div>

          </div>

          {/* 2. COLUMNA DERECHA: Imagen (5 Columnas) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:sticky lg:top-8 order-1 lg:order-2">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                {/*  - Usamos placeholder si no tienes la imagen exacta */}
                <Image 
                  src="/img/traslados-imagen.jpg" // RECUERDA PONER TU IMAGEN AQUÍ
                  alt="Estudiante realizando trámite de traslado"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay decorativo */}
                <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#002A5D]/70 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}