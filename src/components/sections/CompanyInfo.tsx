"use client";

import React from 'react';

// --- Iconos con los nuevos colores ---
const MissionIcon = ({ color }: { color: string }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"></circle>
    <circle cx="12" cy="12" r="2"></circle>
    <path d="M12 7v2M12 15v2M7 12h2M15 12h2"></path>
  </svg>
);

const VisionIcon = ({ color }: { color: string }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const ValuesIcon = ({ color }: { color: string }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l8.42 8.42 8.42-8.42a5.4 5.4 0 0 0 0-7.65Z"></path>
  </svg>
);

const PrinciplesIcon = ({ color }: { color: string }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

interface TitledDescription {
  title: string;
  description: string;
}

const valores: TitledDescription[] = [
  { title: 'Respeto', description: 'Promovemos relaciones basadas en la convivencia armónica y el reconocimiento de la diversidad.' },
  { title: 'Responsabilidad', description: 'Cumplimiento íntegro de funciones y compromisos académicos y administrativos.' },
  { title: 'Honestidad', description: 'Gestión transparente y coherente con principios éticos y de probidad.' },
  { title: 'Solidaridad', description: 'Trabajo colaborativo y participación activa en responsabilidad social.' },
  { title: 'Compromiso', description: 'Identificación plena con la misión y visión del IES del Altiplano.' },
];

const principios: TitledDescription[] = [
  { title: 'Calidad Educativa', description: 'Mejora continua orientada al cumplimiento de condiciones básicas.' },
  { title: 'Equidad e Inclusión', description: 'Garantizamos igualdad de oportunidades para toda nuestra comunidad.' },
  { title: 'Pertinencia', description: 'Articulación con las demandas del entorno productivo regional.' },
  { title: 'Transparencia', description: 'Acceso a información relevante y rendición de cuentas permanente.' },
];

const colors = {
  primary: '#1B355C', // Azul Institucional
  gold: '#D8A24C',    // Dorado Institucional
  accent: '#C8663E',  // Naranja Institucional
  bg: '#F8FAFC',
};

export default function CompanyInfo() {
  return (
    <div className="min-h-screen w-full py-16 px-6 font-sans" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Título de Sección */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight" style={{ color: colors.primary }}>
            Identidad <span style={{ color: colors.accent }}>Institucional</span>
          </h1>
          <div className="w-24 h-1.5 mx-auto rounded-full" style={{ backgroundColor: colors.gold }}></div>
        </div>

        {/* Grid Estilo Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* MISIÓN - Card destacada */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-shadow duration-500">
            <div>
              <div className="p-3 w-fit rounded-2xl mb-6 shadow-inner" style={{ backgroundColor: `${colors.accent}15` }}>
                <MissionIcon color={colors.accent} />
              </div>
              <h2 className="text-3xl font-black mb-4" style={{ color: colors.primary }}>Misión</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Somos un Instituto de Educación Superior que brinda un servicio educativo de calidad, inclusivo y pertinente, 
                orientado al desarrollo de competencias para la inserción laboral y el emprendimiento en la región Puno.
              </p>
            </div>
          </div>

          {/* VISIÓN - Card destacada */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-shadow duration-500">
            <div>
              <div className="p-3 w-fit rounded-2xl mb-6 shadow-inner" style={{ backgroundColor: `${colors.gold}15` }}>
                <VisionIcon color={colors.gold} />
              </div>
              <h2 className="text-3xl font-black mb-4" style={{ color: colors.primary }}>Visión</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Al 2032, ser un Instituto de Educación Superior licenciado, referente en calidad y productividad, 
                contribuyendo al desarrollo económico y social nacional con profesionales éticos.
              </p>
            </div>
          </div>

          {/* PRINCIPIOS - Lista moderna */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 md:col-span-2 lg:col-span-1 flex flex-col hover:shadow-xl transition-shadow duration-500">
            <div className="flex items-center gap-4 mb-8">
              <PrinciplesIcon color={colors.primary} />
              <h2 className="text-2xl font-black" style={{ color: colors.primary }}>Principios</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 overflow-y-auto pr-2">
              {principios.map((p, idx) => (
                <div key={idx} className="group p-4 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all">
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1" style={{ color: colors.accent }}>{p.title}</h4>
                  <p className="text-sm text-slate-500">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* VALORES - Horizontal Wide Card */}
          <div className="md:col-span-2 lg:col-span-3 bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3">
                <div className="p-3 w-fit rounded-2xl mb-6 shadow-inner" style={{ backgroundColor: `${colors.primary}15` }}>
                  <ValuesIcon color={colors.primary} />
                </div>
                <h2 className="text-4xl font-black mb-4" style={{ color: colors.primary }}>Nuestros Valores</h2>
                <p className="text-slate-500 italic">Los pilares que guían nuestro comportamiento ético y académico.</p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {valores.map((v, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2" style={{ borderColor: colors.gold }}>
                    <h4 className="font-black text-lg mb-1" style={{ color: colors.primary }}>{v.title}</h4>
                    <p className="text-sm text-slate-600 leading-snug">{v.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}