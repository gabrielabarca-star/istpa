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
  { year: '1992', title: 'Funcionamiento', description: 'El Gobierno Regional José Carlos Mariátegui a través de la Secretaría Regional de Asuntos Sociales, autoriza el funcionamiento del instituto con el nombre de INSTITUTO SUPERIOR TECNOLÓGICO NO ESTATAL DEL ALTIPLANO PUNO, por la Resolución: P.R. Nº096-92-RJCM/SRAS.', imageSrc: '/img/1992.png' },
  { year: '1993', title: 'Reconocimiento', description: 'Posteriormente el Ministerio de Educación aprueba el Proyecto del Instituto Superior Tecnológico No Estatal del Altiplano y reconoce a la “Asociación Educativa Cultural y de Investigación Carlos Rubina Burgos” como promotora del instituto con la Resolución: R.M. Nº044-93-ED. del 20 de enero de 1993, Ministerio de Educación.', imageSrc: '/img/1993.png' },
  { year: '1994', title: 'Funcionamiento oficial', description: 'El Ministerio de Educación regulariza las Resoluciones emitidas por los Gobiernos Regionales y autoriza el funcionamiento del INSTITUTO SUPERIOR TECNOLÓGICO PRIVADO DEL ALTIPLANO PUNO, (denominación que ha sido cambiada por el Plan de Adecuación ,  Ley Nº29394  , Ley de Institutos y Escuelas de Educación Superior por la de Institución de Educación Superior Tecnológica Privado del Altiplano), con la Resolución: R.M. Nº0568-94-ED. del 06 de Julio de 1994, autorizando el funcionamiento de las carreras cuya denominación de los Títulos;Profesional Técnico en Computación e Informática y Profesional Técnico en Secretariado Ejecutivo.', imageSrc: '/img/1994.png' },
  {
    year: '1995',
    title: 'Creacion de Carreras',
    description: 'En 1995, el Ministerio de Educación, autoriza la creación de nuevos Títulos (carreras profesionales) en el Instituto Superior Tecnológico Privado del Altiplano, con la Resolución Ministerial: R.M. Nº091-95-ED. del 06 de marzo de 1995, autorizando el funcionamiento de las carreras profesionales de Profesionales Técnico en Enfermería, Profesional Técnico en Prótesis Dental y Profesional Técnico en Contabilidad',
    imageSrc: '/img/1995.png', // Usa la imagen que proporcionaste
  },
  { year: '1996', title: 'Entrega de Titulos', description: 'El Ministerio de Educación, autoriza al Instituto Superior Tecnológico Privado del Altiplano, para que desarrolle los estudios conducentes al otorgamiento de titulo de  "Profesional Técnico en Técnica en Farmacia" ,Profesional Técnico en Técnica en Laboratorio Clínico, mediante la Resolución Ministerial: R.M. Nº786-ED-96, del 27 de agosto de 1996.', imageSrc: '/img/1996.png' },
  { year: '2005', title: 'Revalidaron', description: 'Las carreras profesionales de Computación e Informática, Secretariado Ejecutivo, Técnica Enfermería, Técnica de Prótesis Dental, Contabilidad y Técnica en Farmacia.  Se obtiene la opinión técnica favorable emitida a través del informe Nº1356-2005-DINESST-UFP, de la Unidad de Formación Profesional de la Dirección Nacional de Educación Secundaria y Superior Tecnológica.  La Resolución Directoral: R.D. Nº410-2005-ED., resuelve REVALIDAR la autorización de funcionamiento institucional del Instituto Superior Tecnológico Privado del Altiplano Puno, las carreras profesionales antes mencionadas.', imageSrc: '/img/2005.png' },
  { year: '2011', title: 'Reevalidar Nombre', description: 'las carreras profesionales de Computación e Informática, Secretariado Ejecutivo, Técnica Enfermería, Técnica de Prótesis Dental, Contabilidad y Técnica en Farmacia.  Se obtiene la opinión técnica favorable emitida a través del informe Nº1356-2005-DINESST-UFP, de la Unidad de Formación Profesional de la Dirección Nacional de Educación Secundaria y Superior Tecnológica.  La Resolución Directoral: R.D. Nº410-2005-ED., resuelve REVALIDAR la autorización de funcionamiento institucional del Instituto Superior Tecnológico Privado del Altiplano Puno, las carreras profesionales antes mencionadas.', imageSrc: '/img/2011.png' },
  
 
];

export default function HistoriaTimeline() {
  const [selectedYear, setSelectedYear] = useState<string>('2011');

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