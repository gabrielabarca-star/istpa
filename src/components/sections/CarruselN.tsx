// components/CarruselN.tsx

"use client"; // Este componente necesita ser de cliente por la interactividad del carrusel

import React from 'react';
import Image from 'next/image';

// Importaciones de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// --- Datos para las 3 imágenes del carrusel ---
// Reemplaza las rutas y el texto alternativo con tu propia información
const slidesData = [
  {
    id: 1,
    src: '/img/Csabiduria.png',
    alt: 'Descripción del primer banner',
  },
  {
    id: 2,
    src: '/img/news/test1 - braddy Gabriel Abarca abarca.jpg',
    alt: 'Descripción del segundo banner',
  },
  {
    id: 3,
    src: '/banners/banner-3.jpg',
    alt: 'Descripción del tercer banner',
  },
];

// --- Iconos para los botones de navegación (opcional, pero mejora el estilo) ---
const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
);
const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
);


export default function CarruselN() {
  return (
    <section className="relative w-full">
      <Swiper
        // Módulos que vamos a usar: Autoplay, Pagination y Navigation
        modules={[Autoplay, Pagination, Navigation]}
        // Centra la diapositiva activa
        centeredSlides={true}
        // Activa el autoplay
        autoplay={{
          delay: 4000, // Intervalo de 4 segundos
          disableOnInteraction: false, // El autoplay no se detiene si el usuario interactúa
        }}
        // Activa la paginación (los puntos inferiores)
        pagination={{
          clickable: true, // Permite hacer clic en los puntos para navegar
        }}
        // Activa los botones de navegación (las flechas)
        navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
        }}
        // Hace que el carrusel sea un bucle infinito
        loop={true}
        className="w-full h-auto"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Contenedor para mantener la proporción de la imagen */}
            <div className="w-full aspect-[1920/500] relative">
              <Image
                src={slide.src}
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
                priority={slide.id === 1} // Carga la primera imagen con prioridad
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Botones de navegación personalizados */}
      <div className="swiper-button-prev-custom absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer bg-black bg-opacity-30 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-50 transition-opacity">
        <ChevronLeftIcon />
      </div>
      <div className="swiper-button-next-custom absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer bg-black bg-opacity-30 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-50 transition-opacity">
        <ChevronRightIcon />
      </div>
    </section>
  );
}