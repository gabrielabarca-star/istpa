import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Telescope, Gem, Target } from "lucide-react";
import Contact from "@/components/sections/contact";



export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-neutral-textDark">
      <Header />
      <main className="flex-1">
        <section className="relative h-80 bg-primary">
          <Image
            src="/img/cabeceras/plana-docente.png"
            alt="Campus del instituto"
            fill
            className="object-cover"
            data-ai-hint="university campus"
          />
          <div className="relative flex h-full items-center justify-center">
            <h1 className="font-headline text-4xl font-bold text-primary-foreground md:text-6xl">
              Nuestros Docentes 
            </h1>
          </div>
        </section>

        <Contact/>
        
       

      </main>
      <Footer />
    </div>
  );
}
