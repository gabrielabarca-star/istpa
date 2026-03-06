import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import StudentAttentionSection from "@/components/sections/StudentAttentionSection";


export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-neutral-textDark">
      <Header />
      <main className="flex-1">
        <section className="relative h-80 bg-primary">
          <Image
            src="/img/cabeceras/atencion-estudiante.png"
            alt="admision"
            fill
            className="object-cover object-[center_20%] "
            data-ai-hint="admision"
          />
          <div className="relative flex h-full items-center justify-center">
            <h1 className="font-headline text-4xl font-bold text-primary-foreground md:text-6xl">
              Atención al Estudiante
            </h1>
          </div>
        </section>

        <StudentAttentionSection/>
        
        
      </main>
      <Footer />
    </div>
  );
}
