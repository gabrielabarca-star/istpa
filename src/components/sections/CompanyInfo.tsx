// components/CompanyInfo.tsx

import React from 'react';

// --- Iconos SVG (sin cambios) ---
const MissionIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="64" height="64" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <circle cx="12" cy="12" r="9"></circle>
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="3" x2="12" y2="7"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
    <line x1="3" y1="12" x2="7" y2="12"></line>
    <line x1="17" y1="12" x2="21" y2="12"></line>
  </svg>
);
const VisionIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="64" height="64" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M9 12a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
    <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
    <path d="M9 16.05V19a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2.95"></path>
    <path d="M12 16.05l0 -4.05"></path>
  </svg>
);
const ValuesIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="64" height="64" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
  </svg>
);
const PrinciplesIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="64" height="64" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"></path>
    </svg>
);

// --- Interfaz genérica (sin cambios) ---
interface TitledDescription {
  title: string;
  description: string;
}

// --- Datos (sin cambios) ---
const valores: TitledDescription[] = [
    { title: 'Respeto', description: 'Se promueve en las relaciones entre los miembros de la comunidad educativa, garantizando un clima institucional basado en la convivencia armónica, la tolerancia y el reconocimiento de la diversidad.' },
    { title: 'Responsabilidad', description: 'Se manifiesta en el cumplimiento de las funciones, deberes y compromisos asumidos por los distintos actores institucionales en el desarrollo de sus actividades académicas y administrativas.' },
    { title: 'Honestidad', description: 'Se integra en la gestión institucional mediante prácticas éticas, transparentes y coherentes con los principios de integridad y probidad.' },
    { title: 'Solidaridad', description: 'Se expresa en la promoción del trabajo colaborativo, el apoyo mutuo y la participación activa de la comunidad educativa en acciones de responsabilidad social.' },
    { title: 'Compromiso Institucional', description: 'Se evidencia en la identificación de los miembros de la comunidad educativa con la misión, visión y objetivos estratégicos del IES del Altiplano, contribuyendo al logro de los resultados institucionales.' },
    
];
const principios: TitledDescription[] = [
    { title: 'CALIDAD EDUCATIVA', description: 'Se concreta mediante la implementación de mecanismos de planificación, seguimiento y evaluación de los procesos institucionales, orientados a la mejora continua del servicio educativo y al cumplimiento de las Condiciones Básicas de Calidad.' },
    { title: 'EQUIDAD E INCLUSIÓN', description: 'Se incorpora a través de políticas y prácticas institucionales que promueven el acceso, la permanencia y la culminación de los estudios, considerando la diversidad de la comunidad educativa y garantizando la igualdad de oportunidades.' },
    { title: 'PERTINENCIA', description: 'Se refleja en la articulación de la oferta formativa, los procesos académicos y las actividades institucionales con las demandas del entorno productivo regional y nacional, contribuyendo al desarrollo territorial.' },
    { title: 'TRANSPARENCIA', description: 'Se integra en la gestión institucional mediante el cumplimiento del marco normativo vigente, la rendición de cuentas y el acceso a información relevante para la comunidad educativa.' },
    { title: 'MEJORA CONTINUA', description: 'Se materializa a través de la evaluación permanente de los procesos institucionales y la implementación de acciones de mejora orientadas al fortalecimiento de la calidad del servicio educativo.' },
    { title: 'ENFOQUE DE GESTIÓN DE PROCESOS', description: 'El IES del Altiplano orienta su gestión académica y administrativa considerando la interrelación de sus procesos institucionales, con la finalidad de contribuir al aseguramiento de la calidad y la mejora continua del servicio educativo.' }
];

// --- Colores (sin cambios) ---
const colors = {
  primaryText: '#0A2540',
  secondaryText: '#525F7F',
  accent: '#08D3C4',
  dot: '#F5365C',
  background: '#F8FAFC',
  icon: '#94A3B8',
};

// --- Componente de Tarjeta (sin cambios) ---
const InfoCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-2xl p-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] ${className}`}>
    {children}
  </div>
);

// --- Componente Principal ---
export default function CompanyInfo() {
  return (
    <div className="min-h-screen w-full font-sans p-4 sm:p-8" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* --- Columna Izquierda --- */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          <InfoCard>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold" style={{ color: colors.primaryText }}>Misión</h2>
                <div className="w-12 h-1 mt-1" style={{ backgroundColor: colors.accent }}></div>
              </div>
              <MissionIcon className="w-12 h-12" style={{ color: colors.icon }} />
            </div>
            <p className="mt-4 text-base" style={{ color: colors.secondaryText }}>
            Somos un Instituto de Educación Superior que brinda un servicio educativo de calidad, 
            inclusivo y pertinente, orientado al desarrollo de competencias para la inserción laboral, el emprendimiento y 
            la contribución al desarrollo productivo de la región Puno y del país, en coherencia con las 
            demandas del entorno y el marco normativo vigente.

            </p>
          </InfoCard>

          <InfoCard>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold" style={{ color: colors.primaryText }}>Visión</h2>
                <div className="w-12 h-1 mt-1" style={{ backgroundColor: colors.accent }}></div>
              </div>
              <VisionIcon className="w-12 h-12" style={{ color: colors.icon }} />
            </div>
            <p className="mt-4 text-base" style={{ color: colors.secondaryText }}>
            Al 2031, ser un Instituto de Educación Superior licenciado, reconocido en la 
            región Puno por brindar un servicio educativo de calidad, pertinente y orientado a la productividad, 
            que contribuya al desarrollo económico y social regional y nacional, formando profesionales con valores democráticos,
             compromiso ético y responsabilidad social.

            </p>
          </InfoCard>

          <InfoCard>
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-3xl font-bold" style={{ color: colors.primaryText }}>Principios</h2>
                    <div className="w-12 h-1 mt-1" style={{ backgroundColor: colors.accent }}></div>
                </div>
                <PrinciplesIcon className="w-12 h-12" style={{ color: colors.icon }} />
            </div>
            <div className="mt-4 space-y-4">
              {principios.map((principle) => (
                <div key={principle.title}>
                  <p className="flex items-center font-bold text-sm uppercase" style={{ color: colors.primaryText }}>
                    <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: colors.dot}}></span>
                    <span>{principle.title}</span>
                  </p>
                  <p className="mt-1 text-base" style={{ color: colors.secondaryText }}>
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </InfoCard>

        </div>

        {/* --- Columna Derecha --- */}
        <div className="lg:col-span-3">
          {/* --- MODIFICACIÓN: Se eliminó la clase "h-full" de InfoCard --- */}
          <InfoCard>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold" style={{ color: colors.primaryText }}>Valores</h2>
                <div className="w-12 h-1 mt-1" style={{ backgroundColor: colors.accent }}></div>
              </div>
              <ValuesIcon className="w-12 h-12" style={{ color: colors.icon }}/>
            </div>
            <div className="mt-6 space-y-4">
              {valores.map((valor) => (
                <div key={valor.title}>
                  <p className="flex items-center font-bold text-sm uppercase" style={{ color: colors.primaryText }}>
                    <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: colors.dot}}></span>
                    <span>{valor.title}</span>
                  </p>
                  <p className="mt-1 text-base" style={{ color: colors.secondaryText }}>
                    {valor.description}
                  </p>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>
      </div>
    </div>
  );
}