"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Briefcase, 
  Building2, 
  Landmark, 
  Scale, 
  UserCheck, 
  PieChart, 
  TrendingUp,
  ShieldCheck,
  Calculator
} from 'lucide-react';

// --- Paleta Institucional ---
const COLORS = {
  primary: "#1B355C", // Azul Profundo
  gold: "#D8A24C",    // Dorado
  accent: "#C8663E"   // Terracota
};

const jobOpportunities = [
  { text: 'Estudios Contables Profesionales', icon: Briefcase, category: 'Consultoría' },
  { text: 'Bancos y Entidades Financieras', icon: Landmark, category: 'Finanzas' },
  { text: 'Gerencias de Contabilidad y Finanzas', icon: Building2, category: 'Corporativo' },
  { text: 'Consultoras y Auditoras Externas', icon: PieChart, category: 'Auditoría' },
  { text: 'Sector Público (SUNAT / MEF)', icon: ShieldCheck, category: 'Gobierno' },
  { text: 'Asesoría Tributaria Independiente', icon: Scale, category: 'Autónomo' },
  { text: 'Emprendimiento y Gestión Propia', icon: TrendingUp, category: 'Empresarial' },
  { text: 'Peritaje Contable Judicial', icon: UserCheck, category: 'Legal' },
];

export default function JobMarketAccounting() {
  return (
    <section className="w-full bg-[#FBFDFF] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* --- Columna Izquierda: Visual con Efectos de Fondo --- */}
          <div className="lg:col-span-5 relative">
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
                src="/img/campo_laboral_contabilidad.png"
                alt="Profesional de Contabilidad analizando datos"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              {/* Badge Flotante Estilo Enfermería */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white shadow-xl">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg"
                    style={{ backgroundColor: COLORS.accent }}
                  >
                    <Calculator size={24} />
                  </div>
                  <div>
                    <p className="font-black text-lg leading-tight" style={{ color: COLORS.primary }}>Especialista Pro</p>
                    <p className="text-slate-500 text-sm font-medium">Liderazgo en gestión financiera</p>
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
                Proyección de Carrera
              </span>
              <h2 
                className="text-5xl lg:text-6xl font-black tracking-tighter mt-4 leading-[0.9]"
                style={{ color: COLORS.primary }}
              >
                DOMINA EL MUNDO <br />
                <span className="text-slate-400">EMPRESARIAL</span>
              </h2>
              <div 
                className="w-20 h-1.5 mt-8 rounded-full"
                style={{ backgroundColor: COLORS.gold }}
              ></div>
              <p className="mt-8 text-slate-500 text-lg font-medium max-w-xl leading-relaxed">
                Nuestros contadores están preparados para tomar decisiones estratégicas en entornos de alta complejidad, 
                dominando la normativa tributaria y auditoría con ética y visión global.
              </p>
            </div>

            {/* Grid de Oportunidades con Hover Dinámico */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {jobOpportunities.map((job, index) => (
                <div 
                  key={index}
                  className="group relative bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-[#C8663E] transition-all duration-300"
                    >
                      <job.icon 
                        size={22} 
                        strokeWidth={2} 
                        className="transition-colors"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-sm transition-colors" style={{ color: COLORS.primary }}>
                        {job.text}
                      </p>
                      <span 
                        className="text-[9px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity"
                        style={{ color: COLORS.gold }}
                      >
                        {job.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer de Sección: Social Proof */}
            <div 
              className="mt-12 flex items-center gap-6 p-6 rounded-[2rem] border border-slate-100"
              style={{ backgroundColor: `${COLORS.primary}05` }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center shadow-sm">
                    <div 
                      className="w-full h-full rounded-full opacity-80"
                      style={{ backgroundColor: i === 1 ? COLORS.primary : i === 2 ? COLORS.gold : COLORS.accent }}
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-slate-500">
                Tu título profesional te espera. Únete a una red de <span style={{ color: COLORS.primary }} className="font-black">expertos contables</span> exitosos.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}