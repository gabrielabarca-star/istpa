"use client"; // Necesario para que el componente sea interactivo en Next.js App Router

import { useState } from 'react';
import Image from 'next/image';

// --- Definición de tipos con TypeScript ---
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  imageSrc: string;
}

// --- Datos de la línea de tiempo (puedes añadir más años aquí) ---
const timelineData: TimelineEvent[] = [
  { year: '1992', title: 'Funcionamiento', description: 'El Gobierno Regional José Carlos Mariátegui autorizo el funcionamiento del instituto con el nombre de INSTITUTO SUPERIOR TECNOLÓGICO NO ESTATAL DEL ALTIPLANO PUNO.', imageSrc: '/placeholder-image.png' },
  { year: '1993', title: 'Reconocimiento', description: 'El ministerio de Educación reconocio a la Asociación de educativa cultural y de investigación Carlos Rubina Burgos como promotara del Instituto  .', imageSrc: '/placeholder-image.png' },
  { year: '1994', title: 'Funcionamiento oficial', description: 'El Ministerio de Educación autorizó el funcionamiento del INSTITUTO SUPERIOR TECNOLÓGICO PRIVADO DEL ALTIPLANO PUNO, con la Resolución: R.M. Nº0568-94-ED.', imageSrc: '/placeholder-image.png' },
  {
    year: '1995',
    title: 'Creacion de Carreras',
    description: 'El Ministerio de Educación autorizó la creación de nuevas carreras profesionales en el instituto.',
    imageSrc: '/history-2008.jpg', // Usa la imagen que proporcionaste
  },
  { year: '1996', title: 'Entrega de Titulos', description: 'El Ministerio de Educación autorizó al instituto para otorgar los títulos de Profesional Técnico en Técnica en Farmacia y Profesional Técnico en Técnica en Laboratorio Clínico.', imageSrc: '/placeholder-image.png' },
  { year: '2005', title: 'Revalidaron', description: 'Se obtuvo la revalidación de las carreras profesionales del instituto.', imageSrc: '/placeholder-image.png' },
  { year: '2011', title: 'Nombre', description: 'El Instituto adoptó su nueva denominación como Instituto de Educación Superior Tecnológico Privado del Altiplano.', imageSrc: '/placeholder-image.png' },
  { year: '2024', title: 'Alianza Estratégica', description: 'Descripción del evento de 2016.', imageSrc: '/placeholder-image.png' },
 
];

export default function HistoriaTimeline() {
  const [selectedYear, setSelectedYear] = useState<string>('2024');

  const selectedEvent = timelineData.find(event => event.year === selectedYear);

  // Colores extraídos de la imagen
  const colors = {
    background: '#F8FAFC', // Un gris muy claro, casi blanco
    textMuted: '#94A3B8',   // Gris para los años inactivos
    textPrimary: '#1E293B', // Azul oscuro/casi negro para texto principal
    accent: '#08D3C4',      // El color turquesa/verde azulado
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center font-sans p-4 sm:p-8"
      style={{ backgroundColor: colors.background }}
    >
      {/* --- Contenedor con el fondo curvo --- */}
      <div className="w-full max-w-6xl mx-auto bg-white rounded-t-[100px] sm:rounded-t-[200px] pt-12">

        {/* --- Cabecera --- */}
        <div className="text-center mb-12">
          <p className="text-lg" style={{ color: colors.textPrimary }}>Nuestra</p>
          <h1 className="text-5xl font-bold" style={{ color: colors.textPrimary }}>historia</h1>
          <div className="w-16 h-1 mx-auto mt-2" style={{ backgroundColor: colors.accent }}></div>
        </div>

        {/* --- Eje de la Línea de Tiempo --- */}
        <div className="relative w-full px-4 sm:px-10">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
          <div className="relative flex justify-between items-center">
            {timelineData.map(({ year }) => (
              <div
                key={year}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => setSelectedYear(year)}
              >
                {/* --- Punto de selección grande y resaltado (visible solo si está activo) --- */}
                {selectedYear === year && (
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full opacity-20"
                    style={{ backgroundColor: colors.accent }}
                  ></div>
                )}

                {/* --- Punto central de la línea de tiempo --- */}
                <div
                  className={`w-3 h-3 rounded-full transition-colors duration-300 z-10 ${
                    selectedYear === year ? 'bg-white border-2' : 'bg-gray-200 group-hover:bg-gray-300'
                  }`}
                  style={{ borderColor: selectedYear === year ? colors.accent : 'transparent' }}
                ></div>

                {/* --- Año --- */}
                <span
                  className={`absolute -top-7 text-sm sm:text-base font-semibold transition-colors duration-300 ${
                    selectedYear === year ? 'text-xl' : ''
                  }`}
                  style={{ color: selectedYear === year ? colors.textPrimary : colors.textMuted }}
                >
                  {year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Contenido del Año Seleccionado --- */}
        {selectedEvent && (
          <div className="mt-20 px-4 sm:px-12 pb-12 transition-opacity duration-500">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              {/* --- Columna de Texto --- */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-8xl font-bold" style={{ color: colors.accent }}>{selectedEvent.year}</h2>
                <h3 className="text-2xl font-bold mt-4 mb-2" style={{ color: colors.textPrimary }}>
                  {selectedEvent.title}
                </h3>
                <p className="text-base" style={{ color: colors.textMuted }}>
                  {selectedEvent.description}
                </p>
              </div>

              {/* --- Columna de Imagen --- */}
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <div className="relative aspect-[4/3] rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src={selectedEvent.imageSrc}
                    alt={`Evento del año ${selectedEvent.year}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}