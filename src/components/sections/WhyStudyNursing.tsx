// components/WhyStudyNursing.tsx

"use client"; // Este componente es interactivo (carrusel)

import React, { useRef } from 'react';
// Importaciones de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperCore } from 'swiper';
import 'swiper/css';

// --- Iconos SVG personalizados ---
const AgreementIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2H8C4.5 2 2 4.5 2 8V20C2 21.1 2.9 22 4 22H16C19.5 22 22 19.5 22 16V8C22 4.5 19.5 2 16 2Z" stroke="#0A2540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 18.5H16.5" stroke="#0A2540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const ExpertTeacherIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="#0A2540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 19C20 17.3431 16.4183 16 12 16C7.58172 16 4 17.3431 4 19" stroke="#0A2540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 8H16" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const LabsIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.56 18.24L18.24 20.56C17.47 21.33 16.2 21.33 15.43 20.56L10.43 15.56C9.66 14.79 9.66 13.52 10.43 12.75L12.75 10.43C13.52 9.66 14.79 9.66 15.56 10.43L20.56 15.43C21.33 16.2 21.33 17.47 20.56 18.24Z" stroke="#0A2540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 10L3.5 20.5" stroke="#0A2540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2H18" stroke="#0A2540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 2V6" stroke="#0A2540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 14H6" stroke="#0A2540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 12V16" stroke="#0A2540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.43 12.75L12.75 10.43" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const ChevronLeftIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
);
const ChevronRightIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
);

// --- Definición de Tipos y Datos para las tarjetas ---
interface Benefit {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const benefitsData: Benefit[] = [
  {
    title: 'Nuestros convenios',
    description: 'Accede a prácticas formativas en la RED DE SALUD PUNO, HOSPITAL MANUEL NÚÑEZ BUTRON y CLÍNICAS PUNO.',
    icon: AgreementIcon,
  },
  {
    title: 'Docentes expertos',
    description: 'Aprende de profesionales con amplia experiencia en el sector salud.',
    icon: ExpertTeacherIcon,
  },
  {
    title: 'Laboratorios equipados',
    description: 'Practica en nuestros laboratorios equipados.',
    icon: LabsIcon,
  },
];

// --- Componente Principal ---
export default function WhyStudyNursing() {
  const swiperRef = useRef<SwiperCore | null>(null);

  const colors = {
    primaryText: '#0A2540',
    accent: '#EF4444',
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* --- Cabecera de la Sección --- */}
        <div className="flex justify-between items-end mb-8">
            <div>
                <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
                    ¿Por qué estudiar la carrera
                    <br />
                    Enfermería Técnica?
                </h2>
                <div className="w-20 h-1.5 mt-4" style={{ backgroundColor: colors.accent }}></div>
            </div>
            {/* Controles de Navegación del Carrusel */}
            <div className="hidden sm:flex items-center gap-4">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-200 text-slate-500 hover:bg-slate-100 transition"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-200 text-slate-500 hover:bg-slate-100 transition"
                >
                    <ChevronRightIcon className="w-6 h-6" />
                </button>
            </div>
        </div>

        {/* --- Carrusel de Tarjetas --- */}
        <Swiper
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 }, // Muestra 2 tarjetas y media para indicar que hay más
          }}
          className="!py-4" // Añade padding para que la sombra no se corte
        >
          {benefitsData.map((benefit, index) => (
            <SwiperSlide key={index}>
              <div className="bg-slate-50 rounded-2xl p-8 h-full border border-slate-200 shadow-sm">
                <benefit.icon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold" style={{ color: colors.primaryText }}>
                  {benefit.title}
                </h3>
                <p className="text-slate-600 mt-2">
                  {benefit.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}