"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, GraduationCap } from 'lucide-react';

const colors = {
  primary: '#1B355C',
  accent: '#C8663E',
  background: '#F8FAFC',
};

export default function AdmissionModern() {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: colors.background }}>
      
      {/* Decoración de Fondo (Acentos Geométricos) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1B355C]/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#C8663E]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Columna de Imagen: Formato Pop-out con Frame */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1B355C] to-[#C8663E] rounded-[3rem] rotate-3 scale-95 opacity-10 group-hover:rotate-6 transition-transform duration-700"></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden bg-white shadow-2xl border-8 border-white">
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                <Image
                  src="/img/admision.png"
                  alt="Proceso de Admisión ISTPA"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                {/* Badge Flotante */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="bg-[#C8663E] p-2 rounded-lg text-white">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-tighter text-slate-400 leading-none">Inicia tu futuro</p>
                    <p className="font-bold text-[#1B355C]">Admisión 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna de Contenido */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="text-[#C8663E] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Proceso Abierto</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8" style={{ color: colors.primary }}>
              ADMISIÓN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B355C] to-[#4A90E2]">ORDINARIA</span>
            </h2>
            
            <p className="text-xl text-slate-500 font-medium mb-10 max-w-xl">
              Diseñado para estudiantes que culminaron su educación secundaria y buscan una formación técnica de excelencia en solo 3 años.
            </p>

            {/* Lista de beneficios/requisitos rápidos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {[
                "Certificado de estudios",
                "DNI vigente",
                "Vaucher de pago",
                "Fotos tamaño carné"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group hover:border-[#C8663E] transition-colors">
                  <CheckCircle2 className="text-[#C8663E] w-5 h-5" />
                  <span className="text-slate-700 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <Link href="/admision" className="w-full sm:w-auto">
                <button 
                  className="group w-full flex items-center justify-center gap-4 text-white font-black py-5 px-10 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                  style={{ backgroundColor: colors.accent }}
                >
                  <span>POSTULAR AHORA</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </button>
              </Link>
              
              <Link href="https://wa.me/51912503627" className="text-[#1B355C] font-bold flex items-center gap-2 hover:opacity-70 transition-opacity">
                <span>¿Tienes dudas? Habla con un asesor</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}