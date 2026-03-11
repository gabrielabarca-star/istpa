// components/Testimonials2.tsx
"use client";

import Link from 'next/link';
import React from 'react';
import { ArrowUpRight, Quote, Users } from 'lucide-react';

export default function Testimonials2() {
  return (
    <section className="w-full py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#C8663E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#1B355C]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-[0_40px_100px_-20px_rgba(27,53,92,0.1)] border border-slate-100 text-center relative overflow-hidden">
          
          {/* Icono de comillas flotante */}
          <div className="absolute top-10 left-10 text-slate-50 opacity-10">
            <Quote size={120} fill="currentColor" />
          </div>

          {/* Avatar Stack - Simula rostros de egresados */}
          <div className="flex justify-center -space-x-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="w-14 h-14 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center overflow-hidden shadow-sm"
              >
                <Users size={24} className="text-slate-400" />
                {/* Aquí podrías poner imágenes reales: <Image src={`/egresado${i}.jpg`} ... /> */}
              </div>
            ))}
            <div className="w-14 h-14 rounded-full border-4 border-white bg-[#C8663E] flex items-center justify-center text-white text-xs font-black shadow-sm">
              +10
            </div>
          </div>

          {/* Contenido Principal */}
          <h2 className="text-4xl md:text-6xl font-black text-[#1B355C] tracking-tighter leading-none mb-6">
            HISTORIAS QUE <br />
            <span className="text-[#C8663E]">INSPIRAN</span> TU FUTURO
          </h2>

          <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-12">
            Nuestros egresados son el reflejo de una formación sólida. Descubre cómo el <span className="text-[#1B355C] font-bold">ISTPA</span> impulsó sus carreras hacia el éxito profesional.
          </p>

          {/* Botón de Acción Moderno */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/testimonios" className="group relative">
              <div className="absolute inset-0 bg-[#1B355C] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <button className="relative flex items-center gap-4 bg-[#1B355C] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300 hover:bg-[#C8663E] hover:-translate-y-1">
                Ver más testimonios
                <div className="bg-white/10 p-2 rounded-lg group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight size={18} />
                </div>
              </button>
            </Link>
            
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <span className="text-slate-400 font-bold text-xs uppercase tracking-tighter">
                Egresados Certificados
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}