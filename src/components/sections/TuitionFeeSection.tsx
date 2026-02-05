import React from 'react';

// --- Iconos SVG Personalizados ---
const MoneyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UserPlusIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function TuitionFeeSection() {
  const colors = {
    primaryText: '#002A5D', // Azul Institucional
    accent: '#08D3C4',      // Turquesa Institucional
    bgSection: '#F0F7FF',   // Celeste muy suave de fondo
  };

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.bgSection }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        
        {/* --- Cabecera --- */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            Tarifario de Matrícula
          </h2>
          <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          <p className="mt-4 text-slate-600">
            Costos vigentes para el proceso de matrícula por semestre académico.
          </p>
        </div>

        {/* --- Cuadro de Tarifas --- */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100">
          
          {/* Header del Cuadro */}
          <div className="bg-[#002A5D] p-6 text-white text-center">
             <div className="flex items-center justify-center gap-2 mb-2 text-[#08D3C4]">
                <MoneyIcon className="w-8 h-8" />
             </div>
             <h3 className="text-xl font-bold uppercase tracking-wide">Derechos de Pago</h3>
          </div>

          {/* Cuerpo del Cuadro - Ajustado a 3 columnas para centrado */}
          <div className="p-8 grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            
            {/* Item 1: Ingresantes */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D] mb-4">
                 <UserPlusIcon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-[#002A5D] text-lg mb-2">Ingresantes</h4>
              <p className="text-sm text-slate-500 mb-3">I Semestre</p>
              <span className="text-2xl font-extrabold text-[#08D3C4]">S/. 200.00</span>
            </div>

            {/* Item 2: Regulares II - V */}
            <div className="flex flex-col items-center text-center px-4 pt-8 sm:pt-0">
              <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D] mb-4">
                 <UsersIcon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-[#002A5D] text-lg mb-2">Regulares</h4>
              <p className="text-sm text-slate-500 mb-3">II a V Semestre</p>
              <span className="text-2xl font-extrabold text-[#08D3C4]">S/. 200.00</span>
            </div>

            {/* Item 3: Regular VI */}
            <div className="flex flex-col items-center text-center px-4 pt-8 sm:pt-0">
              <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-[#002A5D] mb-4">
                 <UsersIcon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-[#002A5D] text-lg mb-2">Regular</h4>
              <p className="text-sm text-slate-500 mb-3">VI Semestre</p>
              <span className="text-2xl font-extrabold text-[#08D3C4]">S/. 180.00</span>
            </div>

          </div>

          {/* Footer del Cuadro */}
          <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
             <p className="text-sm text-slate-600 font-medium">
                BBVA: <span className="font-bold font-mono text-[#002A5D]">0011-0229-0100095691-20</span>
             </p>
          </div>

        </div>

      </div>
    </section>
  );
}