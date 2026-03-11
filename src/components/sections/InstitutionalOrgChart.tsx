"use client";

import React, { useRef, useEffect } from 'react';

interface OrgNodeData {
  label: string;
  sideNode?: string;
  children?: OrgNodeData[];
}

const orgData: OrgNodeData = {
  label: "Dirección General",
  sideNode: "Consejo Asesor",
  children: [
    {
      label: "Bienestar y Empleabilidad",
      children: [
        { label: "Asistencia Social" },
        { label: "Tutoría" },
        { label: "Emergencias Básicas" },
        { label: "Psicopedagogía" },
        { label: "Empleabilidad" },
      ]
    },
    {
      label: "Unidad Académica",
      children: [
        { label: "Coord. Enfermería Técnica" },
        { label: "Coord. Contabilidad" },
        { label: "Coordinadora de EFSRT" },
        { label: "Serv. Biblioteca virtual" },
      ]
    },
    { label: "Unidad de Calidad", children: [] },
    {
      label: "Unidad de Administración",
      children: [
        { label: "Mantenimiento" },
        { label: "Contabilidad y finanzas" },
        { label: "TI" },
        { label: "Seguridad y Vigilancia" },
        { label: "Secretaría Académica" },
      ]
    },
    { label: "Unidad de Formación Continua", children: [] }
  ]
};

const colors = {
  primary: '#1B355C', // Azul Institucional
  gold: '#D8A24C',    // Dorado Institucional
  accent: '#C8663E',  // Naranja Institucional
  line: '#CBD5E1',    // Gris para conectores
};

const NodeCard = ({ label, level, sideNode }: { label: string, level: number, sideNode?: string }) => {
  let cardStyle = "relative z-10 flex items-center justify-center text-center transition-all duration-500 hover:scale-105 ";

  if (level === 0) {
    // Nivel 0: Dirección General
    cardStyle += "bg-[#1B355C] text-white font-black px-10 py-6 rounded-2xl shadow-[0_20px_40px_rgba(27,53,92,0.3)] border-t-2 border-[#D8A24C] w-72 lg:w-80 text-lg uppercase tracking-wider";
  } else if (level === 1) {
    // Nivel 1: Unidades
    cardStyle += "bg-white text-[#1B355C] font-bold px-4 py-5 rounded-[1.25rem] shadow-lg border-l-4 w-40 md:w-48 lg:w-56 text-sm flex items-center justify-center leading-tight hover:shadow-[#C8663E]/20";
  } else {
    // Nivel 2: Áreas
    cardStyle += "bg-slate-50 text-slate-600 font-medium px-3 py-3 rounded-xl border border-slate-200 w-36 md:w-44 text-xs h-14 flex items-center justify-center leading-tight hover:bg-white hover:border-[#C8663E] hover:text-[#C8663E]";
  }

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full">
      <div className={cardStyle} style={level === 1 ? { borderLeftColor: colors.accent } : {}}>
        {label}
      </div>
      
      {sideNode && (
        <div className="absolute left-[calc(100%+12px)] top-1/2 flex items-center -translate-y-1/2 z-0">
          <div className="w-10 h-[2px] bg-dashed border-t-2 border-dashed border-[#D8A24C]"></div>
          <div className="bg-amber-50 text-[#1B355C] border border-[#D8A24C] px-5 py-2.5 rounded-full text-xs font-black shadow-sm whitespace-nowrap uppercase tracking-tighter">
             ✨ {sideNode}
          </div>
        </div>
      )}
    </div>
  );
};

const TreeNode = ({ node, isFirst, isLast, isOnly, level = 0 }: any) => {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-center relative px-4 lg:px-8">
      {!isOnly && level > 0 && (
        <div className={`absolute top-0 h-[2px] bg-slate-300 z-0 ${isFirst ? 'left-1/2 right-0' : isLast ? 'left-0 right-1/2' : 'left-0 right-0'}`}></div>
      )}

      {level > 0 && (
        <div className="w-[2px] h-10 bg-gradient-to-b from-slate-300 to-[#C8663E] z-0"></div>
      )}

      <div className="flex-grow-0 flex-shrink-0">
        <NodeCard label={node.label} level={level} sideNode={node.sideNode} />
      </div>

      {hasChildren && (
        <div className="w-[2px] h-10 bg-gradient-to-b from-[#C8663E] to-slate-300 z-0"></div>
      )}

      {hasChildren && (
        <div className="flex flex-row justify-center relative w-full animate-in fade-in zoom-in duration-1000">
          {node.children!.map((child: any, index: number) => (
            <TreeNode 
              key={index} 
              node={child} 
              isFirst={index === 0} 
              isLast={index === node.children!.length - 1} 
              isOnly={node.children!.length === 1}
              level={level + 1} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function InstitutionalOrgChart() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -400 : 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full min-h-screen bg-slate-50 py-20 relative overflow-hidden">
      {/* Fondo decorativo con grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(${colors.primary} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-black tracking-[0.3em] text-[#D8A24C] uppercase">Estructura Organizacional</span>
          <h2 className="text-5xl font-black mt-3" style={{ color: colors.primary }}>
            Organigrama <span style={{ color: colors.accent }}>2026</span>
          </h2>
          <div className="w-20 h-2 mt-6 mx-auto rounded-full" style={{ backgroundColor: colors.accent }}></div>
        </div>

        <div className="relative group">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-4 top-[150px] z-50 bg-white/80 backdrop-blur-md border border-slate-200 text-[#1B355C] w-14 h-14 rounded-2xl shadow-xl flex items-center justify-center hover:bg-[#C8663E] hover:text-white transition-all active:scale-95"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
          </button>

          <div 
            ref={scrollContainerRef}
            className="w-full overflow-x-auto pb-20 pt-10 scrollbar-hide"
          >
            <div className="min-w-max flex justify-center mx-auto pr-[200px]"> 
              <TreeNode node={orgData} isOnly={true} />
            </div>
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-4 top-[150px] z-50 bg-white/80 backdrop-blur-md border border-slate-200 text-[#1B355C] w-14 h-14 rounded-2xl shadow-xl flex items-center justify-center hover:bg-[#C8663E] hover:text-white transition-all active:scale-95"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>

        {/* Leyenda sutil */}
        <div className="mt-10 flex justify-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
           <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-[#1B355C]"></div> Directiva</div>
           <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-[#D8A24C]"></div> Asesoría</div>
           <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-[#C8663E]"></div> Ejecución</div>
        </div>
      </div>
    </section>
  );
}