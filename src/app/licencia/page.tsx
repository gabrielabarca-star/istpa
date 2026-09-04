import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";

import LicensingStatusSection from "@/components/sections/LicensingStatusSection";

const COLORS = {
  primary: '#1B355C',   // Azul Institucional
  gold: '#D8A24C',      // Dorado
  terracotta: '#C8663E', // Terracota
};

export default function LicenciamientoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Banner Hero con Estilo Institucional y Filtro de Alta Calidad */}
        <section className="relative h-[500px] w-full overflow-hidden group">
          <Image
            src="/img/cabeceras/matriculas.png"
            alt="Estado de Licenciamiento - ISTPA"
            fill
            className="object-cover transition-transform duration-[20s] ease-linear group-hover:scale-110"
            priority
          />
          
          {/* Overlay Institucional: Gradiente dinámico de alta legibilidad */}
          <div 
            className="absolute inset-0 z-10" 
            style={{ 
              background: `linear-gradient(90deg, ${COLORS.primary} 0%, ${COLORS.primary}E6 35%, ${COLORS.primary}66 70%, transparent 100%)`,
              backdropFilter: 'contrast(1.1) brightness(0.95)'
            }}
          />
          
          {/* Capa de viñeta para profundidad visual */}
          <div className="absolute inset-0 z-10 bg-black/10 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]" />

          <div className="container relative mx-auto flex h-full items-center px-6 z-20">
            <div className="max-w-4xl animate-in fade-in slide-in-from-left-10 duration-1000">
              <span 
                className="inline-block px-5 py-2 mb-6 text-[11px] font-black uppercase tracking-[0.4em] text-white rounded-lg"
                style={{ 
                  backgroundColor: COLORS.terracotta,
                  boxShadow: `0 8px 20px -6px ${COLORS.terracotta}`
                }}
              >
                Garantía de Calidad
              </span>
              
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter drop-shadow-2xl">
                Licenciamiento
              </h1>
              
              {/* Elementos decorativos (Barras doradas) */}
              <div className="mt-10 flex items-center gap-3">
                <div className="h-2 w-24 rounded-full" style={{ backgroundColor: COLORS.gold }} />
                <div className="h-2 w-6 rounded-full opacity-60" style={{ backgroundColor: COLORS.gold }} />
                <div className="h-2 w-3 rounded-full opacity-30" style={{ backgroundColor: COLORS.gold }} />
              </div>
            </div>
          </div>
        </section>
        
        <LicensingStatusSection />
       
      </main>
      <Footer />
    </div>
  );
}