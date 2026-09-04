"use client";

import React from 'react';
import Image from 'next/image';
import { 
  CheckCircle2, 
  AlertCircle, 
  Mail, 
  Phone, 
  FileDown, 
  GraduationCap, 
  Medal, 
  HeartHandshake 
} from 'lucide-react';

// --- Paleta Institucional Exacta ---
const COLORS = {
  primary: "#1B355C", // Azul Profundo
  gold: "#D8A24C",    // Dorado
  accent: "#C8663E",  // Terracota
  bgLight: "#F8FAFC"
};

export default function ScholarshipRequirementsSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* 1. COLUMNA IZQUIERDA: Imagen con efecto Sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 z-10">
            <div className="relative group">
              {/* Marco decorativo detrás de la imagen */}
              <div className="absolute -inset-4 border-2 border-dashed rounded-[3.5rem] opacity-20 transition-transform group-hover:rotate-3" style={{ borderColor: COLORS.gold }} />
              
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100">
                <Image
                  src="/img/beca.png"
                  alt="Estudiante solicitando información de becas"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B355C]/90 via-transparent to-transparent opacity-60" />
                
                {/* Badge Flotante sobre imagen */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl">
                    <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: COLORS.accent }}>Oportunidades</p>
                    <p className="text-lg font-black leading-tight" style={{ color: COLORS.primary }}>Impulsamos tu talento académico</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. COLUMNA DERECHA: Contenido */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Título y Texto */}
            <div className="text-center lg:text-left">
              <span className="font-black uppercase tracking-[0.4em] text-xs mb-4 block" style={{ color: COLORS.accent }}>
                Bienestar Estudiantil
              </span>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-8" style={{ color: COLORS.primary }}>
                PROGRAMA DE <br />
                <span className="text-slate-300 italic">BECAS</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
                En el <strong style={{ color: COLORS.primary }}>IES Privado del Altiplano</strong>, premiamos la excelencia y el compromiso. Ofrecemos beneficios diseñados para estudiantes destacados, servidores de la patria y casos de necesidad socioeconómica.
              </p>

              {/* BOTÓN DE DESCARGA PREMIUM */}
              <div className="mt-10">
                <a 
                  href="/docs/Resolucion_Directoral_038-2026.pdf" 
                  download
                  className="inline-flex items-center gap-6 p-1 bg-slate-50 border rounded-2xl transition-all hover:shadow-xl group"
                  style={{ borderColor: `${COLORS.primary}15` }}
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-6" style={{ backgroundColor: COLORS.primary }}>
                    <FileDown size={28} />
                  </div>
                  <div className="pr-8 py-2">
                    <span className="block text-[10px] font-black uppercase tracking-widest opacity-60">Resolución Directoral</span>
                    <span className="block text-sm font-bold" style={{ color: COLORS.primary }}>Descargar N° 038-2026-I.S.T.P.A</span>
                  </div>
                </a>
              </div>
            </div>

            {/* --- MODALIDADES --- */}
            <div>
              <h3 className="text-xl font-black uppercase tracking-widest mb-8 flex items-center gap-4" style={{ color: COLORS.primary }}>
                <span className="w-8 h-1 rounded-full" style={{ backgroundColor: COLORS.gold }} />
                Modalidades
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: GraduationCap, title: 'Rendimiento', desc: 'Primeros puestos' },
                  { icon: Medal, title: 'Licenciados', desc: 'Servicio Militar' },
                  { icon: HeartHandshake, title: 'Evaluación', desc: 'Apoyo Social' }
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-slate-100 p-8 rounded-[2rem] flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-500 group">
                    <div className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center transition-colors group-hover:text-white" style={{ backgroundColor: `${COLORS.gold}15`, color: COLORS.gold }}>
                       <style jsx>{`div:hover { background-color: ${COLORS.gold} !important; }`}</style>
                       <item.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h4 className="font-black text-sm uppercase tracking-tight" style={{ color: COLORS.primary }}>{item.title}</h4>
                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* REQUISITOS GENERALES */}
            <div className="bg-[#1B355C] rounded-[3rem] p-10 lg:p-14 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
              
              <h3 className="text-2xl font-black mb-10 flex items-center gap-4">
                <span className="w-2 h-8 rounded-full" style={{ backgroundColor: COLORS.gold }} />
                Requisitos Generales
              </h3>
              
              <ul className="space-y-8">
                {[
                  { t: 'Antigüedad mínima', d: 'Haber cursado al menos un semestre regular (postulación desde el II Semestre).' },
                  { t: 'Carga Académica', d: 'Estar matriculado con un mínimo de 12 créditos curriculares vigentes.' },
                  { t: 'Mérito Académico', d: 'Haber obtenido el 1er, 2do o 3er lugar en el ranking del ciclo previo.' }
                ].map((req, i) => (
                  <li key={i} className="flex gap-6 items-start group">
                    <div className="mt-1 w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center border-2 border-white/20 group-hover:border-white transition-colors" style={{ color: COLORS.gold }}>
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <h5 className="font-black text-xs uppercase tracking-[0.2em] mb-1" style={{ color: COLORS.gold }}>{req.t}</h5>
                      <p className="text-white/70 text-sm leading-relaxed">{req.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACTO DE BIENESTAR (Terracota Accent) */}
            <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-200/50 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-orange-900/20" style={{ backgroundColor: COLORS.accent }}>
                <AlertCircle size={32} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="font-black text-xl mb-2" style={{ color: COLORS.primary }}>¿Dudas sobre tu postulación?</h4>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">Inicia tu trámite en la Unidad de Bienestar y Empleabilidad.</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <a href="mailto:unid.bienestar.empleabilidad@iest.edu.pe" className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: COLORS.primary }}>
                    <Mail size={16} style={{ color: COLORS.gold }} /> Email Institucional
                  </a>
                  <a href="tel:987845442" className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: COLORS.primary }}>
                    <Phone size={16} style={{ color: COLORS.gold }} /> 987 845 442
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}