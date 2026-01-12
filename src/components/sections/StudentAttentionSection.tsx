import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  FileText, 
  Clock, 
  Headset,
  CalendarCheck
} from 'lucide-react';

const services = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Chat en Línea",
    description: "Conversa con nuestros asesores en tiempo real vía WhatsApp.",
    action: "Iniciar Chat",
    // Reemplaza este número con el de la universidad (formato internacional sin +)
    href: "https://wa.me/51912503627?text=Hola,%20tengo%20una%20consulta%20sobre..." 
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Call Center",
    description: "Llámanos para consultas académicas y financieras.",
    action: "(051) 357708",
    href: "tel:051357708"
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Trámites",
    description: "Gestiona certificados, constancias y solicitudes.",
    action: "Ir a Trámites",
    href: "https://forms.gle/GBX93q8E1WYfK8sD7"
  },
 
];

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    text: "secretaria.academica@iest.edu.pe"
  },
  {
    icon: <Clock className="w-6 h-5" />,
    text: "Lun - Vie: 9:00 am -7:00pm"
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    text: "Jr. Lambayeque N° 416, Puno"
  }
];

export default function StudentAttentionSection() {
  return (
    <section className="w-full py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Encabezado de la Sección */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <Headset className="w-5 h-5 text-[#002a5d] mr-2" />
            <span className="text-[#002a5d] font-semibold text-sm uppercase tracking-wide">
              Centro de Ayuda
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002a5d] mb-4">
            Atención al Estudiante
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Estamos aquí para apoyarte en cada paso de tu vida universitaria. 
            Elige el canal de atención que prefieras.
          </p>
        </div>

        {/* Grid de Tarjetas de Servicio - Centrado con Flex */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {services.map((service, index) => (
            <a 
              key={index}
              href={service.href}
              // Abre en nueva pestaña solo si es un link externo (WhatsApp o Forms)
              target={service.href.startsWith('http') ? "_blank" : undefined}
              rel={service.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="w-full max-w-[350px] group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-[#002a5d] hover:bg-[#002a5d] hover:-translate-y-1 cursor-pointer overflow-hidden block"
            >
              {/* Decoración de fondo en hover */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-[#002a5d]/5 group-hover:bg-white/10 transition-colors" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#002a5d] flex items-center justify-center text-white mb-6 shadow-lg group-hover:bg-[#C8663E] transition-all duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#002a5d] mb-2 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-sm mb-6 leading-relaxed group-hover:text-blue-100 transition-colors">
                  {service.description}
                </p>

                <span className="inline-flex items-center text-sm font-semibold text-[#002a5d] group-hover:text-[#C8663E] group-hover:underline decoration-2 underline-offset-4 transition-colors">
                  {service.action}
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Barra Inferior de Información Rápida */}
        <div className="bg-[#002a5d] rounded-2xl p-8 md:p-10 shadow-2xl text-white relative overflow-hidden">
          {/* Círculos decorativos de fondo */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">¿Necesitas ayuda adicional?</h3>
              <p className="text-blue-100/80">Nuestro equipo está disponible para resolver tus dudas.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full md:w-auto">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors cursor-default">
                  <div className="text-blue-200">
                    {item.icon}
                  </div>
                  <span className="font-medium text-sm md:text-base">
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