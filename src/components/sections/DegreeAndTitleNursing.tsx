"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Award, GraduationCap, CheckCircle } from 'lucide-react';

const COLORS = {
  primary: "#1B355C",
  gold: "#D8A24C",
  accent: "#C8663E"
};

const certifications = [
  {
    type: 'Grado Académico',
    name: 'Diploma de Egresado de Enfermería Técnica',
    imageUrl: '/img/diploma_enfermeria1.png',
    icon: Award,
  },
  {
    type: 'Título Profesional',
    name: 'Profesional Técnico en Enfermería Técnica',
    imageUrl: '/img/titulo_profesional_enfermeria.png',
    icon: GraduationCap,
  },
];

export default function DegreeAndTitleNursing() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-slate-50 py-20 lg:py-28 relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B355C]/5 rounded-full blur-3xl -mr-48 -mt-48" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* --- Cabecera --- */}
        <div className="text-center mb-16">
          <span 
            className="font-black uppercase tracking-[0.4em] text-xs mb-4 block"
            style={{ color: COLORS.accent }}
          >
            Reconocimiento Oficial
          </span>
          <h2 
            className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1]"
            style={{ color: COLORS.primary }}
          >
            AL CULMINAR LA CARRERA <br />
            <span className="text-slate-300 italic">OBTENDRÁS</span>
          </h2>
          <div 
            className="w-24 h-2 mt-8 mx-auto rounded-full"
            style={{ backgroundColor: COLORS.gold }}
          />
        </div>

        {/* --- Pestañas Institucionales --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => {
            const isActive = activeIndex === index;
            const Icon = cert.icon;
            return (
              <div key={index} className="flex flex-col">
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full p-6 flex items-center gap-5 rounded-3xl border-2 transition-all duration-500 overflow-hidden group ${
                    isActive
                      ? 'border-transparent shadow-2xl scale-[1.02]'
                      : 'bg-white border-slate-200 text-slate-400 hover:border-[#D8A24C]/50'
                  }`}
                  style={{ 
                    backgroundColor: isActive ? COLORS.primary : 'white',
                    color: isActive ? 'white' : ''
                  }}
                >
                  {/* Indicador activo lateral */}
                  <div 
                    className={`absolute left-0 top-0 bottom-0 w-2 transition-transform duration-500 ${isActive ? 'scale-y-100' : 'scale-y-0'}`}
                    style={{ backgroundColor: COLORS.gold }}
                  />

                  <div 
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-400 group-hover:text-[#D8A24C]'
                    }`}
                  >
                    <Icon size={32} strokeWidth={isActive ? 2.5 : 1.5} />
                  </div>

                  <div className="text-left">
                    <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isActive ? 'text-[#D8A24C]' : 'text-slate-400'}`}>
                      {cert.type}
                    </p>
                    <span className={`font-bold leading-tight block ${isActive ? 'text-white' : 'text-[#1B355C]'}`}>
                      {cert.name}
                    </span>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
        
        {/* --- Visualizador de Documento --- */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white p-4 md:p-10 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 relative group">
            
            {/* Sello de Autenticidad (Decorativo) */}
            <div className="absolute top-12 right-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <CheckCircle size={120} style={{ color: COLORS.gold }} />
            </div>

            <div className="relative aspect-[1.414/1] w-full overflow-hidden rounded-2xl">
              {certifications.map((cert, index) => (
                <div
                  key={cert.imageUrl}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    activeIndex === index 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                  }`}
                >
                  <Image
                    src={cert.imageUrl}
                    alt={`Documento oficial: ${cert.name}`}
                    fill
                    className="object-contain shadow-inner"
                    priority
                  />
                </div>
              ))}
            </div>

            {/* Pie del visualizador */}
            <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <div>
                <p className="text-[#1B355C] font-black text-sm uppercase tracking-wider">Documento Oficial</p>
                <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Emitido bajo normativa del MINEDU</p>
              </div>
              <div 
                className="px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em]"
                style={{ backgroundColor: `${COLORS.gold}15`, color: COLORS.gold }}
              >
                Válido en todo el Perú
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}