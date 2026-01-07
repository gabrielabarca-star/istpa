// components/TeachersTeamSection.tsx

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// --- Iconos ---
const GraduationIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const BadgeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

// --- Tipos ---
type ProgramType = 'Contabilidad' | 'Enfermería' | 'Farmacia' | 'Transversales';

interface Teacher {
  id: number; // Un número único para cada uno
  name: string;
  image: string; // Ruta de la foto en la carpeta public
  program: ProgramType; // Debe ser exactamente uno de los tipos de arriba
  titles: string[]; // Lista de títulos
  specialization: string[];
  email: string;
}

// =====================================================================
// --- AQUÍ ES DONDE EDITAS LA INFORMACIÓN REAL ---
// =====================================================================
const teachersData: Teacher[] = [
  
  // --- DOCENTES DE CONTABILIDAD (12) ---
  {
    id: 1,
    name: " Zoraida Silva Cacsire Grimaldos ",
    program: "Contabilidad",
    image: "/img/docentes/eliana.jpg", 
    titles: ["Contador Público Colegiado","Magister en Auditoria y Tributacion"],
    specialization: [""],
    email: "zoraida.cacsireg@iest.edu.pe"
  },
  {
    id: 2,
    name: "Maribel Erika Cahuana Huichi",
    program: "Contabilidad",
    image: "/img/docentes/maria-rodriguez.jpg",
    titles: [ "Contador Público Colegiado","Magíster en Gestion Pública"],
    specialization: [""],
    email: "maribel.cahuanah@iest.edu.pe"
  },
  {
    id: 3,
    name: "Daysy Silvia Choque Alanoca",
    program: "Contabilidad",
    image: "/img/docentes/daysy_choque.png",
    titles: ["Contador Público Colegiado"],
    specialization: [""],
    email: "daysi.choque@iest.edu.pe"
  },
  {
    id: 4,
    name: "Claudia Fernanda Gamarra Avila",
    program: "Contabilidad",
    image: "/img/docentes/maria-rodriguez.jpg",
    titles: ["Titulado en Administrador de Negocios", "Maestria en Gestion  Gurnamental y Desarrollo Empresarial"],
    specialization: [""],
    email: "claudia.gamarra@iest.edu.pe"
  },
  {
    id: 5,
    name: "Julio Cesar Garnica Gilt",
    program: "Contabilidad",
    image: "/img/docentes/maria-rodriguez.jpg",
    titles: ["Contador Público Colegiado", "Magíster en Auditoria y Tributacion"],
    specialization: [""],
    email: "julio.garnica@iest.edu.pe"
  },
  {
    id: 6,
    name: "Aremy Gomez Charaja",
    program: "Contabilidad",
    image: "/img/docentes/aremy_gomez.png",
    titles: ["Contador Público Colegiado", "Magister en Contabilidad y Administración, con mención en Auditoría y Tributación "],
    specialization: ["Auditoria y Tributacion", "Auditoria Financiera Sector Publico y Privado","Gestion Administrativa"],
    email: "aremy.gomezc@iest.edu.pe"
  },
  {
    id: 7,
    name: "Leonel Gonzales Escobedo",
    program: "Contabilidad",
    image: "/img/docentes/leonel_escobedo.png",
    titles: ["Contador Público Colegiado"],
    specialization: ["Contrataciones con el Estado"],
    email: "leonel.gonzales@iest.edu.pe"
  },
  {
    id: 8,
    name: "Juliana Laura Huanca",
    program: "Contabilidad",
    image: "/img/docentes/maria-rodriguez.jpg",
    titles: ["Contador Público Colegiado", "Magister en Contabilidad y Administración, con mención en Auditoría y Tributación"],
    specialization: [""],
    email: "juliana.laura@iest.edu.pe"
  },
  {
    id: 9,
    name: "Martin Lorenzo Samo",
    program: "Contabilidad",
    image: "/img/docentes/martin-lorenzo.png",
    titles: ["Contador Público Colegiado", "Magíster en Contabilidad y Auditoria"],
    specialization: [""],
    email: "martin.lorenzo@iest.edu.pe"
  },
  {
    id: 10,
    name: "Ruth Orihuela Pacuri",
    program: "Contabilidad",
    image: "/img/docentes/ruth_orihuela.png",
    titles: ["Contador Público Colegiado"],
    specialization: [""],
    email: "ruth.orihuela@iest.edu.pe"
  },
  {
    id: 11,
    name: "Ana Luz Perez Macedo",
    program: "Contabilidad",
    image: "/img/docentes/ana_repez.png",
    titles: ["Contador Público Colegiado", "Magíster Auditoria y Peritaje Contable Judicial"],
    specialization: ["Contabilidad de Costos"],
    email: "maria.rodriguez@iest.edu.pe"
  },
  {
    id: 12,
    name: "Karyn Serrano Ortega",
    program: "Contabilidad",
    image: "/img/docentes/maria-rodriguez.jpg",
    titles: ["Contador Público Colegiado", "Magíster en Docencia"],
    specialization: ["Contabilidad de Costos"],
    email: "maria.rodriguez@iest.edu.pe"
  },
  {
    id: 13,
    name: "Carlos Gustavo Velasquez Limachi",
    program: "Contabilidad",
    image: "/img/docentes/carlos_gustavo.png",
    titles: ["Contador Público Colegiado", "Magíster en Docencia"],
    specialization: ["Contabilidad de Costos"],
    email: "maria.rodriguez@iest.edu.pe"
  },
  {
    id: 13,
    name: "Rosa Aragon Cardenas",
    program: "Contabilidad",
    image: "/img/docentes/rosa-aragon.png",
    titles: ["Contador Público Colegiado", "Magíster en Contabilidad Administración"],
    specialization: ["Segunda Especialidad Didactica Universitaria"],
    email: "rosa.aragon@iest.edu.pe"
  },


  // --- DOCENTES DE ENFERMERÍA (19) ---
  {
    id: 14,
    name: "Eliana Ines Aguirre Yucra",
    program: "Enfermería",
    image: "/img/docentes/eliana-aguirre.jpg",
    titles: ["Licenciada en Enfermería", "Magister en Gerencia  de Servicio y Promoción de la Salud - Salud Publica"],
    specialization: [""],
    email: "eliana.aguirre@iest.edu.pe"
  },
  {
    id: 15,
    name: "Wilson Aro Calliri",
    program: "Enfermería",
    image: "/img/docentes/wilson_aro.png",
    titles: ["Licenciada en Enfermería", "Doctora en Salud Pública"],
    specialization: ["Contabilidad de Costos"],
    email: "ana.lopez@iest.edu.pe"
  },
  {
    id: 16,
    name: "Heber Bautista Gonzales",
    program: "Enfermería",
    image: "/img/docentes/ana-lopez.jpg",
    titles: ["Licenciada en Enfermería", "Doctora en Salud Pública"],
    specialization: ["Contabilidad de Costos"],
    email: "ana.lopez@iest.edu.pe"
  },
  {
    id: 17,
    name: "Efrain Denis Ccoyo Hancco",
    program: "Enfermería",
    image: "/img/docentes/ana-lopez.jpg",
    titles: ["Licenciada en Enfermería", "Doctora en Salud Pública"],
    specialization: ["Contabilidad de Costos"],
    email: "ana.lopez@iest.edu.pe"
  },
  {
    id: 18,
    name: "Ibeth Magali Churata Quispe",
    program: "Enfermería",
    image: "/img/docentes/ibeth_churata.png",
    titles: ["Licenciada en Enfermería", "Doctora en Salud Pública"],
    specialization: ["Contabilidad de Costos"],
    email: "ana.lopez@iest.edu.pe"
  },
  {
    id: 19,
    name: "Ivan Diego Cutipa Quiso",
    program: "Enfermería",
    image: "/img/docentes/ivan_cutipa.png",
    titles: ["Licenciada en Enfermería", "Doctora en Salud Pública"],
    specialization: ["Contabilidad de Costos"],
    email: "ana.lopez@iest.edu.pe"
  },
  {
    id: 20,
    name: "Maritza Karina Herrera Pereira",
    program: "Enfermería",
    image: "/img/docentes/karina_herrera.png",
    titles: ["Licenciada en Enfermería", "Doctora en Salud Pública"],
    specialization: ["Contabilidad de Costos"],
    email: "ana.lopez@iest.edu.pe"
  },
  {
    id: 21,
    name: "Lucía Ivonne Huaman Espinoza",
    program: "Enfermería",
    image: "/img/docentes/ana-lopez.jpg",
    titles: ["Licenciada en Enfermería", "Doctora en Salud Pública"],
    specialization: ["Contabilidad de Costos"],
    email: "ana.lopez@iest.edu.pe"
  },
  {
    id: 22,
    name: "Cinthia Julissa Mamani Paricahua",
    program: "Enfermería",
    image: "/img/docentes/ana-lopez.jpg",
    titles: ["Licenciada en Enfermería", "Doctora en Salud Pública"],
    specialization: ["Contabilidad de Costos"],
    email: "ana.lopez@iest.edu.pe"
  },
  {
    id: 23,
    name: "Nestor Alex Mamani Vilca",
    program: "Enfermería",
    image: "/img/docentes/ana-lopez.jpg",
    titles: ["Licenciada en Enfermería", "Doctora en Salud Pública"],
    specialization: ["Contabilidad de Costos"],
    email: "ana.lopez@iest.edu.pe"
  },
  {
    id: 24,
    name: "Lenna Medina Vega",
    program: "Enfermería",
    image: "/img/docentes/lenna-medina.png",
    titles: ["Licenciada en Obstetricia", "Magister en Salud Pública"],
    specialization: [""],
    email: "lenna.medina@iest.edu.pe"
  },
  {
    id: 25,
    name: "Nohemi Danid Quea Chavez",
    program: "Enfermería",
    image: "/img/docentes/ana-lopez.jpg",
    titles: ["Licenciada en Enfermería", "Doctora en Salud Pública"],
    specialization: ["Contabilidad de Costos"],
    email: "ana.lopez@iest.edu.pe"
  },
  {
    id: 26,
    name: "Carmen Justina Quilca Zapana",
    program: "Enfermería",
    image: "/img/docentes/carmen_quilca.png",
    titles: ["Licenciada en Enfermería", "Doctora en Salud Pública"],
    specialization: ["Contabilidad de Costos"],
    email: "ana.lopez@iest.edu.pe"
  },
  {
    id: 27,
    name: "Pamela Nora Quispe Coaquira",
    program: "Enfermería",
    image: "/img/docentes/pamela_quispe.png",
    titles: ["Licenciada en Enfermería", "Doctora en Salud Pública"],
    specialization: ["Contabilidad de Costos"],
    email: "ana.lopez@iest.edu.pe"
  },
  {
    id: 28,
    name: "Margoth Carolina Rojas Colca",
    program: "Enfermería",
    image: "/img/docentes/margoth_rojas.png",
    titles: ["Licenciada en Enfermería", "Doctora en Salud Pública"],
    specialization: ["Contabilidad de Costos"],
    email: "ana.lopez@iest.edu.pe"
  },
  {
    id: 29,
    name: "Carmen Amparo Tapia Centellas",
    program: "Enfermería",
    image: "/img/docentes/ana-lopez.jpg",
    titles: ["Licenciada en Enfermería", "Doctora en Salud Pública"],
    specialization: ["Contabilidad de Costos"],
    email: "ana.lopez@iest.edu.pe"
  },
  {
    id: 30,
    name: "Henry Raul Tito Mamani",
    program: "Enfermería",
    image: "/img/docentes/henry_tito.png",
    titles: ["Licenciada en Enfermería", "Doctora en Salud Pública"],
    specialization: ["Contabilidad de Costos"],
    email: "ana.lopez@iest.edu.pe"
  },
  {
    id: 31,
    name: "Karem Lisbet Vélez Figueroa",
    program: "Enfermería",
    image: "/img/docentes/ana-lopez.jpg",
    titles: ["Licenciada en Enfermería", "Doctora en Salud Pública"],
    specialization: ["Contabilidad de Costos"],
    email: "ana.lopez@iest.edu.pe"
  },
  {
    id: 32,
    name: "Yoly Tania Vizcarra Ticona",
    program: "Enfermería",
    image: "/img/docentes/yoly_vizcarra.png",
    titles: ["Licenciada en Enfermería", "Doctora en Salud Pública"],
    specialization: ["Contabilidad de Costos"],
    email: "ana.lopez@iest.edu.pe"
  },


  // --- DOCENTES DE FARMACIA (11) ---
  {
    id: 33,
    name: "Lucio Jose Blanco Luna",
    program: "Farmacia",
    image: "/img/docentes/carlos-ruiz.jpg",
    titles: ["Químico Farmacéutico", "Especialista en Farmacología"],
    specialization: ["Contabilidad de Costos"],
    email: "carlos.ruiz@iest.edu.pe"
  },
  {
    id: 34,
    name: "Julio Waldir Curasi Cari",
    program: "Farmacia",
    image: "/img/docentes/carlos-ruiz.jpg",
    titles: ["Químico Farmacéutico", "Especialista en Farmacología"],
    specialization: ["Contabilidad de Costos"],
    email: "carlos.ruiz@iest.edu.pe"
  },
  {
    id: 35,
    name: "Nancy Cusilayme Quispe",
    program: "Farmacia",
    image: "/img/docentes/carlos-ruiz.jpg",
    titles: ["Químico Farmacéutico", "Especialista en Farmacología"],
    specialization: ["Contabilidad de Costos"],
    email: "carlos.ruiz@iest.edu.pe"
  },
  {
    id: 36,
    name: "Heidy Camila Flores Flores",
    program: "Farmacia",
    image: "/img/docentes/carlos-ruiz.jpg",
    titles: ["Químico Farmacéutico", "Especialista en Farmacología"],
    specialization: ["Contabilidad de Costos"],
    email: "carlos.ruiz@iest.edu.pe"
  },
  {
    id: 37,
    name: "Ximena Paola Huaracha Loza",
    program: "Farmacia",
    image: "/img/docentes/carlos-ruiz.jpg",
    titles: ["Químico Farmacéutico", "Especialista en Farmacología"],
    specialization: ["Contabilidad de Costos"],
    email: "carlos.ruiz@iest.edu.pe"
  },
  {
    id: 38,
    name: "Celia Olivia Isia Perca",
    program: "Farmacia",
    image: "/img/docentes/carlos-ruiz.jpg",
    titles: ["Químico Farmacéutico", "Especialista en Farmacología"],
    specialization: ["Contabilidad de Costos"],
    email: "carlos.ruiz@iest.edu.pe"
  },
  {
    id: 39,
    name: "Yoseline Adriana Laura Calvo",
    program: "Farmacia",
    image: "/img/docentes/carlos-ruiz.jpg",
    titles: ["Químico Farmacéutico", "Especialista en Farmacología"],
    specialization: ["Contabilidad de Costos"],
    email: "carlos.ruiz@iest.edu.pe"
  },
  {
    id: 40,
    name: "Jesus Michael Llahuilla Quispe",
    program: "Farmacia",
    image: "/img/docentes/carlos-ruiz.jpg",
    titles: ["Químico Farmacéutico", "Especialista en Farmacología"],
    specialization: ["Contabilidad de Costos"],
    email: "carlos.ruiz@iest.edu.pe"
  },
  {
    id: 41,
    name: "Arnold Kevin Alvaro Mendoza Aranibar",
    program: "Farmacia",
    image: "/img/docentes/carlos-ruiz.jpg",
    titles: ["Químico Farmacéutico", "Especialista en Farmacología"],
    specialization: ["Contabilidad de Costos"],
    email: "carlos.ruiz@iest.edu.pe"
  },
  {
    id: 42,
    name: "Porfiria Rosemerie Sardón Checalla",
    program: "Farmacia",
    image: "/img/docentes/carlos-ruiz.jpg",
    titles: ["Químico Farmacéutico", "Especialista en Farmacología"],
    specialization: ["Contabilidad de Costos"],
    email: "carlos.ruiz@iest.edu.pe"
  },
  {
    id: 43,
    name: "Liz Zuñiga Gonzales",
    program: "Farmacia",
    image: "/img/docentes/liz-zuñiga.png",
    titles: ["Licenciada en Enfermería"],
    specialization: [""],
    email: "liz.zuniga@iest.edu.pe"
  },
  


  // --- DOCENTES TRANSVERSALES (12) ---
  {
    id: 44,
    name: "Nancy Maritza Acero Cáceres",
    program: "Transversales",
    image: "/img/docentes/pedro-castillo.jpg",
    titles: ["Licenciado en Turismo"],
    specialization: [""],
    email: "nancy.acero@iest.edu.pe"
  },
  
  {
    id: 45,
    name: "Mercedes Vanessa Alave Loza",
    program: "Transversales",
    image: "/img/docentes/pedro-castillo.jpg",
    titles: ["licenciada en Arte:Danza"],
    specialization: [""],
    email: "mercedes.alave@iest.edu.pe"
  },
  {
    id: 46,
    name: "Reggine Janeth Asillo Aguirre",
    program: "Transversales",
    image: "/img/docentes/pedro-castillo.jpg",
    titles: ["Bachiller en Economia"],
    specialization: [""],
    email: "reggine.asillo@iest.edu.pe"
  },
  {
    id: 47,
    name: "Julio Alberto Castro Huayapa",
    program: "Transversales",
    image: "/img/docentes/pedro-castillo.jpg",
    titles: ["Ingeniro de Sistemas"],
    specialization: [""],
    email: "julio.castro@iest.edu.pe"
  },
  {
    id: 48,
    name: "Jhon Ángelo Núñez Gamarra",
    program: "Transversales",
    image: "/img/docentes/pedro-castillo.jpg",
    titles: ["Licenciado en Turismo","Magister en Contabilidad y Administración con mención en Gestión gubernamental y desarrollo empresarial"],
    specialization: [""],
    email: "jhon_nunez_gamarra@iest.edu.pe"
  },
  {
    id: 49,
    name: "Yony Marcelo Ojeda Challco",
    program: "Transversales",
    image: "/img/docentes/pedro-castillo.jpg",
    titles: ["Bachiller Educacion Segundaria"],
    specialization: [""],
    email: "yony.ojeda@iest.edu.pe"
  },
  {
    id: 50,
    name: "Kelly Dalia Ríos Sucasaca",
    program: "Transversales",
    image: "/img/docentes/pedro-castillo.jpg",
    titles: ["Ingeniero Estadístico e Informático","Bachiller en Administración y Gestion Pública","Maestro en Economía con Mención en: Planificación y Gestión Pública"],
    specialization: [""],
    email: "kelly.rioss@iest.edu.pe"
  },
  {
    id: 49,
    name: "Luis Carlos Sotomayor Perez",
    program: "Transversales",
    image: "/img/docentes/pedro-castillo.jpg",
    titles: ["Bachiller en Ciencias de la Educacion"],
    specialization: [""],
    email: "luis.sotomayor@iest.edu.pe"
  },
  {
    id: 50,
    name: "Caroli Yudiht Ticona Arpasi",
    program: "Transversales",
    image: "/img/docentes/caroli_ticona.png",
    titles: ["Ingeniero Sanitario y Ambiental"],
    specialization: [""],
    email: "caroli.ticona@iest.edu.pe"
  },
  {
    id: 51,
    name: "Norca Mayli Tisnado Hualpa",
    program: "Transversales",
    image: "/img/docentes/pedro-castillo.jpg",
    titles: ["Licenciado en Administración"],
    specialization: [""],
    email: "norca.tisnado@iest.edu.pe"
  },
  {
    id: 52,
    name: "Jhan Carlos Valencia Franco",
    program: "Transversales",
    image: "/img/docentes/jhan-valencia.png",
    titles: ["Ingeniero de Sistemas e Informática"],
    specialization: [""],
    email: "jhan.valencia@iest.edu.pe"
  },
  {
    id: 53,
    name: "Adisson Sergio Villalta Quispe",
    program: "Transversales",
    image: "/img/docentes/pedro-castillo.jpg",
    titles: ["Ingeniero Civil"],
    specialization: [""],
    email: "adisson.villalta@iest.edu.pe"
  },

];
// =====================================================================


