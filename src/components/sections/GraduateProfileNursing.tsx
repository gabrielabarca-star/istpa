"use client";

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Award, Rocket, HeartPulse } from 'lucide-react';

const COLORS = {
  primary: "#1B355C",
  gold: "#D8A24C",
  accent: "#C8663E"
};

const profilePoints = [
  {
    title: "Competencia Profesional",
    text: 'Al culminar la carrera de Enfermería Técnica, te conviertes en un profesional altamente preparado para el sector salud, capaz de responder a las exigencias más altas.',
    icon: Award,
    color: 'text-[#D8A24C]', // Dorado para premios/logros
    bg: 'bg-[#D8A24C]/10'
  },
  {
    title: "Atención Especializada",
    text: 'Nuestra formación te capacita para ir más allá de la asistencia básica: te entrenamos para realizar una atención integral, humana y dominar tecnología médica de vanguardia.',
    icon: HeartPulse,
    color: 'text-[#C8663E]', // Terracota para salud/pasión
    bg: 'bg-[#C8663E]/10'
  },
  {
    title: "Agente de Cambio",
    text: 'Formamos líderes en salud comunitaria con alta empleabilidad y un perfil enfocado en la excelencia que asegura un impacto real en la vida de las personas.',
    icon: Rocket,
    color: 'text-[#1B355C]', // Azul para liderazgo
    bg: 'bg-[#1B355C]/10'
  },
];

export default function GraduateProfileNursing() {
  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      {/* Decoración de fondo sutil */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-60 -ml-32" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* --- Columna Izquierda: Imagen con Composición Artística --- */}
          <div className="lg:col-span-5 relative group">
            {/* Marcos decorativos con colores institucionales */}
            <div className="absolute -inset-4 border-2 border-slate-100 rounded-[3.5rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
            <div 
              className="absolute -inset-4 border-2 rounded-[3.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-700 opacity-20" 
              style={{ borderColor: COLORS.gold }}
            />
            
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] shadow-2xl shadow-slate-200">
              <Image
                src="/img/perfil_egresado_enfermeria.png"
                alt="Egresada de Enfermería"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              {/* Overlay gradiente azul institucional */}
              <div 
                className="absolute inset-0 opacity-40" 
                style={{ background: `linear-gradient(to t, ${COLORS.primary}, transparent)` }}
              />
              
              {/* Badge flotante sobre la imagen */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl flex items-center gap-4">
                 <div 
                   className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg"
                   style={{ backgroundColor: COLORS.gold }}
                 >
                    <CheckCircle2 size={24} />
                 </div>
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Garantía Académica</p>
                    <p className="text-sm font-black" style={{ color: COLORS.primary }}>Título a Nombre de la Nación</p>
                 </div>
              </div>
            </div>
          </div>

          {/* --- Columna Derecha: Contenido Informativo --- */}
          <div className="lg:col-span-7">
            <div className="mb-12">
                <span 
                  className="font-black uppercase tracking-[0.3em] text-xs mb-3 block"
                  style={{ color: COLORS.accent }}
                >
                  Excelencia Académica
                </span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none" style={{ color: COLORS.primary }}>
                  PERFIL DEL <br />
                  <span className="text-slate-300 italic">EGRESADO</span>
                </h2>
                <div 
                  className="w-20 h-2 mt-6 rounded-full" 
                  style={{ backgroundColor: COLORS.gold }}
                />
            </div>
            
            <div className="space-y-4">
              {profilePoints.map((point, index) => (
                <div 
                  key={index}
                  className="group flex gap-6 p-8 rounded-[2.5rem] transition-all duration-300 hover:bg-slate-50 border border-transparent hover:border-slate-100"
                >
                  <div className={`shrink-0 w-14 h-14 rounded-2xl ${point.bg} ${point.color} flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6 shadow-sm`}>
                    <point.icon size={28} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-black mb-2 tracking-tight" style={{ color: COLORS.primary }}>
                        {point.title}
                    </h3>
                    <p className="text-slate-500 font-medium leading-relaxed text-base">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Banner de Acción Institucional */}
            <div 
              className="mt-12 p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-lg shadow-blue-900/10"
              style={{ backgroundColor: COLORS.primary }}
            >
                {/* Círculo decorativo con dorado */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 opacity-10" 
                  style={{ backgroundColor: COLORS.gold }}
                />
                
                <p className="text-white font-bold text-lg relative z-10 max-w-[280px] md:max-w-none text-center md:text-left">
                    ¿Listo para transformar tu vocación en una carrera profesional?
                </p>
                <button 
                  className="text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 hover:brightness-110 transition-all relative z-10 shadow-lg"
                  style={{ backgroundColor: COLORS.accent }}
                >
                    Postular Ahora
                </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}