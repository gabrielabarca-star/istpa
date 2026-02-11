// components/CurriculumGridPharmacy.tsx

"use client"; 

import React, { useState } from 'react';

// --- Iconos SVG ---
const ModuleIcon = ({ className }: { className?: string }) => ( <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 2H8C4.5 2 2 4.5 2 8V20C2 21.1 2.9 22 4 22H16C19.5 22 22 19.5 22 16V8C22 4.5 19.5 2 16 2Z" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.5 7.5H13.5" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.5 12H16.5" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const ArrowRightIcon = ({ className }: { className?: string }) => ( <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg> );

// --- Estructura de Datos ---
interface Module { title: string; number: number; }

// 1. MODIFICADO: Se agrega totalHours a la interfaz
interface Course { 
    name: string; 
    type: 'specific' | 'employability' | 'real_work'; 
    credits: number; 
    totalHours: number; // Nuevo campo
}

interface Cycle { cycleNumber: string; courses: Course[]; module?: Module; }
interface Year { yearName: string; cycles: Cycle[]; }

// --- DATOS CON CREDITOS Y HORAS AGREGADOS ---
// Nota: Se ha calculado (Créditos * 16) como ejemplo para las horas. Ajustar según realidad.
const curriculumData: Year[] = [
    { 
        yearName: 'Primer año', 
        cycles: [ 
            { 
                cycleNumber: '01', 
                courses: [ 
                    { name: 'Análisis de Procesos Biológicos y Químicos en el Serhumano', type: 'specific', credits: 4, totalHours: 90 }, 
                    { name: 'Técnicas de Administración de Documentos', type: 'specific', credits: 4, totalHours: 108 }, 
                    { name: 'Atención de Medicamentos Esenciales', type: 'specific', credits: 3, totalHours: 72 }, 
                    { name: 'Técnicas de  Comunicación', type: 'employability', credits: 1.5, totalHours: 36 },
                    { name: 'Lógica y Funciones', type: 'employability', credits: 1.5, totalHours: 36 },
                    { name: 'Cultura Física y Deportes', type: 'employability', credits: 1.5, totalHours: 36 },
                    { name: 'Informática / Internet', type: 'employability', credits: 1.5, totalHours: 36 }, 
                ], 
            }, 
            { 
                cycleNumber: '02', 
                courses: [ 
                    { name: 'Análisis Microbiano en la Industria Farmacéutica', type: 'specific', credits: 3, totalHours: 72 }, 
                    { name: 'Atención de Urgencias en una Oficina Farmacéutica', type: 'specific', credits: 4, totalHours: 90 }, 
                    { name: 'Administración Farmacéutica', type: 'specific', credits: 4, totalHours: 90 },
                    { name: 'Documentos Contables en una Oficina Farmacéutica', type: 'specific', credits: 3, totalHours: 54 }, 
                    { name: 'Liniamientos de Políticas Nacionales de Salud y Medicamentos', type: 'specific', credits: 3, totalHours: 54 },
                    { name: 'Interpretación y Producción de Texto', type: 'employability', credits: 1.5, totalHours: 36 },
                    { name: 'Cultura Artística', type: 'employability', credits: 1.5, totalHours: 36 },
                    { name: 'Ofimática', type: 'employability', credits: 1.5, totalHours: 36 },
                    { name: 'Fundamentos de Investigación', type: 'employability', credits: 1.5, totalHours: 36 },
                    { name: 'Estadística General', type: 'employability', credits: 1.5, totalHours: 36 },
                    { name: 'EFSRT', type: 'real_work', credits: 0, totalHours: 250 }, 
                ], 
                module: { number: 1, title: 'ATENCIÓN DE URGENCIAS Y ADMINISTRACIÓN DE UNA OFICINA FARMACÉUTICA' }, 
            }, 
        ], 
    },
    { 
        yearName: 'Segundo año', 
        cycles: [ 
            { 
                cycleNumber: '03', 
                courses: [ 
                    { name: 'Estudio de Enfermedades y su Tratamiento Farmacológico I', type: 'specific', credits: 4, totalHours: 90 }, 
                    { name: 'Aplicación de Bases Farmacológicas de los Medicamentos I', type: 'specific', credits: 6, totalHours: 144 }, 
                    { name: 'Venta y Dispensación de Medicamentos y Productos Afines', type: 'specific', credits: 4, totalHours: 90 },
                    { name: 'Dispensación de Medicamentos en el Sistema de Salud', type: 'specific', credits: 3, totalHours: 72 },
                    { name: 'Sociedad y Economía en la Globalización', type: 'employability', credits: 2, totalHours: 54 },
                    { name: 'Medio Ambiente y Desarrollo Sostenible', type: 'employability', credits: 2, totalHours: 54 },
                    { name: 'Investigación e Innovación Tecnológica', type: 'employability', credits: 1.5, totalHours: 36 }, 
                ], 
            }, 
            { 
                cycleNumber: '04', 
                courses: [ 
                    { name: 'Estudio De Enfermedades y su Tratamiento Farmacológico II', type: 'specific', credits: 4, totalHours: 90 }, 
                    { name: 'Aplicación de Bases Farmacológicas de los Medicamentos II', type: 'specific', credits: 4, totalHours: 108 }, 
                    { name: 'Clasificación de Medicamentos', type: 'specific', credits: 4, totalHours: 90 },
                    { name: 'Promoción Y Prevención de Salud en Farmacia', type: 'specific', credits: 2, totalHours: 54 },
                    { name: 'Técnicas de Transformación de Recursos Naturales', type: 'specific', credits: 4, totalHours: 90 },
                    { name: 'Comunicación Interpersonal', type: 'employability', credits: 1.5, totalHours: 36 },
                    { name: 'Proyectos de Investigación e innovación Tecnológica', type: 'employability', credits: 3, totalHours: 72 }, 
                    { name: 'EFSRT', type: 'real_work', credits: 0, totalHours: 280 }, 
                ], 
                module: { number: 2, title: 'DISPENSACIÓN DE MEDICAMENTOS Y ATENCIÓN EN FARMACIA' }, 
            }, 
        ], 
    },
    { 
        yearName: 'Tercer año', 
        cycles: [ 
            { 
                cycleNumber: '05', 
                courses: [ 
                    { name: 'Métodos de Extracción e Identificación', type: 'specific', credits: 4, totalHours: 108 }, 
                    { name: 'Venta y Dispensación de Productos Naturales', type: 'specific', credits: 3, totalHours: 72 }, 
                    { name: 'Técnicas de Control de Calidad En La Industria Farmacéutica', type: 'specific', credits: 2, totalHours: 54 },
                    { name: 'Técnicas De Transformación de Materias Primas en la Industria Farmacéutica', type: 'specific', credits: 5, totalHours: 126 }, 
                    { name: 'Aspectos Legales en la Industria Farmacéutica', type: 'specific', credits: 3, totalHours: 72 },
                    { name: 'Comunicación Empresarial', type: 'employability', credits: 1.5, totalHours: 36 },
                    { name: 'Organización y Constitución de Empresas', type: 'employability', credits: 1.5, totalHours: 36 },
                    { name: 'Comportamiento Ético', type: 'employability', credits: 1.5, totalHours: 36 }, 
                ], 
            }, 
            { 
                cycleNumber: '06', 
                courses: [ 
                    { name: 'Clasificación de Acción Farmacológica', type: 'specific', credits: 4, totalHours: 90 }, 
                    { name: 'Normas De Control de Calidad en la Industria Farmacéutica', type: 'specific', credits: 2, totalHours: 54 }, 
                    { name: 'Elaboración de Formas Farmacéuticas', type: 'specific', credits: 5, totalHours: 126 },
                    { name: 'Procesamiento de Productos Galénicos, Naturales, Cosméticos y Afines', type: 'specific', credits: 6, totalHours: 144 },
                    { name: 'Liderazgos y Trabajo en Equipo', type: 'employability', credits: 1.5, totalHours: 36 },
                    { name: 'Proyecto Empresarial', type: 'employability', credits: 1.5, totalHours: 36 },
                    { name: 'Legislación e Inserción Laboral', type: 'employability', credits: 2, totalHours: 54 }, 
                    { name: 'EFSRT', type: 'real_work', credits: 0, totalHours: 330 }, 
                ], 
                module: { number: 3, title: 'ELABORACIÓN Y COMERCIALIZACIÓN DE PRODUCTOS FARMACÉUTICOS Y AFINES' }, 
            }, 
        ], 
    },
];

export default function CurriculumGridPharmacy() {
    const [activeYearIndex, setActiveYearIndex] = useState(0);
    const colors = { primaryText: '#0A2540', accentRed: '#EF4444', accentTeal: '#08D3C4', accentYellow: '#FBBF24', };
    const activeYearData = curriculumData[activeYearIndex];

    return (
        <section className="w-full bg-white py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>Malla Curricular - Farmacia</h2>
                        <div className="w-20 h-1.5 mt-4" style={{ backgroundColor: colors.accentRed }}></div>
                    </div>
                    <a href="/pdf/malla-farmacia.pdf" download className="group bg-[#EF4444] text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-3 hover:bg-red-600 transition-colors duration-300">
                        Descargar malla <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
                <div className="flex items-center gap-4 mb-8">
                    {curriculumData.map((year, index) => (
                        <button key={index} onClick={() => setActiveYearIndex(index)} className={`py-3 px-6 rounded-full font-semibold border-2 transition-colors duration-300 ${ activeYearIndex === index ? 'bg-[#0A2540] text-white border-transparent' : 'bg-white text-[#0A2540] border-slate-200 hover:bg-slate-50' }`}>
                            {year.yearName}
                        </button>
                    ))}
                </div>
                <div className="border border-slate-200 rounded-2xl p-4 flex flex-wrap items-center gap-x-6 gap-y-2 mb-12">
                    <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-sm" style={{backgroundColor: colors.accentTeal}}></div><span className="text-sm text-slate-600">Formación Específica</span></div>
                    <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-sm" style={{backgroundColor: colors.accentYellow}}></div><span className="text-sm text-slate-600">Formación Transversal</span></div>
                    <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-sm" style={{backgroundColor: colors.accentRed}}></div><span className="text-sm text-slate-600">Experiencias Formativas en Situaciones Reales de Trabajo (EFSRT)</span></div>
                </div>
                <div className="space-y-8">
                    {activeYearData.cycles.map((cycle, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="border-2 border-[#EF4444] rounded-2xl p-6 flex gap-6">
                                <div className="flex items-center">
                                    <div className="text-center mr-6"><p className="font-bold text-lg" style={{ color: colors.accentRed }}>CICLO</p><p className="text-8xl font-extrabold text-transparent" style={{ WebkitTextStroke: `2px ${colors.accentRed}` }}>{cycle.cycleNumber}</p></div>
                                    <div className="w-1 h-full" style={{ backgroundColor: colors.accentTeal }}></div>
                                </div>
                                <ul className="space-y-2 text-slate-700 w-full">
                                    {cycle.courses.map((course, cIndex) => ( 
                                        // 3. MODIFICADO: Layout para nombre y horas/creditos
                                        <li key={cIndex} className="flex items-start">
                                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 min-w-[6px] rounded-full" style={{ backgroundColor: course.type === 'specific' ? colors.accentTeal : course.type === 'employability' ? colors.accentYellow : colors.accentRed }}></span>
                                            <div className="flex flex-col sm:flex-row sm:items-center w-full justify-between gap-1">
                                                <span className="leading-tight">{course.name}</span>
                                                <span className="text-xs font-semibold text-slate-400 border border-slate-200 rounded px-1.5 py-0.5 whitespace-nowrap bg-slate-50">
                                                    {course.credits} Cr. <span className="text-slate-300 mx-1">|</span> {course.totalHours} Hrs.
                                                </span>
                                            </div>
                                        </li> 
                                    ))}
                                </ul>
                            </div>
                            {cycle.module ? ( <div className="border-2 border-[#EF4444] rounded-2xl p-6 flex flex-col justify-center items-center text-center"><ModuleIcon className="w-12 h-12 mb-2"/><p className="font-bold text-lg" style={{ color: colors.primaryText }}>Módulo {cycle.module.number}</p><p className="text-slate-600">{cycle.module.title}</p></div> ) : ( <div></div> )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}