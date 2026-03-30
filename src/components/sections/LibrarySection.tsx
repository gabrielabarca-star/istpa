// components/LibrarySection.tsx
import React from 'react';
import Image from 'next/image';
import { BookOpen, Monitor, Users, Search, Globe, FileVideo } from 'lucide-react';

const COLORS = {
  primary: '#1B355C',   // Azul
  gold: '#D8A24C',      // Dorado
  terracotta: '#C8663E', // Terracota
};

export default function LibrarySection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Columna Izquierda: Contenido y Texto */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative">
              {/* Badge superior */}
              <div className="flex items-center gap-3 mb-6">
                <span 
                  className="px-4 py-1 rounded-md text-xs font-black uppercase tracking-[0.2em] text-white"
                  style={{ backgroundColor: COLORS.gold }}
                >
                  Recursos Académicos
                </span>
                <div className="flex-grow h-px bg-slate-100"></div>
              </div>

              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tighter" style={{ color: COLORS.primary }}>
                BIBLIOTECA <span style={{ color: COLORS.terracotta }}>CENTRAL Y VIRTUAL</span>
              </h2>

              {/* Bloque de texto con barra lateral institucional */}
              <div className="relative mb-8">
                <div 
                  className="absolute -left-6 top-0 bottom-0 w-1.5 rounded-full"
                  style={{ backgroundColor: COLORS.terracotta }}
                ></div>
                
                <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                  <p>
                    Nuestra biblioteca es el eje fundamental para el aprendizaje. Además de nuestra colección física, 
                    contamos con una <strong>Biblioteca Virtual de vanguardia</strong>, permitiendo el acceso a miles de 
                    títulos desde cualquier lugar.
                  </p>
                </div>
              </div>

              {/* Botones de Acción: Biblioteca Virtual y Tutorial */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a 
                  href="https://elibro.net/es/lc/iespa/login_usuario/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-white font-black transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <Globe size={20} />
                  <span>ACCEDER A ELIBRO</span>
                </a>

                <a 
                  href="https://drive.google.com/file/d/1m331nG66-a5rfjYFfdmvn-vXk6hqaF9X/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-black border-2 transition-all hover:bg-slate-50 hover:border-[#D8A24C]"
                  style={{ borderColor: COLORS.gold, color: COLORS.primary }}
                >
                  <FileVideo size={20} style={{ color: COLORS.terracotta }} />
                  <span>VER TUTORIAL</span>
                </a>
              </div>

              {/* Mini Grid de servicios rápidos */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
                {[
                  { icon: <BookOpen />, label: "Libros Virtuales" },
                  
                  { icon: <Users />, label: "Trabajo grupal en tiempo real" },
                  { icon: <Search />, label: "Asesoría" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all group-hover:scale-110"
                      style={{ backgroundColor: `${COLORS.primary}10`, color: COLORS.primary }}
                    >
                      {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-tight text-slate-500 group-hover:text-[#1B355C]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna Derecha: Imagen con marco institucional */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              {/* Decoración geométrica de fondo (Dorado) */}
              <div 
                className="absolute -bottom-6 -right-6 w-full h-full rounded-[2.5rem] border-2 opacity-50"
                style={{ borderColor: COLORS.gold }}
              ></div>
              
              <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-50">
                <Image
                  src="/img/biblioteca.png" 
                  alt="Estudiantes en la biblioteca del instituto"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B355C]/40 to-transparent"></div>
              </div>

              {/* Badge flotante de servicio */}
              <div 
                className="absolute -top-4 -left-4 px-6 py-3 rounded-xl shadow-xl text-white font-black text-sm uppercase tracking-widest"
                style={{ backgroundColor: COLORS.primary }}
              >
                Servicio 24/7 Virtual
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}