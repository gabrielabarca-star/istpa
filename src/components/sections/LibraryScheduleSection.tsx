// components/LibraryScheduleSection.tsx

import React from 'react';
import Image from 'next/image';

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export default function LibraryScheduleSection() {
  const colors = {
    text: '#002A5D',
    accent: '#08D3C4',
    background: '#F0F7FF',
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative flex items-center justify-center min-h-[400px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full" style={{ backgroundColor: colors.background }}/>
            <svg className="absolute top-0 right-0 w-2/5 h-2/5 text-sky-200/50" viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="none"><polygon points="0,0 100,0 100,100" /></svg>
            <div className="relative w-full max-w-sm">
              <Image
                // Reemplaza esta ruta por la de tu imagen de biblioteca
                src="/img/library-schedule.png" 
                alt="Horario de atención de la biblioteca"
                width={400}
                height={600}
                layout="responsive"
                objectFit="contain"
                className="drop-shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.text }}>
              Horario de Atención
            </h2>
            <div className="w-16 h-1 mt-4 mb-6" style={{ backgroundColor: colors.accent }}></div>

            <div className="mt-6 rounded-2xl p-6 lg:p-8 space-y-4" style={{ backgroundColor: colors.background }}>
              <p className="text-base text-slate-700">
                <strong>– Lunes a Viernes:</strong> 7:30 a.m. a 10:00 p.m.
              </p>
             
              
              <div className="flex items-center gap-3 pt-2">
                <MailIcon className="w-5 h-5 flex-shrink-0" style={{ color: colors.text }} />
                <span className="text-base font-medium" style={{ color: colors.text }}>
                  biblioteca@iest.edu.pe
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}