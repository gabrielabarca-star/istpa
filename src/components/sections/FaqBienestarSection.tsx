// components/FaqBienestarSection.tsx

"use client"; // Marcamos como Client Component por el uso de useState

import React, { useState } from 'react';

// --- Icono de Chevron ---
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

// --- Definición de Tipos y Datos ---
type CategoryKey = 'becas' | 'Tardanzas/Inasistencias' | 'consultas' |  'topico';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: Record<CategoryKey, FAQItem[]> = {
  'becas': [
    {
      question: '¿El Instituto ofrece becas para los estudiantes?',
      answer: 'Sí. El Instituto Superior Tecnológico Privado del Altiplano ofrece becas a los estudiantes destacados y a quienes cumplan con los requisitos establecidos en el reglamento institucional'
    },
    {
      question: '¿Quiénes pueden ser beneficiarios?',
      answer: 'Los estudiantes que ocupan los tres primeros puestos en el orden de mérito académico pueden acceder a las becas establecidos por la institución, previa verificación de sus calificaciones y cumplimiento de los criterios establecidos.'
    },
    {
      question: '¿Dónde puedo obtener mayor información sobre la Beca?',
      answer: 'Puedes apersonarte a la Oficina de Bienestar y Empleabilidad, que se encuentra en el primer piso del Instituto.'
    }
   
  ],

  'Tardanzas/Inasistencias': [
    {
      question: ' ¿Qué debo hacer si tengo inasistencias  o tardanzas?',
      answer: 'Debes presentar una solicitud de justificación de inasistencias a través de la Mesa de Partes Virtual del Instituto, explicando el motivo de tu ausencia y adjuntando los documentos que sustenten tu solicitud.'
    },
    {
      question: ' ¿Dónde se presentan las justificaciones?',
      answer: 'Todas las solicitudes se realizan de manera virtual, a través de la Mesa de Partes Virtual del ISTPA, ingresando al siguiente formulario: https://docs.google.com/forms/d/e/1FAIpQLScuQF76EoTUjdYUYenorbpXLaTVzuenrywkWci9IUw3TtsiVg/viewform  seleccionando la opción otros y especificando  “Justificación de inasistencias”.'
    },
    {
      question: '  ¿Cuál es el plazo para presentar la justificación?',
      answer: 'Cuentas con un plazo máximo de quince (15) días hábiles posteriores a la inasistencia para enviar tu solicitud y los documentos respectivos.'
    },
    {
      question: '¿Qué documentos puedo adjuntar como evidencia?',
      answer: 'Depende del motivo de tu inasistencia: Por salud: recetas, certificado u constancia médica; Por trabajo: horarios, contratos o constancia laboral;Por motivos personales o familiares: documento o declaración que respalde la situación.'
    }
  ],

  'topico': [
    {
      question: '¿Qué servicios ofrece el Tópico de Salud?',
      answer: 'El Tópico ofrece atención primaria, primeros auxilios, curaciones, toma de funciones vitales y consejería en salud. No es un servicio de emergencia de alta complejidad.'
    },
    {
      question: '¿El Tópico tiene algún costo?',
      answer: 'La atención en el tópico es completamente gratuita para todos los estudiantes, docentes y personal administrativo de la institución.'
    }
  ]
};

const tabs: { key: CategoryKey; label: string }[] = [
  { key: 'becas', label: 'Programa de becas' },
  
  { key: 'Tardanzas/Inasistencias', label: 'Tardanzas/Inasistencias' },
 
  { key: 'topico', label: 'Tópico de Salud' },
];

// --- Sub-componente de Acordeón ---
interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Botón de Pregunta */}
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left p-6"
      >
        <h3 className="text-lg font-semibold text-[#002A5D] pr-4">{question}</h3>
        <div 
          className="w-8 h-8 rounded-full bg-[#002A5D] text-white flex-shrink-0 flex items-center justify-center ml-4"
        >
          <ChevronDownIcon 
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
          />
        </div>
      </button>
      
      {/* Respuesta Colapsable */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pb-6 px-6 text-slate-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

// --- Componente Principal ---
export default function FaqBienestarSection() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('becas');
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Inicia con el primero abierto

  const colors = {
    text: '#002A5D',
    accent: '#08D3C4',
  };

  const handleTabClick = (tabKey: CategoryKey) => {
    setActiveTab(tabKey);
    setOpenIndex(null); // Cierra todos los acordeones al cambiar de pestaña
  };

  const handleAccordionClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Abre uno, cierra los demás
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        
        {/* Cabecera */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.text }}>
            Preguntas Frecuentes
          </h2>
          <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
        </div>

        {/* Pestañas de Filtro */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabClick(tab.key)}
              className={`py-2.5 px-6 rounded-full font-semibold border-2 transition-colors duration-300
                ${activeTab === tab.key
                  ? 'bg-[#002A5D] text-white border-transparent'
                  : 'bg-white text-[#002A5D] border-slate-200 hover:bg-slate-50'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Lista de Acordeones */}
        <div className="mt-12 space-y-4">
          {faqData[activeTab].map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleAccordionClick(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}