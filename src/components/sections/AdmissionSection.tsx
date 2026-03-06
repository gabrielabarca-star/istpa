// components/AdmissionSection.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // [!code ++]

// --- Iconos SVG Personalizados ---

// Icono: Registro/Datos (Usuario con lápiz)
const RegistrationIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4H4C2.9 4 2 4.9 2 6V20C2 21.1 2.9 22 4 22H18C19.1 22 20 21.1 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono: Pago/Voucher (Billete)
const PaymentIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 10H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono: Certificado (Diploma)
const CertificateIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono: DNI (Tarjeta de identificación)
const IdCardIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="10" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 16H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono: Brochure (Folleto abierto)
const BrochureIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icono: Flecha externa
const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function AdmissionSection() {
  const colors = {
    primaryText: '#002A5D', // Azul Institucional
    accent: '#08D3C4',     // Turquesa Institucional
    bgSection: '#F0F7FF', // Celeste muy suave de fondo
  };

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.bgSection }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl"> {/* Aumenté el max-w para que quepa la imagen */}
        
        {/* Cabecera */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            Admisión
          </h2>
          <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Conoce los requisitos necesarios para formar parte de nuestra comunidad educativa y descarga nuestro brochure informativo.
          </p>
        </div>

        {/* --- Grid Principal (12 Columnas) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 1. COLUMNA IZQUIERDA: Imagen Circular (3 Columnas) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            {/* Contenedor de la imagen con forma circular y borde */}
            <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-xl border-4 border-white">
                {/* 

[Image of student smiling or university campus]
 */}
                <Image 
                  src="/img/admision-requisitos.png" // RECUERDA PONER TU IMAGEN AQUÍ
                  alt="Estudiante de admisión"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-500"
                />
            </div>
          </div>

          {/* 2. COLUMNA CENTRAL: Requisitos (5 Columnas) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 shadow-md border border-slate-100 h-full">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: colors.primaryText }}>
              <span className="w-2 h-8 rounded-full" style={{ backgroundColor: colors.accent }}></span>
              Requisitos
            </h3>
            
            <ul className="space-y-6">
              {/* Requisito 1 */}
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D]">
                  <RegistrationIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#002A5D]">Registro de Datos</h4>
                  <p className="text-slate-600 text-sm mt-0.5">
                    Registro presencial en oficinas.
                  </p>
                </div>
              </li>

              {/* Requisito 2 */}
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D]">
                  <PaymentIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#002A5D]">Pago por Admisión</h4>
                  <p className="text-slate-600 text-sm mt-0.5">
                    Voucher de <strong>S/. 100.00</strong>.
                  </p>
                  <p className="text-slate-500 text-[10px] sm:text-xs mt-1 font-mono bg-slate-50 inline-block px-2 py-1 rounded border border-slate-200">
                    BBVA: 0011-0229-0100095691-20
                  </p>
                </div>
              </li>

              {/* Requisito 3 */}
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D]">
                  <CertificateIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#002A5D]">Certificado de Estudios</h4>
                  <p className="text-slate-600 text-sm mt-0.5">
                    Original visado (1°-5°) o constancia MINEDU.
                  </p>
                  <Link 
                    href="https://constancia.minedu.gob.pe/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#08D3C4] hover:text-[#06b0a3] text-xs font-bold inline-flex items-center gap-1 mt-1 hover:underline"
                  >
                    Ver en MINEDU <ExternalLinkIcon className="w-3 h-3" />
                  </Link>
                </div>
              </li>

              {/* Requisito 4 */}
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D]">
                  <IdCardIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#002A5D]">DNI Vigente</h4>
                  <p className="text-slate-600 text-sm mt-0.5">
                    Físico para escaneo.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* 3. COLUMNA DERECHA: Brochure (4 Columnas) */}
          <div className="lg:col-span-4 h-full">
            <Link 
              href="https://drive.google.com/drive/folders/10hsNHsY7gZnsaS7SDjim-MctDaN6XSxX?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-full"
            >
              <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 flex flex-col items-center text-center justify-center min-h-[300px]">
                
                {/* Icono Grande */}
                <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 bg-sky-50 group-hover:bg-[#002A5D]">
                  <BrochureIcon className="w-12 h-12 text-[#002A5D] transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold mb-3" style={{ color: colors.primaryText }}>
                  Brochure Informativo
                </h3>

                {/* Descripción */}
                <p className="text-slate-600 text-sm mb-8">
                  Descarga nuestro brochure digital para conocer más sobre nuestras carreras, beneficios y propuesta educativa.
                </p>

                {/* Botón */}
                <div className="inline-flex items-center justify-center gap-2 bg-[#08D3C4] text-white px-6 py-3 rounded-full font-bold transition-transform duration-300 group-hover:scale-105 shadow-sm">
                  Ver Brochure
                  <ExternalLinkIcon className="w-5 h-5" />
                </div>

              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}