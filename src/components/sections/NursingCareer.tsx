"use client";

import React from 'react';
import { Calendar, Clock, BookOpen, Timer, GraduationCap, CheckCircle2 } from 'lucide-react';
import InfoForm from './InfoForm';

// --- Configuración de Colores ---
const BRAND_COLOR = "#C8663E";
const DARK_BLUE = "#1B355C";

const infoCards = [
  { title: 'Inicio', description: 'Abril 2026', icon: Calendar, color: 'text-blue-600' },
  { title: 'Turnos', description: 'Mañana / Tarde / Noche', icon: Clock, color: 'text-emerald-600' },
  { title: 'Modalidad', description: '100% Presencial', icon: BookOpen, color: 'text-purple-600' },
  { title: 'Duración', description: '3 años (6 Ciclos)', icon: Timer, color: `text-[${BRAND_COLOR}]` }, 
];

export default function NursingCareer() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 lg:py-32 relative overflow-hidden">
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-200/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* --- Columna Izquierda: Contenido Académico --- */}
        <div className="lg:col-span-7">
          {/* Badge de Categoría con el nuevo color */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" 
            style={{ backgroundColor: `${BRAND_COLOR}15`, color: BRAND_COLOR }}
          >
            <GraduationCap size={18} />
            <span className="text-xs font-black uppercase tracking-widest">Carrera Profesional</span>
          </div>

          <h1 className={`text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-8 text-[${DARK_BLUE}]`}>
            ENFERMERÍA <br />
            <span style={{ color: BRAND_COLOR }}>TÉCNICA</span>
          </h1>

          <div className="prose prose-lg text-slate-600 mb-12">
            <p className="text-xl leading-relaxed font-medium">
              Formamos los pilares del sistema de salud. Prepárate con una metodología 
              <span className="font-bold" style={{ color: DARK_BLUE }}> 80% práctica </span> 
              en nuestros laboratorios especializados.
            </p>
            
            <ul className="mt-8 space-y-4">
              {['Certificaciones progresivas', 'Convenios con clínicas y hospitales', 'Bolsa de trabajo exclusiva'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold">
                  <CheckCircle2 style={{ color: BRAND_COLOR }} size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Grid Bento de Información */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {infoCards.map((card, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <card.icon 
                    size={24} 
                    className={index === 3 ? "" : card.color} 
                    style={index === 3 ? { color: BRAND_COLOR } : {}}
                  />
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
                  {card.title}
                </h3>
                <p className={`text-sm font-black leading-tight text-[${DARK_BLUE}]`}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Columna Derecha: Formulario --- */}
        <div className="lg:col-span-5 w-full lg:sticky lg:top-24">
          <div className="relative">
            {/* Resplandor decorativo con mezcla de marca */}
            <div 
              className="absolute -inset-4 blur-3xl rounded-[3rem] opacity-25" 
              style={{ background: `linear-gradient(to top right, ${BRAND_COLOR}, ${DARK_BLUE})` }}
            />
            
            <div className="relative bg-white rounded-[2.5rem] shadow-2xl border border-white p-2">
              
              <div className="p-4">
                <InfoForm />
              </div>
            </div>
          </div>
          
          {/* Footer de confianza */}
          <div className="mt-8 flex items-center justify-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all">
             <div className="flex flex-col items-center">
                <span className="text-[10px] font-black uppercase tracking-tighter">Licenciados por</span>
                <span className={`text-sm font-bold text-[${DARK_BLUE}]`}>MINEDU</span>
             </div>
             <div className="w-px h-8 bg-slate-300" />
             <div className="flex flex-col items-center">
                <span className="text-[10px] font-black uppercase tracking-tighter">Sede</span>
                <span className={`text-sm font-bold text-[${DARK_BLUE}]`}>PUNO</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}