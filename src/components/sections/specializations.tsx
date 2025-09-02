"use client"

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const specializations = [
  {
    name: "Enfermería Técnica",
    images: [
      { src: "https://picsum.photos/300/200?random=14", alt: "Enfermería 1", dataAiHint: "nursing practice" },
      { src: "https://picsum.photos/300/200?random=15", alt: "Enfermería 2", dataAiHint: "patient care" },
      { src: "https://picsum.photos/300/200?random=16", alt: "Enfermería 3", dataAiHint: "medical equipment" },
    ]
  },
  {
    name: "Formación Técnica",
    images: [
      { src: "https://picsum.photos/300/200?random=17", alt: "Técnica 1", dataAiHint: "technical workshop" },
      { src: "https://picsum.photos/300/200?random=18", alt: "Técnica 2", dataAiHint: "engineering student" },
    ]
  },
  {
    name: "Cosmiatría",
    images: [
      { src: "https://picsum.photos/300/200?random=19", alt: "Cosmiatría 1", dataAiHint: "beauty treatment" },
      { src: "https://picsum.photos/300/200?random=20", alt: "Cosmiatría 2", dataAiHint: "skin care" },
      { src: "https://picsum.photos/300/200?random=21", alt: "Cosmiatría 3", dataAiHint: "spa therapy" },
      { src: "https://picsum.photos/300/200?random=22", alt: "Cosmiatría 4", dataAiHint: "facial mask" },
    ]
  },
  {
    name: "Nutrición y Dietética",
    images: [
      { src: "https://picsum.photos/300/200?random=23", alt: "Nutrición 1", dataAiHint: "healthy food" },
      { src: "https://picsum.photos/300/200?random=24", alt: "Nutrición 2", dataAiHint: "diet plan" },
    ]
  }
];

export default function Specializations() {
  return (
    <section className="bg-card py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Explora Nuestras Especializaciones
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Amplía tus horizontes profesionales con nuestros cursos de alta especialización.
          </p>
        </div>
        <Tabs defaultValue={specializations[0].name} orientation="vertical" className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          <TabsList className="flex h-auto flex-col justify-start gap-2 bg-transparent p-0">
            {specializations.map((spec) => (
              <TabsTrigger
                key={spec.name}
                value={spec.name}
                className="w-full justify-start rounded-lg px-4 py-3 text-left text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
              >
                {spec.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="md:col-span-3">
            {specializations.map((spec) => (
              <TabsContent key={spec.name} value={spec.name} className="m-0">
                <div className="grid grid-cols-2 gap-4">
                  {spec.images.map((image) => (
                    <div key={image.src} className="group relative aspect-video overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        data-ai-hint={image.dataAiHint}
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
