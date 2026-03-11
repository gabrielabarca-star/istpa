"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slidesData = [
  {
    id: 1,
    src: '/img/5.jpg',
    title: 'Excelencia en Educación',
    subtitle: 'Liderando el futuro tecnológico de la región Puno.',
  },
  {
    id: 2,
    src: '/img/3.png',
    title: 'Innovación Académica',
    subtitle: 'Programas diseñados para el éxito en el mercado laboral global.',
  },
  {
    id: 3,
    src: '/img/4.png',
    title: 'Compromiso Social',
    subtitle: 'Formando profesionales con valores y ética institucional.',
  },
  {
    id: 4,
    src: '/img/2.png',
    title: 'Infraestructura Moderna',
    subtitle: 'Laboratorios de última generación para tu aprendizaje.',
  },
];

const colors = {
  primary: '#1B355C',
  accent: '#C8663E',
};

export default function CarruselN() {
  return (
    <section className="relative w-full overflow-hidden group">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade" // Cambio a efecto de desvanecimiento para mayor elegancia
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background-color: white;"></span>`;
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next-modern',
          prevEl: '.swiper-button-prev-modern',
        }}
        loop={true}
        className="w-full h-[400px] md:h-[550px] lg:h-[650px]"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Imagen con zoom sutil al estar activa */}
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-cover transition-transform duration-[10s] scale-100 group-hover:scale-110"
                priority={index === 0}
              />
              
              {/* Overlay de gradiente moderno */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B355C]/80 via-[#1B355C]/30 to-transparent" />

              {/* Contenido de Texto */}
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 lg:px-32 max-w-4xl">
                <div className="overflow-hidden">
                   <span className="inline-block text-[#C8663E] font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-4 animate-in slide-in-from-bottom duration-700">
                    IES Privado del Altiplano
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-xl font-medium">
                  {slide.subtitle}
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-[#C8663E] text-white font-bold rounded-xl shadow-lg hover:bg-[#A85532] transition-all transform hover:-translate-y-1">
                    Ver Carreras
                  </button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-xl hover:bg-white/20 transition-all">
                    Admisión 2026
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navegación Minimalista */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-20 pointer-events-none">
        <button className="swiper-button-prev-modern pointer-events-auto w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#C8663E]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button className="swiper-button-next-modern pointer-events-auto w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#C8663E]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>

      {/* Estilos adicionales para Swiper Pagination */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 40px !important;
          height: 4px !important;
          border-radius: 2px !important;
          transition: all 0.3s ease !important;
          opacity: 0.5 !important;
        }
        .swiper-pagination-bullet-active {
          width: 80px !important;
          opacity: 1 !important;
          background-color: #C8663E !important;
        }
      `}</style>
    </section>
  );
}