// components/DegreeModalitiesButtonSection.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- Icono de Flecha ---
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function DegreeModalitiesButtonSection() {
  const colors = {
    primaryText: '#002A5D', // Azul oscuro
    accent: '#08D3C4',     // Turquesa
    bgSection: '#F0F7FF', // Celeste muy suave de fondo
  };

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.bgSection }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* --- Cabecera --- */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            Modalidades de Titulación
          </h2>
          <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Conoce las opciones disponibles para obtener tu título profesional y da el siguiente paso en tu carrera.
          </p>
        </div>

        {/* --- Tarjeta Principal --- */}
        <div className="relative w-full max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-300">
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Columna Izquierda: Imagen */}
            <div className="relative h-64 md:h-auto overflow-hidden">
              {/* --- AQUÍ CAMBIAS LA IMAGEN --- */}
              <Image 
                src="/img/boton_titulacion.jpg" // Asegúrate de que esta imagen exista en public/img/
                alt="Estudiantes graduados"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002A5D]/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#002A5D]/10"></div>
            </div>

            {/* Columna Derecha: Contenido y Botón */}
            <div className="p-8 md:p-12 flex flex-col justify-center items-start">
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primaryText }}>
                ¿Listo para titularte?
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Revisa los requisitos y procedimientos detallados para cada una de nuestras modalidades de titulación. Elige la que mejor se adapte a tu perfil académico.
              </p>
              
              <Link href="/modalidad_titulacion" passHref>
                <button className="group relative inline-flex items-center justify-center gap-3 bg-[#002A5D] text-white font-bold py-4 px-8 rounded-full overflow-hidden transition-all duration-300 hover:bg-[#001F44] hover:shadow-lg hover:-translate-y-1">
                  {/* Efecto de brillo en el botón */}
                  <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12 -translate-x-full transition-transform duration-500 group-hover:translate-x-full"></span>
                  
                  <span className="relative z-10">Ver Modalidades</span>
                  <div className="relative z-10 bg-white/20 rounded-full p-1 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRightIcon className="w-5 h-5" />
                  </div>
                </button>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
