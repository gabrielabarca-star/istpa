"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

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

  // Estilos de enlace: color naranja al hover y fondo redondeado
  const navLinkClasses = "transition-all duration-300 hover:text-[#C8663E] hover:bg-white/10 px-3 py-2 rounded-lg";
  
  // Estilos para los links dentro del menú hamburguesa (Sheet)
  const mobileLinkClasses = "text-white hover:text-[#C8663E] hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 block";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-primary/95 shadow-lg backdrop-blur-sm" : "bg-primary"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 relative">
        
        {/* 1. Logo a la Izquierda */}
        <div className="flex-shrink-0 z-10">
            <Link href="/" className="flex items-center gap-2 text-primary-foreground">
            <Image 
                src="/img/logotipo-altiplano.png" 
                alt="Logo" 
                width={500} 
                height={500} 
                className="h-16 w-auto object-contain" 
                priority 
            />
            </Link>
        </div>
        
        {/* 2. Navegación Centrada (Absoluta para estar justo en el medio) */}
        {/* Se muestra solo en pantallas medianas (md) en adelante */}
        <nav className="hidden md:flex items-center gap-6 text-lg font-medium text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link href="/nosotros" className={navLinkClasses}>
            Nosotros
          </Link>
          <Link href="/porque_istpa" className={navLinkClasses}>
            ¿Por qué ISTPA?
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger >
              <Button 
                variant="ghost" 
                // CORRECCIÓN: Se cambió el hover a naranja #C8663E
                className={`text-lg font-medium text-white hover:text-[#C8663E] hover:bg-white/10 px-3 py-2 rounded-lg focus-visible:ring-0 ${navLinkClasses}`}
              >
                Carreras
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#002a5d] text-white border-none shadow-xl">
              {/* Ajuste de color para los items del dropdown */}
              <DropdownMenuItem  className="hover:bg-slate-100 hover:text-[#C8663E] cursor-pointer text-[#002A5D]">
              <Link href="/farmacia" className={mobileLinkClasses}>Farmacia</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-slate-100 hover:text-[#C8663E] cursor-pointer text-[#002A5D]">
              <Link href="/farmacia" className={mobileLinkClasses} >Enfermería</Link>
              </DropdownMenuItem>
              <DropdownMenuItem  className="hover:bg-slate-100 hover:text-[#C8663E] cursor-pointer text-[#002A5D]">
              <Link href="/farmacia" className={mobileLinkClasses}>Contabilidad</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* 3. Botón de Menú "Oculto" a la Derecha (Visible siempre) */}
        <div className="flex-shrink-0 z-10 ml-auto">
            <Sheet>
            <SheetTrigger asChild>
                {/* Se eliminó md:hidden para que aparezca siempre */}
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-[#C8663E]">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Abrir menú</span>
                </Button>
            </SheetTrigger>
            
            {/* Contenido del Menú Lateral */}
            <SheetContent side="right" className="bg-[#1B355C] border-l-[#C8663E]/20 overflow-y-auto w-[300px] sm:w-[400px]">
                <SheetHeader className="mb-6">
                <SheetTitle className="text-left">
                    <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/img/logotipo-altiplano.png"
                        alt="Logo"
                        width={200}
                        height={200}
                        className="h-16 w-auto object-contain bg-white/10 p-2 rounded-lg"
                        priority
                    />
                    </Link>
                </SheetTitle>
                </SheetHeader>
                
                <div className="grid grid-cols-1 gap-8 text-lg w-full">
                
                {/* Sección 1 */}
                <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-lg text-[#C8663E] mb-2 uppercase tracking-wide border-b border-white/10 pb-1">Menú Principal</h3>
                    <Link href="/nosotros" className={mobileLinkClasses}>Nosotros</Link>
                    <Link href="/porque_istpa" className={mobileLinkClasses}>¿Por qué el Ies del Altiplano?</Link>
                </div>

                {/* Sección 2 */}
                <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-lg text-[#C8663E] mb-2 uppercase tracking-wide border-b border-white/10 pb-1">Carreras</h3>
                    <Link href="/farmacia" className={mobileLinkClasses}>Farmacia</Link>
                    <Link href="/enfermeria" className={mobileLinkClasses}>Enfermería</Link>
                    <Link href="/contabilidad" className={mobileLinkClasses}>Contabilidad</Link>
                </div>
                
                {/* Sección 3 */}
                <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-lg text-[#C8663E] mb-2 uppercase tracking-wide border-b border-white/10 pb-1">Comunidad</h3>
                    <Link href="#" className={mobileLinkClasses}>Intranet Alumnos</Link>
                    <Link href="/atencion_estudiante" className={mobileLinkClasses}>Atención al estudiante</Link>
                    <Link href="#" className={mobileLinkClasses}>Intranet Docentes</Link>
                    <Link href="/docentes" className={mobileLinkClasses}>Nuestra Plana Docente</Link>
                </div>
                
                {/* Sección 4 */}
                <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-lg text-[#C8663E] mb-2 uppercase tracking-wide border-b border-white/10 pb-1">Servicios</h3>
                    <Link href="/bienestar" className={mobileLinkClasses}>Bienestar y empleabilidad</Link>
                    <Link href="/topico" className={mobileLinkClasses}>Tópico</Link>
                    <Link href="/biblioteca" className={mobileLinkClasses}>Biblioteca</Link>
                    <Link href="/beca" className={mobileLinkClasses}>Becas</Link>
                </div>

                {/* Sección 5 */}
                <div className="flex flex-col gap-1 pb-10">
                    <h3 className="font-bold text-lg text-[#C8663E] mb-2 uppercase tracking-wide border-b border-white/10 pb-1">Trámites y Admisión</h3>
                    <Link href="/admision" className={mobileLinkClasses}>Admisión</Link>
                    <Link href="/modalidad_titulacion" className={mobileLinkClasses}>Titulación</Link>
                    <Link href="/Rumbo_titulo" className={mobileLinkClasses}>Rumbo al título</Link>
                    <Link href="/reincorporacion" className={mobileLinkClasses}>Reincorporación</Link>
                    <Link href="/traslados" className={mobileLinkClasses}>Traslados</Link>
                    <Link href="/transparencia" className={mobileLinkClasses}>Transparencia</Link>
                </div>

                </div>
            </SheetContent>
            </Sheet>
        </div>

      </div>
    </header>
  );
}