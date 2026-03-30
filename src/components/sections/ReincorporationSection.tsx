// components/ReincorporationSection.tsx
import React from 'react';
import Image from 'next/image';
import { 
  Clock, 
  FileText, 
  UserCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

// --- Configuración de Colores Institucionales ---
const COLORS = {
  primary: '#1B355C',   // Azul
  gold: '#D8A24C',      // Dorado
  terracotta: '#C8663E', // Terracota
  bgLight: '#F8FAFC',
};

export default function ReincorporationSection() {
  return (
    <section className="w-full py-20 lg:py-28" style={{ backgroundColor: COLORS.bgLight }}>
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* --- Cabecera Editorial --- */}
        <div className="text-center mb-20">
          <span 
            className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ backgroundColor: `${COLORS.gold}20`, color: COLORS.gold }}
          >
            Gestión Académica
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: COLORS.primary }}>
            Reincorporación Estudiantil
          </h2>
          <div className="w-20 h-1.5 mt-6 mx-auto rounded-full" style={{ backgroundColor: COLORS.terracotta }}></div>
          <p className="mt-8 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Retoma tu camino profesional. Si hiciste una pausa en tus estudios, aquí te guiamos paso a paso para volver a las aulas.
          </p>
        </div>

        {/* --- Grid Principal --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* COLUMNA IZQUIERDA: Imagen con Marco Institucional */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 rounded-[2.5rem] border-2 border-dashed opacity-20 transition-opacity group-hover:opacity-40" style={{ borderColor: COLORS.gold }}></div>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/img/reincorporacion_1.png" 
                alt="Estudiante retomando estudios"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Badge Flotante */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: COLORS.terracotta }}>
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-slate-400">Estado</p>
                  <p className="text-sm font-bold" style={{ color: COLORS.primary }}>Proceso Activo</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Contenido Estructurado */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* BLOQUE 1: Requisitos (Uso de Dorado) */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-blue-900/5 border border-slate-100">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3" style={{ color: COLORS.primary }}>
                <FileText className="w-6 h-6" style={{ color: COLORS.gold }} />
                Consideraciones Clave
              </h3>
              
              <div className="grid gap-6">
                <RequirementItem 
                  icon={<Clock />} 
                  title="Plazos Estrictos"
                  desc="Solicita tu retorno antes de que venza tu reserva y antes del inicio de matrículas."
                />
                <RequirementItem 
                  icon={<AlertTriangle />} 
                  title="Disponibilidad"
                  desc="La reincorporación depende de la vigencia del programa y vacantes existentes."
                />
                
                {/* Alerta con Terracota */}
                <div className="mt-4 p-5 rounded-2xl border-l-4 flex gap-4 bg-orange-50/50" style={{ borderColor: COLORS.terracotta }}>
                  <AlertTriangle className="flex-shrink-0" style={{ color: COLORS.terracotta }} />
                  <p className="text-sm leading-relaxed text-slate-700">
                    <strong style={{ color: COLORS.terracotta }}>Aviso Crítico:</strong> Si el periodo de reserva expira, perderás la condición de estudiante y deberás iniciar un proceso de nueva admisión o convalidación externa.
                  </p>
                </div>
              </div>
            </div>

            {/* BLOQUE 2: Línea de Tiempo (Uso de Azul) */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-blue-900/5 border border-slate-100">
              <h3 className="text-2xl font-black mb-8" style={{ color: COLORS.primary }}>Hoja de Ruta</h3>
              
              <div className="space-y-8 relative">
                <Step number="01" title="Solicitud Digital" body="Completa el FUT virtual detallando tus datos y semestre de retorno." />
                <Step number="02" title="Evaluación Técnica" body="Secretaría Académica verifica tu expediente y deriva a la unidad correspondiente." />
                <Step number="03" title="Dictamen Académico" body="El Jefe de Unidad emite la opinión favorable para habilitar tu matrícula." last />
              </div>
            </div>

            {/* BLOQUE 3: Banner de Costo (Inversión del color institucional) */}
            <div className="relative overflow-hidden rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl" style={{ backgroundColor: COLORS.primary }}>
              <div className="relative z-10">
                <h4 className="text-white font-black text-2xl uppercase tracking-tighter">Derecho de Trámite</h4>
                <p className="text-blue-200/70 text-sm font-medium">Facilidades para nuestra comunidad estudiantil</p>
              </div>
              <div className="relative z-10 bg-white px-8 py-3 rounded-2xl shadow-lg transform hover:scale-105 transition-transform cursor-default">
                <span className="text-3xl font-black tracking-tighter" style={{ color: COLORS.terracotta }}>GRATUITO</span>
              </div>
              {/* Círculos decorativos de fondo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-500/10 rounded-full -ml-12 -mb-12" style={{ backgroundColor: `${COLORS.gold}10` }}></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// --- Sub-componentes para Limpieza de Código ---

function RequirementItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-4 group">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors bg-slate-50 text-slate-400 group-hover:bg-[#D8A24C20] group-hover:text-[#D8A24C]">
        {React.cloneElement(icon as React.ReactElement, { size: 20 })}
      </div>
      <div>
        <h4 className="font-bold text-slate-800 text-base">{title}</h4>
        <p className="text-sm text-slate-500 mt-1">{desc}</p>
      </div>
    </div>
  );
}

function Step({ number, title, body, last = false }: { number: string, title: string, body: string, last?: boolean }) {
  return (
    <div className="flex gap-6 relative">
      {!last && (
        <div className="absolute left-[19px] top-10 w-[2px] h-full bg-slate-100"></div>
      )}
      <div 
        className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm border-2 shadow-sm bg-white"
        style={{ color: COLORS.primary, borderColor: COLORS.primary }}
      >
        {number}
      </div>
      <div className="pb-2">
        <h4 className="font-extrabold text-lg uppercase tracking-tight" style={{ color: COLORS.primary }}>{title}</h4>
        <p className="text-sm text-slate-600 mt-1 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}