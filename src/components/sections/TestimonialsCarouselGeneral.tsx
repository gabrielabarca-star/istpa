"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Testimonial { 
  id: number; 
  name: string; 
  career: string; 
  imageUrl: string; 
  videoUrl: string; 
}

const testimonialsData: Testimonial[] = [
  { id: 1, name: 'Dina Figueroa', career: 'Enfermería Técnica', imageUrl: '/img/testimonials/dina_figueroa.png', videoUrl: 'https://youtu.be/KqhW5SlvBu4' },
  { id: 2, name: 'Zuleyka Ramirez', career: 'Farmacia Técnica', imageUrl: '/img/testimonials/zuleyka_ramirez.png', videoUrl: 'https://youtu.be/9mBkEovQOTI' },
  { id: 3, name: 'Patricia Coila', career: 'Enfermería Técnica', imageUrl: '/img/testimonials/patricia_coila.png', videoUrl: 'https://youtu.be/jZREsT75QHY' },
  { id: 4, name: 'Naldy Ramos', career: 'Enfermería Técnica', imageUrl: '/img/testimonials/naldy_ramos.png', videoUrl: 'https://youtu.be/m1oKPzyIubw' },
];

const colors = { 
  primary: '#1B355C', 
  accent: '#C8663E', 
  light: '#F8FAFC' 
};

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

  return (
    <>
      <section className="w-full py-24 overflow-hidden relative" style={{ backgroundColor: colors.primary }}>
        {/* Decoración de fondo (Brillos difusos) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ backgroundColor: colors.accent }}></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-[120px] opacity-10 bg-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-[0.4em] mb-4 block" style={{ color: colors.accent }}>Historias de Éxito</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                TESTIMONIOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">ISTPA</span>
            </h2>
            <div className="w-20 h-1.5 mt-6 mx-auto rounded-full" style={{ backgroundColor: colors.accent }}></div>
          </div>

          <div className="relative testimonial-carousel">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: true }}
              coverflowEffect={{
                rotate: 5,
                stretch: 0,
                depth: 150,
                modifier: 1.5,
                slideShadows: false,
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation={{ nextEl: '.nav-next', prevEl: '.nav-prev' }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="w-full !pb-20"
            >
              {testimonialsData.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="!w-[300px] sm:!w-[500px] md:!w-[700px]">
                  <div 
                    className="relative aspect-video rounded-[2rem] overflow-hidden group cursor-pointer shadow-2xl border border-white/10"
                    onClick={() => handleOpenModal(testimonial.videoUrl)}
                  >
                    <Image 
                      src={testimonial.imageUrl} 
                      alt={testimonial.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    
                    {/* Glass Overlay Inferior */}
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex justify-between items-end">
                      <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                        <h3 className="text-white text-2xl font-black italic tracking-tighter">{testimonial.name}</h3>
                        <p className="text-orange-400 text-sm font-bold uppercase tracking-widest">{testimonial.career}</p>
                      </div>
                      
                      {/* Botón Play Estilizado */}
                      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center transform transition-all duration-500 group-hover:bg-orange-600 group-hover:scale-110 group-hover:rotate-[360deg]">
                        <Play className="text-white w-6 h-6 fill-current" />
                      </div>
                    </div>

                    {/* Efecto de luz al pasar el cursor */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navegación Minimalista */}
            <button className="nav-prev absolute top-1/2 -left-4 lg:-left-20 z-20 -translate-y-1/2 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#1B355C] transition-all duration-300 hidden xl:flex">
              <ChevronLeft size={32} />
            </button>
            <button className="nav-next absolute top-1/2 -right-4 lg:-right-20 z-20 -translate-y-1/2 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#1B355C] transition-all duration-300 hidden xl:flex">
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* Modal de Video optimizado */}
      {isModalOpen && selectedVideoId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setIsModalOpen(false)}>
            <div className="relative w-full max-w-5xl shadow-2xl border border-white/10 rounded-3xl overflow-hidden" onClick={e => e.stopPropagation()}>
                <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-orange-600 transition-colors">
                    <X size={24} />
                </button>
                <div className="aspect-video bg-black">
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&rel=0`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
      )}
    </>
  );
}