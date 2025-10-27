// components/GraduateProfileNursing.tsx

import React from 'react';
import Image from 'next/image';

// --- Marco decorativo (MODIFICADO: Ahora es un marco cerrado) ---
const ImageFrame = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 350 480" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect 
            x="4" 
            y="4" 
            width="342" 
            height="472" 
            rx="50" // Radio de la esquina en el eje X
            ry="50" // Radio de la esquina en el eje Y
            stroke="#0A2540" 
            strokeWidth="8"
        />
    </svg>
);


// --- Definición de Tipos y Datos para los puntos del perfil  ---
interface ProfilePoint {
  text: string;
  borderColor: string;
}

const profilePoints: ProfilePoint[] = [
  {
    text: 'Al culminar la carrera de Enfermería Técnica, te conviertes en un profesional altamente preparado para el sector salud.',
    borderColor: '#EF4444', // Rojo
  },
  {
    text: 'Nuestra formación te capacita para ir más allá de la asistencia básica: te entrenamos para realizar una atención integral y de calidad al paciente y dominar el uso de tecnología médica de vanguardia.',
    borderColor: '#08D3C4', // Turquesa
  },
  {
    text: 'También formamos en la promoción de la salud comunitaria, para que te conviertas en un agente de cambio. Este perfil, enfocado en el liderazgo y la excelencia profesional, te asegura una alta empleabilidad y un futuro con impacto real en la vida de las personas.',
    borderColor: '#FBBF24', // Amarillo/Ámbar
  },
];

// --- Componente Principal  ---
export default function GraduateProfileNursing() {
  const colors = {
    primaryText: '#0A2540',
    accent: '#EF4444',
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- Columna Izquierda: Imagen con Marco --- */}
          <div className="relative w-full max-w-sm mx-auto h-[480px]">
            <ImageFrame className="absolute top-0 left-0 w-full h-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[85%]">
              <Image
                src="/img/estudiante.png" // Asegúrate de que esta imagen exista en tu carpeta /public
                alt="Egresada de la carrera de Enfermería Técnica"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
          </div>

          {/* --- Columna Derecha: Texto del Perfil --- */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
              Perfil del egresado
            </h2>
            <div className="w-20 h-1.5 mt-4" style={{ backgroundColor: colors.accent }}></div>
            
            <div className="mt-8 space-y-6">
              {profilePoints.map((point, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2"
                  style={{ borderColor: point.borderColor }}
                >
                  <p className="text-slate-600">{point.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}