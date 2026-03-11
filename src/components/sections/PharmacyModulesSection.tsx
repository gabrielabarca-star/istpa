"use client";

import React from 'react';
import { Activity, Pill, FlaskConical, Clock, ChevronRight, Award } from 'lucide-react';

const modules = [
  {
    number: "01",
    title: 'Atención de Urgencias y Administración',
    subtitle: 'OFICINA FARMACÉUTICA',
    hours: 250,
    icon: Activity,
    description: 'Capacidades críticas en primeros auxilios, atención inmediata y gestión administrativa estratégica de establecimientos farmacéuticos.',
    color: 'border-blue-100'
  },
  {
    number: "02",
    title: 'Dispensación de Medicamentos',
    subtitle: 'ATENCIÓN EN FARMACIA',
    hours: 280,
    icon: Pill,
    description: 'Dominio de técnicas de dispensación, interpretación de recetas y cumplimiento de buenas prácticas de almacenamiento (BPA).',
    color: 'border-emerald-100'
  },
  {
    number: "03",
    title: 'Elaboración y Comercialización',
    subtitle: 'PRODUCTOS FARMACÉUTICOS',
    hours: 330,
    icon: FlaskConical,
    description: 'Procesos avanzados de farmacotecnia para preparados magistrales y estrategias modernas de marketing farmacéutico.',
    color: 'border-orange-100'
  }
];

export default function PharmacyModulesSection() {
  return (
    <section className="w-full py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decoración de fondo: Números grandes difuminados */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
        <span className="absolute -top-10 -left-10 text-[20rem] font-black">01</span>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black">02</span>
        <span className="absolute -bottom-10 -right-10 text-[20rem] font-black">03</span>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Cabecera Editorial */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-px bg-[#C8663E]" />
              <span className="text-[#C8663E] font-black uppercase tracking-[0.3em] text-xs">Plan de Estudios</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#1B355C] tracking-tighter leading-[0.85]">
              MÓDULOS <br />
              <span className="text-slate-400">PROFESIONALES</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-xs text-right leading-tight">
            Nuestra currícula está diseñada para que obtengas certificaciones que aceleren tu inserción laboral.
          </p>
        </div>

        {/* Grid de Módulos Estilo "Step" */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((mod, idx) => (
            <div 
              key={idx} 
              className={`group bg-white rounded-[2.5rem] p-10 shadow-sm border-2 ${mod.color} hover:shadow-2xl hover:border-[#1B355C] transition-all duration-500 flex flex-col h-full relative overflow-hidden`}
            >
              {/* Badge de Horas Flotante */}
              <div className="absolute top-8 right-8 flex items-center gap-1.5 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 group-hover:bg-[#1B355C] group-hover:text-white transition-colors duration-500">
                <Clock size={14} className="text-[#C8663E] group-hover:text-white" />
                <span className="text-[10px] font-black uppercase tracking-widest">{mod.hours} HRS</span>
              </div>

              {/* Icono y Número */}
              <div className="mb-12">
                <div className="w-16 h-16 rounded-2xl bg-[#1B355C]/5 flex items-center justify-center text-[#1B355C] mb-6 group-hover:bg-[#C8663E] group-hover:text-white transition-all duration-500 group-hover:rotate-[10deg]">
                  <mod.icon size={32} />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-black text-[#C8663E] uppercase tracking-tighter">Módulo</span>
                  <span className="text-5xl font-black text-[#1B355C] tracking-tighter">{mod.number}</span>
                </div>
              </div>

              {/* Contenido Texto */}
              <div className="flex-grow">
                <h3 className="text-2xl font-black text-[#1B355C] mb-2 leading-none uppercase italic">
                  {mod.title}
                </h3>
                <p className="text-[10px] font-black text-[#C8663E] mb-6 tracking-[0.2em]">
                  {mod.subtitle}
                </p>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">
                  {mod.description}
                </p>
              </div>

              {/* Footer de Tarjeta */}
              <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-between group-hover:border-[#1B355C]/10 transition-colors">
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-[#C8663E]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#1B355C]">Certificación Oficial</span>
                </div>
                <ChevronRight className="text-slate-300 group-hover:text-[#C8663E] group-hover:translate-x-2 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}