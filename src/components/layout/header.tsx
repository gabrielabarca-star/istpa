"use client";

import * as React from "react";
import { Menu, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // AJUSTE CLAVE: text-[13px] en pantallas medianas (xl), text-[15px] en gigantes (2xl)
  // Añadido 'whitespace-nowrap' para que los botones largos no se rompan en dos líneas
  const navLinkClasses = "transition-all duration-300 hover:text-[#C8663E] hover:bg-white/10 px-2 py-2 rounded-lg text-[13px] 2xl:text-[15px] font-medium text-white whitespace-nowrap block";
  const dropDownButtonClasses = "flex items-center gap-1 text-[13px] 2xl:text-[15px] font-medium text-white hover:text-[#C8663E] hover:bg-white/10 px-2 py-2 rounded-lg focus-visible:ring-0 whitespace-nowrap";
  
  const mobileLinkClasses = "text-white hover:text-[#C8663E] hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 block";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-primary/95 shadow-lg backdrop-blur-sm" : "bg-primary"
      }`}
    >
      {/* AJUSTE CLAVE: Usamos justify-between en lugar de flex-1 en las columnas para que no se pisen */}
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 gap-2 2xl:gap-6 w-full max-w-[1600px]">
        
        {/* 1. Logo (Asegurado con flex-shrink-0 para que nunca desaparezca) */}
        <div className="flex-shrink-0 z-10">
          <a href="/" className="flex items-center gap-2 text-primary-foreground">
            <img 
              src="/img/logo_2026.png" 
              alt="Logo ISTPA" 
              width={500} 
              height={500} 
              className="h-12 md:h-14 2xl:h-16 w-auto object-contain brightness-0 invert" 
            />
          </a>
        </div>
        
        {/* 2. Navegación Desktop (Se acopla al espacio sobrante) */}
        <nav className="hidden xl:flex flex-1 items-center justify-end 2xl:justify-center gap-0.5 2xl:gap-2">
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={dropDownButtonClasses}>
                Nosotros <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#002a5d] text-white border-none shadow-xl p-2 min-w-[200px]">
              <DropdownMenuItem asChild>
                <a href="/nosotros#HistoriaTimeline" className="w-full cursor-pointer focus:text-[#C8663E]">Historia</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/nosotros#CompanyInfo" className="w-full cursor-pointer focus:text-[#C8663E]">Misión y Visión</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/nosotros#CompanyInfo" className="w-full cursor-pointer focus:text-[#C8663E]">Valores y Principios</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/nosotros#TeamCarousel" className="w-full cursor-pointer focus:text-[#C8663E]">Plana Jerárquica</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/nosotros#InstitutionalOrgChart" className="w-full cursor-pointer focus:text-[#C8663E]">Organización Institucional </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="/porque_istpa" className={navLinkClasses}>
            ¿Por qué ISTPA?
          </a>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={dropDownButtonClasses}>
                Carreras <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#002a5d] text-white border-none shadow-xl p-2 min-w-[200px]">
              <DropdownMenuItem asChild>
                <a href="/enfermeria" className="w-full cursor-pointer focus:text-[#C8663E]">Enfermería</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/contabilidad" className="w-full cursor-pointer focus:text-[#C8663E]">Contabilidad</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={dropDownButtonClasses}>
                Admisión y Matrículas <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#002a5d] text-white border-none shadow-xl p-2 min-w-[200px]">
              <DropdownMenuItem asChild>
                <a href="/admision" className="w-full cursor-pointer focus:text-[#C8663E]">Admisión</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/matricula" className="w-full cursor-pointer focus:text-[#C8663E]">Matrícula</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/beca" className="w-full cursor-pointer focus:text-[#C8663E]">Becas</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={dropDownButtonClasses}>
                Transparencia <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#002a5d] text-white border-none shadow-xl p-2 min-w-[200px]">
              <DropdownMenuItem asChild>
                <a href="/documentos_gestion" className="w-full cursor-pointer focus:text-[#C8663E]">Documentos de Gestión</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/indicadores_academicos" className="w-full cursor-pointer focus:text-[#C8663E]">Indicadores Académicos</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/beca" className="w-full cursor-pointer focus:text-[#C8663E]">Recursos Económicos</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/libro_reclamaciones" className="w-full cursor-pointer focus:text-[#C8663E]">Libro de reclamaciones</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={dropDownButtonClasses}>
                Trámites <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#002a5d] text-white border-none shadow-xl p-2 min-w-[200px]">
              <DropdownMenuItem asChild>
                <a href="/modalidad_titulacion" className="w-full cursor-pointer focus:text-[#C8663E]">Titulación</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/Rumbo_titulo" className="w-full cursor-pointer focus:text-[#C8663E]">Rumbo al Título Profesional</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/reincorporacion" className="w-full cursor-pointer focus:text-[#C8663E]">Reincorporación</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/traslados" className="w-full cursor-pointer focus:text-[#C8663E]">Traslados</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={dropDownButtonClasses}>
                Contáctanos <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#002a5d] text-white border-none shadow-xl p-2 min-w-[200px]">
              <DropdownMenuItem asChild>
                <a href="/contactanos" className="w-full cursor-pointer focus:text-[#C8663E]">Contáctanos</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/traslados" className="w-full cursor-pointer focus:text-[#C8663E]">Traslados</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={dropDownButtonClasses}>
                Servicios <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#002a5d] text-white border-none shadow-xl p-2 min-w-[200px]">
              <DropdownMenuItem asChild>
                <a href="/bienestar" className="w-full cursor-pointer focus:text-[#C8663E]">Bienestar y Empleabilidad</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/topico" className="w-full cursor-pointer focus:text-[#C8663E]">Tópico</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/bibioteca" className="w-full cursor-pointer focus:text-[#C8663E]">Biblioteca</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/atencion_estudiante" className="w-full cursor-pointer focus:text-[#C8663E]">Atención al estudiante</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
              <a href="https://iestpa.jedu.pe/alumno/entrar" className="w-full cursor-pointer focus:text-[#C8663E]" >Bolsa de Trabajo</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={dropDownButtonClasses}>
                Otras Páginas <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#002a5d] text-white border-none shadow-xl p-2 min-w-[200px]">
              <DropdownMenuItem asChild>
                <a href="https://iestpa.jedu.pe/docente/entrar" className="w-full cursor-pointer focus:text-[#C8663E]">Intranet Docentes</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://iestpa.jedu.pe/alumno/entrar" className="w-full cursor-pointer focus:text-[#C8663E]">Intranet Estudiantes</a>
              </DropdownMenuItem>
              
            </DropdownMenuContent>
          </DropdownMenu>
          
        </nav>

        {/* 3. Menú Móvil */}
        <div className="xl:hidden flex-shrink-0 z-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-[#C8663E]">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="bg-[#1B355C] border-l-[#C8663E]/20 overflow-y-auto w-[300px] sm:w-[400px]">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-left">
                  <a href="/" className="flex items-center gap-2">
                    <img
                      src="/img/logo_2026.png"
                      alt="Logo ISTPA"
                      width={200}
                      height={200}
                      className="h-16 w-auto object-contain bg-white/10 p-2 rounded-lg brightness-0 invert"
                    />
                  </a>
                </SheetTitle>
              </SheetHeader>
              
              <div className="grid grid-cols-1 gap-8 text-lg w-full">
                {/* Sección Institucional Móvil */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg text-[#C8663E] mb-2 uppercase tracking-wide border-b border-white/10 pb-1">
                    Institucional
                  </h3>
                  <a href="/nosotros#HistoriaTimeline" className={mobileLinkClasses}>Historia</a>
                  <a href="/nosotros#CompanyInfo" className={mobileLinkClasses}>Misión</a>
                  <a href="/nosotros#CompanyInfo" className={mobileLinkClasses}>Visión</a>
                  <a href="/nosotros#CompanyInfo" className={mobileLinkClasses}>Valores</a>
                  <a href="/nosotros#CompanyInfo" className={mobileLinkClasses}>Principios</a>
                  <a href="/nosotros#TeamCarousel" className={mobileLinkClasses}>Plana Jerárquica</a>
                  <a href="/nosotros#InstitutionalOrgChart" className={mobileLinkClasses}>Organización Institucional </a>
                  <a href="/porque_istpa" className={mobileLinkClasses}>¿Por qué el I.E.S DEL Altiplano?</a>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg text-[#C8663E] mb-2 uppercase tracking-wide border-b border-white/10 pb-1">Carreras</h3>
                  <a href="/enfermeria" className={mobileLinkClasses}>Enfermería</a>
                  <a href="/contabilidad" className={mobileLinkClasses}>Contabilidad</a>
                </div>
                
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg text-[#C8663E] mb-2 uppercase tracking-wide border-b border-white/10 pb-1">Comunidad</h3>
                  <a href="https://iestpa.jedu.pe/alumno/entrar" className={mobileLinkClasses}>Intranet Alumnos</a>
                  <a href="/atencion_estudiante" className={mobileLinkClasses}>Atención al estudiante</a>
                  <a href="https://iestpa.jedu.pe/docente/entrar" className={mobileLinkClasses}>Intranet Docentes</a>
                  <a href="/docentes" className={mobileLinkClasses}>Nuestra Plana Docente</a>
                  <a href="/indicadores_academicos" className={mobileLinkClasses}>Indicadores Académicos</a>
                </div>
                
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg text-[#C8663E] mb-2 uppercase tracking-wide border-b border-white/10 pb-1">Servicios</h3>
                  <a href="/bienestar" className={mobileLinkClasses}>Bienestar y empleabilidad</a>
                  <a href="/topico" className={mobileLinkClasses}>Tópico</a>
                  <a href="/biblioteca" className={mobileLinkClasses}>Biblioteca</a>
                  <a href="/beca" className={mobileLinkClasses}>Becas</a>
                </div>

                <div className="flex flex-col gap-1 pb-10">
                  <h3 className="font-bold text-lg text-[#C8663E] mb-2 uppercase tracking-wide border-b border-white/10 pb-1">Trámites y Admisión</h3>
                  <a href="/admision" className={mobileLinkClasses}>Admisión</a>
                  <a href="/matricula" className={mobileLinkClasses}>Matrícula</a>
                  <a href="/modalidad_titulacion" className={mobileLinkClasses}>Titulación</a>
                  <a href="/Rumbo_titulo" className={mobileLinkClasses}>Rumbo al título</a>
                  <a href="/reincorporacion" className={mobileLinkClasses}>Reincorporación</a>
                  <a href="/traslados" className={mobileLinkClasses}>Traslados</a>
                  <a href="/transparencia" className={mobileLinkClasses}>Transparencia</a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}