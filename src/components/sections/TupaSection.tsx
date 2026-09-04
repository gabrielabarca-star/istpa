"use client";

import React, { useEffect, useState, useMemo } from 'react';
import { FileText, ExternalLink, Search, Clock, CircleDollarSign } from 'lucide-react';

const tariffData = [
  // Trámites de Admisión y Matrícula
  { process: 'Admisión', price: 'S/ 100.00', time: 'Inmediato', category: 'Matrícula & Pensión' },
  { process: 'Matrícula (De I a VI Semestre*)', price: 'S/ 200.00', time: 'Inmediato', category: 'Matrícula & Pensión' },
  { process: 'I Semestre - Contabilidad (5 cuotas)', price: 'S/ 290.00', time: 'Inmediato', category: 'Matrícula & Pensión' },
  { process: 'I Semestre - Enfermería Técnica (5 cuotas)', price: 'S/ 360.00', time: 'Inmediato', category: 'Matrícula & Pensión' },
  { process: 'II a V Semestre - Contabilidad (5 cuotas)', price: 'S/ 270.00', time: 'Inmediato', category: 'Matrícula & Pensión' },
  { process: 'II a V Semestre - Enfermería Técnica (5 cuotas)', price: 'S/ 340.00', time: 'Inmediato', category: 'Matrícula & Pensión' },
  { process: 'II a V Semestre - Técnica en Farmacia (5 cuotas)', price: 'S/ 320.00', time: 'Inmediato', category: 'Matrícula & Pensión' },
  { process: 'VI Semestre - Todos los programas (5 cuotas)', price: 'S/ 270.00', time: 'Inmediato', category: 'Matrícula & Pensión' },
  { process: 'Reserva de matrícula o Licencia', price: 'S/ 250.00', time: '5 días', category: 'Matrícula & Pensión' },
  { process: 'Licencia de fuerza mayor', price: 'S/ 20.00', time: '5 días', category: 'Matrícula & Pensión' },
  { process: 'Retorno por semestre', price: 'S/ 250.00', time: '2 días', category: 'Matrícula & Pensión' },
  
  // Académicos y Evaluación
  { process: 'Crédito adicional (cada uno, hasta 8 créditos)', price: 'S/ 15.00', time: 'Inmediato', category: 'Académico' },
  { process: 'Convalidación por curso', price: 'S/ 50.00', time: '7 días', category: 'Académico' },
  { process: 'Evaluación ordinaria', price: 'Gratis', time: 'Inmediato', category: 'Académico' },
  { process: 'Evaluación extraordinaria (Subsanación)', price: 'S/ 50.00', time: 'Inmediato', category: 'Académico' },
  { process: 'Traslado externo', price: 'S/ 350.00', time: '5 días', category: 'Académico' },
  { process: 'Traslado interno', price: 'S/ 350.00', time: '5 días', category: 'Académico' },
  { process: 'Retiros', price: 'Gratuito', time: 'Inmediato', category: 'Académico' },
  { process: 'Cambio de lugar de prácticas', price: 'S/ 20.00', time: '2 días', category: 'Académico' },
  { process: 'Curso de inglés básico', price: 'S/ 310.00', time: '-', category: 'Académico' },
  { process: 'Curso Informática', price: 'S/ 310.00', time: '-', category: 'Académico' },

  // Titulación y Certificados
  { process: 'Título por trabajo de aplicación profesional', price: 'S/ 2400.00', time: '30 a 90 días', category: 'Titulación & Certificaciones' },
  { process: 'Título por examen de suficiencia profesional', price: 'S/ 3500.00', time: '30 a 90 días', category: 'Titulación & Certificaciones' },
  { process: 'Certificado modular C/U', price: 'S/ 50.00', time: '10 días', category: 'Titulación & Certificaciones' },
  { process: 'Certificado de estudios', price: 'S/ 150.00', time: '10 días', category: 'Titulación & Certificaciones' },
  { process: 'Diploma de egresado', price: 'S/ 120.00', time: '7 días', category: 'Titulación & Certificaciones' },
  { process: 'Duplicado de título', price: 'S/ 2000.00', time: '30 a 90 días', category: 'Titulación & Certificaciones' },
  { process: 'Certificado idiomas/informática', price: 'S/ 100.00', time: '-', category: 'Titulación & Certificaciones' },
  { process: 'Carta de presentación por c/u módulo (Sólo egresados)', price: 'S/ 50.00', time: '3 días', category: 'Titulación & Certificaciones' },

  // Documentos y Constancias
  { process: 'Ficha de notas duplicado (Ingresantes antes del 2018)', price: 'S/ 20.00', time: '3 días', category: 'Trámites & Documentos' },
  { process: 'Rectificación de nombres o apellidos', price: 'S/ 60.00', time: '3 días', category: 'Trámites & Documentos' },
  { process: 'Constancia (Varios)', price: 'S/ 30.00', time: '3 días', category: 'Trámites & Documentos' },
  { process: 'Duplicado de Carta de presentación', price: 'S/ 20.00', time: '2 días', category: 'Trámites & Documentos' },
  { process: 'Duplicado de carpeta', price: 'S/ 10.00', time: 'Inmediato', category: 'Trámites & Documentos' },
  { process: 'Sílabos', price: 'S/ 130.00', time: '10 días', category: 'Trámites & Documentos' },
  { process: 'Duplicado de Resolución', price: 'S/ 30.00', time: '2 días', category: 'Trámites & Documentos' },
  { process: 'FUT Virtual', price: 'Gratuito', time: 'Inmediato', category: 'Trámites & Documentos' },
  { process: 'Fedateo de Documentos', price: 'S/ 10.00', time: '2 días', category: 'Trámites & Documentos' }
];

const TupaSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const colors = {
    primary: '#1B355C',   
    secondary: '#C8663E', 
    accent: '#F8FAFC',    
    text: '#334155'       
  };

  const categories = ['Todos', 'Matrícula & Pensión', 'Académico', 'Titulación & Certificaciones', 'Trámites & Documentos'];

  const filteredTariffs = useMemo(() => {
    return tariffData.filter((item) => {
      const matchesSearch = item.process.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  if (!isMounted) return null;

  return (
    <section className="py-20 bg-white font-sans" id="tupa">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* --- Sección TUPA Principal --- */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          
          {/* Visualización del TUPA */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div 
                className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl opacity-10"
                style={{ backgroundColor: colors.secondary }}
              ></div>
              
              <div 
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-3xl flex flex-col items-center justify-center text-white shadow-2xl transition-all duration-500 hover:scale-105"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary} 0%, #2c5282 100%)` 
                }}
              >
                <FileText size={80} strokeWidth={1.2} className="mb-4" />
                <span className="text-4xl font-black tracking-tighter">TUPA</span>
                <div className="absolute bottom-6 w-12 h-1 bg-orange-400 rounded-full"></div>
              </div>

              <div 
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20"
                style={{ backgroundColor: colors.primary }}
              ></div>
            </div>
          </div>

          {/* Contenido TUPA */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-orange-50 text-[#C8663E] font-bold text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#C8663E]"></span>
              Transparencia Institucional
            </div>
            
            <h2 
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
              style={{ color: colors.primary }}
            >
              Texto Único de Procedimientos <span style={{ color: colors.secondary }}>Administrativos</span>
            </h2>
            
            <p className="text-lg mb-8 leading-relaxed text-slate-600">
              Accede al documento normativo que detalla todos los trámites, requisitos, costos y plazos de nuestra institución de manera clara y transparente.
            </p>

            <div className="flex justify-center md:justify-start">
              <a 
                href="https://docs.google.com/document/d/1UoQ-_-wBAaJDbGb9WrP4RFNB0KBuTWCNlP_SAzz0IDc/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg no-underline"
                style={{ backgroundColor: colors.secondary }}
              >
                <span>Descargar TUPA Completo</span>
                <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="mt-10 p-5 border-l-4 rounded-r-xl bg-slate-50 border-slate-200">
              <p className="text-sm text-slate-500 italic m-0">
                "Este documento es de cumplimiento obligatorio y garantiza sus derechos como ciudadano ante nuestra administración."
              </p>
            </div>
          </div>

        </div>

        {/* --- Sección Tarifario (Anexo N°01) --- */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-slate-100 rounded-full text-slate-500 inline-block mb-3">
              Anexo N°01
            </span>
            <h3 className="text-3xl font-extrabold tracking-tight" style={{ color: colors.primary }}>
              Tarifario de Trámites y Servicios
            </h3>
            <p className="text-slate-500 mt-2 text-sm">
              Consulta los precios oficiales y tiempos aproximados de atención de cada procedimiento institucional.
            </p>
          </div>

          {/* Filtros y Buscador */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            {/* Buscador */}
            <div className="relative w-full md:w-72">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar procedimiento..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-400"
              />
            </div>

            {/* Categorías */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === cat ? colors.primary : undefined
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tabla de Tarifas */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <th className="py-4 px-6">Proceso / Trámite</th>
                  <th className="py-4 px-6 text-right">Precio (Soles)</th>
                  <th className="py-4 px-6 text-center">Tiempo de Respuesta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                {filteredTariffs.length > 0 ? (
                  filteredTariffs.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-6 font-semibold text-slate-800">
                        {item.process}
                      </td>
                      <td className="py-4 px-6 text-right font-bold text-slate-900">
                        <span className={`inline-flex items-center gap-1 ${item.price === 'Gratis' || item.price === 'Gratuito' ? 'text-emerald-600' : ''}`}>
                          {item.price !== 'Gratis' && item.price !== 'Gratuito' && <CircleDollarSign size={14} className="text-slate-400" />}
                          {item.price}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-slate-100 text-slate-600 font-semibold">
                          <Clock size={12} className="text-slate-400" />
                          {item.time}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="py-8 text-center text-slate-400 font-medium">
                      No se encontraron trámites con ese nombre.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-right">
            <span className="text-xs text-slate-400 italic">
              * Precios sujetos a actualización según normatividad vigente.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TupaSection;