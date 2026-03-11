"use client";

import React, { useState } from 'react';
import { Download, BookOpen, ShieldCheck, Award, Clock, Star } from 'lucide-react';

const COLORS = {
  primary: "#1B355C",
  gold: "#D8A24C",
  accent: "#C8663E"
};

const curriculumData = [
  {
    yearName: 'Primer año',
    cycles: [
      {
        cycleNumber: '01',
        courses: [
          { name: 'Anatomía Funcional', type: 'specific', credits: 4, totalHours: 90 },
          { name: 'Primeros Auxilios', type: 'specific', credits: 4, totalHours: 108 },
          { name: 'Asistencia en Inmunizaciones', type: 'specific', credits: 4, totalHours: 108 },
          { name: 'Actividades en Epidemiologia', type: 'specific', credits: 4, totalHours: 90 },
          { name: 'Técnicas de Comunicación', type: 'employability', credits: 1.5, totalHours: 36 },
          { name: 'Lógica y Funciones', type: 'employability', credits: 1.5, totalHours: 36 },
          { name: 'Cultura Física y Deporte', type: 'employability', credits: 1.5, totalHours: 36 },
          { name: 'Informática / Internet', type: 'employability', credits: 1.5, totalHours: 36 },
        ],
      },
      {
        cycleNumber: '02',
        courses: [
          { name: 'Educación para la Salud', type: 'specific', credits: 4, totalHours: 90 },
          { name: 'Actividades en Salud Publica', type: 'specific', credits: 7, totalHours: 162 },
          { name: 'Actividades en Salud Comunitaria', type: 'specific', credits: 4, totalHours: 108 },
          { name: 'Interpretación y Producción de Textos', type: 'employability', credits: 1.5, totalHours: 36 },
          { name: 'Estadística General', type: 'employability', credits: 1.5, totalHours: 36 },
          { name: 'Cultura Artística', type: 'employability', credits: 1.5, totalHours: 36 },
          { name: 'Ofimática', type: 'employability', credits: 1.5, totalHours: 36 },
          { name: 'Fundamentos de Investigación', type: 'employability', credits: 1.5, totalHours: 36 },
          { name: 'EFSRT I', type: 'real_work', credits: 0, totalHours: 265 },
        ],
        module: { number: 1, title: 'ATENCIÓN PRIMARIA EN SALUD' },
      },
    ],
  },
  {
    yearName: 'Segundo año',
    cycles: [
      {
        cycleNumber: '03',
        courses: [
          { name: 'Documentación en Salud', type: 'specific', credits: 1, totalHours: 36 },
          { name: 'Bioseguridad Asistencia Básica', type: 'specific', credits: 4, totalHours: 90 },
          { name: 'Hospitalaria Nutrición Y Dietas', type: 'specific', credits: 4, totalHours: 90 },
          { name: 'Sociedad y Economía en la Globalización', type: 'employability', credits: 2, totalHours: 54 },
          { name: 'Medio Ambiente y Desarrollo Sostenible', type: 'employability', credits: 2, totalHours: 54 },
          { name: 'Investigación e Innovación Tecnológica', type: 'employability', credits: 1.5, totalHours: 36 },
        ],
      },
      {
        cycleNumber: '04',
        courses: [
          { name: 'Procedimientos Invasivos y no Invasivos', type: 'specific', credits: 3, totalHours: 72 },
          { name: 'Asistencia en la Administración De Medicamentos', type: 'specific', credits: 4, totalHours: 90 },
          { name: 'Asistencia al Usuario con Patologías', type: 'specific', credits: 3, totalHours: 72 },
          { name: 'Asistencia al Usuario Quirúrgico', type: 'specific', credits: 5, totalHours: 126 },
          { name: 'Comunicación Interpersonal', type: 'employability', credits: 1.5, totalHours: 36 },
          { name: 'Proyectos de Investigación e Innovación Tecnológica', type: 'employability', credits: 3, totalHours: 72 },
          { name: 'EFSRT II', type: 'real_work', credits: 0, totalHours: 290 },
        ],
        module: { number: 2, title: 'SERVICIOS TÉCNICOS DE ENFERMERÍA ASISTENCIAL' },
      },
    ],
  },
  {
    yearName: 'Tercer año',
    cycles: [
      {
        cycleNumber: '05',
        courses: [
          { name: 'Atención en Salud Materna', type: 'specific', credits: 4, totalHours: 90 },
          { name: 'Salud Del Niño y Adolescente', type: 'specific', credits: 5, totalHours: 126 },
          { name: 'Asistencia al Adulto Mayor', type: 'specific', credits: 5, totalHours: 126 },
          { name: 'Asistencia de Enfermería en Salud Mental', type: 'specific', credits: 4, totalHours: 90 },
          { name: 'Comunicación Empresarial', type: 'employability', credits: 1.5, totalHours: 36 },
          { name: 'Comportamiento Ético', type: 'employability', credits: 1.5, totalHours: 36 },
          { name: 'Organización y Constitución de Empresa', type: 'employability', credits: 1.5, totalHours: 36 },
        ],
      },
      {
        cycleNumber: '06',
        courses: [
          { name: 'Asistencia en Fisioterapia y Rehabilitación', type: 'specific', credits: 5, totalHours: 126 },
          { name: 'Asistencia en Salud Bucal', type: 'specific', credits: 3, totalHours: 72 },
          { name: 'Asistencia en Medicina Alternativa', type: 'specific', credits: 4, totalHours: 90 },
          { name: 'Asistencia al Usuario Oncológico', type: 'specific', credits: 5, totalHours: 126 },
          { name: 'Liderazgo y Trabajo en Equipo', type: 'employability', credits: 1.5, totalHours: 36 },
          { name: 'Proyecto Empresarial', type: 'employability', credits: 1.5, totalHours: 36 },
          { name: 'Legislación e Inserción Laboral', type: 'employability', credits: 2, totalHours: 54 },
          { name: 'EFSRT III', type: 'real_work', credits: 0, totalHours: 300 },
        ],
        module: { number: 3, title: 'SERVICIOS TÉCNICOS DE ENFERMERÍA ESPECIALIZADA' },
      },
    ],
  },
];

