"use client";

import React from 'react';
import { HeartPulse, BedDouble, Stethoscope, Clock, ChevronRight, CheckCircle } from 'lucide-react';

const BRAND_COLOR = "#C8663E";
const DARK_BLUE = "#1B355C";

const modules = [
  {
    number: "01",
    title: 'Atención Primaria en Salud',
    subtitle: 'PROMOCIÓN Y PREVENCIÓN',
    hours: 265,
    icon: HeartPulse,
    description: 'Domina las bases de la salud comunitaria, prevención de enfermedades y primeros auxilios esenciales para el cuidado integral.',
    // Fondo con 10% de opacidad del color de marca
    accent: `bg-[#C8663E]10 text-[#C8663E]`
  },
  {
    number: "02",
    title: 'Enfermería Asistencial',
    subtitle: 'ATENCIÓN HOSPITALARIA',
    hours: 290,
    icon: BedDouble,
    description: 'Capacitación avanzada en asistencia al paciente hospitalizado, bioseguridad y administración de medicamentos bajo protocolos técnicos.',
    accent: `bg-[#C8663E]10 text-[#C8663E]`
  },
  {
    number: "03",
    title: 'Enfermería Especializada',
    subtitle: 'ÁREAS CRÍTICAS Y ESPECIALES',
    hours: 300,
    icon: Stethoscope,
    description: 'Cuidados específicos en entornos de alta complejidad como centro quirúrgico, pediatría, urgencias y atención geriátrica.',
    accent: `bg-[#C8663E]10 text-[#C8663E]`
  }
];

export default function NursingModulesSection() {
  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      {/* Círculos decorativos de fondo con el nuevo tono */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl -mr-48 -mt-48 opacity-50" />
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl -ml-48 -mb-48 opacity-20" 
        style={{ backgroundColor: BRAND_COLOR }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Cabecera Estilo Catálogo */}
        <div className="text-center mb-20">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: `${DARK_BLUE}05`, color: DARK_BLUE }}
          >
            <CheckCircle size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">Currícula 2026</span>
          </div>
          <h2 className={`text-5xl md:text-6xl font-black text-[${DARK_BLUE}] tracking-tighter mb-4`}>
            MÓDULOS <span style={{ color: BRAND_COLOR }}>ACADÉMICOS</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg italic">
            "Tu evolución como profesional de la salud, certificada paso a paso."
          </p>
          <div 
            className="w-24 h-1 mx-auto mt-6 rounded-full" 
            style={{ backgroundColor: BRAND_COLOR }}
          />
        </div>

        {/* Grid de Módulos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Línea conectora */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10" />

          {modules.map((mod, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden hover:border-[#C8663E50]"
            >
              {/* Header: Icono y Número */}
              <div className="flex justify-between items-start mb-10">
                <div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  style={{ backgroundColor: `${BRAND_COLOR}15`, color: BRAND_COLOR }}
                >
                  <mod.icon size={32} />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Fase</span>
                  <span 
                    className="text-4xl font-black text-slate-100 group-hover:opacity-20 transition-all leading-none tracking-tighter"
                    style={{ color: `${BRAND_COLOR}` }} 
                  >
                    {mod.number}
                  </span>
                </div>
              </div>

              {/* Título y Subtítulo */}
              <div className="mb-6">
                <h3 className={`text-xl font-black leading-tight mb-2 uppercase group-hover:text-[${BRAND_COLOR}] transition-colors`}
                    style={{ color: DARK_BLUE }}>
                  {mod.title}
                </h3>
                <div className="inline-block px-3 py-1 rounded-md bg-slate-50 border border-slate-100">
                  <p className={`text-[10px] font-bold tracking-widest uppercase text-[${DARK_BLUE}]`}>
                    {mod.subtitle}
                  </p>
                </div>
              </div>

              {/* Descripción */}
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-medium">
                {mod.description}
              </p>

              {/* Footer con Horas y Acción */}
              <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-slate-100">
                    <Clock size={14} className="text-slate-400" />
                  </div>
                  <span className={`text-xs font-black text-[${DARK_BLUE}]`}>{mod.hours} HORAS</span>
                </div>
                <div 
                  className="flex items-center gap-1 text-[10px] font-black opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0"
                  style={{ color: BRAND_COLOR }}
                >
                  VER SÍLABO <ChevronRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}