import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import LibrarySection from "@/components/sections/LibrarySection";
import LibraryServicesSection from "@/components/sections/LibraryServicesSection";
import AudienceSectionLibrary from "@/components/sections/AudienceSectionLibrary";
import LibraryScheduleSection from "@/components/sections/LibraryScheduleSection";
import LibraryContactSection from "@/components/sections/LibraryContactSection";



export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-neutral-textDark">
      <Header />
      <main className="flex-1">
        <section className="relative h-80 bg-primary">
          <Image
            src="/img/cabeceras/biblioteca.png"
            alt="Campus del instituto"
            fill
            className="object-cover"
            data-ai-hint="university campus"
          />
          <div className="relative flex h-full items-center justify-center">
            <h1 className="font-headline text-4xl font-bold text-primary-foreground md:text-6xl">
              Biblioteca
            </h1>
          </div>
        </section>
        
        <LibrarySection/>
        
        <LibraryServicesSection/>
        
        <AudienceSectionLibrary/>
        <LibraryScheduleSection/>
        <LibraryContactSection/>
        
        
      
        
       

      </main>
      <Footer />
    </div>
  );
}
