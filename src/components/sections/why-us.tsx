import Image from 'next/image';
import { Award, Briefcase, Users, HeartHandshake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  { icon: Award, title: "Calidad Educativa", description: "Programas licenciados y docentes expertos." },
  { icon: Briefcase, title: "Alta Empleabilidad", description: "Convenios con las mejores empresas del país." },
  { icon: Users, title: "Comunidad Fuerte", description: "Una red de más de 65,000 egresados." },
  { icon: HeartHandshake, title: "Soporte Continuo", description: "Te acompañamos en cada paso de tu formación." },
];

const FlippableCard = ({ benefit }: { benefit: Benefit }) => {
  const Icon = benefit.icon;
  return (
    <div className="group h-48 w-full [perspective:1000px]">
      <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute flex h-full w-full flex-col items-center justify-center rounded-lg bg-card p-4 [backface-visibility:hidden]">
          <div className="mb-4 rounded-full bg-secondary p-3">
            <Icon className="h-8 w-8 text-secondary-foreground" />
          </div>
          <h3 className="text-center font-headline text-lg font-semibold text-primary">{benefit.title}</h3>
        </div>
        {/* Back */}
        <div className="absolute h-full w-full rounded-lg bg-primary p-4 text-primary-foreground [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex h-full flex-col items-center justify-center">
            <p className="text-center text-sm">{benefit.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function WhyUs() {
  return (
    <section id="why-us" className="bg-card py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            ¿Por qué elegir Carrión?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Descubre las ventajas que nos convierten en tu mejor opción para un futuro exitoso.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <FlippableCard benefit={benefits[0]} />
            <FlippableCard benefit={benefits[1]} />
          </div>
          <div className="relative order-first h-96 w-full lg:order-none">
            <Image
              src="https://picsum.photos/400/600?random=7"
              alt="Estudiante sonriendo"
              width={400}
              height={600}
              className="mx-auto h-full w-auto rounded-lg object-cover"
              data-ai-hint="smiling student"
            />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <FlippableCard benefit={benefits[2]} />
            <FlippableCard benefit={benefits[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
