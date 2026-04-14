"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { GraduationCap, BadgeCheck, Mail, FileText, BookOpen } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const COLORS = {
  primary: '#1B355C',   // Azul
  gold: '#D8A24C',      // Dorado
  terracotta: '#C8663E', // Terracota
  bgLight: '#F8FAFC'
};

type ProgramType = 'Contabilidad' | 'Enfermería' | 'Farmacia' | 'Transversales';

interface Teacher {
  id: number;
  name: string;
  image: string;
  program: ProgramType;
  titles: string[];
  specialization: string[];
  cursos: string[]; // <-- Nueva propiedad
  email: string;
  cvLink?: string; 
}

const teachersData: Teacher[] = [
  // --- CONTABILIDAD ---
  { id: 1, name: "Zoraida Silva Cacsire Grimaldos", program: "Contabilidad", image: "/img/docentes/Zoraida.png", titles: ["Contador Público Colegiado","Magister en Auditoria y Tributacion"], specialization: [""], cursos: ["DOCUMENTACIÓN COMERCIAL Y CONTABLE / T-I", "CONTABILIDAD GUBERNAMENTAL I/ T-III","CONTABILIDAD GUBERNAMENTAL II / N-IV"], email: "zoraida.cacsireg@iest.edu.pe", cvLink: "#" },
  
  { id: 2, name: "Daysy Silvia Choque Alanoca", program: "Contabilidad", image: "/img/docentes/Daysy_choque.png", titles: ["Contador Público Colegiado"], specialization: [""], cursos: ["DOCUMENTACIÓN COMERCIAL Y CONTABLE / M-I", "CONTABILIDAD DE COSTOS/ M-III","CONTABILIDAD DE COSTOS / T-III"], email: "daysi.choque@iest.edu.pe", cvLink: "#" },
  { id: 3, name: "Claudia Fernanda Gamarra Avila", program: "Contabilidad", image: "/img/docentes/Claudia_gamarra.png", titles: ["Titulado en Administrador de Negocios"], specialization: [""], cursos: ["ADMINISTRACIÓN EMPRESARIAL-M-I", "ADMINISTRACIÓN EMPRESARIAL-T-I","FUNDAMENTOS DE INVESTIGACIÓN-M-II"], email: "claudia.gamarra@iest.edu.pe", cvLink: "#" },
  { id: 4, name: "Julio Cesar Garnica Gilt", program: "Contabilidad", image: "/img/docentes/placeholder.jpg", titles: ["Contador Público Colegiado"], specialization: [""], cursos: ["CONTABILIDAD DE SOCIEDADES / N-IV", "FUNDAMENTOS DE FINANZAS / N-V","CALCULO FINANCIERO / N-VI"], email: "julio.garnica@iest.edu.pe", cvLink: "#" },
  
  { id: 5, name: "Leonel Gonzales Escobedo", program: "Contabilidad", image: "/img/docentes/Leonel_gonzales.png", titles: ["Contador Público Colegiado"], specialization: [""], cursos: ["TÉCNICA PRESUPUESTAL / T-III", "CONTABILIDAD GUBERNAMENTAL I / M-III","ANÁLISIS E INTERPRETACIÓN DE ESTADOS FINANCIEROS / T-6"], email: "leonel.gonzales@iest.edu.pe", cvLink: "#" },
  { id: 6, name: "Juliana Laura Huanca", program: "Contabilidad", image: "/img/docentes/Juliana_laura.png", titles: ["Contador Público Colegiado"], specialization: [""], cursos: ["FORMULACIÓN DE ESTADOS FINANCIEROS / N-V", "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS / N-V","ANÁLISIS E INTERPRETACIÓN DE ESTADOS FINANCIEROS / N-VI"], email: "juliana.laura@iest.edu.pe", cvLink: "#" },
  { id: 7, name: "Martin Lorenzo Samo", program: "Contabilidad", image: "/img/docentes/martin-lorenzo.png", titles: ["Contador Público Colegiado","Magister Contabilidad "], specialization: ["Magister en Auditoria"], cursos: ["FUNDAMENTOS DE COSTOS / N-II", "COMPORTAMIENTO ÉTICO / N-V","CONTABILIDAD DE ENTIDADES FINANCIERAS II / N-VI","CONTABILIDAD DE ENTIDADES FINANCIERAS II / T-VI"], email: "martin.lorenzo@iest.edu.pe", cvLink: "#" },
  { id: 8, name: "Ruth Orihuela Pacuri", program: "Contabilidad", image: "/img/docentes/Ruth_orihuela.png", titles: ["Contador Público Colegiado"], specialization: [""], cursos: ["TÉCNICA PRESUPUESTAL / M-III", "CONTABILIDAD GUBERNAMENTAL II / M-IV","PLANEAMIENTO DE AUDITORIA / N-V"], email: "ruth.orihuela@iest.edu.pe", cvLink: "#" },
  { id: 9, name: "Ana Luz Perez Macedo", program: "Contabilidad", image: "/img/docentes/Ana_perez.png", titles: ["Contador Público Colegiado"], specialization: ["Magister Contabilidad y Finanzas Mencion en Auditoria y peritaje contable Juridico"], cursos: ["PLAN CONTABLE / /I-M","PLAN CONTABLE / T-I","APLICATIVOS INFORMÁTICOS / M-III","APLICATIVOS INFORMÁTICOS / T-III"], email: "maria.rodriguez@iest.edu.pe", cvLink: "#" },
  { id: 10, name: "Karyn Serrano Ortega", program: "Contabilidad", image: "/img/docentes/Karyn_serrano.png", titles: ["Licenciada en Administracion y Marketing"], specialization: [""], cursos: ["LEGISLACIÓN COMERCIAL/ / M-I", "INVESTIGACIÓN E INNOVACIÓN TECNOLÓGICA / T-III","PROYECTOS DE INVESTIGACIÓN E INNOVACIÓN TECNOLÓGICA / M-IV","PROYECTOS DE INVESTIGACIÓN E INNOVACIÓN TECNOLÓGICA / N-IV","PROYECTO EMPRESARIAL / N-VI","PROYECTO EMPRESARIAL/ T-VI"], email: "karyn.serrano@iest.edu.pe", cvLink: "#" },
  { id: 11, name: "Carlos Gustavo Velasquez Limachi", program: "Contabilidad", image: "/img/docentes/Carlos_velasquez.png", titles: ["Contador Público Colegiado"], specialization: [""], cursos: ["CONTABILIDAD APLICADA / M-IV","CONTABILIDAD APLICADA / N-IV","LEGISLACIÓN E INSERCIÓN LABORAL / T-VI"], email: "carlos.velasquez@iest.edu.pe", cvLink: "#" },
  { id: 12, name: "Rosa Aragon Cardenas", program: "Contabilidad", image: "/img/docentes/rosa-aragon.png", titles: ["Contador Público Colegiado"], specialization: [""], cursos: ["CONTABILIDAD GENERAL I / M-I"], email: "rosa.aragon@iest.edu.pe", cvLink: "#" },
  { id: 13, name: "Jimy Samuel Rocha Charca", program: "Contabilidad", image: "/img/docentes/Jimy_rocha.png", titles: ["Contador Público Colegiado"], specialization: [""], cursos: ["LEGISLACIÓN COMERCIAL/ T-I","CONTABILIDAD GENERAL II /M-II"," FINANZAS PÚBLICAS / M-VI","FINANZAS PÚBLICAS / T-VI"], email: "jimy.rocha@iest.edu.pe", cvLink: "#" },
  { id: 14, name: "Jose Guido Perca Mamani", program: "Contabilidad", image: "/img/docentes/Jose_perca.png", titles: ["Contador Público Colegiado"], specialization: [""], cursos: ["CONTABILIDAD GENERAL I/ / T-I","CONTABILIDAD DE SOCIEDADES / M-IV","TÉCNICAS Y PROCEDIMIENTOS DE AUDITORIA / T-VI"], email: "jose.perca@iest.edu.pe", cvLink: "#" },
  { id: 15, name: "Norca Mayli Tisnado Hualpa", program: "Contabilidad", image: "/img/docentes/rosa-aragon.png", titles: ["Licenciado en Administración"], specialization: [""], cursos: ["SOCIEDAD Y ECONOMIA EN LA GLOBALIZACIÓN / M-III","SOCIEDAD Y ECONOMIA EN LA GLOBALIZACIÓN / T-III"], email: "norca.tisnado@iest.edu.pe", cvLink: "#" },
  { id: 16, name: "Nestor Rojas Velasquez", program: "Contabilidad", image: "/img/docentes/Nestor_rojas.png", titles: ["Ing. Economista"], specialization: [""], cursos: ["MEDIO AMBIENTE Y DESARROLLO SOSTENIBLE / M-III","MEDIO AMBIENTE Y DESARROLLO SOSTENIBLE / T-III"], email: "nestor.rojas@iest.edu.pe", cvLink: "#" },
  { id: 17, name: "Mariela Lisset Concha Molina", program: "Contabilidad", image: "/img/docentes/Mariela_concha.png", titles: ["Contador Público Colegiado"], specialization: ["Magister en Contabilidad y Administración, mención en Auditoría y Tributación"], cursos: ["LEGISLACIÓN TRIBUTARIA / M-II"," CONTABILIDAD DE ENTIDADES FINANCIERAS I / N-V","TÉCNICAS Y PROCEDIMIENTOS DE AUDITORIA/N-VI","CALCULO FINANCIERO/T-VI"], email: "nestor.rojas@iest.edu.pe", cvLink: "#" },

  // --- ENFERMERÍA ---
  { id: 18, name: "Eliana Ines Aguirre Yucra", program: "Enfermería", image: "/img/docentes/eliana-aguirre.jpg", titles: ["Licenciada en Nutrición Humana"], specialization: [""], cursos: ["ASISTENCIA EN MEDICINA ALTERNATIVA / M-VI", "ASISTENCIA EN MEDICINA ALTERNATIVA/ N-VI","ASISTENCIA EN MEDICINA ALTERNATIVA / T-VI"], email: "eliana.aguirre@iest.edu.pe", cvLink: "#" },
  { id: 19, name: "Wilson Aro Calliri", program: "Enfermería", image: "/img/docentes/Wilson_aro.png", titles: ["Licenciado en Enfermería"], specialization: [""], cursos: ["ASISTENCIA BÁSICA HOSPITALARIA / N-III", "ASISTENCIA AL USUARIO QUIRÚRGICO / N-IV","COMPORTAMIENTO ÉTICO / N-V "], email: "wilson_aro_calliri@iest.edu.pe", cvLink: "#" },
  { id: 20, name: "Heber Bautista Gonzales", program: "Enfermería", image: "/img/docentes/Heber_bautista.png", titles: ["Médico Cirujano "], specialization: ["Maestría en salud Pública - Dirección y gestión de servicios de salud"], cursos: ["EDUCACIÓN PARA LA SALUD / M-II", "ACTIVIDADES EN SALUD PÚBLICA / N-II","ASISTENCIA DE ENFERMERÍA EN SALUD MENTAL / N-V"], email: "heber.bautista@iest.edu.pe", cvLink: "#" },
  { id: 21, name: "Efrain Denis Ccoyo Hancco", program: "Enfermería", image: "/img/docentes/Efrain_denis.png", titles: ["Licenciado en Enfermería"], specialization: [""], cursos: ["ASISTENCIA EN INMUNIZACIONES / T-I", "ASISTENCIA DE ENFERMERÍA EN SALUD MENTAL / T-V","ASISTENCIA EN FISIOTERAPIA Y REHABILITACIÓN / N-VI"], email: "efrain.ccoyo@iest.edu.pe", cvLink: "#" },
  { id: 22, name: "Ibeth Magali Churata Quispe", program: "Enfermería", image: "/img/docentes/ibeth_churata.png", titles: ["Licenciada en Enfermería"], specialization: ["Magister en administración con mención en gerencia de servicios de salud"], cursos: ["ACTIVIDADES EN EPIDEMIOLOGÍA / M-I", "BIOSEGURIDAD / N-III"," NUTRICIÓN Y DIETAS / M-III","ASISTENCIA AL USUARIO CON PATOLOGÍAS / N-IV"], email: "ibeth.churataq@iest.edu.pe", cvLink: "#" },
  { id: 23, name: "Ivan Diego Cutipa Quiso", program: "Enfermería", image: "/img/docentes/Ivan_cutipa.png", titles: ["Licenciado en Enfermería"], specialization: [""], cursos: ["ANATOMÍA FUNCIONAL / N-I", "EDUCACIÓN PARA LA SALUD / N-II","NUTRICIÓN Y DIETAS / N-III","PROCEDIMIENTOS INVASIVOS Y NO INVASIVOS / N-IV"], email: "ivan.cutipa@iest.edu.pe", cvLink: "#" },
  { id: 24, name: "Maritza Karina Herrera Pereira", program: "Enfermería", image: "/img/docentes/Karina_herrera.png", titles: ["Licenciada en Enfermería"], specialization: ["Maestría En Salud Publica con Mención en Gerencia de Servicios de Salud y Promoción de la Salud"], cursos: ["ACTIVIDADES EN SALUD COMUNITARIA / N-II", "ACTIVIDADES EN SALUD COMUNITARIA / T-II"], email: "maritza.herrerap.@iest.edu.pe", cvLink: "#" },
  { id: 25, name: "Lucía Ivonne Huaman Espinoza", program: "Enfermería", image: "/img/docentes/Lucia_huaman.png", titles: ["Licenciada en Enfermería"], specialization: [""], cursos: ["SALUD NIÑOY ADOLESCENTE / N-V", "ALUD NIÑOY ADOLESCENTE / T-V","ASISTENCIA EN FISIOTERAPIA Y REHABILITACIÓN / M-VI"], email: "lucia.huaman@iest.edu.pe", cvLink: "#" },
  { id: 26, name: "Cinthia Julissa Mamani Paricahua", program: "Enfermería", image: "/img/docentes/Cinthia_mamani.png", titles: ["Bachiller en Enfermería"], specialization: [""], cursos: ["ASISTENCIA EN INMUNIZACIONES / M-I","ASISTENCIA EN INMUNIZACIONES / N-I","ASISTENCIA EN FISIOTERAPIA Y REHABILITACIÓN / T-VI"], email: "cinthia.mamani@iest.edu.pe", cvLink: "#" },
  { id: 27, name: "Nestor Alex Mamani Vilca", program: "Enfermería", image: "/img/docentes/Nestor_mamani.png", titles: ["Cirujano Dentista"], specialization: [""], cursos: ["ACTIVIDADES EN SALUD COMUNITARIA / M-II", "ASISTENCIA EN SALUD BUCAL / M-VI", "ASISTENCIA EN SALUD BUCAL / N-VI","ASISTENCIA EN SALUD BUCAL / T-VI"], email: "nestor.mamani@iest.edu.pe", cvLink: "#" },
  { id: 28, name: "Lenna Medina Vega", program: "Enfermería", image: "/img/docentes/lenna-medina.png", titles: ["Licenciada en Obstetricia"], specialization: [""], cursos: ["BIOSEGURIDAD / M-III", "ATENCIÓN EN SALUD MATERNA / N-V","ATENCIÓN EN SALUD MATERNA / T-V"], email: "lenna.medina@iest.edu.pe", cvLink: "#" },
  
  { id: 29, name: "Carmen Justina Quilca Zapana", program: "Enfermería", image: "/img/docentes/Carmen_quilca.png", titles: ["Licenciada en Enfermería"], specialization: ["Salud Pública - Epidemiología"], cursos: ["DOCUMENTACIÓN EN SALUD / N-III", "ASISTENCIA BÁSICA HOSPITALARIA / M-III","ASISTENCIA BÁSICA HOSPITALARIA / T-IV"], email: "carmen.quilca@iest.edu.pe", cvLink: "#" },
  
  { id: 30, name: "Margoth Carolina Rojas Colca", program: "Enfermería", image: "/img/docentes/Margoth_rojas.png", titles: ["Licenciada en Biología"], specialization: [""], cursos: ["ASISTENCIA AL USUARIO CON PATOLOGÍAS / T-IV", "ASISTENCIA EN ADULTO MAYOR / N-V","ASISTENCIA EN ADULTO MAYOR / T-III"], email: "margoth.rojas@iest.edu.pe", cvLink: "#" },
  { id: 31, name: "Carmen Amparo Tapia Centellas", program: "Enfermería", image: "/img/docentes/Carmen_tapia.png", titles: ["Licenciada en Biología"], specialization: [""], cursos: ["ACTIVIDADES EN EPIDEMIOLOGÍA / N-I","ACTIVIDADES EN EPIDEMIOLOGÍA / T-I","MUESTRAS BIOLÓGICAS / N-IV","MUESTRAS BIOLÓGICAS / T-IV"], email: "carmen.tapia@iest.edu.pe", cvLink: "#" },
  { id: 32, name: "Henry Raul Tito Mamani", program: "Enfermería", image: "/img/docentes/Henry_tito.png", titles: ["Obstetra"], specialization: [""], cursos: ["ASISTENCIA EN LA ADMINISTRACIÓN DE MEDICAMENTOS / N-IV", "ASISTENCIA AL USUARIO ONCOLÓGICO / M-VI","ASISTENCIA AL USUARIO ONCOLÓGICO / N-VI"], email: "henry.titom@iest.edu.pe", cvLink: "#" },
  { id: 33, name: "Karem Lisbet Vélez Figueroa", program: "Enfermería", image: "/img/docentes/Karem_velez.png", titles: ["Licenciada en Enfermería"], specialization: [""], cursos: ["ANATOMÍA FUNCIONAL / M-I","ANATOMÍA FUNCIONAL / T-I","EDUCACIÓN PARA LA SALUD / M-II","PROCEDIMIENTOS INVASIVOS Y NO INVASIVOS / T-IV"], email: "karem.velez@iest.edu.pe", cvLink: "#" },
  { id: 34, name: "Yoly Tania Vizcarra Ticona", program: "Enfermería", image: "/img/docentes/yoly_vizcarra.png", titles: ["Bachiller en Enfermería"], specialization: [""], cursos: ["PRIMEROS AUXILIOS / M-I", "PRIMEROS AUXILIOS / N-I","ASISTENCIA AL USUARIO ONCOLÓGICO / T-VI "], email: "yoly.vizcarra@iest.edu.pe", cvLink: "#" },
  { id: 35, name: "Candelaria Ccalli Chino", program: "Enfermería", image: "/img/docentes/Candelaria_ccalli.png", titles: ["Licenciada en Enfermería"], specialization: [""], cursos: ["ACTIVIDADES EN SALUD PÚBLICA / T-II", "DOCUMENTACIÓN EN SALUD / M-III","ASISTENCIA EN LA ADMINISTRACIÓN DE MEDICAMENTOS / T-IV"], email: "candelaria.calli@iest.edu.pe", cvLink: "#" },
  { id: 36, name: "Sheyla Katherine Villanueva Valencia", program: "Enfermería", image: "/img/docentes/Sheyla_villanueva.png", titles: ["Licenciada en Enfermería"], specialization: [""], cursos: ["PRIMEROS AUXILIOS / T-I", "ACTIVIDADES EN SALUD PÚBLICA / M-I","COMPORTAMIENTO ÉTICO / T-V"], email: "sheyla.villanueva@iest.edu.pe", cvLink: "#" },

  // --- FARMACIA ---
  { id: 34, name: "Lucio Jose Blanco Luna", program: "Farmacia", image: "/img/docentes/Lucio_blanco.png", titles: ["Licenciado en Biología"], specialization: ["Evaluación de Impacto Ambiental"], cursos: ["ADMINISTRACIÓN FARMACÉUTICA / M- II", "ADMINISTRACIÓN FARMACÉUTICA / T-II"," ESTUDIO DE ENFERMEDADES Y SU TRATAMIENTO FARMACOLÓGICO I / T-III","ASPECTOS LEGALES EN LA INDUSTRIA FARMACÉUTICA / M-V"], email: "lucio.blanco@iest.edu.pe", cvLink: "#" },
  { id: 35, name: "Julio Waldir Curasi Cari", program: "Farmacia", image: "/img/docentes/Julio_curasi.png", titles: ["Licenciado en Biología"], specialization: ["Segunda especialidad en laboratorio clínico y análisis de biológicos"], cursos: ["Química Analítica", "Bioquímica"], email: "waldir.curasi@iest.edu.pe", cvLink: "#" },
  { id: 36, name: "Nancy Cusilayme Quispe", program: "Farmacia", image: "/img/docentes/Nancy_cusilayme.png", titles: ["Licenciado en Biología"], specialization: ["Ingeniería Ambiental"], cursos: [" ATENCIÓN DE MEDICAMENTOS ESENCIALES / M-I", " METODOS DE EXTRACCIÓN E IDENTIFICACIÓN / M-V"," PROCESAMIENTO DE PRODUCTOS GALÉNICOS, NATURALES, COSMÉTICOS Y AFINES / M-VI"], email: "nancy.cusilayme@iest.edu.pe", cvLink: "#" },
  { id: 37, name: "Ximena Paola Huaracha Loza", program: "Farmacia", image: "/img/docentes/Ximena_huaracha.png", titles: ["Cirujano Dentista"], specialization: ["Salud Pública"], cursos: ["ATENCIÓN DE MEDICAMENTOS ESENCIALES / T-I", "ATENCIÓN DE URGENCIAS EN UNA OFICINA FARMACÉUTICA / M-II","VENTA Y DISPENSACIÓN DE MEDICAMENTOS Y PRODUCTOS AFINES / N-III","VENTA Y DISPENSACIÓN DE PRODUCTOS NATURALES /N-V  "], email: "ximena.huaracha@iest.edu.pe", cvLink: "#" },
  { id: 38, name: "Celia Olivia Isia Perca", program: "Farmacia", image: "/img/docentes/placeholder.jpg", titles: ["Químico Farmacéutico"], specialization: [""], cursos: ["VENTA Y DISPENSACIÓN DE MEDICAMENTOS Y PRODUCTOS AFINES / T-III", "TÉCNICAS DE TRANSFORMACIÓN DE MATERIAS PRIMAS EN LA INDUSTRIA FARMACÉUTICA / M-V","NORMAS DE CONTROL DE CALIDAD EN LA INDUSTRIA FARMACÉUTICA / M-VI","NORMAS DE CONTROL DE CALIDAD EN LA INDUSTRIA FARMACÉUTICA / N-VI"], email: "celia.isia@iest.edu.pe", cvLink: "#" },
  { id: 39, name: "Yoseline Adriana Laura Calvo", program: "Farmacia", image: "/img/docentes/placeholder.jpg", titles: ["Licenciada en Biología"], specialization: ["Maestría en Gestión y Auditoría Ambiental"], cursos: ["ANÁLISIS MICROBIANO EN LA INDUSTRIA FARMACÉUTICA / T-II", "APLICACIÓN DE BASES FARMACOLÓGICAS DE LOS MEDICAMENTOS I / N-III","APLICACIÓN DE BASES FARMACOLÓGICAS DE LOS MEDICAMENTOS II / T-IV"], email: "yoseline.laura@iest.edu.pe", cvLink: "#" },
  { id: 40, name: "Jesus Michael Llahuilla Quispe", program: "Farmacia", image: "/img/docentes/Jesus_llahuilla.png", titles: ["Licenciado en Biología: Microbiología y laboratorio clínico"], specialization: [""], cursos: ["DOCUMENTOS CONTABLES EN UNA OFICINA FARMACÉUTICA / T-II", "DISPENSACIÓN DE MEDICAMENTOS EN EL SISTEMA DE SALUD / T-III","CLASIFICACIÓN DE MEDICAMENTOS / T-IV","CLASIFICACIÓN DE ACCIÓN FARMACOLÓGICA / N-VI"], email: "jesus.llahuilla@iest.edu.pe", cvLink: "#" },
  { id: 41, name: "Arnold Kevin Alvaro Mendoza Aranibar", program: "Farmacia", image: "/img/docentes/Arnold_mendoza.png", titles: ["Bachiller en Ciencias Biológicas (Mención Microbiología y Laboratorio Clínico)"], specialization: [""], cursos: [" ESTUDIO ESTRUCTURAL Y FUNCIONAL DEL SER HUMANO / T-I", "ESTUDIO DE ENFERMEDADES Y SU TRATAMIENTO FARMACOLÓGICO II / T-IV","COMPORTAMIENTO ÉTICO / M-V"," ASPECTOS LEGALES EN LA INDUSTRIA FARMACÉUTICA / N-V"], email: "arnold.mendoza@iest.edu.pe", cvLink: "#" },
  { id: 42, name: "Hugo Vilca Mamani", program: "Farmacia", image: "/img/docentes/Hugo_vilca.png", titles: ["Ingeniería Química"], specialization: [" Magister en Economía con mención en: gerencia de proyectos"], cursos: ["DOCUMENTOS CONTABLES EN UNA OFICINA FARMACÉUTICA / M-II","LINEAMIENTOS DE POLÍTICAS NACIONALES DE SALUD Y MEDICAMENTOS / M-II","TÉCNICAS DE TRANSFORMACIÓN DE MATERIAS PRIMAS EN LA INDUSTRIA FARMACÉUTICA / N-V","CLASIFICACIÓN DE ACCIÓN FARMACOLÓGICA / M-VI"], email: "hugo.vilca@iest.edu.pe", cvLink: "#" },
  { id: 43, name: "Liz Zuñiga Gonzales", program: "Farmacia", image: "/img/docentes/liz-zuñiga.png", titles: ["Bachiller en Enfermería"], specialization: [""], cursos: ["TÉCNICAS DE ADMINISTRACIÓN DE MEDICAMENTOS / M-I","TÉCNICAS DE ADMINISTRACIÓN DE MEDICAMENTOS / T-I","ATENCIÓN DE URGENCIAS EN UNA OFICINA FARMACÉUTICA / T-II"], email: "liz.zuniga@iest.edu.pe", cvLink: "#" },
  { id: 44, name: "Renan Dilton Hañari Quispe", program: "Farmacia", image: "/img/docentes/Renan_hañari.png", titles: ["Técnico en Farmacia/Médico Veterinario y Zootecnista"], specialization: ["Magister en Farmacología con Mención en Farmacología Experimental"], cursos: ["TESTUDIO DE ENFERMEDADES Y SU TRATAMIENTO FARMACOLÓGICO I / N-III"," TÉCNICAS DE TRANSFORMACIÓN DE RECURSOS NATURALES / T-IV","ELABORACIÓN DE FORMAS FARMACÉUTICAS / N-VI"], email: "renan_hanari@iest.edu.pe", cvLink: "#" },
  // --- TRANSVERSALES ---
  { id: 45, name: "Nancy Maritza Acero Cáceres", program: "Transversales", image: "/img/docentes/Nancy_acero.png", titles: ["Licenciado en Turismo"], specialization: [""], cursos: [" INTERPRETACIÓN Y PRODUCCIÓN DE TEXTOS", " LIDERAZGO Y TRABAJO EN EQUIPO","TÉCNICAS DE COMUNICACIÓN","LEGISLACIÓN E INSERCIÓN LABORAL"], email: "nancy.acero@iest.edu.pe", cvLink: "#" },
  { id: 46, name: "Mercedes Vanessa Alave Loza", program: "Transversales", image: "/img/docentes/Mercedes_alave.png", titles: ["Licenciada en Arte : Danza"], specialization: [""], cursos: ["CULTURA ARTISTICA"], email: "mercedes.alave@iest.edu.pe", cvLink: "#" },
  { id: 47, name: "Reggine Janeth Asillo Aguirre", program: "Transversales", image: "/img/docentes/Reggine_asillo.png", titles: ["Bachiller en Economia"], specialization: [""], cursos: ["FUNDAMENTOS DE INVESTIGACIÓN", " INVESTIGACIÓN E INNOVACIÓN TECNOLÓGICA","PROYECTO EMPRESARIAL"], email: "reggine.asillo@iest.edu.pe", cvLink: "#" },
  { id: 48, name: "Julio Alberto Castro Huayapa", program: "Transversales", image: "/img/docentes/Julio_castro.png", titles: ["Ingeniero de Sistemas"], specialization: ["Maestría en Ingeniería de Sistemas"], cursos: ["INFORMÁTICA / INTERNET", "ESTADÍSTICA GENERAL","OFIMÁTICA","LÓGICA Y FUNCIONES"], email: "julio.castro@iest.edu.pe", cvLink: "#" },
  { id: 49, name: "Jhon Ángel Núñez Gamarra", program: "Transversales", image: "/img/docentes/Jhon_nuñez.png", titles: ["Licenciado en Turismo"], specialization: [""], cursos: [" COMUNICACIÓN INTERPERSONAL", "COMUNICACIÓN INTERPERSONAL","COMUNICACIÓN EMPRESARIAL"], email: "jhon_nunez_gamarra@iest.edu.pe", cvLink: "#" },
  { id: 50, name: "Yony Marcelo Ojeda Challco", program: "Transversales", image: "/img/docentes/placeholder.jpg", titles: ["Bachiller Educación"], specialization: [""], cursos: ["TÉCNICAS DE COMUNICACIÓN", "INTERPRETACIÓN Y PRODUCCIÓN DE TEXTOS"], email: "yony.ojeda@iest.edu.pe", cvLink: "#" },
  { id: 51, name: "Kelly Dalia Ríos Sucasaca", program: "Transversales", image: "/img/docentes/placeholder.jpg", titles: ["Ingeniero Estadística e Informática"], specialization: [""], cursos: ["LÓGICA Y FUNCIONES", "ESTADÍSTICA GENERAL","INVESTIGACIÓN E INNOVACIÓN TECNOLÓGICA"], email: "kelly.rioss@iest.edu.pe", cvLink: "#" },
  { id: 52, name: "Luis Carlos Sotomayor Perez", program: "Transversales", image: "/img/docentes/Luis_sotomayor.png", titles: ["Bachiller en Ciencias de la Educación "], specialization: [""], cursos: ["Cultura Física y Deporte"], email: "luis.sotomayor@iest.edu.pe", cvLink: "#" },
  { id: 53, name: "Maribel Erika Cahuana Huichi", program: "Transversales", image: "/img/docentes/Luis_sotomayor.png", titles: ["Licenciada en administración y marketing"], specialization: [""], cursos: [" ORGANIZACIÓN Y CONSTITUCIÓN DE EMPRESAS"," LEGISLACIÓN E INSERCIÓN LABORAL"], email: "maribel.cahuanah@iest.edu.pe ", cvLink: "#" },
  { id: 54, name: "Norca Mayli Tisnado Hualpa", program: "Transversales", image: "/img/docentes/Norca_tisnado.png", titles: ["Licenciado en Administración"], specialization: [""], cursos: ["SOCIEDAD Y ECONOMIA EN LA GLOBALIZACIÓN"], email: "norca.tisnado@iest.edu.pe", cvLink: "#" },
  { id: 55, name: "Jhan Carlos Valencia Franco", program: "Transversales", image: "/img/docentes/jhan-valencia.png", titles: ["Ingeniero de Sistemas"], specialization: [""], cursos: ["LÓGICA Y FUNCIONES"," INVESTIGACIÓN E INNOVACIÓN TECNOLÓGICA","PROYECTOS DE INVESTIGACIÓN E INNOVACIÓN TECNOLÓGICA"," LIDERAZGO Y TRABAJO EN EQUIPO"], email: "jhan.valencia@iest.edu.pe", cvLink: "#" },
  { id: 56, name: "Adisson Sergio Villalta Quispe", program: "Transversales", image: "/img/docentes/Adisson_villalta.png", titles: ["Ingeniero Civil"], specialization: ["Seguridad"], cursos: ["INFORMÁTICA / INTERNET", "LIDERAZGO Y TRABAJO EN EQUIPO","ESTADÍSTICA GENERAL","FUNDAMENTOS DE INVESTIGACIÓN"], email: "adisson.villalta@iest.edu.pe", cvLink: "#" },
];

