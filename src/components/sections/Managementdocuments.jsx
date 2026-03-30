"use client";

import React from 'react';
import { 
  FileText, 
  Users, 
  CalendarDays, 
  School, 
  Layers, 
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';

// --- Paleta Institucional Premium ---
const COLORS = {
  primary: "#1B355C", // Azul Profundo
  gold: "#D8A24C",    // Dorado
  accent: "#C8663E",  // Terracota
  bgLight: "#F8FAFC"  // Fondo neutro
};

const documents = [
  {
    title: 'Manual de Perfil de Puestos',
    description: 'Describe las funciones, responsabilidades y requisitos de los diferentes roles institucionales.',
    href: '/docs/MANUAL DE PERFIL DE PUESTOS.pdf',
    icon: Users,
  },
  {
    title: 'Reglamento Interno',
    description: 'Normas y disposiciones que regulan la convivencia y las relaciones laborales académicas.',
    href: '/docs/REGLAMENTO INTERNO.pdf',
    icon: FileText,
  },
  {
    title: 'Plan Anual de Trabajo',
    description: 'Instrumento de gestión a corto plazo que operativiza los objetivos estratégicos anuales.',
    href: '/docs/PLAN ANUAL DE TRABAJO.pdf',
    icon: CalendarDays,
  },
  {
    title: 'Proyecto Educativo Institucional',
    description: 'Nuestra brújula estratégica que orienta el proceso educativo a mediano y largo plazo.',
    href: '/docs/PROYECTO EDUCATIVO INSTITUCIONAL.pdf',
    icon: School,
  },
  {
    title: 'Manual de Procesos Académicos',
    description: 'Establece los flujos y lineamientos detallados para el desarrollo de la actividad educativa.',
    href: '/docs/MANUAL DE PROCESOS ACADEMICOS.pdf',
    icon: Layers,
  },
];

export default function ManagementDocuments() {
  return (
    <section className="w-full py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: COLORS.bgLight }}>
      
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1B355C]/5 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C8663E]/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Encabezado Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl text-left">
            <span className="font-black uppercase tracking-[0.4em] text-[10px] mb-4 block" style={{ color: COLORS.accent }}>
              Transparencia Institucional
            </span>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.85] uppercase" style={{ color: COLORS.primary }}>
              Documentos de <br />
              <span className="text-slate-300 italic">Gestión</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-slate-500 font-medium max-w-sm ml-auto">
              Instrumentos normativos que garantizan la calidad y formalidad de nuestros procesos académicos y administrativos.
            </p>
          </div>
        </div>

        {/* Grid de Documentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {documents.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <a 
                key={index} 
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col h-full bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 overflow-hidden"
              >
                {/* Indicador Dorado Superior */}
                <div className="absolute top-0 left-0 w-full h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: COLORS.gold }} />

                {/* Icono con Contenedor Estilizado */}
                <div className="relative mb-10 inline-flex">
                   <div 
                     className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[10deg] shadow-lg group-hover:shadow-indigo-900/10"
                     style={{ backgroundColor: `${COLORS.primary}08`, color: COLORS.primary }}
                   >
                     <Icon size={32} strokeWidth={1.5} />
                   </div>
                   {/* Badge de PDF flotante */}
                   <div className="absolute -top-2 -right-2 bg-white rounded-lg px-2 py-1 shadow-md border border-slate-50 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-[10px] font-black text-red-500 tracking-tighter uppercase">PDF</span>
                   </div>
                </div>

                {/* Contenido */}
                <div className="flex-grow">
                  <h3 className="text-xl font-black mb-4 leading-tight group-hover:text-[#1B355C] transition-colors" style={{ color: COLORS.primary }}>
                    {doc.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {doc.description}
                  </p>
                </div>

                {/* Footer de Tarjeta */}
                <div className="mt-12 flex items-center justify-between pt-6 border-t border-slate-50">
                   <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.gold }} />
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Acceso Libre</span>
                   </div>
                   
                   <div 
                     className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                     style={{ backgroundColor: `${COLORS.accent}10`, color: COLORS.accent }}
                   >
                     <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>

                {/* Marca de Agua de Fondo */}
                <Icon 
                  size={120} 
                  className="absolute -bottom-10 -right-10 opacity-[0.02] -rotate-12 group-hover:scale-110 transition-transform duration-700" 
                  style={{ color: COLORS.primary }}
                />
              </a>
            );
          })}
        </div>

        {/* Mensaje de Transparencia Final */}
        <div className="mt-20 text-center">
           <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.gold }} />
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                Última actualización: Periodo Académico 2024-II
              </p>
           </div>
        </div>

      </div>
    </section>
  );
}