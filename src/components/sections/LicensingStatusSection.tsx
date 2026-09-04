"use client";

import React, { useEffect, useState } from 'react';
import { Clock, ShieldAlert, FileSearch, BellRing } from 'lucide-react';

const LicensingStatusSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const colors = {
    primary: '#1B355C',   // Azul Profundo
    secondary: '#C8663E', // Terracota / Naranja
    accent: '#D8A24C',    // Dorado
    bgLight: '#F8FAFC'
  };

  if (!isMounted) return null;

  return (
    <section className="py-20 relative overflow-hidden bg-slate-50 font-sans" id="licencia">
      {/* Elementos decorativos de fondo */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 20%, #1B355C15 0%, transparent 60%)'
        }}
      />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Card Principal de Estado */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center relative overflow-hidden">
          
          {/* Barra superior de acento */}
          <div 
            className="absolute top-0 left-0 right-0 h-2"
            style={{ backgroundColor: colors.secondary }}
          />

          {/* Badge de Estado */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-bold text-xs uppercase tracking-wider mb-8 animate-pulse">
            <Clock size={14} className="text-amber-600" />
            <span>Solicitud en Proceso de Evaluación</span>
          </div>

          {/* Contenido Central */}
          <div className="max-w-2xl mx-auto">
            <h2 
              className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight"
              style={{ color: colors.primary }}
            >
              Periodo de <span style={{ color: colors.secondary }}>Licenciamiento</span>
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              Informamos a toda nuestra comunidad educativa y público en general que la **solicitud de licenciamiento institucional se encuentra actualmente en proceso** de revisión por la autoridad competente.
            </p>

            {/* Caja destacada con la promesa de publicación */}
            <div 
              className="p-6 rounded-2xl border text-left flex flex-col md:flex-row items-start md:items-center gap-4 mb-8"
              style={{ 
                backgroundColor: `${colors.primary}05`, 
                borderColor: `${colors.primary}15` 
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white"
                style={{ backgroundColor: colors.primary }}
              >
                <FileSearch size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wide" style={{ color: colors.primary }}>
                  Publicación Oficial
                </h4>
                <p className="text-xs md:text-sm text-slate-600 mt-1 m-0">
                  Una vez que la resolución sea emitida oficialmente por el ministerio/órgano correspondiente, el documento de la **Licencia Institucional será publicado de manera inmediata** en este portal.
                </p>
              </div>
            </div>

            {/* Pie con ícono informativo */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
              <BellRing size={14} className="text-slate-400" />
              <span>Transparencia y Compromiso Académico</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LicensingStatusSection;