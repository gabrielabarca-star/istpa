// components/ProfessionalTitleRequirementsSection2013.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- Iconos SVG Personalizados ---

// Icono: Fotos (Cámara o Fotos apiladas)
const PhotoIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8H20C21.1 8 22 8.9 22 10V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V10C2 8.9 2.9 8 4 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="15" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 5H15L17 8H7L9 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono: DNI (Tarjeta)
const IdCardIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 15H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 9H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 13H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono: Idiomas (Globo terráqueo o Chat)
const LanguageIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono: Notas (Documento lista)
const TranscriptIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 13H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono: Pago/Dinero
const MoneyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono: Check
const CheckCircleIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
// Icono: Formulario/Link
const FormLinkIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
export default function ProfessionalTitleRequirementsSection2013() {
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
            Requisitos para Título Profesional
          </h2>
          <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto font-semibold">
            (Para egresados del 2013 hacia atrás)
          </p>
          <p className="mt-2 text-slate-600 max-w-3xl mx-auto">
            Si culminaste tus estudios hasta el año 2013, estos son los pasos para obtener tu título profesional.
          </p>
        </div>

        {/* --- Grid Principal --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 1. COLUMNA IZQUIERDA: Imagen (5 Columnas) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start lg:sticky lg:top-8">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                {/* REEMPLAZAR CON TU IMAGEN REAL */}
                <Image 
                  src="/img/rumbo_2.png" // Asegúrate de tener una imagen adecuada
                  alt="Egresado tramitando título"
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
            
            {/* --- BLOQUE DE REQUISITOS --- */}
            <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: colors.primaryText }}>
                <span className="w-2 h-8 rounded-full" style={{ backgroundColor: colors.accent }}></span>
                Requisitos y Documentación
              </h3>
              
              <ul className="space-y-6">
                
                {/* Requisito 1: Fotos Pasaporte */}
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D]">
                    <PhotoIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#002A5D]">Fotos Tamaño Pasaporte</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      4 fotos a color con saco y corbata (varones y mujeres), fondo blanco.
                    </p>
                  </div>
                </li>

                {/* Requisito 2: Fotos Carnet */}
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D]">
                    <PhotoIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#002A5D]">Fotos Tamaño Carnet</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      2 fotos tamaño carnet.
                    </p>
                  </div>
                </li>

                {/* Requisito 3: DNI */}
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D]">
                    <IdCardIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#002A5D]">Copia de DNI</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      1 fotocopia legalizada de DNI tamaño A5.
                    </p>
                  </div>
                </li>

                {/* Requisito 4: Idiomas */}
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D]">
                    <LanguageIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#002A5D]">Certificación de Idioma</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Constancia o certificado básico de idiomas: Inglés, Quechua o Aymara (Legalizado).
                    </p>
                  </div>
                </li>

                 {/* Requisito 5: Notas */}
                 <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D]">
                    <TranscriptIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#002A5D]">Fichas de Notas</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Copia simple de fichas de notas del primer al sexto semestre.
                    </p>
                  </div>
                </li>

                {/* Requisito 6: Pago */}
                <li className="flex gap-4 items-start bg-[#F0F7FF] p-4 rounded-xl border border-[#002A5D]/10">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#002A5D] flex items-center justify-center text-white">
                    <MoneyIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#002A5D]">Derecho de Titulación</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Recibo de pago por <strong>S/. 2,400.00</strong>.
                    </p>
                    <div className="mt-2 text-xs bg-white p-2 rounded border border-slate-200 text-slate-500 font-mono">
                      <p>BBVA: 0011-0229-0100095691-20</p>
                    </div>
                  </div>
                </li>
                {/* Requisito 6: Link Solicitud */}
                                <li className="flex gap-4 items-start">
                                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D]">
                                    <FormLinkIcon className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-lg text-[#002A5D]">Solicitud Virtual</h4>
                                    <p className="text-slate-600 text-sm mt-1 mb-2">
                                      Registra tu solicitud a través del formulario oficial.
                                    </p>
                                    <Link 
                                      href="https://forms.gle/GBX93q8E1WYfK8sD7" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 text-white bg-[#08D3C4] hover:bg-[#06b0a3] px-4 py-2 rounded-full text-sm font-bold transition-colors"
                                    >
                                      Ir al Formulario
                                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </Link>
                                  </div>
                                </li>
              </ul>
              
            </div>
            
            
             {/* --- Nota Informativa --- */}
             <div className="bg-sky-50 border-l-4 border-[#002A5D] rounded-r-xl p-6">
              <p className="text-slate-700 text-sm">
                <strong>Importante:</strong> Para iniciar el trámite, acércate a Secretaría Académica con tu carpeta completa. 
              </p>
            </div>
                
          </div>

        </div>
      </div>
    </section>
  );
}