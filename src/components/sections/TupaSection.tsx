"use client";

import React, { useEffect, useState } from 'react';
import { FileText, ExternalLink } from 'lucide-react';

const TupaSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const colors = {
    primary: '#1B355C',   
    secondary: '#C8663E', 
    accent: '#F8FAFC',    
    text: '#334155'       
  };

  if (!isMounted) return null;

  return (
    <section className="py-20 bg-white font-sans" id="tupa">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Visualización del TUPA */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div 
                className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl opacity-10"
                style={{ backgroundColor: colors.secondary }}
              ></div>
              
              <div 
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-3xl flex flex-col items-center justify-center text-white shadow-2xl transition-all duration-500 hover:scale-105"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary} 0%, #2c5282 100%)` 
                }}
              >
                <FileText size={80} strokeWidth={1.2} className="mb-4" />
                <span className="text-4xl font-black tracking-tighter">TUPA</span>
                <div className="absolute bottom-6 w-12 h-1 bg-orange-400 rounded-full"></div>
              </div>

              <div 
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20"
                style={{ backgroundColor: colors.primary }}
              ></div>
            </div>
          </div>

          {/* Contenido */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-orange-50 text-[#C8663E] font-bold text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#C8663E]"></span>
              Transparencia Institucional
            </div>
            
            <h2 
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
              style={{ color: colors.primary }}
            >
              Texto Único de Procedimientos <span style={{ color: colors.secondary }}>Administrativos</span>
            </h2>
            
            <p className="text-lg mb-8 leading-relaxed text-slate-600">
              Accede al documento normativo que detalla todos los trámites, requisitos, costos y plazos de nuestra institución de manera clara y transparente.
            </p>

            <div className="flex justify-center md:justify-start">
              <a 
                href="https://docs.google.com/spreadsheets/d/12kIi-qw3d3SRyl1oHFSuGSZ1HGWSigJy/edit?gid=1473404564#gid=1473404564"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg no-underline"
                style={{ backgroundColor: colors.secondary }}
              >
                <span>Descargar TUPA Completo</span>
                <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="mt-10 p-5 border-l-4 rounded-r-xl bg-slate-50 border-slate-200">
              <p className="text-sm text-slate-500 italic m-0">
                "Este documento es de cumplimiento obligatorio y garantiza sus derechos como ciudadano ante nuestra administración."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TupaSection;