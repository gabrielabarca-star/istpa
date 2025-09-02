import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Stethoscope, Calculator, Pill } from 'lucide-react';
import type { ReactNode } from 'react';
import Link from 'next/link';

interface Career {
  title: string;
  description: string;
  image: string;
  dataAiHint: string;
  icon: ReactNode;
  headerColor: string;
}

const careers: Career[] = [
  {
    title: 'Enfermería Técnica',
    description: 'Conviértete en un profesional de la salud esencial, brindando cuidado y apoyo a pacientes.',
    image: 'https://picsum.photos/400/250?random=4',
    dataAiHint: "nursing care",
    icon: <Stethoscope className="h-10 w-10 text-primary-foreground" />,
    headerColor: 'bg-primary'
  },
  {
    title: 'Contabilidad',
    description: 'Domina el lenguaje de los negocios y sé clave en la toma de decisiones financieras.',
    image: 'https://picsum.photos/400/250?random=5',
    dataAiHint: "financial accounting",
    icon: <Calculator className="h-10 w-10 text-accent-yellow" />,
    headerColor: 'bg-accent-yellow'
  },
  {
    title: 'Técnico en Farmacia',
    description: 'Aprende sobre la dispensación de medicamentos y la atención farmacéutica al público.',
    image: 'https://picsum.photos/400/250?random=6',
    dataAiHint: "pharmacy technician",
    icon: <Pill className="h-10 w-10 text-secondary-foreground" />,
    headerColor: 'bg-secondary'
  },
];

export default function Careers() {
  return (
    <section id="careers" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Nuestras Carreras
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Elige tu camino profesional con nuestros programas técnicos de alta demanda laboral.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {careers.map((career) => (
            <Card key={career.title} className="group overflow-hidden text-center shadow-lg transition-all duration-300 hover:shadow-interactive hover:-translate-y-2">
              <CardHeader className={`flex flex-col items-center justify-center p-8 text-primary-foreground ${career.headerColor}`}>
                {career.icon}
                <CardTitle className={`mt-4 text-2xl font-bold ${career.title === 'Contabilidad' ? 'text-primary' : 'text-primary-foreground'}`}>{career.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription className="min-h-[3rem] text-base">{career.description}</CardDescription>
                <Button asChild variant="secondary" className="mt-6 border-primary text-primary hover:bg-primary/10">
                  <Link href="#">Conoce más</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
