"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- Icono moderno con animación ---
const ArrowIcon = () => (
  <div className="relative overflow-hidden w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:scale-110">
    <svg className="w-5 h-5 text-white group-hover:text-[#1B355C] transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  </div>
);

interface CareerCard {
  title: string;
  imageUrl: string;
  buttonLink: string;
  gradient: string;
  shadow: string;
  tag: string;
}

const cardData: CareerCard[] = [
  {
    title: 'CONTABILIDAD',
    tag: 'Finanzas y Gestión',
    imageUrl: '/img/conta.estu.png', 
    buttonLink: '/contabilidad',
    gradient: 'from-[#C8663E] to-[#E67E22]', // Naranja institucional
    shadow: 'shadow-orange-900/20',
  },
  {
    title: 'ENFERMERÍA',
    tag: 'Salud y Cuidado',
    imageUrl: '/img/enfer.estu.png',
    buttonLink: '/enfermeria',
    gradient: 'from-[#1B355C] to-[#34495E]', // Azul institucional
    shadow: 'shadow-blue-900/20',
  },
];

export default function CareersN() {
  return (
    <section className="w-full bg-[#F8FAFC] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header con tipografía moderna --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#C8663E] font-black uppercase tracking-[0.3em] text-sm mb-4 block">Oferta Académica</span>
            <h2 className="text-5xl md:text-7xl font-black text-[#1B355C] leading-[0.9] tracking-tighter">
              ESTUDIA <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B355C] to-[#C8663E]">EN EL ALTIPLANO</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-xs text-lg leading-snug">
            Carreras profesionales de 3 años diseñadas para el mercado laboral actual.
          </p>
        </div>

        {/* --- Grid de Tarjetas --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {cardData.map((card, index) => (
            <Link 
              href={card.buttonLink} 
              key={index}
              className={`group relative flex flex-col justify-end h-[500px] md:h-[600px] rounded-[3rem] p-10 overflow-hidden transition-all duration-500 bg-gradient-to-br ${card.gradient} ${card.shadow} hover:shadow-2xl`}
            >
              {/* Texto de fondo gigante (Marca de agua) */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-10 pointer-events-none">
                 <span className="text-[12rem] font-black leading-none select-none text-white tracking-tighter">
                   {card.title.slice(0, 3)}
                 </span>
              </div>

              {/* Imagen del Estudiante con Efecto de Profundidad */}
              <div className="absolute inset-x-0 bottom-0 h-[85%] flex justify-center items-end pointer-events-none">
                <div className="relative w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-4">
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                  />
                </div>
              </div>

              {/* Contenido Superior (Tag) */}
              <div className="absolute top-10 left-10">
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                  {card.tag}
                </span>
              </div>

              {/* Contenido Inferior */}
              <div className="relative z-10 w-full flex items-end justify-between bg-gradient-to-t from-black/40 via-transparent to-transparent -mx-10 -mb-10 p-10">
                <div>
                  <h3 className="text-5xl font-black text-white tracking-tighter mb-2 italic">
                    {card.title}
                  </h3>
                  <p className="text-white/80 font-bold uppercase tracking-widest text-xs">
                    Título a Nombre de la Nación
                  </p>
                </div>
                <ArrowIcon />
              </div>

              {/* Brillo de Hover */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}