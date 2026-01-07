// components/TopicContactSection.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- Iconos SVG ---
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.06 21.94L7.35 20.58C8.77 21.39 10.37 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.13C10.56 20.13 9.12 19.75 7.85 19.03L7.47 18.81L4.27 19.71L5.18 16.61L4.95 16.22C4.18 14.86 3.76 13.39 3.76 11.91C3.76 7.36 7.47 3.69 12.04 3.69C16.61 3.69 20.32 7.36 20.32 11.91C20.32 16.46 16.61 20.13 12.04 20.13ZM17.36 14.23C17.11 14.11 15.63 13.43 15.41 13.34C15.19 13.26 15.04 13.21 14.88 13.46C14.73 13.71 14.24 14.33 14.1 14.48C13.96 14.63 13.82 14.66 13.57 14.53C13.32 14.41 12.38 14.09 11.29 13.1C10.42 12.33 9.83 11.4 9.68 11.15C9.53 10.9 9.6 10.79 9.71 10.67C9.81 10.56 9.95 10.38 10.09 10.21C10.23 10.04 10.28 9.92 10.38 9.77C10.48 9.62 10.43 9.47 10.38 9.35C10.33 9.23 9.8 8.04 9.61 7.56C9.42 7.08 9.23 7.15 9.08 7.14C8.94 7.13 8.79 7.13 8.64 7.13C8.49 7.13 8.25 7.18 8.03 7.43C7.81 7.68 7.31 8.13 7.31 9.35C7.31 10.57 8.06 11.74 8.21 11.89C8.36 12.04 9.83 14.35 12.09 15.22C14.35 16.09 14.35 15.68 14.96 15.61C15.57 15.54 16.89 14.79 17.11 14.53C17.33 14.28 17.33 14.08 17.36 14.23Z"/>
  </svg>
);
const ContactIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 14V17C4 18.1046 4.89543 19 6 19H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 14V17C20 18.1046 19.1046 19 18 19H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 14C5 9.02944 9.02944 5 14 5C18.9706 5 23 9.02944 23 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 14C1 9.02944 5.02944 5 10 5C13.2843 5 16.155 6.66613 17.901 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const WavyLines = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0C10 0 10 20 20 20C30 20 30 0 30 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 20C30 20 30 40 40 40C50 40 50 20 50 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50 40C50 40 50 60 60 60C70 60 70 40 70 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 40C10 40 10 60 20 60C30 60 30 40 30 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 60C30 60 30 80 40 80C50 80 50 60 50 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export default function TopicContactSection() {
  const colors = {
    text: '#002A5D',       // Azul oscuro
    accent: '#08D3C4',     // Turquesa
    gradientFrom: '#08D3C4',
    gradientTo: '#002A5D'
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.text }}>
                Contacto
              </h2>
              <div className="w-16 h-1 mt-4" style={{ backgroundColor: colors.accent }}></div>
            </div>

            <div className="space-y-10">
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.accent }}>
                    <WhatsAppIcon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: colors.text }}>WhatsApp</h3>
                  <p className="mt-2 text-slate-600">
                    Puedes unirte a nuestro canal de WhatsApp para mantenerte informado de todas las
                    actividades que Vida Estudiantil tiene para nuestros estudiantes:
                  </p>
                  
                  {/* --- INICIO DE LA CORRECCIÓN --- */}
                  {/* Se eliminó passHref y la etiqueta <a> */}
                  <Link 
                    href="https://wa.me/51987845442" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 font-semibold hover:underline break-all"
                  >
                    "https://wa.me/51987845442"
                  </Link>
                  {/* --- FIN DE LA CORRECCIÓN --- */}

                  <p className="mt-4 text-slate-600">
                    También puedes escanear este QR con tu teléfono móvil.
                  </p>
                  <div className="relative w-28 h-28 mt-2 rounded-lg overflow-hidden border">
                    <Image src="/img/qr-whatsapp.png" alt="QR WhatsApp" layout="fill" objectFit="cover" />
                  </div>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.accent }}>
                    <ContactIcon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: colors.text }}>Contacto</h3>
                  <p className="mt-2 font-semibold" style={{ color: colors.text }}>Unidad de Bienestar y Empleabilidad</p>
                  <p className="text-slate-600 break-all">unid.bienestar.empleabilidad@iest.edu.pe</p>
                  <p className="mt-3 font-semibold" style={{ color: colors.text }}>Tópico</p>
                  <p className="text-slate-600 break-all">topico@iest.edu.pe</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] hidden lg:flex items-center justify-center">
            <div 
              className="absolute -bottom-24 -right-24 w-[550px] h-[550px] rounded-full" 
              style={{ background: `radial-gradient(circle, ${colors.gradientFrom} 0%, ${colors.gradientTo} 70%)` }} 
            />
            <WavyLines className="absolute top-1/2 left-0 -translate-y-1/2 w-20 h-20 text-sky-200/70" />
            <div className="absolute bottom-0 w-[400px] h-[550px]">
              <Image
                src="/img/soporte-contacto.png" 
                alt="Contacto Tópico" 
                layout="fill" 
                objectFit="contain" 
                className="z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}