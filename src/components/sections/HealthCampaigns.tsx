"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // 1. Importamos Link

// --- Datos para el carrusel de imágenes ---
const campaignImages = [
  { src: '/img/campaña_salud1.jpeg', alt: 'Personal de salud atendiendo a un paciente.' },
  { src: '/img/campaña_salud2.jpeg', alt: 'Estudiantes de salud en una campaña médica.' },
];

// --- Iconos SVG ---
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);
const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

export default function HealthCampaigns() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => setCurrentIndex(prev => (prev === 0 ? campaignImages.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex(prev => (prev === campaignImages.length - 1 ? 0 : prev + 1));
  
  return (
    <section className="w-full flex items-center justify-center p-4 sm:p-8 bg-slate-50">
      <div className="relative max-w-6xl w-full flex flex-col md:flex-row bg-gradient-to-r from-[#002a5d] to-[#00529b] rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Patrón de puntos decorativo */}
        <div className="absolute top-4 right-4 w-24 h-24 bg-[radial-gradient(#08d3c4_1px,transparent_1px)] [background-size:8px_8px] opacity-20"></div>
        
        {/* --- Columna de Texto (Izquierda) --- */}
        <div className="w-full md:w-5/12 p-8 sm:p-12 flex flex-col justify-center text-white z-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            <span className="text-[#08d3c4]">Campañas de</span>
            <br/>
            Salud
          </h2>
          <p className="mt-4 text-slate-300">
            Participamos activamente en la comunidad a través de campañas de salud, brindando atención y promoviendo el bienestar.
          </p>

          {/* 2. CAMBIO AQUÍ: Usamos Link en lugar de button y href en lugar de onClick */}
          <Link 
            href="/campana" 
            className="mt-8 bg-slate-900 text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center w-fit hover:bg-slate-800 transition-colors duration-300 group"
          >
            Conoce más
            <span className="ml-3 bg-white text-slate-900 rounded-full w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRightIcon className="w-4 h-4" />
            </span>
          </Link>
        </div>
        
        {/* --- Columna de Carrusel (Derecha) --- */}
        <div className="relative w-full md:w-7/12 h-80 md:h-auto">
          <div className="relative w-full h-full overflow-hidden">
            {campaignImages.map((image, index) => (
              <div
                key={index}
                className="absolute w-full h-full transition-opacity duration-700 ease-in-out"
                style={{ opacity: index === currentIndex ? 1 : 0 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="md:rounded-l-3xl"
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:bottom-6 md:right-32 flex items-center gap-3 z-20">
            {campaignImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  currentIndex === index ? 'w-6 h-2 bg-white rounded-full' : 'w-2 h-2 bg-white/50 rounded-full'
                }`}
              />
            ))}
          </div>
          
          <button onClick={handlePrev} className="absolute bottom-4 right-16 md:bottom-6 md:right-16 text-white bg-black/30 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/50 transition z-20">
            <ArrowLeftIcon className="w-5 h-5"/>
          </button>
          <button onClick={handleNext} className="absolute bottom-4 right-6 md:bottom-6 md:right-6 text-white bg-black/30 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/50 transition z-20">
            <ArrowRightIcon className="w-5 h-5"/>
          </button>
        </div>
      </div>
    </section>
  );
}