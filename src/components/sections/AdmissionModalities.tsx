// components/AdmissionModalities.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- Iconos SVG personalizados ---
const InfoIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="8" r="1" fill="currentColor"/>
    </svg>
);

const ReEntryIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 7V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const TransferIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M13 9L16 12L13 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

// --- Fondos geométricos ---
const BgPattern1 = () => (
    <svg className="absolute top-0 right-0 h-full w-auto opacity-90" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,0 100,0 100,100" fill="#00529B"/>
    </svg>
);
const BgPattern2 = () => (
    <svg className="absolute top-0 right-0 h-full w-auto opacity-90" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,0 100,0 100,100" fill="#002A5D"/>
    </svg>
);
const BgPattern3 = () => (
    <svg className="absolute top-0 right-0 h-full w-auto opacity-90" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,0 100,0 100,100" fill="#08D3C4"/>
    </svg>
);

// --- Datos ---
interface ModalityCard {
  title: string;
  description: string;
  imageUrl: string;
  buttonLink: string;
  Icon: React.ComponentType<{ className?: string }>;
  BgPattern: React.ComponentType;
  buttonBgColor: string;
  buttonHoverBgColor: string;
}

const modalitiesData: ModalityCard[] = [
  {
    title: 'Admisión',
    description: 'Para todos los interesados en nuestras carreras.',
    imageUrl: '/img/admision.png',
    buttonLink: '/admision',
    Icon: InfoIcon,
    BgPattern: BgPattern1,
    buttonBgColor: 'bg-[#00529B]',
    buttonHoverBgColor: 'hover:bg-[#00417A]',
  },
  {
    title: 'Reincorporación',
    description: 'Facilidades para quienes quieren retomar sus estudios.',
    imageUrl: '/img/reincorporacion.png',
    buttonLink: '/reincorporacion',
    Icon: ReEntryIcon,
    BgPattern: BgPattern2,
    buttonBgColor: 'bg-[#002A5D]',
    buttonHoverBgColor: 'hover:bg-[#001F44]',
  },
  {
    title: 'Traslados',
    description: 'Promociones especiales para quienes vienen de otras instituciones.',
    imageUrl: '/img/traslado.png',
    buttonLink: '/traslados',
    Icon: TransferIcon,
    BgPattern: BgPattern3,
    buttonBgColor: 'bg-[#08D3C4]',
    buttonHoverBgColor: 'hover:bg-[#06A99D]',
  },
];

export default function AdmissionModalities() {
  const colors = {
    primaryText: '#002A5D',
    accent: '#08D3C4',
  };

  return (
    <section className="w-full bg-slate-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* --- Cabecera --- */}
        <div className="text-center mb-20">
          <p className="font-semibold text-lg" style={{ color: colors.accent }}>Elige una de nuestras</p>
          <h2 className="text-5xl sm:text-6xl font-extrabold" style={{ color: colors.primaryText }}>
            Modalidades de ingreso
          </h2>
          <div className="w-20 h-1.5 mt-5 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          <p className="mt-6 text-lg text-slate-600">Conviértete en un profesional de acción.</p>
        </div>

        {/* --- Grid de Tarjetas --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-10">
          {modalitiesData.map((card, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl flex flex-col relative group mt-12 h-full">
              
              {/* 1. Fondo Geométrico */}
              <div className="absolute top-0 left-0 w-full h-64 rounded-t-3xl overflow-hidden z-0">
                 <card.BgPattern />
              </div>

              {/* 2. Imagen */}
              <div className="relative h-72 -mt-20 z-10 w-full px-4 flex justify-center items-end">
                <div className="relative w-full h-full">
                  <Image
                    src={card.imageUrl}
                    alt={`Imagen para ${card.title}`}
                    layout="fill"
                    objectFit="contain" 
                    objectPosition="bottom" 
                    className="drop-shadow-2xl transition-transform duration-500 group-hover:scale-115 scale-110"
                  />
                </div>
              </div>

              {/* 3. Contenido (Texto y Botón) */}
              <div className="px-8 pb-12 pt-6 text-center flex-grow flex flex-col relative z-10">
                
                <h3 className="text-3xl font-bold mb-3" style={{ color: colors.primaryText }}>
                  {card.title}
                </h3>
                
                {/* --- CAMBIO AQUÍ: Agregado 'flex flex-col justify-center' para centrado vertical --- */}
                <p className="text-slate-500 flex-grow text-lg leading-relaxed flex flex-col justify-center">
                  {card.description}
                </p>
                
                <div className="mt-8">
                  <Link href={card.buttonLink}>
                    <button className={`group w-full flex items-center justify-center gap-3 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 ${card.buttonBgColor} ${card.buttonHoverBgColor} text-lg`}>
                      <card.Icon className="w-7 h-7 transition-transform duration-300 group-hover:rotate-12" />
                      <span>Información</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}