// components/PsicopedagogiaSection.tsx
import React from 'react';
import Image from 'next/image';
import { 
  UserCheck, 
  Users, 
  Search, 
  Handshake, 
  ClipboardList, 
  Mail,
} from 'lucide-react';

const COLORS = {
  primary: '#1B355C',   // Azul
  gold: '#D8A24C',      // Dorado
  terracotta: '#C8663E', // Terracota
  bgLight: '#FDFDFD',
};

const funciones = [
  {
    icon: <UserCheck className="w-5 h-5" />,
    text: "Brindar orientación psicopedagógica a los estudiantes que lo requieran."
  },
  {
    icon: <Users className="w-5 h-5" />,
    text: "Participar en acciones de tutoría y acompañamiento estudiantil."
  },
  {
    icon: <Search className="w-5 h-5" />,
    text: "Identificar factores que afecten el desempeño académico y bienestar."
  },
  {
    icon: <Handshake className="w-5 h-5" />,
    text: "Coordinar con el Jefe de Bienestar y Empleabilidad la atención de casos."
  },
  {
    icon: <ClipboardList className="w-5 h-5" />,
    text: "Mantener registros de atención conforme a los lineamientos institucionales."
  }
];

export default function PsicopedagogiaSection() {
  return (
    <section className="w-full py-20 lg:py-28" style={{ backgroundColor: COLORS.bgLight }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Columna Izquierda: Texto y Funciones (Mismo estilo que Bienestar/Tópico) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative">
              {/* Etiqueta Superior */}
              <div className="flex items-center gap-3 mb-6">
                <span 
                  className="px-4 py-1 rounded-md text-xs font-black uppercase tracking-[0.2em] text-white"
                  style={{ backgroundColor: COLORS.gold }}
                >
                  Apoyo Estudiantil
                </span>
                <div className="flex-grow h-px bg-slate-200"></div>
              </div>

              <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight tracking-tighter" style={{ color: COLORS.primary }}>
                SERVICIO DE <span style={{ color: COLORS.terracotta }}>PSICOPEDAGOGÍA</span>
              </h2>

              {/* Contenedor de Texto con estilo de barra lateral (Bienestar) */}
              <div className="relative mb-10">
                <div 
                  className="absolute -left-6 top-0 bottom-0 w-1.5 rounded-full"
                  style={{ backgroundColor: COLORS.terracotta }}
                ></div>
                
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium text-justify">
                  Nuestro compromiso es fortalecer tu proceso de aprendizaje y bienestar emocional. 
                  Contamos con un espacio seguro y confidencial para orientarte en los desafíos académicos y personales.
                </p>
              </div>

              {/* Lista de Funciones con Icons (Estilo Tópico) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 py-6 border-t border-b border-slate-100 mb-10">
                {funciones.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div 
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-white shadow-sm border border-slate-100 group-hover:border-[#D8A24C]"
                      style={{ color: COLORS.terracotta }}
                    >
                      {f.icon}
                    </div>
                    <span className="text-sm font-bold text-slate-700 group-hover:text-[#1B355C] transition-colors">
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Botón de Contacto Directo */}
              <div className="mt-10 flex gap-2">
                 <a 
                    href="mailto:deian.torpoco@iest.edu.pe"
                    className="group inline-flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border-2 hover:shadow-xl bg-white"
                    style={{ borderColor: `${COLORS.primary}20` }}
                  >
                    <div className="p-3 rounded-xl text-white transition-transform group-hover:scale-110" style={{ backgroundColor: COLORS.primary }}>
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Contacto Directo</p>
                      <p className="text-sm md:text-base font-black break-all" style={{ color: COLORS.primary }}>
                        ian.torpoco@iest.edu.pe
                      </p>
                    </div>
                  </a>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Imagen Estructural Vertical (Mismo estilo que Bienestar/Tópico) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              {/* Marco decorativo (Dorado) */}
              <div 
                className="absolute -top-4 -right-4 w-full h-full rounded-[2.5rem] border-2"
                style={{ borderColor: COLORS.gold }}
              ></div>
              
              {/* Contenedor de Imagen Vertical (4/5) */}
              <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
                <Image
                  // ¡Recuerda cambiar esta ruta por la de tu imagen vertical!
                  src="/img/psicopedagogia.png" 
                  alt="Servicio de Psicopedagogía del Instituto"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
                {/* Overlay degradado con azul institucional */}
                <div 
                  className="absolute inset-0 opacity-40"
                  style={{ background: `linear-gradient(to top, ${COLORS.primary}, transparent)` }}
                ></div>
              </div>

              {/* Detalle flotante de Confidencialidad (Azul) */}
              <div 
                className="absolute -bottom-6 -left-6 px-8 py-4 rounded-xl shadow-xl text-white font-bold"
                style={{ backgroundColor: COLORS.primary }}
              >
                PSICOPEDAGOGÍA
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}