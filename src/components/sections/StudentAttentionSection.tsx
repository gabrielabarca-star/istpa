// components/StudentAttentionSection.tsx
import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  FileText, 
  Clock, 
  Headset,
  Laptop,
  HeartHandshake 
} from 'lucide-react';

const COLORS = {
  primary: '#1B355C',   
  gold: '#D8A24C',      
  terracotta: '#C8663E', 
};

const services = [
  {
    icon: <MessageCircle className="w-7 h-7" />,
    title: "Chat en Línea",
    description: "Consultas generales y orientación rápida vía WhatsApp.",
    action: "Iniciar Chat",
    href: "https://wa.me/51912503627?text=Hola,%20tengo%20una%20consulta%20general..." 
  },
  {
    icon: <HeartHandshake className="w-7 h-7" />,
    title: "Bienestar y Empleabilidad",
    description: "Apoyo emocional, becas y oportunidades laborales.",
    action: "Contactar Área",
    href: "https://wa.me/51987845442?text=Hola,%20deseo%20comunicarme%20con%20Bienestar%20y%20Empleabilidad" 
  },
  {
    icon: <Phone className="w-7 h-7" />,
    title: "Call Center",
    description: "Llamadas para consultas académicas y administrativas.",
    action: "(051) 357708",
    href: "tel:051357708"
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: "Trámites",
    description: "Certificados, constancias y solicitudes virtuales.",
    action: "Ir a Trámites",
    href: "https://forms.gle/GBX93q8E1WYfK8sD7"
  },
  {
    icon: <Laptop className="w-7 h-7" />,
    title: "Soporte Técnico",
    description: "Ayuda con tu Correo Institucional e Intranet.",
    action: "Soporte WhatsApp",
    href: "https://wa.me/51965818204?text=Hola,%20necesito%20ayuda%20con%20mi%20Correo%20Institucional%20e%20Intranet."
  },
];

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5 text-[#D8A24C]" />,
    text: "secretaria.academica@iest.edu.pe"
  },
  {
    icon: <Clock className="w-5 h-5 text-[#D8A24C]" />,
    text: "Lun - Vie: 9:00 am - 7:00 pm"
  },
  {
    icon: <MapPin className="w-5 h-5 text-[#D8A24C]" />,
    text: "Jr. Lambayeque N° 416, Puno"
  }
];

export default function StudentAttentionSection() {
  return (
    <section className="w-full py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full mb-6 border-2" style={{ borderColor: `${COLORS.gold}40`, backgroundColor: `${COLORS.gold}10` }}>
            <Headset className="w-4 h-4 mr-2" style={{ color: COLORS.primary }} />
            <span className="font-black text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.primary }}>
              Centro de Ayuda
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter" style={{ color: COLORS.primary }}>
            Atención al <span style={{ color: COLORS.terracotta }}>Estudiante</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Estamos aquí para apoyarte en cada paso de tu formación profesional. 
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {services.map((service, index) => (
            <a 
              key={index}
              href={service.href}
              target={service.href.startsWith('http') ? "_blank" : undefined}
              rel={service.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] xl:w-[calc(20%-1.5rem)] group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-transparent cursor-pointer overflow-hidden block"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, #25477d 100%)` }}
              />

              <div className="relative z-10">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl transition-all duration-500 group-hover:bg-white group-hover:text-[#1B355C]" 
                  style={{ backgroundColor: COLORS.primary }}
                >
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-black mb-3 group-hover:text-white transition-colors leading-tight" style={{ color: COLORS.primary }}>
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-sm mb-8 leading-relaxed group-hover:text-blue-50/80 transition-colors">
                  {service.description}
                </p>

                <div 
                  className="inline-flex items-center text-xs font-black uppercase tracking-widest transition-all duration-300 group-hover:text-[#D8A24C]" 
                  style={{ color: COLORS.terracotta }}
                >
                  {service.action}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Barra Inferior Progresiva */}
        <div 
          className="rounded-[2.5rem] p-8 md:p-12 shadow-2xl text-white relative overflow-hidden"
          style={{ backgroundColor: COLORS.primary }}
        >
          <div 
            className="absolute top-0 right-0 w-32 h-32 opacity-10"
            style={{ borderRight: `20px solid ${COLORS.gold}`, borderTop: `20px solid ${COLORS.gold}`, borderRadius: '0 0 0 100%' }}
          />

          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-10">
            <div className="text-center xl:text-left">
              <h3 className="text-3xl font-black mb-3">¿Dudas adicionales?</h3>
              <p className="text-blue-100/70 text-lg">Nuestro equipo administrativo está listo para asistirte.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full xl:w-auto">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 px-6 py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  {/* CORRECCIÓN AQUÍ: break-all y font-bold text-sm */}
                  <span className="font-bold text-sm leading-tight break-all">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}