const TeacherCard = ({ teacher }: { teacher: Teacher }) => {
  return (
    <div className="group relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border border-slate-100">
      <div className="absolute inset-0">
        <Image 
          src={teacher.image || '/img/docente-placeholder.jpg'} 
          alt={teacher.name} 
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div 
          className="absolute inset-0 opacity-80 transition-opacity group-hover:opacity-40" 
          style={{ background: `linear-gradient(to top, ${COLORS.primary}, transparent)` }}
        />
      </div>

      {/* Info Base */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-20 transition-transform duration-500 group-hover:translate-y-full">
        <span 
          className="inline-block px-4 py-1.5 mb-3 text-[10px] font-black uppercase tracking-widest text-white rounded-xl shadow-lg"
          style={{ backgroundColor: COLORS.terracotta }}
        >
          {teacher.program === 'Enfermería' ? 'Enfermería Técnica' : teacher.program}
        </span>
        <h3 className="text-xl font-black text-white leading-tight uppercase drop-shadow-md">
          {teacher.name}
        </h3>
      </div>

      {/* Panel de Hover */}
      <div 
        className="absolute inset-0 p-8 flex flex-col justify-between text-white transform -translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 z-30 backdrop-blur-xl"
        style={{ backgroundColor: `${COLORS.primary}F2` }}
      >
        <div className="space-y-5 overflow-y-auto pr-2 custom-scrollbar">
          {/* Títulos */}
          <div>
            <div className="flex items-center gap-2 mb-2" style={{ color: COLORS.gold }}>
              <GraduationCap size={18} />
              <h4 className="font-black text-[10px] uppercase tracking-[0.2em]">Trayectoria</h4>
            </div>
            <ul className="text-slate-200 space-y-1 text-xs font-semibold">
              {teacher.titles.filter(t => t !== "").map((title, idx) => (
                <li key={idx} className="leading-tight text-white/90">• {title}</li>
              ))}
            </ul>
          </div>

          {/* CURSOS A CARGO (Nuevo Bloque) */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 mb-3" style={{ color: COLORS.gold }}>
              <BookOpen size={18} />
              <h4 className="font-black text-[10px] uppercase tracking-[0.2em]">Cursos a Cargo</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {teacher.cursos.map((curso, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-1 rounded-md text-[10px] font-bold border border-white/20 bg-white/10 text-[#D8A24C]"
                >
                  {curso}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Card */}
        <div className="space-y-3 pt-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/10 text-[#D8A24C]">
              <Mail size={14} />
            </div>
            <a href={`mailto:${teacher.email}`} className="text-[11px] font-bold hover:text-[#D8A24C] truncate transition-colors">
              {teacher.email}
            </a>
          </div>
          
          <a 
            href={teacher.cvLink}
            target="_blank"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-black text-xs uppercase tracking-tighter transition-all hover:bg-[#D8A24C] hover:text-[#1B355C] border border-[#D8A24C]"
            style={{ color: COLORS.gold }}
          >
            <FileText size={16} />
            Ver Curriculum Vitae
          </a>
        </div>
      </div>
    </div>
  );
};

export default function TeachersTeamSection() {
  const [activeProgram, setActiveProgram] = useState<ProgramType>('Contabilidad');
  const filteredTeachers = teachersData.filter(t => t.program === activeProgram);
  const programs: ProgramType[] = ['Contabilidad', 'Enfermería', 'Farmacia', 'Transversales'];

  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="text-center mb-20">
          <span 
            className="text-xs font-black uppercase tracking-[0.4em] mb-4 block" 
            style={{ color: COLORS.terracotta }}
          >
            Nuestro Potencial Humano
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter" style={{ color: COLORS.primary }}>
            PLANA <span style={{ color: COLORS.gold }}>DOCENTE</span>
          </h2>
          <div className="w-20 h-2 mx-auto rounded-full" style={{ backgroundColor: COLORS.gold }}></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {programs.map((p) => (
            <button
              key={p}
              onClick={() => setActiveProgram(p)}
              className={`py-4 px-10 rounded-2xl font-black text-xs uppercase tracking-widest transition-all
                ${activeProgram === p 
                  ? 'text-white shadow-2xl scale-105' 
                  : 'bg-slate-50 text-slate-400 hover:text-[#1B355C] hover:bg-white'}
              `}
              style={activeProgram === p ? { backgroundColor: COLORS.primary } : {}}
            >
              {p === 'Enfermería' ? 'Enfermería Técnica' : p}
            </button>
          ))}
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-20"
          >
            {filteredTeachers.map((teacher) => (
              <SwiperSlide key={teacher.id}>
                <TeacherCard teacher={teacher} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D8A24C;
          border-radius: 10px;
        }
        .swiper-pagination-bullet {
            background: #1B355C !important;
            opacity: 0.2;
        }
        .swiper-pagination-bullet-active {
            background: #D8A24C !important;
            opacity: 1;
        }
      `}</style>
    </section>
  );
}