// --- Componente de Tarjeta de Docente (NO TOCAR) ---
const TeacherCard = ({ teacher }: { teacher: Teacher }) => {
  return (
    <div className="group relative h-[450px] w-full rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-white border border-slate-100">
      <div className="absolute inset-0">
        {/* Usamos una imagen por defecto si falla la carga o está vacía */}
        <Image 
          src={teacher.image || '/img/docente-placeholder.jpg'} 
          alt={teacher.name} 
          layout="fill" 
          objectFit="cover" 
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002A5D] via-transparent to-transparent opacity-90" />
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 z-20">
        <span className="inline-block px-3 py-1 mb-2 text-xs font-bold text-white bg-[#08D3C4] rounded-full">
          {teacher.program === 'Enfermería' ? 'Enfermería Técnica' : teacher.program}
        </span>
        <h3 className="text-2xl font-bold text-white leading-tight">
          {teacher.name}
        </h3>
      </div>

      {/* Panel Desplegable */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#002A5D]/95 backdrop-blur-sm p-8 flex flex-col justify-center text-white transform -translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 z-30">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1 text-[#08D3C4]">
            <GraduationIcon className="w-5 h-5" />
            <h4 className="font-bold text-sm uppercase tracking-wider">Grados y Títulos</h4>
          </div>
          <ul className="list-disc list-inside text-slate-200 space-y-0.5 text-xs">
            {teacher.titles.map((title, idx) => (
              <li key={idx}>{title}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1 text-[#08D3C4]">
            <BadgeIcon className="w-5 h-5" />
            <h4 className="font-bold text-sm uppercase tracking-wider">Especialización</h4>
          </div>
          <ul className="list-disc list-inside text-slate-200 space-y-0.5 text-xs">
            {teacher.specialization.map((spec, idx) => (
              <li key={idx}>{spec}</li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 mb-1 text-[#08D3C4]">
            <MailIcon className="w-5 h-5" />
            <h4 className="font-bold text-sm uppercase tracking-wider">Contacto</h4>
          </div>
          <a href={`mailto:${teacher.email}`} className="text-slate-200 text-sm hover:text-white hover:underline transition-colors break-words">
            {teacher.email}
          </a>
        </div>
      </div>
    </div>
  );
};

// --- Componente Principal (NO TOCAR) ---
export default function TeachersTeamSection() {
  const [activeProgram, setActiveProgram] = useState<ProgramType>('Contabilidad');

  const colors = {
    primaryText: '#002A5D',
    accent: '#08D3C4',
  };

  // Filtramos usando la nueva data manual 'teachersData'
  const filteredTeachers = teachersData.filter(t => {
    if (activeProgram === 'Enfermería') return t.program === 'Enfermería';
    return t.program === activeProgram;
  });

  const programs: ProgramType[] = ['Contabilidad', 'Enfermería', 'Farmacia', 'Transversales'];

  return (
    <section className="w-full bg-slate-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        <div className="text-center mb-12">
          <p className="font-semibold text-lg mb-2" style={{ color: colors.accent }}>
            Excelencia Académica
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
            Nuestra Plana Docente
          </h2>
          <div className="w-20 h-1.5 mt-6 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Contamos con profesionales altamente calificados y con amplia experiencia en el sector,
            dedicados a formar a la próxima generación de líderes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {programs.map((program) => (
            <button
              key={program}
              onClick={() => setActiveProgram(program)}
              className={`py-3 px-8 rounded-full font-bold text-sm sm:text-base transition-all duration-300 border-2
                ${activeProgram === program
                  ? 'bg-[#002A5D] text-white border-[#002A5D] shadow-lg scale-105'
                  : 'bg-white text-[#002A5D] border-slate-200 hover:border-[#002A5D] hover:bg-slate-50'
                }
              `}
            >
              {program === 'Enfermería' ? 'Enfermería Técnica' : program}
            </button>
          ))}
        </div>

        <div className="relative px-4 sm:px-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-14 !overflow-visible"
          >
            {filteredTeachers.map((teacher) => (
              <SwiperSlide key={teacher.id}>
                <TeacherCard teacher={teacher} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}