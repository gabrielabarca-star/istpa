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
  SheetDescription, // <-- Importamos SheetDescription
  SheetTrigger,
  
} from "@/components/ui/sheet";

const Link = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>((props, ref) => (
  <a ref={ref} {...props} />
));
Link.displayName = "Link";

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

  const navLinkClasses = "transition-all duration-300 hover:text-[#C8663E] hover:bg-white/10 px-2 py-2 rounded-lg text-[13px] 2xl:text-[15px] font-medium text-white whitespace-nowrap block";
  const dropDownButtonClasses = "flex items-center gap-1 text-[13px] 2xl:text-[15px] font-medium text-white hover:text-[#C8663E] hover:bg-white/10 px-2 py-2 rounded-lg focus-visible:ring-0 whitespace-nowrap";
  const mobileLinkClasses = "text-white hover:text-[#C8663E] hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 block";

  return (
    <header
      suppressHydrationWarning // <-- Evita que extensiones del navegador causen pantallas rojas de error
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-primary/95 shadow-lg backdrop-blur-sm" : "bg-primary"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 gap-2 2xl:gap-6 w-full max-w-[1600px]">
        
        {/* 1. Logo */}
        <div className="flex-shrink-0 z-10">
          <Link href="/" className="flex items-center gap-2 text-primary-foreground">
            <img 
              src="/img/logo_2026.png" 
              alt="Logo ISTPA" 
              width={500} 
              height={500} 
              className="h-12 md:h-14 2xl:h-16 w-auto object-contain brightness-0 invert" 
            />
          </Link>
        </div>
        
        {/* 2. Navegación Desktop */}
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
                <a href="/docentes" className="w-full cursor-pointer focus:text-[#C8663E]">Plana Docente</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/nosotros#InstitutionalOrgChart" className="w-full cursor-pointer focus:text-[#C8663E]">Organización Institucional </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/porque_istpa" className={navLinkClasses}>
            ¿Por qué ISTPA?
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={dropDownButtonClasses}>
                Carreras <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#002a5d] text-white border-none shadow-xl p-2 min-w-[200px]">
              <DropdownMenuItem asChild>
                <Link href="/enfermeria" className="w-full cursor-pointer focus:text-[#C8663E]">Enfermería</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contabilidad" className="w-full cursor-pointer focus:text-[#C8663E]">Contabilidad</Link>
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
                <Link href="/admision" className="w-full cursor-pointer focus:text-[#C8663E]">Admisión</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/matricula" className="w-full cursor-pointer focus:text-[#C8663E]">Matrícula</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/beca" className="w-full cursor-pointer focus:text-[#C8663E]">Becas</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={dropDownButtonClasses}>
                Transparencia Institucional <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#002a5d] text-white border-none shadow-xl p-2 min-w-[200px]">
              <DropdownMenuItem asChild>
                <Link href="/documentos_gestion" className="w-full cursor-pointer focus:text-[#C8663E]">Documentos de Gestión</Link>
              </DropdownMenuItem>
              
              <DropdownMenuItem asChild>
                <Link href="/indicadores_academicos" className="w-full cursor-pointer focus:text-[#C8663E]">Indicadores Académicos</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/beca" className="w-full cursor-pointer focus:text-[#C8663E]">Recursos Económicos</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/libro_reclamaciones" className="w-full cursor-pointer focus:text-[#C8663E]">Libro de reclamaciones</Link>
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
                <Link href="/modalidad_titulacion" className="w-full cursor-pointer focus:text-[#C8663E]">Titulación</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/Rumbo_titulo" className="w-full cursor-pointer focus:text-[#C8663E]">Rumbo al Título Profesional</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/reincorporacion" className="w-full cursor-pointer focus:text-[#C8663E]">Reincorporación</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/traslados" className="w-full cursor-pointer focus:text-[#C8663E]">Traslados</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tupa" className="w-full cursor-pointer focus:text-[#C8663E]">TUPA</Link>
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
                <Link href="/contactanos" className="w-full cursor-pointer focus:text-[#C8663E]">Contáctanos</Link>
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
                <Link href="/bienestar" className="w-full cursor-pointer focus:text-[#C8663E]">Bienestar y Empleabilidad</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/topico" className="w-full cursor-pointer focus:text-[#C8663E]">Tópico</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/asistencia_social" className="w-full cursor-pointer focus:text-[#C8663E]">Asistencia Social</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/topico" className="w-full cursor-pointer focus:text-[#C8663E]">Psicopedagógico</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/biblioteca" className="w-full cursor-pointer focus:text-[#C8663E]">Biblioteca</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/empleabilidad_seguimiento" className="w-full cursor-pointer focus:text-[#C8663E]">Empleabilidad y Seguimiento al Egresado</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/atencion_estudiante" className="w-full cursor-pointer focus:text-[#C8663E]">Atención al estudiante</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="https://iestpa.jedu.pe/alumno/entrar" target="_blank" rel="noopener noreferrer" className="w-full cursor-pointer focus:text-[#C8663E]">
                  Bolsa de Trabajo
                </Link>
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
                <Link href="https://iestpa.jedu.pe/docente/entrar" target="_blank" rel="noopener noreferrer" className="w-full cursor-pointer focus:text-[#C8663E]">Intranet Docentes</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="https://iestpa.jedu.pe/alumno/entrar" target="_blank" rel="noopener noreferrer" className="w-full cursor-pointer focus:text-[#C8663E]">Intranet Estudiantes</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blog" className="w-full cursor-pointer focus:text-[#C8663E]">Noticias</Link>
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
                <SheetTitle className="text-left" asChild>
                  <Link href="/" className="flex items-center gap-2">
                    <img
                      src="/img/logo_2026.png"
                      alt="Logo ISTPA"
                      width={200}
                      height={200}
                      className="h-16 w-auto object-contain bg-white/10 p-2 rounded-lg brightness-0 invert"
                    />
                  </Link>
                </SheetTitle>
                {/* SOLUCIÓN: Este SheetDescription oculto evita el error de hidratación en componentes Radix */}
                <SheetDescription className="sr-only">
                  Menú de navegación de ISTPA
                </SheetDescription>
              </SheetHeader>
              
              <div className="grid grid-cols-1 gap-6 text-base sm:text-lg w-full">
                
              <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg text-[#C8663E] mb-2 uppercase tracking-wide border-b border-white/10 pb-1">
                    Nosotros
                  </h3>
                  <Link href="/nosotros" className={mobileLinkClasses}>Historia</Link>
                  <Link href="/nosotros" className={mobileLinkClasses}>Misión y Visión</Link>
                  <Link href="/nosotros" className={mobileLinkClasses}>Valores y Principios </Link>
                  <Link href="/nosotros" className={mobileLinkClasses}>Plana Jerárquica </Link>
                  <Link href="/docentes" className={mobileLinkClasses}>Plana Docente </Link>
                  <Link href="/nosotros" className={mobileLinkClasses}>Organigrama Institucional</Link>
                </div>

                <div className="flex flex-col gap-1">
                  <Link href="/porque_istpa" className="font-bold text-lg text-[#C8663E] uppercase tracking-wide border-b border-white/10 pb-1 hover:text-white transition-colors">
                    ¿Por qué ISTPA?
                  </Link>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg text-[#C8663E] mb-2 uppercase tracking-wide border-b border-white/10 pb-1">
                    Carreras
                  </h3>
                  <Link href="/enfermeria" className={mobileLinkClasses}>Enfermería</Link>
                  <Link href="/contabilidad" className={mobileLinkClasses}>Contabilidad</Link>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg text-[#C8663E] mb-2 uppercase tracking-wide border-b border-white/10 pb-1">
                    Admisión y Matrículas
                  </h3>
                  <Link href="/admision" className={mobileLinkClasses}>Admisión</Link>
                  <Link href="/matricula" className={mobileLinkClasses}>Matrícula</Link>
                  <Link href="/beca" className={mobileLinkClasses}>Becas</Link>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg text-[#C8663E] mb-2 uppercase tracking-wide border-b border-white/10 pb-1">
                    Transparencia Institucional
                  </h3>
                  <Link href="/documentos_gestion" className={mobileLinkClasses}>Documentos de Gestión</Link>
                  
                  <Link href="/indicadores_academicos" className={mobileLinkClasses}>Indicadores Académicos</Link>
                  <Link href="/beca" className={mobileLinkClasses}>Recursos Económicos</Link>
                  <Link href="/libro_reclamaciones" className={mobileLinkClasses}>Libro de reclamaciones</Link>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg text-[#C8663E] mb-2 uppercase tracking-wide border-b border-white/10 pb-1">
                    Trámites
                  </h3>
                  <Link href="/modalidad_titulacion" className={mobileLinkClasses}>Titulación</Link>
                  <Link href="/tupa" className={mobileLinkClasses}>TUPA</Link>
                  <Link href="/Rumbo_titulo" className={mobileLinkClasses}>Rumbo al Título Profesional</Link>
                  <Link href="/reincorporacion" className={mobileLinkClasses}>Reincorporación</Link>
                  <Link href="/traslados" className={mobileLinkClasses}>Traslados</Link>
                </div>

                <div className="flex flex-col gap-1">
                  <Link href="/contactanos" className="font-bold text-lg text-[#C8663E] uppercase tracking-wide border-b border-white/10 pb-1 hover:text-white transition-colors">
                    Contáctanos
                  </Link>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg text-[#C8663E] mb-2 uppercase tracking-wide border-b border-white/10 pb-1">
                    Servicios
                  </h3>
                  <Link href="/bienestar" className={mobileLinkClasses}>Bienestar y Empleabilidad</Link>
                  <Link href="/topico" className={mobileLinkClasses}>Tópico</Link>
                  <Link href="/asistencia_social" className={mobileLinkClasses}>Asistencia Social</Link>
                  <Link href="/biblioteca" className={mobileLinkClasses}>Biblioteca</Link>
                  <Link href="/empleabilidad_seguimiento" className={mobileLinkClasses}>Empleabilidad y Seguimiento al Egresado</Link>
                  <Link href="/biblioteca" className={mobileLinkClasses}>Psicopedagogía</Link>
                  <Link href="/atencion_estudiante" className={mobileLinkClasses}>Atención al estudiante</Link>
                  <Link href="https://iestpa.jedu.pe/alumno/entrar" target="_blank" rel="noopener noreferrer" className={mobileLinkClasses}>
                    Bolsa de Trabajo
                  </Link>
                </div>
                
                <div className="flex flex-col gap-1 pb-10">
                  <h3 className="font-bold text-lg text-[#C8663E] mb-2 uppercase tracking-wide border-b border-white/10 pb-1">
                    Otras Páginas
                  </h3>
                  <Link href="https://iestpa.jedu.pe/docente/entrar" target="_blank" rel="noopener noreferrer" className={mobileLinkClasses}>Intranet Docentes</Link>
                  <Link href="https://iestpa.jedu.pe/alumno/entrar" target="_blank" rel="noopener noreferrer" className={mobileLinkClasses}>Intranet Estudiantes</Link>
                  <Link href="/blog" className={mobileLinkClasses}>Noticias</Link>
                </div>

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}