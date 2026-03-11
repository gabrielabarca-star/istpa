"use client";

import React from 'react';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  Timer, 
  CheckCircle2,
  Calculator
} from 'lucide-react';
import InfoForm from './InfoForm'; 

const COLORS = {
  primary: "#1B355C", // Azul Profundo
  gold: "#D8A24C",    // Dorado
  accent: "#C8663E"   // Terracota
};

export default function AccountingCareer() {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* --- LADO IZQUIERDO: CONTENIDO --- */}
          <div className="lg:col-span-7">
            {/* Badge Superior */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8663E]/10 mb-6">
              <Calculator size={14} className="text-[#C8663E]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#C8663E]">
                Carrera Profesional
              </span>
            </div>

            {/* Título Principal Estilo Nursing */}
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.8] mb-8">
              <span style={{ color: COLORS.primary }}>CONTABILIDAD</span> <br />
              
            </h1>

            {/* Descripción */}
            <p className="text-slate-500 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Te formamos como el pilar estratégico de las finanzas. Domina la gestión tributaria y auditoría con una metodología <span className="font-black text-[#1B355C]">80% práctica</span> en laboratorios contables.
            </p>

            {/* Lista de Beneficios con Checkmarks */}
            <div className="space-y-4 mb-12">
              {[
                "Certificaciones modulares progresivas",
                "Manejo de software contable (SIAF, SISCONT)",
                "Convenios con estudios contables y bancos",
                "Bolsa de trabajo con alta demanda laboral"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-[#C8663E]" />
                  <span className="text-slate-700 font-bold">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Grid de Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'INICIO', value: 'Abril 2026', icon: Calendar },
                { label: 'TURNOS', value: 'Mañana / Tarde / Noche', icon: Clock },
                { label: 'MODALIDAD', value: '100% Presencial', icon: BookOpen },
                { label: 'DURACIÓN', value: '3 años (6 Ciclos)', icon: Timer },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col gap-3">
                  <item.icon size={20} className="text-blue-500" />
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-[13px] font-black leading-tight text-[#1B355C]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- LADO DERECHO: FORMULARIO --- */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-slate-200/50 rounded-[4rem] blur-3xl -z-10"></div>
            
            <div className="bg-white rounded-[3.5rem] shadow-2xl p-4 md:p-6 border border-slate-100">
              
              

              {/* Contenedor del Formulario */}
              <div className="px-4 pb-8">
                <InfoForm />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}