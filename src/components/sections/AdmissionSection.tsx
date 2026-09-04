"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  UserPlus, 
  Receipt, 
  FileText, 
  CreditCard, 
  Download, 
  ExternalLink,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

// --- Paleta Institucional Exacta ---
const COLORS = {
  primary: "#1B355C", // Azul Profundo
  gold: "#D8A24C",    // Dorado
  accent: "#C8663E",  // Terracota
  bgLight: "#F8FAFC"
};

export default function AdmissionSection() {
  return (
    <section className="w-full py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: COLORS.bgLight }}>
      
      {/* Decoraciones de fondo con colores de marca */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D8A24C]/5 rounded-full blur-3xl -ml-48 -mt-48" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C8663E]/5 rounded-full blur-3xl -mr-40 -mb-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Cabecera Estilo Premium --- */}
        <div className="text-center mb-20">
          <span 
            className="font-black uppercase tracking-[0.4em] text-xs mb-4 block" 
            style={{ color: COLORS.accent }}
          >
            Comienza tu Carrera
          </span>
          <h2 
            className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9]"
            style={{ color: COLORS.primary }}
          >
            PROCESO DE <br />
            <span className="text-slate-300 italic">ADMISIÓN</span>
          </h2>
          <div 
            className="w-24 h-2 mt-8 mx-auto rounded-full"
            style={{ backgroundColor: COLORS.gold }}
          />
        </div>

        {/* --- Grid de Contenido --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* 1. Visual: Imagen con Overlay y Badge */}
          <div className="lg:col-span-4 relative group">
            <div className="relative h-full min-h-[450px] rounded-[3.5rem] overflow-hidden shadow-2xl">
              <Image 
                src="/img/admision-requisitos.png"
                alt="Estudiante de admisión"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B355C]/80 via-transparent to-transparent opacity-60" />
              
              {/* Badge Flotante Estilo Institucional */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-white shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: COLORS.accent }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="font-black text-lg leading-tight" style={{ color: COLORS.primary }}>Vacantes Limitadas</p>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Semestre 2026-II</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Requisitos: Lista Detallada */}
          <div className="lg:col-span-5 bg-white rounded-[3.5rem] p-10 lg:p-14 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
            <h3 className="text-2xl font-black mb-12 flex items-center gap-4" style={{ color: COLORS.primary }}>
              <span className="w-3 h-10 rounded-full" style={{ backgroundColor: COLORS.gold }}></span>
              Requisitos Obligatorios
            </h3>
            
            <div className="space-y-10">
              {[
                { icon: UserPlus, title: 'Registro de Datos', desc: 'Inscripción personalizada en nuestras oficinas centrales.' },
                { icon: Receipt, title: 'Derecho de Admisión', desc: 'Voucher original de S/. 100.00.', extra: 'BBVA: 0011-0229-0100095691-20' },
                { icon: FileText, title: 'Certificado de Estudios', desc: 'Documento original visado o descarga digital MINEDU.', link: 'https://constancia.minedu.gob.pe/' },
                { icon: CreditCard, title: 'DNI Vigente', desc: 'Original y copia legible para el expediente.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group/item">
                  <div 
                    className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm bg-slate-50 text-slate-400 group-hover/item:text-white"
                    style={{ 
                      backgroundColor: 'var(--bg-hover)',
                    }}
                  >
                    <style jsx>{`
                      .group\/item:hover div {
                        background-color: ${COLORS.primary} !important;
                      }
                    `}</style>
                    <item.icon size={26} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-black text-sm uppercase tracking-wider mb-1" style={{ color: COLORS.primary }}>{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    {item.extra && (
                      <span className="mt-3 py-1.5 px-3 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold w-fit" style={{ color: COLORS.gold }}>
                        Cta: {item.extra}
                      </span>
                    )}
                    {item.link && (
                      <Link 
                        href={item.link} 
                        target="_blank" 
                        className="inline-flex items-center gap-1.5 mt-3 text-[10px] font-black uppercase tracking-[0.2em] transition-colors"
                        style={{ color: COLORS.accent }}
                      >
                        Portal MINEDU <ExternalLink size={12} />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Brochure: Tarjeta de Acción (Terracota) */}
          <div className="lg:col-span-3">
            <Link 
              href="https://drive.google.com/drive/folders/10hsNHsY7gZnsaS7SDjim-MctDaN6XSxX?usp=sharing"
              target="_blank"
              className="group relative h-full block"
            >
              <div 
                className="rounded-[3.5rem] p-10 h-full flex flex-col items-center text-center justify-center shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border-b-[12px]"
                style={{ backgroundColor: COLORS.primary, borderColor: COLORS.gold }}
              >
                <div 
                  className="w-24 h-24 rounded-[2.5rem] flex items-center justify-center mb-10 transition-transform duration-500 group-hover:rotate-12"
                  style={{ backgroundColor: COLORS.accent }}
                >
                  <Download className="text-white w-12 h-12" />
                </div>
                
                <h3 className="text-3xl font-black text-white mb-6 leading-tight">
                  BROCHURE <br />
                  <span style={{ color: COLORS.gold }}>2026-II</span>
                </h3>
                
                <p className="text-slate-300 text-xs font-bold leading-relaxed mb-10 uppercase tracking-widest opacity-80">
                  Plan curricular y <br /> beneficios exclusivos
                </p>

                <div 
                  className="w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all flex items-center justify-center gap-3 bg-white hover:bg-slate-100"
                  style={{ color: COLORS.primary }}
                >
                  Ver PDF <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}