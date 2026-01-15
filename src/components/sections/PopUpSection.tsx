"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// --- Iconos SVG (Mantenidos) ---
const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
   <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.06 21.94L7.35 20.58C8.77 21.39 10.37 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.13C10.56 20.13 9.12 19.75 7.85 19.03L7.47 18.81L4.27 19.71L5.18 16.61L4.95 16.22C4.18 14.86 3.76 13.39 3.76 11.91C3.76 7.36 7.47 3.69 12.04 3.69C16.61 3.69 20.32 7.36 20.32 11.91C20.32 16.46 16.61 20.13 12.04 20.13ZM17.36 14.23C17.11 14.11 15.63 13.43 15.41 13.34C15.19 13.26 15.04 13.21 14.88 13.46C14.73 13.71 14.24 14.33 14.1 14.48C13.96 14.63 13.82 14.66 13.57 14.53C13.32 14.41 12.38 14.09 11.29 13.1C10.42 12.33 9.83 11.4 9.68 11.15C9.53 10.9 9.6 10.79 9.71 10.67C9.81 10.56 9.95 10.38 10.09 10.21C10.23 10.04 10.28 9.92 10.38 9.77C10.48 9.62 10.43 9.47 10.38 9.35C10.33 9.23 9.8 8.04 9.61 7.56C9.42 7.08 9.23 7.15 9.08 7.14C8.94 7.13 8.79 7.13 8.64 7.13C8.49 7.13 8.25 7.18 8.03 7.43C7.81 7.68 7.31 8.13 7.31 9.35C7.31 10.57 8.06 11.74 8.21 11.89C8.36 12.04 9.83 14.35 12.09 15.22C14.35 16.09 14.35 15.68 14.96 15.61C15.57 15.54 16.89 14.79 17.11 14.53C17.33 14.28 17.33 14.08 17.36 14.23Z"/>
  </svg>
);

export default function PopUpSection() {
    const [isVisible, setIsVisible] = useState(false);

    // Efecto para mostrar el popup después de 1 segundo
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        // Contenedor fijo (Overlay)
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in">
            
            {/* Click afuera para cerrar */}
            <div 
                className="absolute inset-0 cursor-pointer" 
                onClick={() => setIsVisible(false)}
            ></div>
            
            {/* Tarjeta del Pop-up */}
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md overflow-hidden transform transition-all scale-100 animate-in zoom-in-95 duration-300 flex flex-col">
                
                {/* Botón Cerrar (X) - Ahora flotante sobre la imagen */}
                <button 
                    onClick={() => setIsVisible(false)}
                    className="absolute top-3 right-3 bg-white/80 backdrop-blur-md p-2 rounded-full hover:bg-white transition-colors z-20 shadow-sm border border-gray-100"
                    aria-label="Cerrar"
                >
                    <CloseIcon className="w-5 h-5 text-gray-700" />
                </button>

                {/* IMAGEN DEL ANUNCIO (Reemplaza al texto y cabecera) */}
                <div className="relative w-full aspect-[4/3] sm:aspect-video bg-gray-100">
                     {/* NOTA: Reemplaza 'src' con la ruta de tu imagen real.
                        Ejemplo: /images/promo-matricula.jpg
                     */}
                    <img 
                        src="/img/pop_up.jpeg" 
                        alt="Anuncio Importante"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Área de Botones (Footer) */}
                <div className="p-6 bg-white flex flex-col gap-3">
                    
                    {/* Botón de WhatsApp */}
                    <Link 
                        href="https://wa.me/51912503627" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3.5 px-6 rounded-full transition-all transform hover:scale-[1.02] shadow-lg active:scale-95"
                    >
                        <WhatsAppIcon className="w-6 h-6" />
                        <span>Más Información</span>
                    </Link>
                    
                    {/* Botón secundario para cerrar */}
                    <button 
                        onClick={() => setIsVisible(false)}
                        className="text-sm text-slate-400 hover:text-[#002A5D] underline decoration-dotted underline-offset-4 transition-colors py-1 mx-auto"
                    >
                        No gracias, cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}