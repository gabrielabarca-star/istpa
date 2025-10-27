// components/ProfessionalAccordion.tsx

"use client"; // Este componente necesita ser un Client Component por su interactividad (useState)

import { useState } from 'react';

// --- Iconos para el botón de expandir/colapsar ---
const PlusIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);
const MinusIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg>
);


// --- Definición de Tipos y Datos para el Acordeón ---
interface AccordionItem {
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    title: 'Trayectoria y prestigio',
    content: 'Con 33 años de experiencia, somos una institución líder y reconocida en la formación de profesionales en la región, garantizando una educación de calidad que nos respalda.',
  },
  {
    title: 'Calidad',
    content: 'Buscamos brindar una experiencia educativa excepcional a través de nuestras 3 carreras técnicas profesionales; Contabilidad,Enfermería y Farmacia.',
  },
  {
    title: 'Excelente Plana Docente',
    content: 'Contamos con un equipo de docentes altamente calificados y con amplia experiencia en su campo, comprometidos con la formación integral de nuestros estudiantes.'
  },
  
];

// --- Componente Principal ---
export default function ProfessionalAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const colors = {
    primaryText: '#0A2540',
    accent: '#08D3C4',
    iconBorder: '#D1D5DB', // Un gris claro para el borde del icono
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* --- Cabecera de la Sección --- */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            <span style={{ color: colors.accent }}>Formando</span>
            <br />
            Profesionales en la Región
          </h2>
          <div className="w-20 h-1.5 mt-4" style={{ backgroundColor: colors.accent }}></div>
        </div>

        {/* --- Lista de Acordeones --- */}
        <div className="mt-12">
          {accordionData.map((item, index) => (
            <div key={index} className="border-b" style={{borderColor: colors.iconBorder}}>
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center text-left py-6"
              >
                <span className="text-lg font-semibold" style={{ color: colors.primaryText }}>
                  {item.title}
                </span>
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full border-2" style={{borderColor: colors.iconBorder}}>
                  {openIndex === index ? (
                    <MinusIcon className="w-5 h-5" style={{ color: colors.primaryText }} />
                  ) : (
                    <PlusIcon className="w-5 h-5" style={{ color: colors.primaryText }} />
                  )}
                </div>
              </button>
              
              {/* --- Contenido Desplegable --- */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 pb-6 pr-8">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}