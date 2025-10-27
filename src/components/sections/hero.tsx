"use client";

import * as React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    href: "#",
    src: "/img/carrusel.png",
    alt: "Estudiantes colaborando en un laboratorio",
    dataAiHint: "students laboratory",
    width: 1200,
    height: 600,
  },
  {
    href: "#",
    src: "/img/carrusel2.png",
    alt: "Campus moderno del instituto",
    dataAiHint: "modern campus",
    width: 1200,
    height: 600,
  },
  {
    href: "#",
    src: "https://picsum.photos/1200/600?random=3",
    alt: "Alumna de enfermería sonriendo",
    dataAiHint: "nursing student",
    width: 1200,
    height: 600,
  },
];

export default function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Link href={slide.href}>
                <Card className="border-none rounded-none">
                  <CardContent className="relative flex aspect-video items-center justify-center p-0">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                      data-ai-hint={slide.dataAiHint}
                      priority={index === 0}
                    />
                  
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 transform">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </section>
  );
}
