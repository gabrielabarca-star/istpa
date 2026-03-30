"use client";

import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { 
  UserPlus, 
  Users, 
  GraduationCap, 
  BarChart3 
} from 'lucide-react';

// --- Paleta Institucional ---
const COLORS = {
  primary: "#1B355C", // Azul Profundo
  gold: "#D8A24C",    // Dorado (Matriculados)
  accent: "#C8663E",  // Terracota (Egresados)
  bgLight: "#F8FAFC"
};

// --- Tipos y Data (Se mantiene la lógica de datos original) ---
type SemesterKey = '2023-I' | '2023-II' | '2024-I' | '2024-II' | '2025-I'| '2025-II';

interface CareerStats {
  name: string;
  ingresantes: number;
  matriculados: number;
  egresados: number;
}

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
  '2025-I': [
    { name: 'Computación e Informática', ingresantes: 15, matriculados: 15, egresados: 13 },
    { name: 'Contabilidad', ingresantes: 194, matriculados: 194, egresados: 27 },
    { name: 'Enfermería Técnica', ingresantes: 363, matriculados: 363, egresados: 61 },
    { name: 'Farmacia', ingresantes: 230, matriculados: 230, egresados: 41 },
    { name: 'Prótesis Dental', ingresantes: 0, matriculados: 1, egresados: 1 },
  ],
  '2025-II': [
    { name: 'Contabilidad', ingresantes: 194, matriculados: 194, egresados: 27 },
    { name: 'Enfermería Técnica', ingresantes: 363, matriculados: 363, egresados: 61 },
    { name: 'Farmacia', ingresantes: 230, matriculados: 230, egresados: 41 },
  ]
};

// --- Sub-componente: Métrica Individual ---
const StatCircle = ({ label, value, color, icon: Icon, inView, delay = 0 }: any) => (
  <div className="flex flex-col items-center">
    <div 
      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 shadow-sm transition-transform group-hover:scale-110"
      style={{ backgroundColor: `${color}15`, color: color }}
    >
      <Icon size={20} strokeWidth={2} />
    </div>
    <div 
      className="w-16 h-16 rounded-full border-2 flex items-center justify-center bg-white shadow-inner mb-2"
      style={{ borderColor: `${color}40` }}
    >
      <span className="text-lg font-black tracking-tighter" style={{ color: COLORS.primary }}>
        {inView ? <CountUp end={value} duration={2.5} delay={delay} /> : 0}
      </span>
    </div>
    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-center leading-tight">
      {label}
    </p>
  </div>
);

// --- Componente de Tarjeta de Carrera ---
const CareerStatCard = ({ data }: { data: CareerStats }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div 
      ref={ref} 
      className="group bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 hover:-translate-y-2"
    >
      <h3 className="text-sm font-black text-center uppercase tracking-[0.15em] mb-8 pb-4 border-b border-slate-50 italic" style={{ color: COLORS.primary }}>
        {data.name}
      </h3>
      
      <div className="grid grid-cols-3 gap-4">
        <StatCircle label="Ingresos" value={data.ingresantes} color={COLORS.primary} icon={UserPlus} inView={inView} />
        <StatCircle label="Matrícula" value={data.matriculados} color={COLORS.gold} icon={Users} inView={inView} delay={0.2} />
        <StatCircle label="Egresos" value={data.egresados} color={COLORS.accent} icon={GraduationCap} inView={inView} delay={0.4} />
      </div>
    </div>
  );
};

export default function StudentsStatsSection() {
  const [activeSemester, setActiveSemester] = useState<SemesterKey>('2025-II');
  const semesters: SemesterKey[] = ['2023-I', '2023-II', '2024-I', '2024-II', '2025-I', '2025-II'];

  return (
    <section className="w-full py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: COLORS.bgLight }}>
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Cabecera Editorial */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <BarChart3 size={14} style={{ color: COLORS.gold }} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Data Institucional</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.85] uppercase mb-6" style={{ color: COLORS.primary }}>
            Nuestra comunidad <br />
            <span className="text-slate-300 italic font-light">en cifras</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#D8A24C] to-transparent mx-auto mt-8 opacity-50" />
        </div>

        {/* Selector de Semestres Estilizado */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          <div className="p-1.5 bg-white rounded-full shadow-xl border border-slate-100 flex flex-wrap justify-center gap-1">
            {semesters.map((sem) => (
              <button
                key={sem}
                onClick={() => setActiveSemester(sem)}
                className={`px-6 py-2.5 rounded-full font-black text-[11px] uppercase tracking-widest transition-all duration-300
                  ${activeSemester === sem
                    ? 'text-white shadow-lg shadow-blue-900/20'
                    : 'text-slate-400 hover:text-[#1B355C] hover:bg-slate-50'
                  }
                `}
                style={{ backgroundColor: activeSemester === sem ? COLORS.primary : 'transparent' }}
              >
                {sem}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statsData[activeSemester].map((careerData, index) => (
            <CareerStatCard key={`${activeSemester}-${index}`} data={careerData} />
          ))}
        </div>

        {/* Footer de Sección */}
        <div className="mt-20 flex justify-center">
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] text-center max-w-lg leading-relaxed">
             * Cifras oficiales proporcionadas por la Oficina de Registros Académicos y la Unidad de Bienestar.
           </p>
        </div>
      </div>
    </section>
  );
}