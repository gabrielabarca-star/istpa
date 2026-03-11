"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Stethoscope, 
  Building2, 
  BriefcaseMedical, 
  Globe, 
  Ambulance, 
  GraduationCap, 
  CheckCircle2,
  HeartPulse
} from 'lucide-react';

// --- Paleta Institucional ---
const COLORS = {
  primary: "#1B355C", // Azul Profundo
  gold: "#D8A24C",    // Dorado
  accent: "#C8663E"   // Terracota
};

const jobOpportunities = [
  { text: 'Hospitales del Minsa y EsSalud', icon: Stethoscope, category: 'Público' },
  { text: 'Clínicas Privadas y Policlínicos', icon: Building2, category: 'Privado' },
  { text: 'Empresas Prestadoras de Salud', icon: HeartPulse, category: 'Privado' },
  { text: 'Servicios de Ambulancia', icon: Ambulance, category: 'Especializado' },
  { text: 'Tópicos en Empresas y Colegios', icon: BriefcaseMedical, category: 'Institucional' },
  { text: 'Consultorios Especializados', icon: CheckCircle2, category: 'Privado' },
  { text: 'Atención Independiente', icon: GraduationCap, category: 'Autónomo' },
  { text: 'Organizaciones (ONG)', icon: Globe, category: 'Social' },
];

export default function JobMarketNursing() {
  return (
    <section className="w-full bg-[#FBFDFF] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* --- Columna Izquierda: Visual --- */}
          <div className="lg:col-span-5 relative">
            {/* Elementos Decorativos de Fondo con colores de marca */}
            <div 
              className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: COLORS.gold }}
            ></div>
            <div 
              className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full blur-3xl opacity-10"
              style={{ backgroundColor: COLORS.primary }}
            ></div>
            
            <div className="relative z-10 w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200">
              <Image
                src="/img/campo_laboral_enfermeria.png"
                alt="Profesional de enfermería en acción"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              {/* Badge Flotante */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white shadow-xl">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg"
                    style={{ backgroundColor: COLORS.accent }}
                  >
                    <BriefcaseMedical size={24} />
                  </div>
                  <div>
                    <p className="font-black text-lg leading-tight" style={{ color: COLORS.primary }}>Alta Demanda</p>
                    <p className="text-slate-500 text-sm font-medium">95% de empleabilidad al egresar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- Columna Derecha: Contenido --- */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <span 
                className="font-black uppercase tracking-[0.3em] text-xs"
                style={{ color: COLORS.accent }}
              >
                Oportunidades de carrera
              </span>
              <h2 
                className="text-5xl lg:text-6xl font-black tracking-tighter mt-4 leading-[0.9]"
                style={{ color: COLORS.primary }}
              >
                TU FUTURO EN EL <br />
                <span className="text-slate-400">CAMPO LABORAL</span>
              </h2>
              <div 
                className="w-20 h-1.5 mt-8 rounded-full"
                style={{ backgroundColor: COLORS.gold }}
              ></div>
              <p className="mt-8 text-slate-500 text-lg font-medium max-w-xl leading-relaxed">
                Nuestra formación técnica te permite insertarte rápidamente en el sistema nacional de salud, 
                tanto en el sector público como privado, con certificaciones progresivas y reconocimiento oficial.
              </p>
            </div>

            {/* Grid de Oportunidades */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {jobOpportunities.map((job, index) => (
                <div 
                  key={index}
                  className="group relative bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = `${COLORS.accent}30`}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#f1f5f9'}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-white transition-all duration-300"
                      style={{ 
                        backgroundColor: 'var(--bg-hover)',
                      }}
                    >
                      {/* Lógica de color en hover vía CSS Inline/Classes */}
                      <style jsx>{`
                        .group:hover .group-hover\\:bg-accent {
                          background-color: ${COLORS.accent} !important;
                        }
                      `}</style>
                      <job.icon 
                        size={24} 
                        strokeWidth={2} 
                        className="group-hover:text-[#C8663E] transition-colors"
                      />
                    </div>
                    <div>
                      <p className="font-bold transition-colors" style={{ color: COLORS.primary }}>
                        {job.text}
                      </p>
                      <span 
                        className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity"
                        style={{ color: COLORS.gold }}
                      >
                        {job.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Llamado a la acción suave */}
            <div 
              className="mt-12 flex items-center gap-6 p-6 rounded-[2rem] border border-slate-100"
              style={{ backgroundColor: `${COLORS.primary}05` }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                    <div 
                      className="w-full h-full opacity-80"
                      style={{ backgroundColor: i === 1 ? COLORS.primary : i === 2 ? COLORS.gold : COLORS.accent }}
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-slate-500">
                Únete a más de <span style={{ color: COLORS.primary }} className="font-black">+2,000 egresados</span> trabajando hoy con éxito.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}