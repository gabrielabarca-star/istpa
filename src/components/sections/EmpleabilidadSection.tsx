// components/EmpleabilidadSection.tsx
import React from 'react';
import Image from 'next/image';
import { 
  Briefcase, 
  UserCheck, 
  Handshake, 
  CalendarDays, 
  ClipboardCheck,
  ArrowUpRight
} from 'lucide-react';

const COLORS = {
  primary: '#1B355C',   // Azul
  gold: '#D8A24C',      // Dorado
  terracotta: '#C8663E', // Terracota
  bgLight: '#F4F7FA',
};

const funcionesEmpleabilidad = [
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Orientación Laboral",
    desc: "Acciones de empleabilidad personalizadas para estudiantes y egresados."
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Situación Laboral",
    desc: "Monitoreo y actualización constante del estatus profesional de nuestros egresados."
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Inserción Laboral",
    desc: "Coordinación directa con Relaciones Institucionales para vincularte con empresas."
  },
  {
    icon: <CalendarDays className="w-6 h-6" />,
    title: "Eventos y Ferias",
    desc: "Organización de ferias laborales, talleres de CV y simulacros de entrevista."
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: "Seguimiento Continuo",
    desc: "Registro y reporte estratégico para fortalecer la red de contactos institucional."
  }
];

export default function EmpleabilidadSection() {
  return (
    <section className="w-full py-20 lg:py-28" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Columna Izquierda: Contenido Editorial */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Badge superior */}
              <div className="flex items-center gap-3 mb-6">
                <span 
                  className="px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white"
                  style={{ backgroundColor: COLORS.terracotta }}
                >
                  Futuro Profesional
                </span>
                <div className="flex-grow h-px bg-slate-100"></div>
              </div>

              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-[1.1] tracking-tighter" style={{ color: COLORS.primary }}>
                EMPLEABILIDAD Y <br />
                <span style={{ color: COLORS.gold }}>SEGUIMIENTO AL EGRESADO</span>
              </h2>

              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium border-l-4 pl-6" style={{ borderColor: COLORS.gold }}>
                No solo te formamos académicamente; te acompañamos en tu inserción al mundo laboral. 
                Nuestra unidad gestiona las herramientas necesarias para que tu transición al empleo sea exitosa y sostenible.
              </p>

              {/* Lista de Funciones con diseño de alto contraste */}
              <div className="space-y-4">
                {funcionesEmpleabilidad.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-5 p-5 rounded-2xl transition-all duration-300 hover:bg-[#1B355C]/5 border border-transparent hover:border-[#1B355C]/10 group"
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:rotate-6 shadow-sm"
                      style={{ backgroundColor: 'white', color: COLORS.terracotta, border: `1px solid ${COLORS.terracotta}20` }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-sm md:text-base uppercase tracking-tight" style={{ color: COLORS.primary }}>
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna Derecha: Composición Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Marco Dorado Decorativo */}
              <div 
                className="absolute -top-6 -right-6 w-full h-full rounded-[2.5rem] border-2 opacity-40"
                style={{ borderColor: COLORS.gold }}
              ></div>
              
              {/* Imagen Principal */}
              <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white z-10">
                <Image
                  src="/img/empleabilidad.png" // Reemplazar con la ruta de tu imagen
                  alt="Egresado exitoso en el mundo laboral"
                  fill
                  className="object-cover"
                />
                {/* Overlay gradiente azul */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B355C]/60 to-transparent"></div>
              </div>

              {/* Card de Éxito Flotante */}
              <div 
                className="absolute -bottom-8 -left-8 p-6 rounded-3xl shadow-2xl z-20 max-w-[240px] border-t-4"
                style={{ backgroundColor: 'white', borderTopColor: COLORS.terracotta }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${COLORS.gold}20` }}>
                    <ArrowUpRight className="w-5 h-5" style={{ color: COLORS.gold }} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">Networking</span>
                </div>
                <p className="text-sm font-bold leading-tight" style={{ color: COLORS.primary }}>
                  Conectamos tu talento con las mejores empresas del sector.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}