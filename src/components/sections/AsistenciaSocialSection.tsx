// components/AsistenciaSocialSection.tsx
import React from 'react';
import Image from 'next/image';
import { 
  HeartHandshake, 
  FileText, 
  TrendingDown, 
  Network, 
  GraduationCap, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

const COLORS = {
  primary: '#1B355C',   // Azul
  gold: '#D8A24C',      // Dorado
  terracotta: '#C8663E', // Terracota
  bgLight: '#FBFBFE',
};

const funcionesSociales = [
  {
    icon: <HeartHandshake className="w-5 h-5" />,
    title: "Atención Social",
    desc: "Evaluación socioeconómica y de vulnerabilidad para estudiantes que lo requieran."
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Informes Sociales",
    desc: "Elaboración de expedientes para becas, apoyos económicos e intervenciones."
  },
  {
    icon: <TrendingDown className="w-5 h-5" />,
    title: "Prevención de Deserción",
    desc: "Seguimiento a estudiantes en riesgo por factores familiares o económicos."
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: "Atención Integral",
    desc: "Coordinación con Psicopedagogía y Unidad Académica para casos complejos."
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Apoyo a la Permanencia",
    desc: "Propuesta de medidas institucionales orientadas al bienestar estudiantil."
  },
  {
    icon: <ExternalLink className="w-5 h-5" />,
    title: "Derivaciones Externas",
    desc: "Gestión de casos hacia servicios externos especializados según la necesidad."
  }
];

export default function AsistenciaSocialSection() {
  return (
    <section className="w-full py-20 lg:py-28" style={{ backgroundColor: COLORS.bgLight }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Columna Izquierda: Imagen Estructural Vertical */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Marco decorativo de fondo */}
              <div 
                className="absolute -bottom-6 -left-6 w-full h-full rounded-[3rem] border-2 opacity-30"
                style={{ borderColor: COLORS.terracotta }}
              ></div>
              
              <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
                <Image
                  src="/img/psicopedagogia.png" // Reemplazar con tu imagen vertical
                  alt="Servicio de Asistencia Social"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{ background: `linear-gradient(to bottom, transparent, ${COLORS.primary})` }}
                ></div>
              </div>

              {/* Badge de Compromiso */}
              <div 
                className="absolute top-8 -right-8 p-6 rounded-2xl shadow-xl text-white max-w-[200px]"
                style={{ backgroundColor: COLORS.primary }}
              >
                <ShieldCheck className="w-8 h-8 mb-2 text-[#D8A24C]" />
                <p className="text-sm font-black leading-tight uppercase tracking-tighter">
                  Comprometidos con tu continuidad académica
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Contenido y Funciones */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span 
                  className="px-4 py-1 rounded-md text-xs font-black uppercase tracking-[0.2em] text-white"
                  style={{ backgroundColor: COLORS.terracotta }}
                >
                  Bienestar Estudiantil
                </span>
                <div className="flex-grow h-px bg-slate-200"></div>
              </div>

              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-[1.1] tracking-tighter" style={{ color: COLORS.primary }}>
                SERVICIO DE <br />
                <span style={{ color: COLORS.gold }}>ASISTENCIA SOCIAL</span>
              </h2>

              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                Nuestra misión es identificar y mitigar los factores sociales que puedan afectar tu desarrollo profesional, 
                asegurando la igualdad de oportunidades mediante una gestión humana y técnica.
              </p>

              {/* Grid de Funciones */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {funcionesSociales.map((item, idx) => (
                  <div key={idx} className="group flex gap-4 p-4 rounded-2xl transition-all hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${COLORS.primary}10`, color: COLORS.terracotta }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-tight mb-1" style={{ color: COLORS.primary }}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-snug font-semibold">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}