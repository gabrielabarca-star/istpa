"use client";

import React, { useRef, useEffect } from 'react';

// --- INTERFACES DE DATOS ---
interface OrgNodeData {
  label: string;
  sideNode?: string; // Para "Consejo Asesor"
  children?: OrgNodeData[];
}

// --- DATOS DEL ORGANIGRAMA ---
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
    {
      label: "Unidad de Calidad",
      children: []
    },
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
    {
      label: "Unidad de Formación Continua",
      children: []
    }
  ]
};

// --- COMPONENTE DE NODO (TARJETA) ---
const NodeCard = ({ label, level, sideNode }: { label: string, level: number, sideNode?: string }) => {
  let cardClasses = "relative z-10 flex items-center justify-center text-center transition-transform duration-300 hover:-translate-y-1 ";

  if (level === 0) {
    // Nivel 0: Dirección General (Principal) - Tamaño grande para escritorio
    cardClasses += "bg-[#002A5D] text-white font-bold px-8 py-5 rounded-xl shadow-xl border-b-4 border-[#08D3C4] w-64 md:w-72 lg:w-80 text-base md:text-lg";
  } else if (level === 1) {
    // Nivel 1: Unidades - Adaptado para que entren las 5 columnas en PC
    cardClasses += "bg-white text-[#002A5D] font-bold px-3 py-4 rounded-xl shadow-md border-t-4 border-[#08D3C4] w-36 md:w-44 lg:w-52 text-xs md:text-sm h-full flex items-center justify-center leading-snug";
  } else {
    // Nivel 2: Áreas Específicas
    cardClasses += "bg-[#F0F7FF] text-slate-700 font-semibold px-2 py-3 rounded-lg shadow-sm border border-slate-200 hover:border-[#08D3C4] hover:shadow-md hover:text-[#002A5D] w-32 md:w-40 lg:w-48 text-[11px] md:text-xs h-full flex items-center justify-center leading-snug";
  }

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full">
      <div className={cardClasses}>
        {label}
      </div>
      
      {/* Nodo Lateral (Consejo Asesor) */}
      {sideNode && (
        <div className="absolute left-[calc(100%+8px)] top-1/2 flex items-center -translate-y-1/2 z-0">
          <div className="w-8 md:w-12 h-[2px] bg-[#08D3C4] z-0"></div>
          <div className="bg-amber-50 text-[#002A5D] border border-amber-200 px-4 py-3 rounded-lg text-xs md:text-sm font-semibold shadow-sm whitespace-nowrap relative z-10">
            {sideNode}
          </div>
        </div>
      )}
    </div>
  );
};

// --- COMPONENTE RECURSIVO DEL ÁRBOL ---
const TreeNode = ({ 
  node, 
  isFirst, 
  isLast, 
  isOnly, 
  level = 0 
}: { 
  node: OrgNodeData, 
  isFirst?: boolean, 
  isLast?: boolean, 
  isOnly?: boolean, 
  level?: number 
}) => {
  const hasChildren = node.children && node.children.length > 0;
  const lineColor = "bg-[#08D3C4]/60"; 

  return (
    <div className="flex flex-col items-center relative px-2 md:px-4 lg:px-6">
      {/* Línea horizontal superior (conecta hermanos) */}
      {!isOnly && level > 0 && (
        <div 
          className={`absolute top-0 h-[2px] ${lineColor} z-0
            ${isFirst ? 'left-1/2 right-0' : isLast ? 'left-0 right-1/2' : 'left-0 right-0'}
          `}
        ></div>
      )}

      {/* Línea vertical que baja hacia esta tarjeta */}
      {level > 0 && (
        <div className={`w-[2px] h-8 md:h-12 ${lineColor} z-0`}></div>
      )}

      {/* Tarjeta del Nodo Actual */}
      <div className="flex-grow-0 flex-shrink-0">
        <NodeCard label={node.label} level={level} sideNode={node.sideNode} />
      </div>

      {/* Línea vertical que sale de esta tarjeta hacia sus hijos */}
      {hasChildren && (
        <div className={`w-[2px] h-8 md:h-12 ${lineColor} z-0`}></div>
      )}

      {/* Contenedor de Hijos */}
      {hasChildren && (
        <div className="flex flex-row justify-center relative w-full">
          {node.children!.map((child, index) => (
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

// --- COMPONENTE PRINCIPAL (SECTION) ---
export default function InstitutionalOrgChart() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const colors = {
    primaryText: '#002A5D',
    accent: '#08D3C4',
    bgSection: '#FFFFFF'
  };

  // Centrar el scroll automáticamente al cargar el componente
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Calcula la posición central basándose en el ancho total del contenido y el ancho visible
      const centerPosition = (container.scrollWidth - container.clientWidth) / 2;
      container.scrollLeft = centerPosition;
    }
  }, []);

  // Función para desplazar el contenedor con las flechas
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Cantidad de píxeles a desplazar por clic
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col justify-center py-12 relative overflow-hidden" style={{ backgroundColor: colors.bgSection }}>
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#F0F7FF]/50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1800px] relative z-10 flex flex-col items-center">
        
        {/* Cabecera y Fechas */}
        <div className="text-center mb-10 w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            Organigrama Institucional
          </h2>
          <div className="w-24 h-1 mt-5 mx-auto rounded-full" style={{ backgroundColor: colors.accent }}></div>
          <p className="mt-5 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Conoce la estructura organizativa de nuestra institución, diseñada para asegurar la excelencia académica y administrativa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-[#F0F7FF] px-5 py-2.5 rounded-full border border-slate-200 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#002A5D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm md:text-base font-semibold" style={{ color: colors.primaryText }}>
                Aprobado: Enero 2024
              </span>
            </div>

            <div className="flex items-center gap-2 bg-[#F0F7FF] px-5 py-2.5 rounded-full border border-slate-200 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#002A5D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm md:text-base font-semibold" style={{ color: colors.primaryText }}>
                Actualizado: Marzo 2026
              </span>
            </div>
          </div>
        </div>

        {/* --- CONTENEDOR DEL ORGANIGRAMA CON SCROLL Y FLECHAS --- */}
        <div className="relative w-full group">
          
          {/* Botón Flecha Izquierda */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white border border-slate-200 text-[#002A5D] w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-[#08D3C4] hover:text-white transition-all hover:scale-110 focus:outline-none -ml-4 md:-ml-6"
            aria-label="Desplazar a la izquierda"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Contenedor Scrollable */}
          {/* [scrollbar-width:none] y [&::-webkit-scrollbar]:hidden ocultan la barra de scroll visual nativa para que se vea más limpio */}
          <div 
            ref={scrollContainerRef}
            className="w-full overflow-x-auto overflow-y-visible pb-12 pt-4 px-4 sm:px-12 md:px-24 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {/* min-w-max asegura que el árbol no se comprima, sino que active el scroll */}
            <div className="min-w-max flex justify-center mx-auto pr-[150px]"> 
              {/* pr-[150px] asegura que el "Consejo Asesor" (que es absolute) no se corte al hacer scroll hacia la derecha */}
              <TreeNode node={orgData} isOnly={true} />
            </div>
          </div>

          {/* Botón Flecha Derecha */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white border border-slate-200 text-[#002A5D] w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-[#08D3C4] hover:text-white transition-all hover:scale-110 focus:outline-none -mr-4 md:-mr-6"
            aria-label="Desplazar a la derecha"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
        {/* FIN DEL CONTENEDOR DEL ORGANIGRAMA */}

      </div>
    </section>
  );
}