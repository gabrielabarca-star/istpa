// components/Testimonials2.tsx
"use client"; 
import Link from 'next/link';
import React from 'react';

// --- Icono para el botón ---
const ArrowUpRightIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
);

// --- Componente Principal ---
export default function Testimonials2() {
  // Paleta de colores extraída de tus imágenes de referencia
  const colors = {
    primaryText: '#0A2540',
    accent: '#08D3C4',
    background: '#F8FAFC',
    button: '#1D4ED8', // Un azul vibrante para el botón
    buttonHover: '#1E40AF',
  };

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.background }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div 
          className="rounded-3xl p-8 sm:p-16 text-center shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)]" 
          style={{ backgroundColor: 'white' }}
        >
          {/* --- Cabecera de la Sección --- */}
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            <span style={{ color: colors.accent }}>Conocer</span>
            <br className="sm:hidden" /> más testimonios
          </h2>
          <div 
            className="w-20 h-1.5 mt-4 mx-auto" 
            style={{ backgroundColor: colors.accent }}
          ></div>

          {/* --- Párrafo Descriptivo --- */}
          <p className="mt-6 max-w-xl mx-auto text-slate-600">
            Nuestros egresados son profesionales de éxito, destacados en sus campos y orgullosos de su formación en nuestra institución.
          </p>

          {/* --- Botón de Navegación --- */}
          <div className="mt-10">
            <Link href="/testimonios" passHref>
              <button 
                className="group inline-flex items-center justify-center gap-3 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300"
                style={{ backgroundColor: colors.button }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.buttonHover}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.button}
              >
                Ver más testimonios
                <span className="bg-white/20 p-1 rounded-full group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRightIcon className="w-5 h-5" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}