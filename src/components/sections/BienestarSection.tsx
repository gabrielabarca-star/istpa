// components/BienestarSection.tsx

import React from 'react';
import Image from 'next/image';

export default function BienestarSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Columna Izquierda: Texto */}
          <div className="lg:col-span-7">
            <div className="bg-sky-50 rounded-3xl p-8 lg:p-12">
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                Es el área que acompaña al estudiante en su desarrollo personal y profesional. 
              Brindamos soporte para su bienestar integral y, al mismo tiempo, 
              las herramientas necesarias para su exitosa inserción en el mercado laboral 
              a través de convenios y una bolsa de trabajo activa.
                </p>
                
              </div>
            </div>
          </div>

          {/* Columna Derecha: Imagen */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                // ¡Recuerda cambiar esta ruta por la de tu imagen!
                src="/img/bienestar.png" 
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