// components/TopicoSection.tsx

import React from 'react';
import Image from 'next/image';

export default function TopicoSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Columna Izquierda: Texto */}
          <div className="lg:col-span-7">
            <div className="bg-sky-50 rounded-3xl p-8 lg:p-12">
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Ofrecemos atención de salud primaria y ambulatoria gratuita a
                  estudiantes, personal docente y administrativos, contribuyendo de esta
                  forma al bienestar físico, mental y social de nuestra comunidad estudiantil.
                </p>
                <p>
                  Contamos con tópicos en todas nuestras sedes, debidamente
                  implementados y equipados, en los que nuestro personal de salud ofrece
                  una atención oportuna y adecuada.
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Imagen */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                // ¡Recuerda cambiar esta ruta por la de tu imagen!
                src="/img/topico_doctora.jpg" 
                alt="Personal de salud del tópico atendiendo a un estudiante"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}