"use client";

import { useState } from 'react';
import Image from 'next/image';

// --- Definición de Tipos con TypeScript ---
interface TeamMember {
  id: number;
  name: string;
  position: string;
  photoUrl: string;
  phone: string;
  email: string;
}

// --- Datos del Equipo Directivo y Coordinadores ---
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Maximo Valdivia',
    position: 'Director General',
    photoUrl: '/img/administrativo/maximo.jpg',
    phone: '981701213',
    email: 'maximo.valdivia@iest.edu.pe',
  },
  {
    id: 2,
    name: 'Carlos Murillo',
    position: 'Jefe de Unidad Administrativa',
    photoUrl: '/img/administrativo/carlos-1.jpg',
    phone: '965801705',
    email: 'carlos.murillo@iest.edu.pe',
  },
  {
    id: 3,
    name: 'Ruth Trujillo',
    position: 'Secretaria Académica',
    photoUrl: '/img/administrativo/ruth.jpg',
    phone: '912503627',
    email: 'ruth.trujillo@iest.edu.pe',
  },
  {
    id: 4,
    name: 'Lizbet Choquejahua',
    position: 'Jefe de Bienestar y Empleabilidad',
    photoUrl: '/img/administrativo/liz.jpg',
    phone: '950956442',
    email: 'liz.choquejahua@iest.edu.pe',
  },
  {
    id: 5,
    name: 'Rosa Aragón',
    position: 'Jefe de Unidad Académica',
    photoUrl: '/img/administrativo/rosa-final.jpg',
    phone: '965689692',
    email: 'rosa.aragon@iest.edu.pe',
  },
  // --- NUEVOS CARGOS AGREGADOS ---
  {
    id: 6,
    name: 'Sonia Anapan Ulloa',
    position: 'COORDINADOR DE ÁREA DE CALIDAD',
    photoUrl: '/img/administrativo/default.jpg', // Cambiar por la ruta real
    phone: '922309224',
    email: 'sonia.anapan@iest.edu.pe',
  },
  {
    id: 7,
    name: 'Braddy Gabriel Abarca Aranibar',
    position: 'Responsable de Tecnologías de la Información',
    photoUrl: '/img/administrativo/default.jpg',
    phone: '965818204',
    email: 'gabriel.abarca@iest.edu.pe',
  },
  {
    id: 8,
    name: 'Martin Lorenzo Samo',
    position: 'Coordinador del Área de Estudios de Contabilidad',
    photoUrl: '/img/docentes/martin-lorenzo.png',
    phone: '971000026',
    email: 'martin.lorenzo@iest.edu.pe',
  },
  {
    id: 9,
    name: 'Liz Zuñiga Gonzales',
    position: 'Coordinador del Área de Estudios de Farmacia',
    photoUrl: '/img/docentes/liz-zuñiga.png',
    phone: '951526054',
    email: 'liz.zuniga@iest.edu.pe',
  },
  {
    id: 10,
    name: 'Eliana Aguirre Yucra',
    position: 'Coordinador del Área de Estudios de Enfermería',
    photoUrl: '/img/docentes/eliana-aguirre.jpg',
    phone: '921806360',
    email: 'eliana.maquera@iest.edu.pe',
  },
];

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);
const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0); // Ajustado a 0 para iniciar desde el primer miembro

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const getCardStyle = (index: number) => {
    let offset = index - currentIndex;
    
    // Lógica para que el carrusel sea infinito visualmente
    if (offset > teamMembers.length / 2) offset -= teamMembers.length;
    if (offset < -teamMembers.length / 2) offset += teamMembers.length;

    const absOffset = Math.abs(offset);

    const styles = {
      transform: `translateX(${(offset * 100) / 2}%) scale(${1 - absOffset * 0.1})`,
      opacity: `${absOffset > 1 ? 0 : 1 - absOffset * 0.4}`,
      filter: `blur(${absOffset * 4}px)`,
      zIndex: 50 - absOffset,
      transition: 'all 0.4s ease-out',
      pointerEvents: absOffset === 0 ? 'auto' : 'none' as const,
    };

    return styles;
  };

  const colors = {
    primaryText: '#0A2540',
    positionText: '#2693FF',
    accent: '#08D3C4',
    background: '#F8FAFC',
  };
  
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 sm:p-8" style={{ backgroundColor: colors.background }}>
      <div className="lg:w-1/3 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
        <h2 className="text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            Plana
            <br />
            <span style={{color: colors.accent}}>Jerárquica</span>
        </h2>
        <div className="w-16 h-1.5 mt-4 mx-auto lg:mx-0" style={{ backgroundColor: colors.accent }}></div>
        <p className="text-gray-500 mt-6 max-w-sm mx-auto lg:mx-0">
          Conoce al equipo del Instituto del Altiplano que lidera la transformación educativa del país.
        </p>
      </div>

      <div className="relative w-full lg:w-2/3 h-[500px] flex items-center justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="absolute w-[320px] h-auto bg-white rounded-2xl shadow-2xl p-8 text-center"
            style={getCardStyle(index)}
          >
            <div className="relative w-32 h-32 mx-auto -mt-20 border-4 border-white rounded-full overflow-hidden">
                <Image
                    src={member.photoUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                />
            </div>
            <h3 className="text-xl font-bold mt-4" style={{color: colors.primaryText}}>{member.name}</h3>
            <p className="text-sm font-semibold uppercase" style={{color: colors.positionText}}>{member.position}</p>

            <div 
              className="mt-4 space-y-2 transition-opacity duration-300"
              style={{ 
                opacity: index === currentIndex ? 1 : 0,
              }}
            >
              <p className="text-sm text-gray-600">
                <a href={`tel:${member.phone}`} className="hover:underline">{member.phone}</a>
              </p>
              <p className="text-sm text-gray-600">
                <a href={`mailto:${member.email}`} className="hover:underline">{member.email}</a>
              </p>
            </div>
          </div>
        ))}

        <button
          onClick={handlePrev}
          className="absolute left-0 lg:left-10 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm text-blue-900 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-white transition"
          style={{ zIndex: 60 }}
        >
          <ChevronLeftIcon />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 lg:right-10 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm text-blue-900 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-white transition"
          style={{ zIndex: 60 }}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}