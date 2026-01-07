// components/CurriculumGridAccounting.tsx

"use client"; 

import React, { useState } from 'react';

// --- Iconos SVG ---
const ModuleIcon = ({ className }: { className?: string }) => ( <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 2H8C4.5 2 2 4.5 2 8V20C2 21.1 2.9 22 4 22H16C19.5 22 22 19.5 22 16V8C22 4.5 19.5 2 16 2Z" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.5 7.5H13.5" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.5 12H16.5" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const ArrowRightIcon = ({ className }: { className?: string }) => ( <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg> );

// --- Estructura de Datos ---
interface Module { title: string; number: number; }
interface Course { name: string; type: 'specific' | 'employability' | 'real_work'; }
interface Cycle { cycleNumber: string; courses: Course[]; module?: Module; }
interface Year { yearName: string; cycles: Cycle[]; }

// --- !!!!! IMPORTANTE: REEMPLAZA ESTOS DATOS CON LOS DE CONTABILIDAD !!!!! ---
const curriculumData: Year[] = [
    { yearName: 'Primer año', cycles: [ { cycleNumber: '01', courses: [ { name: 'Contabilidad General I', type: 'specific' }, { name: 'Plan Contable', type: 'specific' }, { name: 'Documentación Comercial y Contable', type: 'specific' }, { name: 'Administración Empresaria', type: 'specific' },{ name: 'Legislación Comercial', type: 'specific' },{ name: 'Técnicas de Comunicación', type: 'specific' },{ name: 'Lógica y Funciones', type: 'employability' },{ name: 'Cultura Física y Deportes', type: 'employability' },{ name: 'Informática /Internet', type: 'employability' }, ], }, { cycleNumber: '02', courses: [ { name: 'Contabilidad General II', type: 'specific' }, { name: 'Legislación Laboral', type: 'specific' }, { name: 'Legislación Tributaria', type: 'specific' },{ name: 'Fundamentos de Costos', type: 'specific' }, { name: 'Interpretación y Producción de Texto', type: 'employability' },{ name: 'Estadística General', type: 'employability' },{ name: 'Cultura Artística', type: 'employability' },{ name: 'Ofimática', type: 'employability' },{ name: 'EFSRT', type: 'real_work' }, ], module: { number: 1, title: 'PROCESOS CONTABLES' }, }, ], },
    { yearName: 'Segundo año', cycles: [ { cycleNumber: '03', courses: [ { name: 'Contabilidad de Costos', type: 'specific' }, { name: 'Técnica Presupuestal', type: 'specific' }, { name: ' Contabilidad Gubernamental I', type: 'specific' },{ name: ' Aplicativos Informáticos', type: 'specific' },{ name: ' Sociedad y Economía en la Globalización', type: 'employability' },{ name: ' Medio Ambiente y Desarrollo Sostenible', type: 'employability' },{ name: ' Investigación e Innovación Tecnológica', type: 'employability' }, ], }, { cycleNumber: '04', courses: [ { name: 'Contabilidad de Sociedades', type: 'specific' }, { name: 'Contabilidad Aplicada', type: 'specific' }, { name: 'Contabilidad Gubernamental II', type: 'specific' },{ name: 'Comunicación Interpersonal', type: 'employability' },{ name: 'Proyectos de Investigación e Innovación Tecnológica', type: 'employability' }, { name: 'EFSRT', type: 'real_work' }, ], module: { number: 2, title: 'ANÁLISIS FINANCIERO' }, }, ], },
    { yearName: 'Tercer año', cycles: [ { cycleNumber: '05', courses: [ { name: 'Formulación de Estados Financieros', type: 'specific' }, { name: 'Fundamentos de Finanzas', type: 'specific' }, { name: 'Formulación y Evaluación de Proyectos', type: 'specific' },{ name: 'Planeamiento de Auditoria', type: 'specific' },{ name: 'Contabilidad de Entidades Financieras I', type: 'specific' },{ name: 'Comunicación Empresarial', type: 'employability' },{ name: 'Comportamiento Ético', type: 'employability' },{ name: 'Organización y Constitución de Empresas', type: 'employability' }, ], }, { cycleNumber: '06', courses: [ { name: 'Análisis e Interpretación de Estados Financieros', type: 'specific' }, { name: 'Finanzas Públicas', type: 'specific' }, { name: 'Técnicas y Procedimientos de Auditoria', type: 'specific' },{ name: 'Contabilidad de Entidades Financieras II', type: 'specific' },{ name: 'Cálculo Financiero', type: 'specific' },{ name: 'Liderazgo y Trabajo en Equipo', type: 'employability' },{ name: 'Proyecto Empresarial', type: 'employability' },{ name: 'Legislación e Inserción Laboral', type: 'employability' }, { name: 'EFSRT', type: 'real_work' }, ], module: { number: 3, title: 'CONTABILIDAD PÚBLICA Y PRIVADA' }, }, ], },
];

export default function CurriculumGridAccounting() {
    const [activeYearIndex, setActiveYearIndex] = useState(0);
    const colors = { primaryText: '#0A2540', accentRed: '#EF4444', accentTeal: '#08D3C4', accentYellow: '#FBBF24', };
    const activeYearData = curriculumData[activeYearIndex];

    return (
        <section className="w-full bg-white py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>Malla Curricular - Contabilidad</h2>
                        <div className="w-20 h-1.5 mt-4" style={{ backgroundColor: colors.accentRed }}></div>
                    </div>
                    <a href="/pdf/malla-contabilidad.pdf" download className="group bg-[#EF4444] text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-3 hover:bg-red-600 transition-colors duration-300">
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
                    <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-sm" style={{backgroundColor: colors.accentTeal}}></div><span className="text-sm text-slate-600">Competencias Específicas</span></div>
                    <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-sm" style={{backgroundColor: colors.accentYellow}}></div><span className="text-sm text-slate-600">Competencias para la Empleabilidad</span></div>
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
                                <ul className="space-y-2 text-slate-700">{cycle.courses.map((course, cIndex) => ( <li key={cIndex} className="flex items-start"><span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: course.type === 'specific' ? colors.accentTeal : course.type === 'employability' ? colors.accentYellow : colors.accentRed }}></span>{course.name}</li> ))}</ul>
                            </div>
                            {cycle.module ? ( <div className="border-2 border-[#EF4444] rounded-2xl p-6 flex flex-col justify-center items-center text-center"><ModuleIcon className="w-12 h-12 mb-2"/><p className="font-bold text-lg" style={{ color: colors.primaryText }}>Módulo {cycle.module.number}</p><p className="text-slate-600">{cycle.module.title}</p></div> ) : ( <div></div> )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}