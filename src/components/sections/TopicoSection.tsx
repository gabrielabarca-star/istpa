// components/TopicoSection.tsx
import React from 'react';
import Image from 'next/image';

const COLORS = {
  primary: '#1B355C',   // Azul
  gold: '#D8A24C',      // Dorado
  terracotta: '#C8663E', // Terracota
  bgLight: '#FDFDFD',
};

export default function TopicoSection() {
  return (
    <section className="w-full py-20 lg:py-28" style={{ backgroundColor: COLORS.bgLight }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Columna Izquierda: Contenido Institucional */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative">
              {/* Etiqueta Superior */}
              <div className="flex items-center gap-3 mb-6">
                <span 
                  className="px-4 py-1 rounded-md text-xs font-black uppercase tracking-[0.2em] text-white"
                  style={{ backgroundColor: COLORS.gold }}
                >
                  Salud y Cuidado
                </span>
                <div className="flex-grow h-px bg-slate-200"></div>
              </div>

              <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight tracking-tighter" style={{ color: COLORS.primary }}>
                SERVICIO DE <span style={{ color: COLORS.terracotta }}>TÓPICO DE SALUD</span>
              </h2>

              {/* Contenedor de Texto con estilo de Bienestar */}
              <div className="relative">
                <div 
                  className="absolute -left-6 top-0 bottom-0 w-1.5 rounded-full"
                  style={{ backgroundColor: COLORS.terracotta }}
                ></div>
                
                <div className="space-y-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium text-justify">
                  <p>
                    Ofrecemos atención de salud primaria y ambulatoria gratuita a
                    estudiantes, personal docente y administrativos, contribuyendo de esta
                    forma al bienestar físico, mental y social de nuestra comunidad estudiantil.
                  </p>
                  <p>
                    Contamos con tópicos en todas nuestras sedes, debidamente
                    implementados y equipados, en los que nuestro personal de salud ofrece
                    una atención oportuna y adecuada bajo los más altos estándares de cuidado.
                  </p>
                </div>
              </div>

              {/* Línea Decorativa Inferior */}
              <div className="mt-10 flex gap-2">
                <div className="w-16 h-2 rounded-full" style={{ backgroundColor: COLORS.primary }}></div>
                <div className="w-4 h-2 rounded-full" style={{ backgroundColor: COLORS.gold }}></div>
                <div className="w-4 h-2 rounded-full" style={{ backgroundColor: COLORS.terracotta }}></div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Imagen Estructural */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              {/* Marco decorativo (Dorado) */}
              <div 
                className="absolute -top-4 -right-4 w-full h-full rounded-[2.5rem] border-2"
                style={{ borderColor: COLORS.gold }}
              ></div>
              
              {/* Contenedor de Imagen */}
              <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/img/topico.png" 
                  alt="Personal de salud atendiendo en el tópico"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
                {/* Overlay degradado con azul institucional */}
                <div 
                  className="absolute inset-0 opacity-40"
                  style={{ background: `linear-gradient(to top, ${COLORS.primary}, transparent)` }}
                ></div>
              </div>

              {/* Detalle flotante (Azul) */}
              <div 
                className="absolute -bottom-6 -left-6 px-8 py-4 rounded-xl shadow-xl text-white font-bold"
                style={{ backgroundColor: COLORS.primary }}
              >
                Atención Gratuita
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}