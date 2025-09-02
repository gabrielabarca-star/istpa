"use client";

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PlayCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana García',
    career: 'Egresada de Enfermería',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://picsum.photos/400/300?random=8',
    dataAiHint: 'happy student',
  },
  {
    name: 'Carlos Vera',
    career: 'Egresado de Contabilidad',
    videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    thumbnail: 'https://picsum.photos/400/300?random=9',
    dataAiHint: 'professional man',
  },
  {
    name: 'Sofía Martinez',
    career: 'Egresada de Farmacia',
    videoUrl: 'https://www.youtube.com/embed/s-X_J6_K2z0',
    thumbnail: 'https://picsum.photos/400/300?random=10',
    dataAiHint: 'smiling woman',
  },
  {
    name: 'Luis Fernandez',
    career: 'Estudiante de Enfermería',
    videoUrl: 'https://www.youtube.com/embed/p7YXXieghto',
    thumbnail: 'https://picsum.photos/400/300?random=11',
    dataAiHint: 'male student',
  },
];

export default function Testimonials() {
  const [open, setOpen] = React.useState(false);
  const [selectedVideo, setSelectedVideo] = React.useState('');

  const handleOpen = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setOpen(true);
  };
  
  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Testimonios de Nuestra Comunidad
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Escucha las historias de éxito de nuestros estudiantes y egresados.
          </p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="mt-12 w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <DialogTrigger asChild onClick={() => handleOpen(testimonial.videoUrl)}>
                      <Card className="group cursor-pointer overflow-hidden bg-card text-card-foreground">
                        <CardContent className="relative aspect-video p-0">
                          <Image
                            src={testimonial.thumbnail}
                            alt={`Testimonio de ${testimonial.name}`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            data-ai-hint={testimonial.dataAiHint}
                          />
                          <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <PlayCircle className="h-16 w-16 text-white/80 transition-all group-hover:scale-110 group-hover:text-white" />
                          </div>
                          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                            <h3 className="font-semibold text-white">{testimonial.name}</h3>
                            <p className="text-sm text-white/80">{testimonial.career}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-12" />
            <CarouselNext className="mr-12" />
          </Carousel>

          <DialogContent className="max-w-3xl p-0">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
