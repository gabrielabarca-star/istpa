// components/TestimonialsCarouselGeneral.tsx

"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// Importaciones de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// --- Iconos ---
const PlayIcon = ({ className }: { className?: string }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 6V18L18 12L7 6Z"/></svg> );
const ChevronLeftIcon = ({ className }: { className?: string }) => ( <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg> );
const ChevronRightIcon = ({ className }: { className?: string }) => ( <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg> );
const CloseIcon = ({ className }: { className?: string }) => ( <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg> );

// --- Definición de Tipos y Datos ---
interface Testimonial { id: number; name: string; career: string; imageUrl: string; videoUrl: string; }

// --- !!! IMPORTANTE: REEMPLAZA ESTAS URLS CON LAS DE TUS VIDEOS DE YOUTUBE !!! ---
const testimonialsData: Testimonial[] = [
  { id: 1, name: 'Luz Huamani', career: 'Farmacia Técnica', imageUrl: '/testimonials/testimonial-1.jpg', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  { id: 2, name: 'Carlos Vega', career: 'Enfermería Técnica', imageUrl: '/testimonials/testimonial-2.jpg', videoUrl: 'https://www.youtube.com/watch?v=xvFZjo5PgG0' },
  { id: 3, name: 'Ana Quispe', career: 'Contabilidad', imageUrl: '/testimonials/testimonial-3.jpg', videoUrl: 'https://www.youtube.com/watch?v=G1IbR1V_A2k' },
];

// --- Sub-componente para el Modal de Video ---
const VideoModal = ({ videoId, onClose }: { videoId: string; onClose: () => void }) => (
    <div 
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        onClick={onClose}
    >
        <div className="relative w-full max-w-4xl aspect-video p-4" onClick={(e) => e.stopPropagation()}>
            <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <button
                onClick={onClose}
                className="absolute -top-2 -right-2 bg-white rounded-full p-2 text-black hover:bg-gray-200 transition"
            >
                <CloseIcon className="w-6 h-6" />
            </button>
        </div>
    </div>
);

// --- Función para extraer el ID del video de una URL de YouTube ---
const extractVideoId = (url: string): string | null => {
    try {
        const urlObj = new URL(url);
        if (urlObj.hostname.includes('youtube.com')) return urlObj.searchParams.get('v');
        if (urlObj.hostname.includes('youtu.be')) return urlObj.pathname.slice(1);
        return null;
    } catch { return null; }
};

// --- Componente Principal ---
export default function TestimonialsCarouselGeneral() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  const handleOpenModal = (videoUrl: string) => {
    const videoId = extractVideoId(videoUrl);
    if (videoId) {
        setSelectedVideoId(videoId);
        setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideoId(null);
  };
  
  const colors = { background: '#002a5d', primaryText: '#FFFFFF', accent: '#08d3c4' };

  return (
    <>
      <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.background }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p style={{ color: colors.accent }}>Nuestros alumnos opinan</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>Testimonios Istpa</h2>
            <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          </div>
        </div>

        <div className="relative mt-12 testimonial-carousel">
          <Swiper
            effect={'coverflow'} grabCursor={true} centeredSlides={true}
            slidesPerView={'auto'} loop={true}
            coverflowEffect={{ rotate: 0, stretch: 80, depth: 200, modifier: 1, slideShadows: false }}
            pagination={{ clickable: true }}
            navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="w-full"
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="!w-[300px] sm:!w-[400px]">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                  <Image src={testimonial.imageUrl} alt={`Testimonio de ${testimonial.name}`} layout="fill" objectFit="cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => handleOpenModal(testimonial.videoUrl)}
                        className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-110"
                        aria-label={`Ver testimonio en video de ${testimonial.name}`}
                      >
                        <PlayIcon className="w-8 h-8 text-white" />
                      </button>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-white/80">{testimonial.career}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="swiper-button-prev-custom absolute top-1/2 left-4 sm:left-16 z-10 -translate-y-1/2 cursor-pointer text-white rounded-full w-12 h-12 flex items-center justify-center"><ChevronLeftIcon /></div>
          <div className="swiper-button-next-custom absolute top-1/2 right-4 sm:right-16 z-10 -translate-y-1/2 cursor-pointer text-white rounded-full w-12 h-12 flex items-center justify-center"><ChevronRightIcon /></div>
        </div>
      </section>

      {/* El Modal se renderiza aquí cuando está activo */}
      {isModalOpen && selectedVideoId && (
          <VideoModal videoId={selectedVideoId} onClose={handleCloseModal} />
      )}
    </>
  );
}