"use client";

import React from 'react';
import { Award, CheckCircle2, ArrowRight } from 'lucide-react';

// --- Iconos SVG Adaptados ---
const AccountingProcessIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2H8C4.5 2 2 4.5 2 8V20C2 21.1 2.9 22 4 22H16C19.5 22 22 19.5 22 16V8C22 4.5 19.5 2 16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PublicPrivateIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 22H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2L2 7V22H22V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 22V10H14V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FinancialAnalysisIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 17V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 17V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const modules = [
  {
    number: 1,
    title: 'Procesos Contables',
    subtitle: 'Gestión y Registro',
    icon: AccountingProcessIcon,
    description: 'Organiza y controla operaciones contables básicas aplicando normas vigentes y herramientas informáticas de última generación.'
  },
  {
    number: 2,
    title: 'Contabilidad Pública y Privada',
    subtitle: 'Normativa y Aplicación',
    icon: PublicPrivateIcon,
    description: 'Gestión contable especializada para el sector público y privado, abarcando tributación, planillas y sistemas gubernamentales.'
  },
  {
    number: 3,
    title: 'Análisis Financiero',
    subtitle: 'Toma de Decisiones',
    icon: FinancialAnalysisIcon,
    description: 'Interpretación de estados financieros, auditoría y propuestas estratégicas para la optimización de recursos económicos.'
  }
];

const COLORS = {
  primary: "#1B355C",
  gold: "#D8A24C",
  accent: "#C8663E"
};

export default function AccountingModulesSection() {
  return (
    <section className="w-full py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decoración de Fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#1B355C] rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabecera Estilo Nursing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="font-black uppercase tracking-[0.3em] text-xs mb-4 block" style={{ color: COLORS.accent }}>
              Plan de Estudios Modular
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none" style={{ color: COLORS.primary }}>
              MÓDULOS <br />
              <span className="text-slate-300">PROFESIONALES</span>
            </h2>
          </div>
          <div className="hidden md:block pb-2">
            <div className="w-24 h-2 rounded-full" style={{ backgroundColor: COLORS.gold }}></div>
          </div>
        </div>

        {/* Grid de Módulos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {modules.map((mod, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white rounded-[3rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Número de Módulo Flotante */}
              <span className="absolute top-8 right-10 text-6xl font-black opacity-[0.05] group-hover:opacity-10 transition-opacity" style={{ color: COLORS.primary }}>
                0{mod.number}
              </span>

              {/* Icono */}
              <div 
                className="w-20 h-20 rounded-[2rem] flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                style={{ backgroundColor: COLORS.primary, color: 'white' }}
              >
                <mod.icon className="w-10 h-10" />
              </div>

              {/* Contenido */}
              <div className="flex-grow">
                <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: COLORS.gold }}>
                  Módulo {mod.number}
                </p>
                <h3 className="text-2xl font-black leading-tight mb-4 uppercase tracking-tighter" style={{ color: COLORS.primary }}>
                  {mod.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm mb-8 font-medium">
                  {mod.description}
                </p>
              </div>

              {/* Footer de Tarjeta Simplificado */}
              <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} style={{ color: COLORS.accent }} />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Módulo Académico</span>
                </div>
                
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#C8663E] group-hover:text-white"
                  style={{ backgroundColor: `${COLORS.accent}10`, color: COLORS.accent }}
                >
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        
        
      </div>
    </section>
  );
}