import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const modalities = [
  {
    title: 'Examen de Suficiencia',
    description: 'Demuestra tus conocimientos y obtén tu título de manera rápida y eficiente. Ideal para quienes ya dominan su campo.',
    imageSrc: 'https://picsum.photos/500/350?random=12',
    dataAiHint: 'student exam',
  },
  {
    title: 'Trabajo de Aplicación Profesional',
    description: 'Aplica lo aprendido en un proyecto real que solucione un problema concreto. Perfecto para mostrar tu capacidad innovadora.',
    imageSrc: 'https://picsum.photos/500/350?random=13',
    dataAiHint: 'team project',
  },
];

export default function DegreeOptions() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Modalidades para Sacar tu Título
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Te ofrecemos flexibilidad para que elijas la opción que mejor se adapte a ti.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {modalities.map((modality) => (
            <Card key={modality.title} className="group overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-interactive">
              <div className="overflow-hidden rounded-t-lg">
                <Image
                  src={modality.imageSrc}
                  alt={modality.title}
                  width={500}
                  height={350}
                  className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-95"
                  data-ai-hint={modality.dataAiHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{modality.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{modality.description}</CardDescription>
                <Button asChild variant="link" className="mt-4 p-0 text-primary">
                  <Link href="#">
                    Saber más
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
