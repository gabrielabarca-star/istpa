"use client";

import { useState } from 'react';
import Image from 'next/image';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  imageSrc: string;
}

const timelineData: TimelineEvent[] = [
  { year: '1992', title: 'Funcionamiento', description: 'El Gobierno Regional José Carlos Mariátegui a través de la Secretaría Regional de Asuntos Sociales, autoriza el funcionamiento del instituto con el nombre de INSTITUTO SUPERIOR TECNOLÓGICO NO ESTATAL DEL ALTIPLANO PUNO, por la Resolución: P.R. Nº096-92-RJCM/SRAS.', imageSrc: '/img/1992.png' },
  { year: '1993', title: 'Reconocimiento', description: 'Posteriormente el Ministerio de Educación aprueba el Proyecto del Instituto Superior Tecnológico No Estatal del Altiplano y reconoce a la “Asociación Educativa Cultural y de Investigación Carlos Rubina Burgos” como promotora del instituto con la Resolución: R.M. Nº044-93-ED. del 20 de enero de 1993, Ministerio de Educación.', imageSrc: '/img/1993.png' },
  { year: '1994', title: 'Funcionamiento oficial', description: 'El Ministerio de Educación regulariza las Resoluciones emitidas por los Gobiernos Regionales y autoriza el funcionamiento del INSTITUTO SUPERIOR TECNOLÓGICO PRIVADO DEL ALTIPLANO PUNO... con la Resolución: R.M. Nº0568-94-ED. del 06 de Julio de 1994.', imageSrc: '/img/1994.png' },
  { year: '1995', title: 'Creacion de Carreras', description: 'En 1995, el Ministerio de Educación, autoriza la creación de nuevos Títulos (carreras profesionales)... autorizando el funcionamiento de las carreras profesionales de Profesionales Técnico en Enfermería, Profesional Técnico en Prótesis Dental y Profesional Técnico en Contabilidad', imageSrc: '/img/1995.png' },
  { year: '1996', title: 'Entrega de Titulos', description: 'El Ministerio de Educación, autoriza al Instituto Superior Tecnológico Privado del Altiplano, para que desarrolle los estudios conducentes al otorgamiento de titulo de "Profesional Técnico en Técnica en Farmacia"... mediante la Resolución Ministerial: R.M. Nº786-ED-96.', imageSrc: '/img/1996.png' },
  { year: '2005', title: 'Revalidaron', description: 'Las carreras profesionales de Computación e Informática, Secretariado Ejecutivo, Técnica Enfermería, Técnica de Prótesis Dental, Contabilidad y Técnica en Farmacia... La Resolución Directoral: R.D. Nº410-2005-ED., resuelve REVALIDAR la autorización de funcionamiento.', imageSrc: '/img/2005.png' },
  { year: '2011', title: 'Reevalidar Nombre', description: 'Las carreras profesionales... Se obtiene la opinión técnica favorable emitida a través del informe Nº1356-2005-DINESST-UFP... resuelve REVALIDAR la autorización de funcionamiento institucional.', imageSrc: '/img/2011.png' },
];

export default function HistoriaTimeline() {
  const [selectedYear, setSelectedYear] = useState<string>('2011');
  const selectedEvent = timelineData.find(event => event.year === selectedYear);

  const colors = {
    primary: '#1B355C',   // Azul Institucional
    gold: '#D8A24C',      // Dorado Institucional
    accent: '#C8663E',    // Naranja Institucional
    bgLight: '#F1F5F9',
  };

  return (
    <section className="w-full py-20 px-4 sm:px-8 overflow-hidden" style={{ backgroundColor: colors.bgLight }}>
      <div className="max-w-7xl mx-auto">
        
        {/* --- Cabecera Moderna --- */}
        <div className="relative mb-24 text-center lg:text-left lg:flex items-end justify-between border-b pb-8 border-slate-200">
          <div>
            <span className="text-sm font-black tracking-[0.4em] uppercase opacity-50" style={{ color: colors.primary }}>Trayectoria del Altiplano</span>
            <h2 className="text-6xl sm:text-7xl font-black mt-2" style={{ color: colors.primary }}>
              Nuestra <span style={{ color: colors.accent }}>Historia</span>
            </h2>
          </div>
          <div className="hidden lg:block text-right max-w-xs text-slate-400 text-sm font-medium italic">
            "Más de tres décadas formando profesionales líderes en la región Puno."
          </div>
        </div>

        {/* --- Selector de Años (Línea de tiempo horizontal mejorada) --- */}
        <div className="relative mb-20">
          {/* Línea de fondo */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2"></div>
          
          <div className="relative flex justify-between gap-2 overflow-x-auto pb-8 scrollbar-hide no-underline">
            {timelineData.map(({ year }) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className="relative flex flex-col items-center min-w-[80px] transition-all duration-500"
              >
                {/* Año flotante */}
                <span 
                  className={`mb-4 text-lg font-black transition-all duration-300 ${
                    selectedYear === year ? 'scale-125' : 'opacity-30'
                  }`}
                  style={{ color: selectedYear === year ? colors.accent : colors.primary }}
                >
                  {year}
                </span>

                {/* Punto interactivo */}
                <div 
                  className={`w-4 h-4 rounded-full border-4 transition-all duration-500 z-10 ${
                    selectedYear === year ? 'scale-150 bg-white shadow-[0_0_15px_rgba(200,102,62,0.5)]' : 'bg-slate-200 border-transparent hover:bg-slate-400'
                  }`}
                  style={{ borderColor: selectedYear === year ? colors.accent : 'transparent' }}
                ></div>
                
                {/* Indicador de activo inferior */}
                {selectedYear === year && (
                  <div className="absolute -bottom-2 w-1 h-12 rounded-full opacity-20" style={{ backgroundColor: colors.accent }}></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* --- Área de Contenido (Tarjeta de visualización) --- */}
        <div className="relative min-h-[500px]">
          {selectedEvent && (
            <div key={selectedEvent.year} className="grid lg:grid-cols-12 gap-12 items-center animate-in fade-in slide-in-from-bottom-10 duration-700">
              
              {/* Bloque de Imagen con Decoración */}
              <div className="lg:col-span-6 relative group">
                <div className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl z-0 opacity-20" style={{ backgroundColor: colors.gold }}></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full z-0 opacity-20" style={{ backgroundColor: colors.accent }}></div>
                
                <div className="relative aspect-video lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
                  <Image
                    src={selectedEvent.imageSrc}
                    alt={selectedEvent.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay de año en imagen */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-2 rounded-2xl shadow-lg">
                    <span className="text-2xl font-black" style={{ color: colors.primary }}>{selectedEvent.year}</span>
                  </div>
                </div>
              </div>

              {/* Bloque de Texto */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-block px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest text-white" style={{ backgroundColor: colors.gold }}>
                  Hito Institucional
                </div>
                <h3 className="text-4xl sm:text-5xl font-black leading-tight" style={{ color: colors.primary }}>
                  {selectedEvent.title}
                </h3>
                <div className="w-12 h-1.5 rounded-full" style={{ backgroundColor: colors.accent }}></div>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {selectedEvent.description}
                </p>
                
                {/* Decoración discreta */}
                <div className="pt-8 flex items-center gap-4 opacity-20">
                    <div className="h-px flex-1 bg-slate-400"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}