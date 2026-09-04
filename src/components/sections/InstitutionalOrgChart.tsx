"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const colors = {
  primary: '#1B355C', // Azul Institucional
  gold: '#D8A24C',    // Dorado Institucional
  accent: '#C8663E',  // Naranja Institucional
};

export default function InstitutionalOrgChart() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section className="w-full min-h-screen bg-slate-50 py-20 relative overflow-hidden flex flex-col justify-center">
      {/* Fondo decorativo con grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(${colors.primary} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="text-xs font-black tracking-[0.3em] text-[#D8A24C] uppercase">Estructura Organizacional</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3" style={{ color: colors.primary }}>
            Organigrama <span style={{ color: colors.accent }}>2026</span>
          </h2>
          <p className="text-xs text-slate-400 mt-2">Haz clic en la imagen para ampliar</p>
          <div className="w-20 h-2 mt-4 mx-auto rounded-full" style={{ backgroundColor: colors.accent }}></div>
        </div>

        {/* Visor de la imagen del organigrama con click para Zoom */}
        <div className="max-w-6xl mx-auto bg-white p-4 md:p-8 rounded-3xl shadow-xl border border-slate-200/80 overflow-x-auto">
          <div 
            className="min-w-[800px] w-full flex justify-center items-center cursor-zoom-in group relative"
            onClick={() => setIsZoomed(true)}
          >
            <Image
              src="/img/organigrama_1.png"
              alt="Organigrama Institucional"
              width={1400}
              height={800}
              className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
              priority
            />
            {/* Indicador flotante al pasar el cursor */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
              <span className="bg-white/90 text-[#1B355C] px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                🔍 Clic para ampliar
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal / Lightbox de Zoom a pantalla completa */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setIsZoomed(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white bg-white/20 hover:bg-white/40 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-all"
            onClick={() => setIsZoomed(false)}
          >
            ✕
          </button>
          
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center overflow-auto p-2">
            <Image
              src="/img/organigrama_1.png"
              alt="Organigrama Institucional Ampliado"
              width={2000}
              height={1200}
              className="object-contain max-h-[85vh] w-auto h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}