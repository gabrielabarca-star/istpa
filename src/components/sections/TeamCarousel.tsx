"use client";

import { useState } from 'react';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  photoUrl: string;
  phone: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  { id: 1, name: 'Esteban Isidro Leon Apaza', position: 'Director General', photoUrl: '/img/administrativo/Estevan.png', phone: '951083279', email: 'esteban.leon@iest.edu.pe' },
  { id: 2, name: 'Carlos Murillo', position: 'Jefe de Unidad Administrativa', photoUrl: '/img/administrativo/carlos-1.jpg', phone: '965801705', email: 'carlos.murillo@iest.edu.pe' },
  { id: 3, name: 'Ruth Trujillo', position: 'Secretaria Académica', photoUrl: '/img/administrativo/ruth.jpg', phone: '912503627', email: 'ruth.trujillo@iest.edu.pe' },
  { id: 4, name: 'Lizbet Choquejahua', position: 'Jefe de Bienestar y Empleabilidad', photoUrl: '/img/administrativo/liz.jpg', phone: '950956442', email: 'liz.choquejahua@iest.edu.pe' },
  { id: 5, name: 'Rosa Aragón', position: 'Jefe de Unidad Académica', photoUrl: '/img/administrativo/rosa-final.jpg', phone: '965689692', email: 'rosa.aragon@iest.edu.pe' },
  { id: 6, name: 'Sonia Anapan Ulloa', position: 'COORDINADOR DE ÁREA DE CALIDAD', photoUrl: '/img/administrativo/Sonia1.png', phone: '922309224', email: 'sonia.anapan@iest.edu.pe' },
  { id: 7, name: 'Braddy Gabriel Abarca Aranibar', position: 'Responsable de Tecnologías de la Información', photoUrl: '/img/administrativo/Gabriel1.png', phone: '965818204', email: 'gabriel.abarca@iest.edu.pe' },
  { id: 8, name: 'Martin Lorenzo Samo', position: 'Coordinador del Área de Estudios de Contabilidad', photoUrl: '/img/docentes/martin-lorenzo.png', phone: '971000026', email: 'martin.lorenzo@iest.edu.pe' },
  { id: 9, name: 'Liz Zuñiga Gonzales', position: 'Coordinador del Área de Estudios de Farmacia', photoUrl: '/img/docentes/liz-zuñiga.png', phone: '951526054', email: 'liz.zuniga@iest.edu.pe' },
  { id: 10, name: 'Eliana Aguirre Yucra', position: 'Coordinador del Área de Estudios de Enfermería', photoUrl: '/img/docentes/eliana-aguirre.jpg', phone: '921806360', email: 'eliana.maquera@iest.edu.pe' },
  { id: 11, name: 'Maritza Karina Herrera Pereira', position: 'Coordinador de EFSRT', photoUrl: '/img/administrativo/karina_herrera.png', phone: '999668164', email: 'maritza.herrerap@iest.edu.pe' },
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const getCardStyle = (index: number) => {
    let offset = index - currentIndex;
    if (offset > teamMembers.length / 2) offset -= teamMembers.length;
    if (offset < -teamMembers.length / 2) offset += teamMembers.length;

    const absOffset = Math.abs(offset);

    return {
      transform: `translateX(${(offset * 110)}%) scale(${1 - absOffset * 0.15})`,
      opacity: `${absOffset > 1 ? 0 : 1 - absOffset * 0.5}`,
      // REDUCIDO: zIndex del 1 al 10 para no solapar el menú (que suele ser 50+)
      zIndex: 10 - absOffset,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      pointerEvents: absOffset === 0 ? 'auto' : 'none' as const,
    };
  };

  const colors = {
    primaryText: '#1B355C',
    accent: '#C8663E',
    gold: '#D8A24C',
    background: '#F8FAFC',
  };

  return (
    /* Agregado z-0 para aislar el contexto de apilamiento */
    <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center p-6 overflow-hidden relative z-0" style={{ backgroundColor: colors.background }}>
      
      {/* Sección de Texto Lateral */}
      <div className="lg:w-1/3 text-center lg:text-left mb-16 lg:mb-0 lg:pl-16 relative z-10">
        <span className="text-xs font-black uppercase tracking-[0.4em] opacity-40 mb-2 block" style={{ color: colors.primaryText }}>Directivos</span>
        <h2 className="text-5xl md:text-6xl font-black leading-tight" style={{ color: colors.primaryText }}>
          Plana
          <br />
          <span style={{ color: colors.accent }}>Jerárquica</span>
        </h2>
        <div className="w-20 h-2 mt-6 mx-auto lg:mx-0 rounded-full" style={{ backgroundColor: colors.gold }}></div>
        <p className="text-slate-500 mt-8 text-lg max-w-sm mx-auto lg:mx-0 leading-relaxed font-medium">
          Líderes con visión de futuro, guiando nuestra institución hacia la excelencia regional.
        </p>
      </div>

      {/* Área del Carrusel */}
      <div className="relative w-full lg:w-2/3 h-[600px] flex items-center justify-center">
        
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="absolute w-[320px] sm:w-[350px] bg-white rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(27,53,92,0.15)] p-10 flex flex-col items-center group border border-slate-50 transition-all"
            style={getCardStyle(index)}
          >
            {/* Imagen Circular con anillo institucional */}
            <div className="relative w-40 h-40 mb-8">
              <div 
                className="absolute inset-0 rounded-full scale-110 opacity-10 group-hover:scale-125 transition-transform duration-700"
                style={{ backgroundColor: colors.accent }}
              ></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src={member.photoUrl}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Texto informativo */}
            <h3 className="text-xl font-black text-center mb-3 leading-tight" style={{ color: colors.primaryText }}>
              {member.name}
            </h3>
            
            <div className="inline-block px-4 py-1.5 rounded-xl bg-slate-50 border border-slate-100 mb-8">
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-center" style={{ color: colors.accent }}>
                {member.position}
              </p>
            </div>

            {/* Acciones de Contacto */}
            <div 
              className="w-full grid grid-cols-2 gap-3 pt-6 border-t border-slate-50"
              style={{ 
                opacity: index === currentIndex ? 1 : 0,
                pointerEvents: index === currentIndex ? 'auto' : 'none',
                transform: index === currentIndex ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease'
              }}
            >
              <a href={`tel:${member.phone}`} className="flex flex-col items-center p-3 rounded-2xl bg-slate-50 hover:bg-orange-50 transition-colors group/btn">
                <span className="text-xl mb-1 group-hover/btn:scale-110 transition-transform">📞</span>
                <span className="text-[10px] font-bold text-slate-400">Llamar</span>
              </a>
              <a href={`mailto:${member.email}`} className="flex flex-col items-center p-3 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors group/btn">
                <span className="text-xl mb-1 group-hover/btn:scale-110 transition-transform">✉️</span>
                <span className="text-[10px] font-bold text-slate-400">Correo</span>
              </a>
            </div>
          </div>
        ))}

        {/* Controles Flotantes - Ajustado z-index para que esté por encima de las cards pero no del menú */}
        <div className="absolute bottom-4 flex gap-4 z-20">
          <button
            onClick={handlePrev}
            className="bg-[#1B355C] text-white rounded-2xl w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[#C8663E] transition-all duration-300 active:scale-90"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={handleNext}
            className="bg-[#1B355C] text-white rounded-2xl w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[#C8663E] transition-all duration-300 active:scale-90"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}