export default function CurriculumGridNursing() {
  const [activeYear, setActiveYear] = useState(0);

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'specific': return { bg: COLORS.accent, label: 'Específica' };
      case 'employability': return { bg: COLORS.gold, label: 'Empleabilidad' };
      case 'real_work': return { bg: COLORS.primary, label: 'Prácticas EFSRT' };
      default: return { bg: '#cbd5e1', label: 'General' };
    }
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-6" style={{ color: COLORS.primary }}>
              MALLA <br />
              <span style={{ color: COLORS.accent }}>CURRICULAR</span>
            </h2>
            <div className="w-24 h-2 rounded-full mb-6" style={{ backgroundColor: COLORS.gold }}></div>
            <p className="text-slate-500 text-lg font-medium leading-relaxed italic">
              "Excelencia académica certificada por el Ministerio de Educación para la Región Puno."
            </p>
          </div>
          
          <button className="group flex items-center gap-4 bg-white border-2 border-slate-200 p-2 pr-8 rounded-[2rem] hover:shadow-xl transition-all duration-300 hover:border-[#C8663E]/30">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-white transition-transform group-hover:rotate-12" style={{ backgroundColor: COLORS.accent }}>
              <Download size={24} />
            </div>
            <span className="font-bold text-[#1B355C] uppercase tracking-wider text-sm">Descargar Malla PDF</span>
          </button>
        </div>

        {/* --- Selector de Año --- */}
        <div className="flex flex-wrap gap-3 mb-12 p-2 bg-slate-200/50 rounded-[2.5rem] w-fit">
          {curriculumData.map((year, idx) => (
            <button
              key={idx}
              onClick={() => setActiveYear(idx)}
              className={`px-10 py-4 rounded-[2rem] font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                activeYear === idx ? 'text-white shadow-lg scale-105' : 'text-slate-500 hover:text-[#1B355C]'
              }`}
              style={{ backgroundColor: activeYear === idx ? COLORS.primary : 'transparent' }}
            >
              {year.yearName}
            </button>
          ))}
        </div>

        {/* --- Grid de Ciclos --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {curriculumData[activeYear].cycles.map((cycle, cIdx) => (
            <div key={cIdx} className="flex flex-col gap-6">
              <div className="bg-white rounded-[3rem] p-8 lg:p-10 shadow-xl shadow-slate-200/60 border border-slate-100 relative overflow-hidden group min-h-[500px]">
                
                {/* Ciclo de Fondo */}
                <span className="absolute -top-4 -right-4 text-[10rem] font-black leading-none pointer-events-none opacity-[0.03]" style={{ color: COLORS.primary }}>
                  {cycle.cycleNumber}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${COLORS.accent}15`, color: COLORS.accent }}>
                      <BookOpen size={24} />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight" style={{ color: COLORS.primary }}>Ciclo {cycle.cycleNumber}</h3>
                  </div>

                  <div className="space-y-3">
                    {cycle.courses.map((course, i) => {
                      const style = getTypeStyle(course.type);
                      return (
                        <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group/item">
                          <div className="flex items-center gap-4">
                            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: style.bg }} />
                            <span className="text-sm font-bold text-slate-600 group-hover/item:text-slate-900">{course.name}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-2 sm:mt-0">
                             <span className="text-[9px] font-black text-slate-400 bg-slate-100 px-2 py-1 rounded-md uppercase tracking-tighter">
                               {course.credits} Cred.
                             </span>
                             <span className="text-[9px] font-black px-2 py-1 rounded-md" style={{ backgroundColor: `${COLORS.primary}10`, color: COLORS.primary }}>
                               {course.totalHours} Horas
                             </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Card de Módulo (Si aplica al ciclo) */}
              {cycle.module && (
                <div className="rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl" style={{ backgroundColor: COLORS.primary }}>
                   <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Award size={120} />
                   </div>
                   <div className="relative z-10 flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shrink-0" style={{ backgroundColor: COLORS.gold }}>
                        <ShieldCheck size={32} style={{ color: COLORS.primary }} />
                      </div>
                      <div>
                        <p className="font-black text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: COLORS.gold }}>Certificación Modular 0{cycle.module.number}</p>
                        <h4 className="text-xl font-black leading-tight tracking-tight uppercase max-w-xs">
                          {cycle.module.title}
                        </h4>
                      </div>
                   </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- Leyenda Institucional --- */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
           {[
             { label: 'Formación Específica', color: COLORS.accent },
             { label: 'Empleabilidad', color: COLORS.gold },
             { label: 'Experiencias Reales (EFSRT)', color: COLORS.primary }
           ].map((item, key) => (
             <div key={key} className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.label}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}