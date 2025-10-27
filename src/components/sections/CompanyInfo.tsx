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
    { title: 'Liderazgo', description: 'Institución generadora de desarrollo y cambio regional.' },
    { title: 'Responsabilidad', description: 'Compartida con directivos, docentes y alumnos.' },
    { title: 'Identidad', description: 'Reconocer y valorar nuestras costumbres y cultura.' },
    { title: 'Autoestima', description: 'Reflexivo, la autoevaluación y a valorar a los demás.' },
    { title: 'Igualdad', description: 'Respeto mutuo de cualidad y calidad humana.' },
    { title: 'Dignidad a la persona', description: 'Tolerancia, flexibilidad, honestidad, igualdad y lealtad.' },
    { title: 'Educación para el trabajo', description: 'Humanista, el hombre es un fin de sí mismo y no puede ser instrumento de otro.' },
];
const principios: TitledDescription[] = [
    { title: 'CALIDAD', description: 'Asegura la eficiencia en los procesos y la eficacia en los logros y las mejores condiciones, brindando una educación para la identidad, la ciudadanía, el trabajo, en un marco de una formación permanente.' },
    { title: 'INNOVACIÓN', description: 'En todos los campos del saber, el arte y la cultura.' },
    { title: 'CREATIVIDAD', description: 'Promueve la producción de nuevos conocimientos.' },
    { title: 'CONCIENCIA AMBIENTAL', description: 'Motiva el respeto, cuidado y conservación del entorno natural como garantía para el futuro de la vida.' },
    { title: 'ÉTICA', description: 'Fortalece valores, el respeto a las normas de convivencia y la conciencia moral, individual y pública.' },
    { title: 'SINERGIA', description: 'Acción conjunta de varios órganos en la realización de una función, con el objeto de alcanzar las metas pedagógicas de la institución.' }
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
            Somos una institución Educativa Tecnológica que forma profesionales técnicos con valores 
            democráticos para aportar en el progreso y desarrollo social de la región y del país en su conjunto.

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
            Al 2026 ser una institución Educativa Tecnológica líder en la Región Puno que forme 
            profesionales con valores democráticos para aportar en el progreso y desarrollo social de la región y del país en su conjunto.

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