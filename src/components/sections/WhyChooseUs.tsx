"use client";

import React from 'react';
import { Users, Clock, GraduationCap, Microscope, CheckCircle2, ArrowUpRight } from 'lucide-react';

const features = [
  {
    title: 'Docentes Especializados',
    description: 'Expertos activos en el campo laboral que transforman la teoría en experiencia real.',
    icon: Users,
    tag: 'Mentoría'
  },
  {
    title: 'Horarios Flexibles',
    description: 'Flexibilidad total con turnos mañana, tarde y noche para que nada detenga tu progreso.',
    icon: Clock,
    tag: 'Accesibilidad'
  },
  {
    title: 'Carreras de 3 años',
    description: 'Programas intensivos diseñados para una inserción laboral rápida y efectiva.',
    icon: GraduationCap,
    tag: 'Eficacia'
  },
  {
    title: 'Laboratorios Top',
    description: 'Tecnología de punta y entornos prácticos que simulan desafíos reales de la industria.',
    icon: Microscope,
    tag: 'Tecnología'
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-24 bg-[#F8FAFC] relative overflow-hidden group/section">
      {/* Elementos cinéticos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-[#C8663E]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[5%] w-[30rem] h-[30rem] bg-[#1B355C]/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabecera con Layout "Split" */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[#C8663E]" />
              <span className="text-[#C8663E] font-black uppercase tracking-[0.4em] text-[10px]">
                Ventaja Competitiva
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#1B355C] tracking-tighter leading-[0.9]">
              ¿POR QUÉ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B355C] to-slate-400">
                ELEGIRNOS?
              </span>
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-slate-500 font-medium text-lg max-w-md lg:ml-auto lg:text-right leading-snug">
              Unimos la excelencia académica con la tecnología para formar los líderes técnicos que la región necesita.
            </p>
          </div>
        </div>

        {/* Grid de Tarjetas con Hover de Inversión */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-[3rem] p-10 shadow-[0_20px_50px_-20px_rgba(27,53,92,0.1)] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(27,53,92,0.2)] overflow-hidden flex flex-col h-full border border-slate-50"
            >
              {/* Capa de color que sube en hover */}
              <div className="absolute inset-0 bg-[#1B355C] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icono animado */}
                <div className="w-16 h-16 rounded-[1.5rem] bg-slate-50 flex items-center justify-center mb-10 transition-all duration-500 group-hover:bg-[#C8663E] group-hover:rotate-[15deg] group-hover:scale-110">
                  <feature.icon size={32} className="text-[#1B355C] transition-colors duration-500 group-hover:text-white" />
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#C8663E] group-hover:text-white/60 transition-colors">
                    {feature.tag}
                  </span>
                  <h3 className="text-2xl font-black text-[#1B355C] tracking-tighter mt-1 group-hover:text-white transition-colors duration-500">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-slate-500 font-medium leading-relaxed group-hover:text-slate-300 transition-colors duration-500 flex-grow">
                  {feature.description}
                </p>

                {/* Footer de la tarjeta */}
                <div className="mt-10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#C8663E]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">Certificado</span>
                  </div>
                  <ArrowUpRight size={20} className="text-[#C8663E]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Sutil al final */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 py-8 border-y border-slate-200/60">
           <div className="flex -space-x-3">
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
              ))}
           </div>
           <p className="text-[#1B355C] font-bold text-sm tracking-tight text-center md:text-left">
             Únete a los más de <span className="text-[#C8663E] font-black italic underline decoration-2 underline-offset-4">500 alumnos</span> que ya transformaron su vida.
           </p>
        </div>
      </div>
    </section>
  );
}