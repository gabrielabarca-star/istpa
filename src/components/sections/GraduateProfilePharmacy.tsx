// components/GraduateProfilePharmacy.tsx

import React from 'react';
import Image from 'next/image';

const ImageFrame = ({ className }: { className?: string }) => ( <svg className={className} viewBox="0 0 350 480" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="342" height="472" rx="50" ry="50" stroke="#0A2540" strokeWidth="8"/></svg> );

interface ProfilePoint { text: string; borderColor: string; }
const profilePoints: ProfilePoint[] = [
  { text: 'Al culminar la carrera de Farmacia Técnica, serás un profesional indispensable en la cadena de salud, experto en medicamentos.', borderColor: '#EF4444', },
  { text: 'Dominarás la clasificación, preparación y dispensación de productos farmacéuticos, asegurando su calidad y uso correcto, y orientando a los pacientes.', borderColor: '#08D3C4', },
  { text: 'Tu perfil te permitirá gestionar inventarios en farmacias y boticas, asistir en la producción de medicamentos en laboratorios y ser un pilar en la farmacovigilancia, garantizando la seguridad y eficacia de los tratamientos.', borderColor: '#FBBF24', },
];

export default function GraduateProfilePharmacy() {
  const colors = { primaryText: '#0A2540', accent: '#EF4444', };

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative w-full max-w-sm mx-auto h-[480px]">
            <ImageFrame className="absolute top-0 left-0 w-full h-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[85%]">
              <Image src="/img/perfil-farmacia.png" alt="Egresado de la carrera de Farmacia Técnica" layout="fill" objectFit="cover" className="rounded-3xl"/>
            </div>
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>Perfil del egresado</h2>
            <div className="w-20 h-1.5 mt-4" style={{ backgroundColor: colors.accent }}></div>
            <div className="mt-8 space-y-6">
              {profilePoints.map((point, index) => (
                <div key={index} className="p-6 rounded-2xl border-2" style={{ borderColor: point.borderColor }}><p className="text-slate-600">{point.text}</p></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}