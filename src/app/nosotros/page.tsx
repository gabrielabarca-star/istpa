import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import  HistoriaTimeline  from "@/components/sections/HistoriaTimeline";
import CompanyInfo from "@/components/sections/CompanyInfo";
import TeamCarousel from "@/components/sections/TeamCarousel";
import InstitutionalOrgChart from "@/components/sections/InstitutionalOrgChart";



export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-neutral-textDark">
      <Header />
      <main className="flex-1">
        {/* Banner Hero */}
        <section className="relative h-80 bg-primary">
          <Image
            src="/img/cabeceras/nosotros.png"
            alt="nosotros"
            fill
            className="object-cover "
            priority
          />
          <div className="relative flex h-full items-center justify-center">
            <h1 className="font-headline text-4xl font-bold text-primary-foreground md:text-6xl">
              Sobre Nosotros
            </h1>
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