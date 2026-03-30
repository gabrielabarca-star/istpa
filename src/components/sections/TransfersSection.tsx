// components/TransfersSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FileText, 
  Award, 
  CreditCard, 
  ExternalLink, 
  CheckCircle2, 
  ChevronRight 
} from 'lucide-react';

// --- Configuración de Colores Institucionales ---
const COLORS = {
  primary: '#1B355C',   // Azul
  gold: '#D8A24C',      // Dorado
  terracotta: '#C8663E', // Terracota
  bgLight: '#F8FAFC',
};

export default function TransfersSection() {
  const steps = [
    { title: "Inicio del Trámite", desc: "Llenar FUT virtual y pagar derecho de traslado. Entrega en Secretaría." },
    { title: "Verificación", desc: "Validación de requisitos y derivación a la Unidad Académica." },
    { title: "Evaluación", desc: "Análisis de factibilidad académica por el Jefe de Unidad." },
    { title: "Resolución", desc: "Emisión de la Resolución Directoral de aceptación oficial." },
    { title: "Comunicación", desc: "Notificación final al estudiante sobre el resultado." },
  ];

  return (
    <section className="w-full py-20 lg:py-28" style={{ backgroundColor: COLORS.bgLight }}>
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* --- Cabecera --- */}
        <div className="text-center mb-20">
          <span 
            className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ backgroundColor: `${COLORS.gold}15`, color: COLORS.gold }}
          >
            Movilidad Académica
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: COLORS.primary }}>
            Proceso de Traslados
          </h2>
          <div className="w-20 h-1.5 mt-6 mx-auto rounded-full" style={{ backgroundColor: COLORS.terracotta }}></div>
          <p className="mt-8 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Facilitamos tu continuidad académica. Ya sea cambio interno o externo, te acompañamos en cada paso administrativo.
          </p>
        </div>

        {/* --- Grid Principal --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* COLUMNA IZQUIERDA: Contenido Detallado */}
          <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
            
            {/* BLOQUE: Requisitos */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-blue-900/5 border border-slate-100">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3" style={{ color: COLORS.primary }}>
                <CheckCircle2 className="w-6 h-6" style={{ color: COLORS.gold }} />
                Documentación Requerida
              </h3>
              
              <div className="grid gap-6">
                {/* Requisito: FUT */}
                <div className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 text-slate-400 group-hover:text-white transition-all group-hover:shadow-lg" style={{ '--hover-bg': COLORS.primary } as any}>
                    <FileText size={24} className="group-hover:text-[#D8A24C]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg" style={{ color: COLORS.primary }}>Solicitud FUT Virtual</h4>
                    <p className="text-slate-500 text-sm mb-3">Llenado oficial a través de nuestra plataforma de trámites.</p>
                    <Link 
                      href="https://forms.gle/JEvVt4DXUa7s4wkz6" 
                      target="_blank" 
                      className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider transition-colors"
                      style={{ color: COLORS.terracotta }}
                    >
                      Abrir Formulario <ExternalLink size={14} />
                    </Link>
                  </div>
                </div>

                {/* Requisito: Certificado */}
                <div className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 text-slate-400">
                    <Award size={24} className="group-hover:text-[#D8A24C]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg" style={{ color: COLORS.primary }}>Certificado de Estudios</h4>
                    <p className="text-slate-500 text-sm">Documento original de la institución de procedencia (Traslado Externo).</p>
                  </div>
                </div>

                {/* Requisito: Pago */}
                <div className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 text-slate-400">
                    <CreditCard size={24} className="group-hover:text-[#D8A24C]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg" style={{ color: COLORS.primary }}>Derecho de Trámite</h4>
                    <p className="text-slate-500 text-sm">Comprobante de pago según el TUPA institucional vigente.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOQUE: Procedimiento Estilo Timeline */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-blue-900/5 border border-slate-100">
              <h3 className="text-2xl font-black mb-10" style={{ color: COLORS.primary }}>Flujo de Aprobación</h3>
              <div className="space-y-0 relative">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-6 relative pb-8 last:pb-0">
                    {index !== steps.length - 1 && (
                      <div className="absolute left-[19px] top-10 w-[2px] h-full bg-slate-100"></div>
                    )}
                    <div 
                      className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-black text-xs border-2 shadow-sm bg-white"
                      style={{ color: COLORS.primary, borderColor: COLORS.gold }}
                    >
                      {index + 1}
                    </div>
                    <div className="pt-1">
                      <h4 className="font-extrabold text-slate-800 tracking-tight">{step.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BLOQUE: Costos Inversión */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CostCard label="Interno" amount="350.00" type="primary" />
              <CostCard label="Externo" amount="350.00" type="outline" />
            </div>
          </div>

          {/* COLUMNA DERECHA: Imagen y Badge */}
          <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-12 order-1 lg:order-2">
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-4 rounded-[3rem] border-2 border-dashed opacity-20" style={{ borderColor: COLORS.gold }}></div>
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/img/traslado.png" 
                  alt="Trámite de traslado"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B355C]/80 via-transparent to-transparent"></div>
                
                {/* Floating Info */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <p className="text-white font-bold flex items-center gap-2">
                    <ChevronRight size={18} style={{ color: COLORS.gold }} /> 
                    Trámite 100% oficial
                  </p>
                  <p className="text-white/70 text-xs mt-1">Sujeto a disponibilidad de vacantes y evaluación académica.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- Componente de Soporte: CostCard ---
function CostCard({ label, amount, type }: { label: string, amount: string, type: 'primary' | 'outline' }) {
  const isPrimary = type === 'primary';
  return (
    <div 
      className={`p-8 rounded-[2rem] text-center transition-all hover:scale-105 shadow-xl`}
      style={{ 
        backgroundColor: isPrimary ? COLORS.primary : 'white',
        border: isPrimary ? 'none' : `2px solid ${COLORS.primary}`,
        boxShadow: isPrimary ? `0 20px 25px -5px ${COLORS.primary}40` : 'none'
      }}
    >
      <span className={`text-xs font-black uppercase tracking-[0.2em] mb-3 block ${isPrimary ? 'text-white/60' : 'text-slate-400'}`}>
        Traslado {label}
      </span>
      <div className={`flex items-baseline justify-center gap-1 ${isPrimary ? 'text-white' : ''}`} style={{ color: !isPrimary ? COLORS.primary : '' }}>
        <span className="text-lg font-bold">S/</span>
        <span className="text-4xl font-black tracking-tighter">{amount}</span>
      </div>
    </div>
  );
}