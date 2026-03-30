// components/LibraryScheduleSection.tsx
import React from 'react';
import Image from 'next/image';
import { Mail, Phone, Globe, ShieldCheck } from 'lucide-react';

const COLORS = {
  primary: '#1B355C',   // Azul
  gold: '#D8A24C',      // Dorado
  terracotta: '#C8663E', // Terracota
  bgLight: '#F8FAFC',
};

export default function LibraryScheduleSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Columna Izquierda: Imagen Decorativa */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            {/* Círculo de fondo institucional */}
            <div 
              className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full opacity-10" 
              style={{ backgroundColor: COLORS.primary }}
            />
            
            <div className="relative w-full max-w-sm z-10">
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <Image
                  src="/img/biblioteca_atencion.png" 
                  alt="Acceso a Biblioteca Virtual"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Badge flotante de disponibilidad */}
              <div 
                className="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl text-white text-center"
                style={{ backgroundColor: COLORS.terracotta }}
              >
                <p className="text-xs uppercase font-black tracking-widest">Disponibilidad</p>
                <p className="text-xl font-bold">24 Horas / 7 Días</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Información de Acceso y Soporte */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-10 h-1" style={{ backgroundColor: COLORS.gold }}></span>
              <span className="text-sm font-black uppercase tracking-widest" style={{ color: COLORS.gold }}>Acceso Remoto</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black mb-8 tracking-tighter" style={{ color: COLORS.primary }}>
              PLATAFORMA <span style={{ color: COLORS.terracotta }}>VIRTUAL</span>
            </h2>

            <div className="space-y-6">
              {/* Bloque Libro Virtual */}
              <div className="flex items-start gap-4 p-6 rounded-2xl border-2 border-[#1B355C]/10 bg-[#1B355C]/5">
                <div className="p-3 rounded-xl bg-white shadow-sm">
                  <Globe className="w-6 h-6 flex-shrink-0" style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <h3 className="font-black text-lg uppercase tracking-tight" style={{ color: COLORS.primary }}>Libro Virtual (e-Libro)</h3>
                  <p className="text-slate-700 font-bold text-lg leading-tight">Acceso ilimitado todos los días del año.</p>
                  <p className="text-slate-500 mt-1">Consulta nuestro catálogo digital desde cualquier dispositivo con conexión a internet.</p>
                </div>
              </div>

              {/* Bloque Soporte Técnico */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border-2 border-transparent">
                <div className="p-3 rounded-xl bg-white shadow-sm">
                  <ShieldCheck className="w-6 h-6 flex-shrink-0" style={{ color: COLORS.terracotta }} />
                </div>
                <div>
                  <h3 className="font-black text-lg uppercase tracking-tight" style={{ color: COLORS.primary }}>Soporte y Consultas</h3>
                  <p className="text-slate-600 font-medium italic">¿Tienes dificultades para ingresar o buscar un libro?</p>
                </div>
              </div>

              {/* Canales de Comunicación */}
              <div className="pt-6 space-y-4">
                <p className="text-sm font-black uppercase tracking-widest text-slate-400">Canales de Atención</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <a 
                    href="mailto:biblioteca@iest.edu.pe" 
                    className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:bg-white hover:shadow-lg transition-all group"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" style={{ color: COLORS.gold }} />
                    <span className="text-sm font-bold break-all" style={{ color: COLORS.primary }}>
                      biblioteca@iest.edu.pe
                    </span>
                  </a>

                  {/* Teléfono / WhatsApp */}
                  <a 
                    href="tel:987845442" 
                    className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:bg-white hover:shadow-lg transition-all group"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" style={{ color: COLORS.gold }} />
                    <span className="text-sm font-bold" style={{ color: COLORS.primary }}>
                      987 845 442
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}