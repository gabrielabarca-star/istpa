"use client";

import React, { useState } from 'react';

// --- Icono de Chevron ---
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

// --- Definición de Tipos y Datos ---
type CategoryKey = 'becas' | 'Tardanzas/Inasistencias' | 'topico';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: Record<CategoryKey, FAQItem[]> = {
  'becas': [
    {
      question: '¿El Instituto ofrece becas para los estudiantes?',
      answer: 'Sí. El Instituto Superior Tecnológico Privado del Altiplano ofrece becas a los estudiantes destacados y a quienes cumplan con los requisitos establecidos en el reglamento institucional.'
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
      question: '¿Qué debo hacer si tengo inasistencias o tardanzas?',
      answer: 'Debes presentar una solicitud de justificación de inasistencias a través de la Mesa de Partes Virtual del Instituto, explicando el motivo de tu ausencia y adjuntando los documentos que sustenten tu solicitud.'
    },
    {
      question: '¿Dónde se presentan las justificaciones?',
      answer: 'Todas las solicitudes se realizan de manera virtual, a través de la Mesa de Partes Virtual del ISTPA, ingresando al formulario oficial de Mesa de Partes, seleccionando la opción "Otros" y especificando "Justificación de inasistencias".'
    },
    {
      question: '¿Cuál es el plazo para presentar la justificación?',
      answer: 'Cuentas con un plazo máximo de quince (15) días hábiles posteriores a la inasistencia para enviar tu solicitud y los documentos respectivos.'
    },
    {
      question: '¿Qué documentos puedo adjuntar como evidencia?',
      answer: 'Salud: recetas o certificados médicos; Trabajo: horarios o contratos laborales; Motivos personales: declaración o documento de respaldo.'
    }
  ],
  'topico': [
    {
      question: '¿Qué servicios ofrece el Tópico de Salud?',
      answer: 'Atención primaria, primeros auxilios, curaciones, toma de funciones vitales y consejería. Es un servicio de soporte para la comunidad estudiantil.'
    },
    {
      question: '¿El Tópico tiene algún costo?',
      answer: 'La atención en el tópico es completamente gratuita para todos los estudiantes, docentes y personal administrativo.'
    }
  ]
};

const tabs: { key: CategoryKey; label: string }[] = [
  { key: 'becas', label: 'Programa de Becas' },
  { key: 'Tardanzas/Inasistencias', label: 'Tardanzas e Inasistencias' },
  { key: 'topico', label: 'Tópico de Salud' },
];

const COLORS = {
  primary: '#1B355C',   // Azul
  gold: '#D8A24C',      // Dorado
  terracotta: '#C8663E', // Terracota
  bgLight: '#F8FAFC'
};

// --- Sub-componente de Acordeón ---
interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div 
      className={`group rounded-2xl transition-all duration-300 border-2 ${
        isOpen ? 'bg-white shadow-xl shadow-slate-200' : 'bg-slate-50 border-transparent hover:bg-white hover:border-slate-100'
      }`}
      style={{ borderLeftColor: isOpen ? COLORS.terracotta : 'transparent' }}
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left p-6 outline-none"
      >
        <h3 
          className={`text-lg font-bold transition-colors duration-300 ${isOpen ? '' : 'text-slate-700'}`}
          style={{ color: isOpen ? COLORS.primary : '' }}
        >
          {question}
        </h3>
        <div 
          className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center ml-4 transition-all duration-300 shadow-sm"
          style={{ 
            backgroundColor: isOpen ? COLORS.primary : 'white',
            color: isOpen ? 'white' : COLORS.primary 
          }}
        >
          <ChevronDownIcon 
            className={`w-5 h-5 transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
          />
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pb-8 px-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 mx-6">
          {answer}
        </div>
      </div>
    </div>
  );
};

// --- Componente Principal ---
export default function FaqBienestarSection() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('becas');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleTabClick = (tabKey: CategoryKey) => {
    setActiveTab(tabKey);
    setOpenIndex(0); // Abre la primera pregunta por defecto al cambiar pestaña
  };

  const handleAccordionClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="w-full py-20 lg:py-32" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        
        {/* Cabecera */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-10 rounded-full" style={{ backgroundColor: COLORS.gold }}></div>
            <span className="text-sm font-black uppercase tracking-widest" style={{ color: COLORS.gold }}>
              Centro de Ayuda
            </span>
            <div className="h-1 w-10 rounded-full" style={{ backgroundColor: COLORS.gold }}></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black" style={{ color: COLORS.primary }}>
            Preguntas Frecuentes
          </h2>
          <p className="mt-6 text-slate-500 text-lg">
            Todo lo que necesitas saber sobre los servicios de bienestar del Instituto.
          </p>
        </div>

        {/* Pestañas de Filtro */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabClick(tab.key)}
                className="relative py-3 px-8 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-sm"
                style={{ 
                  backgroundColor: isActive ? COLORS.primary : '#F1F5F9',
                  color: isActive ? '#FFFFFF' : COLORS.primary,
                  transform: isActive ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                {tab.label}
                {isActive && (
                  <div 
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                    style={{ backgroundColor: COLORS.primary }}
                  ></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Lista de Acordeones */}
        <div className="space-y-6">
          {faqData[activeTab].map((faq, index) => (
            <AccordionItem
              key={`${activeTab}-${index}`}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleAccordionClick(index)}
            />
          ))}
        </div>

        {/* Footer de sección */}
        <div className="mt-20 text-center p-10 rounded-[2rem] border-2 border-dashed border-slate-100">
  <p className="text-slate-500 font-medium">¿Aún tienes dudas?</p>
  <a 
    // Reemplaza 51900000000 por el número real (51 es el código de Perú)
    href="https://wa.me/51987845442?text=Hola,%20deseo%20realizar%20una%20consulta%20al%20área%20de%20Bienestar%20Estudiantil" 
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center gap-2 font-black text-lg underline decoration-2 transition-transform hover:scale-105"
    style={{ color: COLORS.terracotta, textUnderlineOffset: '4px' }}
  >
    {/* Icono simple de WhatsApp (opcional pero recomendado) */}
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.63 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    Contactar con Bienestar Estudiantil
  </a>
</div>

      </div>
    </section>
  );
}