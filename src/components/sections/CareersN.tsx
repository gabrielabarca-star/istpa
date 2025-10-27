// components/CareersN.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- Icono de flecha para los botones ---
const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
);

// --- Definición de Tipos y Datos para las tarjetas ---
interface CareerCard {
  title: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
  bgColor: string;
  titleColor: string;
}

const cardData: CareerCard[] = [
  {
    title: 'Contabilidad',
    imageUrl: '/img/estudiante.png', 
    buttonText: 'Conoce Nuestra Carrera',
    buttonLink: '/contabilidad',
    bgColor: 'bg-[#EF4444]', // Rojo
    titleColor: 'text-[#300404]',
  },
  {
    title: 'Farmacia',
    imageUrl: '/cards/card-cursos.png',
    buttonText: 'Conoce Nuestra Carrera',
    buttonLink: '/farmacia',
    bgColor: 'bg-[#09d3c5]', // azul
    titleColor: 'text-[#422006]',
  },
  {
    title: 'Enfermeria',
    imageUrl: '/cards/card-idiomas.png',
    buttonText: 'Conoce Nuestra Carrera',
    buttonLink: '/enfermeria',
    bgColor: 'bg-[#3B82F6]', // Azul
    titleColor: 'text-[#040f4b]',
  },
];

// --- Componente Principal ---
export default function CareersN() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* --- Cabecera de la Sección --- */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A2540]">
            Estudia en ISTPA
          </h2>
          <div className="w-16 h-1.5 mt-4 mx-auto bg-[#08D3C4]"></div>
          <p className="mt-6 text-slate-600">
            El Instituto del Altiplano te ofrece Carreras Profesionales altamente demandadas en el mercado laboral, con una duración de 3 años.
          </p>
        </div>

        {/* --- Grid de Tarjetas --- */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            // --- CORRECCIÓN AQUÍ: Se eliminó la etiqueta <a> y se pasaron sus props a <Link> ---
            <Link 
              href={card.buttonLink} 
              key={index}
              className={`group block rounded-3xl p-8 h-full flex flex-col justify-between overflow-hidden relative ${card.bgColor}`}
            >
              <div>
                <h3 className={`text-4xl font-bold ${card.titleColor}`}>{card.title}</h3>
              </div>

              {/* Contenedor de la Imagen para el efecto de zoom */}
              <div className="relative mt-4 aspect-square">
                <Image
                  src={card.imageUrl}
                  alt={`Imagen para ${card.title}`}
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              
              {/* Botón */}
              <button className="mt-6 w-full bg-white text-slate-800 font-semibold py-3 px-5 rounded-full flex items-center justify-between text-left transition-transform duration-300 group-hover:scale-105">
                <span>{card.buttonText}</span>
                <span className="bg-slate-200 text-slate-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}