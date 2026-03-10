"use client";

import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Heart, 
  Activity, 
  Stethoscope, 
  BrainCircuit, 
  ShieldCheck 
} from 'lucide-react';

interface CampaignItem {
  date: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  status: string;
}

const HealthCampaigns1: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const colors = {
    primary: '#1B355C',
    secondary: '#C8663E',
  };

  const campaigns: CampaignItem[] = [
    {
      date: "Abril 22 y Octubre 22",
      title: "Campaña de Salud Integral",
      desc: "Chequeos médicos generales y preventivos para toda la comunidad académica.",
      icon: <Stethoscope size={24} />,
      status: "Programado 2026"
    },
    {
      date: "Mayo 22",
      title: "Primeros Auxilios",
      desc: "Taller práctico de respuesta inmediata ante emergencias y accidentes.",
      icon: <Activity size={24} />,
      status: "Certificado"
    },
    {
      date: "Septiembre 21",
      title: "Salud Mental y Psicológica",
      desc: "Campaña de atención psicológica junto con servicios de salud física.",
      icon: <BrainCircuit size={24} />,
      status: "Multidisciplinario"
    },
    {
      date: "Abril 06 al 20",
      title: "Campaña de Aseguramiento",
      desc: "Proceso de afiliación y actualización de seguros para estudiantes.",
      icon: <ShieldCheck size={24} />,
      status: "Bienestar Estudiantil"
    }
  ];

  if (!isMounted) return null;

  return (
    <section className="py-20 bg-slate-50 font-sans" id="campanas-salud">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Cabecera */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#1B355C]/5 text-[#1B355C] font-bold text-xs uppercase tracking-widest border border-[#1B355C]/10">
            <Heart size={14} className="text-[#C8663E]" />
            Bienestar Institucional
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B355C] mb-4">
            Campañas de <span style={{ color: colors.secondary }}>Salud 2026</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg italic">
            Visualiza nuestro cronograma de actividades para el presente año.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Cronograma (Columna Izquierda) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-[#1B355C] flex items-center gap-3 mb-8">
              <Calendar className="text-[#C8663E]" />
              Cronograma de Actividades
            </h3>
            
            {campaigns.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-white p-6 rounded-2xl shadow-sm border-l-4 border-transparent hover:border-[#1B355C] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: colors.primary }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-[#C8663E] tracking-tighter uppercase">{item.date}</span>
                      <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-bold">{item.status}</span>
                    </div>
                    <h4 className="text-xl font-bold text-[#1B355C]">{item.title}</h4>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Estático (Columna Derecha) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[320px] relative">
              
              {/* Marco de Celular */}
              <div className="bg-[#1B355C] p-3 rounded-[3rem] shadow-2xl border-4 border-slate-200 aspect-[9/16] relative overflow-hidden">
                <div className="h-full w-full relative bg-black rounded-[2.5rem] overflow-hidden">
                  <video 
                    src="/video/Campana_salud.mp4" 
                    className="h-full w-full object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#1B355C] rounded-b-2xl z-20"></div>
              </div>

              <div className="mt-8 text-center">
                <h5 className="font-bold text-[#1B355C] text-lg">Spot Institucional</h5>
                <p className="text-sm text-slate-400 mt-1">Video informativo de nuestras campañas</p>
              </div>

              {/* Decoración de fondo */}
              <div 
                className="absolute -z-10 top-20 -right-8 w-64 h-64 rounded-full opacity-10 blur-3xl"
                style={{ backgroundColor: colors.secondary }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HealthCampaigns1;