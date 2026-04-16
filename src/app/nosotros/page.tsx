import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import  HistoriaTimeline  from "@/components/sections/HistoriaTimeline";
import CompanyInfo from "@/components/sections/CompanyInfo";
import TeamCarousel from "@/components/sections/TeamCarousel";
import InstitutionalOrgChart from "@/components/sections/InstitutionalOrgChart";



const COLORS = {
  primary: '#1B355C',   // Azul Institucional
  gold: '#D8A24C',      // Dorado
  terracotta: '#C8663E', // Terracota
  bgLight: '#F8FAFC'
};

export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Banner Hero con Overlay Mejorado */}
        <section className="relative h-[450px] w-full overflow-hidden">
          <Image
            src="/img/cabeceras/nosotros.png"
            alt="Nosotros - IES Privado del Altiplano"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay de gradiente para legibilidad */}
          <div 
            className="absolute inset-0 opacity-70" 
            style={{ background: `linear-gradient(to right, ${COLORS.primary}, transparent)` }}
          />
          
          <div className="container relative mx-auto flex h-full items-center px-6">
            <div className="max-w-2xl">
              <span 
                className="inline-block px-4 py-1 mb-4 text-xs font-black uppercase tracking-[0.3em] text-white rounded-full"
                style={{ backgroundColor: COLORS.terracotta }}
              >
                Trayectoria y Valores
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase">
                Sobre <br />
                <span style={{ color: COLORS.gold }}>Nosotros</span>
              </h1>
              <div className="mt-6 w-20 h-2 rounded-full" style={{ backgroundColor: COLORS.gold }} />
            </div>
          </div>
        </section>

        {/* IMPORTANTE: Añadimos 'scroll-mt-20' para compensar la altura del header (h-20) 
        */}
        <section id="HistoriaTimeline" className="scroll-mt-20">
          <HistoriaTimeline />
        </section>
 
        <section id="CompanyInfo" className="scroll-mt-20">
          <CompanyInfo />
        </section>

        <section id="TeamCarousel" className="scroll-mt-20">
          <TeamCarousel />
        </section>
        <section id="InstitutionalOrgChart" className="scroll-mt-20">
          <InstitutionalOrgChart />
        </section>
      </main>
      <Footer />
    </div>
  );
}