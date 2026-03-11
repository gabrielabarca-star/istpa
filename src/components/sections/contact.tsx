"use client";

import { Phone, Mail, MapPin, Clock, ExternalLink, MessageCircle } from 'lucide-react';

const colors = {
  primary: '#1B355C',
  accent: '#C8663E',
  background: '#F8FAFC',
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Nuestra Sede",
    content: "Jr. Lambayeque N° 416, Puno, Perú",
    action: "Ver en Google Maps",
    link: "https://maps.google.com/?q=Jr.+Lambayeque+416,+Puno"
  },
  {
    icon: Clock,
    title: "Horario Académico",
    content: "Lun - Vie: 9:00 AM - 1:00 PM / 3:00 PM - 7:00 PM",
    action: "Nuestro horario de atención",
    link: "#"
  },
  {
    icon: Phone,
    title: "Líneas de Atención",
    content: "(051) 357708",
    action: "Llamar ahora",
    link: "tel:051357708"
  },
  {
    icon: Mail,
    title: "Correo Institucional",
    content: "altiplano.puno@iest.edu.pe",
    action: "Enviar mensaje",
    link: "mailto:altiplano.puno@iest.edu.pe"
  }
];

export default function Contact() {
  // Reemplaza con tu URL real de embed de Google Maps
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.224424368143!2d-70.0298!3d-15.8422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUwJzMxLjkiUyA3MMKwMDEnNDcuMyJX!5e0!3m2!1ses!2spe!4v1620000000000!5m2!1ses!2spe";

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ backgroundColor: colors.background }}>
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8663E] to-transparent opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-[#C8663E] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Contacto Directo</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter" style={{ color: colors.primary }}>
            ESTAMOS EN EL <span className="text-[#C8663E]">CORAZÓN</span> DE PUNO
          </h2>
          <p className="mt-6 text-xl text-slate-500 font-medium">
            ¿Tienes dudas sobre el proceso de admisión o nuestras carreras? Nuestro equipo está listo para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Tarjetas de Información (4 columnas en LG) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((item, idx) => (
              <div 
                key={idx} 
                className="group p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#C8663E]/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-[#C8663E] group-hover:text-white transition-colors duration-500">
                  <item.icon size={24} className="text-[#1B355C] group-hover:text-white" />
                </div>
                <h3 className="font-black text-[#1B355C] uppercase text-xs tracking-widest mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm font-bold leading-relaxed mb-4">{item.content}</p>
                
                <a 
                  href={item.link} 
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-[#C8663E] hover:opacity-70 transition-opacity"
                >
                  {item.action} <ExternalLink size={10} />
                </a>
              </div>
            ))}

            {/* CTA WhatsApp Institucional */}
            <a 
              href="#" 
              className="sm:col-span-2 flex items-center justify-between p-6 bg-[#1B355C] rounded-[2rem] text-white group hover:bg-[#C8663E] transition-all duration-500 shadow-lg shadow-[#1B355C]/20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl backdrop-blur-md">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <p className="text-xs font-bold opacity-70 uppercase tracking-widest leading-none mb-1">Respuesta Inmediata</p>
                  <p className="font-black text-lg">WhatsApp Admisión</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                <ExternalLink size={18} />
              </div>
            </a>
          </div>

          {/* Mapa Integrado (7 columnas en LG) */}
          <div className="lg:col-span-7 relative group">
            <div className="absolute inset-0 bg-[#C8663E] rounded-[2.5rem] rotate-1 scale-[0.99] opacity-10 group-hover:rotate-0 transition-transform duration-700"></div>
            <div className="relative h-full min-h-[450px] w-full rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
              
              {/* Overlay informativo sobre el mapa */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-xs font-black text-[#1B355C] tracking-tight">INSTITUTO ABIERTO · PUNO CENTRO</p>
                </div>
                <button className="text-[10px] font-black uppercase bg-[#1B355C] text-white px-4 py-2 rounded-lg">Cómo llegar</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}