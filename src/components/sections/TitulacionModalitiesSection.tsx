// components/TitulacionModalitiesSection.tsx
import React from 'react';
import { 
  FileText, 
  Users, 
  CheckCircle, 
  Clock, 
  GraduationCap, 
  ClipboardCheck 
} from 'lucide-react';

// --- Configuración de Colores ---
const COLORS = {
  primary: '#1B355C',   // Azul Institucional
  gold: '#D8A24C',      // Dorado Institucional
  terracotta: '#C8663E', // Terracota Institucional
  bg: '#F8FAFC',
  white: '#FFFFFF'
};

export default function TitulacionModalitiesSection() {
  return (
    <section className="w-full py-20 lg:py-28" style={{ backgroundColor: COLORS.bg }}>
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Cabecera Editorial */}
        <div className="text-center mb-20">
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ backgroundColor: `${COLORS.gold}20`, color: COLORS.gold }}
          >
            Proceso de Graduación
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6" style={{ color: COLORS.primary }}>
            Modalidades de Titulación
          </h2>
          <div className="w-24 h-1.5 mx-auto rounded-full" style={{ backgroundColor: COLORS.terracotta }}></div>
          <p className="mt-8 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Nuestras rutas de titulación están diseñadas para validar tu excelencia profesional bajo los estándares del <span className="font-bold">ISTP DEL ALTIPLANO</span>.
          </p>
        </div>

        {/* Grid de Modalidades */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* MODALIDAD 1: EXAMEN DE SUFICIENCIA */}
          <Card 
            title="Examen de Suficiencia"
            subtitle="Ruta Individual de Alta Exigencia"
            icon={<GraduationCap className="w-10 h-10" />}
            cost="2,800.00"
            mode="Individual"
            accentColor={COLORS.gold}
          >
            <Section title="Descripción" icon={<FileText size={18} />}>
              Demostración integral de competencias teórico-prácticas. Se divide en una 
              <span className="font-bold"> Evaluación escrita (30%)</span> y una 
              <span className="font-bold"> Evaluación práctica demostrativa (70%)</span> ante jurado.
            </Section>

            <Section title="Características" icon={<ClipboardCheck size={18} />}>
              <ul className="space-y-2">
                <li>Jurado evaluador de 2 a 4 miembros especialistas.</li>
                <li>Hasta <span className="font-bold">tres oportunidades</span> para aprobar el proceso.</li>
                <li>Resultados registrados bajo acta oficial institucional.</li>
              </ul>
            </Section>

            <Section title="Requisitos Clave" icon={<CheckCircle size={18} />}>
              <ul className="space-y-2">
                <li>Culminación de programa y prácticas pre-profesionales.</li>
                <li>Certificados vigentes de <span className="font-bold">Computación e Inglés</span>.</li>
                <li>Estado de cuenta libre de deudas administrativas.</li>
              </ul>
            </Section>

            <Section title="Flujo del Proceso" icon={<Clock size={18} />}>
              <ol className="list-decimal ml-4 space-y-1">
                <li>Solicitud en Secretaría Académica.</li>
                <li>Validación de aptitud (5 días útiles).</li>
                <li>Evaluación y entrega de resultados (3 días).</li>
              </ol>
            </Section>
          </Card>

          {/* MODALIDAD 2: TRABAJO DE APLICACIÓN */}
          <Card 
            title="Trabajo de Aplicación"
            subtitle="Innovación y Resolución de Problemas"
            icon={<Users className="w-10 h-10" />}
            cost="2,400.00"
            mode="Grupal"
            accentColor={COLORS.terracotta}
          >
            <Section title="Descripción" icon={<FileText size={18} />}>
              Desarrollo de un proyecto orientado a resolver una problemática real del sector profesional, 
              aplicando mejoras justificadas y metodologías de investigación.
            </Section>

            <Section title="Características" icon={<ClipboardCheck size={18} />}>
              <ul className="space-y-2">
                <li>Desarrollo en los últimos periodos académicos.</li>
                <li>Equipos de <span className="font-bold">2 a 4 estudiantes</span> máximo.</li>
                <li>Sustentación pública ante jurado de 3 miembros.</li>
              </ul>
            </Section>

            <Section title="Requisitos Clave" icon={<CheckCircle size={18} />}>
              <ul className="space-y-2">
                <li>Expediente académico completo y prácticas aprobadas.</li>
                <li>Designación y aprobación de asesores temáticos.</li>
                <li>Certificaciones de habilidades complementarias (TIC/Inglés).</li>
              </ul>
            </Section>

            <Section title="Flujo del Proceso" icon={<Clock size={18} />}>
              <ol className="list-decimal ml-4 space-y-1">
                <li>Inscripción de proyecto y equipo.</li>
                <li>Asesoría personalizada y elaboración técnica.</li>
                <li>Sustentación y emisión de título oficial.</li>
              </ol>
            </Section>
          </Card>

        </div>
      </div>
    </section>
  );
}

// --- Componentes Internos de Soporte ---

interface CardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  cost: string;
  mode: string;
  children: React.ReactNode;
  accentColor: string;
}

function Card({ title, subtitle, icon, cost, mode, children, accentColor }: CardProps) {
  return (
    <div className="group bg-white rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-slate-100 overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Header */}
      <div className="p-8 text-white relative overflow-hidden" style={{ backgroundColor: COLORS.primary }}>
        <div className="relative z-10 flex items-center gap-5">
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md" style={{ color: accentColor }}>
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-black leading-tight uppercase tracking-tighter">{title}</h3>
            <p className="text-sm font-medium opacity-80" style={{ color: accentColor }}>{subtitle}</p>
          </div>
        </div>
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-32 h-32 -mr-10 -mt-10 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Contenido */}
      <div className="p-8 lg:p-10 flex-grow space-y-8">
        {children}
      </div>

      {/* Footer / Costo */}
      <div className="p-8 bg-slate-50 border-t border-slate-100">
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
            Inversión {mode}
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold" style={{ color: COLORS.primary }}>S/</span>
            <span className="text-4xl font-black tracking-tighter" style={{ color: COLORS.primary }}>
              {cost}
            </span>
          </div>
          <div 
            className="mt-4 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest text-white transition-transform group-hover:scale-110"
            style={{ backgroundColor: accentColor }}
          >
            Modalidad {mode}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest" style={{ color: COLORS.primary }}>
        <span style={{ color: COLORS.gold }}>{icon}</span>
        {title}
      </h4>
      <div className="text-sm text-slate-600 leading-relaxed pl-7">
        {children}
      </div>
    </div>
  );
}