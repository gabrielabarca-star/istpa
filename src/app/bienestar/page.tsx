import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import BienestarSection from "@/components/sections/BienestarSection";
import WellbeingServicesSection from "@/components/sections/WellbeingServicesSection";
import FaqBienestarSection from "@/components/sections/FaqBienestarSection";

export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-neutral-textDark">
      <Header />
      <main className="flex-1">
        <section className="relative h-80 bg-primary">
          <Image
            src="/img/cabeceras/bienestar.png"
            alt="bienestar"
            fill
            className="object-cover "
            data-ai-hint="bienestar"
          />
          <div className="relative flex h-full items-center justify-center">
            <h1 className="font-headline text-4xl font-bold text-primary-foreground md:text-6xl">
              Bienestar y Empleabilidad
            </h1>
          </div>
        </section>

        <BienestarSection/>
        <WellbeingServicesSection/>
        <FaqBienestarSection/>
       

      </main>
      <Footer />
    </div>
  );
}
