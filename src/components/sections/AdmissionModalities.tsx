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

// --- Fondos geométricos como componentes SVG ---
const BgPattern1 = () => (
    <svg className="absolute top-0 right-0 h-full w-auto" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,0 100,0 100,100" fill="#00529B"/>
    </svg>
);
const BgPattern2 = () => (
    <svg className="absolute top-0 right-0 h-full w-auto" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,0 100,0 100,100" fill="#002A5D"/>
    </svg>
);
const BgPattern3 = () => (
    <svg className="absolute top-0 right-0 h-full w-auto" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,0 100,0 100,100" fill="#08D3C4"/>
    </svg>
);

// --- Definición de Tipos y Datos para las tarjetas ---
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
    imageUrl: '/admission/admission-regular.jpg',
    buttonLink: '/admision',
    Icon: InfoIcon,
    BgPattern: BgPattern1,
    buttonBgColor: 'bg-[#00529B]',
    buttonHoverBgColor: 'hover:bg-[#00417A]',
  },
  {
    title: 'Reincorporación',
    description: 'Facilidades para quienes quieren retomar sus estudios.',
    imageUrl: '/admission/admission-reingreso.jpg',
    buttonLink: '/reingresos',
    Icon: ReEntryIcon,
    BgPattern: BgPattern2,
    buttonBgColor: 'bg-[#002A5D]',
    buttonHoverBgColor: 'hover:bg-[#001F44]',
  },
  {
    title: 'Traslados',
    description: 'Promociones especiales para quienes vienen de otras instituciones.',
    imageUrl: '/admission/admission-traslado.jpg',
    buttonLink: '/traslados',
    Icon: TransferIcon,
    BgPattern: BgPattern3,
    buttonBgColor: 'bg-[#08D3C4]',
    buttonHoverBgColor: 'hover:bg-[#06A99D]',
  },
];

// --- Componente Principal ---
export default function AdmissionModalities() {
  const colors = {
    primaryText: '#002A5D',
    accent: '#08D3C4',
  };

  return (
    <section className="w-full bg-slate-50 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* --- Cabecera de la Sección --- */}
        <div className="text-center">
          <p className="font-semibold" style={{ color: colors.accent }}>Elige una de nuestras</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            Modalidades de ingreso
          </h2>
          <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          <p className="mt-4 text-slate-600">Conviértete en un profesional de acción.</p>
        </div>

        {/* --- Grid de Tarjetas --- */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modalitiesData.map((card, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col">
              {/* Parte superior con imagen y fondo */}
              <div className="relative h-60">
                <card.BgPattern />
                <div className="absolute inset-0 p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={card.imageUrl}
                      alt={`Imagen para ${card.title}`}
                      layout="fill"
                      objectFit="contain"
                      className="drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Parte inferior con texto y botón */}
              <div className="p-8 text-center flex-grow flex flex-col">
                <h3 className="text-2xl font-bold" style={{ color: colors.primaryText }}>
                  {card.title}
                </h3>
                <p className="mt-2 text-slate-500 flex-grow">
                  {card.description}
                </p>
                <div className="mt-6">
                  <Link href={card.buttonLink}>
                    <button className={`group w-full flex items-center justify-center gap-3 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 ${card.buttonBgColor} ${card.buttonHoverBgColor}`}>
                      <card.Icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
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