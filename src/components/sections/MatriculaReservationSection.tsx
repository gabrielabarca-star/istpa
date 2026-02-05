// components/MatriculaReservationSection.tsx

import React from 'react';
import Link from 'next/link';

// --- Iconos SVG Personalizados ---

const UserVoiceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 21V19C22 17.9 21.6 16.9 20.8 16.1C20 15.3 19 15 17.9 15H16.5C16.5 15 16.5 15 16.5 15C16.5 15 14.5 16 12 16C9.5 16 7.5 15 7.5 15C7.5 15 7.5 15 7.5 15H6.1C5 15 4 15.3 3.2 16.1C2.4 16.9 2 17.9 2 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 8C19.5 8 21 6.5 21 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CreditCardIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FormSelectIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 11H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function MatriculaReservationSection() {
  const colors = {
    primaryText: '#002A5D', // Azul Institucional
    accent: '#08D3C4',     // Turquesa Institucional
    bgSection: '#F0F7FF', // Celeste muy suave de fondo
  };

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.bgSection }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* --- Cabecera --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            Reserva de Matrícula
          </h2>
          <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Sigue estos pasos para asegurar tu vacante para el próximo periodo académico.
          </p>
        </div>

        {/* --- Pasos (Grid) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* PASO 1: Bienestar */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 flex flex-col items-center text-center relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute top-4 right-4 text-6xl font-black text-slate-100 select-none group-hover:text-slate-200 transition-colors">1</div>
            <div className="w-20 h-20 rounded-full bg-sky-50 flex items-center justify-center mb-6 text-[#002A5D]">
              <UserVoiceIcon className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: colors.primaryText }}>Evaluación de Caso</h3>
            <p className="text-slate-600 text-sm">
              Acércate presencialmente al área de <strong>Bienestar y Empleabilidad</strong> para revisar tu situación académica y recibir la autorización.
            </p>
          </div>

          {/* PASO 2: Pago */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 flex flex-col items-center text-center relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute top-4 right-4 text-6xl font-black text-slate-100 select-none group-hover:text-slate-200 transition-colors">2</div>
            <div className="w-20 h-20 rounded-full bg-sky-50 flex items-center justify-center mb-6 text-[#002A5D]">
              <CreditCardIcon className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: colors.primaryText }}>Pago de Derecho</h3>
            <p className="text-slate-600 text-sm mb-4">
              Realiza el pago del derecho de reserva por el monto de:
            </p>
            <div className="bg-[#002A5D] text-white py-2 px-6 rounded-full font-bold text-xl mb-4">
              S/. 250.00
            </div>
            <div className="text-xs bg-slate-50 p-2 rounded border border-slate-200 text-slate-500 font-mono w-full">
              BBVA: 0011-0229-0100095691-20
            </div>
          </div>

          {/* PASO 3: Registro (Link) */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-[#08D3C4] flex flex-col items-center text-center relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute top-4 right-4 text-6xl font-black text-slate-100 select-none group-hover:text-slate-200 transition-colors">3</div>
            <div className="w-20 h-20 rounded-full bg-[#08D3C4]/10 flex items-center justify-center mb-6 text-[#08D3C4]">
              <FormSelectIcon className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: colors.primaryText }}>Registro de Pago</h3>
            <p className="text-slate-600 text-sm mb-6">
              Ingresa al formulario virtual y asegúrate de seleccionar la opción <strong>"Reserva de Matrícula"</strong> al registrar tu pago.
            </p>
            <Link 
              href="https://forms.gle/GBX93q8E1WYfK8sD7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#08D3C4] hover:bg-[#06b0a3] text-white px-6 py-3 rounded-full font-bold transition-colors shadow-md w-full justify-center"
            >
              Ir al Formulario
              <ExternalLinkIcon className="w-5 h-5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}