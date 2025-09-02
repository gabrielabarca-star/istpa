import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const newsItems = [
  {
    title: "Nueva alianza estratégica para prácticas profesionales",
    description: "Hemos firmado un convenio con la red de clínicas más grande del país para beneficiar a nuestros estudiantes.",
    imageSrc: "https://picsum.photos/400/250?random=25",
    dataAiHint: "business handshake",
    category: "Convenios",
    date: "15 de Julio, 2024",
  },
  {
    title: "Jornada de salud gratuita para la comunidad",
    description: "Nuestros estudiantes de Enfermería lideraron una exitosa campaña de salud en el centro de la ciudad.",
    imageSrc: "https://picsum.photos/400/250?random=26",
    dataAiHint: "health fair",
    category: "Comunidad",
    date: "10 de Julio, 2024",
  },
  {
    title: "Inauguración de laboratorios de última generación",
    description: "Contamos con nuevos equipos para las carreras de Farmacia y Cosmiatría, a la vanguardia de la tecnología.",
    imageSrc: "https://picsum.photos/400/250?random=27",
    dataAiHint: "science laboratory",
    category: "Institucional",
    date: "5 de Julio, 2024",
  },
];

export default function News() {
  return (
    <section id="news" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Últimas Noticias
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Mantente al día con los eventos, logros y novedades de la comunidad Carrión.
            </p>
          </div>
          <Link href="#" className="text-primary hover:text-secondary font-semibold flex items-center gap-1">
            Ver todas las noticias <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <Link href="#" key={item.title} className="group block">
              <Card className="h-full overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-interactive group-hover:-translate-y-1">
                <div className="relative aspect-video">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={item.dataAiHint}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Badge variant="secondary">{item.category}</Badge>
                    <time dateTime={item.date}>{item.date}</time>
                  </div>
                  <CardTitle className="mt-2 font-headline text-xl text-primary group-hover:text-secondary">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
