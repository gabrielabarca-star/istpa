import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Telescope, Gem, Target } from "lucide-react";

export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-neutral-textDark">
      <Header />
      <main className="flex-1">
        <section className="relative h-80 bg-primary">
          <Image
            src="https://picsum.photos/1600/400?random=28"
            alt="Campus del instituto"
            fill
            className="object-cover opacity-20"
            data-ai-hint="university campus"
          />
          <div className="relative flex h-full items-center justify-center">
            <h1 className="font-headline text-4xl font-bold text-primary-foreground md:text-6xl">
              Contabilidad
            </h1>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-2 md:items-center md:px-6">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary">Nuestra Historia</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Fundado con la misión de brindar educación técnica de calidad, el Instituto Carrión ha crecido hasta convertirse en un referente en la formación de profesionales de la salud y la gestión. Con más de 50 años de trayectoria, hemos formado a miles de egresados que hoy son líderes en sus campos.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Nuestro compromiso es con la innovación, la excelencia académica y el desarrollo integral de nuestros estudiantes, preparándolos para los desafíos del mundo laboral actual.
              </p>
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://picsum.photos/500/500?random=29"
                alt="Fundadores del instituto"
                fill
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint="historic building"
              />
            </div>
          </div>
        </section>
        
        <section className="bg-card py-16 sm:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card className="border-0 bg-transparent shadow-none text-center">
                <CardHeader className="items-center">
                  <div className="rounded-full bg-secondary p-4">
                     <Target className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="mt-4 font-headline text-2xl text-primary">Misión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Formar profesionales técnicos competentes, con sólidos valores éticos y un alto sentido de responsabilidad social.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-transparent shadow-none text-center">
                <CardHeader className="items-center">
                  <div className="rounded-full bg-secondary p-4">
                     <Telescope className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="mt-4 font-headline text-2xl text-primary">Visión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ser la institución líder en educación técnica a nivel nacional, reconocida por su excelencia académica e innovación.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-transparent shadow-none text-center">
                <CardHeader className="items-center">
                  <div className="rounded-full bg-secondary p-4">
                     <Gem className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="mt-4 font-headline text-2xl text-primary">Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Compromiso, Integridad, Calidad, Respeto e Innovación.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
