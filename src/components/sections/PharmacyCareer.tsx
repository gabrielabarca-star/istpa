// components/PharmacyCareer.tsx

import React from 'react';
import InfoForm from './InfoForm'; 

// --- Iconos SVG (Reutilizados) ---
const CalendarIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2V5" stroke="#0A2540" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 2V5" stroke="#0A2540" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.5 9.08984H20.5" stroke="#0A2540" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 8.5V17C21 20 19.5 22 16.5 22H7.5C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 7.5 3.5H16.5C19.5 3.5 21 5.5 21 8.5Z" stroke="#0A2540" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.9945 13.6992L10.3445 15.3492L8.5 13.5" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const ClockIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="#0A2540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 7V12L15 13.5" stroke="#0A2540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const BookIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 18.27V9.73C2 5.73 3.73 4 7.73 4H16.27C20.27 4 22 5.73 22 9.73V14.27C22 18.27 20.27 20 16.27 20H7.73C3.73 20 2 18.27 2 14.27V9.73" stroke="#0A2540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 4V20" stroke="#0A2540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

// --- Datos para las tarjetas ---
interface InfoCard { title: string; description: string; icon: React.ComponentType<{ className?: string }>; }
const infoCards: InfoCard[] = [
  { title: 'Inicio', description: 'Consultar Inicio', icon: CalendarIcon },
  { title: 'Turno', description: 'Mañana / Tarde / Noche', icon: ClockIcon },
  { title: 'Modalidad', description: 'Presencial', icon: BookIcon },
  { title: 'Duración', description: '3 años', icon: CalendarIcon },
];

export default function PharmacyCareer() {
  const colors = { primaryText: '#0A2540', accent: '#EF4444' };

  return (
    <section className="w-full bg-slate-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="w-full">
            <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
                    Farmacia Técnica
                </h1>
                <div className="w-20 h-1.5 mt-4" style={{ backgroundColor: colors.accent }}></div>
            </div>
            <div className="mt-6 text-slate-600 text-lg space-y-4">
                <p>¿Interesado en el mundo de los medicamentos y la salud?</p>
                <p>Te formamos como un profesional clave en el sistema sanitario, responsable de la dispensación y control de medicamentos. Nuestro programa combina bases de química y farmacología con práctica en laboratorios modernos.</p>
                <p><strong style={{ color: colors.primaryText }}>Con la Carrera de Farmacia Técnica</strong>, adquieres las competencias para asegurar el uso correcto de los medicamentos, con amplias oportunidades en farmacias, hospitales y la industria farmacéutica.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {infoCards.map((card, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 text-center flex flex-col items-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <card.icon className="w-12 h-12 mb-4" />
                        <h3 className="text-lg font-bold" style={{ color: colors.primaryText }}>{card.title}</h3>
                        <p className="text-slate-500 mt-1">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="w-full lg:sticky lg:top-10">
            <InfoForm />
        </div>
      </div>
    </section>
  );
}