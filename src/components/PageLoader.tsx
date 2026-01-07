"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // El loader se mostrará por 5 segundos (5000 ms)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-700 ease-in-out">
      {/* Estilos para la animación de latido */}
      <style jsx>{`
        @keyframes heartbeat {
          0% { transform: scale(1); }
          15% { transform: scale(1.15); }
          30% { transform: scale(1); }
          45% { transform: scale(1.15); }
          60% { transform: scale(1); }
          100% { transform: scale(1); }
        }
        .animate-heartbeat {
          animation: heartbeat 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
        }
      `}</style>

      <div className="relative w-48 h-48 sm:w-64 sm:h-64 animate-heartbeat">
      
        <Image
          src="/img/loader.png" 
          alt="Cargando..."
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  );
}

