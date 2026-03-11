"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, HeartPulse } from 'lucide-react';

const campaignImages = [
  { src: '/img/campaña_salud1.jpeg', alt: 'Atención especializada' },
  { src: '/img/campaña_salud2.jpeg', alt: 'Estudiantes en acción' },
];

export default function HealthCampaigns() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play sutil para dinamismo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === campaignImages.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => setCurrentIndex(prev => (prev === 0 ? campaignImages.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex(prev => (prev === campaignImages.length - 1 ? 0 : prev + 1));

  return (
    <section className="w-full py-16 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex flex-col lg:flex-row bg-[#1B355C] rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-15px_rgba(27,53,92,0.3)]">
          
          {/* Elementos Decorativos de Fondo */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#C8663E] rounded-full blur-[120px]" />
          </div>

          {/* --- Columna de Texto (Izquierda) --- */}
          <div className="w-full lg:w-1/2 p-10 sm:p-16 flex flex-col justify-center relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#C8663E] rounded-lg text-white">
                <HeartPulse size={20} />
              </div>
              <span className="text-[#C8663E] font-black uppercase tracking-[0.3em] text-[10px]">
                Compromiso Social
              </span>
            </div>

            <h2 className="text-5xl sm:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              CAMPAÑAS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">DE SALUD</span>
            </h2>

            <p className="text-slate-300 text-lg font-medium leading-relaxed max-w-md mb-10">
              Transformamos la educación en acción comunitaria, brindando atención de calidad y promoviendo el bienestar integral en Puno.
            </p>

            <Link 
              href="/campana" 
              className="group flex items-center gap-4 bg-[#C8663E] text-white font-black uppercase tracking-widest text-xs py-5 px-10 rounded-2xl w-fit hover:bg-white hover:text-[#1B355C] transition-all duration-500 shadow-xl shadow-[#C8663E]/20"
            >
              Conocer Impacto
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          {/* --- Columna de Carrusel (Derecha) --- */}
          <div className="relative w-full lg:w-1/2 h-[400px] lg:h-auto overflow-hidden group/slider">
            {/* Imagen con zoom y transición suave */}
            <div className="relative w-full h-full">
              {campaignImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Overlay gradiente para integrar con el texto en móviles */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B355C] via-transparent to-transparent lg:hidden" />
                </div>
              ))}
            </div>

            {/* Controles de Navegación Flotantes */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-auto lg:right-10 lg:translate-x-0 flex items-center gap-4 z-20">
              {/* Indicadores de Progreso */}
              <div className="flex gap-2 mr-4">
                {campaignImages.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      currentIndex === index ? 'w-8 bg-[#C8663E]' : 'w-2 bg-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Botones de Flecha */}
              <div className="flex gap-2">
                <button 
                  onClick={handlePrev} 
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/10 hover:bg-[#C8663E] transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={handleNext} 
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/10 hover:bg-[#C8663E] transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Etiqueta de Imagen */}
            <div className="absolute top-10 right-10 hidden lg:block">
              <div className="bg-black/20 backdrop-blur-xl border border-white/10 p-4 rounded-2xl text-white">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Galería 2026</p>
                <p className="text-sm font-bold">Acción Institucional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}