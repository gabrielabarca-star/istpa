// components/StudentsStatsSection.tsx

"use client";

import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// --- Iconos SVG ---
const UserPlusIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GraduationCapIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10V16C22 17.1046 21.1046 18 20 18H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 10L12 5L2 10L12 15L22 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 12V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Tipos de Datos ---
type SemesterKey = '2023-I' | '2023-II' | '2024-I' | '2024-II' | '2025-I'| '2025-II';

interface CareerStats {
  name: string;
  ingresantes: number;
  matriculados: number;
  egresados: number;
}

// --- DATA (Puedes editar los números aquí) ---
const statsData: Record<SemesterKey, CareerStats[]> = {
  '2023-I': [
    { name: 'Computación e Informática', ingresantes: 67, matriculados: 67, egresados: 11 },
    { name: 'Contabilidad', ingresantes: 273, matriculados: 273, egresados: 48 },
    { name: 'Enfermería Técnica', ingresantes: 484, matriculados: 484, egresados: 40 },
    { name: 'Farmacia', ingresantes: 252, matriculados: 252, egresados: 37 },
    { name: 'Prótesis Dental', ingresantes: 46, matriculados: 46, egresados: 8 },
    { name: 'Secretariado Ejecutivo', ingresantes: 14, matriculados: 14, egresados: 8 },
  ],
  '2023-II': [
    { name: 'Computación e Informática', ingresantes: 57, matriculados: 57, egresados: 10 },
    { name: 'Contabilidad', ingresantes: 302, matriculados: 302, egresados: 56 },
    { name: 'Enfermería Técnica', ingresantes: 559, matriculados: 559, egresados: 120 },
    { name: 'Farmacia', ingresantes: 313, matriculados: 313, egresados: 65 },
    { name: 'Prótesis Dental', ingresantes: 35, matriculados: 35, egresados: 12 },
    { name: 'Secretariado Ejecutivo', ingresantes: 13, matriculados: 13, egresados: 9 },
  ],
  '2024-I': [
    { name: 'Computación e Informática', ingresantes: 43, matriculados: 43, egresados: 13 },
    { name: 'Contabilidad', ingresantes: 225, matriculados: 225, egresados: 44 },
    { name: 'Enfermería Técnica', ingresantes: 490, matriculados: 490, egresados: 102 },
    { name: 'Farmacia', ingresantes: 252, matriculados: 252, egresados: 44 },
    { name: 'Prótesis Dental', ingresantes: 18, matriculados: 18, egresados: 8 },
    { name: 'Secretariado Ejecutivo', ingresantes: 4, matriculados: 4, egresados: 3 },
  ],
  '2024-II': [
    { name: 'Computación e Informática', ingresantes: 29, matriculados: 29, egresados: 11 },
    { name: 'Contabilidad', ingresantes: 204, matriculados: 204, egresados: 35 },
    { name: 'Enfermería Técnica', ingresantes: 412, matriculados: 412, egresados: 106 },
    { name: 'Farmacia', ingresantes: 227, matriculados: 227, egresados: 37 },
    { name: 'Prótesis Dental', ingresantes: 10, matriculados: 10, egresados: 7 },
    { name: 'Secretariado Ejecutivo', ingresantes: 0, matriculados: 1, egresados: 1 },
  ],
  '2025-I': [ // Solo las carreras indicadas para 2025
    { name: 'Computación e Informática', ingresantes: 15, matriculados: 15, egresados: 13 },
    { name: 'Contabilidad', ingresantes: 194, matriculados: 194, egresados: 27 },
    { name: 'Enfermería Técnica', ingresantes: 363, matriculados: 363, egresados: 61 },
    { name: 'Farmacia', ingresantes: 230, matriculados: 230, egresados: 41 },
    { name: 'Prótesis Dental', ingresantes: 0, matriculados: 1, egresados: 1 },
  ],
  '2025-II': [ // Solo las carreras indicadas para 2025
    
    { name: 'Contabilidad', ingresantes: 194, matriculados: 194, egresados: 27 },
    { name: 'Enfermería Técnica', ingresantes: 363, matriculados: 363, egresados: 61 },
    { name: 'Farmacia', ingresantes: 230, matriculados: 230, egresados: 41 },
    
  ]
};

// --- Componente de Tarjeta de Carrera ---
const CareerStatCard = ({ data }: { data: CareerStats }) => {
  // Hook para detectar cuándo la tarjeta entra en pantalla y disparar la animación
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación solo ocurre una vez
    threshold: 0.2,    // Se activa cuando el 20% del elemento es visible
  });

  return (
    <div ref={ref} className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-bold text-[#002A5D] mb-6 text-center border-b border-slate-100 pb-2">
        {data.name}
      </h3>
      
      <div className="grid grid-cols-3 gap-2">
        
        {/* Ingresantes */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#002A5D] mb-2">
            <UserPlusIcon className="w-6 h-6" />
          </div>
          <div className="w-14 h-14 rounded-full border-4 border-[#08D3C4] flex items-center justify-center bg-white shadow-sm mb-1">
             <span className="text-sm font-bold text-[#002A5D]">
                {inView ? <CountUp end={data.ingresantes} duration={2} /> : 0}
             </span>
          </div>
          <p className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wide text-center">Ingresantes</p>
        </div>

        {/* Matriculados */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-[#E65100] mb-2">
            <UsersIcon className="w-6 h-6" />
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-[#FBBF24] flex items-center justify-center bg-white shadow-sm mb-1 transform -translate-y-2">
             <span className="text-base font-bold text-[#002A5D]">
                {inView ? <CountUp end={data.matriculados} duration={2.5} /> : 0}
             </span>
          </div>
          <p className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wide text-center -mt-2">Matriculados</p>
        </div>

        {/* Egresados */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-[#166534] mb-2">
            <GraduationCapIcon className="w-6 h-6" />
          </div>
          <div className="w-14 h-14 rounded-full border-4 border-[#22c55e] flex items-center justify-center bg-white shadow-sm mb-1">
             <span className="text-sm font-bold text-[#002A5D]">
                {inView ? <CountUp end={data.egresados} duration={2} /> : 0}
             </span>
          </div>
          <p className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wide text-center">Egresados</p>
        </div>

      </div>
    </div>
  );
};

export default function StudentsStatsSection() {
  const [activeSemester, setActiveSemester] = useState<SemesterKey>('2025-II');
  
  const colors = {
    primaryText: '#002A5D',
    accent: '#08D3C4',
    bgSection: '#F0F7FF',
  };

  const semesters: SemesterKey[] = ['2023-I', '2023-II', '2024-I', '2024-II', '2025-I', '2025-II'];

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.bgSection }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Cabecera */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            Nuestra Comunidad en Cifras
          </h2>
          <div className="w-20 h-1.5 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Transparencia y crecimiento constante. Conoce el número de estudiantes que confían en nosotros semestre a semestre.
          </p>
        </div>

        {/* Tabs de Semestres */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {semesters.map((sem) => (
            <button
              key={sem}
              onClick={() => setActiveSemester(sem)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300
                ${activeSemester === sem
                  ? 'bg-[#002A5D] text-white shadow-lg scale-105'
                  : 'bg-white text-[#002A5D] border border-slate-200 hover:bg-slate-50'
                }
              `}
            >
              {sem}
            </button>
          ))}
        </div>

        {/* Grid de Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statsData[activeSemester].map((careerData, index) => (
            <CareerStatCard key={`${activeSemester}-${index}`} data={careerData} />
          ))}
        </div>

      </div>
    </section>
  );
}