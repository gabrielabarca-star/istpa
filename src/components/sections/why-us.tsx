"use client";

import Image from 'next/image';
import { Award, Briefcase, Users, HeartHandshake, Wallet, ScrollText } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  { icon: Award, title: "Calidad Educativa", description: "Docentes altamente capacitados y con experiencia profesional." },
  { icon: Briefcase, title: "Laboratorios modernos", description: "Laboratorios equipados con herramientas modernas de última generación." },
  { icon: Users, title: "Trayectoria", description: "Instituto con trayectoria y reconocimiento de 33 años en la región." },
  { icon: HeartHandshake, title: "Triunfa en 3 Años", description: "Termina tu carrera técnica profesional con éxito en solo 3 años." },
  { icon: Wallet, title: "Pensiones y Becas", description: "Pensiones accesibles y programas de becas al mérito académico." },
  { icon: ScrollText, title: "Título Oficial", description: "Título a Nombre de la Nación válido y reconocido en todo el país." },
];

const colors = {
  primary: '#1B355C', // Azul Institucional
  accent: '#C8663E',  // Naranja Institucional
};

const BenefitCard = ({ benefit, align }: { benefit: Benefit, align: 'left' | 'right' }) => {
  const Icon = benefit.icon;
  return (
    <div className={`group relative p-6 rounded-3xl transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-${colors.primary}/10 border border-transparent hover:border-slate-100 flex flex-col ${align === 'right' ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} items-center text-center`}>
      <div className="mb-4 relative">
        <div className="absolute inset-0 bg-slate-200 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20"></div>
        <div className="relative bg-white shadow-sm p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500">
          <Icon className="h-8 w-8" style={{ color: colors.accent }} />
        </div>
      </div>
      <h3 className="text-xl font-black mb-2" style={{ color: colors.primary }}>{benefit.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed font-medium">
        {benefit.description}
      </p>
    </div>
  );
};

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#F8FAFC] py-24 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <span className="text-[#C8663E] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Diferenciales</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter" style={{ color: colors.primary }}>
            ¿Por qué elegir <span className="text-[#C8663E]">ISTPA</span>?
          </h2>
          <div className="w-24 h-1.5 bg-[#1B355C] mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Columna Izquierda */}
          <div className="space-y-4 md:space-y-8 order-2 lg:order-1">
            <BenefitCard benefit={benefits[0]} align="left" />
            <BenefitCard benefit={benefits[1]} align="left" />
            <BenefitCard benefit={benefits[4]} align="left" />
          </div>

          {/* Columna Central - Imagen Estilizada */}
          <div className="order-1 lg:order-2 relative group flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#1B355C] to-[#C8663E] rounded-[4rem] rotate-3 scale-95 opacity-10 group-hover:rotate-6 transition-transform duration-700"></div>
            <div className="relative rounded-[3.5rem] overflow-hidden border-[12px] border-white shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <Image
                src="/img/poeque_elegiristpa.png"
                alt="Excelencia académica ISTPA"
                width={400}
                height={600}
                className="object-cover"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B355C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Badge Flotante */}
            <div className="absolute -bottom-6 bg-white px-8 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
              <span className="text-3xl">🚀</span>
              <div className="leading-none">
                <p className="text-[10px] font-black uppercase text-slate-400">Garantía</p>
                <p className="font-black text-[#1B355C]">Éxito Laboral</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha */}
          <div className="space-y-4 md:space-y-8 order-3">
            <BenefitCard benefit={benefits[2]} align="right" />
            <BenefitCard benefit={benefits[3]} align="right" />
            <BenefitCard benefit={benefits[5]} align="right" />
          </div>

        </div>
      </div>
    </section>
  );
}