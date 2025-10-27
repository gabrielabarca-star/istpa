// components/DegreeAndTitlePharmacy.tsx

"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const CertificateIcon = ({ className }: { className?: string }) => ( <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 22C14.7614 22 17 19.7614 17 17C17 14.2386 14.7614 12 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> );

const certifications = [
  { type: 'Grado', name: 'Bachiller Técnico en Farmacia Técnica', imageUrl: '/img/grado-farmacia.png', },
  { type: 'Título', name: 'Profesional Técnico en Farmacia', imageUrl: '/img/titulo-farmacia.png', },
];

export default function DegreeAndTitlePharmacy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const colors = { primaryText: '#0A2540', accent: '#EF4444', };

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center"><h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>Culminando la carrera obtendrás</h2><div className="w-20 h-1.5 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div></div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index}>
                <p className="text-center font-semibold mb-2" style={{ color: colors.primaryText }}>{cert.type}</p>
                <button onClick={() => setActiveIndex(index)} className={`w-full p-4 flex items-center justify-center gap-4 rounded-full border-2 transition-all duration-300 ${ isActive ? 'bg-[#0A2540] text-white border-transparent shadow-lg' : 'bg-white text-[#0A2540] border-slate-300 hover:border-[#0A2540]' }`}>
                  <CertificateIcon className="w-6 h-6" /><span className="font-semibold text-left">{cert.name}</span>
                </button>
              </div>
            );
          })}
        </div>
        <div className="mt-12 relative max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={cert.imageUrl} className={`transition-opacity duration-500 ease-in-out ${ activeIndex === index ? 'opacity-100' : 'opacity-0 absolute inset-0' }`}>
              <Image src={cert.imageUrl} alt={`Imagen del certificado: ${cert.name}`} width={1000} height={707} layout="responsive" objectFit="contain" className="mx-auto"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}