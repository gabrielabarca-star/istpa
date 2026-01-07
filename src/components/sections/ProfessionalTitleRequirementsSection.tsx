// components/ProfessionalTitleRequirementsSection.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- Iconos SVG Personalizados ---

// Icono: Foto Pasaporte (Cámara)
const PhotoIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23 19C23 20.1 22.1 21 21 21H3C1.9 21 1 20.1 1 19V8C1 6.9 1.9 6 3 6H7L9 3H15L17 6H21C22.1 6 23 6.9 23 8V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono: Foto Carnet (Usuario pequeño)
const SmallPhotoIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 20V20C10 20 8 19 8 17V17C8 15.3431 9.34315 14 11 14H13C14.6569 14 16 15.3431 16 17V17C16 19 14 20 12 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono: DNI A5 (Documento)
const IdDocumentIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 13H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="15" y="12" width="2" height="2" fill="currentColor"/>
  </svg>
);

// Icono: Certificado (Diploma/Cinta)
const CertificateIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono: Dinero
const MoneyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono: Formulario/Link
const FormLinkIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

export default function ProfessionalTitleRequirementsSection() {
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
            Requisitos para Obtener el Título Profesional
          </h2>
          <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Documentación y pasos necesarios para la titulación de egresados.
          </p>
        </div>

        {/* --- Grid Principal --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 1. COLUMNA IZQUIERDA: Imagen (5 Columnas) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start lg:sticky lg:top-8">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                {/* REEMPLAZAR CON TU IMAGEN REAL */}
                <Image 
                  src="/img/titulo-profesional-requisitos.jpg" // Asegúrate de tener esta imagen o cámbiala
                  alt="Egresado tramitando título profesional"
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
                Documentos Requeridos
              </h3>
              
              <ul className="space-y-6">
                
                {/* Requisito 1: Fotos Pasaporte */}
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D]">
                    <PhotoIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#002A5D]">4 Fotos Tamaño Pasaporte</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      A color, fondo blanco, con saco y corbata (para varones y mujeres).
                    </p>
                  </div>
                </li>

                {/* Requisito 2: Fotos Carnet */}
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D]">
                    <SmallPhotoIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#002A5D]">2 Fotos Tamaño Carnet</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Fotografías actuales tamaño carnet.
                    </p>
                  </div>
                </li>

                {/* Requisito 3: DNI Legalizado */}
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D]">
                    <IdDocumentIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#002A5D]">Copia de DNI Legalizada</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      1 fotocopia legalizada del DNI en tamaño A5.
                    </p>
                  </div>
                </li>

                {/* Requisito 4: Certificados Idiomas/Computación */}
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D]">
                    <CertificateIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#002A5D]">Certificados de Idiomas y Computación</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Certificado básico de idiomas (Inglés, Quechua o Aymara) y computación. Copia legalizada.
                    </p>
                  </div>
                </li>

                {/* Requisito 5: Pago Derecho Titulación */}
                <li className="flex gap-4 items-start bg-[#F0F7FF] p-4 rounded-xl border border-[#002A5D]/10">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#002A5D] flex items-center justify-center text-white">
                    <MoneyIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#002A5D]">Derecho de Titulación</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Pago único de <strong>S/. 2,400.00</strong>.
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

          </div>

        </div>
      </div>
    </section>
  );
}