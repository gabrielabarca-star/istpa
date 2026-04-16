import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProfessionalAccordion from "@/components/sections/ProfessionalAccordion";
import HealthCampaigns from "@/components/sections/HealthCampaigns";
import Testimonials2 from "@/components/sections/Testimonials2";

const COLORS = {
  primary: '#1B355C',   // Azul Institucional
  gold: '#D8A24C',      // Dorado
  terracotta: '#C8663E', // Terracota
  bgLight: '#F8FAFC'
};

export default function PorQueIstpaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Banner Hero con Estilo Institucional */}
        <section className="relative h-[450px] w-full overflow-hidden">
          <Image
            src="/img/cabeceras/porque-istpa.png"
            alt="¿Por qué ISTPA? - IES Privado del Altiplano"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay de gradiente idéntico al anterior */}
          <div 
            className="absolute inset-0 opacity-75" 
            style={{ background: `linear-gradient(to right, ${COLORS.primary}, transparent)` }}
          />
          
          <div className="container relative mx-auto flex h-full items-center px-6">
            <div className="max-w-3xl">
              <span 
                className="inline-block px-4 py-1 mb-4 text-xs font-black uppercase tracking-[0.3em] text-white rounded-full"
                style={{ backgroundColor: COLORS.terracotta }}
              >
                Tu mejor elección
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase">
                ¿Por qué <br />
                <span style={{ color: COLORS.gold }}>ISTPA?</span>
              </h1>
              <div className="mt-6 w-20 h-2 rounded-full" style={{ backgroundColor: COLORS.gold }} />
            </div>
          </div>
        </section>

       
      
    
    <WhyChooseUs />
    
   
    <ProfessionalAccordion/>
    
    
    <HealthCampaigns/>
    
    <Testimonials2/> 
    
      </main>
      <Footer />
    </div>
  );
}
