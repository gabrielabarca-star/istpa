// components/LibrarySection.tsx

import React from 'react';
import Image from 'next/image';

export default function LibrarySection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Columna Izquierda: Texto */}
          <div className="lg:col-span-7">
            <div className="bg-sky-50 rounded-3xl p-8 lg:p-12">
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Nuestra biblioteca es el centro de recursos para el aprendizaje y la
                  investigación. Ofrecemos a toda la comunidad estudiantil acceso a
                  una amplia colección de material bibliográfico físico.
                </p>
                <p>
                  Contamos con salas de estudio, computadoras con acceso a
                  internet.Nuestro personal está
                  capacitado para asistirte en la búsqueda de información y en el
                  uso de herramientas de investigación.
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Imagen */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                // Reemplaza esta ruta por la de tu imagen de biblioteca
                src="/img/library-main.jpg" 
                alt="Estudiantes en la biblioteca del instituto"
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