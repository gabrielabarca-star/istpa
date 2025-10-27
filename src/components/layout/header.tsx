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

  const navLinkClasses = "transition-colors hover:text-secondary";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-primary/95 shadow-lg backdrop-blur-sm" : "bg-primary"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-primary-foreground">
        <Image src="/img/logoblanco.png" alt="Logo" width={500} height={500} className="h-60 w-60 object-contain" priority />
        </Link>
        <nav className="hidden items-center gap-6 text-lg font-medium text-primary-foreground md:flex">
          <Link href="/nosotros" className={navLinkClasses}>
            Nosotros
          </Link>
          <Link href="/porque_istpa" className={navLinkClasses}>
            ¿Por qué ISTPA?
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={`text-lg font-medium text-primary-foreground ${navLinkClasses}`}>
                Carreras
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/farmacia">Farmacia</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/enfermeria">Enfermería</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contabilidad">Contabilidad</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
              <Link href="/" className="flex items-center gap-2">
      <Image
        src="/img/logoazul1.png"
        alt="Logo"
        width={200}
        height={200}
        className="h-25 w-25 object-contain"
        priority
      />
    </Link>
    </SheetTitle>
    </SheetHeader>
    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-8 text-lg w-full overflow-y-auto max-h-[80vh] md:overflow-y-visible md:max-h-none pr-2">
    {/* Columna 1 */}
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-xl">Menú Principal</h3>
      <Link href="/nosotros" className="hover:text-secondary">Nosotros</Link>
      <Link href="/porque_istpa" className="hover:text-secondary">¿Por qué Carrión?</Link>
      <h3 className="font-semibold text-xl mt-4">Carreras</h3>
      <Link href="/farmacia" className="hover:text-secondary pl-4">Farmacia</Link>
      <Link href="/enfermeria" className="hover:text-secondary pl-4">Enfermería</Link>
      <Link href="/contabilidad" className="hover:text-secondary pl-4">Contabilidad</Link>
      <h3 className="font-semibold text-xl mt-4">Más Opciones</h3>
      <Link href="/transparencia" className="hover:text-secondary pl-4">Transparencia</Link>
      <Link href="#" className="hover:text-secondary pl-4">Servicios</Link>
    </div>
      
    {/* Columna 2 */}
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-xl">Alumnos</h3>
      <Link href="#" className="hover:text-secondary pl-4">Intranet</Link>
      <Link href="#" className="hover:text-secondary pl-4">Atención al estudiante</Link>
      <h3 className="font-semibold text-xl mt-4">Docentes</h3>
      <Link href="#" className="hover:text-secondary pl-4">Intanet</Link>
      <h3 className="font-semibold text-xl">Servicio Estudiantil</h3>
      <Link href="#" className="hover:text-secondary pl-4">Bienestar y empleabilidad</Link>
      <Link href="#" className="hover:text-secondary pl-4">Topico</Link>
      <Link href="#" className="hover:text-secondary pl-4">Biblioteca</Link>

    </div>
    {/* Columna 3 */}
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-xl">Egresados</h3>
      <Link href="#" className="hover:text-secondary pl-4">Titulación</Link>
      <Link href="#" className="hover:text-secondary pl-4">Rumbo al título profesional</Link>
      <Link href="#" className="hover:text-secondary pl-4">Ceremonia de graduación</Link>
      <Link href="#" className="hover:text-secondary pl-4">Encuentro de Egresados</Link>
      <Link href="#" className="hover:text-secondary pl-4">Egresados con éxito</Link>
      <h3 className="font-semibold text-xl">Modalidad de Ingreso</h3>
      <Link href="#" className="hover:text-secondary pl-4">Admisión</Link>
      <Link href="#" className="hover:text-secondary pl-4">Traslado</Link>
    </div>
  </div>
  </SheetContent>
</Sheet>
      </div>
    </header>
  );
}