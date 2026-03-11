"use client";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperCore } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import { Building2, UserCheck, TestTube2, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';

// Paleta Institucional
const COLORS = {
  primary: "#1B355C",
  gold: "#D8A24C",
  accent: "#C8663E"
};

const benefitsData = [
  {
    title: 'Convenios Estratégicos',
    description: 'Prácticas reales en la RED DE SALUD PUNO, Hospital Manuel Núñez Butrón y las clínicas más importantes de la región.',
    icon: Building2,
  },
  {
    title: 'Docentes Expertos',
    description: 'Aprende de licenciados y especialistas activos en el sector salud con años de experiencia clínica.',
    icon: UserCheck,
  },
  {
    title: 'Laboratorios de Simulación',
    description: 'Contamos con equipos de última generación para que desarrolles tus habilidades antes de ir al hospital.',
    icon: TestTube2,
  },
  {
    title: 'Título a nombre de la Nación',
    description: 'Al culminar tus 3 años, obtienes tu título profesional técnico oficial para ejercer en todo el Perú.',
    icon: GraduationCap,
  },
];

export default function WhyStudyNursing() {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <section className="w-full bg-[#F8FAFC] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header con Controles Integrados */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-1 rounded-full" style={{ backgroundColor: COLORS.gold }} />
              <span className="font-black uppercase tracking-[0.3em] text-[10px]" style={{ color: COLORS.accent }}>
                Beneficios Exclusivos
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]" style={{ color: COLORS.primary }}>
              ¿POR QUÉ ELEGIR <br />
              <span style={{ color: COLORS.accent }}>ENFERMERÍA TÉCNICA?</span>
            </h2>
          </div>

          {/* Flechas de Navegación Custom */}
          <div className="flex gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="group w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-300"
              style={{ color: COLORS.primary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.primary;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = COLORS.primary;
              }}
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="group w-14 h-14 flex items-center justify-center rounded-2xl text-white shadow-lg transition-all duration-300 shadow-blue-900/10"
              style={{ backgroundColor: COLORS.primary }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.accent}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.primary}
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Carrusel */}
        <Swiper
          modules={[Autoplay, Navigation]}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          spaceBetween={24}
          slidesPerView={1.2}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
          className="!overflow-visible"
        >
          {benefitsData.map((benefit, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="group bg-white rounded-[2.5rem] p-8 md:p-10 h-full border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
                
                {/* Icono con Círculo de Fondo */}
                <div className="relative mb-8">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg rotate-3 group-hover:rotate-12 transition-transform duration-500"
                    style={{ backgroundColor: COLORS.gold }}
                  >
                    <benefit.icon size={30} />
                  </div>
                  <div 
                    className="absolute inset-0 w-16 h-16 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity"
                    style={{ backgroundColor: COLORS.gold }}
                  />
                </div>

                <h3 className="text-2xl font-black mb-4 tracking-tight leading-tight" style={{ color: COLORS.primary }}>
                  {benefit.title}
                </h3>
                
                <p className="text-slate-500 font-medium leading-relaxed">
                  {benefit.description}
                </p>

                <div className="mt-auto pt-8">
                  <div 
                    className="w-10 h-1 bg-slate-100 group-hover:w-full transition-all duration-700" 
                    style={{ borderRadius: '4px' }}
                    // El color cambia a accent en hover via inline style no es posible directamente, 
                    // se controla con una clase o un pequeño ajuste de CSS si es necesario.
                  />
                  {/* Div para el hover del color de marca en la línea */}
                  <style jsx>{`
                    .group:hover .w-10 {
                      background-color: ${COLORS.accent} !important;
                    }
                  `}</style>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Badge de convenios */}
        <div className="mt-16 py-6 border-y border-slate-200 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           <span className="font-black text-slate-400 text-xs tracking-widest uppercase">Nuestros Aliados:</span>
           <span className="font-bold" style={{ color: COLORS.primary }}>MINSA PUNO</span>
           <span className="font-bold" style={{ color: COLORS.primary }}>ESSALUD</span>
           <span className="font-bold" style={{ color: COLORS.primary }}>GOBIERNO REGIONAL</span>
        </div>
      </div>
    </section>
  );
}