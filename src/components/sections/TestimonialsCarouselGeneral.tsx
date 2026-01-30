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

const testimonialsData: Testimonial[] = [
  { id: 1, name: 'Dina Figueroa', career: 'Enfermeria Técnica', imageUrl: '/img/testimonials/dina_figueroa.png', videoUrl: 'https://youtu.be/KqhW5SlvBu4' },
  { id: 2, name: 'Zuleyka Ramirez', career: 'Farmacia Técnica', imageUrl: '/img/testimonials/zuleyka_ramirez.png', videoUrl: 'https://youtu.be/9mBkEovQOTI' },
  { id: 3, name: 'Patricia Coila', career: 'Enfermeria Técnica', imageUrl: '/img/testimonials/patricia_coila.png', videoUrl: 'https://youtu.be/jZREsT75QHY' },
  { id: 3, name: 'Naldy Ramos', career: 'Enfermeria Técnica', imageUrl: '/img/testimonials/naldy_ramos.png', videoUrl: 'https://youtu.be/m1oKPzyIubw' },
];

// --- Sub-componente para el Modal de Video ---
const VideoModal = ({ videoId, onClose }: { videoId: string; onClose: () => void }) => (
    <div 
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
        onClick={onClose}
    >
        <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
                className="w-full h-full rounded-xl shadow-2xl"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <button
                onClick={onClose}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
            >
                <CloseIcon className="w-8 h-8" />
            </button>
        </div>
    </div>
);

// --- Función para extraer el ID del video ---
const extractVideoId = (url: string): string | null => {
    try {
        const urlObj = new URL(url);
        if (urlObj.hostname.includes('youtube.com')) return urlObj.searchParams.get('v');
        if (urlObj.hostname.includes('youtu.be')) return urlObj.pathname.slice(1);
        return null;
    } catch { return null; }
};

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
      <section className="w-full py-16 sm:py-24 overflow-hidden" style={{ backgroundColor: colors.background }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-wider" style={{ color: colors.accent }}>Nuestros alumnos opinan</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-2" style={{ color: colors.primaryText }}>Testimonios Istpa</h2>
            <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          </div>
        </div>

        <div className="relative mt-8 testimonial-carousel px-4">
          <Swiper
            effect={'coverflow'} 
            grabCursor={true} 
            centeredSlides={true}
            slidesPerView={'auto'} 
            loop={true}
            coverflowEffect={{ 
              rotate: 0, 
              stretch: 0, 
              depth: 100, 
              modifier: 2.5, 
              slideShadows: false 
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="w-full !pb-14"
          >
            {testimonialsData.map((testimonial) => (
              /* Ajuste de ancho para formato horizontal: 350px a 600px */
              <SwiperSlide key={testimonial.id} className="!w-[320px] sm:!w-[550px] md:!w-[650px] px-2">
                <div 
                  className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-xl"
                  onClick={() => handleOpenModal(testimonial.videoUrl)}
                >
                  <Image 
                    src={testimonial.imageUrl} 
                    alt={`Testimonio de ${testimonial.name}`} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  
                  {/* Overlay oscurecido */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                  
                  {/* Botón Play Central */}
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/40">
                        <PlayIcon className="w-8 h-8 text-white ml-1" />
                      </div>
                  </div>
                  
                  {/* Información inferior */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h3 className="text-white text-lg sm:text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-white/80 text-sm sm:text-base">{testimonial.career}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Controles de navegación */}
          <div className="swiper-button-prev-custom absolute top-1/2 left-2 lg:left-10 z-10 -translate-y-1/2 cursor-pointer text-white/50 hover:text-white transition-colors hidden md:block">
            <ChevronLeftIcon className="w-12 h-12" />
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 right-2 lg:right-10 z-10 -translate-y-1/2 cursor-pointer text-white/50 hover:text-white transition-colors hidden md:block">
            <ChevronRightIcon className="w-12 h-12" />
          </div>
        </div>
      </section>

      {isModalOpen && selectedVideoId && (
          <VideoModal videoId={selectedVideoId} onClose={handleCloseModal} />
      )}
    </>
  );
}