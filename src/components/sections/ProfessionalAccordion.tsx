"use client";

import { useState } from 'react';
import { Plus, Minus, ShieldCheck, Star, Users2 } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
  icon: React.ComponentType<{ className?: string }>;
}

const accordionData: AccordionItem[] = [
  {
    title: 'Trayectoria y prestigio',
    content: 'Con 33 años de experiencia, somos una institución líder y reconocida en la formación de profesionales en la región, garantizando una educación de calidad que nos respalda.',
    icon: ShieldCheck,
  },
  {
    title: 'Calidad Educativa Superior',
    content: 'Buscamos brindar una experiencia excepcional a través de nuestras carreras técnicas profesionales: Contabilidad, Enfermería y Farmacia, con mallas curriculares actualizadas.',
    icon: Star,
  },
  {
    title: 'Excelente Plana Docente',
    content: 'Contamos con un equipo de especialistas altamente calificados y con amplia experiencia real en sus campos, comprometidos con el éxito de cada estudiante.',
    icon: Users2,
  },
];

const colors = {
  primary: '#1B355C',
  accent: '#C8663E',
  background: '#F8FAFC',
};

export default function ProfessionalAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // El primero abierto por defecto para mejor UX

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 relative overflow-hidden" style={{ backgroundColor: colors.background }}>
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1B355C]/5 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Columna de Texto Fijo */}
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <span className="text-[#C8663E] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Nuestros Pilares</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-8" style={{ color: colors.primary }}>
              FORMANDO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B355C] to-[#C8663E]">LÍDERES</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              Descubre por qué somos la institución referente en la región para tu formación profesional técnica.
            </p>
            
            {/* Badge de Años */}
            <div className="mt-10 inline-flex items-center gap-4 bg-white p-2 pr-6 rounded-2xl shadow-xl border border-slate-100">
              <div className="bg-[#C8663E] text-white font-black text-2xl w-14 h-14 rounded-xl flex items-center justify-center">33</div>
              <div>
                <p className="text-[#1B355C] font-black text-sm leading-none">Años de</p>
                <p className="text-slate-400 font-bold text-xs uppercase tracking-tighter">Experiencia Real</p>
              </div>
            </div>
          </div>

          {/* Columna de Acordeones */}
          <div className="w-full lg:w-3/5 space-y-4">
            {accordionData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`transition-all duration-500 rounded-[2rem] border overflow-hidden ${
                    isOpen 
                      ? 'bg-white shadow-2xl border-transparent' 
                      : 'bg-white/50 border-slate-200 hover:border-[#C8663E]/50'
                  }`}
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex justify-between items-center text-left p-8 gap-4"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isOpen ? 'bg-[#1B355C] text-white rotate-[10deg]' : 'bg-slate-100 text-slate-400'
                      }`}>
                        <item.icon size={24} />
                      </div>
                      <span className={`text-xl font-black tracking-tight transition-colors duration-300 ${
                        isOpen ? 'text-[#1B355C]' : 'text-slate-600'
                      }`}>
                        {item.title}
                      </span>
                    </div>

                    <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-500 border-2 ${
                      isOpen ? 'bg-[#C8663E] border-transparent text-white rotate-180' : 'bg-white border-slate-100 text-slate-300'
                    }`}>
                      {isOpen ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
                    </div>
                  </button>
                  
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-60 opacity-100 pb-8' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 pl-24">
                      <div className="h-px bg-slate-100 w-full mb-6" />
                      <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}